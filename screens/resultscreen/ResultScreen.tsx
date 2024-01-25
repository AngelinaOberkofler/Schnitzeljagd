import React from 'react';
import { View, Text, StyleSheet, Image, Platform } from 'react-native';

const ResultScreen: React.FC = ({ route }: any) => {
  const { result } = route.params;

  const gottenPoints = 50; // Mock data
  const totalPoints = 100; // Mock data

  return (
    <View style={styles.container}>
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
          <Image source={require('../../pictures/loser.png')} style={styles.image} resizeMode="cover" />
        </View>
      )}
    </View>
  );
};

export default ResultScreen;

