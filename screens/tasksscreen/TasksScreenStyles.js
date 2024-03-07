import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C3E50', // Futuristic background color
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
    backgroundColor: '#3498DB', // Futuristic button color
    marginRight: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3498DB', // Futuristic title color
    fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'System',
    textShadowColor: '#2C3E50', // Shadow color
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  scrollView: {
    flex: 1,
    marginTop: 50,
    width: '100%'
  },
  taskButton: {
    backgroundColor: '#3498DB',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
  },
  taskButtonText: {
    color: '#ECF0F1', // Futuristic text color
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'System',
  },
  finishButton: {
    backgroundColor: '#3498DB',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 20,
    width: '100%',
  },
  finishButtonText: {
    color: '#ECF0F1',
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
    backgroundColor: '#3498DB',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'System',
    color: '#ECF0F1',
  },
  modalButton: {
    backgroundColor: '#3498DB',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
  },
  modalButtonText: {
    color: '#ECF0F1',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'System',
  },
  questionText: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'System',
    color: '#ECF0F1',
  },
  questionTextSub: {
    textAlign: 'center',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'System',
    color: '#BCBCBC',
  },
  textInput: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginVertical: 8,
    fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'System',
  },
  radioGroup: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-around', 
    marginTop: 20, 
    borderRadius: 8, 
    backgroundColor: 'white', 
    padding: 16, 
    elevation: 4, 
    shadowColor: '#000', 
    shadowOffset: { 
        width: 0, 
        height: 2, 
    }, 
    shadowOpacity: 0.25, 
    shadowRadius: 3.84, 
}, 
radioButton: { 
    flexDirection: 'row', 
    alignItems: 'center', 
}, 
radioLabel: { 
    marginLeft: 8, 
    fontSize: 16, 
    color: '#333', 
},
});

export default styles;
