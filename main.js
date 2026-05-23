function initApp() {
    const lottoNumbersDiv = document.querySelector('.lotto-numbers');
    const generateBtn = document.querySelector('#generate-btn');
    const themeToggle = document.querySelector('#theme-toggle');

    function setTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    function toggleTheme() {
        const currentTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        setTheme(currentTheme);
    }

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
            div.className = 'lotto-number';
            div.textContent = num;
            lottoNumbersDiv.appendChild(div);
        });
    }

    // Theme Init
    const savedTheme = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);

    // Listeners
    if (themeToggle) themeToggle.onclick = toggleTheme;
    if (generateBtn) generateBtn.onclick = () => displayNumbers(generateNumbers());

    // Initial Lotto
    displayNumbers(generateNumbers());
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
