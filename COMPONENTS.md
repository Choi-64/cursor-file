# 구성 요소 문서

## 개요
이 문서는 프로젝트에서 사용되는 모든 UI 구성 요소들의 상세한 사용법과 예제를 제공합니다.

## 목차
1. [기본 구성 요소](#기본-구성-요소)
2. [폼 구성 요소](#폼-구성-요소)
3. [데이터 표시 구성 요소](#데이터-표시-구성-요소)
4. [네비게이션 구성 요소](#네비게이션-구성-요소)
5. [레이아웃 구성 요소](#레이아웃-구성-요소)
6. [피드백 구성 요소](#피드백-구성-요소)
7. [고급 구성 요소](#고급-구성-요소)

## 기본 구성 요소

### Button
다양한 스타일과 크기의 버튼을 제공합니다.

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' (기본값: 'primary')
- `size`: 'sm' | 'md' | 'lg' (기본값: 'md')
- `disabled`: boolean (기본값: false)
- `loading`: boolean (기본값: false)
- `icon`: ReactNode (선택사항)
- `onClick`: function (선택사항)

**기본 사용법:**
```jsx
import { Button } from './components/Button';

function MyComponent() {
  return (
    <div>
      <Button>기본 버튼</Button>
      <Button variant="secondary">보조 버튼</Button>
      <Button variant="outline">아웃라인 버튼</Button>
      <Button variant="danger">위험 버튼</Button>
    </div>
  );
}
```

**크기별 사용법:**
```jsx
<Button size="sm">작은 버튼</Button>
<Button size="md">중간 버튼</Button>
<Button size="lg">큰 버튼</Button>
```

**아이콘과 함께 사용:**
```jsx
import { PlusIcon, TrashIcon } from './icons';

<Button icon={<PlusIcon />}>추가</Button>
<Button variant="danger" icon={<TrashIcon />}>삭제</Button>
```

**로딩 상태:**
```jsx
<Button loading>저장 중...</Button>
```

### Input
텍스트 입력을 위한 구성 요소입니다.

**Props:**
- `type`: 'text' | 'email' | 'password' | 'number' | 'search' (기본값: 'text')
- `placeholder`: string (선택사항)
- `value`: string (선택사항)
- `defaultValue`: string (선택사항)
- `disabled`: boolean (기본값: false)
- `error`: string | boolean (선택사항)
- `size`: 'sm' | 'md' | 'lg' (기본값: 'md')
- `onChange`: function (선택사항)
- `onFocus`: function (선택사항)
- `onBlur`: function (선택사항)

**기본 사용법:**
```jsx
import { Input } from './components/Input';

function MyForm() {
  const [value, setValue] = useState('');

  return (
    <Input
      placeholder="이름을 입력하세요"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
```

**에러 상태:**
```jsx
<Input
  placeholder="이메일을 입력하세요"
  type="email"
  error="유효한 이메일을 입력해주세요"
/>
```

**크기별 사용법:**
```jsx
<Input size="sm" placeholder="작은 입력" />
<Input size="md" placeholder="중간 입력" />
<Input size="lg" placeholder="큰 입력" />
```

### Text
텍스트를 표시하는 구성 요소입니다.

**Props:**
- `variant`: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'label'
- `color`: string (선택사항)
- `weight`: 'normal' | 'medium' | 'semibold' | 'bold' (기본값: 'normal')
- `align`: 'left' | 'center' | 'right' | 'justify' (기본값: 'left')
- `truncate`: boolean (기본값: false)

**사용법:**
```jsx
import { Text } from './components/Text';

function MyComponent() {
  return (
    <div>
      <Text variant="h1">제목 1</Text>
      <Text variant="h2">제목 2</Text>
      <Text variant="body">본문 텍스트</Text>
      <Text variant="caption" color="gray">캡션 텍스트</Text>
    </div>
  );
}
```

**스타일링:**
```jsx
<Text weight="bold" color="primary">굵은 주요 텍스트</Text>
<Text align="center" color="success">중앙 정렬 성공 텍스트</Text>
<Text truncate>매우 긴 텍스트가 자동으로 잘립니다...</Text>
```

## 폼 구성 요소

### Form
폼을 관리하는 구성 요소입니다.

**Props:**
- `onSubmit`: function (필수)
- `initialValues`: object (선택사항)
- `validationSchema`: object (선택사항)
- `children`: ReactNode (필수)

**기본 사용법:**
```jsx
import { Form, FormField, FormSubmit } from './components/Form';

function MyForm() {
  const handleSubmit = (values) => {
    console.log('폼 제출:', values);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormField name="name" label="이름" required>
        <Input placeholder="이름을 입력하세요" />
      </FormField>
      
      <FormField name="email" label="이메일" required>
        <Input type="email" placeholder="이메일을 입력하세요" />
      </FormField>
      
      <FormSubmit>제출</FormSubmit>
    </Form>
  );
}
```

**검증과 함께 사용:**
```jsx
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('이름은 필수입니다.'),
  email: Yup.string().email('유효한 이메일을 입력하세요.').required('이메일은 필수입니다.')
});

<Form onSubmit={handleSubmit} validationSchema={validationSchema}>
  {/* 폼 필드들 */}
</Form>
```

### FormField
폼 필드를 래핑하는 구성 요소입니다.

**Props:**
- `name`: string (필수)
- `label`: string (선택사항)
- `required`: boolean (기본값: false)
- `error`: string (선택사항)
- `help`: string (선택사항)
- `children`: ReactNode (필수)

**사용법:**
```jsx
<FormField name="username" label="사용자명" required>
  <Input placeholder="사용자명을 입력하세요" />
</FormField>

<FormField name="description" label="설명" help="상세한 설명을 입력하세요">
  <Textarea placeholder="설명을 입력하세요" />
</FormField>
```

### Select
드롭다운 선택을 위한 구성 요소입니다.

**Props:**
- `options`: Array<{value: any, label: string}> (필수)
- `value`: any (선택사항)
- `defaultValue`: any (선택사항)
- `placeholder`: string (선택사항)
- `disabled`: boolean (기본값: false)
- `multiple`: boolean (기본값: false)
- `onChange`: function (선택사항)

**기본 사용법:**
```jsx
import { Select } from './components/Select';

const options = [
  { value: 'option1', label: '옵션 1' },
  { value: 'option2', label: '옵션 2' },
  { value: 'option3', label: '옵션 3' }
];

function MyComponent() {
  const [selected, setSelected] = useState('');

  return (
    <Select
      options={options}
      value={selected}
      onChange={setSelected}
      placeholder="옵션을 선택하세요"
    />
  );
}
```

**다중 선택:**
```jsx
<Select
  options={options}
  multiple
  placeholder="여러 옵션을 선택하세요"
/>
```

### Checkbox
체크박스 입력을 위한 구성 요소입니다.

**Props:**
- `checked`: boolean (선택사항)
- `defaultChecked`: boolean (선택사항)
- `disabled`: boolean (기본값: false)
- `indeterminate`: boolean (기본값: false)
- `onChange`: function (선택사항)
- `children`: ReactNode (선택사항)

**사용법:**
```jsx
import { Checkbox } from './components/Checkbox';

function MyComponent() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox checked={checked} onChange={setChecked}>
      약관에 동의합니다
    </Checkbox>
  );
}
```

**불확정 상태:**
```jsx
<Checkbox indeterminate>일부 선택됨</Checkbox>
```

### Radio
라디오 버튼 입력을 위한 구성 요소입니다.

**Props:**
- `name`: string (필수)
- `value`: any (필수)
- `checked`: boolean (선택사항)
- `disabled`: boolean (기본값: false)
- `onChange`: function (선택사항)
- `children`: ReactNode (선택사항)

**사용법:**
```jsx
import { Radio, RadioGroup } from './components/Radio';

function MyComponent() {
  const [selected, setSelected] = useState('option1');

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <Radio name="options" value="option1">옵션 1</Radio>
      <Radio name="options" value="option2">옵션 2</Radio>
      <Radio name="options" value="option3">옵션 3</Radio>
    </RadioGroup>
  );
}
```

## 데이터 표시 구성 요소

### Table
데이터를 테이블 형태로 표시하는 구성 요소입니다.

**Props:**
- `data`: Array (필수)
- `columns`: Array<Column> (필수)
- `sortable`: boolean (기본값: false)
- `selectable`: boolean (기본값: false)
- `pagination`: boolean (기본값: false)
- `onSort`: function (선택사항)
- `onSelectionChange`: function (선택사항)

**기본 사용법:**
```jsx
import { Table } from './components/Table';

const columns = [
  { key: 'name', label: '이름', sortable: true },
  { key: 'email', label: '이메일' },
  { key: 'role', label: '역할' },
  { key: 'actions', label: '작업', render: (value, row) => (
    <Button size="sm" variant="outline">편집</Button>
  )}
];

const data = [
  { id: 1, name: '김철수', email: 'kim@example.com', role: '사용자' },
  { id: 2, name: '이영희', email: 'lee@example.com', role: '관리자' }
];

function MyComponent() {
  return (
    <Table
      data={data}
      columns={columns}
      sortable
      selectable
      pagination
    />
  );
}
```

**정렬 기능:**
```jsx
const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

const handleSort = (key) => {
  setSortConfig(prev => ({
    key,
    direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
  }));
};

<Table
  data={data}
  columns={columns}
  sortable
  onSort={handleSort}
/>
```

### Card
콘텐츠를 카드 형태로 표시하는 구성 요소입니다.

**Props:**
- `title`: string | ReactNode (선택사항)
- `subtitle`: string | ReactNode (선택사항)
- `image`: string (선택사항)
- `actions`: ReactNode (선택사항)
- `children`: ReactNode (필수)
- `variant`: 'default' | 'elevated' | 'outlined' (기본값: 'default')

**기본 사용법:**
```jsx
import { Card } from './components/Card';

function MyComponent() {
  return (
    <Card title="카드 제목" subtitle="카드 부제목">
      <p>카드 내용입니다.</p>
    </Card>
  );
}
```

**이미지와 함께 사용:**
```jsx
<Card
  title="제품명"
  subtitle="₩29,900"
  image="/product-image.jpg"
  actions={
    <Button>구매하기</Button>
  }
>
  <p>제품에 대한 상세 설명입니다.</p>
</Card>
```

**다양한 스타일:**
```jsx
<Card variant="elevated" title="그림자 효과">내용</Card>
<Card variant="outlined" title="테두리 스타일">내용</Card>
```

### List
목록을 표시하는 구성 요소입니다.

**Props:**
- `items`: Array (필수)
- `renderItem`: function (필수)
- `emptyMessage`: string (선택사항)
- `loading`: boolean (기본값: false)
- `virtualized`: boolean (기본값: false)

**기본 사용법:**
```jsx
import { List } from './components/List';

const items = [
  { id: 1, name: '항목 1' },
  { id: 2, name: '항목 2' },
  { id: 3, name: '항목 3' }
];

function MyComponent() {
  const renderItem = (item) => (
    <div key={item.id} className="list-item">
      {item.name}
    </div>
  );

  return (
    <List
      items={items}
      renderItem={renderItem}
      emptyMessage="표시할 항목이 없습니다."
    />
  );
}
```

**로딩 상태:**
```jsx
<List
  items={items}
  renderItem={renderItem}
  loading={isLoading}
/>
```

### Badge
상태나 카운트를 표시하는 구성 요소입니다.

**Props:**
- `variant`: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'
- `size`: 'sm' | 'md' | 'lg' (기본값: 'md')
- `children`: ReactNode (필수)

**사용법:**
```jsx
import { Badge } from './components/Badge';

function MyComponent() {
  return (
    <div>
      <Badge>기본</Badge>
      <Badge variant="success">성공</Badge>
      <Badge variant="warning">경고</Badge>
      <Badge variant="danger">위험</Badge>
      <Badge variant="info">정보</Badge>
    </div>
  );
}
```

**크기별 사용법:**
```jsx
<Badge size="sm">작은 배지</Badge>
<Badge size="md">중간 배지</Badge>
<Badge size="lg">큰 배지</Badge>
```

## 네비게이션 구성 요소

### Navigation
주요 네비게이션을 제공하는 구성 요소입니다.

**Props:**
- `items`: Array<NavItem> (필수)
- `activeItem`: string (선택사항)
- `onItemClick`: function (선택사항)
- `variant`: 'horizontal' | 'vertical' (기본값: 'horizontal')

**기본 사용법:**
```jsx
import { Navigation } from './components/Navigation';

const navItems = [
  { id: 'home', label: '홈', href: '/' },
  { id: 'about', label: '소개', href: '/about' },
  { id: 'contact', label: '연락처', href: '/contact' }
];

function MyComponent() {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <Navigation
      items={navItems}
      activeItem={activeItem}
      onItemClick={setActiveItem}
    />
  );
}
```

**세로 네비게이션:**
```jsx
<Navigation
  items={navItems}
  variant="vertical"
  activeItem={activeItem}
/>
```

### Breadcrumb
페이지 경로를 표시하는 구성 요소입니다.

**Props:**
- `items`: Array<BreadcrumbItem> (필수)
- `separator`: ReactNode (기본값: '/')
- `maxItems`: number (선택사항)

**사용법:**
```jsx
import { Breadcrumb } from './components/Breadcrumb';

const breadcrumbItems = [
  { label: '홈', href: '/' },
  { label: '제품', href: '/products' },
  { label: '전자제품', href: '/products/electronics' },
  { label: '노트북' }
];

function MyComponent() {
  return (
    <Breadcrumb items={breadcrumbItems} />
  );
}
```

**커스텀 구분자:**
```jsx
<Breadcrumb
  items={breadcrumbItems}
  separator={<span> > </span>}
/>
```

### Pagination
페이지 네비게이션을 제공하는 구성 요소입니다.

**Props:**
- `currentPage`: number (필수)
- `totalPages`: number (필수)
- `onPageChange`: function (필수)
- `showFirstLast`: boolean (기본값: true)
- `showPrevNext`: boolean (기본값: true)
- `maxVisiblePages`: number (기본값: 5)

**사용법:**
```jsx
import { Pagination } from './components/Pagination';

function MyComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
      maxVisiblePages={7}
    />
  );
}
```

**커스텀 설정:**
```jsx
<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
  showFirstLast={false}
  showPrevNext={true}
  maxVisiblePages={3}
/>
```

## 레이아웃 구성 요소

### Container
콘텐츠를 중앙에 정렬하는 구성 요소입니다.

**Props:**
- `maxWidth`: string | number (선택사항)
- `padding`: string | number (선택사항)
- `children`: ReactNode (필수)

**사용법:**
```jsx
import { Container } from './components/Container';

function MyComponent() {
  return (
    <Container maxWidth="1200px" padding="2rem">
      <h1>페이지 제목</h1>
      <p>페이지 내용입니다.</p>
    </Container>
  );
}
```

**반응형 너비:**
```jsx
<Container maxWidth={{ sm: '100%', md: '768px', lg: '1200px' }}>
  {/* 콘텐츠 */}
</Container>
```

### Grid
그리드 레이아웃을 제공하는 구성 요소입니다.

**Props:**
- `columns`: number | object (필수)
- `gap`: string | number (선택사항)
- `children`: ReactNode (필수)

**기본 사용법:**
```jsx
import { Grid, GridItem } from './components/Grid';

function MyComponent() {
  return (
    <Grid columns={3} gap="1rem">
      <GridItem>항목 1</GridItem>
      <GridItem>항목 2</GridItem>
      <GridItem>항목 3</GridItem>
    </Grid>
  );
}
```

**반응형 그리드:**
```jsx
<Grid columns={{ sm: 1, md: 2, lg: 3 }} gap="1rem">
  <GridItem>항목 1</GridItem>
  <GridItem>항목 2</GridItem>
  <GridItem>항목 3</GridItem>
</Grid>
```

### Flexbox
플렉스박스 레이아웃을 제공하는 구성 요소입니다.

**Props:**
- `direction`: 'row' | 'column' | 'row-reverse' | 'column-reverse'
- `justify`: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
- `align`: 'start' | 'end' | 'center' | 'stretch' | 'baseline'
- `wrap`: 'nowrap' | 'wrap' | 'wrap-reverse'
- `gap`: string | number (선택사항)
- `children`: ReactNode (필수)

**사용법:**
```jsx
import { Flexbox } from './components/Flexbox';

function MyComponent() {
  return (
    <Flexbox
      direction="row"
      justify="space-between"
      align="center"
      gap="1rem"
    >
      <div>왼쪽</div>
      <div>중앙</div>
      <div>오른쪽</div>
    </Flexbox>
  );
}
```

**세로 정렬:**
```jsx
<Flexbox direction="column" align="center" gap="1rem">
  <div>위쪽</div>
  <div>중앙</div>
  <div>아래쪽</div>
</Flexbox>
```

### Stack
요소들을 세로로 쌓는 구성 요소입니다.

**Props:**
- `spacing`: string | number (선택사항)
- `direction`: 'vertical' | 'horizontal' (기본값: 'vertical')
- `children`: ReactNode (필수)

**사용법:**
```jsx
import { Stack } from './components/Stack';

function MyComponent() {
  return (
    <Stack spacing="1rem">
      <div>첫 번째 항목</div>
      <div>두 번째 항목</div>
      <div>세 번째 항목</div>
    </Stack>
  );
}
```

**가로 스택:**
```jsx
<Stack direction="horizontal" spacing="1rem">
  <Button>버튼 1</Button>
  <Button>버튼 2</Button>
  <Button>버튼 3</Button>
</Stack>
```

## 피드백 구성 요소

### Modal
모달 다이얼로그를 제공하는 구성 요소입니다.

**Props:**
- `isOpen`: boolean (필수)
- `onClose`: function (필수)
- `title`: string | ReactNode (선택사항)
- `size`: 'sm' | 'md' | 'lg' | 'xl' | 'full' (기본값: 'md')
- `closeOnOverlayClick`: boolean (기본값: true)
- `closeOnEscape`: boolean (기본값: true)
- `children`: ReactNode (필수)

**기본 사용법:**
```jsx
import { Modal } from './components/Modal';

function MyComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>모달 열기</Button>
      
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="모달 제목"
      >
        <p>모달 내용입니다.</p>
        <Button onClick={() => setIsModalOpen(false)}>닫기</Button>
      </Modal>
    </>
  );
}
```

**크기별 사용법:**
```jsx
<Modal size="sm" title="작은 모달">내용</Modal>
<Modal size="lg" title="큰 모달">내용</Modal>
<Modal size="full" title="전체 화면 모달">내용</Modal>
```

### Toast
사용자에게 알림을 표시하는 구성 요소입니다.

**Props:**
- `type`: 'success' | 'error' | 'warning' | 'info' (기본값: 'info')
- `title`: string (선택사항)
- `message`: string (선택사항)
- `duration`: number (기본값: 5000)
- `onClose`: function (선택사항)

**사용법:**
```jsx
import { Toast, useToast } from './components/Toast';

function MyComponent() {
  const { showToast } = useToast();

  const handleSuccess = () => {
    showToast({
      type: 'success',
      title: '성공!',
      message: '작업이 완료되었습니다.'
    });
  };

  const handleError = () => {
    showToast({
      type: 'error',
      title: '오류 발생',
      message: '작업 중 문제가 발생했습니다.'
    });
  };

  return (
    <div>
      <Button onClick={handleSuccess}>성공 토스트</Button>
      <Button onClick={handleError}>오류 토스트</Button>
    </div>
  );
}
```

### Alert
사용자에게 중요한 정보를 표시하는 구성 요소입니다.

**Props:**
- `type`: 'success' | 'error' | 'warning' | 'info'
- `title`: string (선택사항)
- `message`: string (선택사항)
- `dismissible`: boolean (기본값: false)
- `onDismiss`: function (선택사항)
- `children`: ReactNode (선택사항)

**사용법:**
```jsx
import { Alert } from './components/Alert';

function MyComponent() {
  return (
    <div>
      <Alert type="success" title="성공">
        작업이 성공적으로 완료되었습니다.
      </Alert>
      
      <Alert type="warning" title="주의" dismissible>
        이 작업은 되돌릴 수 없습니다.
      </Alert>
      
      <Alert type="error" title="오류">
        시스템 오류가 발생했습니다.
      </Alert>
    </div>
  );
}
```

### Progress
진행 상태를 표시하는 구성 요소입니다.

**Props:**
- `value`: number (필수, 0-100)
- `max`: number (기본값: 100)
- `size`: 'sm' | 'md' | 'lg' (기본값: 'md')
- `variant`: 'default' | 'success' | 'warning' | 'danger'
- `showLabel`: boolean (기본값: false)
- `animated`: boolean (기본값: false)

**사용법:**
```jsx
import { Progress } from './components/Progress';

function MyComponent() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => Math.min(prev + 10, 100));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Progress
      value={progress}
      showLabel
      animated
      variant={progress === 100 ? 'success' : 'default'}
    />
  );
}
```

## 고급 구성 요소

### DataTable
고급 테이블 기능을 제공하는 구성 요소입니다.

**Props:**
- `data`: Array (필수)
- `columns`: Array<Column> (필수)
- `sortable`: boolean (기본값: true)
- `filterable`: boolean (기본값: true)
- `searchable`: boolean (기본값: true)
- `selectable`: boolean (기본값: true)
- `pagination`: boolean (기본값: true)
- `onDataChange`: function (선택사항)

**고급 사용법:**
```jsx
import { DataTable } from './components/DataTable';

const columns = [
  {
    key: 'name',
    label: '이름',
    sortable: true,
    filterable: true,
    render: (value, row) => (
      <div className="user-info">
        <Avatar src={row.avatar} size="sm" />
        <span>{value}</span>
      </div>
    )
  },
  {
    key: 'status',
    label: '상태',
    sortable: true,
    filterable: true,
    render: (value) => (
      <Badge variant={value === 'active' ? 'success' : 'danger'}>
        {value}
      </Badge>
    )
  }
];

function MyComponent() {
  return (
    <DataTable
      data={userData}
      columns={columns}
      sortable
      filterable
      searchable
      selectable
      pagination
      onDataChange={(newData) => console.log('데이터 변경:', newData)}
    />
  );
}
```

### Chart
차트를 표시하는 구성 요소입니다.

**Props:**
- `type`: 'line' | 'bar' | 'pie' | 'doughnut' | 'area'
- `data`: object (필수)
- `options`: object (선택사항)
- `height`: string | number (선택사항)
- `responsive`: boolean (기본값: true)

**사용법:**
```jsx
import { Chart } from './components/Chart';

const chartData = {
  labels: ['1월', '2월', '3월', '4월', '5월'],
  datasets: [
    {
      label: '매출',
      data: [12, 19, 3, 5, 2],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)'
    }
  ]
};

function MyComponent() {
  return (
    <Chart
      type="line"
      data={chartData}
      height={400}
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          }
        }
      }}
    />
  );
}
```

### FileUpload
파일 업로드를 위한 구성 요소입니다.

**Props:**
- `accept`: string (선택사항)
- `multiple`: boolean (기본값: false)
- `maxSize`: number (선택사항)
- `onUpload`: function (필수)
- `onError`: function (선택사항)
- `dragAndDrop`: boolean (기본값: true)

**사용법:**
```jsx
import { FileUpload } from './components/FileUpload';

function MyComponent() {
  const handleUpload = async (files) => {
    for (const file of files) {
      try {
        const result = await uploadFile(file);
        console.log('업로드 성공:', result);
      } catch (error) {
        console.error('업로드 실패:', error);
      }
    }
  };

  return (
    <FileUpload
      accept="image/*,.pdf,.doc,.docx"
      multiple
      maxSize={5 * 1024 * 1024} // 5MB
      onUpload={handleUpload}
      onError={(error) => console.error('오류:', error)}
    />
  );
}
```

### InfiniteScroll
무한 스크롤을 제공하는 구성 요소입니다.

**Props:**
- `hasMore`: boolean (필수)
- `onLoadMore`: function (필수)
- `threshold`: number (기본값: 100)
- `children`: ReactNode (필수)

**사용법:**
```jsx
import { InfiniteScroll } from './components/InfiniteScroll';

function MyComponent() {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const loadMore = async () => {
    const newItems = await fetchItems(page);
    setItems(prev => [...prev, ...newItems]);
    setPage(prev => prev + 1);
    
    if (newItems.length < 20) {
      setHasMore(false);
    }
  };

  return (
    <InfiniteScroll hasMore={hasMore} onLoadMore={loadMore}>
      {items.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </InfiniteScroll>
  );
}
```

## 구성 요소 사용 모범 사례

### 1. 접근성 고려
```jsx
// 올바른 사용법
<Button aria-label="사용자 삭제" onClick={handleDelete}>
  <TrashIcon />
</Button>

// 폼 라벨 연결
<FormField name="email" label="이메일">
  <Input id="email" aria-describedby="email-help" />
</FormField>
<div id="email-help">유효한 이메일 주소를 입력하세요.</div>
```

### 2. 반응형 디자인
```jsx
// 모바일 우선 접근법
<Grid columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
  <GridItem>항목 1</GridItem>
  <GridItem>항목 2</GridItem>
  <GridItem>항목 3</GridItem>
</Grid>

// 조건부 렌더링
{isMobile ? (
  <MobileNavigation items={navItems} />
) : (
  <DesktopNavigation items={navItems} />
)}
```

### 3. 성능 최적화
```jsx
// 메모이제이션 활용
const MemoizedTable = React.memo(Table);

// 가상화된 리스트
<List
  items={largeDataset}
  renderItem={renderItem}
  virtualized
  itemHeight={50}
/>
```

### 4. 테마 시스템
```jsx
// CSS 변수 활용
<Button
  style={{
    '--button-primary-color': theme.colors.primary,
    '--button-hover-color': theme.colors.primaryHover
  }}
>
  테마 적용 버튼
</Button>
```

## 테스트 전략

### 단위 테스트
```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  test('클릭 이벤트가 올바르게 작동해야 함', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>클릭</Button>);
    
    fireEvent.click(screen.getByText('클릭'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('disabled 상태에서 클릭이 비활성화되어야 함', () => {
    const handleClick = jest.fn();
    render(<Button disabled onClick={handleClick}>클릭</Button>);
    
    fireEvent.click(screen.getByText('클릭'));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
```

### 통합 테스트
```jsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Form, FormField, FormSubmit } from './Form';

describe('Form Integration', () => {
  test('폼 제출이 올바르게 작동해야 함', async () => {
    const handleSubmit = jest.fn();
    render(
      <Form onSubmit={handleSubmit}>
        <FormField name="name" label="이름">
          <Input />
        </FormField>
        <FormSubmit>제출</FormSubmit>
      </Form>
    );

    fireEvent.change(screen.getByLabelText('이름'), {
      target: { value: '테스트' }
    });
    
    fireEvent.click(screen.getByText('제출'));
    
    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith({ name: '테스트' });
    });
  });
});
```

## 변경 이력

| 버전 | 날짜 | 변경 내용 |
|------|------|-----------|
| 1.0.0 | 2024-01-01 | 초기 구성 요소 문서 작성 |
| 1.1.0 | 2024-01-15 | 고급 구성 요소 섹션 추가 |
| 1.2.0 | 2024-02-01 | 테스트 전략 섹션 추가 |

## 지원 및 문의

구성 요소 사용에 대한 질문이나 문제가 있으시면 다음 연락처로 문의해주세요:

- **이메일:** ui@example.com
- **문서:** https://docs.example.com/components
- **GitHub:** https://github.com/example/project/issues