function getMoveName(MoveId){
    if (MoveId == 1) {
        return 'rock';
    } else if (MoveId == 2) {
        return 'paper';
    } else if (MoveId == 3) {
        return 'scissors';
    } else {
        return 'unknow movemenet';
    }
}

// Computer Move
let randomNumber = Math.floor(Math.random() * 3 + 1);
printMessage('random number ' + randomNumber);
let computerMove = getMoveName(randomNumber);
/*if(randomNumber == 1) {
    computerMove = 'rock';
} else if(randomNumber == 2) {
    computerMove = 'paper';
} else if(randomNumber == 3) {
    computerMove = 'scissors';
}*/
console.log('Computer move: ' + computerMove);
// Player Move
let playerInput = prompt('Choose your move! 1: stone, 2: paper, 3: scissors.')
console.log('player choose: ' + playerInput);

let playerMove = getMoveName(playerInput);
/*if(playerInput == 1) {
    playerMove = 'rock';
} else if (playerInput == 2) {
    playerMove = 'paper';
} else if (playerInput == 3) {
    playerMove = 'scissors';
} else {
    playerMove = 'unknow movemenet';
}
*/
console.log('Player move: ' + playerMove);

