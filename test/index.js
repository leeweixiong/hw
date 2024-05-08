const cells = document.querySelectorAll(".cell");
const status = document.querySelectorAll("#statusText");
const restartBtn = document.querySelectorAll("restartBtn");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 7],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 5, 6]
];
let options = ["","","","","","","","",""];
let currntPlayer ="X"
let running = false;

function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClikcked))
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
}
function cellClikcked(){

}
function updateCell(cell, index){

}
function checkPlayer(){

}
function checkWinner(){

}
function restartGame()[

]