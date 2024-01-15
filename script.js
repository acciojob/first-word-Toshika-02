function firstWord(s) {
     if (s === '') {
    return s; // Return the entire string if it's empty
  }

  let firstWord = '';
  let foundSpace = false;

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];

    if (currentChar === ' ' && !foundSpace) {
      foundSpace = true; // Set flag when the first space is encountered
    } else if (!foundSpace) {
      firstWord += currentChar; // Append characters to firstWord until a space is found
    }
  }

  return firstWord || s;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
