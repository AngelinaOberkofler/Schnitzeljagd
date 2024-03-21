import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { launchImageLibrary, ImageLibraryOptions, ImagePickerResponse } from 'react-native-image-picker';
import styles from './HomeScreenStyles';

const HomeScreen: React.FC = ({ navigation }: any) => {
    const [avatarSource, setAvatarSource] = useState<any>(require('../../pictures/defaultpfp.jpeg'));
    const [playerName, setPlayerName] = useState('');

    const handleStartPress = () => {
        navigation.navigate('Tasks', { playerName, avatarSource });
    };

    const handleAvatarPress = () => {
        const options: ImageLibraryOptions = {
            mediaType: 'photo',
        };

        launchImageLibrary(options, (response: ImagePickerResponse) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorMessage) {
                console.log('ImagePicker Error: ', response.errorMessage);
            } else if (response.assets && response.assets.length > 0) {
                const source = { uri: response.assets[0].uri };
                setAvatarSource(source);
            }
        });
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../../pictures/back.jpg')}
                style={styles.backgroundImage}
                resizeMode="cover"
            />
            <View style={{ width: '100%', alignItems: 'center', marginTop: 20 }}>
                <Text style={styles.title}>Willkommen zu unserer Schnitzeljagd!</Text>
            </View>
            <Text style={[styles.subtitle, { color: '#FFF' }]}>Avatar einstellen</Text>
            <TouchableOpacity onPress={handleAvatarPress}>
                <Image source={avatarSource} style={styles.avatar} resizeMode="cover" />
            </TouchableOpacity>
            <TextInput
                style={[styles.input, { color: '#FFF', borderColor: '#FFF' }]}
                placeholder="Spieler Name"
                placeholderTextColor="#FFF"
                onChangeText={setPlayerName}
                value={playerName}
            />
            <TouchableOpacity style={styles.button} onPress={handleStartPress}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.aboutButton}>
                <Text style={styles.aboutButtonText}>About Us</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;
