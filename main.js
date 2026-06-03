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

    // Re-render the fortune result in the newly selected language, if present.
    if (typeof renderFortune === 'function' && window.__fortune) {
        renderFortune();
    }
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
});
