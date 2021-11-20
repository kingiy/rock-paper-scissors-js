console.log("A simple rock-paper-scissors game in js");

//build the moves
function move(name, beats, loses){
	return{
		name,
		beats,
		loses
	}
}

//list of move types
let allMoves = [];
const rock = move('rock', 'scissors', 'paper');
const paper = move('paper', 'rock', 'scissors');
const scissors = move('scissors', 'paper', 'rock');
allMoves.push(rock, paper, scissors);

function playTheGame(playerMove){

console.log('Player chooses ' + playerMove.name);

//messy one liner
let computerMove = allMoves[Math.floor((Math.random() * allMoves.length))];

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
document.getElementById('winner').innerHTML = ( 
	'Player chooses ' + playerMove.name +
	'<br>Computer chooses ' + computerMove.name +
	'<br> ' + game.result() + '</br>');
}