const gridContainer = document.getElementById("grid-container")
const colorChoices = document.querySelectorAll('#color-choices>button')
const colorPicker = document.querySelector('.color-picker')
let chosenColor;
let sideLength;

//creating the grid/changing dimensions

const createBtn = document.querySelector('button.create-btn');

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
        gridItem.addEventListener('mouseover', colorBoard)
        gridContainer.appendChild(gridItem);
    }
}

//active input display

const slider = document.querySelector('input.slider')
const displayedVal = document.querySelector('div.displayed-value');
displayedVal.textContent = slider.value

slider.oninput = () => {
    displayedVal.textContent = slider.value;
}

//color buttons and hovering function



function colorBoard(e) {
    if (e.shiftKey) {
        e.target.style.backgroundColor = colorPicker.value;
    }
}

/*colorChoices.forEach(color => {
    color.addEventListener ('click', () => {
        chosenColor = color.className
        console.log(chosenColor)
    });
});*/

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
