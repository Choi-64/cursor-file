# cursor-file

단일 HTML 대시보드로 공포·탐욕 지수, 한·미 7대 경제지표, 12개 주요 종목의 펀더멘털·기술·CANSLIM 진단을 한눈에 볼 수 있습니다.

## 보기
- `index.html`을 브라우저에서 직접 열면 됩니다.
- 모든 숫자는 예시 데이터이므로 실제 값으로 교체한 뒤 사용하세요.

## 데이터 교체 위치
- 공포·탐욕: `fearGreedIndicators` 배열
- 한국/미국 경제지표: `krIndicatorsData`, `usIndicatorsData`
- 재무, 기술적 지표, CANSLIM: `financials`, `techSignals`, `canslim` 배열

필요 시 API 연동/자동화로 데이터를 주기적으로 갱신할 수 있습니다.
