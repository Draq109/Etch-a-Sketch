const container = document.querySelector('.container');
const clearBtn = document.querySelector('.clear');
const resizeBtn = document.querySelector('.resize');
const boxes = [], rows = [];

function createGrid(squareNum) {
    for (let i = 0; i < squareNum; i++) {
        const row = document.createElement('div');
        row.setAttribute('style', 'display: flex; flex: 1;  width: 32rem; height: auto;')
        rows.push(row);
        for (let j = 0; j < squareNum; j++) {
            const box = document.createElement('div');
            boxes.push(box);
            box.setAttribute('style', 'background-color: white; flex: 1;')
            box.addEventListener('mouseover', () => {
                box.setAttribute('style', 'background-color: navy; flex: 1;')
            })
            box.addEventListener('mouseout', () => {
                box.setAttribute('style', 'background-color: #00FF7F; flex: 1;animation: color-change-bg 3s ')
            })
    
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}



function clearGrid() {
    for(let i = 0; i < boxes.length; i++) {
        boxes[i].setAttribute('style', 'background-color: white; flex: 1;')
    }
}

function setGrid() {
    let i = 0;
    while (i < rows.length) {
        container.removeChild(rows[i]);
        i++;
    }
    boxes.length = 0;
    rows.length = 0;
    let num = Number(prompt("Please enter a number between 1-100", "16"));
    while (isNaN(num) || num > 100 || num < 0) {
        num = Number(prompt("Please enter a number between 1-100", "16"));
    }
    createGrid(num);
}

clearBtn.addEventListener('click', clearGrid);
resizeBtn.addEventListener('click', setGrid);
createGrid(16);
