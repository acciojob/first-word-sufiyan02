function firstWord(s) {
  // your code here
	   return "";
  }

  const firstSpaceIndex = str.indexOf(" ");

  if (firstSpaceIndex === -1) {
    return str;
  } else {
    return str.substring(0, firstSpaceIndex);
  }
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
