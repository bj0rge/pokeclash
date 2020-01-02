export interface Type {
  id: string;
  name: string;
  typeEfficiencies?: TypeEfficiency[];
}

interface TypeEfficiency {
  id: string;
  name: string;
  weakness: Weakness;
}

interface Weakness {
  defensiveTypeId: string;
  offensiveTypeId: string;
  coefficient: number;
}

function reshapeTypeEfficiency (
  typeEfficiency: any,
): TypeEfficiency {
  if (!typeEfficiency) {
    return;
  }

  return {
    ...reshapeType(typeEfficiency),
    weakness: {
      defensiveTypeId: typeEfficiency.weakness.defensiveTypeId,
      offensiveTypeId: typeEfficiency.weakness.offensiveTypeId,
      coefficient: typeEfficiency.weakness.coefficient,
    },
  };
}

export function reshapeType (
  type: any,
  includeEfficiency: boolean = true,
): Type {
  if (!type) {
    return null;
  }

  if (!includeEfficiency) {
    return {
      id: type.id,
      name: type.name,
    };
  }

  const hasTypeEfficiencies =
    type.typeEfficiencies &&
    type.typeEfficiencies.length;
  const typeEfficiencies = hasTypeEfficiencies
    ? type.typeEfficiencies.map(reshapeTypeEfficiency)
    : undefined;

  return {
    id: type.id,
    name: type.name,
    typeEfficiencies,
  };
}