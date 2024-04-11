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

const Lehrerbeschreibung: React.FC = () => {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(Boolean);

  const checkAnswer = () => {
    const correctAnswer = "Gugerbauer";
    const correctAnswer2 = "Gerhard Gugerbauer";
    const correctAnswer3 = "Gugerbauer Gerhard";
    const isCorrect =
      answer.trim().toLowerCase() === correctAnswer.toLowerCase()||answer.trim().toLowerCase() === correctAnswer2.toLowerCase()
      ||answer.trim().toLowerCase() === correctAnswer3.toLowerCase();
    setIsCorrect(isCorrect);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.questionText}>
      Anhand der bestimmten Beschreibung finde den Lehrer dann im Schulgebäude und gebe seinen Namen ein. <br />
        <Text style={styles.questionTextSub}>
        In der Stille des Klassenzimmers schreitet er langsam voran,<br />
        Ein Mann von Wissen, ein wahrer Lehrmann.<br />
        Sein Haupt fast kahl, doch strahlt Weisheit daraus,<br />
        In seiner Hand die Last der Bücher, kein Verdruss.<br /><br />

        Ein Ingenieur mit stolzem Titel, das steht fest,<br />
        Doch sein größter Schatz ist, was er den Schülern gibt, das steht im Text.<br />
        Seine Stimme klar, wie ein Bach im Morgenlicht,<br />
        Führt er sie durch das Labyrinth des Wissens, Schritt für Schritt.<br /><br />

        Er ist kein Gigant, eher von kleiner Statur,<br />
        Doch seine Präsenz füllt den Raum, das ist die Kur.<br />
        Mit einer Tasche groß und schwer, beladen mit Ideen und Büchern,<br />
        Er öffnet den Geist der Lernenden, lässt sie auf neuen Wegen suchen.
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

export default Lehrerbeschreibung;
