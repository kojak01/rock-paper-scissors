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
        console.log('you win!');
    } else if (computerMove == playerMove) {
        console.log('draw!');
    } else if (playerMove == 'unknow movemenet'){
        console.log('enter a number from 1 to 3');
    } else {
        console.log('you lose!');
    }
    
    displayResult(computerMove, playerMove);
}
playGame(2);