import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Platform } from 'react-native';


const HomeScreen: React.FC = ({ navigation }: any) => {
  
    const handleStartPress = () => {
        navigation.navigate('Tasks');
    };

    return (
    <View style={styles.container}>
            <Image source={require('../../pictures/pic.jpg')} style={styles.image} resizeMode="cover"/>

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


export default HomeScreen;