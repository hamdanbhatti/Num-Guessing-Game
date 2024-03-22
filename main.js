#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Computer will Generate the Number
let continueGame = true;
while (continueGame) {
    const compGuess = Math.floor(Math.random() * 10 + 1);
    const userGuess = await inquirer.prompt([
        {
            message: "Enter the Number within (1-10)",
            type: "number",
            name: "num",
        },
    ]);
    if (userGuess.num === compGuess) {
        console.log("You Guess the write number");
        console.log(`Computer Guess : ${compGuess}\nYour Guess : ${userGuess.num}`);
        console.log(`\nThanks For Playing.. This Game Created by ${chalk.green("Muhammad Hamdan")}`);
        continueGame = false;
    }
    else {
        console.log("Wrong Guess");
        const exit = await inquirer.prompt([
            {
                message: `Enter to continue\nReply "n" to stop the game`,
                type: "confirm",
                name: "gameExit",
            },
        ]);
        if (exit.gameExit === false) {
            continueGame = false;
            console.log(`Thanks For Playing.. This Game Created by ${chalk.green("Muhammad Hamdan")}`);
        }
        else {
            console.log("Let Guess Wisely");
        }
    }
}
