import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Video from 'react-native-video';

const Experiencia = () => {
    let videoUri = '../assets/Video.mp4';
    return (
        <View style={styles.videoContainer}>
            <Video
                source={require(videoUri)}
                style={styles.video}
                resizeMode="contain"
                controls={true}
                fullscreen={true}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    videoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    video: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default Experiencia;
