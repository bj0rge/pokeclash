// https://www.pokepedia.fr/Table_des_types#Tableau_r.C3.A9capitulatif_des_faiblesses_et_r.C3.A9sistances_de_chaque_type

const upperFirst = (string) => {
  return string ? string.charAt(0).toUpperCase() + string.slice(1) : ''
}

const table = Array.from(document.querySelectorAll('.tableaustandard.centre')).find(tbl => tbl.previousElementSibling.previousElementSibling.querySelector('.mw-headline').innerText === 'Tableau général');
const orderedTypes = Array.from(table.querySelectorAll('tr')[1].querySelectorAll('td img')).map(img => img.alt);
const [,,...defensiveTypes] = Array.from(table.querySelectorAll('tr'))

const weaknessesArray = defensiveTypes.map((defensiveType) => {
  const [,...weaknessCells] = Array.from(defensiveType.querySelectorAll('td'))
  const weaknesses = weaknessCells.reduce((accumulator, weaknessCell, index) => {
      const classes = Array.from(weaknessCell.classList);
      if (classes.includes('standard')) return accumulator;
      return [...accumulator, {type: orderedTypes[index], value: values[classes[0]] }];
  }, []);
  const defensiveTypeName = defensiveType.querySelector('td a img').alt;
  return {defensiveType: defensiveTypeName, weaknesses};
});

const weaknesses = weaknessesArray.map(wk => ({
  defensiveType: upperFirst(wk.defensiveType),
  weaknesses: wk.weaknesses.map(w => ({
      type: upperFirst(w.type),
      value: w.value,
  })),
}));