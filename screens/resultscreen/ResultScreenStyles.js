import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FDD5CD',
      backgroundColor: 'rgba(255, 255, 255, 0.2)', // Slightly transparent background
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginVertical: 10,
      textAlign: 'center',
      color: '#fff',
      fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'System',
    },
    points: {
      fontSize: 22,
      marginBottom: 20,
      textAlign: 'center',
      color: '#fff',
      fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'System',
    },
    winnerContainer: {
      alignItems: 'center',
    },
    winnerText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      marginVertical: 10,
      fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'System',
      textShadowColor: '#fff',  // White color for outline
      textShadowOffset: { width: 1, height: 1 }, // Offset of the shadow
      textShadowRadius: 10, // Radius of the shadow
    },
    loserContainer: {
      alignItems: 'center',
    },
    loserText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      marginVertical: 10,
      fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'System',
      textShadowColor: '#fff',  // White color for outline
      textShadowOffset: { width: 1, height: 1 }, // Offset of the shadow
      textShadowRadius: 10, // Radius of the shadow
    },
    image: {
      width: 300,
      height: 300,
      marginVertical: 20,
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -1,
  },
  });

export default styles;