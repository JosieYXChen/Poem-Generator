import { generateWordPairs } from "./pair.js";
import { getRandomNum } from "./random.js";
import { writeLine } from "./line.js";
import { parseText } from "./parse.js";

export const generatePoem = (corpus, lineNum = 0, wordNum = lineNum) => {
  const parsed = parseText(corpus);
  const wordPairs = generateWordPairs(parsed);
  let poem = '';
    for (let i = 0; i < lineNum; i++) {
      let eachLine = writeLine(wordPairs, getRandomNum(wordNum, wordNum/2));
      poem += eachLine[0].toUpperCase() + eachLine.slice(1) + '\n';
    }
  return poem;
}
