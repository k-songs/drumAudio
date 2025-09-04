// constants/drumSounds.js
// 실제 무료 음원 파일들을 assets/sounds/ 폴더에 저장 후 사용

/* export const DRUM_SOUNDS = {
  // 온라인에서 무료 드럼 샘플을 다운로드하여 사용
  // 예: freesound.org, zapsplat.com 등에서 무료 계정으로 다운로드
  drum: require('../assets/sounds/kick_drum_short.mp3'),      // 킥드럼 (낮은 톤)
  snare: require('../assets/sounds/snare_drum_short.mp3'),    // 스네어 (높은 톤)  
  hihat: require('../assets/sounds/hi_hat_short.mp3'),        // 하이햇 (샤프한 소리)
  cymbal: require('../assets/sounds/crash_cymbal_short.mp3'), // 심벌 (금속성 소리)
}; */


// constants/drumSounds.js
export const DRUM_SOUNDS = {
  kick: {
    name: '킥드럼',
    description: '둔탁하고 깊은 저음',
    emoji: '🥁',
    frequency: 60, // 실제 드럼 주파수 (참고용)
    // 실제 파일이 준비되면 아래 주석 해제
    // sound: require('../assets/sounds/kick.mp3'),

    // 임시 테스트용 데이터 URI (매우 짧은 비프음)
    testSound: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmcaBSuAy/TCEUKbAAAAUUGKhQUFLMqDLUOBvVJNocP74NAAAA=='
  },
  snare: {
    name: '스네어',
    description: '날카롭고 튀는 소리',
    emoji: '🪘',
    frequency: 200,
    // sound: require('../assets/sounds/snare.mp3'),
    testSound: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmcaBSuAy/zGEUMeACBhgPyy9QoAAA=='
  },
  hihat: {
    name: '하이햇',
    description: '짧고 선명한 금속음',
    emoji: '🎵',
    frequency: 800,
    // sound: require('../assets/sounds/hihat.mp3'),
    testSound: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmcaBSuAy/zJEUUqAEBjgey29Q4AAA=='
  },
  cymbal: {
    name: '심벌',
    description: '긴 울림의 금속음',
    emoji: '🔔',
    frequency: 1200,
    // sound: require('../assets/sounds/cymbal.mp3'),
    testSound: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmcaBSuAy/zLEUYuAEBkgery9RAAAA=='
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
