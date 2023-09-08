const cells = document.querySelectorAll("#GameBoard>div");
const statusText = document.getElementById('Status');
const winnerBoard = document.getElementById("WinnerBoard");
const winnerStatusText = document.getElementById('WinnerStatus');
const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = 'X';
let counterForPlayer = 0;
function init() {
    updateStatus();
    cells.forEach(cell => cell.addEventListener("click", cellClicked))
}
updateStatus = () => {
    statusText.textContent = `${currentPlayer}'s turn`;
}
function cellClicked() {
    if (options[this.getAttribute("data-which-house")] == "") {
        updateCeller(this);
        changePlayer();
    }
    return
}
const changePlayer = () => {
    if (currentPlayer == 'X')
        currentPlayer = 'O'
    else
        currentPlayer = 'X'
    updateStatus();
}
function updateCeller(cell) {
    cell.setAttribute("data-is-full", true);
    options[cell.getAttribute("data-which-house")] = currentPlayer;
    cell.textContent = currentPlayer;
    counterForPlayer++;
    checkWinner();
}
function checkWinner() {
    for (let i = 0; i < winCondition.length; i++) {
        let A = winCondition[i][0];
        let B = winCondition[i][1];
        let C = winCondition[i][2];
        if (options[A] == options[B] && options[B] == options[C] && options[A] != "") {
            winnerBoard.classList.remove('hidden');
            winnerBoard.classList.add('flex');
            winnerStatusText.textContent = `The winner is ${options[A]}`;
        }
    }
    if(counterForPlayer == 9)
    {
         winnerBoard.classList.remove('hidden');
            winnerBoard.classList.add('flex');
            winnerStatusText.textContent = `No one wins !!!`;
    }
}
init();