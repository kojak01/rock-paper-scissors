let randomFraction = Math.floor(Math.random() * 3 + 1);
printMessage('wylosowany ułamek to: ' + randomFraction);
let computerMove = 'rock';
printMessage('I play ' + computerMove + '! If your move is paper, you are win!');

let playerMove = 'paper';
printMessage('I play ' + computerMove + '! If your move is ' + playerMove +', you are win!');