// game.html 생성기
// 앱(WebView)용 게임 원본인 game-app/game/gameHtml.js의 GAME_HTML 문자열을 그대로 가져와,
// 웹(iPhone Safari 등) 단독 실행용 game.html을 저장소 루트에 만든다.
//   - 저장: RN 브리지 대신 localStorage 사용(동일 KEY 스키마)
//   - iOS '홈 화면에 추가'(PWA) 메타/매니페스트 추가
// 게임 로직은 한 곳(gameHtml.js)에서만 관리하고, 게임 수정 후 이 스크립트를 다시 실행하면 game.html이 갱신된다.
//   사용법: node game-app/scripts/gen-web-game.js

const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '..', 'game', 'gameHtml.js');
const outPath = path.join(__dirname, '..', '..', 'game.html');

const src = fs.readFileSync(srcPath, 'utf8');

// GAME_HTML 템플릿 리터럴 추출 (HTML 내부에는 백틱이 없도록 작성돼 있어 첫/마지막 백틱 사이가 본문)
const first = src.indexOf('`');
const last = src.lastIndexOf('`');
if (first < 0 || last <= first) {
  console.error('GAME_HTML 백틱을 찾지 못했습니다.');
  process.exit(1);
}
let html = src.slice(first + 1, last);

// 웹 저장(localStorage) 셰임: 게임 코드는 window.__SAVE__를 읽고 ReactNativeWebView.postMessage로 저장하므로
// 두 가지를 localStorage에 연결해주면 게임 로직 수정 없이 그대로 동작한다.
const shim = [
  '<script>',
  '(function(){',
  '  var KEY="commander_td_save_v1";',
  '  try{ window.__SAVE__=JSON.parse(localStorage.getItem(KEY))||{}; }catch(e){ window.__SAVE__={}; }',
  '  window.ReactNativeWebView={ postMessage:function(s){ try{ var m=JSON.parse(s); if(m&&m.type==="save"&&m.save) localStorage.setItem(KEY,JSON.stringify(m.save)); }catch(e){} } };',
  '})();',
  '<' + '/script>',
].join('\n');

// iOS/PWA 메타 + 매니페스트
const head = [
  '<meta name="apple-mobile-web-app-capable" content="yes" />',
  '<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />',
  '<meta name="apple-mobile-web-app-title" content="사령관의 타워디펜스" />',
  '<meta name="mobile-web-app-capable" content="yes" />',
  '<meta name="theme-color" content="#0b1020" />',
  '<meta name="description" content="사령관의 타워디펜스 — 혼자 즐기는 오프라인 타워디펜스. iPhone/안드로이드 브라우저에서 바로 플레이." />',
  '<link rel="manifest" href="game-manifest.json" />',
  '<link rel="apple-touch-icon" href="game-icon.svg" />',
  '<link rel="icon" href="game-icon.svg" type="image/svg+xml" />',
].join('\n');

html = html.replace('</head>', head + '\n</head>');
html = html.replace('<body>', '<body>\n' + shim);

const banner = '<!-- 자동 생성 파일: game-app/game/gameHtml.js에서 game-app/scripts/gen-web-game.js로 생성됨. 직접 수정하지 마세요. -->\n';
html = html.replace('<!DOCTYPE html>', '<!DOCTYPE html>\n' + banner);

fs.writeFileSync(outPath, html);
console.log('생성 완료:', outPath, '(' + html.length + ' bytes)');
