import * as fs from 'fs';
import * as puppeteer from 'puppeteer';

import { getPathsFromArgumentsAndCheckIntegrity } from './params';
import { PokemonModel } from '../../src/sqlz/models/pokemon';
import { scrapPokemonDetails } from './details';

interface Pokemon extends Partial<PokemonModel> {
  url: string;
}

function getPokemonsFromFile (jsonFilePath: string): Partial<Pokemon>[] {
  const fileContent = fs.readFileSync(jsonFilePath, 'utf8');
  const pokemons = JSON.parse(fileContent) as any as Partial<Pokemon>[];
  return pokemons;
}

async function fetchAllPokemons(): Promise<void> {
  const { inputJsonFilePath, outputFilePath } = getPathsFromArgumentsAndCheckIntegrity();
  const pokemons = getPokemonsFromFile(inputJsonFilePath);

  const [pokemon0] = pokemons;

  const browser = await puppeteer.launch();

  const results = await Promise.all(
    [pokemon0].map(async (pokemon) => {
      const page = await browser.newPage();
      try {
        await page.goto(pokemon.url);
        await page.waitForSelector('.tableaustandard.ficheinfo tbody tr>th>a[title="Type"]', { timeout: 20000 });
        const pokemonDetails = await scrapPokemonDetails(page);
        return {
          success: true,
          pokemonDetails: {
            ...pokemonDetails,
            nationalNb: pokemon.nationalNb,
            isGalarForm: pokemon.isGalarForm,
          },
        };
      } catch (error) {
        console.log('---------------------');
        console.log(`Error for pokemon ${pokemon.frName} at ${pokemon.url}`);
        console.log(error);
        return { success: false, error};
      }
    }),
  );
  console.log(JSON.stringify({results}, null, 2));
  console.log('All done');
  process.exit();
}

process.once('SIGINT', () => {
  process.exit(0);
});

try {
  fetchAllPokemons();
} catch (err) {
  console.error(err);
  process.exit();
}