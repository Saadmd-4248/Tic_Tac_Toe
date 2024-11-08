var board = ["", "", "", "", "", "", "", "", ""];
var currentPlayer = "X";
var gameActive = true;
function makeMove(button, index) {
    if (gameActive && board[index] === "") {
        board[index] = currentPlayer;
        button.innerText = currentPlayer;
        if (checkWin()) {
        document.getElementById("status").innerText = "Player " + currentPlayer + " wins!";
        gameActive = false;
        } else if (board.indexOf("") === -1) {
        document.getElementById("status").innerText = "It's a draw!";
        gameActive = false;
        } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        document.getElementById("status").innerText = "Player " + currentPlayer + "'s turn";
        }
        }
}
function checkWin() {
        var winPatterns = [
           [0, 1, 2], [3, 4, 5], [6, 7, 8],
           [0, 3, 6], [1, 4, 7], [2, 5, 8], 
           [0, 4, 8], [2, 4, 6]            
        ];
        for (var i = 0; i < winPatterns.length; i++) {
             var pattern = winPatterns[i];
            if (board[pattern[0]] === currentPlayer &&
                board[pattern[1]] === currentPlayer &&
                board[pattern[2]] === currentPlayer) {
                return true;
            }
            }
        return false;
}
function resetGame() {
        board = ["", "", "", "", "", "", "", "", ""];
            currentPlayer = "X";
            gameActive = true;
            var cells = document.getElementsByClassName("cell");
            for (var i = 0; i < cells.length; i++) {
                cells[i].innerText = "";
            }
            document.getElementById("status").innerText = "Player X's turn";
}