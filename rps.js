import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const choices = ['rock', 'paper', 'scissors']

const getCompSelec = () => {
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex];
}

const getWinner = (userSelec, compSelec) => {
  if (userSelec === compSelec) {
    return "it's a tie!"
  }

  if (
    (userSelec === 'rock' && compSelec === 'scissors') ||
    (userSelec === 'scissors' && compSelec === 'paper') ||
    (userSelec === 'paper' && compSelec === 'rock')
  ) {
    return 'You win!'
  } else {
    return 'Computer wins!'
  }
}

const startGame = () => {
  rl.question('Choose rock, paper, or scissors: ', (userSelec) => {
    if (!choices.includes(userSelec)) {
      console.log('Invalid choice. Please choose rock, paper, or scissors.')
      startGame()
      return
    }

    const compSelec = getCompSelec()
    console.log('Computer chose: ' + compSelec)

    const result = getWinner(userSelec, compSelec)
    console.log(`${result}`)

    rl.close()
  })
}

startGame()
