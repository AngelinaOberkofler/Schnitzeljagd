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

const Hantel: React.FC = () => {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(Boolean);

  const checkAnswer = () => {
    const correctAnswer = "";
    const isCorrect =
      answer.trim().toLowerCase() === correctAnswer.toLowerCase();
    setIsCorrect(isCorrect);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.questionText}>
        Finde die schwerste Hantel im Schulgebäude und tippe ein wie schwer es
        ist: <br />
        <Text style={styles.questionTextSub}>
          Suche nach der schwersten Hantel in der Schule und notiere das
          Gewicht.
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

export default Hantel;
