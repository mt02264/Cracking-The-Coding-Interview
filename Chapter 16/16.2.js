/*
    6.2 Word Frequencies: Design a method to find the frequency of occurrences of any given word in a 
    book. What if we were running this algorithm multiple times? 
*/

function getWordMap(book){
    let wordMap = new Map();
    for (let w of book){
        wordMap.get(w) ? wordMap.set(w, wordMap.get(w)+1) : wordMap.set(w, 1);
    }
    return wordMap;
}

function wordFrequencies(book, word){
    return [word, getWordMap(book).get(word)];
}

console.log(wordFrequencies(["this", "is", "my", "name", "what", "this", "this", "what"], "this"));