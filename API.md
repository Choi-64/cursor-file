# API 문서

## 개요
이 문서는 프로젝트의 모든 공용 API 인터페이스에 대한 포괄적인 가이드입니다.

## 목차
1. [인증 API](#인증-api)
2. [사용자 관리 API](#사용자-관리-api)
3. [데이터 처리 API](#데이터-처리-api)
4. [파일 관리 API](#파일-관리-api)
5. [에러 처리](#에러-처리)
6. [응답 형식](#응답-형식)

## 인증 API

### 로그인
사용자 인증을 위한 API입니다.

**엔드포인트:** `POST /api/auth/login`

**요청 본문:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**응답:**
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": 1,
      "email": "user@example.com",
      "name": "사용자명"
    }
  }
}
```

**에러 응답:**
```json
{
  "success": false,
  "error": {
    "code": "INVALID_CREDENTIALS",
    "message": "이메일 또는 비밀번호가 올바르지 않습니다."
  }
}
```

### 로그아웃
사용자 로그아웃을 위한 API입니다.

**엔드포인트:** `POST /api/auth/logout`

**헤더:** `Authorization: Bearer {token}`

**응답:**
```json
{
  "success": true,
  "message": "로그아웃되었습니다."
}
```

## 사용자 관리 API

### 사용자 정보 조회
현재 로그인한 사용자의 정보를 조회합니다.

**엔드포인트:** `GET /api/users/me`

**헤더:** `Authorization: Bearer {token}`

**응답:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "email": "user@example.com",
    "name": "사용자명",
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-01T00:00:00Z"
  }
}
```

### 사용자 정보 수정
사용자 정보를 수정합니다.

**엔드포인트:** `PUT /api/users/me`

**헤더:** `Authorization: Bearer {token}`

**요청 본문:**
```json
{
  "name": "새로운 이름",
  "email": "newemail@example.com"
}
```

**응답:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "email": "newemail@example.com",
    "name": "새로운 이름",
    "updatedAt": "2024-01-01T00:00:00Z"
  }
}
```

## 데이터 처리 API

### 데이터 생성
새로운 데이터를 생성합니다.

**엔드포인트:** `POST /api/data`

**헤더:** `Authorization: Bearer {token}`

**요청 본문:**
```json
{
  "title": "데이터 제목",
  "content": "데이터 내용",
  "tags": ["태그1", "태그2"]
}
```

**응답:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "데이터 제목",
    "content": "데이터 내용",
    "tags": ["태그1", "태그2"],
    "createdAt": "2024-01-01T00:00:00Z"
  }
}
```

### 데이터 조회
데이터 목록을 조회합니다.

**엔드포인트:** `GET /api/data`

**쿼리 파라미터:**
- `page`: 페이지 번호 (기본값: 1)
- `limit`: 페이지당 항목 수 (기본값: 10)
- `search`: 검색어
- `tags`: 태그 필터 (쉼표로 구분)

**응답:**
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": 1,
        "title": "데이터 제목",
        "content": "데이터 내용",
        "tags": ["태그1", "태그2"],
        "createdAt": "2024-01-01T00:00:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 100,
      "totalPages": 10
    }
  }
}
```

### 데이터 상세 조회
특정 데이터의 상세 정보를 조회합니다.

**엔드포인트:** `GET /api/data/{id}`

**응답:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "데이터 제목",
    "content": "데이터 내용",
    "tags": ["태그1", "태그2"],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-01T00:00:00Z"
  }
}
```

### 데이터 수정
기존 데이터를 수정합니다.

**엔드포인트:** `PUT /api/data/{id}`

**헤더:** `Authorization: Bearer {token}`

**요청 본문:**
```json
{
  "title": "수정된 제목",
  "content": "수정된 내용",
  "tags": ["새태그1", "새태그2"]
}
```

### 데이터 삭제
데이터를 삭제합니다.

**엔드포인트:** `DELETE /api/data/{id}`

**헤더:** `Authorization: Bearer {token}`

**응답:**
```json
{
  "success": true,
  "message": "데이터가 삭제되었습니다."
}
```

## 파일 관리 API

### 파일 업로드
파일을 업로드합니다.

**엔드포인트:** `POST /api/files/upload`

**헤더:** `Authorization: Bearer {token}`

**요청:** `multipart/form-data`

**응답:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "filename": "example.pdf",
    "originalName": "example.pdf",
    "size": 1024000,
    "mimeType": "application/pdf",
    "url": "/files/example.pdf",
    "uploadedAt": "2024-01-01T00:00:00Z"
  }
}
```

### 파일 다운로드
파일을 다운로드합니다.

**엔드포인트:** `GET /api/files/{id}/download`

**응답:** 파일 스트림

### 파일 정보 조회
파일의 메타데이터를 조회합니다.

**엔드포인트:** `GET /api/files/{id}`

**응답:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "filename": "example.pdf",
    "originalName": "example.pdf",
    "size": 1024000,
    "mimeType": "application/pdf",
    "url": "/files/example.pdf",
    "uploadedAt": "2024-01-01T00:00:00Z"
  }
}
```

## 에러 처리

### HTTP 상태 코드
- `200`: 성공
- `201`: 생성됨
- `400`: 잘못된 요청
- `401`: 인증 실패
- `403`: 권한 없음
- `404`: 리소스를 찾을 수 없음
- `500`: 서버 내부 오류

### 에러 응답 형식
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "에러 메시지",
    "details": "상세 정보 (선택사항)"
  }
}
```

### 일반적인 에러 코드
- `VALIDATION_ERROR`: 입력 데이터 검증 실패
- `NOT_FOUND`: 리소스를 찾을 수 없음
- `UNAUTHORIZED`: 인증이 필요함
- `FORBIDDEN`: 접근 권한이 없음
- `INTERNAL_ERROR`: 서버 내부 오류

## 응답 형식

### 성공 응답
모든 성공적인 API 호출은 다음 형식을 따릅니다:

```json
{
  "success": true,
  "data": { ... },
  "message": "성공 메시지 (선택사항)"
}
```

### 페이지네이션 응답
목록 조회 API는 페이지네이션 정보를 포함합니다:

```json
{
  "success": true,
  "data": {
    "items": [ ... ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 100,
      "totalPages": 10,
      "hasNext": true,
      "hasPrev": false
    }
  }
}
```

## 인증 및 권한

### JWT 토큰
API 인증은 JWT(JSON Web Token)를 사용합니다.

**토큰 형식:** `Bearer {token}`

**토큰 만료:** 24시간

**토큰 갱신:** `POST /api/auth/refresh`

### 권한 레벨
- `user`: 일반 사용자
- `admin`: 관리자
- `super_admin`: 최고 관리자

## 요청 제한

### Rate Limiting
- 일반 사용자: 분당 100회
- 관리자: 분당 1000회

### 파일 업로드 제한
- 최대 파일 크기: 100MB
- 허용된 파일 형식: jpg, png, pdf, doc, docx, xls, xlsx

## 웹훅

### 웹훅 설정
데이터 변경 시 외부 시스템에 알림을 보낼 수 있습니다.

**엔드포인트:** `POST /api/webhooks`

**요청 본문:**
```json
{
  "url": "https://example.com/webhook",
  "events": ["data.created", "data.updated", "data.deleted"],
  "secret": "webhook_secret"
}
```

### 웹훅 이벤트
- `data.created`: 데이터 생성 시
- `data.updated`: 데이터 수정 시
- `data.deleted`: 데이터 삭제 시
- `user.registered`: 사용자 등록 시

## SDK 및 클라이언트

### JavaScript/TypeScript
```javascript
import { ApiClient } from '@project/sdk';

const client = new ApiClient({
  baseUrl: 'https://api.example.com',
  token: 'your_token'
});

// 데이터 조회
const data = await client.data.list({ page: 1, limit: 10 });

// 데이터 생성
const newData = await client.data.create({
  title: '새 데이터',
  content: '내용'
});
```

### Python
```python
from project_sdk import ApiClient

client = ApiClient(
    base_url="https://api.example.com",
    token="your_token"
)

# 데이터 조회
data = client.data.list(page=1, limit=10)

# 데이터 생성
new_data = client.data.create(
    title="새 데이터",
    content="내용"
)
```

## 변경 이력

| 버전 | 날짜 | 변경 내용 |
|------|------|-----------|
| 1.0.0 | 2024-01-01 | 초기 API 문서 작성 |
| 1.1.0 | 2024-01-15 | 웹훅 API 추가 |
| 1.2.0 | 2024-02-01 | 파일 관리 API 추가 |

## 지원 및 문의

API 사용에 대한 질문이나 문제가 있으시면 다음 연락처로 문의해주세요:

- **이메일:** support@example.com
- **문서:** https://docs.example.com
- **GitHub:** https://github.com/example/project/issues