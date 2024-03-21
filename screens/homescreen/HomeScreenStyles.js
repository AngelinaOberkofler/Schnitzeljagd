import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F3',
},
backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
},
title: {
    fontSize: 32, // Adjusted for larger, more prominent title
    fontWeight: 'bold',
    color: '#FFF', // White text for visibility
    textAlign: 'center',
    marginTop: 20, // Ensure there's space at the top
    marginBottom: 20,
},
subtitle: {
    fontSize: 18,
    color: '#FFF', // Adjusted for white text
    marginBottom: 10,
},
avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
},
input: {
    width: '80%',
    height: 40,
    borderColor: '#FFF', // White border
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#FFF', // White input text
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Slightly transparent background
},
button: {
    backgroundColor: '#FFF', // White background for the button
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 25,
    marginTop: 20,
},
buttonText: {
    color: '#800080', // Purple text
    fontSize: 20,
    fontWeight: 'bold',
},
aboutButton: {
    marginTop: 10,
    paddingVertical: 10, // Slightly larger touch area
    paddingHorizontal: 20,
},
aboutButtonText: {
    color: '#FFF', // White text for visibility
    fontSize: 16,
    fontWeight: 'bold', // Make the text bolder
},
});

export default styles;
