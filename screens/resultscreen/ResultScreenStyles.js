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