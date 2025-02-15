function containVowels(sentence, vowels) {
  let available = false;
  sentence = sentence.toLowerCase();
  for (let i = 0; i < sentence.length; i++) {
    if (vowels.includes(sentence[i])) {
      available = true;
      break;
    } else {
      available = false;
    }
  }
  return available;
}

const vowels = "aeiou";
const sentence = "hhdhdh kfkskfsas ";

if (containVowels(sentence, vowels)) {
  console.log("The sentence contains at least one vowel.");
} else {
  console.log("The sentence does not contain any vowel.");
}
