enum PokemonType {
  Acier = 'Acier',
  Combat = 'Combat',
  Dragon = 'Dragon',
  Eau = 'Eau',
  Électrik = 'Électrik',
  Fée = 'Fée',
  Feu = 'Feu',
  Glace = 'Glace',
  Insecte = 'Insecte',
  Normal = 'Normal',
  Plante = 'Plante',
  Poison = 'Poison',
  Psy = 'Psy',
  Roche = 'Roche',
  Sol = 'Sol',
  Spectre = 'Spectre',
  Ténèbres = 'Ténèbres',
  Vol = 'Vol',
}

type PokemonDetails = {
  types: PokemonType[];
};


async function scrapPokemonTypes (page: any): Promise<PokemonType[]> {
  const types = await page.evaluate(() => {
    return Array.from(
      document.querySelector(
        '.tableaustandard.ficheinfo tbody tr>th>a[title="Type"]',
      ).parentNode.parentNode.querySelectorAll('td a'),
    ).map(
      (a: HTMLElement) =>
        a.title.replace(/ \(type\)/g, '') as PokemonType,
    );
  });

  return types;
}

export async function scrapPokemonDetails (page: any): Promise<PokemonDetails> {
  const types = await scrapPokemonTypes(page);
  return { types };
}