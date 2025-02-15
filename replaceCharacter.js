// function replaceCharacters(sentence, replaceCharacter) {
//     return sentence.replace(/x/g, replaceCharacter); // Replace all 'x' with replaceCharacter
// }

// const sentences = "hellox hix hhssfxxfh fhhfdh rre";
// const r = "U";

// console.log(replaceCharacters(sentences, r));


function replaceCharacters(sentence, replaceCharacter) {
    let newSentence = '';
    let words = sentence.split(' '); 

    for (let i = 0; i < words.length; i++) {
        let newWord = '';
        for (let j = 0; j < words[i].length; j++) {
            if (words[i][j] === 'x') {
                newWord += replaceCharacter; 
            } else {
                newWord += words[i][j];
            }
        }
        newSentence += newWord + ' '; 
    }

    return newSentence.trim();
}

const sentences = "hellox hix hhssfxxfh fhhfdh rre";
const r = "U";

console.log(replaceCharacters(sentences, r));
