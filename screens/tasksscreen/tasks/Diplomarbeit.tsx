import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Modal,
  ScrollView,
  TextInput,
} from "react-native";
import styles from "../TasksScreenStyles";

const Diplomarbeit: React.FC = () => {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(Boolean);

  const checkAnswer = () => {
    const correctAnswer = "Bibliothek";
    const isCorrect =
      answer.trim().toLowerCase() === correctAnswer.toLowerCase();
    setIsCorrect(isCorrect);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.questionText}>
        Wo findet man die Diplomarbeiten von Absolventen: <br />
        <Text style={styles.questionTextSub}>
          Suche nach einem Ort, an dem die Diplomarbeiten früherer Absolventen
          aufbewahrt werden.
        </Text>
      </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setAnswer(text)}
        value={answer}
        placeholder="Antwort eingeben"
      />
      <TouchableOpacity style={styles.modalButton} onPress={checkAnswer}>
        <Text style={styles.modalButtonText}>Antwort überprüfen</Text>
      </TouchableOpacity>
      {isCorrect && <Text style={styles.modalText}>Richtig!</Text>}
    </ScrollView>
  );
};

export default Diplomarbeit;
