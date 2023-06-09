import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const rollDice = () => Math.floor(Math.random() * 6) + 1

const getRoll = () => {
    rl.question('Press "r" to roll the dice: ', (input) => {
      if (input.toLowerCase() !== 'r') {
        console.log('Invalid input. Please press "r" to roll the dice.')
        getRoll()
        return
      }
      
    const userRoll = rollDice();
    const compRoll = rollDice();

    console.log(`You rolled a ${userRoll}`);
    console.log(`The computer rolled a ${compRoll}`);

    if (userRoll > compRoll) {
      console.log('You win!');
    } else if (userRoll < compRoll) {
      console.log('Computer wins!');
    } else {
      console.log("It's a tie!");
    }

    rl.close();
  });
};

getRoll();