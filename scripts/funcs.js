num = Math.floor(Math.random() * 20) + 1;
console.log(`The random number is ${num}`);

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
