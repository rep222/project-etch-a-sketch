const container = document.querySelector('.main-container');
const sizeBtn = document.querySelector('.sizeBtn');
const restartBtn = document.querySelector('.restartBtn');
let numberOfRows = 10;
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
        hover(box, e => {
            e.currentTarget.className += ' box-transition';
            e.target.style.backgroundColor = randomColor;
            if (opacity < 100){
                opacity += 15;
            }
            e.target.style.opacity = `${opacity}%`;
            }, 
            e => {
                e.target.style.backgroundColor = randomColor
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
    }else {
        numberOfRows = newNumberOfRows;
        generateDivs(numberOfRows);
    }
})
restartBtn.addEventListener('click', ()=> {
    generateDivs(numberOfRows);
})
