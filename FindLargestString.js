function longestString(str){
    const words = str.split(' ');
    let longestwords = '';
    for(const word of words){
        if(word.length > longestwords.length){

            longestwords = word;


        }
    }
    return longestwords;
}



const sentence = "hello my name is riyadh .i  love programming";

console.log(longestString(sentence)); 