const gridContainer = document.getElementById("grid-container")
const colorChoices = document.querySelectorAll('#color-choices>button')
let items = document.querySelectorAll('div.grid-item');
let chosenColor = 'white';
let sideLength = 1

//getting the canvas dimensions

const createBtn = document.querySelector('button.createBtn');

createBtn.addEventListener('click', () => {
    resetBoard();
    clearBoard();
    sideLength = document.querySelector('div.canvas-input>input').value;
    gridContainer.style.gridTemplateColumns = "repeat(" + sideLength + ", 1fr)";
    createGrid(sideLength);
});


function createGrid(num) {
    for (let x = 1; x <= (num**2); x++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);
    }
}

//color buttons and hovering function

function colorBoard() {
    let items = document.querySelectorAll('div.grid-item');
    items.forEach(item => {
        item.addEventListener('mouseover', (e) => {
            item.style.backgroundColor = chosenColor;
        })
    });
}

colorChoices.forEach(color => {
    color.addEventListener ('click', () => {
    chosenColor = color.className
    console.log(chosenColor)
    colorBoard();
    });
});

///reset button

const clearBtn = document.querySelector('button.clear');

function clearBoard() {
    let items = document.querySelectorAll('div.grid-item');
    items.forEach(item => {
        item.style.backgroundColor = 'white';
    });
}

clearBtn.addEventListener ('click', (e) => {
    clearBoard();
});

function resetBoard() {
    gridContainer.innerHTML = ''
}
