import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform, Modal, ScrollView, TextInput, Image } from "react-native";
import styles from "../TasksScreenStyles";

const LehrerFoto: React.FC = () => {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const checkAnswer = () => {
    const correctAnswer = "Lukas Draxler";
    const correctAnswer2 = "Draxler Lukas";
    const correctAnswer3 = "Draxler";
    const isCorrect =
      answer.trim().toLowerCase() === correctAnswer.toLowerCase() || answer.trim().toLowerCase() === correctAnswer2.toLowerCase()|| answer.trim().toLowerCase() === correctAnswer3
      .toLowerCase();
    setIsCorrect(isCorrect);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.questionText}>
        Schau das Foto dieses Lehrers an und frag im Schulgebäude andere Mitmenschen, ob sie wissen, wer die Person auf dem Foto ist. Gebe seinen Namen unten ein:
      </Text>
      <Image
        source={require('../tasks/taskpics/draxler.jpg')}
        style={styles.teacherImage}
      />
      <TextInput
        style={styles.textInput}
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

export default LehrerFoto;
