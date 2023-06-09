import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const randNum = Math.floor(Math.random() * 10) + 1

const getGuess = () => {
    rl.question('Guess a number between 1 and 10: ', (ans) => {
        const playerGuess = Number(ans);

        if (playerGuess > randNum) {
            console.log('You guess is too high! Try again.');
            getGuess();
        } else if (playerGuess < randNum) {
            console.log('Your guess is too low! Try again.');
            getGuess();
        } else if (playerGuess === randNum) {
            console.log('Congratulations, you guessed the right number!');
            rl.close();
        } else {
            console.log('Invalid input. Please enter a number.');
            getGuess();
        }
    })    
}

getGuess()