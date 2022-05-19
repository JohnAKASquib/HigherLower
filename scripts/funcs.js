//declaring all necessary variables
let validGuess = false;
let guesses = [],
  num,
  range,
  p;
while (validGuess === false) {
  //prompt user for range
  range = prompt("Enter a number to determine the range for the guess:");
  //if range is NaN or less than 1 we go again
  if (isNaN(range) === true || range <= 0) {
    alert("That's not a valid number, try again");
  } else {
    //if it is a number but it is a decimal we'll round it
    if (Number(range) % 1 != 0) {
      range = Math.round(Number(range));
    }
    //once were all good we break the loop, set the random number, and set the HTML text accordingly
    validGuess = true;
    num = Math.floor(Math.random() * Number(range)) + 1;
    p = document.getElementById("p-guess");
    p.innerText = `Guess a number between 1 and ${range}`;
  }
}
//console.log(`The random number is ${num} & the range is ${range}`); this was just for bug checking

function checkGuess() {
  //grab our HTML elements first
  let guess = document.getElementsByName("guess")[0].value;
  // console.log(`Guess is ${guess} and Num is ${num}`); for bug checking
  //if the function determines the guess isn't valid we'll just return
  if (validateGuess(guess) == false) return;
  //if the function determines the guess is a duplicate we'll just return
  if (isDuplicateGuess(guess) == true) return;
  guesses.push(guess); //add the current guess to the array
  let p = document.getElementsByClassName("response")[0];
  //set the innerText of p based off of the guess and random number
  if (guess > num) {
    p.innerText = "Try a lower number";
  } else if (guess < num) {
    p.innerText = "Try a higher number";
  } else if (guess == num) {
    p.innerText = `You got it! It took you ${
      guesses.length
    } tries and your guesses were ${stringifyGuesses()}`;
  }
  //console.log(p); bug checking
}

function isDuplicateGuess(guess) {
  //the find method will return undefined if it doesn't find the guess, so if it's not undefined that means the user already guessed the number
  if (guesses.find((number) => number === guess) != undefined) {
    alert(`You already guessed ${guess}`);
    return true;
  } else return false;
}
function validateGuess(guess) {
  // console.log(`Inside validateGuess guess is ${guess} and range is ${range}`); bug checking
  if (Number(guess) > range) {
    alert("Your guess cannot be larger than the max number");
    return false;
  } else if (Number(guess) < 1) {
    alert("Your guess cannot be lower than 1");
    return false;
  } else if (isNaN(guess)) {
    alert("Your guess must be a number");
    return false;
  }
  return true;
}

function stringifyGuesses() {
  let guessesString = "";
  //loop through and add the guesses from the array to the string
  for (let i = 0; i < guesses.length; i++) {
    guessesString += guesses[i];
    //we only add the ", " for all guesses but the last
    if (i < guesses.length - 1) guessesString += ", ";
  }
  //console.log(guessesString); bug checking
  return guessesString;
}
