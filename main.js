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
