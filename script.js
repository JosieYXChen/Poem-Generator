import { generatePoem } from "./poem.js";

let lineNum = document.querySelector("#lineNum").value;

function logging() {
  console.log(lineNum);
}

const myButton = document.querySelector("#myButton");
myButton.addEventListener("click", logging(), false);


const corpus = document.querySelector("#myLyrics").innerHTML;
const outputSection = document.querySelector('#output');
const outputElement = document.createElement("output");
let outputText = generatePoem(corpus, lineNum);
outputElement.innerHTML = outputText;
outputSection.appendChild(outputElement);