console.log('Script loaded v2');
function initApp() {
    console.log('Initializing v2');
    const lottoNumbersDiv = document.querySelector('.lotto-numbers');
    const generateBtn = document.querySelector('#generate-btn');
    const themeToggle = document.querySelector('#theme-toggle');

    function setTheme(theme) {
        console.log('Set theme:', theme);
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    // Theme Init
    const savedTheme = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);

    if (themeToggle) {
        themeToggle.onclick = function() {
            console.log('Toggle clicked');
            const newTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        };
    } else {
        console.error('No toggle found');
    }

    function gen() {
        if (!lottoNumbersDiv) return;
        const numbers = new Set();
        while (numbers.size < 6) numbers.add(Math.floor(Math.random() * 45) + 1);
        const sorted = Array.from(numbers).sort((a, b) => a - b);
        lottoNumbersDiv.innerHTML = '';
        sorted.forEach(n => {
            const d = document.createElement('div');
            d.className = 'lotto-number';
            d.textContent = n;
            lottoNumbersDiv.appendChild(d);
        });
    }

    if (generateBtn) generateBtn.onclick = gen;
    gen();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
