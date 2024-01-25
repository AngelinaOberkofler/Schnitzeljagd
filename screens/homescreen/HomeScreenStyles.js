import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#014b7c',
      },

    image: {
    width: '100%',
    height: '60%',
    },
    contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    button: {
    backgroundColor: '#61dafb',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 15,
    marginTop: 20,
    },
    buttonText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'System',
    },
    copyrightContainer: {
    padding: 10,
    backgroundColor: '#333',
    alignItems: 'center',
    },
    copyrightText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'System',
    },
    });

    export default styles;