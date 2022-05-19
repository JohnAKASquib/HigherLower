let validGuess = false,
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
console.log(`The random number is ${num} & the range is ${range}`);

function checkGuess() {
  //grab our HTML elements first
  let guess = document.getElementsByName("guess")[0].value;
  let p = document.getElementsByClassName("response")[0];
  console.log(`Guess is ${guess} and Num is ${num}`); //this was just for big checking
  //set the innerText of p based off of the guess and random number
  if (guess > num) {
    p.innerText = "Try a lower number";
  } else if (guess < num) {
    p.innerText = "Try a higher number";
  } else if (guess == num) {
    p.innerText = "You got it!";
  }
  console.log(p); //bug checking
}
