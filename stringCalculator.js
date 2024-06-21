function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  let delimiter = ",";
  if (numbers.startsWith("//")) {
    const delimiterIndx = numbers.indexOf("\n");
    delimiter = numbers.substring(2, delimiterIndx);
    numbers = numbers.substring(delimiterIndx + 1);
  }

  const regexDelimiter = new RegExp(`[${delimiter}\n]`, "g");
  numbers = numbers.replace(regexDelimiter, ",");
  const numArray = numbers.split(",");
  return numArray.reduce((sum, num) => sum + parseInt(num), 0);
}

export default add;
