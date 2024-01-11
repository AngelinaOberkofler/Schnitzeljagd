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
          <Image source={require('./winner.png')} style={styles.image} resizeMode="cover" />
        </View>
      ) : (
        <View style={styles.loserContainer}>
          <Text style={styles.loserText}>LOSER</Text>
          <Image source={require('./loser.png')} style={styles.image} resizeMode="cover" />
        </View>
      )}
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
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
    color: '#61dafb',
    fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'System',
  },
  points: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'System',
  },
  winnerContainer: {
    alignItems: 'center',
  },
  winnerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
    marginVertical: 10,
    fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'System',
  },
  loserContainer: {
    alignItems: 'center',
  },
  loserText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    marginVertical: 10,
    fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'System',
  },
  image: {
    width: 300,
    height: 300,
    marginVertical: 20,
  },
});

export default ResultScreen;

