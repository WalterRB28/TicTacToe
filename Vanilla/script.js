let turn = true;

const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const winnerLabel = document.getElementById('winner');

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
    cells.forEach(cell => {
        cell.addEventListener('click', function () {
            let letter = changeLetter(turn);
            cell.textContent = letter;
            cell.style.color = 'white';

            if (letter == 'X') {
                cell.style.backgroundColor = 'red';
            }
            
            if (letter == 'O') {
                cell.style.backgroundColor = 'blue';
            }

            winnerLabel.textContent = winnerPatter(cells, letter);
            winnerLabel.style.color = cell.style.backgroundColor;

            turn = !turn;
        })
    });
});

resetButton.addEventListener('click', function(){
    location.reload();
});

function changeLetter(bool){
    if (bool) {
        return 'X';
    }

    if (!bool) {
        return 'O';
    }
}

function winnerPatter(cells, letter) {
    if (cells[0].textContent == letter && cells[1].textContent == letter && cells[2].textContent == letter) {
        return `${letter} won!`;
    } else if (cells[3].textContent == letter && cells[4].textContent == letter && cells[5].textContent == letter) {
        return `${letter} won!`;
    } else if (cells[6].textContent == letter && cells[7].textContent == letter && cells[8].textContent == letter) {
        return `${letter} won!`;
    } else if (cells[0].textContent == letter && cells[3].textContent == letter && cells[6].textContent == letter) {
        return `${letter} won!`;
    } else if (cells[1].textContent == letter && cells[4].textContent == letter && cells[7].textContent == letter) {
        return `${letter} won!`;
    } else if (cells[2].textContent == letter && cells[5].textContent == letter && cells[8].textContent == letter) {
        return `${letter} won!`;
    } else if (cells[0].textContent == letter && cells[4].textContent == letter && cells[8].textContent == letter) {
        return `${letter} won!`;
    } else if (cells[2].textContent == letter && cells[4].textContent == letter && cells[6].textContent == letter) {
        return `${letter} won!`;
    }
}