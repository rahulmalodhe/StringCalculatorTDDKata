function add(numbers) {
  if (numbers == "") {
    return 0;
  } else if (!numbers.includes(",")) {
    return parseInt(numbers);
  }
}

export default add;
