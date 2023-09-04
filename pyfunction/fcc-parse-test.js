function convertToInteger(str) {
    const a = parseInt(str);
    return a;
  }
  
  convertToInteger("56");
  console.log(convertToInteger("56"))

function convertToBinary(str) {
    const a = parseInt(str, 2)
    return a;
}

const convert = convertToBinary("10011");
console.log(convert);
