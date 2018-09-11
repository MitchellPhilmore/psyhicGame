var wins = 0;
var losses = 0;
let remainingGuesses = 5;
let guesses = 0;

let previousGuesses = document.querySelector("#previousGuesses")


let winsElement = document.querySelector("#wins")
let lossesElement = document.querySelector("#loses")
let guessesLeft = document.querySelector("#guessesLeft")

let alphabet = 'abcdefghijklmnopqrstuvwxyz'
let alphabetArr = [...alphabet]
let randomLetter = alphabetArr[Math.floor(Math.random() * 25)]

function guessTheLetter(){

  guess =  prompt('What number am I thinking of ?')

    if(guess === randomLetter){
        wins++
        alert('You win!')
        winsElement.innerHTML = `Wins: ${wins}`
        remainingGuesses = 5
        guessesLeft.innerHTML = `Remaining Guesses: ${remainingGuesses}`

    
        previousGuesses.innerHTML = `Previous Guessses: `
     
        return
        
        }
        else if(guess !== randomLetter){
            losses++
            remainingGuesses--
            guessesLeft.innerHTML = ` Remaining Guesses: ${remainingGuesses}`
            lossesElement.innerHTML = `Losses: ${losses}`
            previousGuesses.innerHTML += `${guess}`

            if(remainingGuesses === 0){
                alert('Game over!')
                remainingGuesses = 5
                guessesLeft.innerHTML = `Remaining Guesses: ${remainingGuesses}`
                previousGuesses.innerHTML = `Previous Guesses: `
               
            }
           
        

        }
        
}









