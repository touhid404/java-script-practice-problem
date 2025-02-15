function capsFirstcharacter(sentence){
    let words = sentence.split(' ');
    let finalSentence= "";
    // console.log(words);
    for (let i = 0; i < words.length;i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        finalSentence += words[i] + " ";
    }
    return finalSentence.trim();
    
}

sentence = "hello hi my name is riyadh";
console.log(capsFirstcharacter(sentence));