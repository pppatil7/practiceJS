//print all even numbers from 0 to 100

let number = 0;

for (count = 0; count <= 100; count++) {
    if (number % 2 === 0) {
        console.log(number);
    }
    number++;
}

//game number
let guessNum = 10;
let userNum = prompt("Guess the game number: ");
while (userNum != guessNum) {
    userNum = prompt("you entered wrong number, Guess again: ");
}

console.log("congratulations, you guessed correct number");