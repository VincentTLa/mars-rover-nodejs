export function handleCoordinates(input) {
  if (!input) {
    console.log('Seems like you left an empty field. Please try again\n');
    return false;
  }

  const re = /^[0-9 ]+$/; // Regex that checks for only digits and a space
  const coordinates = input.trim(); // Trimming any trailing spaces

  if (!re.test(coordinates)) {
    console.log('Only positive numbers are allowed in these fields. Please try again\n');
    return false;
  }

  const newArray = coordinates.split(' '); // Splits the string into an array i.e. ["5", "5"]

  if (newArray.length !== 2) {
    console.log('Only two numbers are allowed in the field! Please try again\n');
    return false;
  }

  const newNumArray = newArray.map(Number); // newNumArray changes the values in array to numbers i.e [5, 5]
  return newNumArray;
}

export function handleStartingPosition(input) {
  if (!input) {
    console.log('Seems like you left an empty field. Please try again\n');
    return false;
  }

  const re = /^\d+ \d+ [NESWnesw]$/; // Regex that checks for two numbers and compass points
  const coordinates = input.trim(); // Trimming any trailing spaces

  if (!re.test(coordinates)) {
    console.log('Only positive numbers and the letters N,E,S,W are allowed.Please try again\n');
    return false;
  }

  const newArray = coordinates.split(' '); // Splits the string into an array i.e. ["5", "5"]
  const convertedArray = newArray.map((item) => {
    const number = parseInt(item, 10);
    return isNaN(number) ? item : number;
  });
  return convertedArray;
}

export function handleDirections(input) {
  if (!input) {
    console.log('Seems like you left an empty field. Please try again\n');
    return false;
  }

  // Regex that checks for only LRM and allows for space in string
  const re = /^[LRM]+$/;
  // Replaces the spaces in the string input if there are any
  const formattedInput = input.replace(/[\s]/g, '');
  if (!re.test(formattedInput)) {
    console.log('Please only enter L,R or M. Try again.');
    return false;
  }
  // Splits the instructions into an array of char
  return formattedInput.split('');
}
