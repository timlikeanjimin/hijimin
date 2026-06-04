// SORTED — 구매 결정 도우미
// Storage
const DB = {
  KEY: 'sorted_decisions',
  WISH: 'sorted_wishlist',
  PRO: 'sorted_pro',
  LIMIT: 5,

  all() { return JSON.parse(localStorage.getItem(this.KEY) || '[]'); },
  wishAll() { return JSON.parse(localStorage.getItem(this.WISH) || '[]'); },
  isPro() { return localStorage.getItem(this.PRO) === '1'; },
  setPro() { localStorage.setItem(this.PRO, '1'); },
  monthCount() {
    const now = new Date();
    return this.all().filter(d => {
      const dt = new Date(d.date);
      return dt.getMonth() === now.getMonth() && dt.getFullYear() === now.getFullYear();
    }).length;
  },
  save(decision) {
    const all = this.all();
    all.unshift({ ...decision, id: Date.now(), date: new Date().toISOString() });
    localStorage.setItem(this.KEY, JSON.stringify(all));
  },
  saveWish(item) {
    const all = this.wishAll();
    all.unshift({ ...item, id: Date.now(), addedAt: new Date().toISOString() });
    localStorage.setItem(this.WISH, JSON.stringify(all));
  },
  removeWish(id) {
    const all = this.wishAll().filter(w => w.id !== id);
    localStorage.setItem(this.WISH, JSON.stringify(all));
  },
  updateFeedback(id, feedback) {
    const all = this.all().map(d => d.id === id ? { ...d, feedback } : d);
    localStorage.setItem(this.KEY, JSON.stringify(all));
  },
  delete(id) {
    const all = this.all().filter(d => d.id !== id);
    localStorage.setItem(this.KEY, JSON.stringify(all));
  }
};

// Decision Engine
function analyze(data) {
  let score = 50;
  const reasons = [];

  // 가격 영향
  const price = parseInt(data.price) || 0;
  if (price > 200000) { score -= 10; reasons.push({ icon: '💸', text: '20만원 이상 — 충동 결제 주의 구간입니다.' }); }
  else if (price < 20000) { score += 10; reasons.push({ icon: '💰', text: '부담 없는 금액대입니다.' }); }

  // 어디서 봤는지 (impulse trigger)
  const triggerMap = {
    '인스타그램': -20, '유튜브': -15, '틱톡': -18, '광고': -22,
    '직접 필요': +20, '친구 추천': +5, '검색': +10
  };
  if (triggerMap[data.trigger] !== undefined) {
    score += triggerMap[data.trigger];
    if (triggerMap[data.trigger] < 0) {
      reasons.push({ icon: '📱', text: `${data.trigger} 광고/피드에서 발견 — 충동 구매 위험 신호입니다.` });
    } else {
      reasons.push({ icon: '✅', text: `${data.trigger}에서 발견한 필요 품목입니다.` });
    }
  }

  // 이미 비슷한 게 있는지
  if (data.hasSimilar === '있어요') {
    score -= 25;
    reasons.push({ icon: '📦', text: '비슷한 물건이 이미 있습니다. 정말 더 필요한가요?' });
  } else {
    score += 10;
    reasons.push({ icon: '✨', text: '현재 없는 물건 — 새로 필요한 경우입니다.' });
  }

  // 얼마나 급한지
  const urgencyMap = { '지금 당장': +15, '이번 주': +5, '다음 달': -10, '언젠가': -20 };
  if (urgencyMap[data.urgency] !== undefined) {
    score += urgencyMap[data.urgency];
    if (data.urgency === '언젠가' || data.urgency === '다음 달') {
      reasons.push({ icon: '⏰', text: `'${data.urgency}' 필요 — 위시리스트에 담고 기다려보세요.` });
    }
  }

  // 얼마나 자주 쓸 것인지
  const useMap = { '매일': +20, '주 2~3회': +10, '가끔': -5, '거의 안 씀': -20 };
  if (useMap[data.usage] !== undefined) {
    score += useMap[data.usage];
    if (useMap[data.usage] > 0) {
      reasons.push({ icon: '🔄', text: `${data.usage} 사용 예정 — 활용도가 높습니다.` });
    } else {
      reasons.push({ icon: '⚠️', text: `사용 빈도가 낮을 것 같습니다. 후회할 수 있어요.` });
    }
  }

  // 과거 패턴 반영
  const past = DB.all();
  const impulseCount = past.filter(d => d.trigger && ['인스타그램','틱톡','유튜브','광고'].includes(d.trigger) && d.feedback === 'regret').length;
  if (impulseCount >= 2) {
    score -= 8;
    reasons.push({ icon: '📊', text: `과거 SNS 충동구매 ${impulseCount}번 후회했습니다. 패턴을 기억하세요.` });
  }

  score = Math.max(5, Math.min(95, score));

  let verdict, verdictText, verdictSub, verdictEmoji;
  if (score >= 65) {
    verdict = 'go'; verdictText = '사도 됩니다!'; verdictEmoji = '✅';
    verdictSub = '분석 결과 합리적인 구매입니다.';
  } else if (score >= 40) {
    verdict = 'wait'; verdictText = '24시간만 기다려요'; verdictEmoji = '⏳';
    verdictSub = '충분히 고민한 뒤 결정하세요.';
  } else {
    verdict = 'skip'; verdictText = '지금은 참으세요'; verdictEmoji = '🛑';
    verdictSub = '후회할 가능성이 높습니다.';
  }

  // 세부 점수
  const needScore = Math.min(10, Math.max(1, Math.round((score + (data.hasSimilar === '없어요' ? 20 : -10)) / 10)));
  const impScore = Math.min(10, Math.max(1, 10 - Math.round((['인스타그램','틱톡','유튜브','광고'].includes(data.trigger) ? 4 : 0))));
  const useScore = Math.min(10, Math.max(1, { '매일': 9, '주 2~3회': 7, '가끔': 4, '거의 안 씀': 2 }[data.usage] || 5));

  return { score, verdict, verdictText, verdictEmoji, verdictSub, reasons, needScore, impScore, useScore };
}

// Wizard State
let wizardData = {};
let currentStep = 1;
const TOTAL_STEPS = 4;

function showWizard() {
  switchTab('decide');
  wizardData = {};
  currentStep = 1;
  renderStep(1);
}

function renderStep(step) {
  currentStep = step;
  const container = document.getElementById('decide-content');

  // Progress
  const progressHTML = Array.from({ length: TOTAL_STEPS }, (_, i) => {
    const cls = i + 1 < step ? 'wp done' : i + 1 === step ? 'wp active' : 'wp';
    return `<div class="${cls}"></div>`;
  }).join('');

  let stepHTML = '';

  if (step === 1) {
    stepHTML = `
      <div class="wizard-card">
        <h3>무엇을 사려고 해요? 🛍️</h3>
        <p>상품명과 가격을 입력해주세요.</p>
        <div class="input-group">
          <label>상품명</label>
          <input class="input-field" id="inp-name" placeholder="예: 에어팟 프로, 나이키 운동화..." value="${wizardData.name || ''}" />
        </div>
        <div class="input-group">
          <label>가격</label>
          <div class="price-wrap">
            <span class="price-prefix">₩</span>
            <input class="input-field" id="inp-price" type="number" placeholder="0" value="${wizardData.price || ''}" />
          </div>
        </div>
        <div class="input-group">
          <label>카테고리</label>
          <div class="chip-group" id="cat-chips">
            ${['패션/의류','전자기기','뷰티','식품','취미','가전','기타'].map(c =>
              `<div class="chip ${wizardData.category === c ? 'selected' : ''}" onclick="selectChip('cat-chips','${c}','category')">${c}</div>`
            ).join('')}
          </div>
        </div>
        <div class="btn-row">
          <button class="btn-next" id="btn-step1" onclick="goStep(2)">다음 →</button>
        </div>
      </div>`;
  } else if (step === 2) {
    stepHTML = `
      <div class="wizard-card">
        <h3>어디서 봤어요? 👀</h3>
        <p>구매 충동이 생긴 계기가 무엇인가요?</p>
        <div class="chip-group" id="trigger-chips">
          ${['인스타그램','유튜브','틱톡','광고','친구 추천','검색','직접 필요','기타'].map(c =>
            `<div class="chip ${wizardData.trigger === c ? 'selected' : ''}" onclick="selectChip('trigger-chips','${c}','trigger')">${c}</div>`
          ).join('')}
        </div>
        <div class="btn-row">
          <button class="btn-back" onclick="goStep(1)">←</button>
          <button class="btn-next" id="btn-step2" onclick="goStep(3)">다음 →</button>
        </div>
      </div>`;
  } else if (step === 3) {
    stepHTML = `
      <div class="wizard-card">
        <h3>솔직하게 답해줘요 🤔</h3>
        <p>정확할수록 더 좋은 결과가 나와요.</p>
        <div class="input-group">
          <label>비슷한 물건이 이미 있나요?</label>
          <div class="chip-group" id="similar-chips">
            ${['없어요','있어요'].map(c =>
              `<div class="chip ${wizardData.hasSimilar === c ? 'selected' : ''}" onclick="selectChip('similar-chips','${c}','hasSimilar')">${c}</div>`
            ).join('')}
          </div>
        </div>
        <div class="input-group">
          <label>언제 필요해요?</label>
          <div class="chip-group" id="urgency-chips">
            ${['지금 당장','이번 주','다음 달','언젠가'].map(c =>
              `<div class="chip ${wizardData.urgency === c ? 'selected' : ''}" onclick="selectChip('urgency-chips','${c}','urgency')">${c}</div>`
            ).join('')}
          </div>
        </div>
        <div class="input-group">
          <label>얼마나 자주 쓸 것 같아요?</label>
          <div class="chip-group" id="usage-chips">
            ${['매일','주 2~3회','가끔','거의 안 씀'].map(c =>
              `<div class="chip ${wizardData.usage === c ? 'selected' : ''}" onclick="selectChip('usage-chips','${c}','usage')">${c}</div>`
            ).join('')}
          </div>
        </div>
        <div class="btn-row">
          <button class="btn-back" onclick="goStep(2)">←</button>
          <button class="btn-next" id="btn-step3" onclick="startAnalysis()">분석 시작 →</button>
        </div>
      </div>`;
  }

  container.innerHTML = `
    <div class="wizard-progress">${progressHTML}</div>
    ${stepHTML}
  `;

  // 유효성 검사
  if (step === 1) {
    const btn = document.getElementById('btn-step1');
    const nameEl = document.getElementById('inp-name');
    const priceEl = document.getElementById('inp-price');
    const check = () => { btn.disabled = !nameEl.value.trim() || !priceEl.value; };
    nameEl.addEventListener('input', check); priceEl.addEventListener('input', check);
    check();
  }
}

function selectChip(groupId, value, field) {
  wizardData[field] = value;
  document.querySelectorAll(`#${groupId} .chip`).forEach(c => {
    c.classList.toggle('selected', c.textContent === value);
  });
}

function goStep(step) {
  if (step === 2) {
    const name = document.getElementById('inp-name').value.trim();
    const price = document.getElementById('inp-price').value;
    if (!name || !price) return;
    wizardData.name = name;
    wizardData.price = price;
  }
  renderStep(step);
}

function startAnalysis() {
  if (!wizardData.hasSimilar || !wizardData.urgency || !wizardData.usage) {
    showToast('모든 항목을 선택해주세요');
    return;
  }

  // Check free limit
  if (!DB.isPro() && DB.monthCount() >= DB.LIMIT) {
    showProGate();
    return;
  }

  const container = document.getElementById('decide-content');
  container.innerHTML = `
    <div class="analyzing">
      <span class="analyzing-emoji">🧠</span>
      <h3>분석 중...</h3>
      <div class="analysis-steps" id="analysis-steps">
        <div class="analysis-step"><span class="as-icon spinning">⚙️</span> 구매 충동 패턴 분석 중</div>
        <div class="analysis-step"><span class="as-icon">⏳</span> 과거 결정 데이터 비교 중</div>
        <div class="analysis-step"><span class="as-icon">⏳</span> 최종 점수 계산 중</div>
      </div>
    </div>`;

  // 분석 단계 애니메이션
  setTimeout(() => {
    const steps = document.querySelectorAll('.analysis-step .as-icon');
    if (steps[0]) { steps[0].textContent = '✅'; steps[0].classList.remove('spinning'); }
    if (steps[1]) { steps[1].textContent = '⚙️'; steps[1].classList.add('spinning'); }
  }, 800);
  setTimeout(() => {
    const steps = document.querySelectorAll('.analysis-step .as-icon');
    if (steps[1]) { steps[1].textContent = '✅'; steps[1].classList.remove('spinning'); }
    if (steps[2]) { steps[2].textContent = '⚙️'; steps[2].classList.add('spinning'); }
  }, 1600);
  setTimeout(() => {
    const steps = document.querySelectorAll('.analysis-step .as-icon');
    if (steps[2]) { steps[2].textContent = '✅'; steps[2].classList.remove('spinning'); }
  }, 2200);
  setTimeout(() => showResult(), 2600);
}

function showResult() {
  const result = analyze(wizardData);
  const decision = { ...wizardData, ...result };
  DB.save(decision);
  renderResult(decision);
  renderHomeStats();
}

function renderResult(d) {
  const container = document.getElementById('decide-content');
  const fmtPrice = parseInt(d.price).toLocaleString('ko-KR');
  const reasonsHTML = d.reasons.map(r =>
    `<div class="reason-item"><span class="ri-icon">${r.icon}</span><span>${r.text}</span></div>`
  ).join('');

  container.innerHTML = `
    <div class="result-card">
      <div class="result-header ${d.verdict}">
        <span class="result-emoji">${d.verdictEmoji}</span>
        <div class="result-verdict">${d.verdictText}</div>
        <div class="result-sub">${d.verdictSub}</div>
      </div>
      <div class="result-body">
        <div class="score-row">
          <div class="score-pill">
            <span class="sv">${d.needScore}</span>
            <div class="sn">필요도</div>
          </div>
          <div class="score-pill">
            <span class="sv">${d.impScore}</span>
            <div class="sn">충동지수</div>
          </div>
          <div class="score-pill">
            <span class="sv">${d.useScore}</span>
            <div class="sn">활용도</div>
          </div>
          <div class="score-pill">
            <span class="sv" style="color:var(--primary)">${d.score}</span>
            <div class="sn">종합점수</div>
          </div>
        </div>
        <div class="reason-list">${reasonsHTML}</div>
        <div class="result-actions">
          ${d.verdict !== 'go' ? `<button class="btn-wishlist" onclick="addToWishlist()">⭐ 위시리스트에 담기 (24시간 후 재확인)</button>` : ''}
          <button class="btn-bought" onclick="markBought()">실제로 샀어요</button>
          <button class="btn-new-decision" onclick="showWizard()">+ 새 결정 하기</button>
        </div>
      </div>
    </div>`;
}

function addToWishlist() {
  if (!wizardData.name) return;
  DB.saveWish({ name: wizardData.name, price: wizardData.price, category: wizardData.category });
  showToast('⭐ 위시리스트에 추가됐어요');
}

function markBought() {
  showToast('✅ 기록됐어요! 나중에 만족도를 알려주세요');
}

function showProGate() {
  const container = document.getElementById('decide-content');
  container.innerHTML = `
    <div class="pro-gate">
      <h3>이번 달 무료 분석 5회를 다 썼어요 🎯</h3>
      <p>Pro로 업그레이드하면 무제한으로 사용할 수 있어요.<br>월 3,900원으로 현명한 소비를 계속하세요.</p>
      <button class="btn-upgrade" onclick="showToast('결제 기능 준비 중! 곧 오픈돼요 🙏')">Pro 시작하기 — ₩3,900/월</button>
    </div>
    <div style="text-align:center;margin-top:12px;font-size:13px;color:var(--gray-400)">남은 무료 횟수: 0 / 5</div>`;
}

// HOME STATS
function renderHomeStats() {
  const all = DB.all();
  const now = new Date();
  const thisMonth = all.filter(d => {
    const dt = new Date(d.date);
    return dt.getMonth() === now.getMonth() && dt.getFullYear() === now.getFullYear();
  });

  const totalDecisions = all.length;
  const skipCount = all.filter(d => d.verdict === 'skip' || d.verdict === 'wait').length;
  const savedAmount = all
    .filter(d => (d.verdict === 'skip' || d.verdict === 'wait') && d.feedback !== 'bought')
    .reduce((s, d) => s + (parseInt(d.price) || 0), 0);
  const impulsePct = all.length > 0
    ? Math.round(all.filter(d => ['인스타그램','틱톡','유튜브','광고'].includes(d.trigger)).length / all.length * 100)
    : 0;

  const el = id => document.getElementById(id);
  if (el('stat-total')) el('stat-total').textContent = totalDecisions + '회';
  if (el('stat-saved')) el('stat-saved').textContent = savedAmount > 0 ? '₩' + savedAmount.toLocaleString('ko-KR') : '₩0';
  if (el('stat-month')) el('stat-month').textContent = thisMonth.length + '회';
  if (el('stat-impulse')) el('stat-impulse').textContent = impulsePct + '%';
  if (el('impulse-fill')) {
    const fill = document.getElementById('impulse-fill');
    fill.style.width = impulsePct + '%';
    fill.style.background = impulsePct > 60 ? 'var(--red)' : impulsePct > 30 ? 'var(--amber)' : 'var(--green)';
  }

  renderRecentList();
}

function renderRecentList() {
  const container = document.getElementById('recent-list');
  if (!container) return;
  const all = DB.all().slice(0, 5);
  if (!all.length) {
    container.innerHTML = '<div style="text-align:center;padding:20px;font-size:14px;color:var(--gray-400)">아직 결정 기록이 없어요</div>';
    return;
  }
  const emojiMap = { go: '✅', wait: '⏳', skip: '🛑' };
  container.innerHTML = all.map(d => `
    <div class="recent-item">
      <div class="ri-dot ${d.verdict}">${emojiMap[d.verdict] || '•'}</div>
      <div class="ri-name">${d.name}</div>
      <div class="ri-price">₩${parseInt(d.price).toLocaleString('ko-KR')}</div>
    </div>`).join('');
}

// HISTORY TAB
function renderHistory(filter = 'all') {
  const container = document.getElementById('history-list');
  if (!container) return;
  let all = DB.all();
  if (filter !== 'all') all = all.filter(d => d.verdict === filter);

  if (!all.length) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📭</div>
        <p>아직 결정 기록이 없어요</p>
        <small>구매 결정을 해보면 여기에 기록돼요</small>
      </div>`;
    return;
  }

  const emojiMap = { go: '✅', wait: '⏳', skip: '🛑' };
  const labelMap = { go: '구매 OK', wait: '기다려요', skip: '참아요' };
  const dateStr = d => new Date(d.date).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' });

  container.innerHTML = all.map(d => `
    <div class="history-item">
      <div class="hv-dot ${d.verdict}">${emojiMap[d.verdict]}</div>
      <div class="h-info">
        <div class="h-name">${d.name}</div>
        <div class="h-meta">${labelMap[d.verdict]} · ${d.category || ''} · ${dateStr(d)}</div>
        ${d.verdict === 'go' && !d.feedback ? `
          <div class="feedback-row">
            <span style="font-size:12px;color:var(--gray-400)">구매 후 만족하셨나요?</span>
            <button class="fb-btn good" onclick="saveFeedback(${d.id},'good')">😊 만족</button>
            <button class="fb-btn regret" onclick="saveFeedback(${d.id},'regret')">😞 후회</button>
          </div>` : ''}
        ${d.feedback ? `<div style="font-size:12px;margin-top:6px;color:${d.feedback === 'good' ? 'var(--green)' : 'var(--red)'}">
          ${d.feedback === 'good' ? '😊 만족했어요' : '😞 후회했어요'}
        </div>` : ''}
      </div>
      <div class="h-price">₩${parseInt(d.price).toLocaleString('ko-KR')}</div>
    </div>`).join('');
}

function saveFeedback(id, val) {
  DB.updateFeedback(id, val);
  const filter = document.querySelector('.filter-chip.active')?.dataset.filter || 'all';
  renderHistory(filter);
  renderPatterns();
  showToast(val === 'good' ? '😊 소중한 피드백이에요!' : '😞 다음엔 더 현명하게!');
}

// PATTERN TAB
function renderPatterns() {
  const all = DB.all();

  if (!document.getElementById('pat-total')) return;

  const total = all.length;
  const goCount = all.filter(d => d.verdict === 'go').length;
  const waitCount = all.filter(d => d.verdict === 'wait').length;
  const skipCount = all.filter(d => d.verdict === 'skip').length;
  const savedAmt = all.filter(d => (d.verdict === 'skip' || d.verdict === 'wait') && d.feedback !== 'bought')
    .reduce((s, d) => s + (parseInt(d.price) || 0), 0);
  const regretCount = all.filter(d => d.feedback === 'regret').length;

  document.getElementById('pat-total').textContent = total;
  document.getElementById('pat-saved').textContent = '₩' + savedAmt.toLocaleString('ko-KR');
  document.getElementById('pat-regret').textContent = regretCount + '회';

  // Trigger breakdown
  const triggerCounts = {};
  all.forEach(d => { if (d.trigger) triggerCounts[d.trigger] = (triggerCounts[d.trigger] || 0) + 1; });
  const maxT = Math.max(...Object.values(triggerCounts), 1);
  const triggerHTML = Object.entries(triggerCounts)
    .sort((a, b) => b[1] - a[1]).slice(0, 5)
    .map(([k, v]) => `
      <div class="bar-row">
        <div class="bar-lbl">${k}</div>
        <div class="bar-track"><div class="bar-fill" style="width:${v/maxT*100}%;background:var(--primary)"></div></div>
        <div class="bar-val">${v}</div>
      </div>`).join('');
  const triggerEl = document.getElementById('trigger-chart');
  if (triggerEl) triggerEl.innerHTML = triggerHTML || '<p style="color:var(--gray-400);font-size:14px">아직 데이터 없음</p>';

  // Verdict pie (CSS conic-gradient)
  const goDeg = total > 0 ? Math.round(goCount / total * 360) : 0;
  const waitDeg = total > 0 ? Math.round(waitCount / total * 360) : 0;
  const pie = document.getElementById('verdict-pie');
  if (pie) {
    pie.style.cssText = `width:80px;height:80px;border-radius:50%;background:conic-gradient(
      var(--green) 0deg ${goDeg}deg,
      var(--amber) ${goDeg}deg ${goDeg + waitDeg}deg,
      var(--red) ${goDeg + waitDeg}deg 360deg
    )`;
  }
  const goPct = total > 0 ? Math.round(goCount / total * 100) : 0;
  const waitPct = total > 0 ? Math.round(waitCount / total * 100) : 0;
  const skipPct = 100 - goPct - waitPct;
  const pieEl = document.getElementById('pie-legend');
  if (pieEl) pieEl.innerHTML = `
    <div class="legend-item"><div class="legend-dot" style="background:var(--green)"></div>구매 OK <span class="legend-pct">${goPct}%</span></div>
    <div class="legend-item"><div class="legend-dot" style="background:var(--amber)"></div>기다려요 <span class="legend-pct">${waitPct}%</span></div>
    <div class="legend-item"><div class="legend-dot" style="background:var(--red)"></div>참아요 <span class="legend-pct">${skipPct}%</span></div>`;
}

// WISHLIST TAB
function renderWishlist() {
  const container = document.getElementById('wishlist-list');
  if (!container) return;
  const all = DB.wishAll();

  if (!all.length) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">⭐</div>
        <p>위시리스트가 비어있어요</p>
        <small>결정 화면에서 위시리스트에 담을 수 있어요</small>
      </div>`;
    return;
  }

  const now = Date.now();
  container.innerHTML = all.map(w => {
    const elapsed = now - w.id;
    const H24 = 24 * 60 * 60 * 1000;
    const pct = Math.min(100, Math.round(elapsed / H24 * 100));
    const ready = elapsed >= H24;
    const addedStr = new Date(w.addedAt).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' });
    return `
      <div class="wishlist-item">
        <div class="wl-top">
          <div>
            <div class="wl-name">${w.name}</div>
            <div class="wl-added">${addedStr} 추가</div>
          </div>
          <div class="wl-price">₩${parseInt(w.price).toLocaleString('ko-KR')}</div>
        </div>
        ${ready ? '<div style="font-size:13px;color:var(--green);font-weight:700;margin-bottom:10px">✅ 24시간이 지났어요! 아직도 원하나요?</div>'
          : `<div style="font-size:12px;color:var(--gray-500);margin-bottom:6px">24시간 대기 중 (${pct}%)</div>
             <div class="cd-bar"><div class="cd-fill" style="width:${pct}%"></div></div>`}
        <div class="wl-actions">
          <button class="btn-buy-now" onclick="buyFromWish(${w.id})">✅ 구매했어요</button>
          <button class="btn-remove" onclick="removeWish(${w.id})">🗑️ 삭제</button>
        </div>
      </div>`;
  }).join('');
}

function buyFromWish(id) {
  DB.removeWish(id);
  renderWishlist();
  showToast('구매 완료! 만족스러우시길 바라요 😊');
}

function removeWish(id) {
  DB.removeWish(id);
  renderWishlist();
  showToast('위시리스트에서 제거됐어요');
}

// TAB NAVIGATION
function switchTab(tab) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  const content = document.getElementById('tab-' + tab);
  const nav = document.querySelector(`[data-tab="${tab}"]`);
  if (content) content.classList.add('active');
  if (nav) nav.classList.add('active');

  if (tab === 'home') renderHomeStats();
  if (tab === 'history') renderHistory('all');
  if (tab === 'pattern') renderPatterns();
  if (tab === 'wishlist') renderWishlist();
  if (tab === 'decide') renderStep(currentStep);
}

// TOAST
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast'; t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2200);
}

// INIT
document.addEventListener('DOMContentLoaded', () => {
  const isApp = document.getElementById('tab-home');
  if (!isApp) return;

  // Check usage count for header badge
  const used = DB.monthCount();
  const remaining = Math.max(0, DB.LIMIT - used);
  const badgeEl = document.getElementById('usage-badge');
  if (badgeEl) {
    if (DB.isPro()) {
      badgeEl.textContent = 'PRO ✨';
      badgeEl.className = 'pro-badge';
    } else {
      badgeEl.textContent = `무료 ${remaining}/${DB.LIMIT}`;
      badgeEl.className = remaining === 0 ? 'pro-badge' : 'free-badge';
    }
  }

  switchTab('home');
});
