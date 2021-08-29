import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

import { colors } from '../constants/colors';
import { Header } from './Header';
import { Photos } from './Photos';

export const CameraScreen = () => {
  const [snapshot, setSnapshot] = useState('');
  const [photos, setPhotos] = useState([]);

  useEffect(() => {}, [photos]);

  const takePicture = async function (camera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    setSnapshot(data.uri);
    photos.push({ uri: data.uri, id: photos.length });
  };

  return (
    <View style={styles.container}>
      <Header title={'Camera'} />
      <View style={styles.contentContainer}>
        {!snapshot ? <Text style={styles.text}>no photos</Text> : <Photos photos={photos} />}
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          captureAudio={false}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        >
          {({ camera }) => (
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => takePicture(camera)} style={styles.capture}>
                <Text style={styles.camera}>snap</Text>
              </TouchableOpacity>
            </View>
          )}
        </RNCamera>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DARK_GRAY,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.BRIGHT_GRAY,
    fontSize: 30,
    margin: 7,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 50,
    alignSelf: 'center',
    margin: 20,
    width: 80,
    height: 80,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    fontSize: 20,
  },
});
