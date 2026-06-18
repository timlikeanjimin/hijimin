// 스파크 서바이버 — HTML5 Canvas 생존 로그라이크 (WebView/웹 단일 문서)
// 주의: 이 문자열은 RN 템플릿 리터럴이므로 내부에서 백틱 / 달러중괄호 / 백슬래시 이스케이프를 쓰지 않는다.
export const GAME_HTML = `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
<title>스파크 서바이버</title>
<style>
  :root{
    --bg:#16161F; --raised:#1E1E2A; --surface:#252533; --container:#2E2E40; --high:#383850;
    --outline:#4A4A63; --outlineS:#6A6A88; --tp:#F4F4FA; --ts:#B9B9CC; --tdis:#6E6E84; --on:#16161F;
    --primary:#7EA8FF; --primaryDim:#5577C9; --secondary:#A98BFF; --mint:#74E0C0;
    --success:#6FE39A; --danger:#FF6B7A; --warning:#FFC65C; --xp:#5BE0E6; --gold:#FFD66B;
  }
  *{ box-sizing:border-box; -webkit-tap-highlight-color:transparent; user-select:none; -webkit-user-select:none; }
  html,body{ margin:0; padding:0; height:100%; background:var(--bg); color:var(--tp); overflow:hidden;
    font-family:-apple-system,"Segoe UI",Roboto,"Noto Sans KR","Apple SD Gothic Neo",system-ui,sans-serif; }
  #app{ position:fixed; inset:0; }
  #cv{ position:absolute; inset:0; width:100%; height:100%; display:block; touch-action:none; }
  /* HUD */
  #hud{ position:absolute; left:0; right:0; top:0; padding:8px 12px 0; pointer-events:none; z-index:2; }
  #xpwrap{ position:relative; height:6px; border-radius:999px; background:var(--container); overflow:hidden; }
  #xpfill{ position:absolute; left:0; top:0; bottom:0; width:0%; border-radius:999px;
    background:linear-gradient(90deg,#3fc8cf,var(--xp)); box-shadow:inset 0 1px 0 rgba(255,255,255,.18); transition:width .18s ease; }
  #hpwrap{ position:relative; height:5px; border-radius:999px; background:var(--container); overflow:hidden; margin-top:5px; }
  #hpfill{ position:absolute; left:0; top:0; bottom:0; width:100%; border-radius:999px; background:linear-gradient(90deg,#e0556a,var(--danger)); transition:width .12s linear; }
  #hpwrap.low #hpfill{ animation:hppulse .6s ease-in-out infinite; }
  @keyframes hppulse{ 0%,100%{opacity:1;} 50%{opacity:.55;} }
  #hudrow{ display:flex; align-items:center; justify-content:space-between; margin-top:8px; }
  #lvbadge{ min-width:30px; height:28px; padding:0 8px; border-radius:999px; background:var(--high);
    display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:800; letter-spacing:.3px; box-shadow:0 2px 8px rgba(0,0,0,.35); }
  #timer{ font-size:28px; font-weight:800; font-variant-numeric:tabular-nums; letter-spacing:1px; text-shadow:0 2px 10px rgba(0,0,0,.5); }
  #goldpill{ display:flex; align-items:center; gap:6px; height:28px; padding:0 12px; border-radius:999px; background:var(--container); font-size:13px; font-weight:800; }
  #goldpill .dot{ width:10px; height:10px; border-radius:50%; background:radial-gradient(circle at 35% 35%,#FFE9A8,var(--gold)); }
  #pauseBtn{ pointer-events:auto; position:absolute; top:8px; right:12px; width:34px; height:34px; border:0; border-radius:10px;
    background:var(--container); color:var(--ts); font-size:13px; font-weight:800; opacity:0; }
  #chips{ position:absolute; left:12px; bottom:14px; display:flex; flex-wrap:wrap; gap:6px; max-width:62%; pointer-events:none; z-index:2; }
  .chip{ width:34px; height:34px; border-radius:9px; background:var(--container); box-shadow:0 2px 6px rgba(0,0,0,.35);
    display:flex; align-items:center; justify-content:center; position:relative; }
  .chip .lv{ position:absolute; right:-3px; bottom:-3px; font-size:9px; font-weight:800; background:var(--high); color:var(--tp);
    border-radius:6px; padding:0 3px; line-height:13px; }
  .chip canvas{ width:24px; height:24px; }
  /* overlay */
  .ov{ position:absolute; inset:0; z-index:6; display:flex; flex-direction:column; align-items:center; justify-content:center;
    text-align:center; padding:26px 20px; overflow-y:auto;
    background:radial-gradient(120% 80% at 50% 0%, rgba(40,40,70,.5), rgba(10,10,16,.82)); }
  .ov.hide{ display:none; }
  .logo{ font-size:40px; font-weight:800; letter-spacing:-0.5px;
    background:linear-gradient(90deg,var(--primary),var(--secondary),var(--mint)); -webkit-background-clip:text; background-clip:text; color:transparent; }
  .logosub{ margin-top:8px; font-size:14px; color:var(--ts); line-height:1.5; }
  .display{ font-size:34px; font-weight:800; letter-spacing:-0.5px; }
  .accentbar{ width:48px; height:3px; border-radius:999px; background:var(--mint); margin:10px auto 0; }
  .rec{ margin-top:12px; font-size:13px; color:var(--gold); font-weight:800; }
  .btn{ height:48px; min-width:200px; padding:0 26px; border:0; border-radius:12px; font-size:16px; font-weight:800; margin-top:14px;
    background:var(--primary); color:var(--on); box-shadow:0 4px 16px rgba(126,168,255,.28); }
  .btn:active{ transform:scale(.97); background:var(--primaryDim); }
  .btn.ghost{ background:transparent; color:var(--ts); border:1px solid var(--outlineS); box-shadow:none; height:44px; min-width:0; }
  .btn.wide{ width:100%; max-width:360px; }
  .menucards{ margin-top:18px; width:100%; max-width:380px; display:flex; gap:10px; }
  .menucards .btn{ flex:1; margin-top:0; min-width:0; }
  /* level up */
  #levelup .display{ color:var(--tp); }
  #cards{ width:100%; max-width:400px; margin-top:18px; display:flex; flex-direction:column; gap:12px; }
  .card{ display:flex; align-items:center; gap:14px; width:100%; min-height:92px; padding:16px; border-radius:16px;
    background:var(--container); position:relative; overflow:hidden; box-shadow:0 8px 24px rgba(0,0,0,.4); text-align:left;
    opacity:0; transform:translateY(16px); }
  .card.in{ animation:cardin .26s cubic-bezier(.2,.9,.3,1.3) forwards; }
  @keyframes cardin{ to{ opacity:1; transform:translateY(0);} }
  .card:active{ transform:scale(1.02); background:var(--high); }
  .card .stripe{ position:absolute; left:0; top:8px; bottom:8px; width:4px; border-radius:999px; }
  .card .tile{ width:56px; height:56px; border-radius:12px; flex:0 0 auto; display:flex; align-items:center; justify-content:center; }
  .card .tile canvas{ width:40px; height:40px; }
  .card .body{ flex:1; min-width:0; }
  .card .nm{ font-size:18px; font-weight:800; color:var(--tp); }
  .card .ds{ font-size:13px; color:var(--ts); margin-top:3px; line-height:1.35; }
  .card .lvchip{ display:inline-block; margin-top:6px; font-size:11px; font-weight:800; color:var(--ts);
    background:var(--high); border-radius:999px; padding:2px 8px; }
  .card.evolve{ box-shadow:0 8px 28px rgba(255,214,107,.35); }
  #luactions{ margin-top:14px; display:flex; gap:10px; }
  #luactions .btn{ margin-top:0; height:42px; min-width:0; padding:0 18px; font-size:14px; }
  /* shop */
  #shopList{ width:100%; max-width:420px; margin-top:14px; display:flex; flex-direction:column; gap:8px; }
  .shopitem{ display:flex; align-items:center; gap:12px; padding:12px 14px; border-radius:12px; background:var(--container); text-align:left; }
  .shopitem .si{ flex:1; min-width:0; }
  .shopitem .nm{ font-size:14px; font-weight:800; color:var(--tp); }
  .shopitem .ds{ font-size:11.5px; color:var(--ts); margin-top:2px; }
  .shopitem .dots{ margin-top:4px; font-size:11px; color:var(--mint); font-weight:700; }
  .shopitem .buy{ flex:0 0 auto; min-width:74px; height:40px; border:0; border-radius:10px; font-size:12px; font-weight:800;
    background:var(--high); color:var(--gold); }
  .shopitem .buy.max{ color:var(--tdis); background:var(--surface); }
  .shopitem .buy.poor{ opacity:.45; }
  #statlist{ width:100%; max-width:340px; margin-top:14px; display:flex; flex-direction:column; gap:8px; }
  .statrow{ display:flex; justify-content:space-between; padding:12px 14px; border-radius:12px; background:var(--container); font-size:14px; }
  .statrow .k{ color:var(--ts); } .statrow .v{ font-weight:800; color:var(--tp); }
  #toast{ position:absolute; top:64px; left:50%; transform:translateX(-50%); z-index:7; background:rgba(30,30,42,.96);
    border:1px solid var(--outline); padding:8px 16px; border-radius:999px; font-size:13px; font-weight:700; color:var(--tp);
    opacity:0; transition:opacity .25s; pointer-events:none; white-space:nowrap; max-width:90%; }
  #toast.show{ opacity:1; }
  #hint{ position:absolute; left:0; right:0; bottom:96px; z-index:5; text-align:center; font-size:13px; color:var(--tp);
    text-shadow:0 2px 8px rgba(0,0,0,.7); opacity:0; transition:opacity .3s; pointer-events:none; padding:0 24px; }
  #hint.show{ opacity:1; }
</style>
</head>
<body>
<div id="app">
  <canvas id="cv"></canvas>
  <div id="hud">
    <div id="xpwrap"><div id="xpfill"></div></div>
    <div id="hpwrap"><div id="hpfill"></div></div>
    <div id="hudrow">
      <div id="lvbadge">Lv 1</div>
      <div id="timer">00:00</div>
      <div id="goldpill"><span class="dot"></span><span id="goldV">0</span></div>
    </div>
  </div>
  <button id="pauseBtn">II</button>
  <div id="chips"></div>
  <div id="toast"></div>
  <div id="hint"></div>

  <div class="ov" id="menu">
    <div class="logo">스파크 서바이버</div>
    <div class="logosub">한 손으로 이동, 무기는 자동 공격.<br/>몰려오는 어둠을 14분간 버텨라.</div>
    <div class="rec" id="menuRec"></div>
    <button class="btn" id="playBtn">출격</button>
    <div class="menucards">
      <button class="btn ghost" id="shopBtn">강화 상점</button>
      <button class="btn ghost" id="howBtn">조작법</button>
    </div>
  </div>

  <div class="ov hide" id="shop">
    <div class="display" style="font-size:26px;">강화 상점</div>
    <div class="rec" id="shopGold"></div>
    <div id="shopList"></div>
    <button class="btn ghost wide" id="shopBack" style="margin-top:16px;">돌아가기</button>
  </div>

  <div class="ov hide" id="levelup">
    <div class="display">LEVEL UP</div><div class="accentbar"></div>
    <div id="cards"></div>
    <div id="luactions"></div>
  </div>

  <div class="ov hide" id="pause">
    <div class="display" style="font-size:26px;">일시정지</div>
    <button class="btn wide" id="resumeBtn">계속하기</button>
    <div class="menucards" style="max-width:360px;">
      <button class="btn ghost" id="soundBtn">효과음: 켜짐</button>
      <button class="btn ghost" id="musicBtn">배경음: 꺼짐</button>
    </div>
    <button class="btn ghost wide" id="quitBtn" style="margin-top:10px;">포기하고 메뉴로</button>
  </div>

  <div class="ov hide" id="result">
    <div class="display" id="resTitle">VICTORY</div>
    <div id="statlist"></div>
    <div class="rec" id="resGold"></div>
    <button class="btn wide" id="resContinue" style="margin-top:16px;">계속하기</button>
  </div>
</div>
<script>
(function(){
  "use strict";
  // ====== 저장 ======
  var SAVE=(window.__SAVE__&&typeof window.__SAVE__==="object")?window.__SAVE__:{};
  if(typeof SAVE.gold!=="number") SAVE.gold=0;
  if(!SAVE.meta||typeof SAVE.meta!=="object") SAVE.meta={};
  if(typeof SAVE.bestTime!=="number") SAVE.bestTime=0;
  if(typeof SAVE.sound!=="boolean") SAVE.sound=true;
  if(typeof SAVE.music!=="boolean") SAVE.music=false;
  function persist(){ try{ if(window.ReactNativeWebView&&window.ReactNativeWebView.postMessage)
    window.ReactNativeWebView.postMessage(JSON.stringify({type:"save",save:SAVE})); }catch(e){} }

  // ====== 팔레트 ======
  var C={ bg:"#16161F", primary:"#7EA8FF", secondary:"#A98BFF", mint:"#74E0C0", success:"#6FE39A",
    danger:"#FF6B7A", warning:"#FFC65C", xp:"#5BE0E6", gold:"#FFD66B", goldHi:"#FFE9A8",
    walker:"#E07A7A", runner:"#FF9E64", brute:"#8C7BB0", splitter:"#C58BD8", spitter:"#E6C36B", boss:"#D94E63",
    tp:"#F4F4FA", ts:"#B9B9CC", dot:"rgba(74,74,99,0.06)", dot2:"rgba(74,74,99,0.05)" };
  var RAR=["#B9B9CC","#6FE39A","#7EA8FF","#C58BD8","#FFD66B"]; // common..legendary

  // ====== 캔버스 ======
  var cv=document.getElementById("cv"), ctx=cv.getContext("2d");
  var dpr=Math.max(1,Math.min(2,window.devicePixelRatio||1)), W=0,H=0, now=0;
  function resize(){ W=window.innerWidth; H=window.innerHeight; cv.width=Math.floor(W*dpr); cv.height=Math.floor(H*dpr); ctx.setTransform(dpr,0,0,dpr,0,0); }
  window.addEventListener("resize",resize);

  // ====== 유틸 ======
  function clamp(v,a,b){ return v<a?a:(v>b?b:v); }
  function lerp(a,b,t){ return a+(b-a)*t; }
  function dist2(ax,ay,bx,by){ var dx=ax-bx,dy=ay-by; return dx*dx+dy*dy; }
  function rnd(a,b){ return a+Math.random()*(b-a); }
  function easeOutBack(t){ var c1=1.70158,c3=c1+1; return 1+c3*Math.pow(t-1,3)+c1*Math.pow(t-1,2); }
  function fmtTime(t){ var s=Math.max(0,Math.floor(t)),m=Math.floor(s/60),ss=s%60; return (m<10?"0":"")+m+":"+(ss<10?"0":"")+ss; }
  function rrect(x,y,w,h,r){ ctx.beginPath(); ctx.moveTo(x+r,y); ctx.arcTo(x+w,y,x+w,y+h,r); ctx.arcTo(x+w,y+h,x,y+h,r); ctx.arcTo(x,y+h,x,y,r); ctx.arcTo(x,y,x+w,y,r); ctx.closePath(); }
  function circle(x,y,r){ ctx.beginPath(); ctx.arc(x,y,r,0,6.2832); ctx.fill(); }
  function shade(hex,f){ var n=parseInt(hex.slice(1),16),r=(n>>16)&255,g=(n>>8)&255,b=n&255;
    r=Math.round(r*f); g=Math.round(g*f); b=Math.round(b*f); return "rgb("+r+","+g+","+b+")"; }

  // ====== 오디오 ======
  var AC=null;
  function audio(){ if(AC) return AC; try{ AC=new (window.AudioContext||window.webkitAudioContext)(); }catch(e){ AC=null; } return AC; }
  function beep(f,d,type,vol){ if(!SAVE.sound) return; var ac=audio(); if(!ac) return; try{
    var o=ac.createOscillator(),g=ac.createGain(); o.type=type||"sine"; o.frequency.value=f*(1+(Math.random()-0.5)*0.1);
    g.gain.value=(vol==null?0.04:vol); o.connect(g); g.connect(ac.destination); var t=ac.currentTime;
    g.gain.setValueAtTime(g.gain.value,t); g.gain.exponentialRampToValueAtTime(0.0001,t+d); o.start(t); o.stop(t+d); }catch(e){} }
  var snd={ shoot:function(){beep(620,0.04,"square",0.012);}, hit:function(){beep(300,0.04,"triangle",0.016);},
    pick:function(){beep(900,0.04,"sine",0.02);}, hurt:function(){beep(150,0.18,"sawtooth",0.05);},
    level:function(){beep(660,0.1,"sine",0.05);beep(990,0.14,"sine",0.05);}, evolve:function(){beep(520,0.1,"sine",0.05);beep(780,0.1,"sine",0.05);beep(1180,0.18,"sine",0.05);},
    boss:function(){beep(80,0.5,"sawtooth",0.06);}, boom:function(){beep(110,0.2,"sawtooth",0.05);}, buy:function(){beep(1040,0.07,"sine",0.04);} };
  var musicTmr=null,ms=0,scl=[0,3,7,10,12,7];
  function startMusic(){ if(musicTmr||!SAVE.music) return; var ac=audio(); if(!ac) return;
    musicTmr=setInterval(function(){ if(!SAVE.music) return; try{ var f=110*Math.pow(2,scl[ms%scl.length]/12);
      var o=ac.createOscillator(),g=ac.createGain(); o.type="triangle"; o.frequency.value=f; g.gain.value=0.02;
      o.connect(g); g.connect(ac.destination); var t=ac.currentTime; g.gain.setValueAtTime(0.02,t); g.gain.exponentialRampToValueAtTime(0.0001,t+0.45);
      o.start(t); o.stop(t+0.47); ms++; }catch(e){} },280); }
  function stopMusic(){ if(musicTmr){ clearInterval(musicTmr); musicTmr=null; } }
  function vibrate(ms){ try{ if(SAVE.sound&&navigator.vibrate) navigator.vibrate(ms); }catch(e){} }

  // ====== 메타 강화 정의 ======
  var META=[
    {key:"might",   name:"위력",    ds:"전체 피해 +2%/레벨",   max:5, base:100, per:0.02},
    {key:"vit",     name:"활력",    ds:"최대 체력 +4%/레벨",   max:5, base:100, per:0.04},
    {key:"haste",   name:"신속",    ds:"공격 쿨다운 -1.5%/레벨",max:5, base:150, per:0.015},
    {key:"greed",   name:"탐욕",    ds:"골드 획득 +5%/레벨",   max:5, base:80,  per:0.05},
    {key:"wisdom",  name:"지혜",    ds:"경험치 +3%/레벨",      max:5, base:120, per:0.03},
    {key:"swift",   name:"질주",    ds:"이동속도 +2%/레벨",    max:5, base:100, per:0.02},
    {key:"magnet",  name:"자력",    ds:"수집 반경 +10%/레벨",  max:3, base:120, per:0.10},
    {key:"luck",    name:"행운",    ds:"고등급 확률 +4%/레벨", max:5, base:150, per:0.04},
    {key:"reroll",  name:"리롤 +1", ds:"런마다 리롤 +1",       max:3, base:200, per:1},
    {key:"banish",  name:"배니시 +1",ds:"런마다 배니시 +1",     max:3, base:200, per:1},
    {key:"revive",  name:"부활",    ds:"런 1회 부활(50%)",     max:1, base:1000,per:1},
    {key:"start2",  name:"선발대",  ds:"Lv2로 시작",           max:1, base:800, per:1}
  ];
  function metaLv(k){ return SAVE.meta[k]||0; }
  function metaCost(m){ var n=metaLv(m.key); return Math.round(m.base*Math.pow(1.8,n)); }

  // ====== 무기 정의 (Lv1..5, Lv5=진화) ======
  var WDEF={
    orbit:{ name:"오빗 블레이드", evo:"소우 헤일로", pair:"haste", color:C.secondary,
      lv:[{dmg:10,cnt:2,r:70,spin:120},{dmg:14,cnt:3,r:75,spin:120},{dmg:18,cnt:3,r:85,spin:150},{dmg:22,cnt:4,r:90,spin:150},{dmg:34,cnt:5,r:100,spin:200}] },
    aura:{ name:"펄스 오라", evo:"블랙홀", pair:"magnet", color:C.mint,
      lv:[{dmg:6,tick:0.5,r:80},{dmg:8,tick:0.5,r:95},{dmg:10,tick:0.45,r:110},{dmg:12,tick:0.4,r:125},{dmg:16,tick:0.35,r:150,pull:1}] },
    lance:{ name:"관통 랜스", evo:"레일 스피어", pair:"might", color:C.primary,
      lv:[{dmg:20,cd:1.3,cnt:1,pierce:2,spd:620},{dmg:26,cd:1.2,cnt:1,pierce:3,spd:640},{dmg:32,cd:1.1,cnt:2,pierce:4,spd:660},{dmg:40,cd:1.0,cnt:2,pierce:6,spd:680},{dmg:60,cd:0.9,cnt:3,pierce:99,spd:760}] },
    scatter:{ name:"스캐터 샷", evo:"드래곤 브레스", pair:"crit", color:C.mint,
      lv:[{dmg:8,cd:1.0,cnt:3,cone:35,pierce:0,spd:540},{dmg:10,cd:0.95,cnt:4,cone:40,pierce:0,spd:560},{dmg:12,cd:0.9,cnt:5,cone:45,pierce:1,spd:560},{dmg:14,cd:0.85,cnt:6,cone:50,pierce:1,spd:580},{dmg:20,cd:0.8,cnt:8,cone:60,pierce:2,spd:600}] },
    chain:{ name:"체인 코일", evo:"테슬라 스톰", pair:"crit", color:C.primary,
      lv:[{dmg:18,cd:1.6,jump:2,jr:140},{dmg:22,cd:1.5,jump:3,jr:150},{dmg:28,cd:1.4,jump:4,jr:160},{dmg:34,cd:1.3,jump:5,jr:170},{dmg:48,cd:1.1,jump:8,jr:200}] },
    seeker:{ name:"시커 드론", evo:"헌터 스웜", pair:"amount", color:C.secondary,
      lv:[{dmg:14,cd:1.4,cnt:1,turn:180,spd:350},{dmg:16,cd:1.3,cnt:2,turn:200,spd:360},{dmg:20,cd:1.2,cnt:2,turn:240,spd:370},{dmg:24,cd:1.1,cnt:3,turn:280,spd:380},{dmg:36,cd:0.9,cnt:5,turn:360,spd:420}] },
    boomer:{ name:"부메랑", evo:"사이클론 디스크", pair:"swift", color:C.warning,
      lv:[{dmg:16,cd:1.5,cnt:1,rng:220,pierce:3,spd:520},{dmg:20,cd:1.4,cnt:1,rng:250,pierce:4,spd:540},{dmg:24,cd:1.3,cnt:2,rng:270,pierce:5,spd:560},{dmg:30,cd:1.2,cnt:2,rng:300,pierce:6,spd:580},{dmg:44,cd:1.0,cnt:3,rng:350,pierce:99,spd:620}] }
  };
  var WKEYS=["orbit","aura","lance","scatter","chain","seeker","boomer"];
  var PDEF={
    might:{name:"위력",ds:"피해 +8%",max:5}, haste:{name:"신속",ds:"쿨다운 -7%",max:5}, swift:{name:"질주",ds:"이동속도 +6%",max:5},
    hp:{name:"체력",ds:"최대 체력 +12%",max:5}, armor:{name:"방어",ds:"받는 피해 -1",max:5}, magnet:{name:"자력",ds:"수집 반경 +20%",max:5},
    amount:{name:"다중탄",ds:"투사체 +1",max:2}, regen:{name:"재생",ds:"초당 +0.2 회복",max:5}, xp:{name:"지혜",ds:"경험치 +8%",max:5},
    crit:{name:"치명",ds:"치명타 +5%",max:5}, critd:{name:"치명피해",ds:"치명 피해 +15%",max:5}, luck:{name:"행운",ds:"고등급 확률↑",max:5}
  };
  var PKEYS=["might","haste","swift","hp","armor","magnet","amount","regen","xp","crit","critd","luck"];

  // ====== 게임 상태 ======
  var G=null;
  function newGame(){
    var g={ t:0, state:"play", paused:false, shake:0, flash:0, hurt:0, luFlash:0,
      enemies:[], shots:[], eshots:[], gems:[], drops:[], parts:[], texts:[], bolts:[], decals:[],
      spawnT:0, nextElite:210, nextBoss:120, bossWarned:false, finalSpawned:false, kills:0, goldRun:0,
      reroll:metaLv("reroll"), banish:metaLv("banish"), banished:{}, levelQueue:0, usedRevive:false };
    var p={ x:0,y:0, r:14, dirx:0, diry:1, lastx:1,lasty:0, level:1, xp:0, xpNext:5,
      weapons:[], passives:{}, invuln:0 };
    // 메타 적용 베이스
    p.baseHp=100*(1+metaLv("vit")*0.04);
    p.baseSpeed=178*(1+metaLv("swift")*0.02);
    p.metaDmg=1+metaLv("might")*0.02; p.metaCd=metaLv("haste")*0.015; p.metaGold=1+metaLv("greed")*0.05;
    p.metaXp=1+metaLv("wisdom")*0.03; p.metaMag=1+metaLv("magnet")*0.10; p.metaLuck=metaLv("luck")*0.04;
    p.maxHp=p.baseHp; p.hp=p.maxHp;
    g.p=p; g.cam={x:0,y:0};
    G=g; // pl()/recompute()가 전역 G를 참조하므로 먼저 설정
    // 시작 무기 1개(랜덤)
    addWeapon(g, WKEYS[Math.floor(Math.random()*WKEYS.length)]);
    if(metaLv("start2")){ p.level=2; }
    recompute(g);
    return g;
  }
  function addWeapon(g,key){ g.p.weapons.push({key:key, lvl:1, t:0, ang:0, evolved:false}); }
  function pl(key){ return G.p.passives[key]||0; }
  function recompute(g){ var p=g.p;
    p.dmgMul=(1+pl("might")*0.08)*p.metaDmg;
    p.cdMul=clamp(1-(pl("haste")*0.07+p.metaCd),0.4,1);
    p.speed=p.baseSpeed*clamp(1+pl("swift")*0.06,1,1.5);
    var nm=p.baseHp*(1+pl("hp")*0.12); if(nm!==p.maxHp){ var ratio=p.hp/p.maxHp; p.maxHp=nm; p.hp=Math.min(nm,Math.round(nm*ratio)); }
    p.armor=pl("armor"); p.magnet=60*(1+pl("magnet")*0.20)*p.metaMag; p.amount=pl("amount");
    p.regen=pl("regen")*0.2; p.xpMul=(1+pl("xp")*0.08)*p.metaXp;
    p.critC=0.05+pl("crit")*0.05; p.critD=2.0+pl("critd")*0.15; p.luck=pl("luck")*0.10+p.metaLuck;
  }

  // ====== 입력(플로팅 조이스틱) ======
  var joy={active:false,ox:0,oy:0,kx:0,ky:0,max:90,dz:0.12,mx:0,my:0,mag:0};
  var keys={};
  function setJoy(x,y){ var dx=x-joy.ox,dy=y-joy.oy,len=Math.hypot(dx,dy);
    if(len>joy.max){ joy.ox=x-dx/len*joy.max; joy.oy=y-dy/len*joy.max; dx=x-joy.ox; dy=y-joy.oy; len=joy.max; }
    joy.kx=x; joy.ky=y; var dzr=joy.dz; var m=len/joy.max; m=clamp((m-dzr)/(1-dzr),0,1);
    if(len<1){ joy.mx=0;joy.my=0;joy.mag=0; } else { joy.mx=dx/len; joy.my=dy/len; joy.mag=m; } }
  function pdown(x,y){ if(!G||G.state!=="play"||G.paused) return; joy.active=true; joy.ox=x; joy.oy=y; joy.kx=x; joy.ky=y; joy.mx=0;joy.my=0;joy.mag=0; audio(); if(SAVE.music) startMusic(); if(G.tutMove){ G.tutMove=false; hideHint(); } }
  function pmove(x,y){ if(joy.active) setJoy(x,y); }
  function pup(){ joy.active=false; joy.mag=0; joy.mx=0; joy.my=0; }
  cv.addEventListener("touchstart",function(e){ var t=e.touches[0],r=cv.getBoundingClientRect(); pdown(t.clientX-r.left,t.clientY-r.top); e.preventDefault(); },{passive:false});
  cv.addEventListener("touchmove",function(e){ var t=e.touches[0],r=cv.getBoundingClientRect(); pmove(t.clientX-r.left,t.clientY-r.top); e.preventDefault(); },{passive:false});
  cv.addEventListener("touchend",function(e){ pup(); e.preventDefault(); },{passive:false});
  cv.addEventListener("mousedown",function(e){ var r=cv.getBoundingClientRect(); pdown(e.clientX-r.left,e.clientY-r.top); });
  window.addEventListener("mousemove",function(e){ var r=cv.getBoundingClientRect(); pmove(e.clientX-r.left,e.clientY-r.top); });
  window.addEventListener("mouseup",pup);
  window.addEventListener("keydown",function(e){ keys[e.key.toLowerCase()]=true; });
  window.addEventListener("keyup",function(e){ keys[e.key.toLowerCase()]=false; });

  // ====== 스폰 ======
  function spawnEnemy(type){
    var m=G.t/60, D=Math.floor(G.t/60), Lv=G.p.level;
    var ang=Math.random()*6.2832, rad=Math.hypot(W,H)/2+50;
    var ex=G.p.x+Math.cos(ang)*rad, ey=G.p.y+Math.sin(ang)*rad;
    var base={ walker:{hp:8,sp:55,dmg:4,r:11,col:C.walker}, runner:{hp:4,sp:110,dmg:3,r:9,col:C.runner},
      brute:{hp:45,sp:40,dmg:12,r:15,col:C.brute}, spitter:{hp:14,sp:50,dmg:8,r:12,col:C.spitter},
      splitter:{hp:20,sp:60,dmg:5,r:12,col:C.splitter}, shielder:{hp:30,sp:50,dmg:7,r:13,col:"#9FB6E6"} }[type];
    var hp=base.hp*(1+0.18*m)*(1+0.04*Lv);
    G.enemies.push({ type:type, x:ex,y:ey, r:base.r, hp:hp, maxHp:hp, sp:base.sp*(1+0.03*m), dmg:base.dmg*(1+0.10*m),
      col:base.col, flash:0, oc:0, ac:0, shotT:1, ph:Math.random()*6.28 });
  }
  function spawnElite(){ var D=Math.floor(G.t/60), Lv=G.p.level, ang=Math.random()*6.2832, rad=Math.hypot(W,H)/2+60;
    var hp=300*(1+0.25*D)*(1+0.02*Lv);
    G.enemies.push({ type:"elite", x:G.p.x+Math.cos(ang)*rad,y:G.p.y+Math.sin(ang)*rad, r:26, hp:hp, maxHp:hp, sp:60, dmg:18,
      col:C.secondary, flash:0, oc:0, ac:0, slamT:3, ph:0 });
    snd.boss(); toast("엘리트 출현!"); }
  function spawnFinal(){ var D=Math.floor(G.t/60), hp=12000*(1+0.1*D);
    G.enemies.push({ type:"boss", x:G.p.x,y:G.p.y-Math.hypot(W,H)/2-40, r:38, hp:hp, maxHp:hp, sp:62, dmg:25,
      col:C.boss, flash:0, slamT:2.5, ph:0 }); G.flash=0.5; G.shake=8; snd.boss(); banner("최종 보스", C.danger); }

  function director(dt){
    var t=G.t;
    if(t>=G.nextBoss && t<838){ G.nextBoss+=120; if(t>=210) spawnElite(); }
    if(t>=210 && t>=G.nextElite){ G.nextElite+=120; }
    if(t>=833 && !G.bossWarned){ G.bossWarned=true; G.flash=0.4; banner("최종 보스 접근!", C.danger); }
    if(t>=836 && !G.finalSpawned){ G.finalSpawned=true; spawnFinal(); }
    // 일반 스폰
    var density=Math.min(150,12+1.1*t/10), interval=Math.max(0.25,1.4-t/700);
    var alive=0; for(var i=0;i<G.enemies.length;i++){ var ty=G.enemies[i].type; if(ty!=="elite"&&ty!=="boss") alive++; }
    G.spawnT-=dt;
    if(G.spawnT<=0 && alive<density){ G.spawnT=interval; spawnEnemy(pickType()); if(Math.random()<0.4 && alive+1<density) spawnEnemy(pickType()); }
  }
  function pickType(){ var t=G.t, w=[];
    w.push(["walker", Math.max(0.25, 0.7-t/900)]);
    if(t>=60) w.push(["runner", Math.min(0.30, 0.05+t/1500)]);
    if(t>=150) w.push(["brute", Math.min(0.18, t/4000+0.05)]);
    if(t>=270) w.push(["spitter", 0.12]);
    if(t>=360) w.push(["splitter", 0.10]);
    if(t>=480) w.push(["shielder", 0.10]);
    var s=0; for(var i=0;i<w.length;i++) s+=w[i][1]; var r=Math.random()*s;
    for(var j=0;j<w.length;j++){ r-=w[j][1]; if(r<=0) return w[j][0]; } return "walker"; }

  // ====== 전투 ======
  function addPart(x,y,col,n,sp){ for(var i=0;i<n;i++){ var a=Math.random()*6.2832,s=(sp||120)*rnd(0.4,1.2);
    G.parts.push({x:x,y:y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:rnd(0.25,0.5),max:0.5,col:col,sz:rnd(2,3.5)}); } }
  function gib(x,y,col){ for(var i=0;i<5;i++){ var a=Math.random()*6.2832,s=rnd(60,160);
    G.parts.push({x:x,y:y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:0.3,max:0.3,col:col,sz:3,sq:1}); } }
  function ring(x,y,col,r0,r1){ G.parts.push({x:x,y:y,life:0.32,max:0.32,col:col,ring:1,r0:r0,r1:r1}); }
  function floatText(x,y,s,col){ G.texts.push({x:x,y:y,s:s,col:col,life:0.45,max:0.45,vy:-40,jx:rnd(-8,8)}); }
  function addShake(m){ if(G.shake<m) G.shake=m; }

  function damageEnemy(e,dmg,melee){
    if(e.type==="shielder" && !melee) dmg*=0.2;
    var crit=Math.random()<G.p.critC; if(crit) dmg*=G.p.critD;
    dmg=Math.round(dmg); e.hp-=dmg; e.flash=0.09; addPart(e.x,e.y,"#FFFFFF",1,40);
    if(crit||e.type==="boss"||e.type==="elite") floatText(e.x,e.y-e.r,(""+dmg),crit?C.warning:C.tp);
    if(e.hp<=0) killEnemy(e);
  }
  function killEnemy(e){ var idx=G.enemies.indexOf(e); if(idx<0) return; G.enemies.splice(idx,1);
    G.kills++; gib(e.x,e.y,e.col); ring(e.x,e.y,e.col,e.r,e.r*2);
    if(e.type==="boss"){ snd.boom(); addShake(9); G.flash=0.5; winRun(); return; }
    snd.hit();
    if(e.type==="splitter"){ for(var k=0;k<2;k++){ var a=Math.random()*6.2832; G.enemies.push({type:"walker",x:e.x+Math.cos(a)*14,y:e.y+Math.sin(a)*14,r:9,hp:e.maxHp*0.3,maxHp:e.maxHp*0.3,sp:75,dmg:e.dmg*0.7,col:C.walker,flash:0,oc:0,ac:0,ph:0}); } }
    // 드랍
    var tier = e.maxHp>200?3:(e.maxHp>40?2:(e.maxHp>14?1:0));
    var val = tier===3?40:(tier===2?9:(tier===1?5:2));
    G.gems.push({x:e.x,y:e.y,val:Math.round(val*(e.type==="elite"?6:1)),tier:Math.min(3,tier+(e.type==="elite"?1:0)),vx:rnd(-30,30),vy:rnd(-30,30),homing:false});
    if(e.type==="elite"){ dropGold(e.x,e.y,30+G.t*0.1); if(Math.random()<0.6) G.drops.push({x:e.x+18,y:e.y,kind:"heal"}); else G.drops.push({x:e.x+18,y:e.y,kind:"chest"}); addShake(5); }
    else if(Math.random()<0.12) dropGold(e.x,e.y,1+Math.floor(G.t/120));
  }
  function dropGold(x,y,v){ G.drops.push({x:x,y:y,kind:"gold",val:Math.max(1,Math.round(v))}); }

  // 무기 발사
  function nearest(x,y,maxd){ var best=null,bd=maxd?maxd*maxd:1e18; for(var i=0;i<G.enemies.length;i++){ var e=G.enemies[i]; var d=dist2(x,y,e.x,e.y); if(d<bd){ bd=d; best=e; } } return best; }
  function lowest(x,y,maxd){ var best=null,bh=1e18,md=(maxd||9999)*(maxd||9999); for(var i=0;i<G.enemies.length;i++){ var e=G.enemies[i]; if(dist2(x,y,e.x,e.y)>md) continue; if(e.hp<bh){ bh=e.hp; best=e; } } return best; }
  function W_S(w){ return WDEF[w.key].lv[w.lvl-1]; }
  function fireWeapon(w,dt){ var p=G.p, S=W_S(w), key=w.key, col=WDEF[key].color;
    if(key==="orbit"){ w.ang+=S.spin*Math.PI/180*dt; var cnt=S.cnt; for(var i=0;i<G.enemies.length;i++){ var e=G.enemies[i]; if(e.oc>0) continue;
        for(var o=0;o<cnt;o++){ var a=w.ang+o/cnt*6.2832, ox=p.x+Math.cos(a)*S.r, oy=p.y+Math.sin(a)*S.r; if(dist2(ox,oy,e.x,e.y)<(e.r+9)*(e.r+9)){ damageEnemy(e,S.dmg*p.dmgMul,true); e.oc=0.25; break; } } } return; }
    if(key==="aura"){ w.t-=dt; if(w.t<=0){ w.t=S.tick; var rr=S.r; for(var i=0;i<G.enemies.length;i++){ var e=G.enemies[i]; if(dist2(p.x,p.y,e.x,e.y)<rr*rr){ damageEnemy(e,S.dmg*p.dmgMul,true); if(S.pull){ var dx=p.x-e.x,dy=p.y-e.y,l=Math.hypot(dx,dy)||1; e.x+=dx/l*18; e.y+=dy/l*18; } } } ring(p.x,p.y,col,rr*0.6,rr); } return; }
    w.t-=dt; if(w.t>0) return; w.t=S.cd*p.cdMul;
    if(key==="lance"){ var cnt=S.cnt+p.amount, dirx=p.lastx,diry=p.lasty; for(var i=0;i<cnt;i++){ var d=(i===1)?-1:1; var ax=(i>=2?rnd(-0.3,0.3):0);
        var vx=dirx*d, vy=diry*d; var ca=Math.cos(ax),sa=Math.sin(ax),nvx=vx*ca-vy*sa,nvy=vx*sa+vy*ca;
        G.shots.push({x:p.x,y:p.y,vx:nvx*S.spd,vy:nvy*S.spd,dmg:S.dmg*p.dmgMul,pierce:S.pierce,hit:[],col:col,kind:"lance",life:1.2}); } snd.shoot(); return; }
    if(key==="scatter"){ var tg=nearest(p.x,p.y); var ba=tg?Math.atan2(tg.y-p.y,tg.x-p.x):Math.atan2(p.lasty,p.lastx); var cnt=S.cnt+p.amount;
        for(var i=0;i<cnt;i++){ var off=(i/(cnt-1||1)-0.5)*S.cone*Math.PI/180; var a=ba+off; G.shots.push({x:p.x,y:p.y,vx:Math.cos(a)*S.spd,vy:Math.sin(a)*S.spd,dmg:S.dmg*p.dmgMul,pierce:S.pierce,hit:[],col:C.mint,kind:"pellet",life:0.7}); } snd.shoot(); return; }
    if(key==="chain"){ var tg=nearest(p.x,p.y,S.jr*1.6); if(!tg) return; var hit=[tg]; damageEnemy(tg,S.dmg*p.dmgMul,false); G.bolts.push({x0:p.x,y0:p.y,x1:tg.x,y1:tg.y,life:0.16,col:col}); var cur=tg,dmg=S.dmg;
        for(var j=0;j<S.jump;j++){ var nx=null,nd=S.jr*S.jr; for(var i=0;i<G.enemies.length;i++){ var e=G.enemies[i]; if(hit.indexOf(e)>=0) continue; var d=dist2(cur.x,cur.y,e.x,e.y); if(d<nd){ nd=d; nx=e; } } if(!nx) break; dmg*=(w.lvl>=5?1:0.88); damageEnemy(nx,dmg*p.dmgMul,false); G.bolts.push({x0:cur.x,y0:cur.y,x1:nx.x,y1:nx.y,life:0.16,col:col}); hit.push(nx); cur=nx; } snd.shoot(); return; }
    if(key==="seeker"){ var cnt=S.cnt+p.amount; for(var i=0;i<cnt;i++){ var a=Math.random()*6.2832; G.shots.push({x:p.x,y:p.y,vx:Math.cos(a)*S.spd,vy:Math.sin(a)*S.spd,dmg:S.dmg*p.dmgMul,pierce:w.lvl>=5?1:0,hit:[],col:col,kind:"seeker",life:2.2,turn:S.turn,spd:S.spd,aoe:w.lvl>=5}); } snd.shoot(); return; }
    if(key==="boomer"){ var cnt=S.cnt+p.amount; var tg=denseDir(); for(var i=0;i<cnt;i++){ var a=Math.atan2(tg.y,tg.x)+(i-(cnt-1)/2)*0.3; G.shots.push({x:p.x,y:p.y,vx:Math.cos(a)*S.spd,vy:Math.sin(a)*S.spd,dmg:S.dmg*p.dmgMul,pierce:S.pierce,hit:[],col:C.warning,kind:"boomer",life:2.5,phase:0,rng:S.rng,spd:S.spd,dirx:Math.cos(a),diry:Math.sin(a)}); } snd.shoot(); return; }
  }
  function denseDir(){ if(G.enemies.length===0) return {x:G.p.lastx,y:G.p.lasty}; var sx=0,sy=0,n=0; for(var i=0;i<G.enemies.length&&i<30;i++){ var e=G.enemies[i]; if(dist2(G.p.x,G.p.y,e.x,e.y)<360*360){ sx+=e.x-G.p.x; sy+=e.y-G.p.y; n++; } } if(n===0){ var e=nearest(G.p.x,G.p.y); return e?{x:e.x-G.p.x,y:e.y-G.p.y}:{x:G.p.lastx,y:G.p.lasty}; } var l=Math.hypot(sx,sy)||1; return {x:sx/l,y:sy/l}; }

  function updateShots(dt){ for(var i=G.shots.length-1;i>=0;i--){ var s=G.shots[i]; s.life-=dt;
    if(s.kind==="seeker"){ var tg=s.tgt; if(!tg||tg.hp<=0||G.enemies.indexOf(tg)<0){ tg=lowest(s.x,s.y); s.tgt=tg; } if(tg){ var da=Math.atan2(tg.y-s.y,tg.x-s.x), ca=Math.atan2(s.vy,s.vx); var diff=da-ca; while(diff>Math.PI)diff-=6.2832; while(diff<-Math.PI)diff+=6.2832; var mt=s.turn*Math.PI/180*dt; diff=clamp(diff,-mt,mt); var na=ca+diff; s.vx=Math.cos(na)*s.spd; s.vy=Math.sin(na)*s.spd; } }
    if(s.kind==="boomer"){ s.phase+=dt; if(s.phase>s.rng/s.spd){ var dx=G.p.x-s.x,dy=G.p.y-s.y,l=Math.hypot(dx,dy)||1; s.vx=dx/l*s.spd*1.3; s.vy=dy/l*s.spd*1.3; if(l<16){ G.shots.splice(i,1); continue; } } }
    s.x+=s.vx*dt; s.y+=s.vy*dt;
    for(var j=0;j<G.enemies.length;j++){ var e=G.enemies[j]; if(s.hit.indexOf(e)>=0) continue; if(dist2(s.x,s.y,e.x,e.y)<(e.r+5)*(e.r+5)){ damageEnemy(e,s.dmg,false); s.hit.push(e);
        if(s.aoe){ ring(s.x,s.y,s.col,4,40); for(var k=0;k<G.enemies.length;k++){ var e2=G.enemies[k]; if(e2!==e&&dist2(s.x,s.y,e2.x,e2.y)<40*40) damageEnemy(e2,s.dmg*0.5,false); } }
        if(s.kind!=="boomer" && (s.pierce--)<=0){ G.shots.splice(i,1); break; } } }
    if(s.life<=0){ if(G.shots[i]===s) G.shots.splice(i,1); } } }

  function updateEnemies(dt){ var p=G.p, m=G.t/60;
    for(var i=G.enemies.length-1;i>=0;i--){ var e=G.enemies[i]; if(e.flash>0) e.flash-=dt; if(e.oc>0) e.oc-=dt;
      var dx=p.x-e.x,dy=p.y-e.y,l=Math.hypot(dx,dy)||1; var ux=dx/l,uy=dy/l;
      if(e.type==="spitter"){ if(l>260){ e.x+=ux*e.sp*dt; e.y+=uy*e.sp*dt; } else { e.shotT-=dt; if(e.shotT<=0){ e.shotT=1.8; G.eshots.push({x:e.x,y:e.y,vx:ux*200,vy:uy*200,dmg:e.dmg,life:3,col:C.spitter}); } } }
      else if(e.type==="elite"||e.type==="boss"){ if(l>(e.type==="boss"?70:50)){ e.x+=ux*e.sp*dt; e.y+=uy*e.sp*dt; }
        e.slamT-=dt; if(e.slamT<=0){ e.slamT=(e.type==="boss"?3.2:4); G.decals.push({x:p.x,y:p.y,r:e.type==="boss"?120:80,delay:0.85,life:0.85,dmg:e.dmg,col:C.danger}); } }
      else { e.x+=ux*e.sp*dt; e.y+=uy*e.sp*dt; }
      // 분리(겹침 완화)
      // 접촉 피해
      if(l<e.r+p.r && p.invuln<=0){ hurtPlayer(e.dmg); }
    }
    // 적 투사체
    for(var i=G.eshots.length-1;i>=0;i--){ var s=G.eshots[i]; s.x+=s.vx*dt; s.y+=s.vy*dt; s.life-=dt;
      if(dist2(s.x,s.y,p.x,p.y)<(p.r+5)*(p.r+5) && p.invuln<=0){ hurtPlayer(s.dmg); G.eshots.splice(i,1); continue; }
      if(s.life<=0) G.eshots.splice(i,1); }
    // 데칼(텔레그래프)
    for(var i=G.decals.length-1;i>=0;i--){ var d=G.decals[i]; d.delay-=dt; if(d.delay<=0){ if(dist2(d.x,d.y,p.x,p.y)<d.r*d.r && p.invuln<=0) hurtPlayer(d.dmg); addShake(6); G.flash=0.25; ring(d.x,d.y,C.danger,d.r*0.5,d.r); G.decals.splice(i,1); } } }

  function hurtPlayer(dmg){ var p=G.p; dmg=Math.max(1,dmg-p.armor); p.hp-=dmg; p.invuln=0.55; G.hurt=0.22; addShake(3); snd.hurt(); vibrate(30);
    if(p.hp<=0){ if(metaLv("revive")&&!G.usedRevive){ G.usedRevive=true; p.hp=Math.round(p.maxHp*0.5); p.invuln=1.5; G.flash=0.5; banner("부활!", C.success); ring(p.x,p.y,C.success,10,140); } else loseRun(); } }

  // ====== 픽업/경험치 ======
  function updatePickups(dt){ var p=G.p;
    for(var i=G.gems.length-1;i>=0;i--){ var g=G.gems[i]; if(!g.homing){ g.vx*=0.9; g.vy*=0.9; g.x+=g.vx*dt; g.y+=g.vy*dt; if(dist2(g.x,g.y,p.x,p.y)<p.magnet*p.magnet) g.homing=true; }
      else { var dx=p.x-g.x,dy=p.y-g.y,l=Math.hypot(dx,dy)||1; g.spd=(g.spd||60)+1800*dt; g.x+=dx/l*g.spd*dt; g.y+=dy/l*g.spd*dt; if(l<p.r+6){ gainXp(g.val); snd.pick(); G.gems.splice(i,1); } } }
    // 젬 폭주 방지
    if(G.gems.length>250){ var sum=0; for(var i=0;i<G.gems.length;i++) sum+=G.gems[i].val; G.gems.length=0; G.gems.push({x:p.x+rnd(-80,80),y:p.y+rnd(-80,80),val:sum,tier:3,vx:0,vy:0,homing:true,spd:60}); }
    for(var i=G.drops.length-1;i>=0;i--){ var d=G.drops[i]; if(dist2(d.x,d.y,p.x,p.y)<(p.magnet*0.6)*(p.magnet*0.6)){ var dx=p.x-d.x,dy=p.y-d.y,l=Math.hypot(dx,dy)||1; d.x+=dx/l*420*dt; d.y+=dy/l*420*dt; }
      if(dist2(d.x,d.y,p.x,p.y)<(p.r+10)*(p.r+10)){ collectDrop(d); G.drops.splice(i,1); } } }
  function collectDrop(d){ if(d.kind==="gold"){ var v=Math.round(d.val*G.p.metaGold); G.goldRun+=v; floatText(G.p.x,G.p.y-20,"+"+v,C.gold); snd.pick(); }
    else if(d.kind==="heal"){ G.p.hp=Math.min(G.p.maxHp,G.p.hp+Math.round(G.p.maxHp*0.3)); floatText(G.p.x,G.p.y-20,"+HP",C.success); ring(G.p.x,G.p.y,C.success,8,40); }
    else if(d.kind==="chest"){ grantChest(); } }
  function grantChest(){ // 진화 우선, 아니면 무작위 무기 레벨업
    var p=G.p; for(var i=0;i<p.weapons.length;i++){ var w=p.weapons[i]; if(w.lvl===4 && pl(WDEF[w.key].pair)>=3){ w.lvl=5; w.evolved=true; snd.evolve(); banner("진화: "+WDEF[w.key].evo+"!", C.gold); refreshChips(); return; } }
    var cand=[]; for(var i=0;i<p.weapons.length;i++){ if(p.weapons[i].lvl<4) cand.push(p.weapons[i]); }
    if(cand.length){ var w=cand[Math.floor(Math.random()*cand.length)]; w.lvl++; snd.evolve(); banner(WDEF[w.key].name+" 강화!", C.mint); refreshChips(); }
    else { G.goldRun+=50; floatText(p.x,p.y-20,"+50",C.gold); } }
  function gainXp(v){ var p=G.p; p.xp+=Math.round(v*p.xpMul); var ups=0;
    while(p.xp>=p.xpNext){ p.xp-=p.xpNext; p.level++; p.xpNext=xpCurve(p.level); ups++; }
    if(ups>0){ G.levelQueue+=ups; G.luFlash=0.3; ring(p.x,p.y,C.xp,10,120); snd.level(); if(!G.paused) openLevelUp(); } updateHud(); }
  function xpCurve(n){ if(n<=20) return 5+10*(n-1); if(n<=40) return 215+13*(n-20); return 475+16*(n-40); }

  // ====== 레벨업 UI ======
  var luOpen=false;
  function buildChoices(){ var p=G.p, pool=[];
    for(var i=0;i<p.weapons.length;i++){ var w=p.weapons[i]; var nl=w.lvl+1; if(nl>5) continue;
      if(nl===5 && pl(WDEF[w.key].pair)<3) continue; // 진화는 체스트로
      pool.push({type:"wup",key:w.key,w:w,nl:nl,evolve:false}); }
    if(p.weapons.length<6){ for(var i=0;i<WKEYS.length;i++){ var k=WKEYS[i]; var has=false; for(var j=0;j<p.weapons.length;j++) if(p.weapons[j].key===k) has=true; if(!has) pool.push({type:"wnew",key:k}); } }
    for(var i=0;i<PKEYS.length;i++){ var k=PKEYS[i]; var cur=pl(k); if(cur>=PDEF[k].max) continue;
      var ownedCount=Object.keys(p.passives).length; if(cur===0 && ownedCount>=6) continue; pool.push({type:"pup",key:k,nl:cur+1}); }
    // 배니시 제거
    pool=pool.filter(function(o){ return !G.banished[o.type+":"+o.key]; });
    // 미보유 1개 보장 + 3개 추출
    var news=pool.filter(function(o){ return o.type==="wnew"; });
    var pick=[];
    if(news.length){ pick.push(news[Math.floor(Math.random()*news.length)]); }
    var rest=pool.filter(function(o){ return pick.indexOf(o)<0; });
    while(pick.length<3 && rest.length){ var idx=Math.floor(Math.random()*rest.length); pick.push(rest[idx]); rest.splice(idx,1); }
    // 등급 부여
    for(var i=0;i<pick.length;i++){ var o=pick[i]; var rr=Math.random()-p.luck*0.5; o.rar=rr<0.03?4:(rr<0.12?3:(rr<0.40?1:0)); if(o.evolve) o.rar=4; }
    return pick; }
  function openLevelUp(){ if(luOpen) return; if(G.levelQueue<=0) return; luOpen=true; G.paused=true;
    var choices=buildChoices(); var box=document.getElementById("cards"); box.innerHTML="";
    if(G.tutLevel){ G.tutLevel=false; hideHint(); }
    for(var i=0;i<choices.length;i++){ (function(o,idx){ var card=document.createElement("button"); card.className="card";
      var rar=RAR[o.rar||0]; if(o.evolve){ card.className="card evolve"; }
      var nm, ds, col, glyphKey;
      if(o.type==="wnew"){ nm=WDEF[o.key].name; ds="새 무기 획득"; col=WDEF[o.key].color; glyphKey="w_"+o.key; }
      else if(o.type==="wup"){ nm=(o.nl===5?("★ "+WDEF[o.key].evo):WDEF[o.key].name); ds=(o.nl===5?"진화!":"무기 강화"); col=WDEF[o.key].color; glyphKey="w_"+o.key; }
      else { nm=PDEF[o.key].name; ds=PDEF[o.key].ds; col=C.mint; glyphKey="p_"+o.key; }
      var lvtxt = o.type==="wnew"?"NEW":(o.type==="wup"?("Lv "+(o.nl-1)+"→"+o.nl):("Lv "+(o.nl-1)+"→"+o.nl));
      card.innerHTML='<div class="stripe" style="background:'+rar+'"></div><div class="tile" style="background:'+hexA(col,0.18)+'"><canvas width="80" height="80"></canvas></div>'+
        '<div class="body"><div class="nm">'+nm+'</div><div class="ds">'+ds+'</div><span class="lvchip">'+lvtxt+'</span></div>';
      drawGlyph(card.querySelector("canvas"), glyphKey, col);
      card.addEventListener("click", function(){ applyChoice(o); });
      box.appendChild(card); setTimeout(function(){ card.classList.add("in"); }, idx*60);
    })(choices[i],i); }
    // 액션(리롤/배니시)
    var act=document.getElementById("luactions"); act.innerHTML="";
    if(G.reroll>0){ var rb=document.createElement("button"); rb.className="btn ghost"; rb.textContent="리롤 ("+G.reroll+")"; rb.addEventListener("click",function(){ G.reroll--; closeLU(); openLevelUp(); }); act.appendChild(rb); }
    var sk=document.createElement("button"); sk.className="btn ghost"; sk.textContent="건너뛰기(+XP)"; sk.addEventListener("click",function(){ G.p.xp+=Math.round(G.p.xpNext*0.1); finishLU(); }); act.appendChild(sk);
    document.getElementById("levelup").classList.remove("hide");
  }
  function hexA(hex,a){ var n=parseInt(hex.slice(1),16); return "rgba("+((n>>16)&255)+","+((n>>8)&255)+","+(n&255)+","+a+")"; }
  function applyChoice(o){ var p=G.p;
    if(o.type==="wnew") addWeapon(G,o.key);
    else if(o.type==="wup"){ for(var i=0;i<p.weapons.length;i++) if(p.weapons[i].key===o.key){ p.weapons[i].lvl=o.nl; if(o.nl===5) p.weapons[i].evolved=true; } }
    else { p.passives[o.key]=(p.passives[o.key]||0)+1; recompute(G); }
    refreshChips(); finishLU();
  }
  function closeLU(){ document.getElementById("levelup").classList.add("hide"); luOpen=false; }
  function finishLU(){ G.levelQueue--; closeLU(); if(G.levelQueue>0){ openLevelUp(); } else { G.paused=false; } updateHud(); }

  // ====== 승패 ======
  function winRun(){ endRun(true); }
  function loseRun(){ endRun(false); }
  function endRun(win){ G.state="over";
    var reward=Math.round(G.goldRun*(win?1.5:1)); SAVE.gold+=reward;
    if(G.t>SAVE.bestTime) SAVE.bestTime=G.t; persist();
    document.getElementById("resTitle").textContent=win?"VICTORY":"DEFEAT";
    document.getElementById("resTitle").style.color=win?C.success:C.danger;
    var sl=document.getElementById("statlist"); sl.innerHTML="";
    addStat(sl,"생존 시간",fmtTime(G.t)); addStat(sl,"레벨","Lv "+G.p.level); addStat(sl,"처치",""+G.kills); addStat(sl,"획득 골드",""+reward);
    document.getElementById("resGold").textContent="보유 골드 "+SAVE.gold+(G.t>=SAVE.bestTime?"  · 최고 기록!":"");
    if(win){ snd.evolve(); } else snd.hurt();
    document.getElementById("result").classList.remove("hide"); stopMusic();
  }
  function addStat(par,k,v){ var r=document.createElement("div"); r.className="statrow"; r.innerHTML='<span class="k">'+k+'</span><span class="v">'+v+'</span>'; par.appendChild(r); }

  // ====== 렌더 ======
  function W2Sx(wx){ return wx-G.p.x+W/2; }
  function W2Sy(wy){ return wy-G.p.y+H/2; }
  function draw(){ var sh=G.shake||0, sx=(Math.random()-0.5)*sh, sy=(Math.random()-0.5)*sh;
    ctx.setTransform(dpr,0,0,dpr,sx*dpr,sy*dpr);
    ctx.fillStyle=C.bg; ctx.fillRect(-8,-8,W+16,H+16);
    drawGrid();
    // 데칼
    for(var i=0;i<G.decals.length;i++){ var d=G.decals[i]; var a=1-d.delay/d.life; ctx.globalAlpha=0.18+0.22*a; ctx.fillStyle=C.danger;
      circle(W2Sx(d.x),W2Sy(d.y),d.r*(0.7+0.3*a)); ctx.globalAlpha=1; ctx.strokeStyle=C.danger; ctx.lineWidth=2; ctx.beginPath(); ctx.arc(W2Sx(d.x),W2Sy(d.y),d.r,0,6.2832); ctx.stroke(); }
    drawGems(); drawDrops();
    for(var i=0;i<G.enemies.length;i++) drawEnemy(G.enemies[i]);
    drawPlayer();
    drawShots(); drawBolts(); drawParts(); drawTexts();
    // 비네트
    var vg=ctx.createRadialGradient(W/2,H*0.45,W*0.3,W/2,H*0.5,Math.hypot(W,H)*0.62);
    vg.addColorStop(0,"rgba(0,0,0,0)"); vg.addColorStop(1,"rgba(10,10,16,0.55)"); ctx.fillStyle=vg; ctx.fillRect(-8,-8,W+16,H+16);
    if(G.hurt>0){ ctx.fillStyle="rgba(255,107,122,"+(G.hurt)+")"; ctx.fillRect(0,0,W,H); }
    if(G.flash>0){ ctx.fillStyle="rgba(255,255,255,"+(G.flash*0.4)+")"; ctx.fillRect(-8,-8,W+16,H+16); }
    if(G.luFlash>0){ ctx.globalAlpha=G.luFlash*1.5; ctx.strokeStyle=C.xp; ctx.lineWidth=3; ctx.beginPath(); ctx.arc(W/2,H/2,(0.3-G.luFlash)*500,0,6.2832); ctx.stroke(); ctx.globalAlpha=1; }
    // 보스 HP바
    for(var i=0;i<G.enemies.length;i++){ if(G.enemies[i].type==="boss"){ var e=G.enemies[i];
      ctx.fillStyle="rgba(0,0,0,0.5)"; rrect(W*0.12,52,W*0.76,10,5); ctx.fill(); ctx.fillStyle=C.danger; rrect(W*0.12,52,W*0.76*Math.max(0,e.hp/e.maxHp),10,5); ctx.fill();
      ctx.fillStyle=C.tp; ctx.font="700 11px sans-serif"; ctx.textAlign="center"; ctx.fillText("최종 보스",W/2,49); break; } }
    drawJoystick();
  }
  function drawGrid(){ var sp=48, ox=(-G.p.x*0.85)%sp, oy=(-G.p.y*0.85)%sp; ctx.fillStyle=C.dot;
    for(var x=ox-sp;x<W+sp;x+=sp){ for(var y=oy-sp;y<H+sp;y+=sp){ ctx.beginPath(); ctx.arc(x,y,1.5,0,6.2832); ctx.fill(); } }
    var sp2=160, ox2=(-G.p.x*0.6)%sp2, oy2=(-G.p.y*0.6)%sp2; ctx.fillStyle=C.dot2;
    for(var x=ox2-sp2;x<W+sp2;x+=sp2){ for(var y=oy2-sp2;y<H+sp2;y+=sp2){ ctx.beginPath(); ctx.arc(x,y,2.5,0,6.2832); ctx.fill(); } } }
  function softShadow(){ ctx.shadowColor="rgba(0,0,0,0.35)"; ctx.shadowBlur=8; ctx.shadowOffsetY=3; }
  function noShadow(){ ctx.shadowBlur=0; ctx.shadowOffsetY=0; }
  function drawPlayer(){ var p=G.p, x=W/2, y=H/2;
    softShadow(); ctx.fillStyle=C.primary; circle(x,y,p.r); noShadow();
    ctx.strokeStyle=shade("#7EA8FF",0.78); ctx.lineWidth=2; ctx.beginPath(); ctx.arc(x,y,p.r,0,6.2832); ctx.stroke();
    // 코어 + 방향
    var a=Math.atan2(p.lasty,p.lastx); ctx.fillStyle=C.mint; ctx.beginPath(); ctx.moveTo(x+Math.cos(a)*p.r*0.9,y+Math.sin(a)*p.r*0.9);
    ctx.lineTo(x+Math.cos(a+2.4)*p.r*0.5,y+Math.sin(a+2.4)*p.r*0.5); ctx.lineTo(x+Math.cos(a-2.4)*p.r*0.5,y+Math.sin(a-2.4)*p.r*0.5); ctx.closePath(); ctx.fill();
    ctx.fillStyle=C.mint; circle(x,y,4);
    if(p.invuln>0){ ctx.strokeStyle="rgba(244,244,250,0.7)"; ctx.lineWidth=2; ctx.beginPath(); ctx.arc(x,y,p.r+3,0,6.2832); ctx.stroke(); }
    // 오라 무기 시각화
    for(var i=0;i<p.weapons.length;i++){ var w=p.weapons[i]; if(w.key==="aura"){ var S=W_S(w); ctx.fillStyle=hexA(C.mint,0.08); circle(x,y,S.r); ctx.strokeStyle=hexA(C.mint,0.25); ctx.lineWidth=1.5; ctx.beginPath(); ctx.arc(x,y,S.r,0,6.2832); ctx.stroke(); }
      if(w.key==="orbit"){ var S=W_S(w); for(var o=0;o<S.cnt;o++){ var aa=w.ang+o/S.cnt*6.2832; ctx.fillStyle=C.secondary; softShadow(); circle(x+Math.cos(aa)*S.r,y+Math.sin(aa)*S.r,6); noShadow(); } } } }
  function drawEnemy(e){ var x=W2Sx(e.x), y=W2Sy(e.y); if(x<-40||x>W+40||y<-40||y>H+40) return; var col=e.flash>0?"#FFFFFF":e.col, r=e.r;
    softShadow();
    if(e.type==="runner"){ var a=Math.atan2(G.p.y-e.y,G.p.x-e.x); ctx.save(); ctx.translate(x,y); ctx.rotate(a); ctx.fillStyle=col; ctx.beginPath(); ctx.moveTo(r,0); ctx.lineTo(-r*0.7,-r*0.7); ctx.lineTo(-r*0.4,0); ctx.lineTo(-r*0.7,r*0.7); ctx.closePath(); ctx.fill(); ctx.restore(); noShadow(); }
    else if(e.type==="brute"){ ctx.fillStyle=col; rrect(x-r,y-r,r*2,r*2,4); ctx.fill(); noShadow(); ctx.fillStyle="rgba(0,0,0,0.18)"; rrect(x-r*0.5,y-r*0.5,r,r,3); ctx.fill(); }
    else if(e.type==="spitter"){ ctx.fillStyle=col; hexPath(x,y,r); ctx.fill(); noShadow(); }
    else if(e.type==="shielder"){ ctx.fillStyle=col; circle(x,y,r*0.85); noShadow(); var fa=Math.atan2(G.p.y-e.y,G.p.x-e.x); ctx.strokeStyle="#cfe0ff"; ctx.lineWidth=3; ctx.beginPath(); ctx.arc(x,y,r,fa-0.9,fa+0.9); ctx.stroke(); }
    else if(e.type==="elite"||e.type==="boss"){ var pu=1+Math.sin(now*3)*0.04; ctx.globalAlpha=0.2; ctx.fillStyle=col; circle(x,y,r*1.4*pu); ctx.globalAlpha=1; ctx.fillStyle=col; rrect(x-r,y-r,r*2,r*2,r*0.3); ctx.fill(); noShadow(); ctx.strokeStyle=C.secondary; ctx.lineWidth=3; rrect(x-r,y-r,r*2,r*2,r*0.3); ctx.stroke(); }
    else { ctx.fillStyle=col; circle(x,y,r); noShadow(); ctx.fillStyle="rgba(255,255,255,0.14)"; circle(x-r*0.3,y-r*0.32,r*0.3); }
    // 체력바(보스 제외)
    if(e.type!=="boss" && e.hp<e.maxHp){ var w=r*2, hpf=Math.max(0,e.hp/e.maxHp); ctx.fillStyle="rgba(0,0,0,0.5)"; rrect(x-w/2,y-r-7,w,3.5,2); ctx.fill(); ctx.fillStyle=hpf>0.5?C.success:(hpf>0.25?C.warning:C.danger); rrect(x-w/2,y-r-7,w*hpf,3.5,2); ctx.fill(); } }
  function hexPath(x,y,r){ ctx.beginPath(); for(var i=0;i<6;i++){ var a=1.0472*i; var px=x+Math.cos(a)*r,py=y+Math.sin(a)*r; if(i===0)ctx.moveTo(px,py); else ctx.lineTo(px,py); } ctx.closePath(); }
  function drawShots(){ for(var i=0;i<G.shots.length;i++){ var s=G.shots[i], x=W2Sx(s.x), y=W2Sy(s.y);
    if(s.kind==="boomer"){ ctx.save(); ctx.translate(x,y); ctx.rotate(now*12); ctx.fillStyle=s.col; rrect(-7,-2.5,14,5,2); ctx.fill(); rrect(-2.5,-7,5,14,2); ctx.fill(); ctx.restore(); }
    else if(s.kind==="seeker"){ ctx.fillStyle=s.col; circle(x,y,4); ctx.globalAlpha=0.4; circle(x-s.vx*0.01,y-s.vy*0.01,3); ctx.globalAlpha=1; }
    else { var a=Math.atan2(s.vy,s.vx); ctx.save(); ctx.translate(x,y); ctx.rotate(a); ctx.fillStyle=s.col; rrect(-2,-2,12,4,2); ctx.fill(); ctx.restore(); } } }
  function drawBolts(){ for(var i=0;i<G.bolts.length;i++){ var b=G.bolts[i]; ctx.globalAlpha=clamp(b.life/0.16,0,1); ctx.strokeStyle=b.col; ctx.lineWidth=2.5; ctx.lineJoin="round";
    var x0=W2Sx(b.x0),y0=W2Sy(b.y0),x1=W2Sx(b.x1),y1=W2Sy(b.y1); var mx=(x0+x1)/2+rnd(-8,8),my=(y0+y1)/2+rnd(-8,8); ctx.beginPath(); ctx.moveTo(x0,y0); ctx.lineTo(mx,my); ctx.lineTo(x1,y1); ctx.stroke(); ctx.globalAlpha=1; } }
  function drawGems(){ for(var i=0;i<G.gems.length;i++){ var g=G.gems[i], x=W2Sx(g.x), y=W2Sy(g.y); if(x<-20||x>W+20||y<-20||y>H+20) continue;
    var col=g.tier>=3?C.gold:(g.tier>=2?"#6FE39A":C.xp), s=g.tier>=3?6:4; ctx.save(); ctx.translate(x,y); ctx.rotate(now*1.5);
    ctx.shadowColor=col; ctx.shadowBlur=6; ctx.fillStyle=col; ctx.beginPath(); ctx.moveTo(0,-s); ctx.lineTo(s,0); ctx.lineTo(0,s); ctx.lineTo(-s,0); ctx.closePath(); ctx.fill(); ctx.shadowBlur=0; ctx.restore(); } }
  function drawDrops(){ for(var i=0;i<G.drops.length;i++){ var d=G.drops[i], x=W2Sx(d.x), y=W2Sy(d.y);
    if(d.kind==="gold"){ var g=ctx.createRadialGradient(x-2,y-2,1,x,y,7); g.addColorStop(0,C.goldHi); g.addColorStop(1,C.gold); ctx.fillStyle=g; circle(x,y,7); }
    else if(d.kind==="heal"){ ctx.fillStyle=C.success; rrect(x-8,y-8,16,16,4); ctx.fill(); ctx.fillStyle="#0a3a22"; ctx.fillRect(x-1.5,y-5,3,10); ctx.fillRect(x-5,y-1.5,10,3); }
    else { ctx.fillStyle=C.warning; softShadow(); rrect(x-9,y-7,18,14,4); ctx.fill(); noShadow(); ctx.fillStyle="#5a3a10"; ctx.fillRect(x-9,y-1,18,3); } } }
  function drawParts(){ for(var i=0;i<G.parts.length;i++){ var p=G.parts[i], x=W2Sx(p.x), y=W2Sy(p.y), a=Math.max(0,p.life/p.max);
    if(p.ring){ ctx.globalAlpha=a*0.8; ctx.strokeStyle=p.col; ctx.lineWidth=2.5; var rr=p.r0+(p.r1-p.r0)*(1-a); ctx.beginPath(); ctx.arc(x,y,rr,0,6.2832); ctx.stroke(); ctx.globalAlpha=1; }
    else { ctx.globalAlpha=a; ctx.fillStyle=p.col; if(p.sq){ ctx.fillRect(x-p.sz/2,y-p.sz/2,p.sz,p.sz); } else circle(x,y,p.sz*(0.5+a*0.5)); ctx.globalAlpha=1; } } }
  function drawTexts(){ ctx.textAlign="center"; ctx.font="800 14px sans-serif"; ctx.lineWidth=3; ctx.strokeStyle="rgba(0,0,0,0.5)";
    for(var i=0;i<G.texts.length;i++){ var t=G.texts[i], x=W2Sx(t.x)+t.jx, y=W2Sy(t.y), a=Math.max(0,t.life/t.max); ctx.globalAlpha=a; ctx.strokeText(t.s,x,y); ctx.fillStyle=t.col; ctx.fillText(t.s,x,y); ctx.globalAlpha=1; } }
  function drawJoystick(){ if(!joy.active) return; ctx.globalAlpha=0.28; ctx.fillStyle=C.tp; circle(joy.ox,joy.oy,joy.max*0.55); ctx.globalAlpha=0.4;
    var dx=joy.kx-joy.ox,dy=joy.ky-joy.oy,l=Math.hypot(dx,dy); if(l>joy.max){ dx=dx/l*joy.max; dy=dy/l*joy.max; } ctx.fillStyle=C.primary; circle(joy.ox+dx,joy.oy+dy,20); ctx.globalAlpha=1; }

  // 글리프(레벨업 카드/칩 아이콘) — 이모지 대신 도형
  function drawGlyph(canvas,key,col){ var g=canvas.getContext("2d"); var s=canvas.width; g.clearRect(0,0,s,s); g.save(); g.translate(s/2,s/2); g.strokeStyle=col; g.fillStyle=col; g.lineWidth=s*0.09; g.lineCap="round"; g.lineJoin="round"; var u=s*0.3;
    function tri(){ g.beginPath(); g.moveTo(0,-u); g.lineTo(u*0.9,u*0.7); g.lineTo(-u*0.9,u*0.7); g.closePath(); }
    if(key==="w_orbit"){ g.beginPath(); g.arc(0,0,u,0,6.2832); g.stroke(); g.beginPath(); g.arc(u,0,s*0.08,0,6.2832); g.fill(); g.beginPath(); g.arc(-u,0,s*0.08,0,6.2832); g.fill(); }
    else if(key==="w_aura"){ g.globalAlpha=0.5; g.beginPath(); g.arc(0,0,u*1.1,0,6.2832); g.fill(); g.globalAlpha=1; g.beginPath(); g.arc(0,0,u*0.5,0,6.2832); g.fill(); }
    else if(key==="w_lance"){ g.beginPath(); g.moveTo(-u,u); g.lineTo(u,-u); g.stroke(); g.beginPath(); g.moveTo(u,-u); g.lineTo(u*0.4,-u); g.lineTo(u,-u*0.4); g.closePath(); g.fill(); }
    else if(key==="w_scatter"){ for(var i=-1;i<=1;i++){ g.save(); g.rotate(i*0.4); g.beginPath(); g.moveTo(0,-u); g.lineTo(u*0.3,u*0.4); g.lineTo(-u*0.3,u*0.4); g.closePath(); g.fill(); g.restore(); } }
    else if(key==="w_chain"){ g.beginPath(); g.moveTo(-u,-u); g.lineTo(0,-u*0.2); g.lineTo(-u*0.2,u*0.2); g.lineTo(u,u); g.stroke(); }
    else if(key==="w_seeker"){ g.beginPath(); g.arc(0,0,u*0.5,0,6.2832); g.fill(); g.beginPath(); g.arc(0,0,u,2,4.2); g.stroke(); }
    else if(key==="w_boomer"){ g.beginPath(); g.arc(0,0,u,-1,2.2); g.stroke(); }
    else if(key==="p_might"){ g.beginPath(); g.moveTo(0,u); g.lineTo(0,-u); g.moveTo(-u*0.6,-u*0.3); g.lineTo(0,-u); g.lineTo(u*0.6,-u*0.3); g.stroke(); }
    else if(key==="p_haste"){ g.beginPath(); g.moveTo(u*0.3,-u); g.lineTo(-u*0.4,u*0.1); g.lineTo(u*0.05,u*0.1); g.lineTo(-u*0.3,u); g.lineTo(u*0.5,-u*0.15); g.lineTo(0,-u*0.15); g.closePath(); g.fill(); }
    else if(key==="p_swift"){ for(var i=0;i<3;i++){ g.beginPath(); g.moveTo(-u+i*u*0.5,-u*0.5); g.lineTo(u*0.2+i*u*0.5,-u*0.5); g.stroke(); g.beginPath(); g.moveTo(-u+i*u*0.5,u*0.3); g.lineTo(u*0.2+i*u*0.5,u*0.3); g.stroke(); } }
    else if(key==="p_hp"){ g.beginPath(); g.moveTo(0,u*0.8); g.bezierCurveTo(-u*1.4,-u*0.3,-u*0.4,-u,0,-u*0.3); g.bezierCurveTo(u*0.4,-u,u*1.4,-u*0.3,0,u*0.8); g.fill(); }
    else if(key==="p_armor"){ g.beginPath(); g.moveTo(0,-u); g.lineTo(u*0.8,-u*0.5); g.lineTo(u*0.6,u*0.8); g.lineTo(0,u); g.lineTo(-u*0.6,u*0.8); g.lineTo(-u*0.8,-u*0.5); g.closePath(); g.stroke(); }
    else if(key==="p_magnet"){ g.lineWidth=s*0.12; g.beginPath(); g.arc(0,-u*0.2,u*0.7,Math.PI,0); g.stroke(); g.beginPath(); g.moveTo(-u*0.7,-u*0.2); g.lineTo(-u*0.7,u*0.6); g.moveTo(u*0.7,-u*0.2); g.lineTo(u*0.7,u*0.6); g.stroke(); }
    else if(key==="p_amount"){ for(var i=-1;i<=1;i++){ g.beginPath(); g.arc(i*u*0.6,0,s*0.08,0,6.2832); g.fill(); } }
    else if(key==="p_regen"){ g.beginPath(); g.arc(0,0,u*0.8,0.4,6.0); g.stroke(); g.beginPath(); g.moveTo(u*0.55,-u*0.65); g.lineTo(u*0.8,-u*0.4); g.lineTo(u*0.45,-u*0.25); g.closePath(); g.fill(); }
    else if(key==="p_xp"){ g.beginPath(); g.moveTo(0,-u); g.lineTo(u,0); g.lineTo(0,u); g.lineTo(-u,0); g.closePath(); g.stroke(); }
    else if(key==="p_crit"){ g.beginPath(); g.arc(0,0,u,0,6.2832); g.stroke(); g.beginPath(); g.arc(0,0,s*0.07,0,6.2832); g.fill(); }
    else if(key==="p_critd"){ tri(); g.fill(); }
    else if(key==="p_luck"){ g.beginPath(); for(var i=0;i<5;i++){ var a=-1.5708+i*1.2566; g.lineTo(Math.cos(a)*u,Math.sin(a)*u); var a2=a+0.628; g.lineTo(Math.cos(a2)*u*0.45,Math.sin(a2)*u*0.45); } g.closePath(); g.fill(); }
    else { g.beginPath(); g.arc(0,0,u*0.6,0,6.2832); g.fill(); }
    g.restore(); }

  // ====== 루프 ======
  var last=0;
  function tick(ts){ requestAnimationFrame(tick); if(!last) last=ts; var dt=(ts-last)/1000; last=ts; if(dt>0.05) dt=0.05; now+=dt;
    if(G){ if(G.shake>0) G.shake=Math.max(0,G.shake-dt*40); if(G.flash>0) G.flash=Math.max(0,G.flash-dt*2.2); if(G.hurt>0) G.hurt=Math.max(0,G.hurt-dt*4); if(G.luFlash>0) G.luFlash=Math.max(0,G.luFlash-dt);
      if(G.state==="play" && !G.paused) step(dt); draw(); } }
  function step(dt){ var p=G.p; G.t+=dt; director(dt);
    // 이동
    var mx=joy.mx*joy.mag, my=joy.my*joy.mag;
    if(joy.mag<0.01){ var kx=(keys["d"]||keys["arrowright"]?1:0)-(keys["a"]||keys["arrowleft"]?1:0); var ky=(keys["s"]||keys["arrowdown"]?1:0)-(keys["w"]||keys["arrowup"]?1:0); var kl=Math.hypot(kx,ky); if(kl>0){ mx=kx/kl; my=ky/kl; } }
    if(mx||my){ p.x+=mx*p.speed*dt; p.y+=my*p.speed*dt; var l=Math.hypot(mx,my)||1; p.lastx=mx/l; p.lasty=my/l; }
    if(p.invuln>0) p.invuln-=dt; if(p.regen>0){ p.hp=Math.min(p.maxHp,p.hp+p.regen*dt); }
    for(var i=0;i<p.weapons.length;i++) fireWeapon(p.weapons[i],dt);
    updateShots(dt); updateEnemies(dt); updatePickups(dt);
    for(var i=G.parts.length-1;i>=0;i--){ var pa=G.parts[i]; if(!pa.ring){ pa.x+=pa.vx*dt; pa.y+=pa.vy*dt; pa.vy+=160*dt; pa.vx*=0.96; } pa.life-=dt; if(pa.life<=0) G.parts.splice(i,1); }
    for(var i=G.texts.length-1;i>=0;i--){ var t=G.texts[i]; t.y+=t.vy*dt; t.vy+=30*dt; t.life-=dt; if(t.life<=0) G.texts.splice(i,1); }
    for(var i=G.bolts.length-1;i>=0;i--){ G.bolts[i].life-=dt; if(G.bolts[i].life<=0) G.bolts.splice(i,1); }
    updateHud();
    if(G.t>=840 && G.state==="play"){ /* 생존 승리는 보스 처치로 처리, 보호용 */ }
  }

  // ====== HUD/UI 갱신 ======
  var lastHp=-1,lastGold=-1,lastLv=-1;
  function updateHud(){ var p=G.p; document.getElementById("xpfill").style.width=(p.xp/p.xpNext*100)+"%";
    document.getElementById("hpfill").style.width=(Math.max(0,p.hp)/p.maxHp*100)+"%";
    document.getElementById("hpwrap").classList.toggle("low",p.hp/p.maxHp<0.25);
    document.getElementById("timer").textContent=fmtTime(G.t);
    if(p.level!==lastLv){ document.getElementById("lvbadge").textContent="Lv "+p.level; lastLv=p.level; }
    var gv=SAVE.gold+G.goldRun; if(gv!==lastGold){ document.getElementById("goldV").textContent=gv; lastGold=gv; } }
  function refreshChips(){ var box=document.getElementById("chips"); box.innerHTML=""; var p=G.p;
    for(var i=0;i<p.weapons.length;i++){ (function(w){ var c=document.createElement("div"); c.className="chip"; var cvs=document.createElement("canvas"); cvs.width=48; cvs.height=48; c.appendChild(cvs);
      var lv=document.createElement("span"); lv.className="lv"; lv.textContent=w.evolved?"★":w.lvl; c.appendChild(lv); box.appendChild(c); drawGlyph(cvs,"w_"+w.key,WDEF[w.key].color); })(p.weapons[i]); } }

  var toastEl=document.getElementById("toast"),toastT=null;
  function toast(m){ toastEl.textContent=m; toastEl.classList.add("show"); if(toastT) clearTimeout(toastT); toastT=setTimeout(function(){ toastEl.classList.remove("show"); },1400); }
  var hintEl=document.getElementById("hint"),hintT=null;
  function hint(m){ hintEl.textContent=m; hintEl.classList.add("show"); }
  function hideHint(){ hintEl.classList.remove("show"); }
  function banner(m,col){ toast(m); G.flash=Math.max(G.flash,0.2); }

  // ====== 메뉴/상점/일시정지 ======
  function showMenuRec(){ document.getElementById("menuRec").textContent=SAVE.bestTime>0?("최고 생존 "+fmtTime(SAVE.bestTime)+" · 골드 "+SAVE.gold):("골드 "+SAVE.gold); }
  function renderShop(){ document.getElementById("shopGold").textContent="보유 골드: "+SAVE.gold; var box=document.getElementById("shopList"); box.innerHTML="";
    for(var i=0;i<META.length;i++){ (function(m){ var lv=metaLv(m.key),cost=metaCost(m),maxed=lv>=m.max; var row=document.createElement("div"); row.className="shopitem";
      var dots=""; for(var k=0;k<m.max;k++) dots+=(k<lv?"●":"○");
      row.innerHTML='<div class="si"><div class="nm">'+m.name+'</div><div class="ds">'+m.ds+'</div><div class="dots">'+dots+'</div></div>'+
        '<button class="buy'+(maxed?" max":(SAVE.gold<cost?" poor":""))+'">'+(maxed?"MAX":cost+"G")+'</button>';
      row.querySelector(".buy").addEventListener("click",function(){ if(maxed||SAVE.gold<cost) return; SAVE.gold-=cost; SAVE.meta[m.key]=lv+1; persist(); snd.buy(); renderShop(); showMenuRec(); });
      box.appendChild(row); })(META[i]); } }
  function refreshSettings(){ document.getElementById("soundBtn").textContent="효과음: "+(SAVE.sound?"켜짐":"꺼짐"); document.getElementById("musicBtn").textContent="배경음: "+(SAVE.music?"켜짐":"꺼짐"); }

  function startRun(){ audio(); if(SAVE.music) startMusic(); G=newGame(); G.tutMove=true; G.tutLevel=true; lastHp=lastGold=lastLv=-1; resize();
    refreshChips(); updateHud(); ["menu","shop","levelup","pause","result"].forEach(function(id){ document.getElementById(id).classList.add("hide"); });
    document.getElementById("pauseBtn").style.opacity="1"; hint("아래를 누른 채 드래그해 이동하세요"); }
  function toMenu(){ G=null; document.getElementById("pauseBtn").style.opacity="0"; hideHint(); showMenuRec();
    ["shop","levelup","pause","result"].forEach(function(id){ document.getElementById(id).classList.add("hide"); }); document.getElementById("menu").classList.remove("hide"); }
  function togglePause(){ if(!G||G.state!=="play") return; if(luOpen) return; G.paused=!G.paused; document.getElementById("pause").classList.toggle("hide",!G.paused); }

  document.getElementById("playBtn").addEventListener("click",startRun);
  document.getElementById("shopBtn").addEventListener("click",function(){ renderShop(); document.getElementById("menu").classList.add("hide"); document.getElementById("shop").classList.remove("hide"); });
  document.getElementById("shopBack").addEventListener("click",function(){ document.getElementById("shop").classList.add("hide"); document.getElementById("menu").classList.remove("hide"); showMenuRec(); });
  document.getElementById("howBtn").addEventListener("click",function(){ toast("이동=드래그 · 공격=자동 · 젬=레벨업 · 14분 생존!"); });
  document.getElementById("pauseBtn").addEventListener("click",togglePause);
  document.getElementById("resumeBtn").addEventListener("click",togglePause);
  document.getElementById("quitBtn").addEventListener("click",function(){ document.getElementById("pause").classList.add("hide"); endRun(false); });
  document.getElementById("resContinue").addEventListener("click",toMenu);
  document.getElementById("soundBtn").addEventListener("click",function(){ SAVE.sound=!SAVE.sound; persist(); refreshSettings(); });
  document.getElementById("musicBtn").addEventListener("click",function(){ SAVE.music=!SAVE.music; persist(); refreshSettings(); if(SAVE.music) startMusic(); else stopMusic(); });

  function onNativeMsg(ev){ var data=ev.data; try{ var m=(typeof data==="string")?JSON.parse(data):data; if(m&&m.type==="back"){ if(G&&G.state==="play") togglePause(); else if(G&&G.state==="over") toMenu(); } }catch(e){} }
  document.addEventListener("message",onNativeMsg); window.addEventListener("message",onNativeMsg);

  // 초기화
  resize(); refreshSettings(); showMenuRec(); requestAnimationFrame(tick);
})();
</script>
</body>
</html>`;
