const container = document.querySelector('.container');
const boxes = [], rows = [];


for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.setAttribute('style', 'display: flex; flex: 1;  width: 32rem; height: auto;')
    rows.push(row);
    for (let j = 0; j < 16; j++) {
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

