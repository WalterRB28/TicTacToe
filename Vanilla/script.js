let turn = true;

const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const winnerLabel = document.getElementById('winner');
const board = document.getElementById('board');

const c1f1 = document.getElementById('c1-f1');
const c2f1 = document.getElementById('c2-f1');
const c3f1 = document.getElementById('c3-f1');

const c1f2 = document.getElementById('c1-f2');
const c2f2 = document.getElementById('c2-f2');
const c3f2 = document.getElementById('c3-f2');

const c1f3 = document.getElementById('c1-f3');
const c2f3 = document.getElementById('c2-f3');
const c3f3 = document.getElementById('c3-f3');

const cells = [
    c1f1, c2f1, c3f1,
    c1f2, c2f2, c3f2,
    c1f3, c2f3, c3f3
];

startButton.addEventListener('click', function(){
    board.style.display = 'block';
    cells.forEach(cell => {
        cell.addEventListener('click', function () {
            let letra = changeLetter(turn);
            cell.textContent = letra;
            cell.style.color = 'white';

            if (letra == 'X') {
                cell.style.backgroundColor = 'red';
            }
            
            if (letra == 'O') {
                cell.style.backgroundColor = 'blue';
            }

            turn = !turn;
        })
    });
});

resetButton.addEventListener('click', function(){
    cells.forEach(cell => {
        cell.textContent = '';
        cell.style.backgroundColor = 'lightgrey';
        turn = !turn;
    });
});

function changeLetter(bool){
    if (bool) {
        return 'X';
    }

    if (!bool) {
        return 'O';
    }
}