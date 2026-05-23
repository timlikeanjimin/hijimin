// DOM Elements
const lottoNumbersDiv = document.querySelector('.lotto-numbers');
const generateBtn = document.querySelector('#generate-btn');
const themeToggle = document.querySelector('#theme-toggle');

/**
 * Theme Management
 */
function initTheme() {
    let savedTheme = null;
    try {
        savedTheme = localStorage.getItem('theme');
    } catch (e) {}

    if (!savedTheme) {
        savedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    setTheme(savedTheme);
}

function setTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    try {
        localStorage.setItem('theme', theme);
    } catch (e) {}
}

function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

/**
 * Lotto Logic
 */
function generateNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function displayNumbers(numbers) {
    if (!lottoNumbersDiv) return;
    lottoNumbersDiv.innerHTML = '';
    numbers.forEach(num => {
        const div = document.createElement('div');
        div.classList.add('lotto-number');
        div.textContent = num;
        lottoNumbersDiv.appendChild(div);
    });
}

/**
 * Initialization
 */
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    
    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
    if (generateBtn) generateBtn.addEventListener('click', () => {
        displayNumbers(generateNumbers());
    });

    // Initial lotto numbers
    displayNumbers(generateNumbers());
});
