import React from 'react';
import { View, Text, StyleSheet, Image, Platform } from 'react-native';
import styles from './ResultScreenStyles';

const ResultScreen: React.FC = ({ route }: any) => {
  const { result } = route.params;

  const gottenPoints = 100; // Mock data
  const totalPoints = 100; // Mock data

  return (
    <View style={styles.container}>
      <Image
                source={require('../../pictures/back.jpg')}
                style={styles.backgroundImage}
                resizeMode="cover"
            />
      <Text style={styles.title}>Du hast</Text>
      <Text style={styles.points}>{gottenPoints} Punkte / {totalPoints} Punkte</Text>
      
      {result === 'won' ? (
        <View style={styles.winnerContainer}>
          <Text style={styles.winnerText}>WINNER</Text>
          <Image source={require('../../pictures/winner.png')} style={styles.image} resizeMode="cover" />
        </View>
      ) : (
        <View style={styles.loserContainer}>
          <Text style={styles.loserText}>LOSER</Text>
          <Image source={require('../../pictures/newloser.png')} style={styles.image} resizeMode="cover" />
        </View>
      )}
    </View>
  );
};

export default ResultScreen;

