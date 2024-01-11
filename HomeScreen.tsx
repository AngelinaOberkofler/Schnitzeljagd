import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Platform } from 'react-native';

const HomeScreen: React.FC = ({ navigation }: any) => {
  
    const handleStartPress = () => {
        navigation.navigate('Tasks');
    };

    return (
    <View style={styles.container}>
            <Image source={require('./pic.jpg')} style={styles.image} resizeMode="cover"/>

        <View style={styles.contentContainer}>
            <Text style={styles.title}>Willkommen zu unserer Schnitzeljagd!</Text>
            <TouchableOpacity style={styles.button} onPress={handleStartPress}>
            <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.copyrightContainer}>
            <Text style={styles.copyrightText}>
                © 2024 Schnitzeljagd | Created by 4CHIF
            </Text>
        </View>
    </View>
  );
};

  

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FDD5CD',
},
image: {
width: '100%',
height: '40%',
marginTop: 150,
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
marginTop: "-30%",
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


export default HomeScreen;