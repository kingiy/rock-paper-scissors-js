console.log("A simple rock-paper-scissors game in js");

//build the moves
function move(name, beats, loses){
	return{
		name,
		beats,
		loses
	}
};

//list of move types
const rock = move('rock', 'scissors', 'paper');
const paper = move('paper', 'rock', 'scissors');
const scissors = move('scissors', 'paper', 'rock');

function playTheGame(playerMove){

console.log('Player chooses ' + playerMove.name);

//messy need a better way of doing this
let computerMove = Math.floor((Math.random() * 3));
	if(computerMove === 0){computerMove = rock};
	if(computerMove === 1){computerMove = paper};
	if(computerMove === 2){computerMove = scissors};

console.log('Computer chooses ' + computerMove.name);

//newGame factory
function newGame(playerMove, computerMove){
	return{
		result() {
			if (playerMove.name === computerMove.name){
				return 'It`s a draw!';
			}else if (playerMove.name === computerMove.beats){
				return 'Computer wins the game!';
			}else if (computerMove.name === playerMove.beats){
				return 'Player wins the game!';;
			}
		}
	}
}

//play the game
const game = newGame(playerMove, computerMove);
console.log(game.result());
document.getElementById('winner').innerHTML = ( 'Player chooses ' + playerMove.name +
												'<br>Computer chooses ' + computerMove.name +
												'<br> ' + game.result() + '</br>');
}