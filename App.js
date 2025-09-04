// App.js
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  StatusBar,
} from "react-native";
import TempDrumGame from "./components/TempDrumGame";
import { DIFFICULTY_LEVELS } from "./constants/drumSounds";
import { Audio } from "expo-av";

export default function App() {
  const [gameState, setGameState] = useState("menu"); // menu, playing, results
  const [selectedDifficulty, setSelectedDifficulty] = useState("beginner");
  const [gameResults, setGameResults] = useState(null);
  useEffect(() => {
    // 🆕 앱 시작 시 오디오 모드 설정
    const setupAudio = async () => {
      try {
        await Audio.setAudioModeAsync({
          staysActiveInBackground: false,
          shouldDuckAndroid: true,
          playThroughEarpieceAndroid: false,
        });
        console.log("🔊 Audio setup completed");
      } catch (error) {
        console.error("🚨 Audio setup error:", error);
      }
    };

    if (__DEV__) {
      setupAudio();
    }
  }, []);

  const startGame = (difficulty) => {
    setSelectedDifficulty(difficulty);
    setGameState("playing");
  };

  const handleGameComplete = (score, maxScore, percentage) => {
    setGameResults({ score, maxScore, percentage });
    setGameState("results");
  };

  const goToMenu = () => {
    setGameState("menu");
    setGameResults(null);
  };

  const restartGame = () => {
    setGameState("playing");
  };

  const renderMenu = () => (
    <View style={styles.menuContainer}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoEmoji}>🥁</Text>
        <Text style={styles.logoText}>드럼 오디오</Text>
        <Text style={styles.logoSubtext}>청능 훈련 게임</Text>
      </View>

      <View style={styles.menuCard}>
        <Text style={styles.menuTitle}>난이도를 선택하세요</Text>

        {Object.entries(DIFFICULTY_LEVELS).map(([key, level]) => (
          <TouchableOpacity
            key={key}
            style={[
              styles.difficultyButton,
              key === "beginner"
                ? styles.beginnerButton
                : styles.intermediateButton,
            ]}
            onPress={() => startGame(key)}
          >
            <Text style={styles.difficultyTitle}>{level.name}</Text>
            <Text style={styles.difficultyDescription}>
              {level.description}
            </Text>
            <Text style={styles.difficultyRounds}>{level.rounds}라운드</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          🎯 목표: 재생되는 드럼 소리를 듣고 올바른 악기를 선택하세요{"\\n"}
          🎧 헤드폰 사용을 권장합니다
        </Text>
      </View>
    </View>
  );

  const renderResults = () => {
    const { score, maxScore, percentage } = gameResults;

    const getGrade = () => {
      if (percentage >= 90)
        return { grade: "최우수", emoji: "🏆", color: "#FFD700" };
      if (percentage >= 80)
        return { grade: "우수", emoji: "🥇", color: "#C0C0C0" };
      if (percentage >= 70)
        return { grade: "양호", emoji: "🥈", color: "#CD7F32" };
      if (percentage >= 60)
        return { grade: "보통", emoji: "🥉", color: "#4CAF50" };
      return { grade: "연습 필요", emoji: "💪", color: "#FF5722" };
    };

    const { grade, emoji, color } = getGrade();

    return (
      <View style={styles.resultsContainer}>
        <View style={styles.resultsCard}>
          <Text style={styles.resultsTitle}>게임 완료!</Text>

          <View style={[styles.gradeContainer, { backgroundColor: color }]}>
            <Text style={styles.gradeEmoji}>{emoji}</Text>
            <Text style={styles.gradeText}>{grade}</Text>
          </View>

          <View style={styles.scoreDisplay}>
            <Text style={styles.scoreNumber}>
              {score}/{maxScore}
            </Text>
            <Text style={styles.percentageNumber}>{percentage}%</Text>
          </View>

          <Text style={styles.encouragementText}>
            {percentage >= 80
              ? "훌륭한 청력을 가지고 계시네요!"
              : percentage >= 60
              ? "좋은 결과입니다. 더 연습해보세요!"
              : "연습을 통해 청력을 향상시켜보세요!"}
          </Text>
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.restartButton} onPress={restartGame}>
            <Text style={styles.actionButtonText}>다시 도전</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.homeButton} onPress={goToMenu}>
            <Text style={styles.actionButtonText}>메뉴로</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />

      {gameState === "menu" && renderMenu()}
      {gameState === "playing" && (
        <TempDrumGame
          difficulty={selectedDifficulty}
          onGameComplete={handleGameComplete}
        />
      )}
      {gameState === "results" && renderResults()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  // 메뉴 스타일
  menuContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logoEmoji: {
    fontSize: 80,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
  },
  logoSubtext: {
    fontSize: 18,
    color: "#666",
    marginTop: 5,
  },
  menuCard: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 25,
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  difficultyButton: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: "center",
  },
  beginnerButton: {
    backgroundColor: "#4CAF50",
  },
  intermediateButton: {
    backgroundColor: "#FF9800",
  },
  difficultyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  difficultyDescription: {
    fontSize: 14,
    color: "white",
    marginTop: 5,
    opacity: 0.9,
  },
  difficultyRounds: {
    fontSize: 12,
    color: "white",
    marginTop: 3,
    opacity: 0.8,
  },
  infoContainer: {
    backgroundColor: "#E3F2FD",
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: "#2196F3",
  },
  infoText: {
    fontSize: 14,
    color: "#1565C0",
    lineHeight: 20,
    textAlign: "center",
  },
  // 결과 스타일
  resultsContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  resultsCard: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    marginBottom: 30,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  resultsTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  gradeContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  gradeEmoji: {
    fontSize: 40,
    marginBottom: 5,
  },
  gradeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  scoreDisplay: {
    alignItems: "center",
    marginBottom: 20,
  },
  scoreNumber: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#333",
  },
  percentageNumber: {
    fontSize: 24,
    color: "#666",
    marginTop: 5,
  },
  encouragementText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  restartButton: {
    flex: 1,
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    marginRight: 10,
  },
  homeButton: {
    flex: 1,
    backgroundColor: "#2196F3",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    marginLeft: 10,
  },
  actionButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
