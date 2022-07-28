const gridContainer = document.getElementById("grid-container")

for (let x = 1; x <= 256; x++) {
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

orangeBtn.addEventListener('click', (e) => {
    chosenColor = 'orange'
})

coralBtn.addEventListener('click', (e) => {
    chosenColor = 
    console.log(chosenColor)
})

colorChoices.forEach(color => {
    color.addEventListener ('click', () => {
    chosenColor = color.className
    })
})



items.forEach(item => {
    item.addEventListener('mouseover', (e) => {
        console.log(chosenColor)
        item.style.backgroundColor = chosenColor;
    })
});