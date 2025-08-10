# 개발자 가이드

## 개요
이 문서는 프로젝트 개발에 참여하는 개발자들을 위한 포괄적인 가이드입니다. 개발 환경 설정부터 배포까지 모든 단계를 상세히 설명합니다.

## 목차
1. [개발 환경 설정](#개발-환경-설정)
2. [프로젝트 구조](#프로젝트-구조)
3. [아키텍처 개요](#아키텍처-개요)
4. [코딩 표준](#코딩-표준)
5. [개발 워크플로우](#개발-워크플로우)
6. [테스트 전략](#테스트-전략)
7. [성능 최적화](#성능-최적화)
8. [보안 가이드라인](#보안-가이드라인)
9. [배포 및 운영](#배포-및-운영)
10. [문제 해결](#문제-해결)

## 개발 환경 설정

### 필수 요구사항
**시스템 요구사항:**
- **운영체제**: Windows 10+, macOS 10.15+, Ubuntu 18.04+
- **메모리**: 최소 8GB RAM (권장 16GB+)
- **저장공간**: 최소 10GB 여유 공간
- **프로세서**: Intel i5/AMD Ryzen 5 이상

**개발 도구:**
- **Node.js**: 18.0.0+ (LTS 버전 권장)
- **npm**: 9.0.0+ 또는 yarn 1.22.0+
- **Git**: 2.30.0+
- **VS Code**: 1.70.0+ (권장 에디터)

### 초기 설정
**1. 저장소 클론:**
```bash
git clone https://github.com/example/project.git
cd project
```

**2. 의존성 설치:**
```bash
npm install
# 또는
yarn install
```

**3. 환경 변수 설정:**
```bash
cp .env.example .env
# .env 파일을 편집하여 필요한 값 설정
```

**4. 데이터베이스 설정:**
```bash
# PostgreSQL 설치 (Ubuntu)
sudo apt update
sudo apt install postgresql postgresql-contrib

# 데이터베이스 생성
sudo -u postgres createdb project_dev
sudo -u postgres createdb project_test
```

**5. 개발 서버 실행:**
```bash
npm run dev
# 또는
yarn dev
```

### 개발 도구 설정
**VS Code 확장 프로그램:**
```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "ms-vscode.vscode-typescript-next",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-json"
  ]
}
```

**Prettier 설정 (.prettierrc):**
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```

**ESLint 설정 (.eslintrc.js):**
```javascript
module.exports = {
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off'
  }
};
```

## 프로젝트 구조

### 디렉토리 구조
```
project/
├── src/
│   ├── components/          # React 구성 요소
│   │   ├── ui/             # 기본 UI 구성 요소
│   │   ├── forms/          # 폼 관련 구성 요소
│   │   └── layout/         # 레이아웃 구성 요소
│   ├── hooks/              # 커스텀 React 훅
│   ├── utils/              # 유틸리티 함수
│   ├── services/           # API 서비스
│   ├── types/              # TypeScript 타입 정의
│   ├── constants/          # 상수 정의
│   └── styles/             # 스타일 파일
├── public/                 # 정적 파일
├── tests/                  # 테스트 파일
├── docs/                   # 문서
├── scripts/                # 빌드 및 배포 스크립트
└── config/                 # 설정 파일
```

### 주요 파일 설명
**package.json:**
```json
{
  "name": "project",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "jest",
    "test:watch": "jest --watch",
    "lint": "eslint src --ext .ts,.tsx",
    "format": "prettier --write src/**/*.{ts,tsx,js,jsx}"
  },
  "dependencies": {
    "react": "^18.0.0",
    "next": "^13.0.0",
    "typescript": "^5.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/node": "^18.0.0",
    "jest": "^29.0.0"
  }
}
```

**tsconfig.json:**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@/components/*": ["src/components/*"],
      "@/utils/*": ["src/utils/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

## 아키텍처 개요

### 전체 아키텍처
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   Database      │
│   (React/Next)  │◄──►│   (Node.js)     │◄──►│   (PostgreSQL)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   CDN           │    │   Cache         │    │   Backup        │
│   (CloudFlare)  │    │   (Redis)       │    │   (S3)         │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### 프론트엔드 아키텍처
**컴포넌트 계층 구조:**
```
App
├── Layout
│   ├── Header
│   ├── Sidebar
│   └── Footer
├── Pages
│   ├── Home
│   ├── Dashboard
│   └── Settings
└── Providers
    ├── AuthProvider
    ├── ThemeProvider
    └── DataProvider
```

**상태 관리:**
```typescript
// 전역 상태 구조
interface AppState {
  user: User | null;
  theme: 'light' | 'dark';
  notifications: Notification[];
  data: {
    items: Item[];
    loading: boolean;
    error: string | null;
  };
}

// Context 사용 예제
const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
```

### 백엔드 아키텍처
**API 구조:**
```
/api
├── /auth          # 인증 관련
├── /users         # 사용자 관리
├── /data          # 데이터 CRUD
├── /files         # 파일 업로드
└── /analytics     # 분석 데이터
```

**미들웨어 체인:**
```typescript
// Express 미들웨어 체인
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(morgan('combined'));

// 라우터
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/data', dataRoutes);
```

## 코딩 표준

### TypeScript 가이드라인
**타입 정의:**
```typescript
// 인터페이스 사용 (객체 구조 정의)
interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

// 타입 별칭 사용 (유니온 타입, 함수 타입)
type UserRole = 'admin' | 'user' | 'moderator';
type UserFilter = (user: User) => boolean;
type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

// 제네릭 사용
interface Repository<T> {
  findById(id: string): Promise<T | null>;
  findAll(): Promise<T[]>;
  create(data: Omit<T, 'id'>): Promise<T>;
  update(id: string, data: Partial<T>): Promise<T>;
  delete(id: string): Promise<boolean>;
}
```

**함수 작성:**
```typescript
// 화살표 함수 사용
const fetchUser = async (id: string): Promise<User> => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`사용자 조회 실패: ${error.message}`);
  }
};

// 고차 함수
const withErrorHandling = <T extends any[], R>(
  fn: (...args: T) => Promise<R>
) => {
  return async (...args: T): Promise<R> => {
    try {
      return await fn(...args);
    } catch (error) {
      console.error('함수 실행 오류:', error);
      throw error;
    }
  };
};
```

### React 구성 요소 가이드라인
**함수형 구성 요소:**
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  children
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
```

**커스텀 훅:**
```typescript
export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('로컬 스토리지 읽기 오류:', error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('로컬 스토리지 쓰기 오류:', error);
    }
  };

  return [storedValue, setValue];
};
```

### CSS 및 스타일링 가이드라인
**CSS 모듈 사용:**
```css
/* Button.module.css */
.button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.primary {
  background-color: var(--color-primary);
  color: white;
}

.primary:hover {
  background-color: var(--color-primary-dark);
}

.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

**Tailwind CSS 사용:**
```typescript
// 컴포넌트에서 Tailwind 클래스 사용
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
  <h2 className="text-xl font-semibold text-gray-900">
    제목
  </h2>
  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
    액션
  </button>
</div>
```

## 개발 워크플로우

### Git 워크플로우
**브랜치 전략:**
```
main (production)
├── develop (integration)
├── feature/user-authentication
├── feature/data-management
├── bugfix/login-error
└── hotfix/security-patch
```

**커밋 메시지 규칙:**
```bash
# 형식: <type>(<scope>): <description>
feat(auth): 사용자 로그인 기능 추가
fix(api): 데이터 조회 API 오류 수정
docs(readme): 설치 가이드 업데이트
style(components): 버튼 스타일 정리
refactor(utils): 유틸리티 함수 리팩토링
test(auth): 인증 테스트 케이스 추가
chore(deps): 의존성 패키지 업데이트
```

**PR (Pull Request) 프로세스:**
1. **기능 브랜치 생성**
   ```bash
   git checkout -b feature/new-feature
   ```

2. **개발 및 커밋**
   ```bash
   git add .
   git commit -m "feat: 새 기능 구현"
   ```

3. **원격 저장소에 푸시**
   ```bash
   git push origin feature/new-feature
   ```

4. **PR 생성 및 리뷰 요청**
5. **코드 리뷰 및 수정**
6. **승인 후 머지**

### 개발 단계
**1. 계획 및 설계**
- 요구사항 분석
- 기술적 설계
- API 설계
- 데이터베이스 스키마 설계

**2. 개발**
- 기능 구현
- 단위 테스트 작성
- 코드 리뷰
- 지속적 통합

**3. 테스트**
- 단위 테스트
- 통합 테스트
- 사용자 수용 테스트
- 성능 테스트

**4. 배포**
- 스테이징 환경 배포
- 프로덕션 환경 배포
- 모니터링 및 로깅

### 코드 리뷰 체크리스트
**기능적 측면:**
- [ ] 요구사항이 올바르게 구현되었는가?
- [ ] 에러 처리가 적절한가?
- [ ] 경계 조건이 고려되었는가?
- [ ] 보안 취약점이 없는가?

**코드 품질:**
- [ ] 코드가 읽기 쉬운가?
- [ ] 중복 코드가 없는가?
- [ ] 적절한 네이밍을 사용했는가?
- [ ] 주석이 필요한 곳에 작성되었는가?

**성능 측면:**
- [ ] 불필요한 연산이 없는가?
- [ ] 메모리 누수가 없는가?
- [ ] 적절한 캐싱을 사용했는가?

## 테스트 전략

### 테스트 피라미드
```
        E2E Tests (10%)
           ▲
    Integration Tests (20%)
           ▲
      Unit Tests (70%)
```

### 단위 테스트
**Jest 설정:**
```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.tsx'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
```

**테스트 예제:**
```typescript
// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  test('기본 렌더링이 올바르게 작동해야 함', () => {
    render(<Button>클릭</Button>);
    
    const button = screen.getByRole('button', { name: '클릭' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn', 'btn-primary', 'btn-md');
  });

  test('클릭 이벤트가 올바르게 작동해야 함', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>클릭</Button>);
    
    fireEvent.click(screen.getByText('클릭'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('disabled 상태에서 클릭이 비활성화되어야 함', () => {
    const handleClick = jest.fn();
    render(<Button disabled onClick={handleClick}>클릭</Button>);
    
    const button = screen.getByText('클릭');
    expect(button).toBeDisabled();
    
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
```

### 통합 테스트
**API 테스트:**
```typescript
// userApi.test.ts
import { userApi } from '../userApi';
import { server } from '../../mocks/server';

describe('User API', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('사용자 목록을 올바르게 조회해야 함', async () => {
    const users = await userApi.getUsers();
    
    expect(users).toHaveLength(3);
    expect(users[0]).toHaveProperty('id');
    expect(users[0]).toHaveProperty('name');
  });

  test('사용자 생성이 올바르게 작동해야 함', async () => {
    const newUser = {
      name: '테스트 사용자',
      email: 'test@example.com'
    };
    
    const createdUser = await userApi.createUser(newUser);
    
    expect(createdUser).toHaveProperty('id');
    expect(createdUser.name).toBe(newUser.name);
    expect(createdUser.email).toBe(newUser.email);
  });
});
```

### E2E 테스트
**Playwright 설정:**
```typescript
// tests/e2e/login.spec.ts
import { test, expect } from '@playwright/test';

test.describe('로그인 기능', () => {
  test('올바른 자격 증명으로 로그인해야 함', async ({ page }) => {
    await page.goto('/login');
    
    await page.fill('[data-testid="email"]', 'user@example.com');
    await page.fill('[data-testid="password"]', 'password123');
    await page.click('[data-testid="login-button"]');
    
    await expect(page).toHaveURL('/dashboard');
    await expect(page.locator('[data-testid="user-menu"]')).toBeVisible();
  });

  test('잘못된 자격 증명으로 로그인 시 오류 메시지를 표시해야 함', async ({ page }) => {
    await page.goto('/login');
    
    await page.fill('[data-testid="email"]', 'wrong@example.com');
    await page.fill('[data-testid="password"]', 'wrongpassword');
    await page.click('[data-testid="login-button"]');
    
    await expect(page.locator('[data-testid="error-message"]')).toBeVisible();
    await expect(page.locator('[data-testid="error-message"]')).toContainText('잘못된 이메일 또는 비밀번호');
  });
});
```

## 성능 최적화

### 프론트엔드 최적화
**코드 분할:**
```typescript
// 동적 임포트를 사용한 코드 분할
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));

// 라우트 기반 코드 분할
const App = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </Suspense>
);
```

**메모이제이션:**
```typescript
// React.memo를 사용한 컴포넌트 메모이제이션
const ExpensiveComponent = React.memo(({ data, onUpdate }) => {
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      processed: item.value * 2
    }));
  }, [data]);

  const handleUpdate = useCallback((id) => {
    onUpdate(id);
  }, [onUpdate]);

  return (
    <div>
      {processedData.map(item => (
        <Item key={item.id} data={item} onUpdate={handleUpdate} />
      ))}
    </div>
  );
});
```

**가상화:**
```typescript
// 대용량 리스트 가상화
import { FixedSizeList as List } from 'react-window';

const VirtualizedList = ({ items }) => (
  <List
    height={400}
    itemCount={items.length}
    itemSize={50}
    width="100%"
  >
    {({ index, style }) => (
      <div style={style}>
        <ListItem item={items[index]} />
      </div>
    )}
  </List>
);
```

### 백엔드 최적화
**데이터베이스 최적화:**
```sql
-- 인덱스 생성
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_posts_created_at ON posts(created_at);

-- 쿼리 최적화
SELECT u.name, p.title, p.created_at
FROM users u
INNER JOIN posts p ON u.id = p.user_id
WHERE p.created_at >= '2024-01-01'
ORDER BY p.created_at DESC
LIMIT 20;
```

**캐싱 전략:**
```typescript
// Redis 캐싱
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

export const getUserWithCache = async (id: string): Promise<User> => {
  const cacheKey = `user:${id}`;
  
  // 캐시에서 조회
  const cached = await redis.get(cacheKey);
  if (cached) {
    return JSON.parse(cached);
  }
  
  // 데이터베이스에서 조회
  const user = await User.findById(id);
  
  // 캐시에 저장 (1시간)
  await redis.setex(cacheKey, 3600, JSON.stringify(user));
  
  return user;
};
```

**API 응답 최적화:**
```typescript
// 페이지네이션 및 필터링
export const getUsers = async (req: Request, res: Response) => {
  const { page = 1, limit = 20, search, role } = req.query;
  
  const query: any = {};
  if (search) {
    query.$or = [
      { name: { $regex: search, $options: 'i' } },
      { email: { $regex: search, $options: 'i' } }
    ];
  }
  if (role) {
    query.role = role;
  }
  
  const skip = (Number(page) - 1) * Number(limit);
  
  const [users, total] = await Promise.all([
    User.find(query).skip(skip).limit(Number(limit)),
    User.countDocuments(query)
  ]);
  
  res.json({
    users,
    pagination: {
      page: Number(page),
      limit: Number(limit),
      total,
      pages: Math.ceil(total / Number(limit))
    }
  });
};
```

## 보안 가이드라인

### 인증 및 권한
**JWT 토큰 관리:**
```typescript
// JWT 토큰 생성
import jwt from 'jsonwebtoken';

export const generateToken = (user: User): string => {
  return jwt.sign(
    { 
      id: user.id, 
      email: user.email, 
      role: user.role 
    },
    process.env.JWT_SECRET!,
    { expiresIn: '24h' }
  );
};

// 토큰 검증 미들웨어
export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: '액세스 토큰이 필요합니다' });
  }
  
  jwt.verify(token, process.env.JWT_SECRET!, (err: any, user: any) => {
    if (err) {
      return res.status(403).json({ error: '토큰이 유효하지 않습니다' });
    }
    req.user = user;
    next();
  });
};
```

**권한 검증:**
```typescript
// 역할 기반 접근 제어
export const requireRole = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ error: '인증이 필요합니다' });
    }
    
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: '권한이 없습니다' });
    }
    
    next();
  };
};

// 사용 예제
app.get('/api/admin/users', 
  authenticateToken, 
  requireRole(['admin']), 
  adminController.getUsers
);
```

### 데이터 보안
**입력 검증:**
```typescript
// Joi를 사용한 스키마 검증
import Joi from 'joi';

const userSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/).required()
});

export const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const { error } = userSchema.validate(req.body);
  
  if (error) {
    return res.status(400).json({ 
      error: '입력 데이터가 유효하지 않습니다',
      details: error.details 
    });
  }
  
  next();
};
```

**SQL 인젝션 방지:**
```typescript
// 매개변수화된 쿼리 사용
export const getUserByEmail = async (email: string): Promise<User | null> => {
  const query = 'SELECT * FROM users WHERE email = $1';
  const result = await pool.query(query, [email]);
  return result.rows[0] || null;
};

// ORM 사용 (Sequelize 예제)
export const findUserByEmail = async (email: string): Promise<User | null> => {
  return await User.findOne({
    where: { email },
    attributes: { exclude: ['password'] }
  });
};
```

**XSS 방지:**
```typescript
// React에서 XSS 방지
const UserInput = ({ content }: { content: string }) => {
  // dangerouslySetInnerHTML 사용 금지
  return <div>{content}</div>;
  
  // 또는 sanitize 라이브러리 사용
  // return <div dangerouslySetInnerHTML={{ __html: sanitize(content) }} />;
};
```

## 배포 및 운영

### 배포 환경
**환경별 설정:**
```typescript
// config/environment.ts
interface Config {
  database: {
    url: string;
    pool: {
      min: number;
      max: number;
    };
  };
  redis: {
    url: string;
  };
  jwt: {
    secret: string;
    expiresIn: string;
  };
}

const configs: Record<string, Config> = {
  development: {
    database: {
      url: process.env.DEV_DATABASE_URL!,
      pool: { min: 1, max: 5 }
    },
    redis: {
      url: process.env.DEV_REDIS_URL!
    },
    jwt: {
      secret: process.env.DEV_JWT_SECRET!,
      expiresIn: '24h'
    }
  },
  production: {
    database: {
      url: process.env.PROD_DATABASE_URL!,
      pool: { min: 5, max: 20 }
    },
    redis: {
      url: process.env.PROD_REDIS_URL!
    },
    jwt: {
      secret: process.env.PROD_JWT_SECRET!,
      expiresIn: '1h'
    }
  }
};

export const config = configs[process.env.NODE_ENV || 'development'];
```

### CI/CD 파이프라인
**GitHub Actions 설정:**
```yaml
# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
    
    - name: Run linting
      run: npm run lint
    
    - name: Build application
      run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - name: Deploy to production
      run: |
        echo "Deploying to production..."
        # 배포 스크립트 실행
```

**Docker 설정:**
```dockerfile
# Dockerfile
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM node:18-alpine AS production

WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./

EXPOSE 3000
CMD ["npm", "start"]
```

### 모니터링 및 로깅
**로깅 설정:**
```typescript
// Winston을 사용한 로깅
import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

export default logger;
```

**헬스 체크:**
```typescript
// 헬스 체크 엔드포인트
app.get('/health', async (req: Request, res: Response) => {
  try {
    // 데이터베이스 연결 확인
    await pool.query('SELECT 1');
    
    // Redis 연결 확인
    await redis.ping();
    
    res.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime()
    });
  } catch (error) {
    res.status(503).json({
      status: 'unhealthy',
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});
```

## 문제 해결

### 일반적인 문제
**메모리 누수:**
```typescript
// 이벤트 리스너 정리
useEffect(() => {
  const handleResize = () => {
    // 리사이즈 처리
  };
  
  window.addEventListener('resize', handleResize);
  
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

// 타이머 정리
useEffect(() => {
  const timer = setInterval(() => {
    // 주기적 작업
  }, 1000);
  
  return () => {
    clearInterval(timer);
  };
}, []);
```

**성능 병목:**
```typescript
// 불필요한 리렌더링 방지
const ExpensiveComponent = React.memo(({ data }: { data: Data[] }) => {
  const processedData = useMemo(() => {
    return data.map(processData);
  }, [data]);
  
  return (
    <div>
      {processedData.map(item => (
        <Item key={item.id} data={item} />
      ))}
    </div>
  );
});

// 디바운싱을 사용한 검색 최적화
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  
  return debouncedValue;
};
```

### 디버깅 도구
**React Developer Tools:**
- 컴포넌트 트리 탐색
- props 및 state 검사
- 렌더링 성능 분석

**Chrome DevTools:**
- 네트워크 요청 모니터링
- 메모리 사용량 분석
- JavaScript 디버깅

**VS Code 디버깅:**
```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch Chrome",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}/src"
    },
    {
      "name": "Attach to Chrome",
      "type": "chrome",
      "request": "attach",
      "port": 9222,
      "webRoot": "${workspaceFolder}/src"
    }
  ]
}
```

### 로그 분석
**구조화된 로깅:**
```typescript
// 로그 레벨별 처리
logger.error('사용자 인증 실패', {
  userId: '123',
  ip: req.ip,
  userAgent: req.get('User-Agent'),
  timestamp: new Date().toISOString()
});

logger.info('API 요청 처리', {
  method: req.method,
  url: req.url,
  responseTime: Date.now() - startTime,
  statusCode: res.statusCode
});
```

**에러 추적:**
```typescript
// 글로벌 에러 핸들러
process.on('uncaughtException', (error) => {
  logger.error('Uncaught Exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});
```

## 지원 및 리소스

### 개발자 리소스
- **공식 문서**: https://docs.example.com
- **API 참조**: https://api.example.com/docs
- **커뮤니티 포럼**: https://community.example.com
- **GitHub 저장소**: https://github.com/example/project

### 학습 자료
- **온라인 튜토리얼**: https://tutorials.example.com
- **비디오 강의**: https://videos.example.com
- **코드 예제**: https://examples.example.com

### 도움말 및 지원
- **개발자 이메일**: dev@example.com
- **기술 지원**: support@example.com
- **실시간 채팅**: 웹사이트 우측 하단 채팅 아이콘

## 변경 이력

| 버전 | 날짜 | 변경 내용 |
|------|------|-----------|
| 1.0.0 | 2024-01-01 | 초기 개발자 가이드 작성 |
| 1.1.0 | 2024-01-15 | 아키텍처 및 성능 최적화 섹션 추가 |
| 1.2.0 | 2024-02-01 | 보안 가이드라인 및 문제 해결 섹션 추가 |

---

**마지막 업데이트**: 2024년 2월 1일

이 가이드에 대한 질문이나 개선 제안이 있으시면 언제든지 연락해주세요.