// SCRIPT — Cloudflare Worker (Claude API proxy)

const SYSTEM_PROMPT = `당신은 한국에서 실제로 통하는 대화 스크립트를 써주는 전문가입니다.

## 핵심 원칙
- 진짜 한국 사람이 카톡이나 실제 대화에서 쓸 법한 표현만 사용
- 어색한 번역투, 지나치게 격식적이거나 딱딱한 표현 절대 금지
- 상황과 관계에 맞는 자연스러운 높임말 단계 유지
- 막연하거나 추상적인 표현 금지 — 구체적이고 실용적으로

## 절대 쓰면 안 되는 표현
❌ "함께하는 시간이 소중하여..."
❌ "귀하의 의견을 경청하고자..."
❌ "상호 이해를 바탕으로..."
❌ "발전적인 관계를 위해..."
❌ 입력한 정보를 그대로 나열하는 스크립트

## 이렇게 써야 합니다
✅ "솔직히 말씀드려도 될까요?"
✅ "제가 이번엔 좀 어렵겠어요"
✅ "같이 방법 찾아봐도 될까요?"
✅ "말씀드리기 좀 어려운데..."

## 연봉협상 좋은 예
"안녕하세요. 연봉 얘기 한번 드려도 될까요? 지난 1년 동안 OO 프로젝트 마무리하면서 나름 기여했다고 생각하는데, 현재 3,200에서 3,800 정도로 조정이 가능한지 여쭤보고 싶어서요. 혹시 시간 내주실 수 있을까요?"

## 거절 좋은 예
"선배님, 도와드리고 싶은데 이번 주말은 선약이 있어서요. 죄송한데 이번엔 어렵겠습니다."

## 3가지 버전 규칙
- 버전 A: 정중하고 단호하게 — 격식체이지만 인간적으로, 핵심 명확히
- 버전 B: 부드럽고 협력적으로 — 상대 배려하면서 내 뜻 전달, 약간 친근하게
- 버전 C: 간결하게 — 딱 2~3문장, 핵심만, 군더더기 없이

각 버전 마지막에 실용적인 한 줄 팁 추가.

반드시 아래 JSON 형식으로만 응답. 다른 텍스트 절대 금지:
[{"text":"...","tip":"..."},{"text":"...","tip":"..."},{"text":"...","tip":"..."}]`;

const CAT_NAMES = {
  salary: '연봉협상', reject: '거절하기', dating: '소개팅·관계',
  family: '가족 대화', complaint: '계약·민원', work: '직장 대화'
};

const FIELD_LABELS = {
  salary:    [['current','현재 연봉'],['target','목표 연봉'],['achievement','주요 성과'],['tenure','재직 기간'],['company','회사 규모']],
  reject:    [['relation','상대방 관계'],['request','부탁 내용'],['reason','거절 이유'],['channel','전달 방식']],
  dating:    [['situation','상황'],['age','상대방'],['tone','원하는 톤'],['message','전하고 싶은 말']],
  family:    [['target','대화 대상'],['situation','상황'],['outcome','원하는 결과'],['relation','평소 관계']],
  complaint: [['target','상대방'],['situation','상황'],['details','구체적 상황'],['outcome','원하는 결과']],
  work:      [['target','대화 상대'],['situation','상황'],['details','구체적 상황'],['tone','원하는 분위기']]
};

function buildUserMessage(cat, d) {
  let msg = `[카테고리: ${CAT_NAMES[cat] || cat}]\n\n`;
  for (const [key, label] of (FIELD_LABELS[cat] || [])) {
    if (d[key] && d[key].trim()) msg += `${label}: ${d[key].trim()}\n`;
  }
  msg += `\n위 상황에 맞는 ${CAT_NAMES[cat] || cat} 스크립트를 작성해주세요.`;
  return msg;
}

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') return new Response(null, { headers: CORS });
    if (request.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });

    try {
      const { cat, formData } = await request.json();

      const apiRes = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 1500,
          system: SYSTEM_PROMPT,
          messages: [{ role: 'user', content: buildUserMessage(cat, formData) }]
        })
      });

      if (!apiRes.ok) throw new Error(`Anthropic API ${apiRes.status}`);

      const apiData = await apiRes.json();
      const scripts = JSON.parse(apiData.content[0].text.trim());

      return new Response(JSON.stringify(scripts), {
        headers: { 'Content-Type': 'application/json', ...CORS }
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...CORS }
      });
    }
  }
};
