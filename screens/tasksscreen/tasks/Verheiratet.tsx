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
import { RadioButton } from "react-native-paper";
import styles from "../TasksScreenStyles";
const Verheiratet: React.FC = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [checked, setChecked] = useState<string>();

  const checkAnswer = () => {
    const correctAnswer = true;
    setIsCorrect(checked === correctAnswer.toString());
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.questionText}>
        Finde heraus, ob der Leiter der Informatikabteilung verheiratet ist.
      </Text>
      <View style={styles.radioGroup}>
        <View style={styles.radioButton}>
          <RadioButton
            value="true"
            status={checked === "true" ? "checked" : "unchecked"}
            onPress={() => setChecked("true")}
          />
          <Text style={styles.radioLabel} onPress={() => setChecked("true")}>
            Wahr
          </Text>
        </View>

        <View style={styles.radioButton}>
          <RadioButton
            value="false"
            status={checked === "false" ? "checked" : "unchecked"}
            onPress={() => setChecked("false")}
          />
          <Text style={styles.radioLabel} onPress={() => setChecked("false")}>
            Falsch
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.modalButton} onPress={checkAnswer}>
        <Text style={styles.modalButtonText}>Antwort überprüfen</Text>
      </TouchableOpacity>
      {isCorrect && <Text style={styles.modalText}>Richtig!</Text>}
    </ScrollView>
  );
};

export default Verheiratet;
