const container = document.querySelector('.main-container');

function generateDivs(amount) {

    container.innerHTML = '';

    const containerSize = 680;
    const boxSize = 680/amount;

    for (let i = 0; i < amount * amount; i++) {

      const box = document.createElement('div');

      box.className = 'box';
      box.style.width = `${boxSize}px`;
      box.style.height = `${boxSize}px`;

      container.appendChild(box);
    }
}

generateDivs(10);