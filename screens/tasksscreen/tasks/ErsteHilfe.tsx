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

const ErsteHilfe: React.FC = () => {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(Boolean);

  const checkAnswer = () => {
    const correctAnswer = "5BHIF";
    const correctAnswer2 = "3BHME";
    const correctAnswer3 = "3CHIF";
    const isCorrect = answer.trim().toLowerCase() === correctAnswer.toLowerCase()
                      || answer.trim().toLowerCase() === correctAnswer2.toLowerCase()
                      || answer.trim().toLowerCase() === correctAnswer3.toLowerCase();
    setIsCorrect(isCorrect);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.questionText}>
        Vor welcher Klasse im ersten Stock befindet sich die Erste-Hilfe-Box? Was ist ihre Raumnummer?
      </Text>
      <TextInput
        style= {styles.textInput}
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

export default ErsteHilfe;
