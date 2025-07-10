function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let random_num = getRandomNumber(1, 100);
let guessedCorrectly = false;

while (!guessedCorrectly) {
  let input = prompt("Enter a number between 1 and 100");
  let n = parseInt(input);

  if (isNaN(n)) {
    alert("Please enter a valid number.");
    continue;
  }

  if (n >= 1 && n <= 100) {
    if (n === random_num) {
      alert("🎉 Congratulations! You guessed the number.");
      guessedCorrectly = true;
    } else if (n < random_num) {
      alert("Try a higher number.");
    } else {
      alert("Try a lower number.");
    }
  } else {
    alert("Invalid number! Please enter a number between 1 and 100.");
  }
}
