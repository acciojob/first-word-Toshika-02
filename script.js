function firstWord(s) {
  // your code here
      if(s==='')
		  return s;

	 let fWord = '';
	 let space = false;
	 for(let i of s){
		 const ch = s[i]

		 if(ch==='' && !space){
			 space = true;
		 }else if(!space){
			   fWord += ch;
		 }
	 }
	  return fWord || s;
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
