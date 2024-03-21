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

const Pizza: React.FC = () => {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const checkAnswer = () => {
    const correctAnswer = "3,10";
    const correctAnswer2 = "3.10";
    const isCorrect =
      answer.trim().toLowerCase() === correctAnswer.toLowerCase() || answer.trim().toLowerCase() === correctAnswer2.toLowerCase();
    setIsCorrect(isCorrect);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.questionText}>
        Finde heraus, wie viel ein Stück Pizza im Buffet kostet.
      </Text>
      <TextInput
        style= {styles.textInput}
        keyboardType="numeric"
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

export default Pizza;
