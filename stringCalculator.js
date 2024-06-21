function add(numbers) {
  if (numbers == "") {
    return 0;
  } else if (!numbers.includes(",")) {
    return parseInt(numbers);
  }else{
    const arr = numbers.split(",")
    return arr.reduce((acc,curr) => acc + parseInt(curr),0)
  }
}

export default add;
