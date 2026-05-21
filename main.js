const lottoNumbersDiv = document.querySelector('.lotto-numbers');
const generateBtn = document.querySelector('#generate-btn');

function generateNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function displayNumbers(numbers) {
    lottoNumbersDiv.innerHTML = '';
    for (const number of numbers) {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('lotto-number');
        numberDiv.textContent = number;
        lottoNumbersDiv.appendChild(numberDiv);
    }
}

function handleGenerateClick() {
    const numbers = generateNumbers();
    displayNumbers(numbers);
}

generateBtn.addEventListener('click', handleGenerateClick);

// Initial generation
handleGenerateClick();
