function add(numbers) {
  if (numbers == "") {
    return 0;
  } else if (numbers.length == 1) {
    return parseInt(numbers);
  } else if (numbers.includes("\n")) {
    const arr = numbers.replace(/\n/g, ",");
    const newarr = arr.split(",");
    return newarr.reduce((acc, curr) => acc + parseInt(curr), 0);
  } else {
    if (numbers.includes("\n")) {
    }
    const arr = numbers.split(",");
    return arr.reduce((acc, curr) => acc + parseInt(curr), 0);
  }
}

export default add;
