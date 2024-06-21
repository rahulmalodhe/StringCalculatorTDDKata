function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  let delimiter = ",";
  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    delimiter = numbers.substring(2, delimiterEndIndex);
    numbers = numbers.substring(delimiterEndIndex + 1);
  }

  const regexDelimiter = new RegExp(`[${delimiter}\n]`, "g");
  numbers = numbers.replace(regexDelimiter, ",");

  const numArray = numbers.split(",");

  const negatives = numArray.filter((num) => parseInt(num) < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }

  return numArray.reduce((sum, num) => sum + parseInt(num), 0);
}

export default add;
