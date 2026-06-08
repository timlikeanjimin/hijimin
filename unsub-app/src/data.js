export const PRESETS = [
  { name: '넷플릭스', emoji: '🎬', price: 17000, currency: 'KRW', cycle: 'monthly' },
  { name: '유튜브 프리미엄', emoji: '▶️', price: 14900, currency: 'KRW', cycle: 'monthly' },
  { name: '멜론', emoji: '🍈', price: 10900, currency: 'KRW', cycle: 'monthly' },
  { name: '스포티파이', emoji: '🎵', price: 10900, currency: 'KRW', cycle: 'monthly' },
  { name: '왓챠', emoji: '🎭', price: 9900, currency: 'KRW', cycle: 'monthly' },
  { name: '웨이브', emoji: '🌊', price: 7900, currency: 'KRW', cycle: 'monthly' },
  { name: '티빙', emoji: '📺', price: 9900, currency: 'KRW', cycle: 'monthly' },
  { name: '쿠팡 로켓와우', emoji: '🛒', price: 7890, currency: 'KRW', cycle: 'monthly' },
  { name: '네이버 플러스', emoji: '🟢', price: 4900, currency: 'KRW', cycle: 'monthly' },
  { name: '밀리의서재', emoji: '📖', price: 9900, currency: 'KRW', cycle: 'monthly' },
  { name: '리디셀렉트', emoji: '📕', price: 6500, currency: 'KRW', cycle: 'monthly' },
  { name: '지니뮤직', emoji: '🎵', price: 8900, currency: 'KRW', cycle: 'monthly' },
  { name: 'ChatGPT Plus', emoji: '🤖', price: 20, currency: 'USD', cycle: 'monthly' },
  { name: 'Adobe Creative Cloud', emoji: '🎨', price: 54.99, currency: 'USD', cycle: 'monthly' },
  { name: 'Notion', emoji: '📝', price: 10, currency: 'USD', cycle: 'monthly' },
  { name: 'Figma', emoji: '✏️', price: 15, currency: 'USD', cycle: 'monthly' },
  { name: 'Discord Nitro', emoji: '🎮', price: 9.99, currency: 'USD', cycle: 'monthly' },
  { name: 'Dropbox', emoji: '📁', price: 11.99, currency: 'USD', cycle: 'monthly' },
];

export const GUIDES = [
  {
    name: '넷플릭스', emoji: '🎬', category: 'kr',
    steps: [
      'netflix.com 접속 후 로그인',
      '우상단 프로필 → 계정',
      '멤버십 취소 클릭',
      '취소 확인',
    ],
    tip: '취소 후에도 결제 기간 끝까지 시청 가능해요.',
  },
  {
    name: '유튜브 프리미엄', emoji: '▶️', category: 'kr',
    steps: [
      'youtube.com/premium 접속',
      '멤버십 관리 클릭',
      '멤버십 취소 선택',
      '확인',
    ],
    tip: '가족 요금제는 관리자만 취소 가능해요.',
  },
  {
    name: '왓챠', emoji: '🎭', category: 'kr',
    steps: [
      '왓챠 앱 또는 watcha.com 접속',
      '마이페이지 → 결제 정보',
      '구독 해지 선택',
      '해지 확인',
    ],
    tip: '해지 후 남은 기간까지 이용 가능해요.',
  },
  {
    name: '웨이브', emoji: '🌊', category: 'kr',
    steps: [
      'wavve.com 접속 후 로그인',
      'MY → 이용권 관리',
      '정기 구독 해지 클릭',
      '확인 후 완료',
    ],
    tip: 'KT/SKT/LG 제휴 요금제는 통신사 앱에서 해지해야 해요.',
  },
  {
    name: '티빙', emoji: '📺', category: 'kr',
    steps: [
      'tving.com 접속 후 로그인',
      'MY → 이용권 관리',
      '해지 신청 클릭',
      '사유 선택 후 최종 확인',
    ],
    tip: '네이버플러스 멤버십으로 이용 중이라면 네이버에서 해지해야 해요.',
  },
  {
    name: '멜론', emoji: '🍈', category: 'kr',
    steps: [
      '멜론 앱 또는 melon.com 접속',
      'MY → 이용권 정보',
      '이용권 해지 클릭',
      '해지 사유 선택 후 완료',
    ],
    tip: '카카오페이 정기결제로 연결된 경우 카카오페이에서도 해지해야 해요.',
  },
  {
    name: '스포티파이', emoji: '🎵', category: 'kr',
    steps: [
      'spotify.com/account 접속',
      '플랜 탭 → 프리미엄 취소',
      '이유 선택 → 취소 계속',
      '완료',
    ],
    tip: '취소해도 결제 기간 끝까지 프리미엄 유지돼요.',
  },
  {
    name: '쿠팡 로켓와우', emoji: '🛒', category: 'kr',
    steps: [
      '쿠팡 앱 → 마이쿠팡',
      '로켓와우 클럽 → 멤버십 관리',
      '멤버십 해지 선택',
      '해지 확인',
    ],
    tip: '해지 후 익월부터 혜택이 종료돼요.',
  },
  {
    name: '네이버 플러스', emoji: '🟢', category: 'kr',
    steps: [
      '네이버 앱 → 내 정보',
      '네이버플러스 멤버십',
      '멤버십 해지 신청',
      '확인',
    ],
    tip: '해지 신청 후 다음 결제일 전까지 혜택 유지돼요.',
  },
  {
    name: '밀리의서재', emoji: '📖', category: 'kr',
    steps: [
      '밀리 앱 → MY',
      '멤버십 관리',
      '정기 결제 해지',
      '해지 확인',
    ],
    tip: '앱스토어/구글플레이에서 결제했다면 해당 스토어에서도 해지해야 해요.',
  },
  {
    name: 'ChatGPT Plus', emoji: '🤖', category: 'global',
    steps: [
      'chat.openai.com 접속',
      '좌하단 이름 → Settings',
      'Manage Subscription 클릭',
      'Cancel Plan 선택',
    ],
    tip: '취소 후에도 결제 기간 끝까지 Plus 유지돼요.',
  },
  {
    name: 'Adobe Creative Cloud', emoji: '🎨', category: 'global',
    steps: [
      'account.adobe.com 접속',
      'Plans & Products → Manage Plan',
      'Cancel Plan 클릭',
      '위약금 확인 후 취소',
    ],
    tip: '⚠️ 연간 약정은 남은 기간의 50%를 위약금으로 청구해요. 반드시 확인하세요!',
  },
];

export const FREQUENCY_OPTIONS = [
  { value: 'daily', label: '매일', usesPerMonth: 30 },
  { value: 'few_weekly', label: '주 2~3회', usesPerMonth: 10 },
  { value: 'weekly', label: '주 1회', usesPerMonth: 4 },
  { value: 'monthly', label: '월 1~2회', usesPerMonth: 1.5 },
  { value: 'rarely', label: '거의 안 씀', usesPerMonth: 0.3 },
];

export const USD_TO_KRW = 1350;
export const EUR_TO_KRW = 1460;

export function toMonthlyKRW(price, currency, cycle) {
  let krw = currency === 'KRW' ? price : currency === 'USD' ? price * USD_TO_KRW : price * EUR_TO_KRW;
  if (cycle === 'yearly') return krw / 12;
  if (cycle === 'weekly') return krw * 4.33;
  return krw;
}

export function formatPrice(price, currency) {
  if (currency === 'KRW') return '₩' + Math.round(price).toLocaleString();
  if (currency === 'USD') return '$' + price.toFixed(2);
  return '€' + price.toFixed(2);
}

export function getCostPerUse(price, currency, cycle, frequency) {
  const monthly = toMonthlyKRW(price, currency, cycle);
  const opt = FREQUENCY_OPTIONS.find(f => f.value === frequency);
  if (!opt || opt.usesPerMonth === 0) return null;
  return monthly / opt.usesPerMonth;
}

export function getRecommendation(price, currency, cycle, frequency) {
  const costPerUse = getCostPerUse(price, currency, cycle, frequency);
  if (costPerUse === null) return null;
  if (frequency === 'rarely') return 'cancel';
  if (costPerUse > 5000) return 'cancel';
  if (costPerUse > 2000) return 'review';
  return 'keep';
}
