# Poem-Generator
This is a web app that generates poems based on Alanis Morsette's "Hand In My Pocket." Viewers can choose how many lines they would like to generate. The length of each line is randomly generated based on a reasonable range.
The JavaScript code block is modulized into 6 parts: 
1) "parse.js" parses the lyrics of a song into an array. 
2) "pair.js" links each word in the original lyrics to the word(s) right after, producing sets of word pairs. This function takes a parameter named "depth" with a default value 1. This parameter can be changed by programmer to generate sets of words that are longer than two.
3) "line.js" writes one line of poem. Firstly, it picks a random word as the first word. Secondly, it writes the second word by randomly choosing one of the first word's subsequent words. Thirdly, it writes the third word by randomly picking one of the words that is subsequent to the second word. In this way, "line.js" writes the line word by word until the line reaches certain length. Programmer can change the word number of each line. Moreover, this function can write more than one word each time depending on the parameter "depth" in "pair.js."
4) "poem.js" repeats "line.js" till the poem reaches certain number of lines. It also makes the number of words in each line a random number.
5) "random.js" is a helper function that generates a random number;
6) "script.js" takes the lyrics of "Hand In My Pocket" on the HTML page. It parses the lyrics and generates word sets. It is supposed to take the number of lines input by viewers and generate a poem. Then displays the poem at the bottum of the same page.
