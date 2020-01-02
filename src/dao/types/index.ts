import { Type as TypeModel } from '../../sqlz/models/type';
import { Type, reshapeType } from './reshapers';

const MINIMAL_NB_TRAINERS = 2;

type TrainerWithTypes = {
    trainer: string;
    types: [Type, Type],
};

function concat (x, y) {
  return x.concat(y);
}

function flatMap (array, mapper) {
  return array.map(mapper).reduce(concat, []);
}

function getRandomArbitrary(max: number): number {
  return Math.floor(Math.random() * (max + 1));
}

function getRandomArbitraryExcluding(
  max: number,
  excludingNumbers: number[] = [],
): number {
  if (excludingNumbers.some(nb => nb > max)) {
    throw new Error(`Some numbers to exclude (${excludingNumbers}) are over the max ${max}`);
  }

  if (excludingNumbers.length > max) {
    throw new Error(`Impossible to get a random number with every possibility excluded`);
  }

  let rand: number;
  do {
    rand = getRandomArbitrary(max);
  } while (excludingNumbers.includes(rand));
  return rand;
}

export async function findAll(): Promise<Type[]> {
  const types = await TypeModel
    .findAll({
      include: [{
        model: TypeModel,
        as: 'typeEfficiencies',
      }],
    });
  return types.map(reshapeType);
}

async function findAllExcluding(
  typesIdsToExclude: string[],
): Promise<Type[]> {
  const types = await TypeModel.findAll({
    where: {
      id: { $notIn: typesIdsToExclude },
    },
    include: [{
      model: TypeModel,
      as: 'typeEfficiencies',
    }],
  });
  return types.map(reshapeType);
}

function getIsTypeWeakness(
  typeToTest: Type,
  typesToCheck: Type[],
): boolean {
  const typesToCheckIds: string[] = typesToCheck.map((typeToCheck) => typeToCheck.id);
  const typeToTestWeaknessesIds: string[] = typeToTest.typeEfficiencies
    .reduce((accumulator, typeEfficiency) => {
      if (typeEfficiency.weakness.coefficient === 2) {
        return [...accumulator, typeEfficiency.id];
      }
      return accumulator;
    }, []);

  return typeToTestWeaknessesIds.some(
    (typeToTestWeaknessId) => typesToCheckIds.includes(typeToTestWeaknessId),
  );
}

function getTypeWithNoWeakness(
  availableTypesForTrainer: Type[],
  alreadyAttributedTypes: Type[],
  alreadyTriedIndexes: number[],
) {
  const rand = getRandomArbitraryExcluding(availableTypesForTrainer.length - 1, alreadyTriedIndexes);
  const typeAttempt = availableTypesForTrainer[rand];

  if (getIsTypeWeakness(typeAttempt, alreadyAttributedTypes)) {
    return getTypeWithNoWeakness(
      availableTypesForTrainer,
      alreadyAttributedTypes,
      [...alreadyTriedIndexes, rand],
    );
  }
  return typeAttempt;
}

async function findTypesForTrainer(
  trainerName: string,
  existingTrainersWithTypes: TrainerWithTypes[],
): Promise<TrainerWithTypes> {
  const alreadyAttributedTypes = flatMap(existingTrainersWithTypes, (trainerWithType) => {
    return trainerWithType.types;
  });
  const alreadyAttributedTypesIds = alreadyAttributedTypes.map((type) => type.id);

  const availableTypesForTrainer = await findAllExcluding(alreadyAttributedTypesIds);
  const rand1 = getRandomArbitraryExcluding(availableTypesForTrainer.length - 1);
  const firstType = availableTypesForTrainer[rand1];

  const isTypeWeakness = getIsTypeWeakness(
    firstType,
    flatMap(
      existingTrainersWithTypes,
      (trainerWithType => trainerWithType.types),
    ),
  );

  let secondType: Type;
  if (!isTypeWeakness) {
    const rand2 = getRandomArbitraryExcluding(availableTypesForTrainer.length - 1, [rand1]);
    secondType = availableTypesForTrainer[rand2];
  } else {
    secondType = getTypeWithNoWeakness(
      availableTypesForTrainer,
      alreadyAttributedTypes,
      [rand1],
    );
  }

  return {
    trainer: trainerName,
    types: [firstType, secondType],
  };
}

export async function findTypesForTrainers(
  trainerNames: string[],
): Promise<TrainerWithTypes[]> {
  const nbTrainers = trainerNames.length;
  if (nbTrainers < MINIMAL_NB_TRAINERS) {
    throw new Error('At least 2 trainers needed');
  }

  const trainersWithTypes: TrainerWithTypes[] = [];
  for (const trainerName of trainerNames) {
    const trainerWithTypes = await findTypesForTrainer(trainerName, trainersWithTypes);
    trainersWithTypes.push(trainerWithTypes);
  }

  return trainersWithTypes.map((trainerWithTypes) => ({
    trainer: trainerWithTypes.trainer,
    types: [
      reshapeType(trainerWithTypes.types[0], false),
      reshapeType(trainerWithTypes.types[1], false),
    ],
  }));
}
