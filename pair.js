export const generateWordPairs = (arr, depth = 1) => {
    const pairs = {};
  arr.forEach((word) => {
    pairs[word] = [];
  }) 
  let arrForSelection = arr.concat(arr.slice(0, depth));

  for (let i = 0; i < arrForSelection.length; i++) {
    let word = arrForSelection[i];
    if (i === arr.length) break;
    if (word in pairs) {
      pairs[word].push(arrForSelection.slice(i + 1, i + (depth + 1)));
    }
  }
  return pairs;
}