function pigLatin(input) {

  const wordArray = input.split("");

  let firstLetter = wordArray[0];

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

