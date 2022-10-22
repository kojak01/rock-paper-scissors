function playGame(playerInput){
    clearMessages(); //<-- removes all messages
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
    /*let playerInput = prompt('Choose your move! 1: stone, 2: paper, 3: scissors.')
    console.log('player choose: ' + playerInput);*/

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

    function displayResult(Computer, User){
    } if ((computerMove == 'rock' && playerMove == 'paper') ||
    (computerMove == 'paper' && playerMove == 'scissors') ||
    (computerMove == 'scissors' && playerMove == 'rock')) {
        printMessage('You Win!');
    } else if (computerMove == playerMove) {
        printMessage('Draw!');
    } else if (playerMove == 'unknow movemenet'){
        printMessage('enter a number from 1 to 3');
    } else {
        printMessage('You Lose!');
    }
    
    displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
})
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
}
)