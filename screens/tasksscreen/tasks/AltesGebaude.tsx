import React, { useState } from "react";
import {View,Text,TouchableOpacity,StyleSheet,Platform,Modal,ScrollView,TextInput,} from "react-native";
import styles from "../TasksScreenStyles";

const AltesGebaeude: React.FC = () => {
    const [answer, setAnswer] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);

    const checkAnswer = () => {
        const correctAnswer = "";
        const isCorrect =
            answer.trim().toLowerCase() === correctAnswer.toLowerCase();
        setIsCorrect(isCorrect);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.questionText}>
                Welches sehr alte Gebäude sieht man von dem Chemiesaal aus?
                <br />
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

export default AltesGebaeude;