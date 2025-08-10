# parseDate

- 범주: utils/date
- 공개 여부: Public
- 안정성: Stable
- 지원 환경: Node, Browser

## 개요
ISO8601 문자열, 타임스탬프, `Date`를 받아 `Date` 인스턴스로 정규화합니다.

## 시그니처
```ts
function parseDate(value: string | number | Date): Date
```

## 매개변수
- `value`: `string | number | Date` — 입력 값 (필수)

## 반환값
- `Date` — 파싱된 날짜 객체. 파싱 실패 시 예외 발생.

## 예제
```ts
import { parseDate } from '@acme/utils/date'

parseDate('2024-01-01T12:00:00Z')
parseDate(1704110400000)
parseDate(new Date())
```

## 사용 지침
- 잘못된 문자열은 `Error('Invalid date')`를 던집니다.
- 타임존 처리가 필요한 경우 입력을 UTC 기준으로 맞추세요.

## 변경 이력
- v1.0.0: 최초 공개