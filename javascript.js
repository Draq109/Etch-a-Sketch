const container = document.querySelector('.container');


for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.setAttribute('style', 'display: flex; flex: 1 0 0; width: 32rem; height: auto;')
    for (let j = 0; j < 16; j++) {
        const box = document.createElement('div');
        box.setAttribute('style', 'border: solid black .1rem; flex: 1;')
        row.appendChild(box);
    }
    container.appendChild(row);
}

