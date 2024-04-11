import React, { useState } from "react";
import {View,Text,TouchableOpacity,StyleSheet,Platform,Modal,ScrollView,TextInput,} from "react-native";
import styles from "../TasksScreenStyles";

const BoesesElement: React.FC = () => {
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
                Finde heraus, welches chemische Element im Chemiesaal als das gefährlichste gilt.
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

export default BoesesElement;