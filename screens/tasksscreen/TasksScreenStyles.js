import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C3E50', // Futuristic background color
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
    paddingTop: 10,
    marginTop: Platform.OS === 'ios' ? 90 : 70, // Adjust marginTop to push the titleContainer down below the playerInfo section
  },
  backButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: 'white', // White button background
    marginRight: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white', // White title color
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
    backgroundColor: 'white', // White button background
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
    shadowColor: '#8A2BE2',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  taskButtonText: {
    color: '#8A2BE2', // Purple text color
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'System',
  },
  finishButton: {
    backgroundColor: 'white', // White button background
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 20,
    width: '100%',
    shadowColor: '#8A2BE2',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  finishButtonText: {
    color: '#8A2BE2', // Purple text color
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
    backgroundColor: '#8A2BE2',
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
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
  },
  modalButtonText: {
    color: '#8A2BE2',
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
playerInfo: {
  position: 'absolute',
  top: Platform.OS === 'ios' ? 20 : 10, // Adjust top position if needed
  left: 10,
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.2)', // Lighter transparent white background
  paddingVertical: 5, // Adjust vertical padding as needed
  paddingHorizontal: 10, // Adjust horizontal padding as needed
  borderRadius: 10,
  zIndex: 1,
},
avatar: {
  width: 50, // Small, manageable size
  height: 50,
  borderRadius: 25, // Circular avatar
  marginRight: 10, // Space between avatar and name
},
playerName: {
  color: '#fff', // Assuming a dark background; adjust as necessary
  fontWeight: 'bold',
},
teacherImage: {
  width: 200, // Adjust the width as needed
  height: 200, // Adjust the height as needed
  resizeMode: 'cover', // Adjust the resize mode as needed
  marginVertical: 10, // Adjust the vertical margin as needed
},

});

export default styles;
