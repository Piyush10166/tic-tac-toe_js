let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let winnerText = document.querySelector("#winner");
// let newGameBtn = document.querySelector("#new-btn");

let turnx = true
let gameOver = false;


const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (box.innerText !== "" || gameOver) return;

        if (turnx) {
            box.innerText = "X";
            box.classList.add("x");
        } else {
            box.innerText = "O";
            box.classList.add("o");
        }

        turnx = !turnx;

        checkWin();
        checkDraw();
    });
});


const checkWin = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;


        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            winnerText.innerText = `${pos1} wins!`;
            boxes.forEach((box) => box.disabled = true);
            gameOver = true;
            return;
        }
    }
}

resetBtn.addEventListener("click", resetGame);

function resetGame() {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        box.classList.remove("x", "o");
    });
    winnerText.innerText = "";
    turnx = true;
    gameOver = false;
}

const checkDraw = () => {
    let isDraw = true;

    boxes.forEach((box) => {
        if (box.innerText === "") {
            isDraw = false;
        }
    });

    if (isDraw && !gameOver) {
        winnerText.innerText = "It's a Draw!";
        gameOver = true;
    }
}

// newGameBtn.addEventListener("click", () => {
//     resetGame();
//     winnerText.innerText = "New Game Started!";})

// newGameBtn.addEventListener("click", resetGame);
