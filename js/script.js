function isVowel(firstLetter) {
  if (firstLetter  === "a") {
    return true;
  } else if (firstLetter === "e") {
    return true;
  } else if (firstLetter === "i") {
    return true;
  } else if (firstLetter === "o") {
    return true;
  } else if (firstLetter === "u") {
  } else {
    return false;
  }  
}

function pigLatin(input) {

  const wordArray = input.split("");

  let firstLetter = wordArray[0];

  if (firstLetter === "q") {
  console.log("our code for the third rule");
  } else if (isVowel(firstLetter)) {
  console.log("our code for the first rule");
  } else {
  console.log("our code for our consonants");
  }
}  

