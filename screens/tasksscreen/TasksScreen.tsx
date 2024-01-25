import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, Modal } from 'react-native';

const TasksScreen: React.FC = ({ navigation }: any) => {
  const [isFinishModalVisible, setFinishModalVisible] = useState(false);

  const handleTaskPress = (taskName: string) => {
    navigation.navigate('TaskDetails', { taskName });
  };

  const handleFinishPress = () => {
    setFinishModalVisible(true);
  };

  const handleConfirmFinish = () => {
    // Missing logic for confirmation

    const result = 'won';  // change later
    navigation.navigate('ResultScreen', { result });
    setFinishModalVisible(false);
  };

  const handleCancelFinish = () => {
    setFinishModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks Screen</Text>
      
      <TouchableOpacity style={styles.taskButton} onPress={() => handleTaskPress('Task1')}>
        <Text style={styles.taskButtonText}>Task 1</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.taskButton} onPress={() => handleTaskPress('Task2')}>
        <Text style={styles.taskButtonText}>Task 2</Text>
      </TouchableOpacity>

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
            <Text style={styles.modalText}>Are you sure you want to finish?</Text>
            
            <TouchableOpacity style={styles.modalButton} onPress={handleConfirmFinish}>
              <Text style={styles.modalButtonText}>Yes</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.modalButton} onPress={handleCancelFinish}>
              <Text style={styles.modalButtonText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TasksScreen;
