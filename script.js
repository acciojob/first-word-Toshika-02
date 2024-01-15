function firstWord(str) {
  if (str === '') {
    return str; // Return the entire string if it's empty
  }

  let firstWord = '';
  let foundSpace = false;

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];

    if (currentChar === ' ' && !foundSpace) {
      foundSpace = true; // Set flag when the first space is encountered
    } else if (!foundSpace) {
      firstWord += currentChar; // Append characters to firstWord until a space is found
    }
  }

  return firstWord || str; // Return firstWord if not empty, otherwise return the entire string
}


// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(str));
