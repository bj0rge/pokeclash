function getPreviousElementSiblingUntil(domElement, tagName) {
  const previousElementSibling = domElement.previousElementSibling;
  const previousSiblingTagName = previousElementSibling.tagName;
  if (previousSiblingTagName === tagName) {
      return previousElementSibling;
  }
  return getPreviousElementSiblingUntil(previousElementSibling, tagName);
}

const tables = Array.from(
  document.querySelectorAll(
    '.tableaustandard.sortable.jquery-tablesorter',
  ),
).filter(
  (table) =>
  getPreviousElementSiblingUntil(table, 'H2')
    .innerText
    .startsWith('Dans les jeux principaux'),
  );

const trs = tables.map((table) =>
  Array.from(
    table.querySelectorAll('tbody tr')
  )).flat();

const moves = trs.map(tr => {
  const [capacity, type, category, power, precision, pp] = tr.querySelectorAll('td');
  return {
      name: capacity.innerText,
      url: capacity.querySelector('a').href,
      type: type.querySelector('a').title.split(' ')[0],
      category: category.querySelector('img').alt.split(' ')[2],
      power: power.innerText.replace(/\*/g, ''),
      precision: precision.innerText.replace(/\*/g, ''),
      pp: pp.innerText.replace(/\*/g, ''),
  };
});
