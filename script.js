function firstWord(s) {
  // your code here
 if (!str) {
    return "";
  }

  const words = str.split(" ");

  if (words.length === 0) { //Handles cases where string might have only spaces
      return "";
  }

  return words[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
