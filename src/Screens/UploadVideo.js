import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

export default function App({navigation}) {
  let [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri }); 
  };

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
        <TouchableOpacity onPress={() => {navigation.navigate('MedicalHome')}} style={styles.button}>
          <Text style={styles.buttonText}>Share this video</Text>
        </TouchableOpacity>
      </View>
    );
  }
 
  return (
    <View style={styles.container}>
      
      <Text style={styles.instructions}>
        To share a video from your phone/PC , just press the button below!
      </Text>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a video</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 305,
    height: 159,
    marginTop: 450,
  },

  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginTop: 20
  },

  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
    marginTop: 20
  },

  buttonText: {
    fontSize: 20,
    color: '#fff',
  },

  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginTop: 20
  },
});
