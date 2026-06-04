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

function buildScripts(cat, d) {
  return BUILDERS[cat](d);
}

const BUILDERS = {

  salary(d) {
    const cur = _p(d.current, '현재 연봉');
    const tgt = _p(d.target, '희망 연봉');
    const ach = _p(d.achievement, '그동안의 성과와 기여');
    const ten = _p(d.tenure, '재직 기간');
    return [
      {
        text: _pick([
          ten + ' 동안 맡아온 업무와 성과에 대해 처우 조정을 요청드리고자 합니다.\n\n' + ach + ' 등의 성과를 바탕으로, 현재 ' + cur + '에서 ' + tgt + '으로 조정을 검토해주실 수 있을까요? 시간 내주시면 구체적인 자료와 함께 말씀드리겠습니다.',
          '안녕하세요. 제 기여도와 역할에 대해 솔직하게 말씀드리고 싶어서요.\n\n' + ach + '를 통해 팀에 의미 있는 기여를 해왔다고 생각합니다. 연봉을 ' + tgt + '으로 조정해주시면 감사하겠습니다. 근거 자료도 준비했습니다.'
        ]),
        tip: '숫자 근거 1~2개만 간결하게 제시하세요. 많으면 오히려 설득력이 약해집니다.'
      },
      {
        text: _pick([
          '과장님, 잠깐 말씀드려도 될까요? 저도 더 기여하면서 성장하고 싶어서 여쭤보는 거예요.\n\n' + ach + ' 부분에서 좋은 결과가 있었는데요, 이런 방향으로 계속 노력하려면 처우 부분도 함께 맞춰지면 좋겠다 싶었어요. ' + tgt + ' 정도로 조정이 가능한지 여쭤봐도 될까요?',
          '앞으로도 팀에서 더 잘하고 싶은 마음에 말씀드리는 거예요.\n\n' + ach + '처럼 의미 있는 일들을 이어가려면 동기부여도 중요하더라고요. 혹시 ' + tgt + ' 수준으로 연봉 조정을 검토해주실 수 있을까요?'
        ]),
        tip: '상사가 "얼마 생각하냐"고 물으면 주저 말고 숫자를 바로 말하세요. 침묵은 자신감입니다.'
      },
      {
        text: _pick([
          '연봉 조정 요청드립니다. 현재 ' + cur + '에서 ' + tgt + '으로 올려주실 수 있을까요? 근거 자료 준비했습니다.',
          '처우 관련해서 말씀드리고 싶은데요. ' + tgt + '으로 연봉 조정 검토 부탁드립니다. 짧게 미팅 잡아주실 수 있나요?'
        ]),
        tip: '짧게 말할수록 협상력이 높아 보입니다. 먼저 상대 반응을 기다리세요.'
      }
    ];
  },

  reject(d) {
    const rel = _p(d.relation, '상대방');
    const req = _p(d.request, '부탁하신 일');
    const rsn = _p(d.reason, '개인 사정이 있어서');
    const isFormal = d.relation === '직속상사' || d.relation === '선배';
    const addr = isFormal ? rel + '님' : rel;
    return [
      {
        text: _pick([
          addr + ', 말씀 감사한데요. ' + req + '는 정말 도움드리고 싶지만 ' + rsn + ' 이번에는 어렵겠습니다. 양해 부탁드려요.',
          addr + ', 솔직하게 말씀드려도 될까요? ' + req + ' 건인데, 제가 ' + rsn + ' 이번엔 함께하기가 어렵겠습니다. 죄송해요.'
        ]),
        tip: '거절 후 작은 대안을 제시하면 관계가 부드럽게 유지돼요. 예: "대신 이건 제가 할 수 있어요."'
      },
      {
        text: _pick([
          addr + '~, ' + req + ' 말이죠? 저도 같이하고 싶은데, 지금 ' + rsn + ' 정말 어렵네요 ㅠ 다른 방법이 있다면 말씀해 주세요!',
          '아 ' + req + '요! 도움드리고 싶은데 ' + rsn + ' 어렵네요. 다른 분은 어떠세요? 아니면 다른 식으로 도울 수 있는 게 있는지 생각해볼게요.'
        ]),
        tip: '부드럽게 말해도 "안 된다"는 의사는 분명히 전달하세요. 모호하면 재요청이 옵니다.'
      },
      {
        text: _pick([
          '이번엔 어려울 것 같아요. ' + rsn + '.',
          '죄송한데 ' + req + '는 못할 것 같아요. ' + rsn + '.'
        ]),
        tip: '짧은 거절이 오히려 더 명확해요. 긴 설명은 반박의 여지를 줍니다.'
      }
    ];
  },

  dating(d) {
    const sit = _p(d.situation, '첫 메시지');
    const msg = _p(d.message, '');
    const extra = msg ? '\n\n' + msg : '';

    const scripts = {
      '첫 메시지': [
        ['안녕하세요 :) 오늘 자리 즐거웠습니다. 더 얘기하고 싶어서요, 시간 되시면 커피 한 잔 하실 수 있을까요?' + extra,
         '안녕하세요! 오늘 만나서 반가웠어요. 짧은 시간이었는데 더 얘기하고 싶더라고요. 다시 만나요 :)' + extra],
        ['안녕하세요~ 오늘 정말 즐거웠어요 :) 얘기 나누다 시간이 너무 빨리 갔죠? 조만간 또 볼 수 있을까요?' + extra,
         '안녕! 오늘 만나서 진짜 좋았어요. 다음엔 좀 더 여유롭게 얘기해요 :)' + extra],
        ['안녕하세요, 오늘 잘 들어가셨나요? 다음에 또 봐요.' + extra,
         '오늘 재밌었어요. 커피 한 잔 해요.' + extra]
      ],
      '2차 약속': [
        ['안녕하세요 :) 지난번에 즐거웠는데, 다음 주에 시간 괜찮으시면 한번 더 만나고 싶어요. 좋아하시는 음식 있으세요?' + extra,
         '안녕하세요! 다음 주말 시간 어떠세요? 지난번에 말씀하신 곳 가봐도 좋을 것 같아서요 :)' + extra],
        ['안녕하세요~ 지난번에 정말 재밌었는데 또 만나고 싶어요. 이번엔 어디 가고 싶으세요?' + extra,
         '혹시 이번 주말 어때요? 지난번에 얘기 나누다 끊긴 거 마저 하고 싶어서요 ㅎㅎ' + extra],
        ['이번 주말에 만날래요?' + extra,
         '다음에 밥 먹어요. 시간 돼요?' + extra]
      ],
      '고백': [
        ['솔직하게 말하고 싶어서요. 만나면 만날수록 더 좋아지더라고요. 저와 사귀어주실 수 있을까요?' + extra,
         '드릴 말씀이 있는데요. 함께 있을 때 정말 편하고 즐거워서, 좋아한다고 말씀드리고 싶었어요. 사귀어주시겠어요?' + extra],
        ['사실 오래 말하고 싶었는데요ㅋㅋ 나 많이 좋아하거든요. 어떻게 생각하세요?' + extra,
         '이거 말하면 어색해질까 봐 고민했는데 그냥 말할게요. 많이 좋아해요. 사귀어요 :)' + extra],
        ['좋아해요. 사귀어요.' + extra,
         '나 당신 좋아해요.' + extra]
      ],
      '화해': [
        ['지난번에 제가 잘못한 부분이 있었던 것 같아요. 그때 제 말이 상처가 됐다면 정말 미안해요. 다시 잘 지낼 수 있을까요?' + extra,
         '솔직히 말하면 우리 사이가 어색한 게 계속 마음에 걸렸어요. 먼저 사과하고 싶고, 다시 예전처럼 지냈으면 해요.' + extra],
        ['우리 이러지 말아요 ㅠ 제가 잘못한 부분 있으면 얘기해줘요. 다시 잘 지내고 싶어요 :(' + extra,
         '나 요즘 신경 많이 쓰였어. 우리 한번 얘기하자. 오해가 있었다면 풀고 싶어.' + extra],
        ['미안해. 다시 잘 지내자.' + extra,
         '내가 잘못했어. 화해하자.' + extra]
      ],
      '이별 통보': [
        ['솔직하게 말씀드릴게요. 오래 생각했는데, 저는 이 관계를 지속하기 어려울 것 같아요. 상처드리는 것 같아 마음이 무겁지만, 솔직하게 말씀드리는 게 맞다고 생각했어요.',
         '드릴 말씀이 있어요. 우리 사이를 정리하고 싶어요. 계속 끌면 서로에게 더 힘들 것 같아서요.'],
        ['이 말 꺼내기 정말 어려웠는데요 ㅠ 우리 이제 각자의 길을 가는 게 좋을 것 같아요. 함께한 시간은 소중했어요.',
         '말하기 힘들지만 솔직하게 얘기할게요. 이 관계를 더 이어가기 어려울 것 같아요. 당신은 정말 좋은 사람이에요.'],
        ['헤어지자. 오래 생각했어.',
         '우리 그만 만나자. 미안해.']
      ]
    };

    const key = scripts[sit] ? sit : '첫 메시지';
    const vars = scripts[key];
    const tips = {
      '첫 메시지': '첫 메시지는 질문으로 끝내야 답장 확률이 올라가요.',
      '2차 약속': '구체적인 요일/장소를 제안하면 상대가 결정하기 훨씬 쉬워요.',
      '고백': '고백은 짧고 명확할수록 좋아요. 장황하면 긴장감이 떨어집니다.',
      '화해': '화해할 때는 상대 감정을 먼저 인정하면 대화가 훨씬 부드럽게 풀려요.',
      '이별 통보': '이별 이유를 길게 설명할수록 상대에게 더 힘들어요. 명확하고 단호하게 전달하세요.'
    };

    return [
      { text: _pick(vars[0]), tip: tips[key] },
      { text: _pick(vars[1]), tip: '이모지 1-2개는 텍스트를 따뜻하게 만들지만, 너무 많으면 가볍게 보일 수 있어요.' },
      { text: _pick(vars[2]), tip: '짧은 메시지가 부담 없이 읽혀요. 특히 처음이나 어색할 때 효과적이에요.' }
    ];
  },

  family(d) {
    const tgt = _p(d.target, '가족');
    const sit = _p(d.situation, '고민');
    const outcome = _p(d.outcome, '이해해주셨으면 해요');
    const isHard = d.relation === '다소 어려운';
    const isParent = d.target === '부모님' || d.target === '조부모님';
    return [
      {
        text: _pick([
          tgt + '께 드릴 말씀이 있어요. ' + sit + '에 대해 오래 생각해왔는데, 솔직하게 말씀드리고 싶어서요.\n\n' + tgt + ' 걱정 잘 알고, 그 마음이 감사해요. 그런데 지금 저에게는 ' + outcome + '이 필요한 것 같아요. 한번 들어봐주실 수 있으신가요?',
          tgt + '께 드릴 이야기가 있는데요, 잠깐 시간 내주실 수 있어요?\n\n' + sit + ' 문제로 오래 고민했는데, ' + tgt + ' 의견도 듣고 싶고 제 생각도 솔직하게 말씀드리고 싶었어요.'
        ]),
        tip: isHard ? '평소 대화가 어려웠다면, 먼저 감사함을 짧게 표현하면 분위기가 달라져요.' : '중요한 대화는 식사 자리나 편안한 상황에서 꺼내는 게 효과적이에요.'
      },
      {
        text: _pick([
          tgt + ', 저 할 얘기가 있어요. 무거운 얘기는 아니고, 그냥 솔직하게 말씀드리고 싶어서요.\n\n' + sit + ' 관련해서요, ' + outcome + '고 싶은 게 있는데. 어떻게 생각하세요?',
          tgt + ', 요즘 ' + sit + ' 때문에 계속 생각이 많았어요. 제 솔직한 마음을 말씀드려도 될까요? 비판보다는 일단 들어봐 주시면 좋겠어요.'
        ]),
        tip: '감정이 격해지기 전에 대화를 시작하세요. "화났다"가 아니라 "힘들었다"로 표현하면 방어적인 반응이 줄어요.'
      },
      {
        text: _pick([
          tgt + ', ' + sit + ' 얘기 해도 돼요? ' + outcome + '이에요.',
          tgt + ' 잠깐 얘기해요. ' + sit + ' 관련해서 제 생각 말해도 될까요?'
        ]),
        tip: '가족 대화는 한 번에 다 해결하려 하지 마세요. 씨앗을 심는 첫 대화라고 생각하면 훨씬 가벼워져요.'
      }
    ];
  },

  complaint(d) {
    const tgt = _p(d.target, '담당자');
    const sit = _p(d.situation, '관련 문제');
    const det = _p(d.details, '해당 상황');
    const out = _p(d.outcome, '적절한 해결');
    return [
      {
        text: _pick([
          sit + ' 건으로 연락드립니다.\n\n' + det + ' 상황이 발생했으며, 이에 대해 ' + out + '을 요청드립니다. 소비자 보호 관련 규정에 따라 정당한 권리임을 알고 있습니다.\n\n빠른 시일 내 담당자 확인 및 처리 결과 연락 부탁드립니다.',
          tgt + ' 담당자님께.\n\n' + det + ' 문제가 발생하여 연락드립니다. ' + sit + ' 관련하여 ' + out + '을 요청드리며, 이는 관련 법령에 따른 정당한 요구입니다. 빠른 회신 부탁드립니다.'
        ]),
        tip: '날짜, 주문번호, 영수증 등 증거를 먼저 챙기세요. 감정 표현 없이 사실만 나열하는 게 가장 강합니다.'
      },
      {
        text: _pick([
          '안녕하세요. ' + sit + ' 관련해서 문의드려요.\n\n' + det + ' 상황인데요, 솔직히 좀 당황스럽더라고요. ' + out + '이 가능한지 확인해주실 수 있을까요? 빠른 처리 부탁드립니다.',
          '안녕하세요. ' + det + ' 상황 때문에 연락드렸어요. ' + out + ' 방법이 있는지 여쭤보고 싶은데요, 어떻게 해야 할까요?'
        ]),
        tip: '첫 연락은 부드럽게 시작해도 돼요. 해결이 안 될 때 단호하게 에스컬레이션하면 됩니다.'
      },
      {
        text: _pick([
          sit + ' 건으로 연락드립니다. ' + det + ' 상황입니다. ' + out + ' 처리 부탁드립니다.',
          out + ' 요청드립니다. ' + det + '. 빠른 처리 부탁드려요.'
        ]),
        tip: '채팅·카카오 문의는 짧고 명확할수록 처리가 빨라요.'
      }
    ];
  },

  work(d) {
    const tgt = _p(d.target, '상사');
    const sit = _p(d.situation, '업무 상황');
    const det = _p(d.details, '현재 상황');
    const isQuit = d.situation === '퇴사 통보';

    if (isQuit) {
      return [
        {
          text: _pick([
            tgt + '님, 드릴 말씀이 있어요. 개인적인 사유로 퇴사를 결심하게 됐습니다.\n\n그동안 많은 것을 배우고 성장할 수 있었습니다. 인수인계 일정과 방법에 대해서는 말씀해 주시는 대로 최대한 협조하겠습니다.',
            tgt + '님, 신중하게 고민한 끝에 퇴사를 결정하게 됐습니다. 그동안 감사했습니다. 마무리 잘 할 수 있도록 도와드리겠습니다.'
          ]),
          tip: '퇴사 이유는 "개인 사정" 또는 "커리어 방향"으로 짧게 말하세요. 구체적인 불만은 말하지 않는 게 좋아요.'
        },
        {
          text: _pick([
            tgt + '님, 말씀드리기 어렵지만 솔직하게 전해드리고 싶어서요. 다음 단계를 고민하다 퇴사를 결심하게 됐어요 ㅠ\n\n그동안 정말 많이 배웠고 감사했습니다. 인수인계는 최대한 깔끔하게 마무리할게요.',
            tgt + '님, 오래 고민했는데... 퇴사하려 해요. 서운하게 해드리는 것 같아 마음이 무겁지만, 솔직하게 말씀드리는 게 맞는 것 같았어요. 감사했습니다.'
          ]),
          tip: '상사와 관계가 좋다면 먼저 구두로 말씀드린 후 공식 서면을 제출하는 게 예의 있어요.'
        },
        {
          text: _pick([
            '퇴사 의사 전달드립니다. 개인 사정으로 결정하게 됐습니다. 인수인계 협조하겠습니다.',
            '퇴사 통보드립니다. 마지막 날은 논의 후 조율 가능합니다.'
          ]),
          tip: '서면(이메일)으로 남기면 추후 분쟁을 예방할 수 있어요.'
        }
      ];
    }

    return [
      {
        text: _pick([
          tgt + '님, 잠깐 말씀드려도 될까요? ' + sit + ' 관련해서 솔직하게 여쭤보고 싶어서요.\n\n현재 ' + det + ' 상황이라 업무 효율과 품질에 영향이 생길 것 같아 걱정됩니다. 어떻게 조율하면 좋을지 말씀해 주시면 최선을 다하겠습니다.',
          tgt + '님, 한 가지 말씀드려도 될까요? ' + det + ' 부분이 계속 신경 쓰여서요. ' + sit + ' 관련해서 제 의견을 드려도 될까요? 팀 전체를 위해서도 중요한 문제인 것 같아서요.'
        ]),
        tip: '문제를 제기할 때는 "나는 힘들어요"보다 "팀 성과에 영향이 생길 것 같아요"로 표현하면 훨씬 설득력이 높아요.'
      },
      {
        text: _pick([
          tgt + '님, 말씀드릴 게 있는데요. ' + det + ' 상황이 계속되다 보니 저도 좀 어렵더라고요 :( 어떻게 하면 좋을까요? 같이 방법 찾아봐도 될까요?',
          tgt + '님, 솔직히 말씀드려도 될까요? 요즘 ' + sit + ' 때문에 좀 힘든데, 어떻게 해결하면 좋을지 모르겠어요. 조언 주실 수 있어요?'
        ]),
        tip: '해결책을 물어보는 방식으로 접근하면, 일방적인 민원이 아니라 협업 요청처럼 들려요.'
      },
      {
        text: _pick([
          tgt + '님, ' + sit + ' 건으로 말씀드립니다. ' + det + ' 상황입니다. 조율 부탁드립니다.',
          sit + ' 관련 논의 요청드립니다. ' + det + ' 상황 개선이 필요합니다.'
        ]),
        tip: '짧고 명확한 메시지는 진지하게 받아들여질 가능성이 높아요. 감정적인 표현은 빼세요.'
      }
    ];
  }

};
