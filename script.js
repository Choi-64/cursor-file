// 일반인들이 가장 많이 사용하는 영어 문장 데이터
const commonSentences = [
    // 인사 (Greetings)
    {
        id: 1,
        english: "Hello, how are you?",
        korean: "안녕하세요, 어떻게 지내세요?",
        pronunciation: "헬로우, 하우 아 유?",
        category: "greetings"
    },
    {
        id: 2,
        english: "Good morning!",
        korean: "좋은 아침이에요!",
        pronunciation: "굿 모닝!",
        category: "greetings"
    },
    {
        id: 3,
        english: "Nice to meet you.",
        korean: "만나서 반가워요.",
        pronunciation: "나이스 투 미트 유",
        category: "greetings"
    },
    {
        id: 4,
        english: "How's it going?",
        korean: "어떻게 지내세요?",
        pronunciation: "하우즈 잇 고잉?",
        category: "greetings"
    },
    {
        id: 5,
        english: "See you later!",
        korean: "나중에 봐요!",
        pronunciation: "씨 유 레이터!",
        category: "greetings"
    },

    // 일상 (Daily Life)
    {
        id: 6,
        english: "What time is it?",
        korean: "지금 몇 시예요?",
        pronunciation: "왓 타임 이즈 잇?",
        category: "daily"
    },
    {
        id: 7,
        english: "I'm going home.",
        korean: "집에 가고 있어요.",
        pronunciation: "아임 고잉 홈",
        category: "daily"
    },
    {
        id: 8,
        english: "What are you doing?",
        korean: "뭐 하고 있어요?",
        pronunciation: "왓 아 유 두잉?",
        category: "daily"
    },
    {
        id: 9,
        english: "I need to go to the bathroom.",
        korean: "화장실에 가야 해요.",
        pronunciation: "아이 니드 투 고 투 더 배스룸",
        category: "daily"
    },
    {
        id: 10,
        english: "Can you help me?",
        korean: "도와주실 수 있나요?",
        pronunciation: "캔 유 헬프 미?",
        category: "daily"
    },
    {
        id: 11,
        english: "I'm tired.",
        korean: "피곤해요.",
        pronunciation: "아임 타이어드",
        category: "daily"
    },
    {
        id: 12,
        english: "What's the weather like?",
        korean: "날씨가 어때요?",
        pronunciation: "왓스 더 웨더 라이크?",
        category: "daily"
    },

    // 직장 (Work)
    {
        id: 13,
        english: "I have a meeting at 3 PM.",
        korean: "오후 3시에 회의가 있어요.",
        pronunciation: "아이 해브 어 미팅 앳 쓰리 피엠",
        category: "work"
    },
    {
        id: 14,
        english: "Can we schedule a call?",
        korean: "통화 일정을 잡을 수 있을까요?",
        pronunciation: "캔 위 스케줄 어 콜?",
        category: "work"
    },
    {
        id: 15,
        english: "I'm working on a project.",
        korean: "프로젝트를 진행하고 있어요.",
        pronunciation: "아임 워킹 온 어 프로젝트",
        category: "work"
    },
    {
        id: 16,
        english: "Could you send me the report?",
        korean: "보고서를 보내주실 수 있나요?",
        pronunciation: "쿠드 유 센드 미 더 리포트?",
        category: "work"
    },
    {
        id: 17,
        english: "I'll be in the office tomorrow.",
        korean: "내일 사무실에 있을 예정이에요.",
        pronunciation: "아일 비 인 디 오피스 투모로우",
        category: "work"
    },

    // 쇼핑 (Shopping)
    {
        id: 18,
        english: "How much is this?",
        korean: "이거 얼마예요?",
        pronunciation: "하우 머치 이즈 디스?",
        category: "shopping"
    },
    {
        id: 19,
        english: "Do you have this in a different size?",
        korean: "다른 사이즈로 있나요?",
        pronunciation: "두 유 해브 디스 인 어 디퍼런트 사이즈?",
        category: "shopping"
    },
    {
        id: 20,
        english: "I'd like to return this.",
        korean: "이것을 반품하고 싶어요.",
        pronunciation: "아이드 라이크 투 리턴 디스",
        category: "shopping"
    },
    {
        id: 21,
        english: "Where is the fitting room?",
        korean: "피팅룸이 어디에 있나요?",
        pronunciation: "웨어 이즈 더 피팅 룸?",
        category: "shopping"
    },
    {
        id: 22,
        english: "Can I pay by card?",
        korean: "카드로 결제할 수 있나요?",
        pronunciation: "캔 아이 페이 바이 카드?",
        category: "shopping"
    },

    // 여행 (Travel)
    {
        id: 23,
        english: "Where is the nearest subway station?",
        korean: "가장 가까운 지하철역이 어디에 있나요?",
        pronunciation: "웨어 이즈 더 니어리스트 서브웨이 스테이션?",
        category: "travel"
    },
    {
        id: 24,
        english: "I'd like to book a room.",
        korean: "방을 예약하고 싶어요.",
        pronunciation: "아이드 라이크 투 북 어 룸",
        category: "travel"
    },
    {
        id: 25,
        english: "How do I get to the airport?",
        korean: "공항에 어떻게 가나요?",
        pronunciation: "하우 두 아이 겟 투 디 에어포트?",
        category: "travel"
    },
    {
        id: 26,
        english: "Is there a bus to downtown?",
        korean: "시내로 가는 버스가 있나요?",
        pronunciation: "이즈 데어 어 버스 투 다운타운?",
        category: "travel"
    },
    {
        id: 27,
        english: "What time does the train leave?",
        korean: "기차가 몇 시에 출발하나요?",
        pronunciation: "왓 타임 더즈 더 트레인 리브?",
        category: "travel"
    },

    // 음식 (Food)
    {
        id: 28,
        english: "I'd like to order pizza.",
        korean: "피자를 주문하고 싶어요.",
        pronunciation: "아이드 라이크 투 오더 피자",
        category: "food"
    },
    {
        id: 29,
        english: "Could I have the menu, please?",
        korean: "메뉴를 주실 수 있나요?",
        pronunciation: "쿠드 아이 해브 더 메뉴, 플리즈?",
        category: "food"
    },
    {
        id: 30,
        english: "I'm vegetarian.",
        korean: "저는 채식주의자예요.",
        pronunciation: "아임 베지테리언",
        category: "food"
    },
    {
        id: 31,
        english: "The food is delicious!",
        korean: "음식이 맛있어요!",
        pronunciation: "더 푸드 이즈 델리셔스!",
        category: "food"
    },
    {
        id: 32,
        english: "Can I have the check, please?",
        korean: "계산서를 주실 수 있나요?",
        pronunciation: "캔 아이 해브 더 체크, 플리즈?",
        category: "food"
    },
    {
        id: 33,
        english: "I'm hungry.",
        korean: "배고파요.",
        pronunciation: "아임 헝그리",
        category: "food"
    },
    {
        id: 34,
        english: "What do you recommend?",
        korean: "뭘 추천하시나요?",
        pronunciation: "왓 두 유 레커멘드?",
        category: "food"
    },

    // 추가 일상 표현들
    {
        id: 35,
        english: "Excuse me.",
        korean: "실례합니다.",
        pronunciation: "익스큐즈 미",
        category: "daily"
    },
    {
        id: 36,
        english: "I'm sorry.",
        korean: "죄송합니다.",
        pronunciation: "아임 소리",
        category: "daily"
    },
    {
        id: 37,
        english: "Thank you very much.",
        korean: "정말 감사합니다.",
        pronunciation: "땡큐 베리 머치",
        category: "daily"
    },
    {
        id: 38,
        english: "You're welcome.",
        korean: "천만에요.",
        pronunciation: "유어 웰컴",
        category: "daily"
    },
    {
        id: 39,
        english: "I don't understand.",
        korean: "이해하지 못하겠어요.",
        pronunciation: "아이 돈트 언더스탠드",
        category: "daily"
    },
    {
        id: 40,
        english: "Can you speak slowly?",
        korean: "천천히 말씀해 주실 수 있나요?",
        pronunciation: "캔 유 스피크 슬로울리?",
        category: "daily"
    }
];

// 카테고리 매핑
const categoryNames = {
    greetings: "인사",
    daily: "일상",
    work: "직장", 
    shopping: "쇼핑",
    travel: "여행",
    food: "음식"
};

// 전역 변수들
let currentFilter = 'all';
let searchTerm = '';
let studiedSentences = new Set();

// DOM 요소들
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const sentencesList = document.getElementById('sentencesList');
const noResults = document.getElementById('noResults');
const filterBtns = document.querySelectorAll('.filter-btn');
const totalSentencesEl = document.getElementById('totalSentences');
const studiedCountEl = document.getElementById('studiedCount');

// 초기화 함수
function init() {
    loadStudiedSentences();
    updateStats();
    renderSentences();
    setupEventListeners();
}

// 로컬 스토리지에서 학습한 문장 불러오기
function loadStudiedSentences() {
    const stored = localStorage.getItem('studiedSentences');
    if (stored) {
        studiedSentences = new Set(JSON.parse(stored));
    }
}

// 로컬 스토리지에 학습한 문장 저장하기
function saveStudiedSentences() {
    localStorage.setItem('studiedSentences', JSON.stringify([...studiedSentences]));
}

// 통계 업데이트
function updateStats() {
    totalSentencesEl.textContent = commonSentences.length;
    studiedCountEl.textContent = studiedSentences.size;
}

// 이벤트 리스너 설정
function setupEventListeners() {
    // 검색 기능
    searchInput.addEventListener('input', handleSearch);
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // 필터 버튼들
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => handleFilter(btn.dataset.category));
    });
}

// 검색 처리
function handleSearch() {
    searchTerm = searchInput.value.toLowerCase().trim();
    renderSentences();
}

// 필터 처리
function handleFilter(category) {
    currentFilter = category;
    
    // 활성 버튼 스타일 업데이트
    filterBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
    
    renderSentences();
}

// 문장 필터링
function filterSentences() {
    return commonSentences.filter(sentence => {
        const matchesCategory = currentFilter === 'all' || sentence.category === currentFilter;
        const matchesSearch = !searchTerm || 
            sentence.english.toLowerCase().includes(searchTerm) ||
            sentence.korean.includes(searchTerm) ||
            sentence.pronunciation.includes(searchTerm);
        
        return matchesCategory && matchesSearch;
    });
}

// 문장 렌더링
function renderSentences() {
    const filteredSentences = filterSentences();
    
    if (filteredSentences.length === 0) {
        sentencesList.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    sentencesList.style.display = 'grid';
    noResults.style.display = 'none';
    
    sentencesList.innerHTML = filteredSentences.map(sentence => 
        createSentenceCard(sentence)
    ).join('');
    
    // 카드들에 애니메이션 지연 추가
    const cards = sentencesList.querySelectorAll('.sentence-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// 문장 카드 생성
function createSentenceCard(sentence) {
    const isStudied = studiedSentences.has(sentence.id);
    
    return `
        <div class="sentence-card" data-id="${sentence.id}">
            <div class="sentence-header">
                <span class="sentence-category">${categoryNames[sentence.category]}</span>
                <div class="sentence-actions">
                    <button class="action-btn ${isStudied ? 'studied' : ''}" 
                            onclick="toggleStudied(${sentence.id})"
                            title="${isStudied ? '학습 완료' : '학습 표시'}">
                        ${isStudied ? '✓' : '○'}
                    </button>
                    <button class="action-btn" 
                            onclick="speakSentence('${sentence.english}')"
                            title="음성으로 듣기">
                        🔊
                    </button>
                    <button class="action-btn" 
                            onclick="copySentence('${sentence.english}')"
                            title="문장 복사">
                        📋
                    </button>
                </div>
            </div>
            <div class="sentence-english">${sentence.english}</div>
            <div class="sentence-korean">${sentence.korean}</div>
            <div class="sentence-pronunciation">${sentence.pronunciation}</div>
        </div>
    `;
}

// 학습 상태 토글
function toggleStudied(sentenceId) {
    if (studiedSentences.has(sentenceId)) {
        studiedSentences.delete(sentenceId);
    } else {
        studiedSentences.add(sentenceId);
    }
    
    saveStudiedSentences();
    updateStats();
    renderSentences();
}

// 음성 재생 (Text-to-Speech)
function speakSentence(text) {
    if ('speechSynthesis' in window) {
        // 현재 재생 중인 음성 중지
        speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        utterance.pitch = 1;
        
        speechSynthesis.speak(utterance);
    } else {
        alert('죄송합니다. 이 브라우저는 음성 기능을 지원하지 않습니다.');
    }
}

// 문장 복사
function copySentence(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('문장이 클립보드에 복사되었습니다!');
        }).catch(() => {
            fallbackCopyTextToClipboard(text);
        });
    } else {
        fallbackCopyTextToClipboard(text);
    }
}

// 클립보드 복사 대체 방법
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showNotification('문장이 클립보드에 복사되었습니다!');
    } catch (err) {
        showNotification('복사에 실패했습니다.');
    }
    
    document.body.removeChild(textArea);
}

// 알림 표시
function showNotification(message) {
    // 기존 알림 제거
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // 새 알림 생성
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--success-color);
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        z-index: 1000;
        animation: slideInRight 0.3s ease-out;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // 3초 후 제거
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// 알림 애니메이션 CSS 추가
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', init);