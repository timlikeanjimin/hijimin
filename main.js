console.log('Script loaded v5');

const translations = {
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-contact": "Contact",
        "nav-privacy": "Privacy",
        "hero-title": "Smart Lotto Number Generator",
        "hero-subtitle": "Generate your lucky numbers based on the last 100-draw statistics!",
        "gen-btn": "Generate Smart Numbers",
        "stats-title": "Lotto Statistics",
        "stats-subtitle": "Analysis based on the winning numbers of the last 100 draws.",
        "hot-title": "Most Frequent Numbers (Hot)",
        "hot-desc": "Numbers that appeared most often in the last 100 draws.",
        "cold-title": "Least Frequent Numbers (Cold)",
        "cold-desc": "Numbers that appeared least often in the last 100 draws.",
        "how-title": "How the Smart Generator Works",
        "how-p1": "Our algorithm doesn't just pick numbers at random. It analyzes the historical data from the most recent 100 draws to identify patterns. We categorize numbers into two main groups:",
        "how-hot-title": "1. Hot Numbers",
        "how-hot-desc": "These are numbers that have a high frequency of appearing in recent draws. Some players believe that \"hot\" numbers are more likely to appear again as they follow a current trend.",
        "how-cold-title": "2. Cold Numbers",
        "how-cold-desc": "These are numbers that haven't appeared for a while. The \"law of averages\" suggests that these numbers might be \"due\" to appear soon, making them a popular choice for strategic players.",
        "how-balance-title": "Statistical Balance",
        "how-balance-desc": "The Smart Generator combines these insights to provide a balanced set of numbers, giving you a mix of trending and overdue numbers for your next ticket.",
        "gaming-title": "Responsible Gaming",
        "gaming-desc1": "Lottery is a game of chance. While our generator uses statistical data to help you choose numbers, it does not guarantee a win. Please play responsibly and only spend what you can afford to lose.",
        "gaming-desc2": "If you or someone you know has a gambling problem, please seek help from professional organizations in your region.",
        "community-title": "Community Discussion",
        "footer-copy": "&copy; 2026 LottoSmart. All rights reserved.",
        "footer-disclaimer": "Disclaimer: This site is not affiliated with any official lottery organization."
    },
    ko: {
        "nav-home": "홈",
        "nav-about": "소개",
        "nav-contact": "문의",
        "nav-privacy": "개인정보처리방침",
        "hero-title": "스마트 로또 번호 생성기",
        "hero-subtitle": "최근 100회차 당첨 통계를 기반으로 행운의 번호를 생성하세요!",
        "gen-btn": "스마트 번호 생성하기",
        "stats-title": "로또 번호 통계",
        "stats-subtitle": "최근 100회차의 당첨 번호를 기반으로 분석한 결과입니다.",
        "hot-title": "가장 자주 나온 번호 (Hot)",
        "hot-desc": "최근 100회차 동안 가장 많이 출현한 번호들입니다.",
        "cold-title": "가장 적게 나온 번호 (Cold)",
        "cold-desc": "최근 100회차 동안 가장 적게 출현한 번호들입니다.",
        "how-title": "스마트 생성기 작동 원리",
        "how-p1": "우리 알고리즘은 단순히 무작위로 번호를 선택하지 않습니다. 최근 100회차의 과거 데이터를 분석하여 패턴을 식별합니다. 번호를 크게 두 그룹으로 나눕니다:",
        "how-hot-title": "1. 핫(Hot) 번호",
        "how-hot-desc": "최근 추첨에서 자주 등장한 번호들입니다. 일부 플레이어들은 현재의 흐름에 따라 핫 번호가 다시 나올 가능성이 높다고 믿습니다.",
        "how-cold-title": "2. 콜드(Cold) 번호",
        "how-cold-desc": "한동안 나오지 않은 번호들입니다. '평균의 법칙'에 따라 이 번호들이 곧 나올 때가 되었다고 생각하는 전략적 플레이어들이 선호합니다.",
        "how-balance-title": "통계적 균형",
        "how-balance-desc": "스마트 생성기는 이러한 통찰력을 결합하여 다음 티켓을 위해 트렌드 번호와 미출현 번호가 섞인 균형 잡힌 번호 세트를 제공합니다.",
        "gaming-title": "책임감 있는 게임",
        "gaming-desc1": "로또는 확률 게임입니다. 우리 생성기가 통계 데이터를 사용하지만 당첨을 보장하지는 않습니다. 책임감 있게 게임을 즐기시고, 감당할 수 있는 선에서만 이용하세요.",
        "gaming-desc2": "도박 문제가 있다면 관련 전문 기관의 도움을 받으시기 바랍니다.",
        "community-title": "커뮤니티 토론",
        "footer-copy": "&copy; 2026 LottoSmart. 모든 권리 보유.",
        "footer-disclaimer": "면책 조항: 이 사이트는 공식 복권 기관과 관련이 없습니다."
    },
    zh: {
        "nav-home": "首页",
        "nav-about": "关于",
        "nav-contact": "联系我们",
        "nav-privacy": "隐私政策",
        "hero-title": "智能乐透号码生成器",
        "hero-subtitle": "根据最近100期的开奖统计数据生成您的幸运号码！",
        "gen-btn": "生成智能号码",
        "stats-title": "乐透统计数据",
        "stats-subtitle": "基于最近100期中奖号码的分析结果。",
        "hot-title": "最常出现的号码 (热号)",
        "hot-desc": "在最近100期中出现频率最高的号码。",
        "cold-title": "最少出现的号码 (冷号)",
        "cold-desc": "在最近100期中出现频率最低的号码。",
        "how-title": "智能生成器的工作原理",
        "how-p1": "我们的算法不只是随机挑选号码。它分析最近100期的历史数据来识别模式。我们将号码分为两大类：",
        "how-hot-title": "1. 热号",
        "how-hot-desc": "这些是在最近的抽奖中出现频率很高的号码。一些玩家认为“热”号更有可能再次出现，因为它们遵循当前的趋势。",
        "how-cold-title": "2. 冷号",
        "how-cold-desc": "这些是已经有一段时间没有出现的号码。“平均法则”表明这些号码可能“即将”出现，这使得它们成为战略玩家的热门选择。",
        "how-balance-title": "统计平衡",
        "how-balance-desc": "智能生成器结合了这些见解，为您提供一组平衡的号码，为您下一张彩票混合了趋势号码和逾期号码。",
        "gaming-title": "理性博彩",
        "gaming-desc1": "乐透是一种概率游戏。虽然我们的生成器使用统计数据来帮助您选择号码，但并不保证中奖。请理性博彩，只花您能承受得起的钱。",
        "gaming-desc2": "如果您或您认识的人有赌博问题，请向您所在地区的专业机构寻求帮助。",
        "community-title": "社区讨论",
        "footer-copy": "&copy; 2026 LottoSmart. 版权所有。",
        "footer-disclaimer": "免责声明：本网站与任何官方彩票组织均无关联。"
    },
    ja: {
        "nav-home": "ホーム",
        "nav-about": "アバウト",
        "nav-contact": "お問い合わせ",
        "nav-privacy": "プライバシーポリシー",
        "hero-title": "スマートロト番号ジェネレーター",
        "hero-subtitle": "直近100回の抽選統計に基づいたラッキーナンバーを生成します！",
        "gen-btn": "スマート番号を生成",
        "stats-title": "ロト統計",
        "stats-subtitle": "直近100回の当選番号に基づいた分析結果です。",
        "hot-title": "頻出番号 (ホット)",
        "hot-desc": "直近100回で最も多く出現した番号です。",
        "cold-title": "低頻出番号 (コールド)",
        "cold-desc": "直近100回で最も出現が少なかった番号です。",
        "how-title": "スマートジェネレーターの仕組み",
        "how-p1": "私たちのアルゴリズムは単にランダムに番号を選ぶだけではありません。直近100回の履歴データを分析してパターンを特定します。番号を大きく2つのグループに分類します：",
        "how-hot-title": "1. ホット番号",
        "how-hot-desc": "最近の抽選で頻繁に出現している番号です。一部のプレイヤーは、現在のトレンドに従って「ホット」な番号が再び出現する可能性が高いと考えています。",
        "how-cold-title": "2. コールド番号",
        "how-cold-desc": "しばらく出現していない番号です。「平均の法則」は、これらの番号がそろそろ出現する時期であることを示唆しており、戦略的なプレイヤーに人気があります。",
        "how-balance-title": "統計的バランス",
        "how-balance-desc": "スマートジェネレーターはこれらの洞察を組み合わせて、次のチケットのためにトレンド番号と未出現番号を混ぜたバランスの良い番号セットを提供します。",
        "gaming-title": "責任あるゲーミング",
        "gaming-desc1": "ロトは運任せのゲームです。当ジェネレーターは統計データを使用して番号選びをサポートしますが、当選を保証するものではありません。責任を持って、失っても問題のない範囲でプレイしてください。",
        "gaming-desc2": "ギャンブル依存症でお悩みの方は、お住まいの地域の専門機関にご相談ください。",
        "community-title": "コミュニティ掲示板",
        "footer-copy": "&copy; 2026 LottoSmart. All rights reserved.",
        "footer-disclaimer": "免責事項：当サイトは公式の宝くじ組織とは一切関係ありません。"
    }
};

function initLanguage() {
    const langBtns = document.querySelectorAll('.lang-btn');
    const currentLang = localStorage.getItem('lang') || 'en';
    
    setLanguage(currentLang);

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
            localStorage.setItem('lang', lang);
        });
    });
}

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    
    document.documentElement.lang = lang;
}

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
    initLanguage();
    initLottoLogic();
});
