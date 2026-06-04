const CATEGORIES = {
  salary:    { name: '연봉협상',      emoji: '💼' },
  reject:    { name: '거절하기',      emoji: '🙅' },
  dating:    { name: '소개팅 / 관계', emoji: '💌' },
  family:    { name: '가족 대화',     emoji: '👨‍👩‍👧' },
  complaint: { name: '계약 · 민원',   emoji: '📋' },
  work:      { name: '직장 대화',     emoji: '🏢' }
};

function _p(v, fb) { return (v && String(v).trim()) ? String(v).trim() : fb; }
function _pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function renderForm(cat) {
  document.getElementById('form-content').innerHTML = FORMS[cat];
}

const FORMS = {

salary: `
<div class="form-category"><span class="form-cat-emoji">💼</span><span class="form-cat-name">연봉협상</span></div>
<p class="form-sub">구체적인 숫자와 성과를 입력할수록 설득력 있는 스크립트가 나와요.</p>
<div class="input-group">
  <label>현재 연봉</label>
  <input class="input-field" id="current" placeholder="예) 3,200만원 또는 월 267만원" />
</div>
<div class="input-group">
  <label>목표 연봉</label>
  <input class="input-field" id="target" placeholder="예) 3,800만원 (약 19% 인상)" />
</div>
<div class="input-group">
  <label>주요 성과</label>
  <textarea class="input-field" id="achievement" placeholder="예) OO 프로젝트 납기 달성, 팀 매출 15% 개선, 신규 클라이언트 3사 유치..."></textarea>
</div>
<div class="input-group">
  <label>재직 기간</label>
  <div class="chip-group" id="chips-tenure">
    <button class="chip" data-value="1년 미만" onclick="selectChip('chips-tenure','1년 미만','tenure')">1년 미만</button>
    <button class="chip" data-value="1~3년" onclick="selectChip('chips-tenure','1~3년','tenure')">1~3년</button>
    <button class="chip" data-value="3년 이상" onclick="selectChip('chips-tenure','3년 이상','tenure')">3년 이상</button>
  </div>
</div>
<div class="input-group">
  <label>회사 규모</label>
  <div class="chip-group" id="chips-company">
    <button class="chip" data-value="스타트업" onclick="selectChip('chips-company','스타트업','company')">스타트업</button>
    <button class="chip" data-value="중소기업" onclick="selectChip('chips-company','중소기업','company')">중소기업</button>
    <button class="chip" data-value="대기업" onclick="selectChip('chips-company','대기업','company')">대기업</button>
  </div>
</div>
<button class="btn-generate" onclick="generateScript()">스크립트 생성하기 →</button>
`,

reject: `
<div class="form-category"><span class="form-cat-emoji">🙅</span><span class="form-cat-name">거절하기</span></div>
<p class="form-sub">정중하지만 분명하게 거절하는 스크립트를 만들어드려요.</p>
<div class="input-group">
  <label>상대방 관계</label>
  <div class="chip-group" id="chips-relation">
    <button class="chip" data-value="직속상사" onclick="selectChip('chips-relation','직속상사','relation')">직속상사</button>
    <button class="chip" data-value="선배" onclick="selectChip('chips-relation','선배','relation')">선배</button>
    <button class="chip" data-value="동료" onclick="selectChip('chips-relation','동료','relation')">동료</button>
    <button class="chip" data-value="친구" onclick="selectChip('chips-relation','친구','relation')">친구</button>
    <button class="chip" data-value="지인" onclick="selectChip('chips-relation','지인','relation')">지인</button>
  </div>
</div>
<div class="input-group">
  <label>어떤 부탁인가요?</label>
  <textarea class="input-field" id="request" placeholder="예) 주말 추가 근무, 돈 빌려달라는 부탁, 행사 참여 요청..."></textarea>
</div>
<div class="input-group">
  <label>거절 이유</label>
  <div class="chip-group" id="chips-reason">
    <button class="chip" data-value="시간이 없어서" onclick="selectChip('chips-reason','시간이 없어서','reason')">시간 없음</button>
    <button class="chip" data-value="역량 밖이라서" onclick="selectChip('chips-reason','역량 밖이라서','reason')">역량 밖</button>
    <button class="chip" data-value="개인 사정이 있어서" onclick="selectChip('chips-reason','개인 사정이 있어서','reason')">개인 사정</button>
    <button class="chip" data-value="원칙상 어려워서" onclick="selectChip('chips-reason','원칙상 어려워서','reason')">원칙상</button>
  </div>
</div>
<div class="input-group">
  <label>전달 방식</label>
  <div class="chip-group" id="chips-channel">
    <button class="chip" data-value="직접 대화" onclick="selectChip('chips-channel','직접 대화','channel')">직접 대화</button>
    <button class="chip" data-value="카카오톡" onclick="selectChip('chips-channel','카카오톡','channel')">카카오톡</button>
    <button class="chip" data-value="이메일" onclick="selectChip('chips-channel','이메일','channel')">이메일</button>
  </div>
</div>
<button class="btn-generate" onclick="generateScript()">스크립트 생성하기 →</button>
`,

dating: `
<div class="form-category"><span class="form-cat-emoji">💌</span><span class="form-cat-name">소개팅 / 관계</span></div>
<p class="form-sub">마음을 전하는 게 어색할 때, AI가 자연스러운 말을 골라드려요.</p>
<div class="input-group">
  <label>상황</label>
  <div class="chip-group" id="chips-situation">
    <button class="chip" data-value="첫 메시지" onclick="selectChip('chips-situation','첫 메시지','situation')">첫 메시지</button>
    <button class="chip" data-value="2차 약속" onclick="selectChip('chips-situation','2차 약속','situation')">2차 약속</button>
    <button class="chip" data-value="고백" onclick="selectChip('chips-situation','고백','situation')">고백</button>
    <button class="chip" data-value="화해" onclick="selectChip('chips-situation','화해','situation')">화해</button>
    <button class="chip" data-value="이별 통보" onclick="selectChip('chips-situation','이별 통보','situation')">이별 통보</button>
  </div>
</div>
<div class="input-group">
  <label>상대방</label>
  <div class="chip-group" id="chips-age">
    <button class="chip" data-value="연상" onclick="selectChip('chips-age','연상','age')">연상</button>
    <button class="chip" data-value="동갑" onclick="selectChip('chips-age','동갑','age')">동갑</button>
    <button class="chip" data-value="연하" onclick="selectChip('chips-age','연하','age')">연하</button>
  </div>
</div>
<div class="input-group">
  <label>원하는 톤</label>
  <div class="chip-group" id="chips-tone">
    <button class="chip" data-value="다정하게" onclick="selectChip('chips-tone','다정하게','tone')">다정하게</button>
    <button class="chip" data-value="센스있게" onclick="selectChip('chips-tone','센스있게','tone')">센스있게</button>
    <button class="chip" data-value="진지하게" onclick="selectChip('chips-tone','진지하게','tone')">진지하게</button>
  </div>
</div>
<div class="input-group">
  <label>전하고 싶은 내용 (선택)</label>
  <textarea class="input-field" id="message" placeholder="예) 어제 정말 좋았다, 커피 마시고 싶다, 많이 좋아한다..."></textarea>
</div>
<button class="btn-generate" onclick="generateScript()">스크립트 생성하기 →</button>
`,

family: `
<div class="form-category"><span class="form-cat-emoji">👨‍👩‍👧</span><span class="form-cat-name">가족 대화</span></div>
<p class="form-sub">가족에게 꺼내기 어려운 말, 부드럽게 전달하는 법을 도와드려요.</p>
<div class="input-group">
  <label>대화 대상</label>
  <div class="chip-group" id="chips-target">
    <button class="chip" data-value="부모님" onclick="selectChip('chips-target','부모님','target')">부모님</button>
    <button class="chip" data-value="형제자매" onclick="selectChip('chips-target','형제자매','target')">형제자매</button>
    <button class="chip" data-value="배우자" onclick="selectChip('chips-target','배우자','target')">배우자</button>
    <button class="chip" data-value="조부모님" onclick="selectChip('chips-target','조부모님','target')">조부모님</button>
  </div>
</div>
<div class="input-group">
  <label>상황</label>
  <div class="chip-group" id="chips-situation">
    <button class="chip" data-value="독립 선언" onclick="selectChip('chips-situation','독립 선언','situation')">독립 선언</button>
    <button class="chip" data-value="직업·진로" onclick="selectChip('chips-situation','직업·진로','situation')">직업·진로</button>
    <button class="chip" data-value="연애·결혼" onclick="selectChip('chips-situation','연애·결혼','situation')">연애·결혼</button>
    <button class="chip" data-value="금전 문제" onclick="selectChip('chips-situation','금전 문제','situation')">금전 문제</button>
  </div>
</div>
<div class="input-group">
  <label>원하는 결과</label>
  <input class="input-field" id="outcome" placeholder="예) 이해와 동의 받기, 지원 요청, 생각만 전달..." />
</div>
<div class="input-group">
  <label>평소 관계</label>
  <div class="chip-group" id="chips-relation">
    <button class="chip" data-value="대화가 잘 되는" onclick="selectChip('chips-relation','대화가 잘 되는','relation')">대화 잘 됨</button>
    <button class="chip" data-value="평범한" onclick="selectChip('chips-relation','평범한','relation')">보통</button>
    <button class="chip" data-value="다소 어려운" onclick="selectChip('chips-relation','다소 어려운','relation')">어려움</button>
  </div>
</div>
<button class="btn-generate" onclick="generateScript()">스크립트 생성하기 →</button>
`,

complaint: `
<div class="form-category"><span class="form-cat-emoji">📋</span><span class="form-cat-name">계약 · 민원</span></div>
<p class="form-sub">권리를 주장할 때는 감정이 아닌 사실로 말하는 게 가장 효과적이에요.</p>
<div class="input-group">
  <label>상대방</label>
  <div class="chip-group" id="chips-target">
    <button class="chip" data-value="집주인/부동산" onclick="selectChip('chips-target','집주인/부동산','target')">집주인</button>
    <button class="chip" data-value="회사/고용주" onclick="selectChip('chips-target','회사/고용주','target')">회사</button>
    <button class="chip" data-value="온라인 쇼핑몰" onclick="selectChip('chips-target','온라인 쇼핑몰','target')">쇼핑몰</button>
    <button class="chip" data-value="서비스 업체" onclick="selectChip('chips-target','서비스 업체','target')">서비스</button>
  </div>
</div>
<div class="input-group">
  <label>상황</label>
  <div class="chip-group" id="chips-situation">
    <button class="chip" data-value="환불 요청" onclick="selectChip('chips-situation','환불 요청','situation')">환불</button>
    <button class="chip" data-value="수리·교환 요청" onclick="selectChip('chips-situation','수리·교환 요청','situation')">수리·교환</button>
    <button class="chip" data-value="항의·불만 제기" onclick="selectChip('chips-situation','항의·불만 제기','situation')">항의</button>
    <button class="chip" data-value="계약 해지" onclick="selectChip('chips-situation','계약 해지','situation')">계약 해지</button>
  </div>
</div>
<div class="input-group">
  <label>구체적인 상황</label>
  <textarea class="input-field" id="details" placeholder="예) 입금 후 3일 지났는데 배송 연락 없음, 이사 후 곰팡이 발견..."></textarea>
</div>
<div class="input-group">
  <label>원하는 결과</label>
  <input class="input-field" id="outcome" placeholder="예) 전액 환불, 즉시 수리, 손해배상..." />
</div>
<button class="btn-generate" onclick="generateScript()">스크립트 생성하기 →</button>
`,

work: `
<div class="form-category"><span class="form-cat-emoji">🏢</span><span class="form-cat-name">직장 대화</span></div>
<p class="form-sub">직장에서 꺼내기 어려운 말도 전략적으로 전달하면 달라져요.</p>
<div class="input-group">
  <label>대화 상대</label>
  <div class="chip-group" id="chips-target">
    <button class="chip" data-value="직속상사" onclick="selectChip('chips-target','직속상사','target')">직속상사</button>
    <button class="chip" data-value="팀장/부장" onclick="selectChip('chips-target','팀장/부장','target')">팀장/부장</button>
    <button class="chip" data-value="임원" onclick="selectChip('chips-target','임원','target')">임원</button>
    <button class="chip" data-value="동료" onclick="selectChip('chips-target','동료','target')">동료</button>
  </div>
</div>
<div class="input-group">
  <label>상황</label>
  <div class="chip-group" id="chips-situation">
    <button class="chip" data-value="업무 과부하" onclick="selectChip('chips-situation','업무 과부하','situation')">업무 과부하</button>
    <button class="chip" data-value="부당한 지시" onclick="selectChip('chips-situation','부당한 지시','situation')">부당한 지시</button>
    <button class="chip" data-value="동료와의 갈등" onclick="selectChip('chips-situation','동료와의 갈등','situation')">동료 갈등</button>
    <button class="chip" data-value="퇴사 통보" onclick="selectChip('chips-situation','퇴사 통보','situation')">퇴사 통보</button>
  </div>
</div>
<div class="input-group">
  <label>구체적인 상황</label>
  <textarea class="input-field" id="details" placeholder="예) 매주 주말 근무 요구, 내 몫이 아닌 업무를 계속 떠넘김..."></textarea>
</div>
<div class="input-group">
  <label>원하는 분위기</label>
  <div class="chip-group" id="chips-tone">
    <button class="chip" data-value="정중하게" onclick="selectChip('chips-tone','정중하게','tone')">정중하게</button>
    <button class="chip" data-value="단호하게" onclick="selectChip('chips-tone','단호하게','tone')">단호하게</button>
    <button class="chip" data-value="협력적으로" onclick="selectChip('chips-tone','협력적으로','tone')">협력적으로</button>
  </div>
</div>
<button class="btn-generate" onclick="generateScript()">스크립트 생성하기 →</button>
`

};

// Cloudflare Worker URL — worker.js 배포 후 여기에 입력
const WORKER_URL = 'https://satd.rkdalwjd080522.workers.dev';

async function buildScripts(cat, d) {
  if (WORKER_URL) {
    try {
      const res = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cat, formData: d })
      });
      if (res.ok) {
        const scripts = await res.json();
        if (Array.isArray(scripts) && scripts.length === 3) return scripts;
      }
    } catch (e) {
      console.warn('Worker 호출 실패, 템플릿으로 대체:', e);
    }
  }
  return BUILDERS[cat](d);
}

const BUILDERS = {

  salary(d) {
    const cur = d.current && d.current.trim() ? d.current.trim() : null;
    const tgt = d.target && d.target.trim() ? d.target.trim() : null;
    const ach = d.achievement && d.achievement.trim() ? d.achievement.trim() : null;
    const achLine = ach ? ach + ' 등의 성과를 바탕으로, ' : '';
    const amountA = cur && tgt ? cur + '에서 ' + tgt + '으로 조정' : tgt ? tgt + '으로 연봉 조정' : '연봉 조정';
    const amountC = cur && tgt ? ' ' + cur + ' → ' + tgt + '.' : tgt ? ' ' + tgt + '으로요.' : '';

    return [
      {
        text: _pick([
          '안녕하세요. 연봉 관련해서 말씀드릴 게 있어 연락드렸어요.\n\n' + achLine + amountA + '을 검토해주실 수 있을까요? 시간 내주시면 자료도 준비해 말씀드리겠습니다.',
          '처우 관련해서 솔직하게 말씀드리고 싶어 연락드렸어요.\n\n' + achLine + amountA + '을 요청드립니다. 근거 자료도 준비했습니다.'
        ]),
        tip: '숫자 근거 1~2개만 간결하게 제시하세요. 많으면 오히려 설득력이 약해집니다.'
      },
      {
        text: _pick([
          '잠깐 말씀드려도 될까요? 더 잘하고 싶은 마음에 솔직하게 여쭤보는 거예요.\n\n' + (ach ? ach + ' 같은 결과를 냈는데, 이런 방향으로 계속 하려면 처우 부분도 맞춰지면 좋겠다 싶었어요. ' : '') + (tgt ? tgt + ' 정도로 조정이 가능할지' : '연봉 조정이 가능할지') + ' 여쭤봐도 될까요?',
          '솔직히 말씀드릴게요. 팀에 더 기여하고 싶은 마음이 큰데, 처우가 그에 맞게 올라가면 훨씬 동기부여가 될 것 같아서요.\n\n' + (tgt ? tgt + '으로 조정' : '연봉 조정') + ' 검토해주실 수 있을까요? 어떻게 생각하세요?'
        ]),
        tip: '상사가 "얼마 생각하냐"고 물으면 주저 말고 숫자를 바로 말하세요. 침묵은 자신감입니다.'
      },
      {
        text: _pick([
          '연봉 조정 요청드립니다.' + amountC + ' 근거 자료 준비했어요.',
          (tgt ? tgt + '으로 연봉 조정 검토' : '연봉 조정 검토') + ' 부탁드립니다. 미팅 잡아주시면 설명드릴게요.'
        ]),
        tip: '짧게 말할수록 협상력이 높아 보입니다. 먼저 상대 반응을 기다리세요.'
      }
    ];
  },

  reject(d) {
    const rel = d.relation || '';
    const req = d.request && d.request.trim() ? d.request.trim() : null;
    const rsn = d.reason && d.reason.trim() ? d.reason.trim() : '개인 사정이 있어서';
    const isFormal = rel === '직속상사' || rel === '선배';
    const addr = rel ? (isFormal ? rel + '님' : rel) : '';
    const addrComma = addr ? addr + ', ' : '';
    const reqRef = req ? '"' + req + '" 건, ' : '부탁하신 것, ';
    const reqMid = req ? req + '은 ' : '부탁하신 건 ';

    return [
      {
        text: _pick([
          addrComma + reqRef + '정말 도움드리고 싶은데요. ' + rsn + ' 이번에는 어렵겠습니다. 양해 부탁드려요.',
          addrComma + '솔직하게 말씀드릴게요. ' + reqMid + '함께하고 싶지만 ' + rsn + ' 이번엔 어렵겠어요. 죄송합니다.'
        ]),
        tip: '거절 후 작은 대안을 제시하면 관계가 부드럽게 유지돼요. 예: "대신 이건 제가 할 수 있어요."'
      },
      {
        text: _pick([
          addrComma + (req ? '"' + req + '" 말이죠? ' : '') + '저도 같이하고 싶은데, ' + rsn + ' 정말 어렵네요 ㅠ 다른 방법이 있다면 말씀해 주세요!',
          addrComma + '도움드리고 싶은데 솔직히 ' + rsn + ' 어렵네요. ' + (req ? '"' + req + '"은 ' : '이번엔 ') + '다른 방법을 찾아봐야 할 것 같아요.'
        ]),
        tip: '부드럽게 말해도 "안 된다"는 의사는 분명히 전달하세요. 모호하면 재요청이 옵니다.'
      },
      {
        text: _pick([
          '이번엔 어려울 것 같아요. ' + rsn + '.',
          '죄송한데 이번엔 못할 것 같아요. ' + rsn + '.'
        ]),
        tip: '짧은 거절이 오히려 더 명확해요. 긴 설명은 반박의 여지를 줍니다.'
      }
    ];
  },

  dating(d) {
    const sit = d.situation || '첫 메시지';
    const msg = d.message && d.message.trim() ? d.message.trim() : null;

    const scripts = {
      '첫 메시지': {
        A: ['안녕하세요 :) ' + (msg || '오늘 자리 즐거웠어요') + '. 더 얘기하고 싶어서요, 시간 되시면 커피 한 잔 하실 수 있을까요?',
            '안녕하세요! ' + (msg || '오늘 만나서 반가웠어요') + '. 짧은 시간이었는데 더 얘기하고 싶더라고요. 다시 만나요 :)'],
        B: ['안녕하세요~ ' + (msg || '오늘 정말 즐거웠어요') + ' :) 얘기 나누다 시간이 너무 빨리 갔죠? 조만간 또 볼 수 있을까요?',
            '안녕! ' + (msg || '오늘 만나서 진짜 좋았어요') + '. 다음엔 좀 더 여유롭게 얘기해요 :)'],
        C: [(msg || '오늘 재밌었어요') + '. 커피 한 잔 해요.',
            '안녕하세요, 잘 들어가셨나요? ' + (msg ? msg + '.' : '다음에 또 봐요.')],
        tip: '첫 메시지는 질문으로 끝내야 답장 확률이 올라가요.'
      },
      '2차 약속': {
        A: ['안녕하세요 :) ' + (msg || '지난번에 즐거웠는데') + ', 다음 주에 시간 괜찮으시면 한번 더 만나고 싶어요. 좋아하시는 음식 있으세요?',
            '안녕하세요! 다음 주말 시간 어떠세요? ' + (msg || '지난번에 말씀하신 곳 가봐도 좋을 것 같아서요') + ' :)'],
        B: [(msg || '지난번에 정말 재밌었는데') + ' 또 만나고 싶어요~ 이번엔 어디 가고 싶으세요?',
            '혹시 이번 주말 어때요? ' + (msg || '지난번에 얘기 나누다 끊긴 거 마저 하고 싶어서요') + ' ㅎㅎ'],
        C: [(msg ? msg + '. ' : '') + '이번 주말에 만날래요?',
            '다음에 밥 먹어요. ' + (msg || '시간 돼요?')],
        tip: '구체적인 요일/장소를 제안하면 상대가 결정하기 훨씬 쉬워요.'
      },
      '고백': {
        A: ['솔직하게 말하고 싶어서요. ' + (msg || '만나면 만날수록 더 좋아지더라고요') + '. 저와 사귀어주실 수 있을까요?',
            '드릴 말씀이 있는데요. ' + (msg || '함께 있을 때 정말 편하고 즐거워요') + '. 좋아합니다. 사귀어주시겠어요?'],
        B: [(msg || '나 당신 많이 좋아해요') + ' ㅋㅋ 어떻게 생각하세요?',
            '이거 말하면 어색해질까 봐 고민했는데 그냥 말할게요. ' + (msg || '많이 좋아해요') + '. 사귀어요 :)'],
        C: [(msg || '좋아해요') + '. 사귀어요.',
            '나 좋아해요. ' + (msg || '사귀어요.')],
        tip: '고백은 짧고 명확할수록 좋아요. 장황하면 긴장감이 떨어집니다.'
      },
      '화해': {
        A: ['지난번에 제가 잘못한 부분이 있었던 것 같아요. ' + (msg || '그때 내 말이 상처가 됐다면 정말 미안해요') + '. 다시 잘 지낼 수 있을까요?',
            '솔직히 말하면 우리 사이가 어색한 게 계속 마음에 걸렸어요. ' + (msg || '먼저 사과하고 싶고, 다시 예전처럼 지냈으면 해요') + '.'],
        B: ['우리 이러지 말아요 ㅠ ' + (msg || '제가 잘못한 부분 있으면 얘기해줘요') + '. 다시 잘 지내고 싶어요 :(',
            (msg || '나 요즘 신경 많이 쓰였어') + '. 우리 한번 얘기하자. 오해 있으면 풀고 싶어.'],
        C: ['미안해. ' + (msg || '다시 잘 지내자') + '.',
            (msg || '내가 잘못했어') + '. 화해하자.'],
        tip: '화해할 때는 상대 감정을 먼저 인정하면 대화가 훨씬 부드럽게 풀려요.'
      },
      '이별 통보': {
        A: ['솔직하게 말씀드릴게요. 오래 생각했는데, ' + (msg || '이 관계를 더 이어가기 어려울 것 같아요') + '. 상처드리는 것 같아 마음이 무겁지만, 솔직하게 말씀드리는 게 맞다고 생각했어요.',
            '드릴 말씀이 있어요. ' + (msg || '우리 사이를 정리하고 싶어요') + '. 계속 끌면 서로에게 더 힘들 것 같아서요.'],
        B: ['이 말 꺼내기 정말 어려웠는데요 ㅠ ' + (msg || '우리 이제 각자의 길을 가는 게 좋을 것 같아요') + '. 함께한 시간은 소중했어요.',
            '말하기 힘들지만 솔직하게 얘기할게요. ' + (msg || '이 관계를 더 이어가기 어려울 것 같아요') + '. 당신은 정말 좋은 사람이에요.'],
        C: [(msg || '헤어지자') + '. 오래 생각했어.',
            '우리 그만 만나자. ' + (msg || '미안해') + '.'],
        tip: '이별 이유를 길게 설명할수록 상대에게 더 힘들어요. 명확하고 단호하게 전달하세요.'
      }
    };

    const key = scripts[sit] ? sit : '첫 메시지';
    const s = scripts[key];
    return [
      { text: _pick(s.A), tip: s.tip },
      { text: _pick(s.B), tip: '이모지 1-2개는 텍스트를 따뜻하게 만들지만, 너무 많으면 가볍게 보일 수 있어요.' },
      { text: _pick(s.C), tip: '짧은 메시지가 부담 없이 읽혀요. 특히 처음이나 어색할 때 효과적이에요.' }
    ];
  },

  family(d) {
    const tgt = d.target || '가족';
    const sit = d.situation || null;
    const outcome = d.outcome && d.outcome.trim() ? d.outcome.trim() : null;
    const isHard = d.relation === '다소 어려운';
    const sitRef = sit ? sit + ' 관련해서' : '드릴 말씀이 있어서';
    const outcomeWant = outcome ? outcome + '을 바라고 있어요' : '제 솔직한 마음을 전하고 싶어요';

    return [
      {
        text: _pick([
          tgt + '께 잠깐 말씀드려도 될까요? ' + sitRef + ' 오래 생각해왔는데 솔직하게 전해드리고 싶어서요.\n\n' + tgt + ' 마음 잘 알고 그게 감사해요. 그런데 ' + outcomeWant + '. 들어봐주실 수 있으신가요?',
          tgt + '께 드릴 이야기가 있는데, 잠깐 시간 내주실 수 있어요?\n\n' + sitRef + ' 고민이 많았어요. ' + tgt + ' 의견도 듣고 싶고, 제 생각도 솔직하게 말씀드리고 싶었어요.'
        ]),
        tip: isHard ? '평소 대화가 어려웠다면, 먼저 감사함을 짧게 표현하면 분위기가 달라져요.' : '중요한 대화는 식사 자리나 편안한 상황에서 꺼내는 게 효과적이에요.'
      },
      {
        text: _pick([
          tgt + ', 할 얘기가 있어요. 무거운 얘기 아니고, 솔직하게 말씀드리고 싶어서요.\n\n' + sitRef + ' 제 생각을 전하고 싶은데, 어떻게 생각하세요?',
          tgt + ', ' + (sit ? sit + ' 때문에 ' : '') + '요즘 계속 생각이 많았어요. 제 솔직한 마음 말씀드려도 될까요? 비판보다는 일단 들어봐 주시면 좋겠어요.'
        ]),
        tip: '감정이 격해지기 전에 대화를 시작하세요. "화났다"가 아니라 "힘들었다"로 표현하면 방어적인 반응이 줄어요.'
      },
      {
        text: _pick([
          tgt + ', ' + (sit ? sit + ' 얘기' : '할 얘기') + ' 해도 돼요? ' + (outcome ? outcome + '이에요.' : '제 생각 전달하고 싶어서요.'),
          tgt + ' 잠깐 얘기해요. ' + (sit ? sit + ' 관련해서 ' : '') + '제 생각 말해도 될까요?'
        ]),
        tip: '가족 대화는 한 번에 다 해결하려 하지 마세요. 씨앗을 심는 첫 대화라고 생각하면 훨씬 가벼워져요.'
      }
    ];
  },

  complaint(d) {
    const sit = d.situation || null;
    const det = d.details && d.details.trim() ? d.details.trim() : null;
    const out = d.outcome && d.outcome.trim() ? d.outcome.trim() : null;
    const sitStr = sit || '문제';
    const detStr = det || '해당 상황이 발생했습니다';
    const outStr = out || '적절한 처리';

    return [
      {
        text: _pick([
          sitStr + ' 건으로 연락드립니다.\n\n' + detStr + '. 이에 대해 ' + outStr + '을 요청드립니다. 소비자 보호 규정상 정당한 요구이며, 빠른 시일 내 담당자 확인 및 처리 결과 연락 부탁드립니다.',
          '안녕하세요. ' + sitStr + ' 관련하여 연락드립니다.\n\n' + detStr + '. ' + outStr + '을 요청드리며, 이는 관련 규정에 따른 정당한 권리입니다. 빠른 회신 부탁드립니다.'
        ]),
        tip: '날짜, 주문번호, 영수증 등 증거를 먼저 챙기세요. 감정 없이 사실만 나열하는 게 가장 강합니다.'
      },
      {
        text: _pick([
          '안녕하세요. ' + sitStr + ' 관련해서 문의드려요.\n\n' + detStr + '. 솔직히 좀 당황스럽더라고요. ' + outStr + '이 가능한지 확인해주실 수 있을까요? 빠른 처리 부탁드립니다.',
          '안녕하세요. ' + detStr + '. 이 상황에서 ' + outStr + ' 방법이 있는지 여쭤보고 싶어요. 어떻게 해야 할까요?'
        ]),
        tip: '첫 연락은 부드럽게 시작해도 돼요. 해결이 안 될 때 단호하게 에스컬레이션하면 됩니다.'
      },
      {
        text: _pick([
          sitStr + ' 건 연락드립니다. ' + detStr + '. ' + outStr + ' 처리 부탁드립니다.',
          outStr + ' 요청드립니다. ' + detStr + '. 빠른 처리 부탁드려요.'
        ]),
        tip: '채팅·카카오 문의는 짧고 명확할수록 처리가 빨라요.'
      }
    ];
  },

  work(d) {
    const tgt = d.target || null;
    const sit = d.situation || null;
    const det = d.details && d.details.trim() ? d.details.trim() : null;
    const isQuit = d.situation === '퇴사 통보';
    const tgtAddr = tgt ? tgt + '님' : '안녕하세요';
    const sitStr = sit && sit !== '퇴사 통보' ? sit : '업무 관련 사항';
    const detStr = det || '현재 상황이 계속되고 있어요';

    if (isQuit) {
      return [
        {
          text: _pick([
            tgtAddr + ', 드릴 말씀이 있어요. 개인적인 사유로 퇴사를 결심하게 됐습니다.\n\n그동안 많이 배우고 성장할 수 있었습니다. 인수인계 일정은 말씀해 주시는 대로 최대한 협조하겠습니다.',
            tgtAddr + ', 신중하게 고민한 끝에 퇴사를 결정하게 됐습니다. 그동안 감사했습니다. 마무리까지 최선을 다하겠습니다.'
          ]),
          tip: '퇴사 이유는 "개인 사정" 또는 "커리어 방향"으로 짧게 말하세요. 구체적인 불만은 말하지 않는 게 좋아요.'
        },
        {
          text: _pick([
            tgtAddr + ', 말씀드리기 어렵지만 솔직하게 전해드리고 싶어서요. 다음 단계를 고민하다 퇴사를 결심하게 됐어요 ㅠ\n\n그동안 정말 감사했습니다. 인수인계는 최대한 깔끔하게 마무리할게요.',
            tgtAddr + ', 오래 고민했는데... 퇴사하려 해요. 서운하게 해드리는 것 같아 마음이 무겁지만 솔직하게 말씀드리는 게 맞는 것 같았어요. 감사했습니다.'
          ]),
          tip: '상사와 관계가 좋다면 먼저 구두로 말씀드린 후 공식 서면을 제출하는 게 예의 있어요.'
        },
        {
          text: _pick([
            '퇴사 의사 전달드립니다. 개인 사정으로 결정했습니다. 인수인계 협조하겠습니다.',
            '퇴사 통보드립니다. 마지막 날은 논의 후 조율 가능합니다.'
          ]),
          tip: '서면(이메일)으로 남기면 추후 분쟁을 예방할 수 있어요.'
        }
      ];
    }

    return [
      {
        text: _pick([
          tgtAddr + ', 잠깐 말씀드려도 될까요? ' + sitStr + ' 관련해서 솔직하게 여쭤보고 싶어서요.\n\n' + detStr + '. 업무 효율에 영향이 생길 것 같아 걱정됩니다. 어떻게 조율하면 좋을지 말씀해 주시면 최선을 다하겠습니다.',
          tgtAddr + ', 한 가지 말씀드려도 될까요? ' + sitStr + ' 관련해서 제 의견을 드려도 될까요?\n\n' + detStr + '. 팀 전체를 위해서도 한번 짚고 넘어가면 좋을 것 같아서요.'
        ]),
        tip: '문제를 제기할 때는 "저 힘들어요"보다 "업무 효율에 영향이 생길 것 같아요"로 표현하면 훨씬 설득력이 높아요.'
      },
      {
        text: _pick([
          tgtAddr + ', 말씀드릴 게 있는데요. ' + detStr + '. 솔직히 좀 어렵더라고요. 어떻게 하면 좋을까요? 같이 방법 찾아봐도 될까요?',
          tgtAddr + ', 솔직히 말씀드려도 될까요? 요즘 ' + sitStr + ' 때문에 좀 힘든데, 어떻게 해결하면 좋을지 몰라서요. 조언 주실 수 있어요?'
        ]),
        tip: '해결책을 묻는 방식으로 접근하면, 일방적인 민원이 아니라 협업 요청처럼 들려요.'
      },
      {
        text: _pick([
          tgtAddr + ', ' + sitStr + ' 건으로 말씀드립니다. ' + detStr + '. 조율 부탁드립니다.',
          sitStr + ' 관련 논의 요청드립니다. ' + detStr + '. 빠른 조율 부탁드려요.'
        ]),
        tip: '짧고 명확한 메시지는 진지하게 받아들여질 가능성이 높아요. 감정적인 표현은 빼세요.'
      }
    ];
  }

};
