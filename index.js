#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const guessNumbers = await inquirer.prompt([{
        message: "Enter your guess number between 1-6:",
        type: "number",
        name: "userGuessNumber"
    }]);
console.log(randomNumber);
if (guessNumbers.userGuessNumber === randomNumber) {
    console.log("Bravo!You guess a right number");
}
else {
    console.log("You guessed a wrong number!");
}
;
