function firstWord(s) {
    if(s=="" & s!==" "){
        return s;
    }
    let words = s.split(" "); 
    if(words[0] == ''){
        return words[1]
    }
    return words[0]
  }
  const s = prompt("Enter String:");
  alert(firstWord(s));
  
  
  