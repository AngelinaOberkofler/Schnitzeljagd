import React, { useState } from "react";
import {View,Text,TouchableOpacity,StyleSheet,Platform,Modal,ScrollView,TextInput,Image} from "react-native";
import styles from "../TasksScreenStyles";

const FragNummer: React.FC = () => {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const checkAnswer = () => {
    const isCorrect =answer.trim()!=="";
    setIsCorrect(isCorrect);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.questionText}>
      Wer sitzt da hinten in der letzten Reihe?<br />
        <Text style={styles.questionTextSub}>
        Finde heraus, wer in der letzten Reihe sitzt, und wenn die Person attraktiv ist, frage
nach seiner oder ihrer Nummer 😉😉
        </Text>
      </Text>
      <Image
        source={require('../tasks/taskpics/justin.jpg')}
        style={styles.teacherImage}
      />
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

export default FragNummer;
