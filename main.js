console.log('Script loaded v5');

function initTheme() {
    const themeToggle = document.querySelector('#theme-toggle');
    if (!themeToggle) return;

    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', currentTheme);
    updateToggleIcon(themeToggle, currentTheme);

    themeToggle.addEventListener('click', () => {
        const theme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateToggleIcon(themeToggle, theme);
    });
}

function updateToggleIcon(btn, theme) {
    // Sun icon for dark theme, Moon icon for light theme
    btn.innerHTML = theme === 'dark' 
        ? '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
        : '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
}

function initLottoLogic() {
    const lottoNumbersDiv = document.querySelector('.lotto-numbers');
    const generateBtn = document.querySelector('#generate-btn');
    if (!lottoNumbersDiv || !generateBtn) return;

    const LOTTO_HISTORY_DATA_SOURCE = 'lotto_history.csv';
    let hotNumbers = [];
    let midNumbers = [];
    let coldNumbers = [];

    function renderLottoNumbers(container, numbers) {
        container.innerHTML = '';
        numbers.forEach(n => {
            const d = document.createElement('div');
            d.className = 'lotto-number';
            d.textContent = n;
            container.appendChild(d);
        });
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function generateSmartNumbers() {
        if (!hotNumbers.length || !midNumbers.length || !coldNumbers.length) return;

        let selectedNumbers = new Set();
        shuffleArray(hotNumbers);
        shuffleArray(midNumbers);
        shuffleArray(coldNumbers);

        // 3 Hot, 2 Mid, 1 Cold
        hotNumbers.slice(0, 3).forEach(n => selectedNumbers.add(n));
        midNumbers.slice(0, 2).forEach(n => selectedNumbers.add(n));
        coldNumbers.slice(0, 1).forEach(n => selectedNumbers.add(n));
        
        while (selectedNumbers.size < 6) {
            const allNumbers = [...hotNumbers, ...midNumbers, ...coldNumbers];
            const randomNum = allNumbers[Math.floor(Math.random() * allNumbers.length)];
            selectedNumbers.add(randomNum);
        }

        const sortedNumbers = Array.from(selectedNumbers).sort((a, b) => a - b);
        renderLottoNumbers(lottoNumbersDiv, sortedNumbers);
    }

    async function analyzeLottoHistory(dataSource) {
        try {
            const response = await fetch(dataSource);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.text();
            const rows = data.trim().split('\n').slice(1);
            const numberCounts = {};
            for (let i = 1; i <= 45; i++) numberCounts[i] = 0;

            rows.forEach(row => {
                const columns = row.split(',');
                for (let i = 1; i <= 6; i++) {
                    const num = parseInt(columns[i], 10);
                    if (!isNaN(num)) numberCounts[num]++;
                }
            });

            const sortedStats = Object.entries(numberCounts).sort(([,a],[,b]) => b - a);
            
            hotNumbers = sortedStats.slice(0, 15).map(([num]) => parseInt(num));
            midNumbers = sortedStats.slice(15, 30).map(([num]) => parseInt(num));
            coldNumbers = sortedStats.slice(30, 45).map(([num]) => parseInt(num));

            renderStats('#hot-numbers', sortedStats.slice(0, 6));
            renderStats('#cold-numbers', sortedStats.slice(-6).reverse());
            generateSmartNumbers();

        } catch (error) {
            console.error("Error analyzing lotto history:", error);
        }
    }

    function renderStats(selector, numbers) {
        const container = document.querySelector(selector);
        if (!container) return;
        container.innerHTML = '';
        numbers.forEach(([number, count]) => {
            const d = document.createElement('div');
            d.className = 'lotto-number';
            d.textContent = number;
            d.title = `Appeared ${count} times`;
            container.appendChild(d);
        });
    }

    generateBtn.onclick = generateSmartNumbers;
    analyzeLottoHistory(LOTTO_HISTORY_DATA_SOURCE);
}

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLottoLogic();
});
