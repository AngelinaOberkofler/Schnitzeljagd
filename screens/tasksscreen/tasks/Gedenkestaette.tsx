import React, { useState } from "react";
import {View, Text, TouchableOpacity, StyleSheet, Platform, Modal, ScrollView, TextInput, Image,} from "react-native";
import styles from "../TasksScreenStyles";
import {RadioButton} from "react-native-paper";

const Gedenkstaette: React.FC = () => {
    const [isCorrect, setIsCorrect] = useState(false);
    const [checked, setChecked] = useState<string>();

    const checkAnswer = () => {
        const correctAnswer = true;
        setIsCorrect(checked === correctAnswer.toString());
    };

    return (

        <ScrollView contentContainerStyle={styles.container}>
            <Image source={require('../tasks/taskpics/schoolmap.png')} style={styles.teacherImage} resizeMode="cover" />
            <Text style={styles.questionText}>
                Suche die Gedenkstätte der Schule und wähle die richtige Antwort aus.
            </Text>
            <View style={styles.radioGroup}>
                <View style={styles.radioButton}>
                    <RadioButton
                        value="Punkt 1"
                        status={checked === "true" ? "checked" : "unchecked"}
                        onPress={() => setChecked("true")}
                    />
                    <Text style={styles.radioLabel} onPress={() => setChecked("false")}>
                        Punkt 1
                    </Text>
                </View>
                <View style={styles.radioButton}>
                    <RadioButton
                        value="Punkt 2"
                        status={checked === "true" ? "checked" : "unchecked"}
                        onPress={() => setChecked("true")}
                    />
                    <Text style={styles.radioLabel} onPress={() => setChecked("true")}>
                        Punkt 2
                    </Text>
                </View>

                <View style={styles.radioButton}>
                    <RadioButton
                        value="Punkt 3"
                        status={checked === "false" ? "checked" : "unchecked"}
                        onPress={() => setChecked("false")}
                    />
                    <Text style={styles.radioLabel} onPress={() => setChecked("false")}>
                        Punkt 3
                    </Text>
                </View>
            </View>
            <TouchableOpacity style={styles.modalButton} onPress={checkAnswer}>
                <Text style={styles.modalButtonText}>Antwort Überprüfen</Text>
            </TouchableOpacity>
            {isCorrect && <Text style={styles.modalText}>Richtig!</Text>}
        </ScrollView>
    );
};

export default Gedenkstaette;