import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDD5CD',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
    paddingTop: 10, 
  },
  backButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#61dafb',
    marginRight: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#61dafb',
    fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'System',
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  scrollView: {
    flex: 1,
    marginTop: 50,
    width: '100%'
  },
  taskButton: {
    backgroundColor: '#61dafb',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
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
  

export default styles;