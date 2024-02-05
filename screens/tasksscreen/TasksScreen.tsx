import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, Modal, ScrollView } from 'react-native';
import styles from './TasksScreenStyles';
import { Ionicons } from '@expo/vector-icons'; 


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
      <View style={styles.titleContainer}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      <Text style={styles.title}>Tasks</Text>
      </View>
      <ScrollView style={styles.scrollView} stickyHeaderIndices={[0]}>
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
        <Text style={styles.taskButtonText}>Task 6</Text>
      </TouchableOpacity>

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
