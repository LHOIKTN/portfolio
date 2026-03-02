# Portfolio (GSAP)

GSAP(ScrollTrigger)를 활용한 웹 포트폴리오 템플릿입니다.

## 실행 방법

```bash
# 로컬 서버로 실행 (권장)
npx serve .

# 또는
python3 -m http.server 8080
```

브라우저에서 `http://localhost:3000` (serve) 또는 `http://localhost:8080` (python) 으로 접속하세요.

## 포함된 GSAP 효과

- **Hero**: 타이틀 단어별 등장, 라벨·설명·CTA 순차 페이드인
- **ScrollTrigger**: About / Works / Contact 섹션 스크롤 시 등장 애니메이션
- **Parallax**: 히어로 배경 그라데이션·그리드 스크롤 패럴랙스
- **Magnetic**: 버튼·링크에 마우스 따라다니는 자석 효과
- **Scroll hint**: 스크롤 유도 라인 반복 애니메이션
- **Work hover**: 프로젝트 카드 이미지 호버 시 스케일

## 수정 포인트

- `index.html`: 본인 소개, 프로젝트 목록, 이메일·SNS 링크
- `styles.css`: `:root` 색상(accent 등), 폰트
- `main.js`: 트리거 지점, duration, stagger 값으로 연출 강도 조절

## 사용 라이브러리

- [GSAP 3](https://greensock.com/gsap/) + [ScrollTrigger](https://greensock.com/scrolltrigger/) (CDN)
