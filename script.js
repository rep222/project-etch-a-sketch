const container = document.querySelector('.main-container');

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
    const boxSize = 680/amount;

    for (let i = 0; i < amount * amount; i++) {

        const box = document.createElement('div');
        hover(box, e => {
            e.target.style.backgroundColor = getRandomColor()}, 
            e => {
                e.target.style.backgroundColor = '#ffff'
            }
        )
        box.className = 'box';
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        container.appendChild(box);
    }
}

generateDivs(50);
