const gridContainer = document.getElementById("grid-container")

//getting the canvas dimensions

const submitBtn = document.querySelector('button.submitBtn') 

let sideLength = 16

submitBtn.addEventListener('click', (e) => {
    let input = document.querySelector('div.canvas-input>input').value;
    sideLength = input;
    gridContainer.gridTemplateColumns = "repeat(" + sideLength + ", 1fr)"
})

for (let x = 1; x <= (sideLength^2); x++) {
    let gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
}

//hover effect 

const items = document.querySelectorAll('div.grid-item');
const orangeBtn = document.querySelector('.orange');
const coralBtn = document.querySelector('.coral');
const colorChoices = document.querySelectorAll('#color-choices>button')
let chosenColor = 'white';

colorChoices.forEach(color => {
    color.addEventListener ('click', () => {
    chosenColor = color.className
    })
})

items.forEach(item => {
    item.addEventListener('mouseover', (e) => {
        item.style.backgroundColor = chosenColor;
    })
});

///reset button

const resetBtn = document.querySelector('button.clear');

resetBtn.addEventListener ('click', (e) => {
    items.forEach(item => {
        item.style.backgroundColor = 'white';
    })
})