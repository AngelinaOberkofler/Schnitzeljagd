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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDD5CD',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
    color: '#61dafb',
    fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'System',
    marginTop: '-30%',
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  taskButton: {
    backgroundColor: '#61dafb',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: '90%',
  },
  taskButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'System',
  },
  finishButton: {
    backgroundColor: '#61dafb',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 20,
    width: '100%',
  },
  finishButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'System',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'System',
  },
  modalButton: {
    backgroundColor: '#61dafb',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'System',
  },
});

export default TasksScreen;
