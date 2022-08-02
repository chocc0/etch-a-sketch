const gridContainer = document.getElementById("grid-container")
let chosenColor;
let sideLength;

createGrid(50)

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
        gridItem.style.backgroundColor = 'rgb(255,255,255)'
        gridItem.addEventListener('mouseover', colorBoard)
        gridContainer.appendChild(gridItem);
    }
}

//active input display

const slider = document.querySelector('input.slider')
const displayedVal = document.querySelector('div.displayed-value');
displayedVal.textContent = (slider.value + " x " + slider.value)

slider.oninput = () => {
    displayedVal.textContent = (slider.value + " x " + slider.value);
}

//tools

const tools = document.querySelectorAll('.tool');
const colorPicker = document.querySelector('#color-picker')
let currentTool = '';

colorPicker.oninput = () => {
    colorPicker.style.border = ('2px solid ' + colorPicker.value);
}

tools.forEach(tool => {
    tool.addEventListener('click', function() {
        tools.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        currentTool = tool.id;
    });
});

function colorBoard(e) {
    if (e.ctrlKey) {
        if (currentTool === 'color-picker') {
            e.target.style.backgroundColor = colorPicker.value;
        } else if (currentTool === 'eraser') {
            e.target.style.backgroundColor = 'white';
        } else if (currentTool === 'random') {
            e.target.style.backgroundColor = randomColor()
        } else if (currentTool === 'shader') {
            e.target.style.backgroundColor = shadeItem(e)
        }
    } 
}

function shadeItem(e) {
    let rgb = e.target.style.backgroundColor.replace(/ /g, '');
    let newArray = []

    rgb = String(rgb)
    rgb = rgb.slice(4,(rgb.length - 1));
    rgbArray = rgb.split(",");
    rgbArray.forEach ((color) => {
        color = parseInt(color, 10)
        newColor = color - 26;
        if (newColor < 0) {
            newColor = 0;
        }
        newArray.push(newColor)
    });
    newArray = String(newArray);
    return('rgb(' + newArray + ')')
}

function randomColor() {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    let randomColor = ('rgb(' + red + ',' + green + ',' + blue + ')')
    return randomColor
}

//fill cnavas 

const fillCanvasBtn = document.querySelector('.fill-canvas');

fillCanvasBtn.addEventListener('click', function() {
    let items = document.querySelectorAll('div.grid-item');
    items.forEach(item => {
        item.style.backgroundColor = colorPicker.value;
    })
})

//toggle grid lines button 

const gridLineBtn = document.querySelector('.toggle-grid-lines');
let toggle = false;

gridLineBtn.addEventListener ('click', function() {
    let items = document.querySelectorAll('div.grid-item');
    if (toggle === false){
        toggle = true;
        items.forEach(item => {
            item.style.border = "0.25px solid rgb(228, 228, 228)"
        });
    } else if (toggle = true) {
        toggle = false;
        items.forEach(item => {
            item.style.border = "";
        });
    }
})


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
