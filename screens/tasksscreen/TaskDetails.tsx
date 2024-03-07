import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Modal,
  ScrollView,
} from "react-native";
import styles from "./TasksScreenStyles";
import { Ionicons } from "@expo/vector-icons";
import  * as AllTasks  from './tasks/AllTasks';

const TaskDetails: React.FC = ({ navigation, route }: any) => {
  const taskName = route.params.taskName;

  const TaskComponent = (AllTasks as any)[taskName];

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>{taskName}</Text>
      </View>
      <ScrollView style={styles.scrollView} stickyHeaderIndices={[0]}>
        {!TaskComponent ? (
          <View style={styles.container}>
            <Text style={styles.modalText}>
              No component found for task: {taskName}
            </Text>
          </View>
        ) : (
          <TaskComponent/>
        )}
      </ScrollView>
    </View>
  );
};

export default TaskDetails;
