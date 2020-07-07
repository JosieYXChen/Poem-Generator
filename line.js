import { getRandomNum } from "./random.js"

export const writeLine = (textObj, wordNum) => {
  let iniWords = Object.keys(textObj);
  let iniWordsMax = iniWords.length;
  let initialWord = iniWords[getRandomNum(iniWordsMax)];
  let depth = 1;
  if (Array.isArray(textObj[initialWord][0])) depth = textObj[initialWord][0].length;
  let line = initialWord + ' ';
  let currentWord = initialWord;

  if (depth === 1) {
    let nextWordMax = textObj[currentWord].length;
    let nextWordIdx = getRandomNum(nextWordMax);
    let nextWord = textObj[currentWord][nextWordIdx];

    for (let i = 0; i < wordNum - 1; i++) {
      let nextWordMax = textObj[currentWord].length;
      let nextWordIdx = getRandomNum(nextWordMax);
      let nextWord = textObj[currentWord][nextWordIdx];
      line += nextWord + ' ';
      currentWord = nextWord;
    }
  }

  if (depth > 1) {
    for (let i = 0; i < (wordNum - 1)/depth; i++) {
      let nextWordMax = textObj[currentWord].length;
      let nextWordIdx = getRandomNum(nextWordMax);
      let nextWords = textObj[currentWord][nextWordIdx];
      if (i === Math.floor((wordNum - 1)/depth)) {
        for (let j = 0; j < (wordNum - 1) % depth; j++) {
          line += nextWords[j] + ' ';
        }
      } 
      else {
        for (let j = 0; j < depth; j++) {
          line += nextWords[j] + ' ';
        }
      }
      currentWord = nextWords[depth - 1];
    }
  }
  return line.slice(0, -1);
}