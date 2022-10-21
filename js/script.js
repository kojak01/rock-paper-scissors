let randomNumber = Math.floor(Math.random() * 3 + 1);
printMessage('random number ' + randomNumber);
let computerMove = 'unknown movement';
if(randomNumber == 1) {
    computerMove = 'rock';
} else if(randomNumber == 2) {
    computerMove = 'paper';
} else if(randomNumber == 3) {
    computerMove = 'scissors';
}

console.log('Computer move: ' + computerMove);

let playerMove = 'unknown movement';

