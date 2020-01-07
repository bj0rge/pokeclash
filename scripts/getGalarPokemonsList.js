// https://www.pokepedia.fr/Liste_des_Pok%C3%A9mon_dans_l%27ordre_du_Pok%C3%A9dex_de_Galar

const tables = document.querySelectorAll('.tableaustandard');
let previousGalarNbTd = null;
const pokemons = [];

for (const table of tables) {
  const trs = table.querySelectorAll('tbody tr');
  for (const tr of trs) {
    const tds = tr.querySelectorAll('td');
    let galarNbTd, imgTd, frNameTd, enNameTd;
    if (tds.length === 7) {
      [galarNbTd, imgTd, frNameTd, enNameTd] = tds;
      previousGalarNb = galarNbTd;
    } else if (tds.length === 6) {
      [imgTd, frNameTd, enNameTd] = tds;
      galarNbTd = previousGalarNb;
    } else if (tds.length === 0) {
      break;
    } else {
      console.log(tds.length);
      throw new Error('Not handled nb of rows');
    }
    const galarNb = galarNbTd.innerText;
    const imgA = imgTd.querySelector('a');
    const nationalNb = imgA.title.split('n°')[1];
    const img = imgA.querySelector('img');
    const imgUrl = img.src;
    const frNameA = frNameTd.querySelector('a')
    const frName = frNameA.text;
    const url = frNameA.href;
    const enName = enNameTd.querySelector('a').text;

    const isGalarForm = nationalNb.includes(' ');
    const pokemon = { galarNb, nationalNb: isGalarForm ? nationalNb.split(' ')[0] : nationalNb, imgUrl, frName, url, enName, isGalarForm };
    pokemons.push(pokemon);
  }
}