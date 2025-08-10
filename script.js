// 영어 문장 데이터
const phrasesData = {
    greetings: {
        title: "인사하기 👋",
        phrases: [
            {
                english: "Hello! How are you?",
                korean: "안녕하세요! 어떻게 지내세요?",
                usage: "친구나 아는 사람을 만났을 때 사용하는 기본적인 인사말"
            },
            {
                english: "Nice to meet you!",
                korean: "만나서 반갑습니다!",
                usage: "처음 만나는 사람에게 사용하는 인사말"
            },
            {
                english: "Good morning!",
                korean: "좋은 아침입니다!",
                usage: "아침에 사용하는 인사말 (보통 오전 12시까지)"
            },
            {
                english: "Good afternoon!",
                korean: "좋은 오후입니다!",
                usage: "오후에 사용하는 인사말 (오후 12시~6시)"
            },
            {
                english: "Good evening!",
                korean: "좋은 저녁입니다!",
                usage: "저녁에 사용하는 인사말 (오후 6시 이후)"
            },
            {
                english: "See you later!",
                korean: "나중에 봐요!",
                usage: "헤어질 때 사용하는 인사말"
            },
            {
                english: "Take care!",
                korean: "조심해서 가세요!",
                usage: "헤어질 때 상대방을 걱정하며 하는 인사말"
            },
            {
                english: "Have a nice day!",
                korean: "좋은 하루 되세요!",
                usage: "상대방에게 좋은 하루를 바라는 인사말"
            }
        ]
    },
    daily: {
        title: "일상생활 🏠",
        phrases: [
            {
                english: "What time is it?",
                korean: "몇 시예요?",
                usage: "시간을 물어볼 때 사용"
            },
            {
                english: "I'm hungry. Let's eat.",
                korean: "배고파요. 밥 먹자요.",
                usage: "배가 고플 때 사용하는 표현"
            },
            {
                english: "I'm tired. I need to rest.",
                korean: "피곤해요. 쉬어야겠어요.",
                usage: "피곤할 때 사용하는 표현"
            },
            {
                english: "What's the weather like today?",
                korean: "오늘 날씨가 어때요?",
                usage: "날씨에 대해 물어볼 때 사용"
            },
            {
                english: "I don't understand. Can you explain?",
                korean: "이해가 안 돼요. 설명해주실 수 있어요?",
                usage: "무엇을 이해하지 못했을 때 사용"
            },
            {
                english: "Where is the bathroom?",
                korean: "화장실이 어디에 있나요?",
                usage: "화장실 위치를 물어볼 때 사용"
            },
            {
                english: "I'm running late.",
                korean: "늦을 것 같아요.",
                usage: "약속에 늦을 것 같을 때 사용"
            },
            {
                english: "Can you help me, please?",
                korean: "도와주실 수 있나요?",
                usage: "도움이 필요할 때 사용하는 정중한 표현"
            }
        ]
    },
    shopping: {
        title: "쇼핑하기 🛒",
        phrases: [
            {
                english: "How much does this cost?",
                korean: "이것 얼마예요?",
                usage: "물건의 가격을 물어볼 때 사용"
            },
            {
                english: "Do you have this in a different size?",
                korean: "이것 다른 사이즈로 있나요?",
                usage: "다른 사이즈가 있는지 물어볼 때 사용"
            },
            {
                english: "Can I try this on?",
                korean: "이것 입어볼 수 있나요?",
                usage: "옷을 입어보고 싶을 때 사용"
            },
            {
                english: "I'll take it.",
                korean: "이것 살게요.",
                usage: "물건을 구매하기로 결정했을 때 사용"
            },
            {
                english: "Do you accept credit cards?",
                korean: "신용카드 받나요?",
                usage: "신용카드 결제 가능 여부를 물어볼 때 사용"
            },
            {
                english: "Where can I find...?",
                korean: "...는 어디에서 찾을 수 있나요?",
                usage: "특정 물건의 위치를 물어볼 때 사용"
            },
            {
                english: "This is too expensive.",
                korean: "이것 너무 비싸요.",
                usage: "가격이 비쌀 때 사용하는 표현"
            },
            {
                english: "Can I get a discount?",
                korean: "할인받을 수 있나요?",
                usage: "할인을 요청할 때 사용"
            }
        ]
    },
    travel: {
        title: "여행하기 ✈️",
        phrases: [
            {
                english: "Where is the nearest subway station?",
                korean: "가장 가까운 지하철역이 어디에 있나요?",
                usage: "지하철역 위치를 물어볼 때 사용"
            },
            {
                english: "How do I get to...?",
                korean: "...에 어떻게 가나요?",
                usage: "특정 장소로 가는 방법을 물어볼 때 사용"
            },
            {
                english: "I'm lost. Can you help me?",
                korean: "길을 잃었어요. 도와주실 수 있나요?",
                usage: "길을 잃었을 때 도움을 요청할 때 사용"
            },
            {
                english: "What time does the bus come?",
                korean: "버스가 몇 시에 오나요?",
                usage: "버스 시간을 물어볼 때 사용"
            },
            {
                english: "How long does it take to get there?",
                korean: "거기까지 얼마나 걸리나요?",
                usage: "이동 시간을 물어볼 때 사용"
            },
            {
                english: "Can you recommend a good restaurant?",
                korean: "좋은 식당을 추천해주실 수 있나요?",
                usage: "식당 추천을 받고 싶을 때 사용"
            },
            {
                english: "I'd like to book a hotel room.",
                korean: "호텔 방을 예약하고 싶어요.",
                usage: "호텔 예약을 하고 싶을 때 사용"
            },
            {
                english: "What's the best way to see the city?",
                korean: "도시를 보는 가장 좋은 방법이 뭔가요?",
                usage: "도시 관광 방법을 물어볼 때 사용"
            }
        ]
    },
    emergency: {
        title: "긴급상황 🚨",
        phrases: [
            {
                english: "Help! I need help!",
                korean: "도와주세요! 도움이 필요해요!",
                usage: "긴급하게 도움이 필요할 때 사용"
            },
            {
                english: "Call the police!",
                korean: "경찰을 불러주세요!",
                usage: "경찰이 필요할 때 사용"
            },
            {
                english: "Call an ambulance!",
                korean: "구급차를 불러주세요!",
                usage: "의료 도움이 필요할 때 사용"
            },
            {
                english: "I'm not feeling well.",
                korean: "기분이 좋지 않아요.",
                usage: "몸이 아프거나 기분이 좋지 않을 때 사용"
            },
            {
                english: "Where is the nearest hospital?",
                korean: "가장 가까운 병원이 어디에 있나요?",
                usage: "병원 위치를 물어볼 때 사용"
            },
            {
                english: "I lost my wallet.",
                korean: "지갑을 잃어버렸어요.",
                usage: "지갑을 잃어버렸을 때 사용"
            },
            {
                english: "Can you speak more slowly?",
                korean: "좀 더 천천히 말씀해주실 수 있나요?",
                usage: "상대방의 말을 이해하기 어려울 때 사용"
            },
            {
                english: "I don't speak English very well.",
                korean: "영어를 잘 못해요.",
                usage: "영어 실력이 부족함을 표현할 때 사용"
            }
        ]
    },
    emotions: {
        title: "감정표현 😊",
        phrases: [
            {
                english: "I'm happy!",
                korean: "행복해요!",
                usage: "기쁘고 행복할 때 사용"
            },
            {
                english: "I'm sad.",
                korean: "슬퍼요.",
                usage: "슬플 때 사용"
            },
            {
                english: "I'm angry.",
                korean: "화나요.",
                usage: "화가 날 때 사용"
            },
            {
                english: "I'm excited!",
                korean: "신나요!",
                usage: "기대되고 설렐 때 사용"
            },
            {
                english: "I'm nervous.",
                korean: "긴장돼요.",
                usage: "긴장될 때 사용"
            },
            {
                english: "I'm surprised!",
                korean: "놀랐어요!",
                usage: "놀랐을 때 사용"
            },
            {
                english: "I'm worried.",
                korean: "걱정돼요.",
                usage: "걱정될 때 사용"
            },
            {
                english: "I'm grateful.",
                korean: "감사해요.",
                usage: "감사할 때 사용"
            }
        ]
    }
};

// 전역 변수
let currentCategory = null;
let currentPhraseIndex = 0;

// DOM 요소들
const categorySection = document.querySelector('.category-section');
const learningSection = document.querySelector('#learningSection');
const categoryTitle = document.querySelector('#categoryTitle');
const phraseEnglish = document.querySelector('#phraseEnglish');
const phraseKorean = document.querySelector('#phraseKorean');
const phraseUsage = document.querySelector('#phraseUsage');
const currentIndexSpan = document.querySelector('#currentIndex');
const totalCountSpan = document.querySelector('#totalCount');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const backBtn = document.querySelector('#backBtn');

// 카테고리 카드 클릭 이벤트
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        startLearning(category);
    });
});

// 뒤로가기 버튼 이벤트
backBtn.addEventListener('click', () => {
    showCategorySection();
});

// 이전/다음 버튼 이벤트
prevBtn.addEventListener('click', () => {
    if (currentPhraseIndex > 0) {
        currentPhraseIndex--;
        updatePhraseDisplay();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPhraseIndex < phrasesData[currentCategory].phrases.length - 1) {
        currentPhraseIndex++;
        updatePhraseDisplay();
    }
});

// 학습 시작 함수
function startLearning(category) {
    currentCategory = category;
    currentPhraseIndex = 0;
    
    // 카테고리 섹션 숨기기
    categorySection.style.display = 'none';
    
    // 학습 섹션 표시
    learningSection.style.display = 'block';
    
    // 카테고리 제목 설정
    categoryTitle.textContent = phrasesData[category].title;
    
    // 첫 번째 문장 표시
    updatePhraseDisplay();
    
    // 페이지 상단으로 스크롤
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 카테고리 섹션 표시 함수
function showCategorySection() {
    learningSection.style.display = 'none';
    categorySection.style.display = 'block';
    
    // 페이지 상단으로 스크롤
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 문장 표시 업데이트 함수
function updatePhraseDisplay() {
    const phrases = phrasesData[currentCategory].phrases;
    const currentPhrase = phrases[currentPhraseIndex];
    
    // 문장 정보 표시
    phraseEnglish.textContent = currentPhrase.english;
    phraseKorean.textContent = currentPhrase.korean;
    phraseUsage.textContent = currentPhrase.usage;
    
    // 진행 상황 업데이트
    currentIndexSpan.textContent = currentPhraseIndex + 1;
    totalCountSpan.textContent = phrases.length;
    
    // 버튼 상태 업데이트
    prevBtn.disabled = currentPhraseIndex === 0;
    nextBtn.disabled = currentPhraseIndex === phrases.length - 1;
    
    // 애니메이션 효과
    const phraseCard = document.querySelector('#phraseCard');
    phraseCard.style.opacity = '0';
    phraseCard.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        phraseCard.style.transition = 'all 0.3s ease';
        phraseCard.style.opacity = '1';
        phraseCard.style.transform = 'translateY(0)';
    }, 100);
}

// 키보드 단축키 지원
document.addEventListener('keydown', (e) => {
    if (learningSection.style.display !== 'none') {
        switch(e.key) {
            case 'ArrowLeft':
                if (currentPhraseIndex > 0) {
                    prevBtn.click();
                }
                break;
            case 'ArrowRight':
                if (currentPhraseIndex < phrasesData[currentCategory].phrases.length - 1) {
                    nextBtn.click();
                }
                break;
            case 'Escape':
                backBtn.click();
                break;
        }
    }
});

// 터치 제스처 지원 (모바일)
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (learningSection.style.display !== 'none') {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0 && currentPhraseIndex < phrasesData[currentCategory].phrases.length - 1) {
                // 왼쪽으로 스와이프 - 다음 문장
                nextBtn.click();
            } else if (diff < 0 && currentPhraseIndex > 0) {
                // 오른쪽으로 스와이프 - 이전 문장
                prevBtn.click();
            }
        }
    }
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    // 카테고리 카드에 호버 효과 추가
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // 학습 진행률 표시
    updateProgressDisplay();
});

// 학습 진행률 표시 함수
function updateProgressDisplay() {
    const totalPhrases = Object.values(phrasesData).reduce((total, category) => {
        return total + category.phrases.length;
    }, 0);
    
    // 푸터에 총 문장 수 표시
    const footer = document.querySelector('.footer p');
    footer.innerHTML = `&copy; 2024 실용 영어 학습. 총 ${totalPhrases}개의 일상생활 영어 표현을 학습할 수 있습니다.`;
}

// 로컬 스토리지를 활용한 학습 진행률 저장
function saveProgress() {
    if (currentCategory) {
        const progress = {
            category: currentCategory,
            index: currentPhraseIndex,
            timestamp: Date.now()
        };
        localStorage.setItem('englishLearningProgress', JSON.stringify(progress));
    }
}

// 저장된 진행률 불러오기
function loadProgress() {
    const saved = localStorage.getItem('englishLearningProgress');
    if (saved) {
        try {
            const progress = JSON.parse(saved);
            const now = Date.now();
            const oneDay = 24 * 60 * 60 * 1000; // 24시간
            
            // 24시간 이내의 진행률만 유효하게 처리
            if (now - progress.timestamp < oneDay) {
                return progress;
            }
        } catch (e) {
            console.log('진행률 로드 실패');
        }
    }
    return null;
}

// 문장 변경 시 진행률 저장
function updatePhraseDisplay() {
    const phrases = phrasesData[currentCategory].phrases;
    const currentPhrase = phrases[currentPhraseIndex];
    
    // 문장 정보 표시
    phraseEnglish.textContent = currentPhrase.english;
    phraseKorean.textContent = currentPhrase.korean;
    phraseUsage.textContent = currentPhrase.usage;
    
    // 진행 상황 업데이트
    currentIndexSpan.textContent = currentPhraseIndex + 1;
    totalCountSpan.textContent = phrases.length;
    
    // 버튼 상태 업데이트
    prevBtn.disabled = currentPhraseIndex === 0;
    nextBtn.disabled = currentPhraseIndex === phrases.length - 1;
    
    // 진행률 저장
    saveProgress();
    
    // 애니메이션 효과
    const phraseCard = document.querySelector('#phraseCard');
    phraseCard.style.opacity = '0';
    phraseCard.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        phraseCard.style.transition = 'all 0.3s ease';
        phraseCard.style.opacity = '1';
        phraseCard.style.transform = 'translateY(0)';
    }, 100);
}