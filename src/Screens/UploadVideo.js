import React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import {Card} from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import uploadToAnonymousFilesAsync from 'anonymous-files';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function UploadVideo() {
  
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
    if (Platform.OS === 'web') {
      let remoteUri = await uploadToAnonymousFilesAsync(pickerResult.uri);
      setSelectedImage({ localUri: pickerResult.uri, remoteUri });
    } else {
      setSelectedImage({ localUri: pickerResult.uri, remoteUri: 'https://moon.jpg' });
    }
  }; 
  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`The image is available for sharing at: ${selectedImage.remoteUri}`);
      return;
    }
    Sharing.shareAsync(selectedImage.remoteUri || selectedImage.localUri);
  };
  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
        <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
          <Text style={styles.buttonText}>Share this photo</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (


    <View style={styles.container}>
       <View>
         <Text style={{marginTop: -240, fontSize: 20, color: "000000", fontWeight: "bold", marginLeft: -10}}>Upload Or Create
          <br/>Your First Aid Video Here
         </Text>
      </View>
         
     
      <View >
        <TextInput style={[styles.title, styles.shadowProp]}
          name='username' placeholder='Title'
          />

      </View>

        <View>
          <TextInput style={[styles.description, styles.shadowProp]}
            name='username' placeholder='Description'
          />

         </View>
       <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
          
     
            <Card style={[styles.txtUser, styles.shadowProp]}>
              <View>
              <Text style={{fontSize: 16, paddingTop: -300, marginLeft: -20, marginTop: 30, color: 'lightgray'}}>Upload Video Here!</Text>
              </View>
               <Icon style={styles.icon}name="slideshow" color="#f47066" size={40} />
              </Card>

          </View>
        </Card>
      <Text style={styles.instructions}>
        
      </Text>
      <TouchableOpacity onPress={openImagePickerAsync} style={[styles.button, styles.shadowProp]}>
        <Text style={styles.buttonText}>Upload Video</Text>
      </TouchableOpacity>

   
   <TouchableOpacity onPress={openImagePickerAsync}>
<View style={[styles.iconContainer, styles.shadowProp]}>
<Icon name="camera"color='white' size={30}/>
 </View>
</TouchableOpacity>
    </View>

    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon:{
    marginTop: 30,
    marginLeft: 40,
  },

  title: {
    width: 300,
    height: 40,
    borderRadius: 10,
    outline: 'none',
    backgroundColor: 'white',
    paddingLeft: 20, 
    marginTop: -140,
    color: "lightgray"
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },

  
  description: {
    width: 300,
    height: 40,
    borderRadius: 10,
    outline: 'none',
    backgroundColor: 'white',
    paddingLeft: 20, 
    marginTop: -70,

  },


    txtUser: {
    width: 300,
    height: 200,
    borderRadius: 10,
    outline: 'none',
    backgroundColor: 'white',
    paddingLeft: 100, 
  }, 
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#f47066',
    padding: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "white",
    marginRight: 150,
    height: 50,
    marginTop: 40,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    marginTop: -5,
  },

  iconContainer: {
  width: 60,
  height: 60,
  backgroundColor: '#f47066',
  borderRadius: 60,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: 'white',
  borderWidth: 3,
  marginTop: -55,
  marginLeft: 250,
},

  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});