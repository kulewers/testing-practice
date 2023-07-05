function caesarCipher(string, shift) {
  let charCode = [];
  for (let i = 0; i < string.length; i++) {
    charCode.push(string.charCodeAt(i));
  }
  let returnString = "";
  for (code of charCode) {
    if (code >= 65 && code <= 90) {
      returnString += String.fromCharCode(((code - 65 + shift) % 26) + 65);
    } else if (code >= 97 && code <= 122) {
      returnString += String.fromCharCode(((code - 97 + shift) % 26) + 97);
    } else {
      returnString += String.fromCharCode(code);
    }
  }
  return returnString;
}

module.exports = caesarCipher;
// turn each letter to it's code and put into an array
// if in range of 65 to 90, subtract 65, find mod 26 and add 65 back in
// do the same for range of 97 to 122 but with 97
