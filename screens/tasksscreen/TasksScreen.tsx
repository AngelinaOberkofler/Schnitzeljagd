import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform, Modal, ScrollView, Image } from "react-native";
import styles from "./TasksScreenStyles";
import { Ionicons } from "@expo/vector-icons";
import * as AllTasks from "./tasks/AllTasks";

const tasks = Object.keys(AllTasks);

const TasksScreen: React.FC = ({ route, navigation }: any) => {
  const { playerName, avatarSource } = route.params;
  const taskAmount = 8;
  const [isFinishModalVisible, setFinishModalVisible] = useState(false);
  const [randomTasks, setRandomTasks] = useState<string[]>([]);

  useEffect(() => {
    const shuffledTasks = shuffleArray(tasks).slice(0, taskAmount);
    setRandomTasks(shuffledTasks);
  }, []);

  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleTaskPress = (taskName: string) => {
    navigation.navigate("TaskDetails", { taskName });
  };

  const handleFinishPress = () => {
    setFinishModalVisible(true);
  };

  const handleConfirmFinish = () => {
    // Missing logic for confirmation

    const result = "won"; // change later
    navigation.navigate("ResultScreen", { result });
    setFinishModalVisible(false);
  };

  const handleCancelFinish = () => {
    setFinishModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Image
                source={require('../../pictures/back.jpg')}
                style={styles.backgroundImage}
                resizeMode="cover"
            />
      <View style={styles.playerInfo}>
        <Image source={avatarSource} style={styles.avatar} resizeMode="cover" />
        <Text style={styles.playerName}>{playerName}</Text>
      </View>
      <View style={styles.titleContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#8A2BE2" />
        </TouchableOpacity>
        <Text style={styles.title}>Tasks</Text>
      </View>
      <ScrollView style={styles.scrollView} stickyHeaderIndices={[0]}>
        {randomTasks.map((task) => (
          <TouchableOpacity
            style={styles.taskButton}
            onPress={() => handleTaskPress(task)}
          >
            <Text style={styles.taskButtonText}>{task}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.finishButton} onPress={handleFinishPress}>
        <Text style={styles.finishButtonText}>Finish</Text>
      </TouchableOpacity>

      <Modal
        visible={isFinishModalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Are you sure you want to finish?
            </Text>

            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleConfirmFinish}
            >
              <Text style={styles.modalButtonText}>Yes</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleCancelFinish}
            >
              <Text style={styles.modalButtonText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TasksScreen;