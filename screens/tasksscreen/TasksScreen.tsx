import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, Modal } from 'react-native';
import styles from './TasksScreenStyles';

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
      
      <Text>

        
      </Text>
      <TouchableOpacity style={styles.taskButton} onPress={() => handleTaskPress('Task1')}>
        <Text style={styles.taskButtonText}>Task 1</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.taskButton} onPress={() => handleTaskPress('Task2')}>
        <Text style={styles.taskButtonText}>Task 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.taskButton} onPress={() => handleTaskPress('Task3')}>
        <Text style={styles.taskButtonText}>Task 3</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.taskButton} onPress={() => handleTaskPress('Task4')}>
        <Text style={styles.taskButtonText}>Task 4</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.taskButton} onPress={() => handleTaskPress('Task5')}>
        <Text style={styles.taskButtonText}>Task 5</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.taskButton} onPress={() => handleTaskPress('Task6')}>
        <Text style={styles.taskButtonText}>Task </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.taskButton} onPress={() => handleTaskPress('Task7')}>
        <Text style={styles.taskButtonText}>Task 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.taskButton} onPress={() => handleTaskPress('Task8')}>
        <Text style={styles.taskButtonText}>Task 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.taskButton} onPress={() => handleTaskPress('Task9')}>
        <Text style={styles.taskButtonText}>Task 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.taskButton} onPress={() => handleTaskPress('Task10')}>
        <Text style={styles.taskButtonText}>Task 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.taskButton} onPress={() => handleTaskPress('Task11')}>
        <Text style={styles.taskButtonText}>Task 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.taskButton} onPress={() => handleTaskPress('Task12')}>
        <Text style={styles.taskButtonText}>Task 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.taskButton} onPress={() => handleTaskPress('Task13')}>
        <Text style={styles.taskButtonText}>Task 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.taskButton} onPress={() => handleTaskPress('Task14')}>
        <Text style={styles.taskButtonText}>Task 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.taskButton} onPress={() => handleTaskPress('Task15')}>
        <Text style={styles.taskButtonText}>Task 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.taskButton} onPress={() => handleTaskPress('Task16')}>
        <Text style={styles.taskButtonText}>Task 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.taskButton} onPress={() => handleTaskPress('Task17')}>
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
