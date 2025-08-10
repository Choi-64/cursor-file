# 함수 문서

## 개요
이 문서는 프로젝트에서 사용되는 주요 함수들의 상세한 사용법과 예제를 제공합니다.

## 목차
1. [유틸리티 함수](#유틸리티-함수)
2. [데이터 처리 함수](#데이터-처리-함수)
3. [인증 및 보안 함수](#인증-및-보안-함수)
4. [파일 처리 함수](#파일-처리-함수)
5. [검증 함수](#검증-함수)
6. [포맷팅 함수](#포맷팅-함수)

## 유틸리티 함수

### `debounce(func, delay)`
함수의 연속 호출을 제한하여 성능을 최적화합니다.

**매개변수:**
- `func` (Function): 실행할 함수
- `delay` (number): 지연 시간 (밀리초)

**반환값:** (Function): 디바운스된 함수

**예제:**
```javascript
import { debounce } from './utils';

// 검색 입력 시 API 호출 최적화
const debouncedSearch = debounce(async (query) => {
  const results = await searchAPI(query);
  updateResults(results);
}, 300);

// 사용
searchInput.addEventListener('input', (e) => {
  debouncedSearch(e.target.value);
});
```

### `throttle(func, limit)`
함수의 호출 빈도를 제한합니다.

**매개변수:**
- `func` (Function): 실행할 함수
- `limit` (number): 호출 제한 시간 (밀리초)

**반환값:** (Function): 스로틀된 함수

**예제:**
```javascript
import { throttle } from './utils';

// 스크롤 이벤트 최적화
const throttledScroll = throttle(() => {
  updateScrollPosition();
}, 100);

window.addEventListener('scroll', throttledScroll);
```

### `deepClone(obj)`
객체의 깊은 복사본을 생성합니다.

**매개변수:**
- `obj` (any): 복사할 객체

**반환값:** (any): 깊은 복사된 객체

**예제:**
```javascript
import { deepClone } from './utils';

const original = {
  user: {
    name: 'John',
    preferences: {
      theme: 'dark',
      language: 'ko'
    }
  }
};

const cloned = deepClone(original);
cloned.user.preferences.theme = 'light';

console.log(original.user.preferences.theme); // 'dark'
console.log(cloned.user.preferences.theme);   // 'light'
```

### `generateId()`
고유한 ID를 생성합니다.

**반환값:** (string): 고유 ID

**예제:**
```javascript
import { generateId } from './utils';

const newItem = {
  id: generateId(),
  name: '새 항목',
  createdAt: new Date()
};
```

## 데이터 처리 함수

### `sortBy(array, key, direction)`
배열을 지정된 키로 정렬합니다.

**매개변수:**
- `array` (Array): 정렬할 배열
- `key` (string): 정렬 기준 키
- `direction` (string): 정렬 방향 ('asc' 또는 'desc', 기본값: 'asc')

**반환값:** (Array): 정렬된 배열

**예제:**
```javascript
import { sortBy } from './data';

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 }
];

// 나이로 오름차순 정렬
const sortedByAge = sortBy(users, 'age', 'asc');
// 결과: [{ name: 'Charlie', age: 20 }, { name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }]

// 이름으로 내림차순 정렬
const sortedByName = sortBy(users, 'name', 'desc');
// 결과: [{ name: 'Charlie', age: 20 }, { name: 'Bob', age: 30 }, { name: 'Alice', age: 25 }]
```

### `filterBy(array, criteria)`
배열을 여러 조건으로 필터링합니다.

**매개변수:**
- `array` (Array): 필터링할 배열
- `criteria` (Object): 필터링 조건

**반환값:** (Array): 필터링된 배열

**예제:**
```javascript
import { filterBy } from './data';

const products = [
  { name: 'Laptop', category: 'Electronics', price: 1000, inStock: true },
  { name: 'Book', category: 'Books', price: 20, inStock: false },
  { name: 'Phone', category: 'Electronics', price: 500, inStock: true }
];

// 전자제품이면서 재고가 있는 제품
const availableElectronics = filterBy(products, {
  category: 'Electronics',
  inStock: true
});

// 가격이 100 이상인 제품
const expensiveProducts = filterBy(products, {
  price: { $gte: 100 }
});
```

### `groupBy(array, key)`
배열을 지정된 키로 그룹화합니다.

**매개변수:**
- `array` (Array): 그룹화할 배열
- `key` (string): 그룹화 기준 키

**반환값:** (Object): 그룹화된 객체

**예제:**
```javascript
import { groupBy } from './data';

const orders = [
  { id: 1, customer: 'Alice', status: 'pending', amount: 100 },
  { id: 2, customer: 'Bob', status: 'completed', amount: 200 },
  { id: 3, customer: 'Alice', status: 'completed', amount: 150 }
];

const groupedByCustomer = groupBy(orders, 'customer');
// 결과:
// {
//   'Alice': [
//     { id: 1, customer: 'Alice', status: 'pending', amount: 100 },
//     { id: 3, customer: 'Alice', status: 'completed', amount: 150 }
//   ],
//   'Bob': [
//     { id: 2, customer: 'Bob', status: 'completed', amount: 200 }
//   ]
// }
```

### `paginate(array, page, limit)`
배열을 페이지 단위로 분할합니다.

**매개변수:**
- `array` (Array): 분할할 배열
- `page` (number): 페이지 번호 (1부터 시작)
- `limit` (number): 페이지당 항목 수

**반환값:** (Object): 페이지네이션 정보와 데이터

**예제:**
```javascript
import { paginate } from './data';

const allItems = Array.from({ length: 100 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}` }));

const result = paginate(allItems, 2, 10);
// 결과:
// {
//   items: [
//     { id: 11, name: 'Item 11' },
//     { id: 12, name: 'Item 12' },
//     // ... 10개 항목
//   ],
//   pagination: {
//     page: 2,
//     limit: 10,
//     total: 100,
//     totalPages: 10,
//     hasNext: true,
//     hasPrev: true
//   }
// }
```

## 인증 및 보안 함수

### `hashPassword(password)`
비밀번호를 안전하게 해시화합니다.

**매개변수:**
- `password` (string): 해시화할 비밀번호

**반환값:** (Promise<string>): 해시된 비밀번호

**예제:**
```javascript
import { hashPassword } from './auth';

async function createUser(userData) {
  const hashedPassword = await hashPassword(userData.password);
  
  const user = {
    ...userData,
    password: hashedPassword,
    createdAt: new Date()
  };
  
  return await saveUser(user);
}
```

### `verifyPassword(password, hash)`
비밀번호와 해시를 비교하여 검증합니다.

**매개변수:**
- `password` (string): 검증할 비밀번호
- `hash` (string): 저장된 해시

**반환값:** (Promise<boolean>): 비밀번호 일치 여부

**예제:**
```javascript
import { verifyPassword } from './auth';

async function authenticateUser(email, password) {
  const user = await findUserByEmail(email);
  if (!user) {
    throw new Error('사용자를 찾을 수 없습니다.');
  }
  
  const isValid = await verifyPassword(password, user.password);
  if (!isValid) {
    throw new Error('비밀번호가 올바르지 않습니다.');
  }
  
  return user;
}
```

### `generateToken(payload, secret, options)`
JWT 토큰을 생성합니다.

**매개변수:**
- `payload` (Object): 토큰에 포함할 데이터
- `secret` (string): 서명 비밀키
- `options` (Object): 토큰 옵션 (선택사항)

**반환값:** (string): JWT 토큰

**예제:**
```javascript
import { generateToken } from './auth';

function createAuthToken(user) {
  const payload = {
    userId: user.id,
    email: user.email,
    role: user.role
  };
  
  const token = generateToken(payload, process.env.JWT_SECRET, {
    expiresIn: '24h'
  });
  
  return token;
}
```

### `verifyToken(token, secret)`
JWT 토큰을 검증하고 페이로드를 반환합니다.

**매개변수:**
- `token` (string): 검증할 JWT 토큰
- `secret` (string): 서명 비밀키

**반환값:** (Object): 토큰 페이로드

**예제:**
```javascript
import { verifyToken } from './auth';

function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: '토큰이 필요합니다.' });
  }
  
  try {
    const payload = verifyToken(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (error) {
    return res.status(403).json({ error: '유효하지 않은 토큰입니다.' });
  }
}
```

## 파일 처리 함수

### `uploadFile(file, options)`
파일을 업로드하고 메타데이터를 반환합니다.

**매개변수:**
- `file` (File|Buffer): 업로드할 파일
- `options` (Object): 업로드 옵션

**반환값:** (Promise<Object>): 업로드된 파일 정보

**예제:**
```javascript
import { uploadFile } from './files';

async function handleFileUpload(file) {
  try {
    const result = await uploadFile(file, {
      destination: 'uploads/',
      allowedTypes: ['image/jpeg', 'image/png', 'application/pdf'],
      maxSize: 5 * 1024 * 1024, // 5MB
      generateThumbnail: true
    });
    
    return {
      success: true,
      file: result
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}
```

### `resizeImage(imagePath, options)`
이미지 크기를 조정합니다.

**매개변수:**
- `imagePath` (string): 이미지 파일 경로
- `options` (Object): 리사이즈 옵션

**반환값:** (Promise<string>): 리사이즈된 이미지 경로

**예제:**
```javascript
import { resizeImage } from './files';

async function createThumbnail(imagePath) {
  const thumbnailPath = await resizeImage(imagePath, {
    width: 150,
    height: 150,
    quality: 80,
    format: 'jpeg'
  });
  
  return thumbnailPath;
}
```

### `validateFileType(file, allowedTypes)`
파일 타입을 검증합니다.

**매개변수:**
- `file` (File|Buffer): 검증할 파일
- `allowedTypes` (Array): 허용된 파일 타입

**반환값:** (boolean): 파일 타입 유효성

**예제:**
```javascript
import { validateFileType } from './files';

function isFileAllowed(file) {
  const allowedTypes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'application/pdf'
  ];
  
  return validateFileType(file, allowedTypes);
}
```

## 검증 함수

### `validateEmail(email)`
이메일 주소의 유효성을 검증합니다.

**매개변수:**
- `email` (string): 검증할 이메일 주소

**반환값:** (boolean): 이메일 유효성

**예제:**
```javascript
import { validateEmail } from './validation';

function validateUserInput(input) {
  const errors = [];
  
  if (!validateEmail(input.email)) {
    errors.push('유효한 이메일 주소를 입력해주세요.');
  }
  
  if (input.password.length < 8) {
    errors.push('비밀번호는 최소 8자 이상이어야 합니다.');
  }
  
  return errors;
}
```

### `validatePhoneNumber(phone)`
전화번호의 유효성을 검증합니다.

**매개변수:**
- `phone` (string): 검증할 전화번호

**반환값:** (boolean): 전화번호 유효성

**예제:**
```javascript
import { validatePhoneNumber } from './validation';

function validateContactInfo(contact) {
  const errors = [];
  
  if (!validatePhoneNumber(contact.phone)) {
    errors.push('유효한 전화번호를 입력해주세요.');
  }
  
  if (!validateEmail(contact.email)) {
    errors.push('유효한 이메일 주소를 입력해주세요.');
  }
  
  return errors;
}
```

### `validateRequired(fields, data)`
필수 필드의 존재 여부를 검증합니다.

**매개변수:**
- `fields` (Array): 필수 필드 목록
- `data` (Object): 검증할 데이터

**반환값:** (Object): 검증 결과

**예제:**
```javascript
import { validateRequired } from './validation';

function validateUserRegistration(userData) {
  const requiredFields = ['email', 'password', 'name'];
  const validation = validateRequired(requiredFields, userData);
  
  if (!validation.isValid) {
    return {
      success: false,
      errors: validation.missingFields.map(field => `${field}는 필수 항목입니다.`)
    };
  }
  
  return { success: true };
}
```

## 포맷팅 함수

### `formatCurrency(amount, currency, locale)`
금액을 통화 형식으로 포맷팅합니다.

**매개변수:**
- `amount` (number): 포맷팅할 금액
- `currency` (string): 통화 코드 (기본값: 'KRW')
- `locale` (string): 로케일 (기본값: 'ko-KR')

**반환값:** (string): 포맷팅된 통화 문자열

**예제:**
```javascript
import { formatCurrency } from './formatting';

const price = 125000;
console.log(formatCurrency(price)); // "₩125,000"

const usdPrice = 100;
console.log(formatCurrency(usdPrice, 'USD', 'en-US')); // "$100.00"
```

### `formatDate(date, format, locale)`
날짜를 지정된 형식으로 포맷팅합니다.

**매개변수:**
- `date` (Date|string): 포맷팅할 날짜
- `format` (string): 날짜 형식 (기본값: 'YYYY-MM-DD')
- `locale` (string): 로케일 (기본값: 'ko-KR')

**반환값:** (string): 포맷팅된 날짜 문자열

**예제:**
```javascript
import { formatDate } from './formatting';

const now = new Date();

console.log(formatDate(now)); // "2024-01-15"
console.log(formatDate(now, 'YYYY년 MM월 DD일')); // "2024년 01월 15일"
console.log(formatDate(now, 'MMMM DD, YYYY', 'en-US')); // "January 15, 2024"
```

### `formatFileSize(bytes)`
파일 크기를 읽기 쉬운 형식으로 포맷팅합니다.

**매개변수:**
- `bytes` (number): 바이트 단위 파일 크기

**반환값:** (string): 포맷팅된 파일 크기

**예제:**
```javascript
import { formatFileSize } from './formatting';

console.log(formatFileSize(1024)); // "1 KB"
console.log(formatFileSize(1048576)); // "1 MB"
console.log(formatFileSize(1073741824)); // "1 GB"
```

### `truncateText(text, maxLength, suffix)`
텍스트를 지정된 길이로 자릅니다.

**매개변수:**
- `text` (string): 자를 텍스트
- `maxLength` (number): 최대 길이
- `suffix` (string): 접미사 (기본값: '...')

**반환값:** (string): 잘린 텍스트

**예제:**
```javascript
import { truncateText } from './formatting';

const longText = "이것은 매우 긴 텍스트입니다. 사용자가 읽기 쉽도록 적절한 길이로 자를 필요가 있습니다.";

console.log(truncateText(longText, 20)); // "이것은 매우 긴 텍스트..."
console.log(truncateText(longText, 30, ' [더보기]')); // "이것은 매우 긴 텍스트입니다. 사용자가 [더보기]"
```

## 고급 함수

### `retry(fn, maxAttempts, delay)`
함수 실행을 재시도하는 래퍼 함수입니다.

**매개변수:**
- `fn` (Function): 실행할 함수
- `maxAttempts` (number): 최대 시도 횟수 (기본값: 3)
- `delay` (number): 재시도 간 지연 시간 (밀리초, 기본값: 1000)

**반환값:** (Promise<any>): 함수 실행 결과

**예제:**
```javascript
import { retry } from './utils';

async function fetchData() {
  const response = await fetch('/api/data');
  if (!response.ok) {
    throw new Error('API 호출 실패');
  }
  return response.json();
}

// 최대 3번까지 재시도
const data = await retry(fetchData, 3, 2000);
```

### `memoize(fn, keyGenerator)**
함수 결과를 메모이제이션합니다.

**매개변수:**
- `fn` (Function): 메모이제이션할 함수
- `keyGenerator` (Function): 캐시 키 생성 함수 (선택사항)

**반환값:** (Function): 메모이제이션된 함수

**예제:**
```javascript
import { memoize } from './utils';

const expensiveCalculation = memoize((n) => {
  console.log('계산 중...');
  return n * n;
});

console.log(expensiveCalculation(5)); // "계산 중..." 출력 후 25 반환
console.log(expensiveCalculation(5)); // 캐시된 결과 25 반환 (계산 없음)
```

## 함수 사용 모범 사례

### 1. 에러 처리
```javascript
import { validateEmail, validateRequired } from './validation';

function validateUserInput(input) {
  try {
    const requiredValidation = validateRequired(['email', 'password'], input);
    if (!requiredValidation.isValid) {
      return { success: false, errors: requiredValidation.errors };
    }
    
    if (!validateEmail(input.email)) {
      return { success: false, errors: ['유효한 이메일을 입력해주세요.'] };
    }
    
    return { success: true };
  } catch (error) {
    console.error('검증 중 오류 발생:', error);
    return { success: false, errors: ['검증 중 오류가 발생했습니다.'] };
  }
}
```

### 2. 비동기 함수 체이닝
```javascript
import { uploadFile, resizeImage, generateThumbnail } from './files';

async function processImageUpload(file) {
  try {
    // 1. 파일 업로드
    const uploadResult = await uploadFile(file);
    
    // 2. 썸네일 생성
    const thumbnailPath = await resizeImage(uploadResult.path, {
      width: 150,
      height: 150
    });
    
    // 3. 결과 반환
    return {
      success: true,
      original: uploadResult,
      thumbnail: thumbnailPath
    };
  } catch (error) {
    console.error('이미지 처리 실패:', error);
    return { success: false, error: error.message };
  }
}
```

### 3. 함수 조합
```javascript
import { filterBy, sortBy, paginate } from './data';

function getFilteredAndSortedData(data, filters, sortKey, page, limit) {
  // 1. 필터링
  let filteredData = filterBy(data, filters);
  
  // 2. 정렬
  let sortedData = sortBy(filteredData, sortKey, 'desc');
  
  // 3. 페이지네이션
  let paginatedData = paginate(sortedData, page, limit);
  
  return paginatedData;
}
```

## 성능 최적화 팁

### 1. 메모이제이션 활용
```javascript
import { memoize } from './utils';

// 비용이 큰 계산을 메모이제이션
const expensiveCalculation = memoize((input) => {
  // 복잡한 계산 로직
  return result;
});
```

### 2. 디바운싱과 스로틀링
```javascript
import { debounce, throttle } from './utils';

// 검색 입력 디바운싱
const debouncedSearch = debounce(searchAPI, 300);

// 스크롤 이벤트 스로틀링
const throttledScroll = throttle(handleScroll, 100);
```

### 3. 지연 로딩
```javascript
import { lazyLoad } from './utils';

// 필요할 때만 함수 로드
const heavyFunction = lazyLoad(() => import('./heavyModule'));
```

## 테스트 예제

### 단위 테스트
```javascript
import { validateEmail, formatCurrency } from './utils';

describe('유틸리티 함수 테스트', () => {
  test('validateEmail이 유효한 이메일을 올바르게 검증해야 함', () => {
    expect(validateEmail('test@example.com')).toBe(true);
    expect(validateEmail('invalid-email')).toBe(false);
  });
  
  test('formatCurrency가 올바른 형식으로 포맷팅해야 함', () => {
    expect(formatCurrency(1000)).toBe('₩1,000');
    expect(formatCurrency(1000, 'USD')).toBe('$1,000.00');
  });
});
```

### 통합 테스트
```javascript
import { processUserRegistration } from './auth';

describe('사용자 등록 통합 테스트', () => {
  test('유효한 사용자 데이터로 등록이 성공해야 함', async () => {
    const userData = {
      email: 'test@example.com',
      password: 'password123',
      name: '테스트 사용자'
    };
    
    const result = await processUserRegistration(userData);
    expect(result.success).toBe(true);
    expect(result.user.email).toBe(userData.email);
  });
});
```

## 변경 이력

| 버전 | 날짜 | 변경 내용 |
|------|------|-----------|
| 1.0.0 | 2024-01-01 | 초기 함수 문서 작성 |
| 1.1.0 | 2024-01-15 | 고급 함수 섹션 추가 |
| 1.2.0 | 2024-02-01 | 성능 최적화 팁 추가 |

## 지원 및 문의

함수 사용에 대한 질문이나 문제가 있으시면 다음 연락처로 문의해주세요:

- **이메일:** dev@example.com
- **문서:** https://docs.example.com/functions
- **GitHub:** https://github.com/example/project/issues