function firstWord(s) {
  // your code here

  let words = s.split(" "); 

  if (words.length === 0) { 
    return "";
  }
  return words[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));


