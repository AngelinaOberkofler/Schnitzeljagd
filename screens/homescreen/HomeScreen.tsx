import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Platform } from 'react-native';
import styles from './HomeScreenStyles';
import LinearGradient from 'react-native-linear-gradient';
import { setStatusBarBackgroundColor } from 'expo-status-bar';


const HomeScreen: React.FC = ({ navigation }: any) => {
  
    const handleStartPress = () => {
        navigation.navigate('Tasks');
    };

    return (
    //<LinearGradient colors={['#0070a2', '#014b7c']}

    <View style={styles.container}>

            <Image source={require('../../pictures/logo.jpg')} style={styles.image} resizeMode="cover"/>

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