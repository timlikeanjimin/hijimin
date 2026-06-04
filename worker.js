// SCRIPT — Cloudflare Worker (Claude API proxy)
// Deploy: wrangler deploy
// Set secret: wrangler secret put ANTHROPIC_API_KEY

const SYSTEM_PROMPT = `당신은 한국어 대화 스크립트 전문가입니다. 사용자가 어렵거나 긴장되는 상황에서 실제로 쓸 수 있는 자연스러운 한국어 스크립트를 작성합니다.

한국의 위계 문화, 눈치, 높임말 단계를 완벽히 반영하세요. 어색하거나 번역투가 아닌, 진짜 한국 사람이 쓸 법한 표현을 사용하세요.

반드시 3가지 버전을 작성하세요:
- 버전 A: 정중하고 단호하게 (격식체, 명확한 의사전달)
- 버전 B: 부드럽고 협력적으로 (관계 중시, 따뜻한 톤)
- 버전 C: 간결하고 직접적으로 (핵심만, 2~3문장 이내)

각 버전에 실용적인 팁을 한 문장으로 추가하세요.

반드시 아래 JSON 형식으로만 응답하세요. 다른 텍스트는 절대 포함하지 마세요:
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
          model: 'claude-haiku-4-5-20251001',
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
