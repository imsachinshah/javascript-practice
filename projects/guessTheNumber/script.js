let randomNumber = parseInt(Math.random() * 100)

const userInput = document.getElementById('guessField')
let submitButton = document.querySelector('#subt')
const result = document.querySelector('.resultParas')

const p = document.createElement('p')

let guesses = document.querySelector('.guesses')
let lowOrHi = document.querySelector('.lowOrHi')
let previousGuesses = []
let numberOfGuesses = 1

let remainingGuesses = document.querySelector('.lastResult')

let playGame = true;

if(playGame){
  submitButton.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateGuess(guess)
  });
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter valid number');
  }
  else if (guess < 1){
    alert('Please enter number greater than 1')
  }
  else if (guess > 100){
    alert('Please enter number less than 100')
  }
  else{
    previousGuesses.push(guess)
    if(numberOfGuesses > 10){
      displayGuess(guess)
      displayMessage(`Game over, Random Number ${randomNumber}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(randomNumber > guess){
    displayMessage('The number is too low')
  }
  else if(randomNumber < guess){
    displayMessage('The number is too high')
  }
  else{
    displayMessage('Congratulation, you guessed it right')
    displayGuess(guess)
  }
}

function displayGuess(guess){
  userInput.value = ''
  guesses.append(`${guess}, `)
  numberOfGuesses++;
  remainingGuesses.innerHTML = ` ${11 - numberOfGuesses}`
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2> ${message} </h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  submitButton.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = '<h2 id= "newGame"> Start New Game </h2>'
  result.appendChild(p)
  playGame = false 
  newGame();
  remaining = parseInt(remainingGuesses.innerHTML)
  remaining--;
  remainingGuesses.innerHTML = remaining
  console.log(remaining)
}

function newGame(){
  let newGameText = document.querySelector('#newGame')
  newGameText.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100)
    numberOfGuesses = 1
    previousGuesses = [] 
    guesses.innerHTML = ''
    remainingGuesses.innerHTML = ` ${11 - numberOfGuesses}`
    userInput.removeAttribute('disabled')
    submitButton.removeAttribute('disabled')
    result.removeChild(p)
    lowOrHi.innerHTML = ''
    playGame = true
  })

}