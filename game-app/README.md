# 사령관의 타워디펜스 (Commander TD)

혼자 즐기는 오프라인 모바일 타워디펜스 게임. Expo(React Native) 셸 안에서
HTML5 Canvas 게임을 WebView로 구동한다.

## 어떻게 플레이하나
- **밀려오는 적**이 정해진 경로를 따라 기지로 향한다. 빈 칸에 타워를 세워 막는다.
- 타워 4종: 기본포탑 / 속사포탑 / 캐논포탑(스플래시) / 얼음포탑(감속)
- 타워를 탭하면 **업그레이드(최대 Lv.3) / 판매** 가능
- 적 처치·웨이브 클리어로 골드 획득, 골드로 타워 건설·강화
- 하단 [웨이브 시작]으로 다음 웨이브 소환, 배속(1x/2x)·일시정지 지원
- **스테이지 5종**(서로 다른 경로·난이도), 클리어하면 다음 스테이지 잠금 해제.
  5스테이지는 무한 웨이브 생존 모드.
- 진행상황(잠금 해제·스테이지별 최고 기록)은 기기에 저장된다.

## APK 받기 (GitHub Actions에서 빌드)
이 저장소에는 로컬 Android SDK가 없어 로컬 빌드는 불가. APK는 CI에서 만든다.

1. `game-app/` 변경을 브랜치에 push하면 워크플로 **Build Game APK**가 실행됨
   (`.github/workflows/build-game-apk.yml`). 수동 실행도 가능(workflow_dispatch).
2. GitHub → **Actions** 탭 → 해당 실행(run) → 하단 **Artifacts**에서
   `CommanderTD-debug-<번호>` zip 다운로드 → 압축 해제 → `app-debug.apk`
3. 안드로이드 폰에 설치(‘출처를 알 수 없는 앱 설치 허용’ 필요). 디버그 서명이라 바로 설치 가능.

## 로컬 개발(선택)
```
cd game-app
npm install
npx expo start   # Expo Go 또는 에뮬레이터
```
게임 로직은 `game/gameHtml.js`(단일 HTML 문자열), RN 셸은 `App.jsx`.
