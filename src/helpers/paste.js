export default function divideTextDataToCells(textData) {
  if (!textData) {
    return undefined;
  }
  const textDataFiltered = textData.replace(/\r/g, '');
  const rowsArray = textDataFiltered.split('\n');
  const cellsArray = rowsArray.map(row => row.split('\t'));
  return cellsArray;
}
