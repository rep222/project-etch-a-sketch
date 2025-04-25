const container = document.querySelector('.main-container');
const sizeBtn = document.querySelector('.sizeBtn');
const restartBtn = document.querySelector('.restartBtn');
const colorBtn = document.querySelector('.colorBtn');
let numberOfRows = 10;
let color = false;
function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

function hover(element, enter, leave){
    element.addEventListener('mouseenter', enter);
    element.addEventListener('mouseleave', leave);
}
colorBtn.addEventListener('click', () => {
    color = !color;
    generateDivs(numberOfRows);
    if (color === true) {
        colorBtn.classList.add('color-mode');
    } else {
        colorBtn.classList.remove('color-mode');
    }
})
function generateDivs(amount) {
    container.innerHTML = '';
    const containerSize = 680;
    const boxSize = containerSize/amount;
    for (let i = 0; i < amount * amount; i++) {
        const box = document.createElement('div');
        box.className = 'box';
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        let randomColor = getRandomColor();
        let opacity = 10;
        let currentColor;
        hover(box, e => {
            if (color === true){
               currentColor = randomColor;
            } else currentColor = 'black';
            if (opacity < 100){
                opacity += 15;
            }
            e.currentTarget.classList.add('box-transition');
            e.target.style.opacity = `${opacity}%`;
            e.target.style.backgroundColor = currentColor;
            }
        )
        container.appendChild(box);
    }
}

generateDivs(numberOfRows);

sizeBtn.addEventListener('click', () => {
    let tempRows = prompt('How many rows do you want?');
    let newNumberOfRows = parseInt(tempRows);
    if (isNaN(newNumberOfRows)){
        alert('Sorry, that is not a valid number');
        return;
    }else if (newNumberOfRows > 100){
        alert('Sorry, maximum number is 100');
        return;
    }else if (newNumberOfRows < 1) {
        alert('Sorry, minimum number is 1');
        return;
    }else {
        numberOfRows = newNumberOfRows;
        generateDivs(numberOfRows);
    }
})
restartBtn.addEventListener('click', ()=> {
    generateDivs(numberOfRows);
})
