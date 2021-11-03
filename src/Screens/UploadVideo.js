/**
    * @description      : 
    * @author           : TLeeuw
    * @group            : 
    * @created          : 03/11/2021 - 09:44:00
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 03/11/2021
    * - Author          : TLeeuw
    * - Modification    : 
**/
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import {Card} from 'react-native-paper'
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
          <Text style={styles.buttonText}>Upload Video</Text>
        </TouchableOpacity>
      </View>
    );
  }
 
  return (
    <View style={styles.container}>

      <View style={{marginTop: 50}}>

      <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <TextInput style={styles.txtField}
              name='username' placeholder='Title' 
            />
          </View>
        </Card>

        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <TextInput style={styles.txtField}
              name='password' placeholder='Category'        
            />
          </View>
        </Card>

        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <TextInput style={styles.txtField}
              name='password' placeholder= 'Description'
            />
          </View>
        </Card> 
      </View>
      
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

  txtField: {
    width: 285,
    height: 40,
    borderRadius: 10,
    outline: 'none',
    backgroundColor: 'lightgrey',
    paddingLeft: 10,
  },

  txtCards: {
    backgroundColor: 'lightgrey',
    width: 285,
    height: 40,
    borderRadius: 10,
    marginLeft: 2,
    marginTop: 15
  },

});
