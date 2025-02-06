function firstWord(s) {
    if(s=="" & s!==" "){
        return s;
    }
    let words = s.split(" "); 

    return words[0]
  }
  const s = prompt("Enter String:");
  alert(firstWord(s));
  
  
  