export interface Pokemon {
  id: string;
  galarNb: number;
  nationalNb: number;
  isGalarForm: boolean;
  imgUrl: string;
  frName: string;
  enName: string;
}


export function reshapePokemon (
  pokemon: any,
): Pokemon {
  if (!pokemon) {
    return null;
  }

  return {
    id: pokemon.id,
    galarNb: pokemon.galarNb,
    nationalNb: pokemon.nationalNb,
    isGalarForm: pokemon.isGalarForm,
    imgUrl: pokemon.imgUrl,
    frName: pokemon.frName,
    enName: pokemon.enName,
  };
}
