// 사령관의 타워디펜스 — HTML5 Canvas 게임 (WebView 내 단일 문서)
// 주의: 이 문자열은 RN 템플릿 리터럴이므로 내부에서 백틱 / 달러중괄호 / 백슬래시 이스케이프를 쓰지 않는다.
export const GAME_HTML = `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
<title>사령관의 타워디펜스</title>
<style>
  * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; user-select: none; -webkit-user-select: none; }
  html, body { margin: 0; padding: 0; height: 100%; background: #05070f; color: #eaf0ff;
    font-family: -apple-system, "Noto Sans KR", "Apple SD Gothic Neo", system-ui, sans-serif; overflow: hidden; }
  #app { position: fixed; inset: 0; display: flex; flex-direction: column; }
  #hud { height: 56px; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; gap: 5px;
    background: linear-gradient(180deg, rgba(18,26,52,0.96), rgba(11,16,34,0.96)); border-bottom: 1px solid #243463;
    box-shadow: 0 2px 10px rgba(0,0,0,0.45); z-index: 2; position: relative; }
  .chip { display: flex; align-items: center; gap: 5px; padding: 5px 8px; border-radius: 11px;
    background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); }
  .chip .ic { font-size: 14px; } .chip .v { font-size: 15px; font-weight: 800; line-height: 1; }
  .chip .l { font-size: 9px; color: #91a4d6; margin-top: 2px; } .chip .col { display: flex; flex-direction: column; }
  .gold .v { color: #ffd84d; } .life .v { color: #ff7aa8; } .wave .v { color: #5cd1ff; } .score .v { color: #c4a6ff; }
  .pulse { animation: pulse 0.3s ease; }
  @keyframes pulse { 0%{transform:scale(1);} 40%{transform:scale(1.3);} 100%{transform:scale(1);} }
  #combo { position: absolute; top: 60px; right: 12px; z-index: 3; font-weight: 900; font-size: 18px;
    color: #ffd84d; text-shadow: 0 2px 10px rgba(0,0,0,0.6); opacity: 0; transition: opacity 0.2s; pointer-events: none; }
  #combo.show { opacity: 1; }
  #field { flex: 1; position: relative; min-height: 0; }
  #cv { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
  #dock { padding: 7px 7px 9px; background: linear-gradient(0deg, rgba(18,26,52,0.97), rgba(11,16,34,0.9));
    border-top: 1px solid #243463; box-shadow: 0 -2px 10px rgba(0,0,0,0.45); z-index: 2; }
  .drow { display: flex; gap: 6px; margin-bottom: 6px; }
  #startBtn { flex: 1; height: 44px; border: 0; border-radius: 12px; font-size: 14px; font-weight: 800;
    color: #042018; background: linear-gradient(180deg,#a8ffba,#2ed665); box-shadow: 0 3px 0 #1c9444; }
  #startBtn:active { transform: translateY(2px); box-shadow: 0 1px 0 #1c9444; }
  #startBtn:disabled { filter: grayscale(0.55) brightness(0.7); box-shadow: none; transform: none; }
  #speedBtn, #pauseBtn { width: 52px; height: 44px; border: 1px solid #2c3d6e; border-radius: 12px;
    background: linear-gradient(180deg,#1b2950,#15203f); color: #d3e0ff; font-size: 14px; font-weight: 800; }
  .ab { flex: 1; height: 44px; position: relative; border: 1px solid #3a2b5e; border-radius: 12px; overflow: hidden;
    background: linear-gradient(180deg,#2a2150,#1a1438); color: #e9ddff; font-size: 13px; font-weight: 800; }
  .ab .cd { position: absolute; left: 0; bottom: 0; width: 100%; background: rgba(0,0,0,0.55); height: 0%; }
  .ab.ready { border-color: #b79bff; box-shadow: 0 0 12px rgba(183,155,255,0.3); }
  .ab.arming { border-color: #ffd84d; box-shadow: 0 0 14px rgba(255,216,77,0.5); }
  #palette { display: flex; gap: 4px; }
  .tw { flex: 1; position: relative; border: 1px solid #2c3d6e; border-radius: 11px;
    background: linear-gradient(180deg,#19244a,#121b39); color: #e3ecff; padding: 6px 1px 5px; text-align: center; overflow: hidden; }
  .tw::before { content:""; position:absolute; left:0; right:0; top:0; height:3px; background: var(--c,#7ef0ff); }
  .tw.sel { border-color: var(--c,#7ef0ff); box-shadow: 0 0 0 2px rgba(126,240,255,0.30) inset, 0 0 12px rgba(126,240,255,0.25); transform: translateY(-1px); }
  .tw.poor { opacity: 0.45; } .tw .ic { font-size: 17px; filter: drop-shadow(0 0 5px var(--c,#7ef0ff)); }
  .tw .nm { font-size: 9.5px; font-weight: 800; margin-top: 3px; } .tw .cost { font-size: 10px; color: #ffd84d; margin-top: 1px; font-weight: 800; }
  .overlay { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center;
    text-align: center; padding: 20px; z-index: 5; overflow-y: auto;
    background: radial-gradient(120% 80% at 50% 0%, rgba(28,40,80,0.55), rgba(5,8,18,0.96)); backdrop-filter: blur(3px); }
  .overlay.hide { display: none; }
  .crest { font-size: 44px; filter: drop-shadow(0 4px 16px rgba(126,240,255,0.45)); margin-bottom: 4px; }
  .title { font-size: 27px; font-weight: 900; letter-spacing: -0.5px;
    background: linear-gradient(90deg,#7ef0ff,#b79bff,#ff7aa8); -webkit-background-clip: text; background-clip: text; color: transparent; }
  .sub { margin-top: 8px; font-size: 14px; color: #b3c2ee; line-height: 1.55; }
  .rec { margin-top: 10px; font-size: 13px; color: #ffd84d; font-weight: 800; }
  #stageList { margin-top: 14px; width: 100%; max-width: 400px; display: flex; flex-direction: column; gap: 9px; }
  .stage { text-align: left; border: 1px solid #2a3a6a; border-radius: 15px; background: linear-gradient(180deg,#17224a,#101935);
    padding: 12px 13px; display: flex; align-items: center; justify-content: space-between; gap: 10px; box-shadow: 0 4px 14px rgba(0,0,0,0.3); }
  .stage.locked { opacity: 0.5; } .stage .emo { font-size: 25px; width: 30px; text-align: center; flex: 0 0 auto; }
  .stage .mid { flex: 1; min-width: 0; } .stage .sn { font-size: 15px; font-weight: 800; color: #eef3ff; }
  .stage .sd { font-size: 11.5px; color: #9fb2e6; margin-top: 3px; } .stage .sr { font-size: 11px; color: #ffd84d; margin-top: 3px; font-weight: 700; }
  .stage .go { width: 44px; height: 44px; border-radius: 12px; border: 0; font-size: 17px; font-weight: 900; flex: 0 0 auto;
    color: #042018; background: linear-gradient(180deg,#a8ffba,#2ed665); box-shadow: 0 3px 0 #1c9444; }
  .stage.locked .go { background: #2a3358; color: #6a79a8; box-shadow: none; }
  .big { margin-top: 16px; height: 50px; padding: 0 26px; border: 0; border-radius: 14px; font-size: 17px; font-weight: 900;
    color: #042018; background: linear-gradient(180deg,#a8ffba,#2ed665); box-shadow: 0 4px 0 #1c9444; }
  .big:active { transform: translateY(2px); }
  .ghost { margin-top: 9px; height: 46px; padding: 0 22px; border: 1px solid #2c3d6e; border-radius: 13px; font-size: 15px;
    font-weight: 800; color: #d3e0ff; background: linear-gradient(180deg,#1b2950,#15203f); }
  .hint { margin-top: 13px; font-size: 12px; color: #8294c4; line-height: 1.55; }
  .setrow { display: flex; gap: 10px; margin-top: 12px; }
  .setrow button { flex: 1; height: 44px; border: 1px solid #2c3d6e; border-radius: 12px; background: #16224a; color: #d3e0ff; font-size: 13px; font-weight: 800; }
  #popup { position: absolute; left: 50%; bottom: 12px; transform: translateX(-50%); z-index: 6;
    background: linear-gradient(180deg,#162049,#0f1733); border: 1px solid #30417a; border-radius: 16px; padding: 11px;
    display: none; width: 93%; max-width: 380px; box-shadow: 0 12px 30px rgba(0,0,0,0.55); }
  #popup .ph { font-size: 12.5px; color: #b3c2ee; margin-bottom: 8px; text-align: center; font-weight: 700; }
  #popup .row { display: flex; gap: 7px; }
  #popup button { flex: 1; height: 44px; border: 0; border-radius: 11px; font-size: 13px; font-weight: 800; }
  #upBtn { background: linear-gradient(180deg,#8ef3ff,#22c3ff); color: #042018; } #upBtn:disabled { filter: grayscale(0.6) brightness(0.7); }
  #tgtBtn { background: #21305e; color: #cfe0ff; border: 1px solid #36487e; }
  #sellBtn { background: linear-gradient(180deg,#46283f,#33203a); color: #ffb0c8; border: 1px solid #5a2f4a; }
  #closeBtn { background: #1c2750; color: #d3e0ff; max-width: 58px; }
  #toast { position: absolute; top: 12px; left: 50%; transform: translateX(-50%); z-index: 7; background: rgba(22,30,60,0.96);
    border: 1px solid #30417a; color: #eaf0ff; padding: 9px 18px; border-radius: 999px; font-size: 14px; font-weight: 800;
    opacity: 0; transition: opacity 0.25s; box-shadow: 0 6px 18px rgba(0,0,0,0.4); white-space: nowrap; }
  #toast.show { opacity: 1; }
  #banner { position: absolute; top: 36%; left: 0; right: 0; text-align: center; z-index: 6; pointer-events: none;
    font-size: 30px; font-weight: 900; opacity: 0; text-shadow: 0 3px 16px rgba(0,0,0,0.6); }
  #banner.show { opacity: 1; animation: bnr 0.5s ease; }
  @keyframes bnr { 0%{transform:scale(0.7);} 60%{transform:scale(1.12);} 100%{transform:scale(1);} }
  .stars { font-size: 22px; letter-spacing: 3px; margin-top: 8px; }
</style>
</head>
<body>
<div id="app">
  <div id="hud">
    <div class="chip gold"><span class="ic">🪙</span><span class="col"><span class="v" id="goldV">0</span><span class="l">골드</span></span></div>
    <div class="chip life"><span class="ic">🛡️</span><span class="col"><span class="v" id="lifeV">0</span><span class="l">기지</span></span></div>
    <div class="chip wave"><span class="ic">🌊</span><span class="col"><span class="v" id="waveV">0</span><span class="l">웨이브</span></span></div>
    <div class="chip score"><span class="ic">⭐</span><span class="col"><span class="v" id="scoreV">0</span><span class="l">점수</span></span></div>
    <div id="combo"></div>
  </div>
  <div id="field">
    <canvas id="cv"></canvas>
    <div id="toast"></div>
    <div id="banner"></div>
    <div id="popup">
      <div class="ph" id="popHead">타워</div>
      <div class="row">
        <button id="upBtn">업그레이드</button>
        <button id="tgtBtn">우선:선두</button>
        <button id="sellBtn">판매</button>
        <button id="closeBtn">✕</button>
      </div>
    </div>
    <div class="overlay" id="menu">
      <div class="crest">🏰</div>
      <div class="title">사령관의 타워디펜스</div>
      <div class="sub">사령관님, 기지를 사수하라!<br/>스테이지를 골라 출격하세요.</div>
      <div class="rec" id="menuRec"></div>
      <div id="stageList"></div>
      <div class="hint">타워를 골라 빈 칸에 설치 · 탭하면 업그레이드/판매<br/>아래 스킬(메테오·빙결)로 위기를 돌파하세요</div>
    </div>
    <div class="overlay hide" id="pausemenu">
      <div class="crest">⏸️</div>
      <div class="title" style="background:linear-gradient(90deg,#9db8ff,#7ef0ff);-webkit-background-clip:text;background-clip:text;">일시정지</div>
      <button class="big" id="resumeBtn">계속하기</button>
      <div class="setrow" style="max-width:360px;width:100%;">
        <button id="soundBtn">효과음: 켜짐</button>
        <button id="musicBtn">배경음: 꺼짐</button>
      </div>
      <button class="ghost" id="pmMenuBtn">스테이지 선택으로</button>
    </div>
    <div class="overlay hide" id="stageclear">
      <div class="crest">🏆</div>
      <div class="title" style="background:linear-gradient(90deg,#b6ffb0,#7ef0ff);-webkit-background-clip:text;background-clip:text;">스테이지 클리어!</div>
      <div class="stars" id="scStars"></div>
      <div class="sub" id="scSub"></div>
      <div class="rec" id="scRec"></div>
      <button class="big" id="nextBtn">다음 스테이지</button>
      <button class="ghost" id="scMenuBtn">스테이지 선택</button>
    </div>
    <div class="overlay hide" id="gameover">
      <div class="crest">💥</div>
      <div class="title" style="background:linear-gradient(90deg,#ff7aa8,#ff9d5c);-webkit-background-clip:text;background-clip:text;">기지 함락…</div>
      <div class="sub" id="goSub">사령관님, 다음엔 더 멀리.</div>
      <div class="rec" id="goRec"></div>
      <button class="big" id="retryBtn" style="background:linear-gradient(180deg,#a9c0ff,#5c7bff);box-shadow:0 4px 0 #2f4ccc;">다시 출격</button>
      <button class="ghost" id="goMenuBtn">스테이지 선택</button>
    </div>
  </div>
  <div id="dock">
    <div class="drow">
      <button id="startBtn">웨이브 시작</button>
      <button id="speedBtn">1x</button>
      <button id="pauseBtn">II</button>
    </div>
    <div class="drow">
      <button class="ab" id="ab0"><span class="cd"></span><span class="lab">☄️ 메테오</span></button>
      <button class="ab" id="ab1"><span class="cd"></span><span class="lab">❄️ 빙결</span></button>
    </div>
    <div id="palette"></div>
  </div>
</div>
<script>
(function(){
  "use strict";

  // ---- 저장 ----
  var SAVE = (window.__SAVE__ && typeof window.__SAVE__ === "object") ? window.__SAVE__ : {};
  if (typeof SAVE.unlocked !== "number") SAVE.unlocked = 0;
  if (!SAVE.stages || typeof SAVE.stages !== "object") SAVE.stages = {};
  if (typeof SAVE.bestScore !== "number") SAVE.bestScore = 0;
  if (typeof SAVE.sound !== "boolean") SAVE.sound = true;
  if (typeof SAVE.music !== "boolean") SAVE.music = false;
  function saveGame(){ try { if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) window.ReactNativeWebView.postMessage(JSON.stringify({ type:"save", save:SAVE })); } catch (e) {} }
  function stageRec(idx){ if (!SAVE.stages[idx]) SAVE.stages[idx] = { bestWave:0, bestScore:0, cleared:false, stars:0 }; if (typeof SAVE.stages[idx].stars!=="number") SAVE.stages[idx].stars=0; return SAVE.stages[idx]; }

  // ---- 테마 ----
  var THEMES = {
    plain:  { top:"#10204a", bot:"#0a142e", t1:"#1c5a37", t2:"#123a26", road:"#5a7a4a", roadHi:"#86b56a", amb:"clouds", ac:"rgba(220,235,255,0.5)" },
    canyon: { top:"#3a1f12", bot:"#1a0e0a", t1:"#5a3320", t2:"#3a2015", road:"#7a5236", roadHi:"#b58a5a", amb:"dust",   ac:"rgba(255,200,150,0.4)" },
    snow:   { top:"#22344f", bot:"#0e1a2c", t1:"#2a4a66", t2:"#1c3550", road:"#9fb8cf", roadHi:"#dceaf6", amb:"snow",   ac:"rgba(255,255,255,0.9)" },
    fort:   { top:"#1c2233", bot:"#0c0f18", t1:"#33405a", t2:"#222b40", road:"#6b768f", roadHi:"#9aa6c0", amb:"torch",  ac:"rgba(255,170,90,0.8)" },
    lava:   { top:"#34110e", bot:"#160707", t1:"#5a2418", t2:"#33140e", road:"#7a3a22", roadHi:"#ff7a3a", amb:"embers", ac:"rgba(255,140,60,0.9)" }
  };

  var STAGES = [
    { name:"1. 훈련 평원", short:"훈련 평원", emo:"🌿", theme:"plain",  desc:"기본 지형 · 10웨이브", clearWave:10, hpMul:1.0, gold:250, lives:20, wp:[[0,1],[7,1],[7,3],[1,3],[1,5],[7,5],[7,7],[1,7],[1,9],[7,9],[7,11],[1,11],[1,13]] },
    { name:"2. 협곡 통로", short:"협곡 통로", emo:"⛰️", theme:"canyon", desc:"좁은 지그재그 · 12웨이브", clearWave:12, hpMul:1.15, gold:250, lives:20, wp:[[8,1],[1,1],[1,3],[7,3],[7,5],[1,5],[1,7],[7,7],[7,9],[1,9],[1,11],[7,11],[7,13]] },
    { name:"3. 설원 미궁", short:"설원 미궁", emo:"❄️", theme:"snow",   desc:"긴 우회로 · 14웨이브", clearWave:14, hpMul:1.3, gold:270, lives:18, wp:[[4,0],[4,2],[1,2],[1,11],[7,11],[7,4],[3,4],[3,8],[5,8]] },
    { name:"4. 강철 요새", short:"강철 요새", emo:"🏯", theme:"fort",   desc:"전구간 횡단 · 16웨이브", clearWave:16, hpMul:1.5, gold:290, lives:18, wp:[[0,1],[8,1],[8,3],[0,3],[0,5],[8,5],[8,7],[0,7],[0,9],[8,9],[8,11],[0,11],[0,13]] },
    { name:"5. 화염 지옥", short:"화염 지옥", emo:"🔥", theme:"lava",   desc:"무한 웨이브 · 생존!", clearWave:0, hpMul:1.7, gold:320, lives:16, wp:[[0,2],[6,2],[6,5],[2,5],[2,8],[6,8],[6,11],[1,11],[1,13]] }
  ];

  // ---- 오디오 ----
  var AC = null;
  function audio(){ if (AC) return AC; try { AC = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { AC = null; } return AC; }
  function beep(freq,dur,type,vol){ if (!SAVE.sound) return; var ac=audio(); if (!ac) return;
    try { var o=ac.createOscillator(), g=ac.createGain(); o.type=type||"sine"; o.frequency.value=freq; g.gain.value=(vol==null?0.05:vol);
      o.connect(g); g.connect(ac.destination); var t=ac.currentTime; g.gain.setValueAtTime(g.gain.value,t); g.gain.exponentialRampToValueAtTime(0.0001,t+dur); o.start(t); o.stop(t+dur); } catch(e){} }
  var snd = {
    shoot:function(){ beep(680,0.045,"square",0.015); }, rapid:function(){ beep(920,0.028,"square",0.012); },
    snipe:function(){ beep(1500,0.07,"sawtooth",0.03); beep(400,0.12,"sine",0.02); }, tesla:function(){ beep(2000,0.05,"square",0.02); beep(1200,0.06,"sawtooth",0.015); },
    hit:function(){ beep(300,0.05,"triangle",0.02); }, boom:function(){ beep(110,0.22,"sawtooth",0.05); beep(60,0.3,"sine",0.04); },
    place:function(){ beep(520,0.08,"sine",0.05); beep(820,0.09,"sine",0.045); }, coin:function(){ beep(1040,0.06,"sine",0.03); },
    lose:function(){ beep(150,0.5,"sawtooth",0.06); }, wave:function(){ beep(440,0.1,"sine",0.045); beep(660,0.12,"sine",0.045); },
    win:function(){ beep(660,0.1,"sine",0.055); beep(880,0.12,"sine",0.055); beep(1180,0.2,"sine",0.055); },
    frost:function(){ beep(1300,0.08,"sine",0.025); }, meteor:function(){ beep(90,0.5,"sawtooth",0.06); beep(50,0.6,"sine",0.05); }
  };
  // 배경음(간단 아르페지오 루프)
  var musicTmr=null, musicStep=0, scale=[0,3,5,7,10,12];
  function startMusic(){ if (musicTmr || !SAVE.music) return; var ac=audio(); if (!ac) return;
    musicTmr=setInterval(function(){ if (!SAVE.music) return; try {
      var root=146.83, n=scale[musicStep%scale.length]+(musicStep%12<6?0:12); var f=root*Math.pow(2,n/12);
      var o=ac.createOscillator(), g=ac.createGain(); o.type="triangle"; o.frequency.value=f; g.gain.value=0.025;
      o.connect(g); g.connect(ac.destination); var t=ac.currentTime; g.gain.setValueAtTime(0.025,t); g.gain.exponentialRampToValueAtTime(0.0001,t+0.4); o.start(t); o.stop(t+0.42);
      if (musicStep%4===0){ var b=ac.createOscillator(), bg=ac.createGain(); b.type="sine"; b.frequency.value=root/2; bg.gain.value=0.03; b.connect(bg); bg.connect(ac.destination); bg.gain.setValueAtTime(0.03,t); bg.gain.exponentialRampToValueAtTime(0.0001,t+0.5); b.start(t); b.stop(t+0.52); }
      musicStep++; } catch(e){} }, 250);
  }
  function stopMusic(){ if (musicTmr){ clearInterval(musicTmr); musicTmr=null; } }
  function vibrate(ms){ try { if (SAVE.sound && navigator.vibrate) navigator.vibrate(ms); } catch(e){} }

  // ---- 캔버스 ----
  var cv=document.getElementById("cv"), ctx=cv.getContext("2d"), field=document.getElementById("field");
  var dpr=Math.max(1,Math.min(2,window.devicePixelRatio||1));
  var COLS=9, ROWS=14, cell=32, ox=0, oy=0, cw=0, ch=0, now=0;

  var WAYPOINTS=STAGES[0].wp, pathCells=[], pathSet={};
  function buildPathCells(){ pathCells=[]; pathSet={};
    for (var i=0;i<WAYPOINTS.length-1;i++){ var a=WAYPOINTS[i], b=WAYPOINTS[i+1]; var dc=Math.sign(b[0]-a[0]), dr=Math.sign(b[1]-a[1]); var c=a[0], r=a[1];
      if (i===0) pathCells.push([c,r]); while (c!==b[0]||r!==b[1]){ c+=dc; r+=dr; pathCells.push([c,r]); } }
    for (var p=0;p<pathCells.length;p++) pathSet[pathCells[p][0]+","+pathCells[p][1]]=true; }
  var pathPx=[], segLen=[], totalLen=1;
  function rebuildPathPx(){ pathPx=[]; for (var i=0;i<pathCells.length;i++) pathPx.push({x:ox+(pathCells[i][0]+0.5)*cell, y:oy+(pathCells[i][1]+0.5)*cell});
    segLen=[]; totalLen=0; for (var j=0;j<pathPx.length-1;j++){ var d=Math.hypot(pathPx[j+1].x-pathPx[j].x,pathPx[j+1].y-pathPx[j].y); segLen.push(d); totalLen+=d; } if (totalLen<=0) totalLen=1; }
  function posFromProgress(p){ var d=p*totalLen, j=0; while (j<segLen.length && d>segLen[j]){ d-=segLen[j]; j++; }
    if (j>=segLen.length) return {x:pathPx[pathPx.length-1].x, y:pathPx[pathPx.length-1].y};
    var t=segLen[j]>0?d/segLen[j]:0; return {x:pathPx[j].x+(pathPx[j+1].x-pathPx[j].x)*t, y:pathPx[j].y+(pathPx[j+1].y-pathPx[j].y)*t}; }
  function setStage(idx){ WAYPOINTS=STAGES[idx].wp; buildPathCells(); rebuildPathPx(); }
  function resize(){ cw=field.clientWidth; ch=field.clientHeight; cv.width=Math.floor(cw*dpr); cv.height=Math.floor(ch*dpr); ctx.setTransform(dpr,0,0,dpr,0,0);
    cell=Math.floor(Math.min(cw/COLS,ch/ROWS)); ox=Math.floor((cw-COLS*cell)/2); oy=Math.floor((ch-ROWS*cell)/2); rebuildPathPx(); }
  window.addEventListener("resize", resize);

  // ---- 타워 정의 ----
  var TOWERS = [
    { key:"arrow",  name:"기본",  icon:"🏹", cost:50,  dmg:10, range:2.2, rate:1.1, splash:0,   slow:0,   chain:0, color:"#7ef0ff", tmode:0 },
    { key:"rapid",  name:"속사",  icon:"⚡", cost:80,  dmg:6,  range:1.9, rate:3.6, splash:0,   slow:0,   chain:0, color:"#ffe14d", tmode:0 },
    { key:"cannon", name:"캐논",  icon:"💣", cost:120, dmg:34, range:2.0, rate:0.65,splash:0.95,slow:0,   chain:0, color:"#ff9d5c", tmode:0 },
    { key:"frost",  name:"얼음",  icon:"❄️", cost:90,  dmg:5,  range:2.0, rate:1.2, splash:0,   slow:0.5, chain:0, color:"#9fd6ff", tmode:0 },
    { key:"sniper", name:"저격",  icon:"🎯", cost:150, dmg:70, range:3.6, rate:0.5, splash:0,   slow:0,   chain:0, color:"#ff6bd0", tmode:2 },
    { key:"tesla",  name:"번개",  icon:"🔱", cost:140, dmg:14, range:2.1, rate:1.3, splash:0,   slow:0,   chain:3, color:"#b79bff", tmode:0 }
  ];
  var TMODES = ["선두","후미","강함"];

  // ---- 게임 상태 ----
  var G=null;
  function newGame(idx){ var st=STAGES[idx]; return {
    stageIdx:idx, theme:THEMES[st.theme], gold:st.gold, lives:st.lives, maxLives:st.lives, wave:0, score:0, kills:0,
    phase:"build", paused:false, speed:1, towers:[], enemies:[], shots:[], parts:[], texts:[], bolts:[], amb:[],
    spawnQ:[], spawnTimer:0, spawnGap:0.55, buildSel:-1, selTower:null, warnTimer:0, shake:0, flash:0, hitStop:0,
    combo:0, comboT:0, mult:1, aiming:null, cd:[0,0], ambT:0 }; }

  // ---- 웨이브 ----
  function makeWave(w, hpMul){
    var base=Math.round(15*Math.pow(1.16,w-1)*hpMul), list=[];
    function push(type,hp,spd,leak,rad,color,reward,n,extra){ for (var i=0;i<n;i++){ var o={type:type,hp:hp,spd:spd,leak:leak,rad:rad,color:color,reward:reward}; if(extra){for(var k in extra)o[k]=extra[k];} list.push(o); } }
    push("normal", base, 1.3, 1, 0.30, "#ff6a6a", 3+Math.floor(w*0.7), 5+w);
    if (w>=3) push("fast", Math.round(base*0.55), 2.5, 1, 0.24, "#ff79e0", 4+Math.floor(w*0.7), Math.floor(w*0.6));
    if (w>=4) push("swarm", Math.round(base*0.3), 2.0, 1, 0.18, "#ffd36a", 2+Math.floor(w*0.4), Math.floor(w*1.2));
    if (w>=5) push("tank", Math.round(base*2.8), 0.85, 2, 0.36, "#7fd06a", 7+Math.floor(w*0.8), Math.floor(w*0.4));
    if (w>=6) push("shield", Math.round(base*1.4), 1.1, 1, 0.32, "#9fb6e6", 8+Math.floor(w*0.8), Math.floor(w*0.4), {armor:Math.max(4,Math.round(base*0.2))});
    if (w>=8) push("healer", Math.round(base*1.8), 1.0, 2, 0.32, "#6effa6", 12+w, Math.max(1,Math.floor(w*0.2)));
    for (var i=list.length-1;i>0;i--){ var k=Math.floor(Math.random()*(i+1)); var tmp=list[i]; list[i]=list[k]; list[k]=tmp; }
    var bosses=(w%5===0)?(1+Math.floor(w/10)):0;
    for (var b=0;b<bosses;b++) list.push({ type:"boss", hp:Math.round(base*14), spd:0.7, leak:5, rad:0.5, color:"#c77bff", reward:45+w*3 });
    return list;
  }
  function nextIsBoss(){ return ((G.wave+1)%5===0); }
  function startWave(){ if (!G||G.phase!=="build") return; G.wave+=1; G.spawnQ=makeWave(G.wave, STAGES[G.stageIdx].hpMul); G.spawnTimer=0; G.phase="wave"; closePopup();
    if (G.wave%5===0){ G.warnTimer=2.2; showBanner("⚠ 보스 출현 ⚠","#c77bff"); } else showBanner("WAVE "+G.wave,"#5cd1ff"); snd.wave(); updateStartBtn(); }
  function spawnOne(s){ G.enemies.push({ type:s.type, maxHp:s.hp, hp:s.hp, spd:s.spd, leak:s.leak, rad:s.rad, color:s.color, reward:s.reward,
    armor:s.armor||0, prog:0, slowT:0, frozenT:0, flash:0, heading:0, ph:Math.random()*6.28, healT:0, enraged:false, x:pathPx[0].x, y:pathPx[0].y }); }

  // ---- 설치/업글/판매 ----
  function towerAt(c,r){ for (var i=0;i<G.towers.length;i++){ if (G.towers[i].c===c && G.towers[i].r===r) return G.towers[i]; } return null; }
  function buildable(c,r){ if (c<0||r<0||c>=COLS||r>=ROWS) return false; if (pathSet[c+","+r]) return false; if (towerAt(c,r)) return false; return true; }
  function placeTower(c,r){ var def=TOWERS[G.buildSel]; if (!def||G.gold<def.cost){ showToast("골드가 부족합니다"); return; }
    G.gold-=def.cost; var t={ defIndex:G.buildSel, key:def.key, name:def.name, color:def.color, icon:def.icon, c:c, r:r, x:ox+(c+0.5)*cell, y:oy+(r+0.5)*cell,
      dmg:def.dmg, range:def.range, rate:def.rate, splash:def.splash, slow:def.slow, chain:def.chain, level:1, invested:def.cost, cd:0, ang:-Math.PI/2, flash:0, pop:1, tmode:def.tmode };
    G.towers.push(t); for (var i=0;i<8;i++) addParts(t.x,t.y,def.color,1,90); snd.place(); vibrate(12); updateHud(); refreshPalette(); }
  function upgradeCost(t){ return Math.round(TOWERS[t.defIndex].cost*(0.7+0.5*t.level)); }
  function upgradeTower(t){ if (t.level>=3) return; var c=upgradeCost(t); if (G.gold<c){ showToast("골드가 부족합니다"); return; }
    G.gold-=c; t.invested+=c; t.level+=1; t.dmg=Math.round(t.dmg*1.6); t.range*=1.1; t.rate*=1.12; if (t.chain) t.chain+=1; t.pop=1;
    for (var i=0;i<12;i++) addParts(t.x,t.y,"#ffd84d",1,110); snd.place(); vibrate(15); updateHud(); openPopup(t); refreshPalette(); }
  function sellTower(t){ var refund=Math.round(t.invested*0.6); G.gold+=refund; var idx=G.towers.indexOf(t); if (idx>=0) G.towers.splice(idx,1);
    addText(t.x,t.y,"+"+refund,"#ffd84d"); for (var i=0;i<8;i++) addParts(t.x,t.y,"#9fb2e6",1,80); snd.coin(); closePopup(); updateHud(); refreshPalette(); }
  function cycleTarget(t){ t.tmode=(t.tmode+1)%3; openPopup(t); }

  // ---- 이펙트 ----
  function addParts(x,y,color,n,spd){ var s0=spd||120; for (var i=0;i<n;i++){ var a=Math.random()*6.283, s=s0*(0.4+Math.random()*0.8); G.parts.push({x:x,y:y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:0.45+Math.random()*0.25,max:0.7,color:color,sz:1.5+Math.random()*2.5,grav:1}); } }
  function ring(x,y,color,r0,r1){ G.parts.push({x:x,y:y,life:0.35,max:0.35,color:color,ring:true,r0:r0,r1:r1}); }
  function addText(x,y,str,color){ G.texts.push({x:x,y:y,str:str,color:color,life:0.95,vy:-30}); }
  function addShake(m){ if (G.shake<m) G.shake=m; }
  function bolt(x0,y0,x1,y1,color){ var pts=[{x:x0,y:y0}], n=4; for (var i=1;i<n;i++){ var t=i/n; pts.push({x:x0+(x1-x0)*t+(Math.random()-0.5)*cell*0.5, y:y0+(y1-y0)*t+(Math.random()-0.5)*cell*0.5}); } pts.push({x:x1,y:y1}); G.bolts.push({pts:pts,life:0.18,color:color}); }

  // ---- 전투 ----
  function pickTarget(t){ var rng=t.range*cell, best=null, bv=-Infinity;
    for (var i=0;i<G.enemies.length;i++){ var e=G.enemies[i]; if (Math.hypot(e.x-t.x,e.y-t.y)>rng) continue;
      var v; if (t.tmode===1) v=-e.prog; else if (t.tmode===2) v=e.hp; else v=e.prog; if (v>bv){ bv=v; best=e; } } return best; }
  function dealDamage(e,dmg){ if (e.armor) dmg=Math.max(1,dmg-e.armor); e.hp-=dmg; e.flash=0.09; addParts(e.x,e.y,"#ffffff",1,55);
    if (e.hp<=0) killEnemy(e); }
  function killEnemy(e){ var idx=G.enemies.indexOf(e); if (idx<0) return; G.enemies.splice(idx,1);
    G.gold+=e.reward; G.kills+=1; G.combo+=1; G.comboT=2.2; G.mult=1+Math.min(2.0,Math.floor(G.combo/5)*0.25);
    G.score+=Math.round((e.type==="boss"?200:12)*G.mult);
    addParts(e.x,e.y,e.color,e.type==="boss"?28:11,e.type==="boss"?180:130); ring(e.x,e.y,e.color,e.rad*cell,e.rad*cell*2.2);
    addText(e.x,e.y,"+"+e.reward,"#ffd84d");
    if (e.type==="boss"){ snd.boom(); addShake(12); G.hitStop=0.12; G.flash=0.5; vibrate(40); } else snd.hit();
    if (G.combo>=5) showCombo(); updateHud(); }
  function towerFire(t,dt){ t.cd-=dt; if (t.cd>0) return; var target=pickTarget(t); if (!target) return; t.cd=1/t.rate;
    t.ang=Math.atan2(target.y-t.y,target.x-t.x); t.flash=0.07; var r=cell*0.34, mx=t.x+Math.cos(t.ang)*r, my=t.y+Math.sin(t.ang)*r;
    if (t.key==="tesla"){ // 체인 라이트닝(즉발)
      var hit=[target], cur=target; dealDamage(target,t.dmg); bolt(mx,my,target.x,target.y,t.color);
      for (var c=0;c<t.chain;c++){ var nx=null, nd=cell*1.8; for (var i=0;i<G.enemies.length;i++){ var e=G.enemies[i]; if (hit.indexOf(e)>=0) continue; var d=Math.hypot(e.x-cur.x,e.y-cur.y); if (d<nd){ nd=d; nx=e; } }
        if (!nx) break; bolt(cur.x,cur.y,nx.x,nx.y,t.color); dealDamage(nx,Math.round(t.dmg*0.7)); hit.push(nx); cur=nx; }
      snd.tesla(); addParts(target.x,target.y,t.color,6,90); return; }
    var spd=(t.key==="cannon")?520:(t.key==="sniper")?1400:850;
    G.shots.push({ x:mx, y:my, px:mx, py:my, tx:target.x, ty:target.y, target:target, spd:spd, dmg:t.dmg, splash:t.splash, slow:t.slow, color:t.color, kind:t.key });
    addParts(mx,my,t.color,2,70);
    if (t.key==="rapid") snd.rapid(); else if (t.key==="frost") snd.frost(); else if (t.key==="sniper") snd.snipe(); else snd.shoot(); }
  function updateShots(dt){ for (var i=G.shots.length-1;i>=0;i--){ var s=G.shots[i]; if (s.target && s.target.hp>0){ s.tx=s.target.x; s.ty=s.target.y; }
    var dx=s.tx-s.x, dy=s.ty-s.y, d=Math.hypot(dx,dy), step=s.spd*dt; s.px=s.x; s.py=s.y;
    if (d<=step+2){ if (s.splash>0){ var rad=s.splash*cell; addParts(s.tx,s.ty,"#ffcaa0",18,180); ring(s.tx,s.ty,"#ff9d5c",4,rad); addShake(7); G.flash=0.2;
        for (var k=G.enemies.length-1;k>=0;k--){ var e=G.enemies[k]; if (Math.hypot(e.x-s.tx,e.y-s.ty)<=rad) dealDamage(e,s.dmg); } snd.boom(); }
      else if (s.target && s.target.hp>0){ if (s.slow>0){ s.target.slowT=1.2; ring(s.tx,s.ty,"#9fd6ff",2,cell*0.5); addParts(s.tx,s.ty,"#cfeaff",6,80); } dealDamage(s.target,s.dmg); }
      G.shots.splice(i,1); } else { s.x+=dx/d*step; s.y+=dy/d*step; } } }
  function updateEnemies(dt){ for (var i=G.enemies.length-1;i>=0;i--){ var e=G.enemies[i]; if (e.flash>0) e.flash-=dt;
    if (e.type==="boss" && !e.enraged && e.hp<e.maxHp*0.5){ e.enraged=true; e.spd*=1.6; ring(e.x,e.y,"#ff4d4d",e.rad*cell,e.rad*cell*2.5); showBanner("보스 광폭화!","#ff6b6b"); }
    if (e.type==="healer"){ e.healT-=dt; if (e.healT<=0){ e.healT=1.0; for (var j=0;j<G.enemies.length;j++){ var o=G.enemies[j]; if (o!==e && o.hp<o.maxHp && Math.hypot(o.x-e.x,o.y-e.y)<cell*2){ o.hp=Math.min(o.maxHp,o.hp+Math.round(o.maxHp*0.04)); } } addParts(e.x,e.y,"#6effa6",3,50); } }
    var sp=e.spd; if (e.frozenT>0){ e.frozenT-=dt; sp=0; } else if (e.slowT>0){ e.slowT-=dt; sp*=0.5; }
    e.prog+=(sp*cell*dt)/totalLen;
    if (e.prog>=1){ G.lives-=e.leak; addParts(pathPx[pathPx.length-1].x,pathPx[pathPx.length-1].y,"#ff7aa8",14,140); addShake(e.type==="boss"?12:6); G.flash=0.3; vibrate(25);
      G.enemies.splice(i,1); G.combo=0; updateHud(); if (G.lives<=0){ G.lives=0; gameOver(); return; } }
    else { var p=posFromProgress(e.prog), p2=posFromProgress(Math.min(1,e.prog+0.006)); e.heading=Math.atan2(p2.y-p.y,p2.x-p.x); e.x=p.x; e.y=p.y; } } }

  // ---- 스킬 ----
  var ABIL=[ {name:"메테오", cd:24}, {name:"빙결", cd:30} ];
  function useAbility(idx){ if (!G||G.phase==="over"||G.paused) return; if (G.cd[idx]>0) return;
    if (idx===0){ G.aiming=(G.aiming==="meteor")?null:"meteor"; showToast(G.aiming?"메테오: 목표 지점을 탭하세요":"메테오 취소"); refreshAbilities(); }
    else { // 빙결
      G.cd[1]=ABIL[1].cd; for (var i=0;i<G.enemies.length;i++){ G.enemies[i].frozenT=3.0; } ring(cw/2,ch/2,"#9fd6ff",10,cw*0.6); G.flash=0.4; snd.frost(); showBanner("❄ 전체 빙결!","#9fd6ff"); refreshAbilities(); }
  }
  function dropMeteor(x,y){ G.cd[0]=ABIL[0].cd; G.aiming=null; var rad=cell*1.7, dmg=80+G.wave*12;
    for (var i=G.enemies.length-1;i>=0;i--){ var e=G.enemies[i]; if (Math.hypot(e.x-x,e.y-y)<=rad) dealDamage(e,dmg); }
    for (var k=0;k<40;k++) addParts(x,y,k%2?"#ff9d5c":"#ffd36a",1,260); ring(x,y,"#ff7a3a",6,rad*1.4); ring(x,y,"#ffd36a",6,rad);
    addShake(16); G.hitStop=0.1; G.flash=0.7; snd.meteor(); vibrate(60); showBanner("☄ 메테오!","#ff9d5c"); refreshAbilities(); }

  function waveCleared(){ var bonus=25+G.wave*4, interest=Math.min(80,Math.floor(G.gold*0.08)); G.gold+=bonus+interest; G.score+=50+G.wave*10;
    var st=STAGES[G.stageIdx]; if (st.clearWave>0 && G.wave>=st.clearWave){ stageClear(); return; }
    G.phase="build"; showToast("웨이브 "+G.wave+" 클리어  +"+bonus+"G · 이자 +"+interest+"G"); snd.coin(); updateHud(); updateStartBtn(); }
  function calcStars(){ var f=G.lives/G.maxLives; return f>=0.8?3:(f>=0.4?2:1); }
  function recordResult(stars){ var rec=stageRec(G.stageIdx), improved=false;
    if (G.wave>rec.bestWave){ rec.bestWave=G.wave; improved=true; } if (G.score>rec.bestScore){ rec.bestScore=G.score; improved=true; }
    if (stars>rec.stars){ rec.stars=stars; improved=true; } if (G.score>SAVE.bestScore){ SAVE.bestScore=G.score; improved=true; } return {rec:rec, improved:improved}; }
  function starStr(n){ var s=""; for (var i=0;i<3;i++) s+=(i<n?"★":"☆"); return s; }
  function stageClear(){ G.phase="over"; snd.win(); var stars=calcStars(); var r=recordResult(stars); r.rec.cleared=true;
    var nextIdx=G.stageIdx+1; if (nextIdx<STAGES.length && SAVE.unlocked<nextIdx) SAVE.unlocked=nextIdx; saveGame();
    document.getElementById("scStars").textContent=starStr(stars);
    document.getElementById("scStars").style.color="#ffd84d";
    document.getElementById("scSub").innerHTML=STAGES[G.stageIdx].name+" 돌파!<br/>점수 "+G.score+" · 처치 "+G.kills+"마리 · 기지 "+G.lives+"/"+G.maxLives;
    document.getElementById("scRec").textContent=(r.improved?"신기록! ":"")+"최고 점수 "+r.rec.bestScore;
    var nb=document.getElementById("nextBtn"); if (nextIdx<STAGES.length){ nb.style.display=""; nb.textContent="다음 스테이지 ▶ "+STAGES[nextIdx].short; }
    else { nb.style.display="none"; document.getElementById("scSub").innerHTML+="<br/><br/>모든 스테이지 클리어! 사령관님, 최강입니다 🏆"; }
    document.getElementById("stageclear").classList.remove("hide"); updateStartBtn(); }
  function gameOver(){ G.phase="over"; snd.lose(); addShake(14); G.flash=0.6; var r=recordResult(0); saveGame();
    document.getElementById("goSub").innerHTML=STAGES[G.stageIdx].name+"<br/>도달 웨이브 "+G.wave+" · 점수 "+G.score+" · 처치 "+G.kills;
    document.getElementById("goRec").textContent=(r.improved?"신기록 달성! ":"")+"이 스테이지 최고 웨이브 "+r.rec.bestWave;
    document.getElementById("gameover").classList.remove("hide"); updateStartBtn(); }

  // ---- 렌더 헬퍼 ----
  function circle(x,y,r){ ctx.beginPath(); ctx.arc(x,y,r,0,6.2832); ctx.fill(); }
  function rrect(x,y,w,h,r){ ctx.beginPath(); ctx.moveTo(x+r,y); ctx.arcTo(x+w,y,x+w,y+h,r); ctx.arcTo(x+w,y+h,x,y+h,r); ctx.arcTo(x,y+h,x,y,r); ctx.arcTo(x,y,x+w,y,r); ctx.closePath(); }

  function draw(){ var th=G.theme, sh=G.shake||0, sx=(Math.random()-0.5)*sh, sy=(Math.random()-0.5)*sh;
    ctx.setTransform(dpr,0,0,dpr,sx*dpr,sy*dpr);
    var bg=ctx.createLinearGradient(0,0,0,ch); bg.addColorStop(0,th.top); bg.addColorStop(1,th.bot); ctx.fillStyle=bg; ctx.fillRect(-8,-8,cw+16,ch+16);
    drawAmbient(th);
    drawTerrain(th); drawPath(th); drawEndpoints();
    if (G.buildSel>=0){ ctx.fillStyle="rgba(126,240,255,0.10)"; ctx.strokeStyle="rgba(126,240,255,0.35)"; ctx.lineWidth=1.5;
      for (var rr=0;rr<ROWS;rr++){ for (var cc=0;cc<COLS;cc++){ if (buildable(cc,rr)){ rrect(ox+cc*cell+3,oy+rr*cell+3,cell-6,cell-6,6); ctx.fill(); ctx.stroke(); } } } }
    if (G.selTower) drawRange(G.selTower);
    if (G.aiming==="meteor"){ ctx.strokeStyle="rgba(255,157,92,0.6)"; ctx.lineWidth=2; for (var gi=0;gi<ROWS;gi++){} }
    for (var ti=0;ti<G.towers.length;ti++) drawTower(G.towers[ti]);
    for (var ei=0;ei<G.enemies.length;ei++) drawEnemy(G.enemies[ei]);
    for (var si=0;si<G.shots.length;si++) drawShot(G.shots[si]);
    drawBolts(); drawParticles(); drawTexts();
    var vg=ctx.createRadialGradient(cw/2,ch*0.42,cw*0.3,cw/2,ch*0.5,cw*0.85); vg.addColorStop(0,"rgba(0,0,0,0)"); vg.addColorStop(1,"rgba(0,0,0,0.45)");
    ctx.fillStyle=vg; ctx.fillRect(-8,-8,cw+16,ch+16);
    if (G.flash>0){ ctx.fillStyle="rgba(255,255,255,"+(G.flash*0.5)+")"; ctx.fillRect(-8,-8,cw+16,ch+16); } }

  function drawAmbient(th){ for (var i=0;i<G.amb.length;i++){ var a=G.amb[i]; ctx.globalAlpha=a.al;
    if (a.kind==="snow"||a.kind==="dust"||a.kind==="embers"){ ctx.fillStyle=th.ac; circle(a.x,a.y,a.s); }
    else if (a.kind==="clouds"){ ctx.fillStyle=th.ac; ctx.globalAlpha=a.al*0.25; rrect(a.x,a.y,a.s*6,a.s*2,a.s); ctx.fill(); }
    else { ctx.fillStyle=th.ac; circle(a.x,a.y,a.s); } ctx.globalAlpha=1; } }
  function drawTerrain(th){ for (var r=0;r<ROWS;r++){ for (var c=0;c<COLS;c++){ if (pathSet[c+","+r]) continue; var x=ox+c*cell, y=oy+r*cell;
    var g=ctx.createLinearGradient(x,y,x,y+cell); g.addColorStop(0,th.t1); g.addColorStop(1,th.t2); ctx.fillStyle=g; rrect(x+2,y+2,cell-4,cell-4,6); ctx.fill();
    ctx.fillStyle="rgba(255,255,255,0.05)"; rrect(x+3,y+3,cell-6,(cell-6)*0.42,5); ctx.fill(); } } }
  function drawPath(th){ ctx.lineJoin="round"; ctx.lineCap="round";
    ctx.strokeStyle="rgba(0,0,0,0.35)"; ctx.lineWidth=Math.max(11,cell*0.7); strokePath();
    ctx.strokeStyle=th.road; ctx.lineWidth=Math.max(8,cell*0.52); strokePath();
    ctx.strokeStyle=th.roadHi; ctx.lineWidth=Math.max(5,cell*0.36); strokePath();
    ctx.save(); ctx.setLineDash([Math.max(4,cell*0.16),Math.max(8,cell*0.34)]); ctx.lineDashOffset=-(now*cell*1.6)%100000;
    ctx.strokeStyle="rgba(255,255,255,0.4)"; ctx.lineWidth=Math.max(2,cell*0.08); strokePath(); ctx.restore(); }
  function strokePath(){ ctx.beginPath(); for (var i=0;i<pathPx.length;i++){ if (i===0) ctx.moveTo(pathPx[i].x,pathPx[i].y); else ctx.lineTo(pathPx[i].x,pathPx[i].y); } ctx.stroke(); }
  function drawEndpoints(){ var sP=pathPx[0], eP=pathPx[pathPx.length-1]; var pr=cell*0.26+Math.sin(now*4)*cell*0.03;
    ctx.shadowColor="#5cd1ff"; ctx.shadowBlur=14; ctx.fillStyle="rgba(92,209,255,0.2)"; circle(sP.x,sP.y,pr*1.5); ctx.fillStyle="#5cd1ff"; circle(sP.x,sP.y,pr*0.5); ctx.shadowBlur=0;
    ctx.strokeStyle="rgba(146,222,255,0.8)"; ctx.lineWidth=2; ctx.beginPath(); ctx.arc(sP.x,sP.y,pr,0,6.2832); ctx.stroke(); drawBase(eP.x,eP.y); }
  function drawBase(x,y){ var s=cell*0.42; ctx.save(); ctx.translate(x,y); var hpf=Math.max(0,G.lives)/G.maxLives;
    ctx.strokeStyle="rgba(255,122,168,0.25)"; ctx.lineWidth=4; ctx.beginPath(); ctx.arc(0,0,s*1.25,0,6.2832); ctx.stroke();
    ctx.strokeStyle=hpf>0.5?"#7bff8e":(hpf>0.25?"#ffd84d":"#ff6b6b"); ctx.lineWidth=4; ctx.beginPath(); ctx.arc(0,0,s*1.25,-1.5708,-1.5708+6.2832*hpf); ctx.stroke();
    ctx.shadowColor="rgba(255,122,168,0.5)"; ctx.shadowBlur=12; ctx.fillStyle="#22325f"; ctx.strokeStyle="#ff7aa8"; ctx.lineWidth=2.5; rrect(-s*0.7,-s*0.5,s*1.4,s,5); ctx.fill(); ctx.stroke(); ctx.shadowBlur=0;
    ctx.fillStyle="#ff7aa8"; var bw=s*0.32; for (var i=-1;i<=1;i++){ ctx.fillRect(i*bw-bw*0.42,-s*0.78,bw*0.84,s*0.32); }
    ctx.fillStyle="#ffd84d"; ctx.font="800 "+Math.round(s*0.7)+"px sans-serif"; ctx.textAlign="center"; ctx.textBaseline="middle"; ctx.fillText("⚑",0,s*0.02); ctx.textBaseline="alphabetic"; ctx.restore(); }
  function drawRange(t){ ctx.save(); ctx.fillStyle="rgba(126,240,255,0.08)"; ctx.beginPath(); ctx.arc(t.x,t.y,t.range*cell,0,6.2832); ctx.fill();
    ctx.setLineDash([6,5]); ctx.lineDashOffset=-now*18; ctx.strokeStyle="rgba(126,240,255,0.7)"; ctx.lineWidth=1.5; ctx.beginPath(); ctx.arc(t.x,t.y,t.range*cell,0,6.2832); ctx.stroke(); ctx.restore(); }
  function drawTower(t){ var r=cell*0.36; if (t.flash>0) t.flash=Math.max(0,t.flash-0.016); if (t.pop>0) t.pop=Math.max(0,t.pop-0.06); var pop=1+(t.pop||0)*0.18;
    ctx.save(); ctx.translate(t.x,t.y); ctx.scale(pop,pop);
    ctx.fillStyle="rgba(0,0,0,0.35)"; ctx.beginPath(); ctx.ellipse(0,r*0.55,r*0.95,r*0.42,0,0,6.2832); ctx.fill();
    var base=ctx.createLinearGradient(0,-r,0,r); base.addColorStop(0,"#27365f"); base.addColorStop(1,"#141e3c");
    ctx.shadowColor=t.color; ctx.shadowBlur=8; ctx.fillStyle=base; ctx.strokeStyle=t.color; ctx.lineWidth=2.5; ctx.beginPath(); ctx.arc(0,0,r,0,6.2832); ctx.fill(); ctx.stroke(); ctx.shadowBlur=0;
    ctx.fillStyle=t.color; ctx.globalAlpha=0.16; circle(0,0,r*0.7); ctx.globalAlpha=1;
    ctx.rotate(t.ang); ctx.fillStyle=t.color;
    if (t.key==="cannon"){ rrect(-r*0.2,-r*0.34,r*1.5,r*0.68,r*0.2); ctx.fill(); ctx.fillStyle="#0c1428"; circle(r*1.25,0,r*0.16); }
    else if (t.key==="rapid"){ rrect(0,-r*0.4,r*1.35,r*0.22,3); ctx.fill(); rrect(0,r*0.18,r*1.35,r*0.22,3); ctx.fill(); }
    else if (t.key==="frost"){ ctx.beginPath(); ctx.moveTo(0,-r*0.3); ctx.lineTo(r*1.3,0); ctx.lineTo(0,r*0.3); ctx.closePath(); ctx.fill(); }
    else if (t.key==="sniper"){ rrect(0,-r*0.12,r*1.7,r*0.24,3); ctx.fill(); ctx.fillStyle="#0c1428"; circle(r*1.6,0,r*0.1); }
    else if (t.key==="tesla"){ rrect(0,-r*0.14,r*1.1,r*0.28,4); ctx.fill(); ctx.fillStyle="#fff"; circle(r*1.15,0,r*0.18); }
    else { rrect(0,-r*0.16,r*1.35,r*0.32,4); ctx.fill(); }
    if (t.flash>0){ ctx.globalAlpha=t.flash*12; ctx.fillStyle="#ffffff"; circle(r*1.3,0,r*0.4*(0.5+t.flash*6)); ctx.globalAlpha=1; }
    ctx.rotate(-t.ang);
    ctx.fillStyle="#fff"; ctx.textAlign="center"; ctx.textBaseline="middle"; ctx.font="700 "+Math.round(cell*0.24)+"px sans-serif"; ctx.fillText(t.icon,0,0); ctx.textBaseline="alphabetic";
    ctx.restore();
    if (t.level>1){ ctx.fillStyle="#ffd84d"; ctx.font="800 "+Math.round(cell*0.2)+"px sans-serif"; ctx.textAlign="center"; var st=""; for (var i=1;i<t.level;i++) st+="★"; ctx.fillText(st,t.x,t.y-r*1.15); } }
  function drawEnemy(e){ var r=e.rad*cell, bob=Math.sin(now*6+e.ph)*r*0.08; ctx.save(); ctx.translate(e.x,e.y+bob);
    ctx.fillStyle="rgba(0,0,0,0.3)"; ctx.beginPath(); ctx.ellipse(0,r*0.85-bob,r*0.8,r*0.32,0,0,6.2832); ctx.fill();
    var body=(e.flash>0)?"#ffffff":e.color;
    if (e.type==="fast"||e.type==="swarm"){ ctx.rotate(e.heading); ctx.fillStyle=body; ctx.beginPath(); ctx.moveTo(r,0); ctx.lineTo(-r*0.7,-r*0.7); ctx.lineTo(-r*0.35,0); ctx.lineTo(-r*0.7,r*0.7); ctx.closePath(); ctx.fill();
      ctx.strokeStyle="rgba(255,255,255,0.5)"; ctx.lineWidth=1.2; ctx.stroke(); ctx.rotate(-e.heading); }
    else if (e.type==="tank"){ ctx.fillStyle=body; ctx.strokeStyle="#2a3a2a"; ctx.lineWidth=2.5; hexPath(r); ctx.fill(); ctx.stroke(); ctx.fillStyle="rgba(0,0,0,0.25)"; circle(0,0,r*0.42); }
    else if (e.type==="shield"){ ctx.fillStyle=body; circle(0,0,r*0.8); ctx.strokeStyle="#cfe0ff"; ctx.lineWidth=3; ctx.globalAlpha=0.8; ctx.beginPath(); ctx.arc(0,0,r,0,6.2832); ctx.stroke(); ctx.globalAlpha=1;
      ctx.fillStyle="#cfe0ff"; ctx.font="800 "+Math.round(r)+"px sans-serif"; ctx.textAlign="center"; ctx.textBaseline="middle"; ctx.fillText("🛡",0,0); ctx.textBaseline="alphabetic"; }
    else if (e.type==="healer"){ ctx.fillStyle=body; circle(0,0,r); var pulse=0.6+0.4*Math.abs(Math.sin(now*4)); ctx.fillStyle="rgba(110,255,166,"+(0.2*pulse)+")"; circle(0,0,r*1.8);
      ctx.fillStyle="#0a3a22"; ctx.fillRect(-r*0.18,-r*0.5,r*0.36,r); ctx.fillRect(-r*0.5,-r*0.18,r,r*0.36); }
    else if (e.type==="boss"){ var aur=0.5+0.5*Math.abs(Math.sin(now*3)); ctx.globalAlpha=0.25*aur; ctx.fillStyle=e.enraged?"#ff4d4d":"#c77bff"; circle(0,0,r*1.5); ctx.globalAlpha=1;
      ctx.fillStyle=body; ctx.strokeStyle=e.enraged?"#ff4d4d":"#7a3fb0"; ctx.lineWidth=3; starPath(r,10,0.78); ctx.fill(); ctx.stroke();
      ctx.fillStyle="#ffd84d"; ctx.font="800 "+Math.round(r*0.9)+"px sans-serif"; ctx.textAlign="center"; ctx.textBaseline="middle"; ctx.fillText("👑",0,-r*0.05); ctx.textBaseline="alphabetic"; }
    else { ctx.fillStyle=body; circle(0,0,r); ctx.fillStyle="rgba(255,255,255,0.18)"; circle(-r*0.3,-r*0.32,r*0.32);
      ctx.fillStyle="#1a1430"; circle(-r*0.28,-r*0.05,r*0.16); circle(r*0.28,-r*0.05,r*0.16); ctx.fillStyle="#fff"; circle(-r*0.23,-r*0.1,r*0.06); circle(r*0.33,-r*0.1,r*0.06); }
    if (e.frozenT>0){ ctx.fillStyle="rgba(159,214,255,0.4)"; circle(0,0,r); ctx.strokeStyle="#cfeaff"; ctx.lineWidth=2; ctx.beginPath(); ctx.arc(0,0,r+2,0,6.2832); ctx.stroke(); }
    else if (e.slowT>0){ ctx.strokeStyle="#9fd6ff"; ctx.lineWidth=2; ctx.globalAlpha=0.8; ctx.beginPath(); ctx.arc(0,0,r+2,0,6.2832); ctx.stroke(); ctx.globalAlpha=1; }
    ctx.restore();
    if (e.hp<e.maxHp||e.type==="boss"){ var w=Math.max(r*2,cell*0.5), hpf=Math.max(0,e.hp/e.maxHp), yy=e.y+bob-r-8;
      ctx.fillStyle="rgba(0,0,0,0.55)"; rrect(e.x-w/2,yy,w,4.5,2); ctx.fill(); ctx.fillStyle=hpf>0.5?"#7bff8e":(hpf>0.25?"#ffd84d":"#ff6b6b"); rrect(e.x-w/2,yy,w*hpf,4.5,2); ctx.fill(); } }
  function hexPath(r){ ctx.beginPath(); for (var i=0;i<6;i++){ var a=1.0472*i-0.5236; var px=Math.cos(a)*r, py=Math.sin(a)*r; if(i===0)ctx.moveTo(px,py); else ctx.lineTo(px,py); } ctx.closePath(); }
  function starPath(r,sp,inner){ ctx.beginPath(); for (var i=0;i<sp*2;i++){ var rr=(i%2===0)?r:r*inner; var a=(3.1416/sp)*i; var px=Math.cos(a)*rr, py=Math.sin(a)*rr; if(i===0)ctx.moveTo(px,py); else ctx.lineTo(px,py); } ctx.closePath(); }
  function drawShot(s){ if (s.kind==="cannon"){ ctx.shadowColor="#ff9d5c"; ctx.shadowBlur=8; ctx.fillStyle="#3a2a1a"; circle(s.x,s.y,Math.max(3,cell*0.13)); ctx.fillStyle="#ff9d5c"; circle(s.x,s.y,Math.max(1.5,cell*0.06)); ctx.shadowBlur=0; }
    else { ctx.shadowColor=s.color; ctx.shadowBlur=6; ctx.strokeStyle=s.color; ctx.lineWidth=Math.max(2,cell*(s.kind==="sniper"?0.06:0.09)); ctx.lineCap="round"; ctx.beginPath(); ctx.moveTo(s.px,s.py); ctx.lineTo(s.x,s.y); ctx.stroke(); ctx.fillStyle="#fff"; circle(s.x,s.y,Math.max(1.5,cell*0.05)); ctx.shadowBlur=0; } }
  function drawBolts(){ for (var i=0;i<G.bolts.length;i++){ var b=G.bolts[i]; ctx.globalAlpha=Math.max(0,b.life/0.18); ctx.shadowColor=b.color; ctx.shadowBlur=10; ctx.strokeStyle=b.color; ctx.lineWidth=2.5; ctx.lineJoin="round";
    ctx.beginPath(); for (var j=0;j<b.pts.length;j++){ if(j===0)ctx.moveTo(b.pts[j].x,b.pts[j].y); else ctx.lineTo(b.pts[j].x,b.pts[j].y); } ctx.stroke(); ctx.shadowBlur=0; ctx.globalAlpha=1; } }
  function drawParticles(){ for (var i=0;i<G.parts.length;i++){ var p=G.parts[i]; var a=Math.max(0,p.life/p.max);
    if (p.ring){ ctx.globalAlpha=a*0.8; ctx.strokeStyle=p.color; ctx.lineWidth=2.5; var rr=p.r0+(p.r1-p.r0)*(1-a); ctx.beginPath(); ctx.arc(p.x,p.y,rr,0,6.2832); ctx.stroke(); ctx.globalAlpha=1; }
    else { ctx.globalAlpha=a; ctx.fillStyle=p.color; circle(p.x,p.y,p.sz*(0.4+a*0.6)); ctx.globalAlpha=1; } } }
  function drawTexts(){ ctx.textAlign="center"; ctx.font="800 14px sans-serif"; ctx.lineWidth=3; ctx.strokeStyle="rgba(0,0,0,0.55)";
    for (var i=0;i<G.texts.length;i++){ var t=G.texts[i]; ctx.globalAlpha=Math.max(0,t.life); ctx.strokeText(t.str,t.x,t.y); ctx.fillStyle=t.color; ctx.fillText(t.str,t.x,t.y); ctx.globalAlpha=1; } }

  // ---- 루프 ----
  var last=0;
  function tick(ts){ requestAnimationFrame(tick); if (!last) last=ts; var dt=(ts-last)/1000; last=ts; if (dt>0.05) dt=0.05; now+=dt;
    if (G){ updateAmbient(dt); if (G.flash>0) G.flash=Math.max(0,G.flash-dt*2.2); for (var i=G.bolts.length-1;i>=0;i--){ G.bolts[i].life-=dt; if (G.bolts[i].life<=0) G.bolts.splice(i,1); } }
    if (G && !G.paused && G.phase!=="over"){ if (G.hitStop>0){ G.hitStop-=dt; } else step(dt*G.speed); }
    if (G) draw(); }
  function step(dt){ if (G.warnTimer>0) G.warnTimer-=dt; if (G.shake>0) G.shake=Math.max(0,G.shake-dt*40);
    if (G.comboT>0){ G.comboT-=dt; if (G.comboT<=0){ G.combo=0; G.mult=1; document.getElementById("combo").classList.remove("show"); } }
    if (G.cd[0]>0){ G.cd[0]=Math.max(0,G.cd[0]-dt); } if (G.cd[1]>0){ G.cd[1]=Math.max(0,G.cd[1]-dt); } refreshAbilities();
    if (G.phase==="wave" && G.spawnQ.length>0){ G.spawnTimer-=dt; if (G.spawnTimer<=0){ var s=G.spawnQ.shift(); spawnOne(s); G.spawnTimer=(s.type==="swarm")?0.22:G.spawnGap; } }
    for (var i=0;i<G.towers.length;i++) towerFire(G.towers[i],dt); updateShots(dt); updateEnemies(dt); if (G.phase==="over") return;
    for (var p=G.parts.length-1;p>=0;p--){ var pa=G.parts[p]; if (!pa.ring){ pa.x+=pa.vx*dt; pa.y+=pa.vy*dt; if (pa.grav) pa.vy+=200*dt; } pa.life-=dt; if (pa.life<=0) G.parts.splice(p,1); }
    for (var t=G.texts.length-1;t>=0;t--){ var tx=G.texts[t]; tx.y+=tx.vy*dt; tx.vy+=18*dt; tx.life-=dt; if (tx.life<=0) G.texts.splice(t,1); }
    if (G.phase==="wave" && G.spawnQ.length===0 && G.enemies.length===0) waveCleared(); }
  function updateAmbient(dt){ G.ambT-=dt; var th=G.theme;
    if (G.ambT<=0){ G.ambT=(th.amb==="clouds")?1.2:0.12; if (G.amb.length<70){ var kind=th.amb;
      var a={kind:kind, x:Math.random()*cw, y:-5, s:1+Math.random()*2, al:0.5, vx:0, vy:0};
      if (kind==="snow"){ a.vy=cell*1.2; a.vx=Math.sin(now)*10; a.s=1.5+Math.random()*2.5; }
      else if (kind==="embers"){ a.y=ch+5; a.vy=-cell*1.5; a.vx=(Math.random()-0.5)*20; a.s=1+Math.random()*2; a.al=0.7; }
      else if (kind==="dust"){ a.vy=cell*0.4; a.vx=cell*0.8; a.x=-5; a.y=Math.random()*ch; a.al=0.3; }
      else if (kind==="torch"){ a.kind="embers"; a.y=ch+5; a.vy=-cell*1.0; a.vx=(Math.random()-0.5)*14; a.al=0.6; }
      else { a.kind="clouds"; a.x=-a.s*6; a.y=10+Math.random()*ch*0.35; a.vx=cell*0.3; a.al=0.4; }
      G.amb.push(a); } }
    for (var i=G.amb.length-1;i>=0;i--){ var a=G.amb[i]; a.x+=a.vx*dt; a.y+=a.vy*dt; if (a.kind==="embers") a.al-=dt*0.3;
      if (a.y>ch+20||a.y<-30||a.x>cw+40||a.x<-60||a.al<=0) G.amb.splice(i,1); } }

  // ---- HUD/UI ----
  function bump(id){ var el=document.getElementById(id); el.classList.remove("pulse"); void el.offsetWidth; el.classList.add("pulse"); }
  var prevHud={g:0,l:0,w:0,s:0};
  function updateHud(){ if (G.gold!==prevHud.g){ document.getElementById("goldV").textContent=G.gold; bump("goldV"); prevHud.g=G.gold; }
    if (G.lives!==prevHud.l){ document.getElementById("lifeV").textContent=G.lives; bump("lifeV"); prevHud.l=G.lives; }
    if (G.wave!==prevHud.w){ document.getElementById("waveV").textContent=G.wave; bump("waveV"); prevHud.w=G.wave; }
    if (G.score!==prevHud.s){ document.getElementById("scoreV").textContent=G.score; prevHud.s=G.score; } refreshPalette(); }
  var startBtn=document.getElementById("startBtn");
  function updateStartBtn(){ if (!G) return; var cwv=STAGES[G.stageIdx].clearWave;
    if (G.phase==="wave"){ startBtn.disabled=true; startBtn.textContent="진행 중... ("+G.wave+(cwv>0?"/"+cwv:"")+")"; }
    else if (G.phase==="over"){ startBtn.disabled=true; startBtn.textContent="웨이브 시작"; }
    else { startBtn.disabled=false; startBtn.textContent=(nextIsBoss()?"⚠ 보스 웨이브":(G.wave===0?"⚔ 시작":"⚔ 다음"))+" ("+(G.wave+1)+(cwv>0?"/"+cwv:"")+")"; } }
  var abEls=[document.getElementById("ab0"), document.getElementById("ab1")];
  function refreshAbilities(){ if (!G) return; for (var i=0;i<2;i++){ var el=abEls[i], cd=G.cd[i], max=ABIL[i].cd;
    el.querySelector(".cd").style.height=(cd>0?(cd/max*100):0)+"%";
    el.classList.toggle("ready", cd<=0 && !(i===0&&G.aiming!=="meteor"&&false));
    el.classList.toggle("arming", i===0 && G.aiming==="meteor");
    el.querySelector(".lab").textContent=(cd>0)?((i===0?"☄️ ":"❄️ ")+Math.ceil(cd)+"s"):(i===0?"☄️ 메테오":"❄️ 빙결"); } }
  var toastEl=document.getElementById("toast"), toastTmr=null;
  function showToast(m){ toastEl.textContent=m; toastEl.classList.add("show"); if (toastTmr) clearTimeout(toastTmr); toastTmr=setTimeout(function(){ toastEl.classList.remove("show"); },1500); }
  var bannerEl=document.getElementById("banner"), bannerTmr=null;
  function showBanner(m,c){ bannerEl.textContent=m; bannerEl.style.color=c||"#fff"; bannerEl.classList.remove("show"); void bannerEl.offsetWidth; bannerEl.classList.add("show");
    if (bannerTmr) clearTimeout(bannerTmr); bannerTmr=setTimeout(function(){ bannerEl.classList.remove("show"); },1300); }
  var comboEl=document.getElementById("combo");
  function showCombo(){ comboEl.textContent="COMBO x"+G.combo+"  (x"+G.mult.toFixed(2)+")"; comboEl.classList.add("show"); }

  // 팔레트
  var paletteEl=document.getElementById("palette");
  function buildPalette(){ paletteEl.innerHTML=""; for (var i=0;i<TOWERS.length;i++){ (function(idx){ var d=TOWERS[idx], el=document.createElement("div"); el.className="tw"; el.style.setProperty("--c",d.color);
    el.innerHTML='<div class="ic">'+d.icon+'</div><div class="nm">'+d.name+'</div><div class="cost">'+d.cost+'</div>'; el.addEventListener("click", function(){ selectPalette(idx); }); paletteEl.appendChild(el); })(i); } }
  function refreshPalette(){ var els=paletteEl.children; for (var i=0;i<els.length;i++){ if (i===G.buildSel) els[i].classList.add("sel"); else els[i].classList.remove("sel"); if (G && G.gold<TOWERS[i].cost) els[i].classList.add("poor"); else els[i].classList.remove("poor"); } }
  function selectPalette(idx){ audio(); G.aiming=null; G.buildSel=(G.buildSel===idx)?-1:idx; G.selTower=null; closePopup(); refreshPalette(); refreshAbilities(); }

  // 팝업
  var popup=document.getElementById("popup");
  function openPopup(t){ G.selTower=t; G.buildSel=-1; G.aiming=null; refreshPalette();
    var up=document.getElementById("upBtn"); if (t.level>=3){ up.disabled=true; up.textContent="최대"; } else { up.disabled=false; up.textContent="⬆ "+upgradeCost(t)+"G"; }
    document.getElementById("tgtBtn").textContent="우선:"+TMODES[t.tmode];
    document.getElementById("sellBtn").textContent="판매 +"+Math.round(t.invested*0.6);
    document.getElementById("popHead").textContent=t.name+"포탑 · Lv."+t.level+"  (공격 "+t.dmg+" · 사거리 "+t.range.toFixed(1)+(t.chain?" · 연쇄 "+t.chain:"")+")"; popup.style.display="block"; }
  function closePopup(){ if (G) G.selTower=null; popup.style.display="none"; }
  document.getElementById("upBtn").addEventListener("click", function(){ if (G.selTower) upgradeTower(G.selTower); });
  document.getElementById("tgtBtn").addEventListener("click", function(){ if (G.selTower) cycleTarget(G.selTower); });
  document.getElementById("sellBtn").addEventListener("click", function(){ if (G.selTower) sellTower(G.selTower); });
  document.getElementById("closeBtn").addEventListener("click", closePopup);

  // 탭
  function onTap(clientX,clientY){ if (!G||G.phase==="over"||G.paused) return; var rect=cv.getBoundingClientRect(); var x=clientX-rect.left, y=clientY-rect.top;
    if (G.aiming==="meteor"){ dropMeteor(x,y); return; }
    var c=Math.floor((x-ox)/cell), r=Math.floor((y-oy)/cell);
    if (c<0||r<0||c>=COLS||r>=ROWS){ closePopup(); G.buildSel=-1; refreshPalette(); return; }
    var t=towerAt(c,r); if (t){ openPopup(t); return; } if (G.buildSel>=0 && buildable(c,r)){ placeTower(c,r); return; } closePopup(); }
  cv.addEventListener("click", function(ev){ onTap(ev.clientX,ev.clientY); });
  cv.addEventListener("touchstart", function(ev){ if (ev.touches && ev.touches.length){ var t=ev.touches[0]; onTap(t.clientX,t.clientY); ev.preventDefault(); } }, {passive:false});

  // 버튼
  startBtn.addEventListener("click", function(){ audio(); if (SAVE.music) startMusic(); startWave(); });
  document.getElementById("speedBtn").addEventListener("click", function(){ if (!G) return; G.speed=(G.speed===1)?2:(G.speed===2)?3:1; this.textContent=G.speed+"x"; });
  var pauseBtn=document.getElementById("pauseBtn");
  function togglePause(){ if (!G||G.phase==="over") return; G.paused=!G.paused; pauseBtn.textContent=G.paused?"▶":"II";
    document.getElementById("pausemenu").classList.toggle("hide", !G.paused); }
  pauseBtn.addEventListener("click", togglePause);
  abEls[0].addEventListener("click", function(){ useAbility(0); }); abEls[1].addEventListener("click", function(){ useAbility(1); });

  // 일시정지 메뉴
  document.getElementById("resumeBtn").addEventListener("click", togglePause);
  document.getElementById("pmMenuBtn").addEventListener("click", function(){ G.paused=false; document.getElementById("pausemenu").classList.add("hide"); pauseBtn.textContent="II"; backToMenu(); });
  function refreshSettings(){ document.getElementById("soundBtn").textContent="효과음: "+(SAVE.sound?"켜짐":"꺼짐"); document.getElementById("musicBtn").textContent="배경음: "+(SAVE.music?"켜짐":"꺼짐"); }
  document.getElementById("soundBtn").addEventListener("click", function(){ SAVE.sound=!SAVE.sound; saveGame(); refreshSettings(); });
  document.getElementById("musicBtn").addEventListener("click", function(){ SAVE.music=!SAVE.music; saveGame(); refreshSettings(); if (SAVE.music) startMusic(); else stopMusic(); });

  // 스테이지 선택
  var stageListEl=document.getElementById("stageList");
  function renderStageList(){ stageListEl.innerHTML=""; for (var i=0;i<STAGES.length;i++){ (function(idx){ var st=STAGES[idx], locked=idx>SAVE.unlocked, rec=SAVE.stages[idx];
    var recTxt=locked?"🔒 이전 스테이지를 클리어하면 열립니다":(rec&&rec.cleared)?(starStr(rec.stars||0)+" · 최고 "+rec.bestScore):(rec&&rec.bestWave>0)?("최고 웨이브 "+rec.bestWave):"미도전";
    var el=document.createElement("div"); el.className="stage"+(locked?" locked":"");
    el.innerHTML='<div class="emo">'+(locked?"🔒":st.emo)+'</div><div class="mid"><div class="sn">'+st.name+'</div><div class="sd">'+st.desc+'</div><div class="sr">'+recTxt+'</div></div><button class="go">'+(locked?"🔒":"▶")+'</button>';
    if (!locked) el.addEventListener("click", function(){ startGame(idx); }); stageListEl.appendChild(el); })(i); } }
  function showMenuRecord(){ document.getElementById("menuRec").textContent=SAVE.bestScore>0?("사령관 최고 점수 "+SAVE.bestScore):"사령관, 첫 출격을 기다립니다"; }

  // 시작/메뉴
  function startGame(idx){ audio(); if (SAVE.music) startMusic(); setStage(idx); resize(); G=newGame(idx); prevHud={g:-1,l:-1,w:-1,s:-1};
    buildPalette(); refreshPalette(); refreshAbilities(); updateHud(); updateStartBtn(); closePopup(); pauseBtn.textContent="II"; document.getElementById("speedBtn").textContent="1x";
    document.getElementById("menu").classList.add("hide"); document.getElementById("gameover").classList.add("hide"); document.getElementById("stageclear").classList.add("hide"); document.getElementById("pausemenu").classList.add("hide");
    showBanner(STAGES[idx].emo+" 출격!","#7ef0ff"); }
  function backToMenu(){ renderStageList(); showMenuRecord(); document.getElementById("gameover").classList.add("hide"); document.getElementById("stageclear").classList.add("hide"); document.getElementById("pausemenu").classList.add("hide"); document.getElementById("menu").classList.remove("hide"); }
  document.getElementById("retryBtn").addEventListener("click", function(){ startGame(G.stageIdx); });
  document.getElementById("goMenuBtn").addEventListener("click", backToMenu);
  document.getElementById("scMenuBtn").addEventListener("click", backToMenu);
  document.getElementById("nextBtn").addEventListener("click", function(){ var n=G.stageIdx+1; if (n<STAGES.length) startGame(n); else backToMenu(); });

  function onNativeMsg(ev){ var data=ev.data; try { var m=(typeof data==="string")?JSON.parse(data):data; if (m && m.type==="back"){ if (G && G.phase==="over") backToMenu(); else togglePause(); } } catch (e) {} }
  document.addEventListener("message", onNativeMsg); window.addEventListener("message", onNativeMsg);

  // 초기화
  setStage(0); resize(); buildPalette(); renderStageList(); showMenuRecord(); refreshSettings();
  G=newGame(0); prevHud={g:-1,l:-1,w:-1,s:-1}; updateHud(); updateStartBtn(); refreshAbilities();
  requestAnimationFrame(tick);
})();
</script>
</body>
</html>`;
