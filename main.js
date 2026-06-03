console.log('Script loaded v5');

const translations = {
    en: {
        "nav-home": "Home",
        "nav-fortune": "Fortune",
        "nav-about": "About",
        "nav-contact": "Contact",
        "nav-privacy": "Privacy",
        "fortune-title": "Today's Fortune",
        "fortune-subtitle": "Enter your birth date to reveal your personalized fortune for today.",
        "fortune-label-birth": "Date of Birth",
        "fortune-label-gender": "Gender",
        "fortune-gender-f": "Female",
        "fortune-gender-m": "Male",
        "fortune-gender-x": "Prefer not to say",
        "fortune-btn": "See My Fortune",
        "fortune-validate": "Please enter your date of birth first.",
        "fortune-overall": "Overall",
        "fortune-money": "Money",
        "fortune-love": "Love",
        "fortune-health": "Health",
        "fortune-lucky-number": "Lucky Number",
        "fortune-lucky-color": "Lucky Color",
        "fortune-lucky-direction": "Lucky Direction",
        "fortune-cross-link": "Generate lottery numbers with your lucky number →",
        "fortune-info-title": "How Your Daily Fortune Works",
        "fortune-info-p1": "Your daily fortune is calculated from your date of birth combined with today's date. The result stays the same throughout the day, so you can check it any time and revisit it whenever you like. A fresh reading is generated for you every new day.",
        "fortune-info-h2": "Four Areas of Life",
        "fortune-info-p2": "We break your day down into four key areas — overall flow, money, love, and health — each with a score and a short guidance message. Use the higher-scoring areas to plan important activities, and treat the lower ones as a reminder to slow down and take care.",
        "fortune-info-h3": "Lucky Number, Color & Direction",
        "fortune-info-p3": "Each reading includes a lucky number (1–45), a lucky color, and a lucky direction for the day. Many visitors enjoy using their lucky number as a starting point for choosing lottery numbers on our home page.",
        "fortune-disc-title": "For Entertainment Only",
        "fortune-disc-p": "This fortune service is provided purely for entertainment and self-reflection purposes. It does not predict actual future events and should not be used as a basis for important financial, medical, or personal decisions.",
        "fortune-disc-short": "Disclaimer: This fortune service is for entertainment purposes only.",
        "index-fortune-cta": "✨ See your free fortune for today →",
        "nav-face": "Face Reading",
        "nav-compat": "Compatibility",
        "cta-face": "🔮 Try AI face reading →",
        "cta-compat": "💞 Check your love compatibility →",
        "face-title": "Face Reading",
        "face-subtitle": "Upload a selfie and discover what your features reveal about you.",
        "face-label-upload": "Upload your photo",
        "face-btn": "Read My Face",
        "face-validate": "Please choose a photo first.",
        "face-privacy": "🔒 Your photo is analyzed locally in your browser and is never uploaded to any server.",
        "face-overall-label": "Face Reading Score",
        "face-summary-label": "Overall Reading",
        "face-feature-forehead": "Forehead · Early Life & Wisdom",
        "face-feature-eyes": "Eyes · Relationships & Charm",
        "face-feature-nose": "Nose · Wealth & Drive",
        "face-feature-mouth": "Mouth · Love & Expression",
        "face-feature-jaw": "Jaw · Later Life & Persistence",
        "face-info-title": "How Face Reading Works",
        "face-info-p1": "Face reading (physiognomy) is a traditional East Asian practice of interpreting personality and fortune from facial features. Upload a selfie and our tool gives you a playful reading of five key features, generated entirely on your device.",
        "face-info-h2": "Your Privacy Comes First",
        "face-info-p2": "Your image never leaves your phone or computer — it is read directly in your browser to create a consistent result for the same photo. Nothing is stored or sent anywhere.",
        "face-disc-title": "For Entertainment Only",
        "face-disc-p": "This face reading is for entertainment and self-reflection only. It is not a scientific, medical, or psychological assessment of any kind.",
        "compat-title": "Love Compatibility",
        "compat-subtitle": "Enter two birth dates to see how well your energies match.",
        "compat-label-me": "Your birth date",
        "compat-label-partner": "Partner's birth date",
        "compat-btn": "Check Compatibility",
        "compat-validate": "Please enter both birth dates.",
        "compat-overall-label": "Compatibility Score",
        "compat-summary-label": "Overall Match",
        "compat-sub-personality": "Personality Match",
        "compat-sub-romance": "Romantic Spark",
        "compat-sub-money": "Money & Values",
        "compat-sub-future": "Long-term Future",
        "compat-info-title": "How Compatibility Works",
        "compat-info-p1": "Compatibility readings combine both birth dates to explore how two people's energies interact across personality, romance, shared values, and long-term outlook.",
        "compat-info-h2": "Four Dimensions of a Relationship",
        "compat-info-p2": "We score four areas and give you a short, encouraging note for each, plus an overall match score to spark a fun conversation between you and your partner.",
        "compat-disc-title": "For Entertainment Only",
        "compat-disc-p": "This compatibility reading is for entertainment purposes only and is not relationship, psychological, or professional advice.",
        "share-btn": "📸 Save / Share result image",
        "share-saved": "Image saved! Share it on your favorite app.",
        "premium-cta": "🌟 See the 2026 Full Fortune Report →",
        "premium-title": "2026 Full Fortune Report",
        "premium-subtitle": "Enter your birth date for a complete yearly + monthly fortune in one place.",
        "premium-btn": "Generate Report",
        "premium-year-label": "2026 Overall Summary",
        "premium-fields-title": "Yearly Fortune by Area",
        "premium-field-overall": "Overall",
        "premium-field-money": "Money",
        "premium-field-love": "Love",
        "premium-field-career": "Career",
        "premium-field-health": "Health",
        "premium-months-title": "Monthly Fortune (Jan–Dec)",
        "premium-lucky-title": "This Year's Lucky Code",
        "premium-keyword-label": "Lucky Keyword",
        "premium-color-label": "Lucky Color",
        "premium-number-label": "Lucky Number",
        "premium-advice-title": "Overall Advice",
        "premium-locked-title": "🔒 Full Report Locked",
        "premium-locked-desc": "Unlock all 12 monthly readings, your lucky code, and the overall advice.",
        "premium-buy-btn": "Unlock full report — ₩2,900",
        "premium-price-note": "One-time payment · instant full access",
        "premium-unlocked-badge": "✓ Payment complete — full report unlocked",
        "premium-info-title": "About This Report",
        "premium-info-p": "Your full 2026 report — the yearly summary, all 12 monthly readings, lucky code, and overall advice — is currently free to read.",
        "premium-disc-title": "For Entertainment Only",
        "premium-disc-p": "This report is for entertainment and self-reflection and does not predict the actual future.",
        "premium-config-missing": "The checkout link isn't set up yet. Please contact the site owner.",
        "nav-zodiac": "Chinese Zodiac",
        "cta-zodiac": "🐯 See your Chinese zodiac fortune →",
        "zodiac-title": "Chinese Zodiac Fortune",
        "zodiac-subtitle": "Enter your birth year to find your zodiac animal and its fortune.",
        "zodiac-label-year": "Birth year",
        "zodiac-btn": "See My Zodiac Fortune",
        "zodiac-validate": "Please enter a valid birth year.",
        "zodiac-trait-label": "Your Nature",
        "zodiac-today-label": "Today's Zodiac Fortune",
        "zodiac-year-label": "2026 Year Fortune",
        "zodiac-years-label": "Birth years",
        "zodiac-number-label": "Lucky Number",
        "zodiac-color-label": "Lucky Color",
        "zodiac-info-title": "About the Chinese Zodiac",
        "zodiac-info-p": "The Chinese zodiac assigns one of twelve animals to each birth year in a repeating 12-year cycle. Your animal is said to shape your personality and fortune. Enter your birth year to see your animal, its nature, today's reading, and your 2026 outlook.",
        "zodiac-disc-title": "For Entertainment Only",
        "zodiac-disc-p": "This zodiac reading is for entertainment and self-reflection only and does not predict the actual future.",
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
        "footer-disclaimer": "Disclaimer: This site is not affiliated with any official lottery organization.",
        "about-title": "About LottoSmart",
        "about-p1": "Welcome to LottoSmart, your data-driven companion for lottery number generation. Our mission is to provide lottery enthusiasts with a smarter way to choose their numbers by leveraging historical data and statistical trends.",
        "about-phi-title": "Our Philosophy",
        "about-phi-p": "While the lottery is fundamentally a game of chance, we believe that understanding the patterns in historical draws can add an extra layer of engagement and strategy to the experience. We focus on transparency and data-driven insights.",
        "about-algo-title": "The \"Smart\" Algorithm",
        "about-algo-p": "Our generator doesn't just pull numbers out of a hat. It processes the results of the last 100 draws to identify:",
        "about-algo-li1": "<strong>Hot Numbers:</strong> High-frequency numbers that are currently trending.",
        "about-algo-li2": "<strong>Cold Numbers:</strong> Low-frequency numbers that haven't appeared for a while.",
        "about-algo-li3": "<strong>Balanced Distribution:</strong> A selection that mixes both types to cover multiple statistical possibilities.",
        "about-why-title": "Why Choose LottoSmart?",
        "about-why-p": "Most generators are purely random. LottoSmart gives you the context of *why* certain numbers might be interesting choices based on the actual history of the game. It's a tool for those who enjoy the \"meta-game\" of lottery statistics.",
        "about-contact-title": "Contact Us",
        "about-contact-p": "Have questions or suggestions? We'd love to hear from you. Please visit our <a href=\"contact.html\">Contact Page</a> to get in touch.",
        "contact-title": "Contact Us",
        "contact-subtitle": "Have questions or want to collaborate? Get in touch with us!",
        "contact-label-name": "Name",
        "contact-label-email": "Email",
        "contact-label-message": "Message",
        "contact-btn": "Send Message",
        "contact-partner-title": "Partnership Inquiries",
        "contact-partner-p": "We are open to collaborations, data sharing, and sponsorship opportunities. If you have a business proposal, please specify it in the message field above, and our team will get back to you within 2-3 business days.",
        "privacy-title": "Privacy Policy",
        "privacy-intro": "Your privacy is important to us. This Privacy Policy document outlines the types of personal information that is received and collected by LottoSmart and how it is used.",
        "privacy-log-title": "Log Files",
        "privacy-log-p": "Like many other Web sites, LottoSmart makes use of log files. The information inside the log files includes internet protocol ( IP ) addresses, type of browser, Internet Service Provider ( ISP ), date/time stamp, referring/exit pages, and number of clicks to analyze trends, administer the site, track user’s movement around the site, and gather demographic information.",
        "privacy-cookie-title": "Cookies and Web Beacons",
        "privacy-cookie-p": "LottoSmart does use cookies to store information about visitors preferences, record user-specific information on which pages the user access or visit, customize Web page content based on visitors browser type or other information that the visitor sends via their browser.",
        "privacy-adsense-title": "Google AdSense and Cookies",
        "privacy-adsense-p1": "Google, as a third party vendor, uses cookies to serve ads on LottoSmart.",
        "privacy-adsense-li1": "Google's use of the DART cookie enables it to serve ads to users based on their visit to LottoSmart and other sites on the Internet.",
        "privacy-adsense-li2": "Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy at the following URL - <a href=\"https://policies.google.com/technologies/ads\">https://policies.google.com/technologies/ads</a>",
        "privacy-adsense-p2": "These third-party ad servers or ad networks use technology to the advertisements and links that appear on LottoSmart send directly to your browsers. They automatically receive your IP address when this occurs. Other technologies ( such as cookies, JavaScript, or Web Beacons ) may also be used by the third-party ad networks to measure the effectiveness of their advertisements and / or to personalize the advertising content that you see.",
        "privacy-adsense-p3": "LottoSmart has no access to or control over these cookies that are used by third-party advertisers.",
        "privacy-contact-title": "Contact Information",
        "privacy-contact-p": "If you require any more information or have any questions about our privacy policy, please feel free to contact us by email at our <a href=\"contact.html\">Contact Page</a>."
    },
    ko: {
        "nav-home": "홈",
        "nav-fortune": "운세",
        "nav-about": "소개",
        "nav-contact": "문의",
        "nav-privacy": "개인정보처리방침",
        "fortune-title": "오늘의 운세",
        "fortune-subtitle": "생년월일을 입력하고 오늘의 맞춤 운세를 확인하세요.",
        "fortune-label-birth": "생년월일",
        "fortune-label-gender": "성별",
        "fortune-gender-f": "여성",
        "fortune-gender-m": "남성",
        "fortune-gender-x": "선택 안 함",
        "fortune-btn": "내 운세 보기",
        "fortune-validate": "먼저 생년월일을 입력해 주세요.",
        "fortune-overall": "총운",
        "fortune-money": "금전운",
        "fortune-love": "애정운",
        "fortune-health": "건강운",
        "fortune-lucky-number": "행운의 숫자",
        "fortune-lucky-color": "행운의 색",
        "fortune-lucky-direction": "행운의 방향",
        "fortune-cross-link": "행운의 숫자로 로또 번호 생성하러 가기 →",
        "fortune-info-title": "오늘의 운세는 이렇게 만들어집니다",
        "fortune-info-p1": "오늘의 운세는 입력하신 생년월일과 오늘 날짜를 결합하여 계산됩니다. 결과는 하루 동안 동일하게 유지되므로 언제든지 다시 확인하실 수 있으며, 매일 새로운 운세가 생성됩니다.",
        "fortune-info-h2": "인생의 네 가지 영역",
        "fortune-info-p2": "하루를 총운, 금전운, 애정운, 건강운 네 가지 핵심 영역으로 나누어 각각 점수와 짧은 조언을 드립니다. 점수가 높은 영역은 중요한 일을 계획하는 데 활용하고, 낮은 영역은 잠시 쉬어가며 자신을 돌보는 신호로 받아들여 보세요.",
        "fortune-info-h3": "행운의 숫자·색·방향",
        "fortune-info-p3": "각 운세에는 행운의 숫자(1~45), 행운의 색, 행운의 방향이 포함됩니다. 많은 분들이 이 행운의 숫자를 홈페이지에서 로또 번호를 고를 때 출발점으로 활용합니다.",
        "fortune-disc-title": "재미로 보는 운세입니다",
        "fortune-disc-p": "이 운세 서비스는 오로지 재미와 자기 성찰을 위한 것입니다. 실제 미래를 예측하지 않으며, 중요한 금전적·의료적·개인적 결정의 근거로 사용해서는 안 됩니다.",
        "fortune-disc-short": "면책 조항: 이 운세 서비스는 오락 목적으로만 제공됩니다.",
        "index-fortune-cta": "✨ 오늘의 운세 무료로 보기 →",
        "nav-face": "관상",
        "nav-compat": "궁합",
        "cta-face": "🔮 AI 관상 보러 가기 →",
        "cta-compat": "💞 우리 궁합 확인하기 →",
        "face-title": "AI 관상",
        "face-subtitle": "셀카를 올리고 당신의 얼굴이 말해주는 기질을 확인하세요.",
        "face-label-upload": "사진 올리기",
        "face-btn": "내 관상 보기",
        "face-validate": "먼저 사진을 선택해 주세요.",
        "face-privacy": "🔒 사진은 브라우저 안에서만 분석되며, 어떤 서버로도 업로드되지 않습니다.",
        "face-overall-label": "관상 총점",
        "face-summary-label": "종합 관상",
        "face-feature-forehead": "이마 · 초년운과 지혜",
        "face-feature-eyes": "눈 · 대인관계와 매력",
        "face-feature-nose": "코 · 재물운과 추진력",
        "face-feature-mouth": "입 · 애정과 표현력",
        "face-feature-jaw": "턱 · 말년운과 끈기",
        "face-info-title": "관상은 이렇게 봅니다",
        "face-info-p1": "관상은 얼굴의 생김새로 성격과 운을 풀이하는 동양의 전통 문화입니다. 셀카를 올리면 다섯 가지 핵심 부위에 대한 재미있는 풀이를 모두 기기 안에서 생성해 드립니다.",
        "face-info-h2": "개인정보가 최우선입니다",
        "face-info-p2": "사진은 휴대폰이나 PC를 절대 벗어나지 않습니다. 같은 사진은 같은 결과가 나오도록 브라우저에서 직접 읽어 처리하며, 어디에도 저장하거나 전송하지 않습니다.",
        "face-disc-title": "재미로 보는 관상입니다",
        "face-disc-p": "이 관상은 오로지 재미와 자기 성찰을 위한 것입니다. 과학적·의학적·심리학적 진단이 결코 아닙니다.",
        "compat-title": "궁합 보기",
        "compat-subtitle": "두 사람의 생년월일을 넣고 서로의 기운이 얼마나 맞는지 확인하세요.",
        "compat-label-me": "내 생년월일",
        "compat-label-partner": "상대 생년월일",
        "compat-btn": "궁합 확인하기",
        "compat-validate": "두 사람의 생년월일을 모두 입력해 주세요.",
        "compat-overall-label": "궁합 총점",
        "compat-summary-label": "종합 궁합",
        "compat-sub-personality": "성격 궁합",
        "compat-sub-romance": "연애 케미",
        "compat-sub-money": "금전·가치관",
        "compat-sub-future": "장기적 미래",
        "compat-info-title": "궁합은 이렇게 봅니다",
        "compat-info-p1": "궁합 풀이는 두 사람의 생년월일을 결합해 성격, 연애, 가치관, 장기적 전망의 네 영역에서 두 기운이 어떻게 어울리는지 살펴봅니다.",
        "compat-info-h2": "관계의 네 가지 영역",
        "compat-info-p2": "네 영역을 점수화하고 각각 짧은 응원의 한마디를 드리며, 총점으로 두 분 사이의 즐거운 대화거리를 만들어 드립니다.",
        "compat-disc-title": "재미로 보는 궁합입니다",
        "compat-disc-p": "이 궁합은 오락 목적으로만 제공되며, 관계·심리·전문 상담이 아닙니다.",
        "share-btn": "📸 결과 이미지로 저장 · 공유하기",
        "share-saved": "이미지가 저장되었어요! 원하는 앱에 공유해 보세요.",
        "premium-cta": "🌟 2026 종합운세 리포트 보기 →",
        "premium-title": "2026 종합운세 리포트",
        "premium-subtitle": "생년월일을 넣으면 올해의 연간·월별 운세를 한 번에 정리해 드립니다.",
        "premium-btn": "리포트 생성하기",
        "premium-year-label": "2026년 종합 총평",
        "premium-fields-title": "분야별 연간 운세",
        "premium-field-overall": "총운",
        "premium-field-money": "금전운",
        "premium-field-love": "애정운",
        "premium-field-career": "직업운",
        "premium-field-health": "건강운",
        "premium-months-title": "월별 운세 (1~12월)",
        "premium-lucky-title": "올해의 행운 코드",
        "premium-keyword-label": "행운 키워드",
        "premium-color-label": "행운 색",
        "premium-number-label": "행운 숫자",
        "premium-advice-title": "종합 조언",
        "premium-locked-title": "🔒 전체 리포트 잠금",
        "premium-locked-desc": "12개월 월별 운세 · 행운 코드 · 종합 조언을 모두 확인하세요.",
        "premium-buy-btn": "₩2,900 결제하고 전체 보기",
        "premium-price-note": "1회 결제 · 즉시 전체 공개",
        "premium-unlocked-badge": "✓ 결제 완료 — 전체 리포트 열람 중",
        "premium-info-title": "리포트 안내",
        "premium-info-p": "2026 전체 리포트 — 연간 총평, 12개월 월별 운세, 행운 코드, 종합 조언 — 를 지금은 무료로 보실 수 있습니다.",
        "premium-disc-title": "재미로 보는 운세입니다",
        "premium-disc-p": "이 리포트는 오락 및 자기 성찰용이며 실제 미래를 예측하지 않습니다.",
        "premium-config-missing": "결제 링크가 아직 설정되지 않았습니다. 사이트 관리자에게 문의해 주세요.",
        "nav-zodiac": "띠별 운세",
        "cta-zodiac": "🐯 내 띠 운세 보기 →",
        "zodiac-title": "띠별 운세",
        "zodiac-subtitle": "태어난 해를 입력하면 내 띠와 운세를 알려드립니다.",
        "zodiac-label-year": "태어난 해(연도)",
        "zodiac-btn": "내 띠 운세 보기",
        "zodiac-validate": "올바른 출생 연도를 입력해 주세요.",
        "zodiac-trait-label": "타고난 기질",
        "zodiac-today-label": "오늘의 띠 운세",
        "zodiac-year-label": "2026 올해의 운세",
        "zodiac-years-label": "해당 출생 연도",
        "zodiac-number-label": "행운의 숫자",
        "zodiac-color-label": "행운의 색",
        "zodiac-info-title": "띠별 운세란",
        "zodiac-info-p": "십이지(띠)는 12년 주기로 태어난 해마다 하나의 동물이 배정되는 동양 문화입니다. 자신의 띠가 성격과 운을 좌우한다고 여겨집니다. 태어난 해를 입력하면 내 띠와 기질, 오늘의 운세, 2026년 전망을 보여드립니다.",
        "zodiac-disc-title": "재미로 보는 운세입니다",
        "zodiac-disc-p": "이 띠별 운세는 오락 및 자기 성찰용이며 실제 미래를 예측하지 않습니다.",
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
        "footer-disclaimer": "면책 조항: 이 사이트는 공식 복권 기관과 관련이 없습니다.",
        "about-title": "LottoSmart 소개",
        "about-p1": "데이터 기반의 로또 번호 생성 동반자인 LottoSmart에 오신 것을 환영합니다. 우리의 사명은 과거 데이터와 통계적 트렌드를 활용하여 로또 애호가들에게 번호를 선택하는 더 스마트한 방법을 제공하는 것입니다.",
        "about-phi-title": "우리의 철학",
        "about-phi-p": "로또는 근본적으로 확률 게임이지만, 과거 추첨 패턴을 이해하면 게임에 전략과 즐거움을 더할 수 있다고 믿습니다. 우리는 투명성과 데이터 기반의 통찰력에 집중합니다.",
        "about-algo-title": "스마트 알고리즘",
        "about-algo-p": "우리의 생성기는 단순히 번호를 무작위로 뽑지 않습니다. 최근 100회차의 결과를 분석하여 다음을 식별합니다:",
        "about-algo-li1": "<strong>핫(Hot) 번호:</strong> 현재 트렌드인 고빈도 번호들.",
        "about-algo-li2": "<strong>콜드(Cold) 번호:</strong> 한동안 나타나지 않은 저빈도 번호들.",
        "about-algo-li3": "<strong>균형 잡힌 분포:</strong> 여러 통계적 가능성을 포괄하기 위해 두 유형을 혼합한 선택.",
        "about-why-title": "왜 LottoSmart인가요?",
        "about-why-p": "대부분의 생성기는 순수하게 무작위입니다. LottoSmart는 실제 게임 이력을 바탕으로 왜 특정 번호가 흥미로운 선택이 될 수 있는지에 대한 맥락을 제공합니다. 로또 통계라는 '메타 게임'을 즐기는 분들을 위한 도구입니다.",
        "about-contact-title": "문의하기",
        "about-contact-p": "질문이나 제안사항이 있으신가요? 여러분의 의견을 기다립니다. <a href=\"contact.html\">문의 페이지</a>를 방문해 주세요.",
        "contact-title": "문의하기",
        "contact-subtitle": "질문이 있거나 협업을 원하시나요? 언제든지 연락주세요!",
        "contact-label-name": "이름",
        "contact-label-email": "이메일",
        "contact-label-message": "메시지",
        "contact-btn": "메시지 보내기",
        "contact-partner-title": "파트너십 문의",
        "contact-partner-p": "우리는 협업, 데이터 공유 및 스폰서십 기회에 열려 있습니다. 비즈니스 제안이 있으시면 위의 메시지 필드에 자세히 적어주세요. 우리 팀이 영업일 기준 2~3일 이내에 답변을 드릴 것입니다.",
        "privacy-title": "개인정보처리방침",
        "privacy-intro": "여러분의 개인정보는 우리에게 매우 중요합니다. 이 개인정보처리방침 문서는 LottoSmart에서 수집하고 수신하는 개인정보의 유형과 그 사용 방법을 설명합니다.",
        "privacy-log-title": "로그 파일",
        "privacy-log-p": "다른 많은 웹사이트와 마찬가지로, LottoSmart는 로그 파일을 사용합니다. 로그 파일 내부의 정보에는 IP 주소, 브라우저 유형, 인터넷 서비스 제공업체(ISP), 날짜/시간 스탬프, 참조/종료 페이지, 트렌드 분석을 위한 클릭 수 등이 포함됩니다.",
        "privacy-cookie-title": "쿠키 및 웹 비콘",
        "privacy-cookie-p": "LottoSmart는 방문자의 선호도 정보를 저장하고, 방문자가 액세스하거나 방문한 페이지에 대한 사용자별 정보를 기록하며, 브라우저 유형이나 방문자가 브라우저를 통해 보내는 기타 정보에 따라 웹 페이지 콘텐츠를 맞춤화하기 위해 쿠키를 사용합니다.",
        "privacy-adsense-title": "구글 애드센스 및 쿠키",
        "privacy-adsense-p1": "구글은 제3자 공급업체로서 쿠키를 사용하여 LottoSmart에 광고를 게재합니다.",
        "privacy-adsense-li1": "구글의 DART 쿠키 사용을 통해 사용자가 LottoSmart 및 인터넷의 다른 사이트를 방문한 기록을 바탕으로 광고를 게재할 수 있습니다.",
        "privacy-adsense-li2": "사용자는 다음 URL의 구글 광고 및 콘텐츠 네트워크 개인정보처리방침을 방문하여 DART 쿠키 사용을 거부할 수 있습니다. - <a href=\"https://policies.google.com/technologies/ads\">https://policies.google.com/technologies/ads</a>",
        "privacy-adsense-p2": "이러한 제3자 광고 서버 또는 광고 네트워크는 LottoSmart에 나타나는 광고 및 링크에 기술을 사용하여 사용자의 브라우저로 직접 전송합니다. 이 과정에서 사용자의 IP 주소를 자동으로 수신합니다. 쿠키, 자바스크립트 또는 웹 비콘과 같은 기타 기술도 제3자 광고 네트워크에서 광고의 효과를 측정하거나 광고 콘텐츠를 개인화하기 위해 사용할 수 있습니다.",
        "privacy-adsense-p3": "LottoSmart는 제3자 광고주가 사용하는 이러한 쿠키에 액세스하거나 제어할 권한이 없습니다.",
        "privacy-contact-title": "문의 정보",
        "privacy-contact-p": "개인정보처리방침에 대해 더 자세한 정보가 필요하거나 궁금한 점이 있으시면 <a href=\"contact.html\">문의 페이지</a>를 통해 이메일로 연락해 주시기 바랍니다."
    },
    zh: {
        "nav-home": "首页",
        "nav-fortune": "运势",
        "nav-about": "关于",
        "nav-contact": "联系我们",
        "nav-privacy": "隐私政策",
        "fortune-title": "今日运势",
        "fortune-subtitle": "输入您的出生日期，揭晓您今天的专属运势。",
        "fortune-label-birth": "出生日期",
        "fortune-label-gender": "性别",
        "fortune-gender-f": "女",
        "fortune-gender-m": "男",
        "fortune-gender-x": "不愿透露",
        "fortune-btn": "查看我的运势",
        "fortune-validate": "请先输入您的出生日期。",
        "fortune-overall": "综合运",
        "fortune-money": "财运",
        "fortune-love": "爱情运",
        "fortune-health": "健康运",
        "fortune-lucky-number": "幸运数字",
        "fortune-lucky-color": "幸运颜色",
        "fortune-lucky-direction": "幸运方位",
        "fortune-cross-link": "用您的幸运数字生成乐透号码 →",
        "fortune-info-title": "今日运势如何生成",
        "fortune-info-p1": "您的今日运势是根据您的出生日期与今天的日期结合计算得出的。结果在一天内保持不变，因此您可以随时查看和回顾，每天都会为您生成全新的运势。",
        "fortune-info-h2": "人生四大领域",
        "fortune-info-p2": "我们将您的一天分为四个关键领域——综合运、财运、爱情运和健康运，每个领域都有评分和简短的指引。利用评分高的领域来规划重要活动，并将评分低的领域视为放慢脚步、好好照顾自己的提醒。",
        "fortune-info-h3": "幸运数字、颜色与方位",
        "fortune-info-p3": "每次运势都包含幸运数字（1–45）、幸运颜色和当天的幸运方位。许多访客喜欢将幸运数字作为在我们首页选择乐透号码的起点。",
        "fortune-disc-title": "仅供娱乐",
        "fortune-disc-p": "本运势服务纯粹用于娱乐和自我反思目的。它不预测实际的未来事件，不应作为重要财务、医疗或个人决策的依据。",
        "fortune-disc-short": "免责声明：本运势服务仅供娱乐之用。",
        "index-fortune-cta": "✨ 免费查看你的今日运势 →",
        "nav-face": "面相",
        "nav-compat": "配对",
        "cta-face": "🔮 来看 AI 面相 →",
        "cta-compat": "💞 查看你们的配对 →",
        "face-title": "AI 面相",
        "face-subtitle": "上传一张自拍，看看你的面容透露了什么。",
        "face-label-upload": "上传照片",
        "face-btn": "查看我的面相",
        "face-validate": "请先选择一张照片。",
        "face-privacy": "🔒 照片仅在你的浏览器中分析，绝不会上传到任何服务器。",
        "face-overall-label": "面相总分",
        "face-summary-label": "综合面相",
        "face-feature-forehead": "额头 · 早年运与智慧",
        "face-feature-eyes": "眼睛 · 人际与魅力",
        "face-feature-nose": "鼻子 · 财运与行动力",
        "face-feature-mouth": "嘴 · 爱情与表达",
        "face-feature-jaw": "下巴 · 晚年运与毅力",
        "face-info-title": "面相是怎么看的",
        "face-info-p1": "面相是东亚传统文化，通过面部特征解读性格与运势。上传自拍，我们的工具会就五个关键部位给出有趣的解读，全部在你的设备上生成。",
        "face-info-h2": "隐私至上",
        "face-info-p2": "你的照片绝不会离开手机或电脑——它直接在浏览器中读取，使同一张照片得到一致的结果，不会被存储或发送到任何地方。",
        "face-disc-title": "仅供娱乐",
        "face-disc-p": "本面相仅供娱乐与自我反思之用，绝非任何科学、医学或心理评估。",
        "compat-title": "缘分配对",
        "compat-subtitle": "输入两个出生日期，看看你们的气场有多契合。",
        "compat-label-me": "你的出生日期",
        "compat-label-partner": "对方的出生日期",
        "compat-btn": "查看配对",
        "compat-validate": "请输入两个出生日期。",
        "compat-overall-label": "配对总分",
        "compat-summary-label": "综合配对",
        "compat-sub-personality": "性格契合",
        "compat-sub-romance": "恋爱火花",
        "compat-sub-money": "金钱与价值观",
        "compat-sub-future": "长远未来",
        "compat-info-title": "配对是怎么看的",
        "compat-info-p1": "配对解读结合两人的出生日期，探讨两人的气场在性格、爱情、价值观与长远前景四个方面如何互动。",
        "compat-info-h2": "关系的四个维度",
        "compat-info-p2": "我们为四个方面打分并各给一句简短的鼓励语，再加上一个总分，为你和对方制造有趣的话题。",
        "compat-disc-title": "仅供娱乐",
        "compat-disc-p": "本配对仅供娱乐之用，并非关系、心理或专业建议。",
        "share-btn": "📸 保存 · 分享结果图",
        "share-saved": "图片已保存！快分享到你喜欢的应用吧。",
        "premium-cta": "🌟 查看 2026 综合运势报告 →",
        "premium-title": "2026 综合运势报告",
        "premium-subtitle": "输入出生日期，一次性整理今年的年度与每月运势。",
        "premium-btn": "生成报告",
        "premium-year-label": "2026 综合总评",
        "premium-fields-title": "分领域年度运势",
        "premium-field-overall": "综合运",
        "premium-field-money": "财运",
        "premium-field-love": "爱情运",
        "premium-field-career": "事业运",
        "premium-field-health": "健康运",
        "premium-months-title": "每月运势（1–12月）",
        "premium-lucky-title": "今年的幸运密码",
        "premium-keyword-label": "幸运关键词",
        "premium-color-label": "幸运颜色",
        "premium-number-label": "幸运数字",
        "premium-advice-title": "综合建议",
        "premium-locked-title": "🔒 完整报告已锁定",
        "premium-locked-desc": "解锁全部12个月运势、幸运密码与综合建议。",
        "premium-buy-btn": "₩2,900 解锁完整报告",
        "premium-price-note": "一次性付款 · 立即全面开放",
        "premium-unlocked-badge": "✓ 支付完成 —— 完整报告已解锁",
        "premium-info-title": "关于本报告",
        "premium-info-p": "您的 2026 完整报告——年度总评、全部12个月运势、幸运密码与综合建议——目前可免费阅读。",
        "premium-disc-title": "仅供娱乐",
        "premium-disc-p": "本报告仅供娱乐与自我反思，不预测真实未来。",
        "premium-config-missing": "结账链接尚未设置，请联系网站管理员。",
        "nav-zodiac": "生肖运势",
        "cta-zodiac": "🐯 查看你的生肖运势 →",
        "zodiac-title": "生肖运势",
        "zodiac-subtitle": "输入出生年份，找到你的生肖与运势。",
        "zodiac-label-year": "出生年份",
        "zodiac-btn": "查看我的生肖运势",
        "zodiac-validate": "请输入有效的出生年份。",
        "zodiac-trait-label": "天生气质",
        "zodiac-today-label": "今日生肖运势",
        "zodiac-year-label": "2026 年度运势",
        "zodiac-years-label": "对应出生年份",
        "zodiac-number-label": "幸运数字",
        "zodiac-color-label": "幸运颜色",
        "zodiac-info-title": "关于生肖",
        "zodiac-info-p": "生肖以12年为周期，为每个出生年份指定一种动物，被认为影响性格与运势。输入出生年份，即可查看你的生肖、气质、今日运势与2026年展望。",
        "zodiac-disc-title": "仅供娱乐",
        "zodiac-disc-p": "本生肖运势仅供娱乐与自我反思，不预测真实未来。",
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
        "footer-disclaimer": "免责声明：本网站与任何官方彩票组织均无关联。",
        "about-title": "关于 LottoSmart",
        "about-p1": "欢迎来到 LottoSmart，您数据驱动的乐透号码生成伴侣。我们的使命是通过利用历史数据和统计趋势，为乐透爱好者提供一种更聪明的号码选择方式。",
        "about-phi-title": "我们的理念",
        "about-phi-p": "虽然乐透从根本上说是一种概率游戏，但我们相信，了解历史抽奖的模式可以为游戏体验增添额外的参与感和策略。我们专注于透明度和数据驱动的洞察力。",
        "about-algo-title": "“智能”算法",
        "about-algo-p": "我们的生成器不只是随手抽取号码。它处理最近 100 期的开奖结果，以识别：",
        "about-algo-li1": "<strong>热号：</strong> 当前流行的的高频号码。",
        "about-algo-li2": "<strong>冷号：</strong> 已经有一段时间没有出现的低频号码。",
        "about-algo-li3": "<strong>平衡分布：</strong> 混合两种类型的选择，以涵盖多种统计可能性。",
        "about-why-title": "为什么选择 LottoSmart？",
        "about-why-p": "大多数生成器纯粹是随机的。LottoSmart 根据游戏的实际历史，为您提供为什么某些号码可能是吸引人的选择的背景。它是为那些喜欢乐透统计“元游戏”的人设计的工具。",
        "about-contact-title": "联系我们",
        "about-contact-p": "有疑问或建议吗？我们很乐意听取您的意见。请访问我们的 <a href=\"contact.html\">联系页面</a> 与我们联系。",
        "contact-title": "联系我们",
        "contact-subtitle": "有疑问或想合作？请与我们联系！",
        "contact-label-name": "姓名",
        "contact-label-email": "电子邮件",
        "contact-label-message": "留言",
        "contact-btn": "发送留言",
        "contact-partner-title": "合作伙伴咨询",
        "contact-partner-p": "我们对合作、数据共享和赞助机会持开放态度。如果您有商业建议，请在上面的消息栏中注明，我们的团队将在 2-3 个工作日内回复您。",
        "privacy-title": "隐私政策",
        "privacy-intro": "您的隐私对我们非常重要。本隐私政策文件概述了 LottoSmart 接收和收集的个人信息的类型及其使用方式。",
        "privacy-log-title": "日志文件",
        "privacy-log-p": "与许多其他网站一样，LottoSmart 利用日志文件。日志文件中的信息包括互联网协议（IP）地址、浏览器类型、互联网服务提供商（ISP）、日期/时间戳、引用/退出页面以及分析趋势、管理网站、跟踪用户在网站上的移动并收集人口统计信息的点击次数。",
        "privacy-cookie-title": "Cookie 和网络信标",
        "privacy-cookie-p": "LottoSmart 使用 Cookie 来存储有关访问者偏好的信息，记录用户访问或浏览哪些页面的特定信息，根据访问者的浏览器类型或访问者通过其浏览器发送的其他信息自定义网页内容。",
        "privacy-adsense-title": "Google AdSense 和 Cookie",
        "privacy-adsense-p1": "Google 作为第三方供应商，使用 Cookie 在 LottoSmart 上投放广告。",
        "privacy-adsense-li1": "Google 对 DART Cookie 的使用使其能够根据用户对 LottoSmart 和互联网上其他网站的访问向其投放广告。",
        "privacy-adsense-li2": "用户可以通过访问以下网址的 Google 广告和内容网络隐私政策来选择退出 DART Cookie 的使用 - <a href=\"https://policies.google.com/technologies/ads\">https://policies.google.com/technologies/ads</a>",
        "privacy-adsense-p2": "这些第三方广告服务器或广告网络在 LottoSmart 上出现的广告和链接中使用技术，直接发送到您的浏览器。发生这种情况时，他们会自动接收您的 IP 地址。第三方广告网络也可能使用其他技术（如 Cookie、JavaScript 或网络信标）来衡量其广告的有效性和/或个性化您看到的广告内容。",
        "privacy-adsense-p3": "LottoSmart 无法访问或控制第三方广告商使用的这些 Cookie。",
        "privacy-contact-title": "联系信息",
        "privacy-contact-p": "如果您需要更多信息或对我们的隐私政策有任何疑问，请随时通过我们的 <a href=\"contact.html\">联系页面</a> 发送电子邮件与我们联系。"
    },
    ja: {
        "nav-home": "ホーム",
        "nav-fortune": "運勢",
        "nav-about": "アバウト",
        "nav-contact": "お問い合わせ",
        "nav-privacy": "プライバシーポリシー",
        "fortune-title": "今日の運勢",
        "fortune-subtitle": "生年月日を入力して、今日のあなただけの運勢をチェックしましょう。",
        "fortune-label-birth": "生年月日",
        "fortune-label-gender": "性別",
        "fortune-gender-f": "女性",
        "fortune-gender-m": "男性",
        "fortune-gender-x": "回答しない",
        "fortune-btn": "運勢を見る",
        "fortune-validate": "まず生年月日を入力してください。",
        "fortune-overall": "総合運",
        "fortune-money": "金運",
        "fortune-love": "恋愛運",
        "fortune-health": "健康運",
        "fortune-lucky-number": "ラッキーナンバー",
        "fortune-lucky-color": "ラッキーカラー",
        "fortune-lucky-direction": "ラッキー方位",
        "fortune-cross-link": "ラッキーナンバーでロト番号を生成する →",
        "fortune-info-title": "今日の運勢の仕組み",
        "fortune-info-p1": "今日の運勢は、入力された生年月日と今日の日付を組み合わせて計算されます。結果は一日中変わらないため、いつでも見返すことができ、毎日新しい運勢が生成されます。",
        "fortune-info-h2": "人生の4つの領域",
        "fortune-info-p2": "一日を総合運・金運・恋愛運・健康運の4つの主要な領域に分け、それぞれにスコアと短いアドバイスをお届けします。スコアの高い領域は大切な活動の計画に活かし、低い領域は少し立ち止まって自分をいたわる合図として受け止めてみてください。",
        "fortune-info-h3": "ラッキーナンバー・カラー・方位",
        "fortune-info-p3": "各運勢にはラッキーナンバー（1〜45）、ラッキーカラー、その日のラッキー方位が含まれます。多くの訪問者が、このラッキーナンバーをホームページでロト番号を選ぶ出発点として活用しています。",
        "fortune-disc-title": "娯楽目的のみ",
        "fortune-disc-p": "この運勢サービスは、純粋に娯楽と自己省察を目的として提供されています。実際の未来を予測するものではなく、重要な金銭的・医療的・個人的な決定の根拠として使用しないでください。",
        "fortune-disc-short": "免責事項：この運勢サービスは娯楽目的のみで提供されています。",
        "index-fortune-cta": "✨ 今日の運勢を無料でチェック →",
        "nav-face": "観相",
        "nav-compat": "相性",
        "cta-face": "🔮 AI観相を見る →",
        "cta-compat": "💞 二人の相性をチェック →",
        "face-title": "AI観相",
        "face-subtitle": "自撮りをアップして、あなたの顔が語る気質を確かめましょう。",
        "face-label-upload": "写真をアップ",
        "face-btn": "観相を見る",
        "face-validate": "まず写真を選んでください。",
        "face-privacy": "🔒 写真はブラウザ内でのみ分析され、サーバーには一切アップロードされません。",
        "face-overall-label": "観相スコア",
        "face-summary-label": "総合観相",
        "face-feature-forehead": "額 · 初年運と知恵",
        "face-feature-eyes": "目 · 対人関係と魅力",
        "face-feature-nose": "鼻 · 金運と行動力",
        "face-feature-mouth": "口 · 愛情と表現力",
        "face-feature-jaw": "顎 · 晩年運と粘り強さ",
        "face-info-title": "観相の見方",
        "face-info-p1": "観相は、顔立ちから性格や運勢を読み解く東アジアの伝統文化です。自撮りをアップすると、5つの主要部位について楽しい読み解きを、すべて端末内で生成します。",
        "face-info-h2": "プライバシーを最優先",
        "face-info-p2": "写真はスマホやPCから決して外に出ません。同じ写真は同じ結果になるようブラウザ内で直接読み込み、どこにも保存・送信しません。",
        "face-disc-title": "娯楽目的のみ",
        "face-disc-p": "この観相は娯楽と自己省察のためのものです。科学的・医学的・心理学的な診断では一切ありません。",
        "compat-title": "相性占い",
        "compat-subtitle": "二人の生年月日を入力して、気の合い方を確かめましょう。",
        "compat-label-me": "あなたの生年月日",
        "compat-label-partner": "相手の生年月日",
        "compat-btn": "相性をチェック",
        "compat-validate": "二人の生年月日を入力してください。",
        "compat-overall-label": "相性スコア",
        "compat-summary-label": "総合相性",
        "compat-sub-personality": "性格の相性",
        "compat-sub-romance": "恋のときめき",
        "compat-sub-money": "お金と価値観",
        "compat-sub-future": "長期の未来",
        "compat-info-title": "相性の見方",
        "compat-info-p1": "相性占いは二人の生年月日を組み合わせ、性格・恋愛・価値観・長期的な見通しの4領域で二人の気がどう響き合うかを見ます。",
        "compat-info-h2": "関係の4つの側面",
        "compat-info-p2": "4つの領域を点数化し、それぞれに短い応援の一言を添え、総合スコアで二人の楽しい会話のきっかけを作ります。",
        "compat-disc-title": "娯楽目的のみ",
        "compat-disc-p": "この相性占いは娯楽目的のみで、関係・心理・専門的な助言ではありません。",
        "share-btn": "📸 結果を画像で保存・シェア",
        "share-saved": "画像を保存しました！好きなアプリでシェアしてね。",
        "premium-cta": "🌟 2026 総合運勢レポートを見る →",
        "premium-title": "2026 総合運勢レポート",
        "premium-subtitle": "生年月日を入れると、今年の年間・月別運勢をまとめてお届けします。",
        "premium-btn": "レポート生成",
        "premium-year-label": "2026年 総合総評",
        "premium-fields-title": "分野別 年間運勢",
        "premium-field-overall": "総合運",
        "premium-field-money": "金運",
        "premium-field-love": "恋愛運",
        "premium-field-career": "仕事運",
        "premium-field-health": "健康運",
        "premium-months-title": "月別運勢（1〜12月）",
        "premium-lucky-title": "今年のラッキーコード",
        "premium-keyword-label": "ラッキーキーワード",
        "premium-color-label": "ラッキーカラー",
        "premium-number-label": "ラッキーナンバー",
        "premium-advice-title": "総合アドバイス",
        "premium-locked-title": "🔒 フルレポートはロック中",
        "premium-locked-desc": "12か月分の月別運勢・ラッキーコード・総合アドバイスをすべて解放。",
        "premium-buy-btn": "₩2,900 でフルレポート解放",
        "premium-price-note": "一回の支払い · すぐに全公開",
        "premium-unlocked-badge": "✓ 支払い完了 — フルレポート閲覧中",
        "premium-info-title": "レポートについて",
        "premium-info-p": "2026年のフルレポート（年間総評・12か月の月別運勢・ラッキーコード・総合アドバイス）は、現在無料でご覧いただけます。",
        "premium-disc-title": "娯楽目的のみ",
        "premium-disc-p": "このレポートは娯楽・自己省察用で、実際の未来を予測しません。",
        "premium-config-missing": "決済リンクがまだ設定されていません。サイト管理者にお問い合わせください。",
        "nav-zodiac": "干支占い",
        "cta-zodiac": "🐯 干支占いを見る →",
        "zodiac-title": "干支占い",
        "zodiac-subtitle": "生まれた年を入れると、干支と運勢がわかります。",
        "zodiac-label-year": "生まれた年",
        "zodiac-btn": "干支占いを見る",
        "zodiac-validate": "正しい生まれ年を入力してください。",
        "zodiac-trait-label": "生まれ持った気質",
        "zodiac-today-label": "今日の干支運勢",
        "zodiac-year-label": "2026年の運勢",
        "zodiac-years-label": "該当する生まれ年",
        "zodiac-number-label": "ラッキーナンバー",
        "zodiac-color-label": "ラッキーカラー",
        "zodiac-info-title": "干支占いとは",
        "zodiac-info-p": "干支は12年周期で、生まれた年ごとに一つの動物が割り当てられる東洋の文化です。自分の干支が性格や運を左右すると言われます。生まれた年を入れると、干支・気質・今日の運勢・2026年の見通しを表示します。",
        "zodiac-disc-title": "娯楽目的のみ",
        "zodiac-disc-p": "この干支占いは娯楽・自己省察用で、実際の未来を予測しません。",
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
        "footer-disclaimer": "免責事項：当サイトは公式の宝くじ組織とは一切関係ありません。",
        "about-title": "LottoSmartについて",
        "about-p1": "データ主導のロト番号生成のパートナー、LottoSmartへようこそ。私たちの使命は、過去のデータと統計的トレンドを活用して、ロト愛好家に番号選びのより賢い方法を提供することです。",
        "about-phi-title": "私たちの哲学",
        "about-phi-p": "ロト은 근본적으로 運任せ의 게임이지만, 過去の抽選パターンを理解することで、体験にさらなる関与と戦略を加えることができると信じています。私たちは透明性とデータ主導の洞察に焦点を当てています。",
        "about-algo-title": "「スマート」アルゴリズム",
        "about-algo-p": "当ジェネレーターは単に箱から番号を取り出すだけではありません。直近100回の結果を処理して以下を特定します：",
        "about-algo-li1": "<strong>ホット番号：</strong> 現在トレンドとなっている高頻度番号。",
        "about-algo-li2": "<strong>コールド番号：</strong> しばらく出現していない低頻度番号。",
        "about-algo-li3": "<strong>バランスの取れた分布：</strong> 複数の統計的可能性をカバーするために、両方のタイプを混ぜた選択。",
        "about-why-title": "なぜLottoSmartを選ぶのか？",
        "about-why-p": "ほとんどのジェネレーターは純粋にランダム입니다. LottoSmartは、ゲームの実際の履歴に基づいて、なぜ特定の番号が興味深い選択肢になり得るのかという背景を提供します。ロト統計という「メタゲーム」を楽しむ人々のためのツールです。",
        "about-contact-title": "お問い合わせ",
        "about-contact-p": "ご質問やご提案はありますか？皆様からのご意見をお待ちしております。<a href=\"contact.html\">お問い合わせページ</a>からご連絡ください。",
        "contact-title": "お問い合わせ",
        "contact-subtitle": "ご質問やコラボレーションのご提案はありますか？お気軽にご連絡ください！",
        "contact-label-name": "お名前",
        "contact-label-email": "メールアドレス",
        "contact-label-message": "メッセージ",
        "contact-btn": "メッセージを送信",
        "contact-partner-title": "パートナーシップに関するお問い合わせ",
        "contact-partner-p": "私たちはコラボレーション、データ共有、スポンサーシップの機会を歓迎しています。ビジネスのご提案がある場合は、上のメッセージ欄に詳細を記入してください。私たちのチームが2〜3営業日以内に回答いたします。",
        "privacy-title": "プライバシーポリシー",
        "privacy-intro": "お客様のプライバシーは私たちにとって非常に重要です. このプライバシーポリシー文書は、LottoSmartによって受信および収集される個人情報の種類とその使用方法について概説しています。",
        "privacy-log-title": "ログファイル",
        "privacy-log-p": "他の多くのウェブサイトと同様に、LottoSmartはログファイルを利用しています。ログファイル内の情報には、インターネットプロトコル（IP）アドレス、ブラウザの種類、インターネットサービスプロバイダー（ISP）、日付/タイムスタンプ、参照/終了ページ、およびトレンドの分析、サイトの管理、サイト周辺のユーザーの動きの追跡、人口統計情報の収集のためのクリック数が含まれます。",
        "privacy-cookie-title": "Cookieおよびウェブビーコン",
        "privacy-cookie-p": "LottoSmartは、訪問者の好みの情報を保存し、ユーザーがアクセスまたは訪問したページに関するユーザー固有の情報を記録し、訪問者のブラウザの種類や訪問者がブラウザを介して送信するその他の情報に基づいてウェブページの内容をカスタマイズするためにCookieを使用します。",
        "privacy-adsense-title": "Google AdSenseとCookie",
        "privacy-adsense-p1": "Googleは、サードパーティベンダーとして、Cookieを使用してLottoSmartに広告を配信します。",
        "privacy-adsense-li1": "GoogleがDART Cookieを使用することで、ユーザーがLottoSmartやインターネット上の他のサイトにアクセスしたことに基づいて広告を配信できるようになります。",
        "privacy-adsense-li2": "ユーザーは、次のURLにあるGoogle広告とコンテンツネットワークのプライバシーポリシーにアクセスして、DART Cookieの使用をオプトアウトできます - <a href=\"https://policies.google.com/technologies/ads\">https://policies.google.com/technologies/ads</a>",
        "privacy-adsense-p2": "これらのサードパーティの広告サーバーまたは広告ネットワークは、LottoSmartに表示される広告やリンクに技術を使用し、ブラウザに直接送信します。これが発生すると、彼らは自動的にあなたのIPアドレスを受信します。Cookie、JavaScript、ウェブビーコンなどの他の技術도、サードパーティの広告ネットワークによって広告の有効性を測定したり、表示される広告コンテンツをパーソナライズしたりするために使用される場合があります。",
        "privacy-adsense-p3": "LottoSmartは、サードパーティの広告主が使用するこれらのCookieにアクセスしたり制御したりすることはできません。",
        "privacy-contact-title": "連絡先情報",
        "privacy-contact-p": "詳細情報が必要な場合や、当社のプライバシーポリシーについてご質問がある場合は、<a href=\"contact.html\">お問い合わせページ</a>からお気軽にメールでお問い合わせください。"

    }
};

// --- Fortune text pools (index-aligned across languages for colors/directions) ---
const fortunePools = {
    en: {
        overall: [
            "The day flows smoothly in your favor — trust your instincts and take the initiative.",
            "A balanced day ahead; small, steady steps will carry you further than bold leaps.",
            "Unexpected opportunities may appear — stay open and ready to act.",
            "Patience is your ally today; let things unfold rather than forcing them.",
            "Your energy draws good people closer; a kind word opens surprising doors.",
            "A quiet, reflective day — slow down and you'll see what truly matters."
        ],
        money: [
            "A good day for financial decisions; review your budget and you may spot a gain.",
            "Hold off on impulse purchases — saving today pays off tomorrow.",
            "An unexpected source of income or a small windfall may brighten your day.",
            "Steady finances; focus on long-term plans rather than quick wins.",
            "Sharing or helping with money brings unexpected returns later.",
            "Double-check the details before signing anything money-related today."
        ],
        love: [
            "Warmth surrounds you — reach out and let your feelings be known.",
            "A meaningful conversation could deepen an important relationship.",
            "Single or attached, your charm is at its peak today.",
            "Give your loved ones space and understanding; harmony follows patience.",
            "A chance encounter may spark something worth nurturing.",
            "Listen more than you speak today, and hearts will open to you."
        ],
        health: [
            "Your vitality is strong — a great day for activity and fresh air.",
            "Rest is medicine today; honor your need for sleep and quiet.",
            "Stay hydrated and mind your posture; small habits keep you well.",
            "A short walk or stretch will lift both body and mood.",
            "Listen to your body's signals and avoid overexertion.",
            "Nourish yourself with good food and good company."
        ],
        colors: ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "White", "Gold"],
        directions: ["East", "West", "South", "North", "Southeast", "Southwest", "Northeast", "Northwest"]
    },
    ko: {
        overall: [
            "오늘은 흐름이 순조롭습니다. 직감을 믿고 먼저 움직여 보세요.",
            "균형 잡힌 하루입니다. 큰 도약보다 꾸준한 한 걸음이 멀리 데려다줍니다.",
            "예상치 못한 기회가 찾아올 수 있습니다. 마음을 열고 준비하세요.",
            "오늘은 인내가 힘이 됩니다. 억지로 밀어붙이기보다 흐름에 맡겨보세요.",
            "당신의 기운이 좋은 사람을 끌어당깁니다. 따뜻한 말 한마디가 뜻밖의 문을 엽니다.",
            "차분히 돌아보는 하루입니다. 속도를 늦추면 진짜 중요한 것이 보입니다."
        ],
        money: [
            "재정 결정을 내리기 좋은 날입니다. 예산을 점검하면 이득이 보일 수 있어요.",
            "충동구매는 잠시 미루세요. 오늘의 절약이 내일의 여유가 됩니다.",
            "뜻밖의 수입이나 작은 횡재가 하루를 밝혀줄 수 있습니다.",
            "재정은 안정적입니다. 빠른 이득보다 장기 계획에 집중하세요.",
            "베풀거나 나누는 일이 나중에 뜻밖의 보답으로 돌아옵니다.",
            "금전 관련 서류는 서명 전에 세부사항을 한 번 더 확인하세요."
        ],
        love: [
            "따뜻한 기운이 감돕니다. 먼저 다가가 마음을 표현해 보세요.",
            "의미 있는 대화가 소중한 관계를 더 깊게 만들어 줍니다.",
            "솔로든 커플이든 오늘은 당신의 매력이 절정입니다.",
            "사랑하는 사람에게 여유와 이해를 주세요. 인내 뒤에 화목이 따라옵니다.",
            "우연한 만남이 가꿔갈 만한 인연으로 이어질 수 있습니다.",
            "오늘은 말하기보다 들어주세요. 마음의 문이 열립니다."
        ],
        health: [
            "활력이 넘치는 날입니다. 운동이나 바깥 공기를 즐기기에 좋아요.",
            "오늘은 휴식이 약입니다. 충분한 잠과 고요함을 누리세요.",
            "수분 섭취와 자세에 신경 쓰세요. 작은 습관이 건강을 지킵니다.",
            "짧은 산책이나 스트레칭이 몸과 기분을 동시에 끌어올립니다.",
            "몸이 보내는 신호에 귀 기울이고 무리하지 마세요.",
            "좋은 음식과 좋은 사람들과 함께 자신을 돌보세요."
        ],
        colors: ["빨강", "주황", "노랑", "초록", "파랑", "보라", "흰색", "금색"],
        directions: ["동쪽", "서쪽", "남쪽", "북쪽", "남동쪽", "남서쪽", "북동쪽", "북서쪽"]
    },
    zh: {
        overall: [
            "今天诸事顺遂，相信直觉，主动出击吧。",
            "平衡的一天，稳健的小步比大胆的跳跃走得更远。",
            "可能出现意想不到的机会，保持开放，随时行动。",
            "今天耐心是你的盟友，顺其自然胜过强求。",
            "你的气场吸引贵人，一句暖心的话能打开意外之门。",
            "适合安静反思的一天，放慢脚步便能看清真正重要的事。"
        ],
        money: [
            "适合做财务决定，检视预算或许能发现收益。",
            "暂缓冲动消费，今天的节省会换来明天的从容。",
            "意外的收入或小小的横财可能点亮你的一天。",
            "财务稳定，专注长期规划而非短期获利。",
            "分享或助人于财，日后会有意外的回报。",
            "今天签署任何与金钱相关的文件前，请再核对细节。"
        ],
        love: [
            "暖意环绕，主动一些，让对方知道你的心意。",
            "一次有意义的交谈，可能让重要的关系更进一步。",
            "无论单身还是有伴，今天你的魅力正值巅峰。",
            "给所爱之人空间与理解，耐心之后便是和谐。",
            "一次偶遇或许会擦出值得用心经营的火花。",
            "今天多倾听少言语，心扉将为你敞开。"
        ],
        health: [
            "活力充沛，适合运动和呼吸新鲜空气的一天。",
            "今天休息就是良药，善待你对睡眠与宁静的需要。",
            "注意补水和姿势，小习惯让你保持健康。",
            "一次短暂的散步或伸展，能同时提振身体与心情。",
            "倾听身体的信号，避免过度劳累。",
            "用美食与好友滋养自己。"
        ],
        colors: ["红色", "橙色", "黄色", "绿色", "蓝色", "紫色", "白色", "金色"],
        directions: ["东方", "西方", "南方", "北方", "东南", "西南", "东北", "西北"]
    },
    ja: {
        overall: [
            "今日は流れが順調です。直感を信じて、まず動いてみましょう。",
            "バランスの取れた一日。大胆な飛躍より着実な一歩が遠くへ導きます。",
            "思いがけないチャンスが訪れるかも。心を開いて備えましょう。",
            "今日は忍耐が味方です。無理に押し進めず流れに任せてみて。",
            "あなたの気が良い人を引き寄せます。温かい一言が意外な扉を開きます。",
            "静かに振り返る一日。歩みを緩めれば本当に大切なものが見えます。"
        ],
        money: [
            "金銭的な決断に良い日。予算を見直せば得が見つかるかも。",
            "衝動買いは控えめに。今日の節約が明日のゆとりに。",
            "思いがけない収入やちょっとした臨時収入が一日を明るくするかも。",
            "財政は安定。短期の利益より長期の計画に集中しましょう。",
            "分け与えたり助けたりすることが、後で思わぬ形で返ってきます。",
            "お金に関する書類は署名前に細部をもう一度確認しましょう。"
        ],
        love: [
            "温かさに包まれる日。自分から歩み寄り、想いを伝えてみて。",
            "心のこもった会話が、大切な関係をより深めてくれます。",
            "シングルでもカップルでも、今日はあなたの魅力が絶頂です。",
            "大切な人に余裕と理解を。忍耐の先に調和が訪れます。",
            "偶然の出会いが、育てる価値のある縁につながるかも。",
            "今日は話すより聞き役に。心の扉が開かれます。"
        ],
        health: [
            "活力みなぎる日。運動や外の空気を楽しむのに最適です。",
            "今日は休息が薬。睡眠と静けさへの欲求を大切に。",
            "水分補給と姿勢に気をつけて。小さな習慣が健康を守ります。",
            "短い散歩やストレッチが、体と気分を同時に引き上げます。",
            "体の信号に耳を傾け、無理をしないようにしましょう。",
            "美味しい食事と良い仲間で自分を労わりましょう。"
        ],
        colors: ["赤", "オレンジ", "黄", "緑", "青", "紫", "白", "金"],
        directions: ["東", "西", "南", "北", "南東", "南西", "北東", "北西"]
    }
};

// --- Face reading text pools (index-aligned across languages) ---
const facePools = {
    en: {
        forehead: ["A broad, clear forehead — you think things through and learn quickly.", "Your forehead suggests an early bloomer with strong curiosity.", "A thoughtful brow; you carry wisdom beyond your years.", "Signs of a planner — you see the big picture before others do."],
        eyes: ["Bright, expressive eyes — people are naturally drawn to you.", "Your gaze shows warmth; friendships come easily to you.", "Perceptive eyes — you read people and rooms well.", "Calm eyes that hint at deep loyalty to those you love."],
        nose: ["A strong nose — steady drive and a good sense for money.", "Your nose points to resourcefulness; you make the most of what you have.", "Signs of ambition — you turn effort into reward over time.", "A balanced nose; wealth comes through patience, not luck."],
        mouth: ["An expressive mouth — you speak from the heart and charm easily.", "Your lips suggest warmth in love and honest words.", "A generous smile that opens doors in romance and work.", "Thoughtful speech; you say the right thing at the right time."],
        jaw: ["A firm jaw — persistence carries you to a strong later life.", "Your chin shows resilience; you finish what you start.", "Steady determination — good fortune builds in your second half.", "A grounded jawline; loyalty and grit define your path."],
        summary: ["A face full of quiet potential — your best chapters are still being written.", "A balanced, likeable face — steady fortune and warm connections ahead.", "A bright, fortunate face — charm and opportunity follow you.", "A truly auspicious face — rare warmth, drive, and luck all in one."]
    },
    ko: {
        forehead: ["이마가 시원하게 트여 있어 생각이 깊고 배움이 빠른 상입니다.", "호기심이 강하고 일찍 두각을 드러내는 이마예요.", "또래보다 지혜로운 기운이 이마에 담겨 있습니다.", "큰 그림을 먼저 보는 기획가형 이마입니다."],
        eyes: ["눈빛이 맑고 표현력이 좋아 사람을 끌어당깁니다.", "따뜻한 눈매라 인연과 친구가 쉽게 모입니다.", "통찰력 있는 눈이라 사람과 분위기를 잘 읽습니다.", "차분한 눈빛 속에 깊은 의리가 느껴집니다."],
        nose: ["콧대가 단단해 추진력과 재물 감각이 좋은 상입니다.", "주어진 것을 알차게 활용하는 수완가형 코예요.", "노력을 보상으로 바꾸는 야망이 보이는 코입니다.", "균형 잡힌 코라 재물은 운보다 인내로 쌓입니다."],
        mouth: ["표현이 풍부한 입이라 진심으로 말하고 매력을 줍니다.", "입매가 따뜻해 사랑과 말에 정직함이 묻어납니다.", "넉넉한 미소가 연애와 일의 문을 열어줍니다.", "사려 깊은 말솜씨로 때를 아는 한마디를 합니다."],
        jaw: ["턱이 단단해 끈기로 든든한 말년을 맞는 상입니다.", "회복력이 좋은 턱이라 시작한 일을 끝까지 해냅니다.", "꾸준한 의지로 후반부에 운이 쌓입니다.", "안정된 턱선에 의리와 끈기가 담겨 있습니다."],
        summary: ["조용한 잠재력이 가득한 상 — 최고의 장면은 아직 쓰이는 중입니다.", "균형 잡히고 호감 가는 상 — 꾸준한 운과 따뜻한 인연이 따릅니다.", "밝고 복이 많은 상 — 매력과 기회가 늘 따라다닙니다.", "보기 드문 길상 — 따뜻함·추진력·운을 모두 갖춘 얼굴입니다."]
    },
    zh: {
        forehead: ["额头开阔，思虑周全、学习很快之相。", "好奇心旺盛、早早崭露头角的额头。", "额间藏有超越同龄的智慧之气。", "属于先看大局的策划型额头。"],
        eyes: ["眼神清澈、表达力强，自然吸引他人。", "眼神温暖，缘分与朋友易聚。", "目光敏锐，善于读人与读场。", "沉静的眼神中透着深厚的情义。"],
        nose: ["鼻梁坚挺，富有行动力与财运之相。", "善用所有资源的能手型鼻子。", "鼻露雄心，能把努力化为回报。", "鼻形匀称，财富靠耐心而非运气积累。"],
        mouth: ["口型富于表达，真心说话且具魅力。", "唇形温厚，爱情与言语皆显诚实。", "宽厚的笑容为爱情与事业开门。", "言谈细致，懂得在对的时机说对的话。"],
        jaw: ["下巴坚实，以毅力迎来稳健晚年之相。", "恢复力佳的下巴，凡事有始有终。", "凭借坚持，后半生运势渐旺。", "稳定的下颌线，蕴含情义与韧性。"],
        summary: ["充满静默潜力之相 —— 最精彩的篇章仍在书写。", "均衡而讨喜之相 —— 稳定运势与温暖缘分相随。", "明亮多福之相 —— 魅力与机会常伴左右。", "难得的吉相 —— 温暖、行动力与运气兼备。"]
    },
    ja: {
        forehead: ["額が広く開け、思慮深く学びが早い相です。", "好奇心が強く、早くから頭角を現す額です。", "同年代を超えた知恵の気が額に宿ります。", "全体像を先に見る企画家タイプの額です。"],
        eyes: ["澄んだ眼差しと表現力で、自然と人を惹きつけます。", "温かい目元で、縁や友がすぐに集まります。", "洞察力のある目で、人や空気をよく読みます。", "落ち着いた眼差しに深い義理がにじみます。"],
        nose: ["鼻筋がしっかりし、行動力と金運に恵まれる相です。", "与えられたものを活かす切れ者タイプの鼻です。", "努力を報酬に変える野心が見える鼻です。", "均整の取れた鼻で、財は運より忍耐で築かれます。"],
        mouth: ["表現豊かな口で、真心で語り魅力を放ちます。", "口元が温かく、愛情にも言葉にも誠実さが出ます。", "おおらかな笑顔が恋と仕事の扉を開きます。", "思慮深い話し方で、ここぞの一言を言えます。"],
        jaw: ["顎がしっかりし、粘り強さで安定した晩年を迎える相です。", "回復力のある顎で、始めたことを最後までやり遂げます。", "地道な意志で、後半に運が積み上がります。", "安定した顎のラインに義理と粘りが宿ります。"],
        summary: ["静かな可能性に満ちた相 —— 最高の章はまだ書かれている途中です。", "バランスが取れ好感の持てる相 —— 着実な運と温かい縁が続きます。", "明るく福の多い相 —— 魅力と機会がいつも寄り添います。", "稀な吉相 —— 温かさ・行動力・運をすべて備えた顔です。"]
    }
};

// --- Compatibility text pools (index-aligned across languages) ---
const compatPools = {
    en: {
        personality: ["You balance each other well — differences become strengths.", "Similar values make everyday life feel easy together.", "A lively mix; you keep each other curious and growing.", "You'll need patience at times, but respect bridges the gaps."],
        romance: ["Strong chemistry — sparks come naturally between you two.", "A tender, slow-burning warmth that deepens over time.", "Playful and affectionate; you bring out each other's joy.", "Passion is there; honest talk keeps the flame steady."],
        money: ["Aligned on money — you build and save as a team.", "Different money styles, but together you find balance.", "Shared ambition; your goals pull in the same direction.", "Talk openly about finances and you'll thrive together."],
        future: ["A promising long-term path — you grow stronger year by year.", "Solid foundations; this is a bond built to last.", "With effort, your future together looks bright and steady.", "Keep nurturing trust and the road ahead is wide open."],
        summary: ["A relationship that asks for care — but real effort can make it bloom.", "A warm, workable match — nurture it and it grows steadily.", "A wonderful match — you bring out the best in each other.", "A rare, soulmate-level connection — cherish what you have."]
    },
    ko: {
        personality: ["서로를 잘 보완해 차이가 강점이 되는 사이입니다.", "가치관이 비슷해 일상이 편안하게 맞물립니다.", "활기찬 조합이라 서로를 계속 성장시킵니다.", "때로 인내가 필요하지만 존중이 간극을 메웁니다."],
        romance: ["케미가 강해 둘 사이에 불꽃이 자연스럽습니다.", "은근하게 깊어지는 따뜻함이 오래갑니다.", "장난스럽고 다정해 서로의 기쁨을 끌어냅니다.", "열정은 충분하니 솔직한 대화로 불씨를 지키세요."],
        money: ["금전관이 잘 맞아 함께 모으고 키워가는 팀입니다.", "소비 스타일은 달라도 함께면 균형을 찾습니다.", "공동의 야망으로 목표가 같은 방향을 향합니다.", "돈 이야기를 솔직히 나누면 함께 번창합니다."],
        future: ["해가 갈수록 단단해지는 유망한 장기 인연입니다.", "기반이 탄탄해 오래 지속될 인연입니다.", "노력하면 둘의 미래가 밝고 안정적입니다.", "신뢰를 계속 가꾸면 앞길이 활짝 열립니다."],
        summary: ["정성이 필요한 관계 — 하지만 진심 어린 노력이 꽃피웁니다.", "따뜻하고 잘 맞는 인연 — 가꾸면 꾸준히 깊어집니다.", "훌륭한 궁합 — 서로의 최고를 끌어내는 사이입니다.", "보기 드문 천생연분 — 지금의 인연을 소중히 하세요."]
    },
    zh: {
        personality: ["彼此互补，差异化为优势的一对。", "价值观相近，日常相处轻松契合。", "活泼的组合，让彼此不断成长。", "偶尔需要耐心，但尊重能弥合分歧。"],
        romance: ["化学反应强烈，火花自然而生。", "含蓄而渐深的温暖，历久弥新。", "俏皮又亲密，激发彼此的快乐。", "激情充足，坦诚沟通能守住火苗。"],
        money: ["金钱观契合，一同积累、共同成长的团队。", "消费风格不同，但在一起能找到平衡。", "共同的抱负，让目标朝同一方向。", "坦诚谈钱，便能一起兴旺。"],
        future: ["前景可期的长久缘分，逐年愈加坚固。", "根基扎实，是能长久的羁绊。", "只要努力，两人的未来明亮而稳定。", "持续培育信任，前路将豁然开朗。"],
        summary: ["需要用心经营的关系 —— 但真诚的努力能让它绽放。", "温暖契合的缘分 —— 用心呵护便会稳步加深。", "极佳的契合 —— 彼此激发出最好的一面。", "难得的天作之合 —— 请珍惜眼前的缘分。"]
    },
    ja: {
        personality: ["互いをよく補い、違いが強みになる二人です。", "価値観が近く、日常が心地よくかみ合います。", "活気ある組み合わせで、互いを成長させます。", "時に忍耐が要りますが、尊重が溝を埋めます。"],
        romance: ["ケミストリーが強く、火花が自然に生まれます。", "じんわり深まる温かさが長く続きます。", "茶目っ気と優しさで、互いの喜びを引き出します。", "情熱は十分、正直な対話で火を保てます。"],
        money: ["金銭感覚が合い、共に貯め育てるチームです。", "消費スタイルは違っても、一緒なら均衡が取れます。", "共通の野心で、目標が同じ方向を向きます。", "お金の話を率直にすれば、共に栄えます。"],
        future: ["年々強くなる、有望な長期の縁です。", "土台が堅く、長く続く絆です。", "努力すれば、二人の未来は明るく安定します。", "信頼を育み続ければ、前途は大きく開けます。"],
        summary: ["丁寧さが要る関係 —— けれど真心の努力が花を咲かせます。", "温かく相性の良い縁 —— 育てれば着実に深まります。", "素晴らしい相性 —— 互いの最高を引き出す仲です。", "稀な運命の相手 —— 今の縁を大切に。"]
    }
};

// ===== Premium report (single purchase via Stripe Payment Link) =====
// SETUP: 1) Create a Stripe Payment Link for the report (e.g. ₩2,900).
//        2) Set its "after payment" redirect to:
//           https://timlikeanjimin.github.io/hijimin/premium.html?unlock=lucky2026
//        3) Paste that Payment Link URL below.
const PREMIUM_CHECKOUT_URL = 'https://buy.stripe.com/REPLACE_WITH_YOUR_PAYMENT_LINK';
const PREMIUM_UNLOCK_TOKEN = 'lucky2026';
// While there is no payment provider set up, the full report is free for everyone.
// Flip this to false (and set PREMIUM_CHECKOUT_URL) to re-enable the paywall later.
const PREMIUM_FREE_FOR_NOW = true;

const premiumPools = {
    en: {
        yearIntro: ["2026 is a year of building. Lay strong foundations now and the second half rewards you.", "A balanced year — steady effort turns chances into reality.", "A rising year — opportunities arrive in a row for the prepared.", "A breakthrough year — move with confidence and reap big results."],
        overall: ["Steady growth within stability is expected.", "Winds of change open new doors.", "Good people bring helpful support your way."],
        money: ["Wealth builds up steadily.", "Unexpected side income may appear.", "Big spending favors the second half over the first."],
        love: ["Your circle of connections widens.", "Existing bonds grow deeper.", "Honest expression attracts love."],
        career: ["Your effort is recognized and secures your place.", "New challenges widen your path.", "Collaboration brings strong results."],
        health: ["A regular routine keeps your energy up.", "Avoid overwork and your health stays good.", "Care for your mind and the body follows."],
        months: ["Good energy flows into new beginnings.", "Patience is needed, but it ends well.", "Happy news comes from relationships.", "Money flow becomes smooth.", "A time to mind health and rest.", "An unexpected opportunity knocks."],
        advice: ["This year's keyword is 'consistency' — small habits build big luck.", "Balance, not greed, invites fortune.", "What you give comes back as greater blessings."],
        keywords: ["Growth", "Bonds", "Wealth", "Challenge", "Stability", "Health", "Harvest", "Change"],
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    },
    ko: {
        yearIntro: ["2026년은 다지는 해입니다. 서두르기보다 기초를 단단히 하면 후반에 빛을 봅니다.", "균형 잡힌 한 해입니다. 꾸준함이 기회를 현실로 바꿔줍니다.", "상승 흐름의 해입니다. 준비된 만큼 좋은 기회가 연달아 찾아옵니다.", "도약의 해입니다. 자신감을 갖고 움직이면 큰 결실을 맺습니다."],
        overall: ["전반적으로 안정 속 성장이 기대됩니다.", "변화의 바람이 새로운 문을 엽니다.", "인복이 좋아 귀인의 도움을 받습니다."],
        money: ["재물운이 차곡차곡 쌓이는 흐름입니다.", "뜻밖의 부수입 기회가 보입니다.", "큰 지출은 상반기보다 하반기가 유리합니다."],
        love: ["인연의 폭이 넓어지는 해입니다.", "기존 관계가 더 깊어집니다.", "솔직한 표현이 사랑을 끌어당깁니다."],
        career: ["노력이 인정받아 자리를 굳힙니다.", "새로운 도전이 길을 넓혀줍니다.", "협업에서 큰 성과가 납니다."],
        health: ["규칙적인 생활이 활력을 지켜줍니다.", "과로만 피하면 건강은 양호합니다.", "마음 건강을 챙기면 몸도 따라옵니다."],
        months: ["새로운 시작에 좋은 기운이 흐릅니다.", "인내가 필요하지만 끝이 좋습니다.", "대인관계에서 기쁜 소식이 옵니다.", "금전 흐름이 원활해집니다.", "건강과 휴식에 신경 쓸 시기입니다.", "뜻밖의 기회가 문을 두드립니다."],
        advice: ["올해의 키워드는 '꾸준함'입니다. 작은 습관이 큰 운을 만듭니다.", "무리한 욕심보다 균형이 행운을 부릅니다.", "주변에 베푼 만큼 더 큰 복으로 돌아옵니다."],
        keywords: ["성장", "인연", "재물", "도전", "안정", "건강", "결실", "변화"],
        monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
    },
    zh: {
        yearIntro: ["2026 是夯实根基的一年。先打牢基础，下半年自会迎来回报。", "平衡的一年——稳健的努力把机会变成现实。", "上升的一年——有准备的人会迎来接连的好机会。", "飞跃的一年——带着自信行动，将收获丰硕成果。"],
        overall: ["总体可期稳中有进。", "变化之风开启新门。", "贵人相助，人缘极佳。"],
        money: ["财运稳步积累。", "或有意外的额外收入。", "大额支出下半年比上半年更有利。"],
        love: ["缘分的圈子不断扩大。", "既有关系更加深厚。", "坦诚的表达会吸引爱情。"],
        career: ["努力获得认可，稳固地位。", "新的挑战拓宽道路。", "合作带来亮眼成果。"],
        health: ["规律生活守护活力。", "只要不过劳，健康良好。", "照顾好心理，身体随之向好。"],
        months: ["新的开始有好气运流动。", "需要耐心，但结局美好。", "人际关系传来喜讯。", "金钱流动变得顺畅。", "该多关注健康与休息。", "意外的机会前来敲门。"],
        advice: ["今年的关键词是‘坚持’——小习惯成就大运势。", "平衡而非贪心，才招来好运。", "你付出多少，便以更大的福报回馈。"],
        keywords: ["成长", "缘分", "财富", "挑战", "稳定", "健康", "收获", "变化"],
        monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
    },
    ja: {
        yearIntro: ["2026年は基盤を固める年。今しっかり土台を築けば、後半に実を結びます。", "バランスの年——着実な努力がチャンスを現実に変えます。", "上昇の年——備えた人に好機が続けて訪れます。", "飛躍の年——自信を持って動けば大きな成果を得られます。"],
        overall: ["全体に安定の中の成長が期待できます。", "変化の風が新しい扉を開きます。", "人に恵まれ、貴人の助けを得られます。"],
        money: ["金運が着実に積み上がります。", "思わぬ副収入のチャンスが見えます。", "大きな出費は前半より後半が有利です。"],
        love: ["ご縁の輪が広がる年です。", "既存の関係がより深まります。", "素直な表現が愛を引き寄せます。"],
        career: ["努力が認められ、立場を固めます。", "新たな挑戦が道を広げます。", "協働で大きな成果が出ます。"],
        health: ["規則正しい生活が活力を守ります。", "働きすぎを避ければ健康は良好です。", "心の健康を整えれば体もついてきます。"],
        months: ["新しい始まりに良い気が流れます。", "忍耐が要りますが、終わりは良いです。", "人間関係から嬉しい知らせが来ます。", "金運の流れがスムーズになります。", "健康と休息に気を配る時期です。", "思いがけない機会が訪れます。"],
        advice: ["今年のキーワードは『継続』——小さな習慣が大きな運を作ります。", "欲張りよりバランスが幸運を招きます。", "与えた分だけ、より大きな福として返ってきます。"],
        keywords: ["成長", "ご縁", "財運", "挑戦", "安定", "健康", "実り", "変化"],
        monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
    }
};

// --- Chinese zodiac (띠별) pools (index 0=Rat ... 11=Pig) ---
const zodiacPools = {
    en: {
        animals: ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"],
        traits: ["Quick-witted and resourceful, you spot opportunities others miss.", "Steady and dependable, your patience builds lasting success.", "Brave and charismatic, you lead and inspire naturally.", "Gentle and tactful, you bring harmony wherever you go.", "Confident and ambitious, you draw luck and attention.", "Wise and intuitive, you read situations deeply.", "Energetic and free-spirited, you thrive on new adventures.", "Kind and creative, your warmth wins people over.", "Clever and playful, you solve problems with flair.", "Sharp and honest, your diligence earns respect.", "Loyal and fair, people trust you instinctively.", "Generous and easygoing, good fortune follows your warmth."],
        today: ["A smooth day — trust your timing.", "Patience early pays off later today.", "A pleasant surprise may brighten your afternoon.", "A good day to connect with people.", "Mind your energy and rest when needed.", "Money matters look favorable today."],
        year: ["2026 rewards steady effort with real growth.", "A year to widen your circle and seize chances.", "Finances strengthen in the second half of 2026.", "Love and friendships deepen this year.", "A fresh start brings welcome change.", "Your patience this year turns into lasting gain."]
    },
    ko: {
        animals: ["쥐", "소", "호랑이", "토끼", "용", "뱀", "말", "양", "원숭이", "닭", "개", "돼지"],
        traits: ["재치 있고 수완이 좋아 남이 놓친 기회를 잘 잡습니다.", "성실하고 듬직해 인내로 오래가는 성공을 쌓습니다.", "용감하고 카리스마가 있어 자연스럽게 사람을 이끕니다.", "온화하고 센스 있어 가는 곳마다 화합을 만듭니다.", "자신감 있고 야망이 커서 운과 시선을 끌어당깁니다.", "지혜롭고 직관이 뛰어나 상황을 깊이 읽습니다.", "활동적이고 자유로워 새로운 도전에서 빛납니다.", "다정하고 창의적이라 따뜻함으로 사람을 얻습니다.", "영리하고 유쾌해 문제를 센스 있게 풉니다.", "예리하고 정직해 성실함으로 신뢰를 얻습니다.", "의리 있고 공정해 사람들이 본능적으로 믿습니다.", "넉넉하고 느긋해 따뜻함을 따라 복이 들어옵니다."],
        today: ["흐름이 순조로운 날, 타이밍을 믿으세요.", "초반의 인내가 오후에 보답으로 옵니다.", "오후에 기분 좋은 작은 행운이 있을 수 있어요.", "사람들과 연결되기 좋은 날입니다.", "기운을 아끼고 필요할 때 쉬어가세요.", "금전 관련 일이 유리하게 풀립니다."],
        year: ["2026년은 꾸준한 노력에 확실한 성장으로 보답합니다.", "인맥을 넓히고 기회를 잡기 좋은 해입니다.", "2026년 하반기에 재정이 단단해집니다.", "올해 사랑과 우정이 더 깊어집니다.", "새로운 시작이 반가운 변화를 부릅니다.", "올해의 인내가 오래가는 결실로 바뀝니다."]
    },
    zh: {
        animals: ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"],
        traits: ["机敏而足智多谋，能抓住别人错过的机会。", "踏实可靠，以耐心积累长久的成功。", "勇敢有魅力，自然而然地带领与激励他人。", "温和而圆融，所到之处皆带来和谐。", "自信而有抱负，吸引好运与目光。", "睿智而直觉敏锐，能深刻洞察局势。", "活力充沛、热爱自由，在新冒险中闪耀。", "善良而富创意，以温暖赢得人心。", "聪明又风趣，解决问题别具一格。", "敏锐而诚实，以勤勉赢得尊重。", "忠诚而公正，人们本能地信任你。", "慷慨而随和，温暖之处福气相随。"],
        today: ["诸事顺遂的一天，相信你的时机。", "前期的耐心会在午后得到回报。", "下午或有令人愉快的小惊喜。", "适合与人联络的一天。", "注意精力，需要时好好休息。", "今天金钱方面看好。"],
        year: ["2026 以扎实的努力回报你真正的成长。", "适合拓展人脉、抓住机会的一年。", "2026 下半年财务更稳固。", "今年爱情与友情更加深厚。", "全新的开始带来可喜的改变。", "今年的耐心将化为长久的收获。"]
    },
    ja: {
        animals: ["ねずみ", "うし", "とら", "うさぎ", "たつ", "へび", "うま", "ひつじ", "さる", "とり", "いぬ", "いのしし"],
        traits: ["機転が利き機略に富み、人が見落とす好機をつかみます。", "堅実で頼もしく、忍耐で長く続く成功を築きます。", "勇敢でカリスマがあり、自然に人を導きます。", "穏やかで気配り上手、行く先々で調和を生みます。", "自信家で野心的、運と注目を引き寄せます。", "賢く直感に優れ、状況を深く読み取ります。", "活動的で自由、新しい挑戦で輝きます。", "優しく創造的、温かさで人の心をつかみます。", "賢く愉快で、問題を巧みに解決します。", "鋭く正直で、勤勉さで信頼を得ます。", "義理堅く公正で、人が自然と信頼します。", "気前よくおおらか、温かさに福が寄ってきます。"],
        today: ["流れが順調な日。タイミングを信じて。", "序盤の忍耐が午後に報われます。", "午後に嬉しい小さな幸運があるかも。", "人とつながるのに良い日です。", "気力を温存し、必要なら休んで。", "今日は金銭面が好調です。"],
        year: ["2026年は着実な努力に確かな成長で応えます。", "人脈を広げ、好機をつかむのに良い年。", "2026年後半に財政が安定します。", "今年は愛情と友情がより深まります。", "新たな始まりが嬉しい変化を呼びます。", "今年の忍耐が長く続く実りに変わります。"]
    }
};

const FORTUNE_LOCALES = { en: 'en-US', ko: 'ko-KR', zh: 'zh-CN', ja: 'ja-JP' };

// FNV-1a string hash -> 32-bit unsigned
function fortuneHash(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
        h ^= str.charCodeAt(i);
        h = Math.imul(h, 16777619);
    }
    return h >>> 0;
}

function mulberry32(a) {
    return function () {
        a |= 0; a = (a + 0x6D2B79F5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

function renderFortune() {
    const result = document.querySelector('#fortune-result');
    if (!result || !window.__fortune) return;

    const lang = localStorage.getItem('lang') || 'en';
    const pool = fortunePools[lang] || fortunePools.en;
    const { birth, gender } = window.__fortune;
    const today = new Date();
    const dateStr = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const base = birth + '|' + gender + '|' + dateStr;

    function category(key, list) {
        const rng = mulberry32(fortuneHash(base + '|' + key));
        const score = 45 + Math.floor(rng() * 56); // 45 - 100
        const text = list[Math.floor(rng() * list.length)];
        return { score, text };
    }

    const cats = {
        overall: category('overall', pool.overall),
        money: category('money', pool.money),
        love: category('love', pool.love),
        health: category('health', pool.health)
    };

    Object.keys(cats).forEach(key => {
        const bar = document.querySelector('#score-' + key);
        const txt = document.querySelector('#text-' + key);
        if (bar) bar.style.width = cats[key].score + '%';
        if (txt) txt.textContent = cats[key].text;
    });

    // Lucky values (language-independent seed so they stay constant across languages)
    const lrng = mulberry32(fortuneHash(base + '|lucky'));
    const luckyNumber = 1 + Math.floor(lrng() * 45);
    const colorIdx = Math.floor(lrng() * pool.colors.length);
    const dirIdx = Math.floor(lrng() * pool.directions.length);

    const setText = (sel, val) => { const el = document.querySelector(sel); if (el) el.textContent = val; };
    setText('#lucky-number', luckyNumber);
    setText('#lucky-color', pool.colors[colorIdx]);
    setText('#lucky-direction', pool.directions[dirIdx]);

    const dateEl = document.querySelector('#fortune-date');
    if (dateEl) {
        try {
            dateEl.textContent = today.toLocaleDateString(FORTUNE_LOCALES[lang] || 'en-US', {
                year: 'numeric', month: 'long', day: 'numeric', weekday: 'long'
            });
        } catch (e) {
            dateEl.textContent = dateStr;
        }
    }

    window.__fortuneShare = {
        title: (translations[lang] && translations[lang]['fortune-title']) || "Today's Fortune",
        subtitle: dateEl ? dateEl.textContent : '',
        bigValue: luckyNumber,
        bigLabel: (translations[lang] && translations[lang]['fortune-lucky-number']) || 'Lucky Number',
        summary: cats.overall.text,
        rows: [
            { label: translations[lang]['fortune-overall'], score: cats.overall.score },
            { label: translations[lang]['fortune-money'], score: cats.money.score },
            { label: translations[lang]['fortune-love'], score: cats.love.score },
            { label: translations[lang]['fortune-health'], score: cats.health.score }
        ]
    };
}

function initFortuneLogic() {
    const btn = document.querySelector('#fortune-btn');
    const result = document.querySelector('#fortune-result');
    if (!btn || !result) return;

    btn.addEventListener('click', () => {
        const birthInput = document.querySelector('#birth-date');
        const birth = birthInput ? birthInput.value : '';
        if (!birth) {
            const lang = localStorage.getItem('lang') || 'en';
            alert((translations[lang] && translations[lang]['fortune-validate']) || 'Please enter your date of birth.');
            return;
        }
        const genderEl = document.querySelector('#gender');
        window.__fortune = { birth, gender: genderEl ? genderEl.value : 'x' };
        renderFortune();
        result.hidden = false;
        result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    attachShare('fortune-share', () => window.__fortuneShare, 'my-fortune');
}

// Hash raw bytes (used for deriving a stable seed from an uploaded photo).
function fortuneHashBytes(bytes) {
    let h = 2166136261;
    const step = Math.max(1, Math.floor(bytes.length / 100000));
    for (let i = 0; i < bytes.length; i += step) {
        h ^= bytes[i];
        h = Math.imul(h, 16777619);
    }
    return (h ^ bytes.length) >>> 0;
}

function tierIndex(score, t1, t2, t3) {
    if (score < t1) return 0;
    if (score < t2) return 1;
    if (score < t3) return 2;
    return 3;
}

function renderFace() {
    const result = document.querySelector('#face-result');
    if (!result || !window.__face) return;
    const lang = localStorage.getItem('lang') || 'en';
    const pool = facePools[lang] || facePools.en;
    const base = 'face|' + window.__face.seed;

    function feat(key, list) {
        const rng = mulberry32(fortuneHash(base + '|' + key));
        const score = 60 + Math.floor(rng() * 41); // 60 - 100
        return { score, text: list[Math.floor(rng() * list.length)] };
    }

    const keys = ['forehead', 'eyes', 'nose', 'mouth', 'jaw'];
    let total = 0;
    const shareRows = [];
    keys.forEach(k => {
        const r = feat(k, pool[k]);
        total += r.score;
        shareRows.push({ label: translations[lang]['face-feature-' + k], score: r.score });
        const bar = document.querySelector('#face-score-' + k);
        const txt = document.querySelector('#face-text-' + k);
        if (bar) bar.style.width = r.score + '%';
        if (txt) txt.textContent = r.text;
    });

    const overall = Math.round(total / keys.length);
    const ovBar = document.querySelector('#face-overall-bar');
    const ovNum = document.querySelector('#face-overall-num');
    if (ovBar) ovBar.style.width = overall + '%';
    if (ovNum) ovNum.textContent = overall;
    const summaryText = pool.summary[tierIndex(overall, 70, 80, 90)];
    const sum = document.querySelector('#face-summary-text');
    if (sum) sum.textContent = summaryText;

    const img = document.querySelector('#face-preview');
    if (img && window.__face.preview) { img.src = window.__face.preview; img.hidden = false; }

    window.__faceShare = {
        title: translations[lang]['face-title'],
        subtitle: '',
        bigValue: overall,
        bigLabel: translations[lang]['face-overall-label'],
        summary: summaryText,
        rows: shareRows
    };
}

function initFaceLogic() {
    const btn = document.querySelector('#face-btn');
    const fileInput = document.querySelector('#face-file');
    const result = document.querySelector('#face-result');
    if (!btn || !fileInput || !result) return;

    btn.addEventListener('click', () => {
        const file = fileInput.files && fileInput.files[0];
        if (!file) {
            const lang = localStorage.getItem('lang') || 'en';
            alert((translations[lang] && translations[lang]['face-validate']) || 'Please choose a photo first.');
            return;
        }
        const byteReader = new FileReader();
        byteReader.onload = function (e) {
            const seed = fortuneHashBytes(new Uint8Array(e.target.result));
            const urlReader = new FileReader();
            urlReader.onload = function (ev) {
                window.__face = { seed: seed, preview: ev.target.result };
                renderFace();
                result.hidden = false;
                result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            };
            urlReader.readAsDataURL(file);
        };
        byteReader.readAsArrayBuffer(file);
    });

    attachShare('face-share', () => window.__faceShare, 'my-face-reading');
}

function renderCompat() {
    const result = document.querySelector('#compat-result');
    if (!result || !window.__compat) return;
    const lang = localStorage.getItem('lang') || 'en';
    const pool = compatPools[lang] || compatPools.en;
    // Order-independent: same pair gives the same result regardless of who is "me".
    const base = 'compat|' + [window.__compat.me, window.__compat.partner].sort().join('|');

    function sub(key, list) {
        const rng = mulberry32(fortuneHash(base + '|' + key));
        const score = 50 + Math.floor(rng() * 51); // 50 - 100
        return { score, text: list[Math.floor(rng() * list.length)] };
    }

    const keys = ['personality', 'romance', 'money', 'future'];
    let total = 0;
    const shareRows = [];
    keys.forEach(k => {
        const r = sub(k, pool[k]);
        total += r.score;
        shareRows.push({ label: translations[lang]['compat-sub-' + k], score: r.score });
        const bar = document.querySelector('#compat-score-' + k);
        const txt = document.querySelector('#compat-text-' + k);
        if (bar) bar.style.width = r.score + '%';
        if (txt) txt.textContent = r.text;
    });

    const overall = Math.round(total / keys.length);
    const ovBar = document.querySelector('#compat-overall-bar');
    const ovNum = document.querySelector('#compat-overall-num');
    if (ovBar) ovBar.style.width = overall + '%';
    if (ovNum) ovNum.textContent = overall;
    const summaryText = pool.summary[tierIndex(overall, 60, 75, 88)];
    const sum = document.querySelector('#compat-summary-text');
    if (sum) sum.textContent = summaryText;

    window.__compatShare = {
        title: translations[lang]['compat-title'],
        subtitle: '',
        bigValue: overall,
        bigLabel: translations[lang]['compat-overall-label'],
        summary: summaryText,
        rows: shareRows
    };
}

function initCompatLogic() {
    const btn = document.querySelector('#compat-btn');
    const result = document.querySelector('#compat-result');
    if (!btn || !result) return;

    btn.addEventListener('click', () => {
        const me = document.querySelector('#compat-me');
        const partner = document.querySelector('#compat-partner');
        const meVal = me ? me.value : '';
        const partnerVal = partner ? partner.value : '';
        if (!meVal || !partnerVal) {
            const lang = localStorage.getItem('lang') || 'en';
            alert((translations[lang] && translations[lang]['compat-validate']) || 'Please enter both birth dates.');
            return;
        }
        window.__compat = { me: meVal, partner: partnerVal };
        renderCompat();
        result.hidden = false;
        result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    attachShare('compat-share', () => window.__compatShare, 'our-compatibility');
}

// ===== Shareable result card (canvas -> native share / download) =====
function shareRoundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
}

function shareWrapText(ctx, text, cx, y, maxWidth, lineHeight) {
    const words = String(text).split(/\s+/);
    let line = '';
    const lines = [];
    for (let i = 0; i < words.length; i++) {
        const test = line ? line + ' ' + words[i] : words[i];
        if (ctx.measureText(test).width > maxWidth && line) {
            lines.push(line);
            line = words[i];
        } else {
            line = test;
        }
    }
    if (line) lines.push(line);
    lines.forEach((l, i) => ctx.fillText(l, cx, y + i * lineHeight));
    return y + lines.length * lineHeight;
}

function buildShareCanvas(data) {
    const W = 1080, H = 1400;
    const canvas = document.createElement('canvas');
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext('2d');

    const bg = ctx.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, '#1b3a5b');
    bg.addColorStop(1, '#0a1a29');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    ctx.textAlign = 'center';

    // Title
    ctx.fillStyle = '#ffffff';
    ctx.font = '700 70px Poppins, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif';
    ctx.fillText(data.title, W / 2, 165);

    // Subtitle (date etc.)
    if (data.subtitle) {
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.font = '400 38px Poppins, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif';
        ctx.fillText(data.subtitle, W / 2, 225);
    }

    // Big value
    ctx.fillStyle = '#ffd86b';
    ctx.font = '700 190px Poppins, sans-serif';
    ctx.fillText(data.bigValue, W / 2, 470);
    ctx.fillStyle = 'rgba(255,255,255,0.75)';
    ctx.font = '500 42px Poppins, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif';
    ctx.fillText(data.bigLabel, W / 2, 540);

    // Summary (wrapped)
    ctx.fillStyle = '#ffffff';
    ctx.font = '600 46px Poppins, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif';
    let y = shareWrapText(ctx, data.summary, W / 2, 640, 880, 60) + 40;

    // Rows: label (left) + score (right) + bar
    const left = 130, right = W - 130, barW = right - left;
    ctx.font = '600 40px Poppins, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif';
    (data.rows || []).forEach(row => {
        ctx.textAlign = 'left';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(row.label, left, y);
        ctx.textAlign = 'right';
        ctx.fillStyle = '#ffd86b';
        ctx.fillText(row.score + '', right, y);
        // bar
        ctx.fillStyle = 'rgba(255,255,255,0.18)';
        shareRoundRect(ctx, left, y + 18, barW, 16, 8); ctx.fill();
        ctx.fillStyle = '#7fb0e0';
        shareRoundRect(ctx, left, y + 18, barW * Math.max(0, Math.min(100, row.score)) / 100, 16, 8); ctx.fill();
        y += 96;
    });

    // Footer watermark
    ctx.textAlign = 'center';
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.font = '600 36px Poppins, sans-serif';
    ctx.fillText('🔮 timlikeanjimin.github.io/hijimin', W / 2, H - 70);

    return canvas;
}

function shareReading(data, filenameBase) {
    const canvas = buildShareCanvas(data);
    const lang = localStorage.getItem('lang') || 'en';
    const shareText = data.title + ' | timlikeanjimin.github.io/hijimin';
    canvas.toBlob(function (blob) {
        if (!blob) return;
        const file = new File([blob], filenameBase + '.png', { type: 'image/png' });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            navigator.share({ files: [file], title: data.title, text: shareText }).catch(function () { /* user cancelled */ });
            return;
        }
        // Fallback: download the image.
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filenameBase + '.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        alert((translations[lang] && translations[lang]['share-saved']) || 'Image saved!');
    }, 'image/png');
}

function attachShare(buttonId, getData, filenameBase) {
    const btn = document.querySelector('#' + buttonId);
    if (!btn) return;
    btn.addEventListener('click', function () {
        const data = getData();
        if (data) shareReading(data, filenameBase);
    });
}

function isPremiumUnlocked() {
    try { return localStorage.getItem('premiumUnlocked') === '1'; } catch (e) { return false; }
}

function applyPremiumLock() {
    const locked = document.querySelector('#premium-locked');
    if (locked) locked.classList.toggle('unlocked', PREMIUM_FREE_FOR_NOW || isPremiumUnlocked());
    // In free-for-now mode there is no payment, so hide the "payment complete" badge.
    if (PREMIUM_FREE_FOR_NOW) {
        const badge = document.querySelector('#premium-badge');
        if (badge) badge.style.display = 'none';
    }
}

function renderPremium() {
    const result = document.querySelector('#premium-result');
    if (!result || !window.__premium) return;
    const lang = localStorage.getItem('lang') || 'en';
    const pool = premiumPools[lang] || premiumPools.en;
    const base = 'premium2026|' + window.__premium.birth;
    const setSel = (sel, val) => { const el = document.querySelector(sel); if (el) el.textContent = val; };

    const fields = ['overall', 'money', 'love', 'career', 'health'];
    let total = 0;
    fields.forEach(k => {
        const r = mulberry32(fortuneHash(base + '|' + k));
        const score = 55 + Math.floor(r() * 46);
        total += score;
        const bar = document.querySelector('#premium-' + k + '-bar');
        if (bar) bar.style.width = score + '%';
        setSel('#premium-' + k + '-text', pool[k][Math.floor(r() * pool[k].length)]);
    });
    const yearScore = Math.round(total / fields.length);
    setSel('#premium-year-num', yearScore);
    setSel('#premium-year-text', pool.yearIntro[tierIndex(yearScore, 65, 78, 90)]);

    const mc = document.querySelector('#premium-months');
    if (mc) {
        mc.innerHTML = '';
        for (let i = 0; i < 12; i++) {
            const r = mulberry32(fortuneHash(base + '|m' + i));
            const score = 50 + Math.floor(r() * 51);
            const card = document.createElement('div');
            card.className = 'fortune-card';
            const h = document.createElement('h3');
            h.textContent = pool.monthNames[i];
            const barWrap = document.createElement('div');
            barWrap.className = 'score-bar';
            const span = document.createElement('span');
            span.style.width = score + '%';
            barWrap.appendChild(span);
            const p = document.createElement('p');
            p.className = 'fortune-text';
            p.textContent = pool.months[Math.floor(r() * pool.months.length)];
            card.appendChild(h); card.appendChild(barWrap); card.appendChild(p);
            mc.appendChild(card);
        }
    }

    const lr = mulberry32(fortuneHash(base + '|lucky'));
    const colors = (fortunePools[lang] || fortunePools.en).colors;
    setSel('#premium-keyword', pool.keywords[Math.floor(lr() * pool.keywords.length)]);
    setSel('#premium-color', colors[Math.floor(lr() * colors.length)]);
    setSel('#premium-number', 1 + Math.floor(lr() * 45));

    const ar = mulberry32(fortuneHash(base + '|advice'));
    setSel('#premium-advice-text', pool.advice[Math.floor(ar() * pool.advice.length)]);

    applyPremiumLock();
}

function initPremiumLogic() {
    // Handle the post-payment unlock redirect on any page that loads main.js.
    try {
        const params = new URLSearchParams(window.location.search);
        if (params.get('unlock') === PREMIUM_UNLOCK_TOKEN) {
            localStorage.setItem('premiumUnlocked', '1');
            if (window.history && history.replaceState) {
                history.replaceState({}, '', window.location.pathname);
            }
        }
    } catch (e) { /* ignore */ }

    const btn = document.querySelector('#premium-btn');
    const result = document.querySelector('#premium-result');
    if (!btn || !result) return;

    btn.addEventListener('click', () => {
        const bi = document.querySelector('#premium-birth');
        const birth = bi ? bi.value : '';
        if (!birth) {
            const lang = localStorage.getItem('lang') || 'en';
            alert((translations[lang] && translations[lang]['fortune-validate']) || 'Please enter your date of birth.');
            return;
        }
        window.__premium = { birth };
        renderPremium();
        result.hidden = false;
        result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    const buy = document.querySelector('#premium-buy');
    if (buy) buy.addEventListener('click', () => {
        const lang = localStorage.getItem('lang') || 'en';
        if (!PREMIUM_CHECKOUT_URL || PREMIUM_CHECKOUT_URL.indexOf('REPLACE_WITH') !== -1) {
            alert((translations[lang] && translations[lang]['premium-config-missing']) || 'Checkout link is not set up yet.');
            return;
        }
        window.location.href = PREMIUM_CHECKOUT_URL;
    });
}

const ZODIAC_EMOJI = ["🐀", "🐂", "🐯", "🐰", "🐉", "🐍", "🐴", "🐐", "🐵", "🐔", "🐶", "🐷"];

function renderZodiac() {
    const result = document.querySelector('#zodiac-result');
    if (!result || !window.__zodiac) return;
    const lang = localStorage.getItem('lang') || 'en';
    const pool = zodiacPools[lang] || zodiacPools.en;
    const year = window.__zodiac.year;
    const idx = (((year - 4) % 12) + 12) % 12;
    const setSel = (s, v) => { const e = document.querySelector(s); if (e) e.textContent = v; };

    setSel('#zodiac-emoji', ZODIAC_EMOJI[idx]);
    setSel('#zodiac-name', pool.animals[idx]);
    setSel('#zodiac-trait', pool.traits[idx]);

    const years = [];
    for (let y = 1936; y <= 2026; y++) { if ((((y - 4) % 12) + 12) % 12 === idx) years.push(y); }
    setSel('#zodiac-years', years.slice(-6).join(', '));

    const today = new Date();
    const ds = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const tr = mulberry32(fortuneHash('zodiac|today|' + idx + '|' + ds));
    const tScore = 50 + Math.floor(tr() * 51);
    const tText = pool.today[Math.floor(tr() * pool.today.length)];
    const tb = document.querySelector('#zodiac-today-bar'); if (tb) tb.style.width = tScore + '%';
    setSel('#zodiac-today-text', tText);

    const yr = mulberry32(fortuneHash('zodiac|2026|' + idx));
    const yText = pool.year[Math.floor(yr() * pool.year.length)];
    const yScore = 55 + Math.floor(yr() * 46);
    const yb = document.querySelector('#zodiac-year-bar'); if (yb) yb.style.width = yScore + '%';
    setSel('#zodiac-year-text', yText);

    const lr = mulberry32(fortuneHash('zodiac|lucky|' + idx + '|' + ds));
    const colors = (fortunePools[lang] || fortunePools.en).colors;
    setSel('#zodiac-number', 1 + Math.floor(lr() * 45));
    setSel('#zodiac-color', colors[Math.floor(lr() * colors.length)]);

    window.__zodiacShare = {
        title: ZODIAC_EMOJI[idx] + ' ' + pool.animals[idx],
        subtitle: '',
        bigValue: tScore,
        bigLabel: translations[lang]['zodiac-today-label'],
        summary: pool.traits[idx],
        rows: [
            { label: translations[lang]['zodiac-today-label'], score: tScore },
            { label: translations[lang]['zodiac-year-label'], score: yScore }
        ]
    };
}

function initZodiacLogic() {
    const btn = document.querySelector('#zodiac-btn');
    const result = document.querySelector('#zodiac-result');
    if (!btn || !result) return;
    btn.addEventListener('click', () => {
        const yi = document.querySelector('#zodiac-year');
        const year = yi ? parseInt(yi.value, 10) : NaN;
        if (!year || year < 1900 || year > 2026) {
            const lang = localStorage.getItem('lang') || 'en';
            alert((translations[lang] && translations[lang]['zodiac-validate']) || 'Please enter your birth year.');
            return;
        }
        window.__zodiac = { year: year };
        renderZodiac();
        result.hidden = false;
        result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
    attachShare('zodiac-share', () => window.__zodiacShare, 'my-zodiac');
}

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

    // Re-render any active result in the newly selected language.
    if (typeof renderFortune === 'function' && window.__fortune) renderFortune();
    if (typeof renderFace === 'function' && window.__face) renderFace();
    if (typeof renderCompat === 'function' && window.__compat) renderCompat();
    if (typeof renderPremium === 'function' && window.__premium) renderPremium();
    if (typeof renderZodiac === 'function' && window.__zodiac) renderZodiac();
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
    initFortuneLogic();
    initFaceLogic();
    initCompatLogic();
    initPremiumLogic();
    initZodiacLogic();
});
