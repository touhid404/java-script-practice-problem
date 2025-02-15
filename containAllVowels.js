function containsAllVowels(sentence, vowels) {
    sentence = sentence.toLowerCase();
    let vowelSet = new Set(vowels); 
    let foundVowels = new Set();

    for (let char of sentence) {
        if (vowelSet.has(char)) {
            foundVowels.add(char);
        }
        if (foundVowels.size === vowelSet.size) {
            return true; 
        }
    }

    return false; 
}

const vowels = "aeiou";
const sentence = "This is a unique demo.";

if (containsAllVowels(sentence, vowels)) {
    console.log("The sentence contains all vowels.");
} else {
    console.log("The sentence does not contain all vowels.");
}
