# 스파크 서바이버 — iOS App Store 제출 가이드

이 게임은 **웹(HTML5 Canvas)** 본체를 **Expo(React Native) + WebView** 네이티브 셸로 감싸
iOS 앱(.ipa)으로 빌드합니다. **Mac 없이 EAS 클라우드 빌드**로 제출까지 가능합니다.
(현재 코드: `game-app/` = Expo 앱, `App.jsx`가 `game/gameHtml.js`의 게임을 오프라인 번들로 로드)

> 중요: 실제 제출은 **본인의 Apple Developer 계정**으로 해야 합니다. 아래 순서대로 진행하세요.

---

## 0) 준비물 체크리스트
- [ ] **Apple Developer Program 가입** ($99/년, 승인까지 보통 24~48시간) — https://developer.apple.com/programs/
- [ ] Mac 또는 그냥 PC + 인터넷 (EAS 클라우드 빌드라 Mac 불필요)
- [ ] Node.js 18+ 설치, 터미널 사용
- [ ] **앱 아이콘 1024×1024 PNG**(투명도 없음) — `game-app/assets/icon.png`
      (저장소의 `game-icon.svg`를 1024 PNG로 내보내면 됨: 예) 온라인 svg→png 변환 또는 Figma/그림판)
- [ ] 스크린샷: 6.7"(1290×2796) + 6.5"(1242×2688) 각 2~3장 (아이폰에서 게임 플레이 캡처)
- [ ] 개인정보처리방침 URL: `https://timlikeanjimin.github.io/hijimin/game-privacy.html` (이미 배포됨)

## 1) Apple Developer 계정 만들기
1. https://developer.apple.com/account/ 에서 Apple ID로 로그인
2. **Enroll** → 개인(Individual) 선택 → 결제($99/년) → 승인 대기(이메일)
3. 승인되면 https://appstoreconnect.apple.com 접속 가능

## 2) 로컬 도구 설치 & 로그인
```
npm install -g eas-cli
cd game-app
npm install
eas login            # Expo 계정(무료) 생성/로그인
```

## 3) 아이콘 넣기
- `game-app/assets/icon.png` (1024×1024, 불투명)로 저장
- `app.json`의 `expo`에 아이콘 지정 추가:
```
"icon": "./assets/icon.png",
"ios": { ... "icon": "./assets/icon.png" }
```
(스플래시는 `app.json`의 `splash.backgroundColor`로 단색 처리됨. 원하면 `splash.image`도 추가 가능)

## 4) iOS 빌드 (EAS 클라우드, Mac 불필요)
```
cd game-app
eas build --platform ios --profile production
```
- 처음엔 EAS가 Apple 로그인/인증서(Distribution Certificate, Provisioning Profile)를
  **자동으로 생성·관리**할지 물어봄 → Yes. (Apple 계정 2단계 인증 필요)
- 빌드 완료되면 `.ipa`가 EAS에 보관됨.

## 5) TestFlight 업로드 & 제출
```
eas submit --platform ios --latest
```
- App Store Connect의 앱에 빌드가 올라가고 **TestFlight**에서 본인 기기로 먼저 테스트 가능.
- (앱이 App Store Connect에 아직 없으면 `eas submit`이 만들어주거나, 4)단계에서 안내됨)

## 6) App Store Connect 스토어 정보 입력
https://appstoreconnect.apple.com → My Apps → (앱 선택) → **App Information / Pricing / Prepare for Submission**
- **이름**: 스파크 서바이버 (Spark Survivor)
- **부제(Subtitle)**: 한 손으로 즐기는 생존 로그라이크
- **카테고리**: Games > Action (보조: Arcade)
- **설명/키워드**: 아래 "스토어 문구" 참고
- **스크린샷**: 6.7"/6.5" 업로드
- **개인정보처리방침 URL**: 위 링크
- **App Privacy(데이터 수집)**: **"Data Not Collected"** 선택 (이 게임은 수집 안 함)
- **연령 등급(Age Rating)**: 설문에서 폭력/공포 "없음~약함"으로 → 4+ 또는 9+
- **가격**: 무료(Free)
- **수출 규정(Encryption)**: 암호화 사용 안 함 → `ITSAppUsesNonExemptEncryption=false` 이미 설정됨
- 저장 후 **Submit for Review**

## 7) 심사 통과 팁 (가이드라인 4.2 "최소 기능" 대응)
웹뷰 기반 앱은 "그냥 웹사이트"로 보이면 반려될 수 있습니다. 우리는 다음을 충족:
- 게임이 **앱 내부에 번들**되어 **완전 오프라인** 동작 (외부 URL 로드 아님) ✅
- 진짜 게임 콘텐츠(무기 7종·적·보스·메타 진행·세이브) + 햅틱/사운드 ✅
- 네이티브 스플래시/아이콘/전체화면 ✅
권장 추가(반려 위험 더 낮추기):
- 스크린샷·설명을 **게임 플레이 위주**로 구성(웹페이지처럼 보이지 않게)
- 앱 아이콘을 완성도 있게(위 1024 PNG)
- 필요 시 Game Center(점수판) 연동을 추가하면 더 "네이티브 게임"으로 인정받기 쉬움(선택)

## 스토어 문구(예시)
- **설명**: "끝없이 몰려오는 외계 무리에서 살아남아라! 한 손으로 이동하면 무기는 자동 공격.
  레벨업마다 무기를 고르고 진화시켜 나만의 빌드를 완성하세요. 14분을 버티면 최종 보스가 기다립니다.
  별가루를 모아 영구 강화까지 — 한 판만 더 하게 되는 생존 로그라이크."
- **키워드**: 생존,로그라이크,뱀파이어서바이벌,슈팅,아케이드,survivor,roguelike,bullet,arcade,offline

---

### 참고
- 게임 자체(웹)는 이미 라이브: `https://timlikeanjimin.github.io/hijimin/game.html`
- iOS 셸 코드: `game-app/`(Expo). 게임을 수정하면 `node game-app/scripts/gen-web-game.js`로 웹 갱신,
  iOS 앱은 `App.jsx`가 동일한 `game/gameHtml.js`를 불러오므로 재빌드만 하면 반영됨.
- Android(.apk/.aab)도 같은 방식으로 가능: `eas build -p android`. (현재 자동 빌드는 꺼둠)
