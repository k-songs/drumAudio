// constants/drumSounds.js
// 실제 무료 음원 파일들을 assets/sounds/ 폴더에 저장 후 사용

// 간단한 구조 - 실제 MP3 파일만 사용
export const DRUM_SOUNDS = {
  kick: require('../assets/sounds/tom_z.mp3'),      // 킥드럼 (낮은 톤)
  snare: require('../assets/sounds/snare_z.mp3'),    // 스네어 (높은 톤)  
  hihat: require('../assets/sounds/hat_z.mp3'),        // 하이햇 (샤프한 소리)
  cymbal: require('../assets/sounds/cymbal_z.mp3'), // 심벌 (금속성 소리)
};

// 메타데이터 정보 (UI 표시용)
export const DRUM_INFO = {
  kick: {
    name: '킥드럼',
    description: '둔탁하고 깊은 저음',
    emoji: '🥁'
  },
  snare: {
    name: '스네어',
    description: '날카롭고 튀는 소리',
    emoji: '🪘'
  },
  hihat: {
    name: '하이햇',
    description: '짧고 선명한 금속음',
    emoji: '🎵'
  },
  cymbal: {
    name: '심벌',
    description: '긴 울림의 금속음',
    emoji: '🔔'
  }
};

export const DIFFICULTY_LEVELS = {
  beginner: {
    name: '초급',
    instruments: ['kick', 'snare'],
    rounds: 5,
    description: '2가지 악기 (킥드럼, 스네어)'
  },
  intermediate: {
    name: '중급',
    instruments: ['kick', 'snare', 'hihat', 'cymbal'],
    rounds: 10,
    description: '4가지 악기 (전체)'
  }
};

