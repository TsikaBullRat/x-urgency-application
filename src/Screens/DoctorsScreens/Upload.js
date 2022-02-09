/**
 * @description      :
 * @author           : TLeeuw
 * @group            :
 * @created          : 08/11/2021 - 10:11:41
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 08/11/2021
 * - Author          : TLeeuw
 * - Modification    :
 **/

import React, { useState, useRef } from "react";
import { StyleSheet, Picker, Text, TouchableOpacity, View, TextInput, Pressable, } from "react-native";
import { Card } from "react-native-paper";
import { UploadVideo } from "../../firebase";
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker';
import { Video } from "expo-av";

export default function Upload({ navigation, Log }) {

  const ref = useRef(null);
  const [status, setStatus] = useState({});
  const [selectedValue, setSelectedValue] = useState("stroke"),
    [title, setTitle] = useState(),
    [description, setDescpription] = useState(),
    [selectedImage, setSelectedImage] = useState(null),
    openImagePickerAsync = async () => {
      let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

      if (permissionResult.granted === false) {
        alert('Permission to access camera roll is required!');
        return;
      }

      let pickerResult = await ImagePicker.launchImageLibraryAsync({ mediaTypes: 'Videos' });
      if (pickerResult.cancelled === true) {
        return;
      }

      setSelectedImage({ localUri: pickerResult.uri });

    },
    Run = () => {
      selectedImage ? (
        UploadVideo(selectedImage.localUri, title, description, selectedValue, Log),
        navigation.goBack()
      ) : null

    },
    openCamera = async () => {
     let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: true
      });
     if (!result.cancelled) {
        setSelectedImage({ localUri: result.uri })
      }
   }

  return (

    <View style={styles.container}>

      <Text style={styles.header}>Upload Or Create Your First Aid Video Here</Text>

      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={[styles.txtField, styles.shadowProp]}
          name="username"
          placeholder="Title"
          onChangeText={text => setTitle(text)} />
      </View>

      <Picker
        selectedValue={selectedValue}
        style={[styles.picker, styles.shadowProp]}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} >
        <Picker.Item label="Stroke" value="Stroke" />
        <Picker.Item label="Heart-Attack" value="Heart-Attack" />
        <Picker.Item label="Epilepsy" value="Epilepsy" />
        <Picker.Item label="CPR" value="CPR" />
        <Picker.Item label="Drowning" value="Drowning" />
        <Picker.Item label="Choking" value="Choking" />
        <Picker.Item label="Java" value="Java" />
        <Picker.Item label="Burns" value="Burns" />
      </Picker>

      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={[styles.txtField2, styles.shadowProp]}
          name="password"
          placeholder="Description"
          onChangeText={text => setDescpription(text)} />
      </View>

      {selectedImage ? (
        <Video ref={ref} source={{ uri: selectedImage.localUri }} resizeMode="stretch" isLooping onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          style={{
            width: "100%",
            height: 165,
            marginTop: 5,
            alignSelf: "center",
          }} />

      ) : (

        <Pressable onPress={openImagePickerAsync} style={{ flexDirection: 'row' }}>
          <Card style={styles.txtUser}>
            <View>
              <Text style={{ fontSize: 16, paddingTop: -300, marginLeft: -20, marginTop: 30, color: 'lightgray' }}>Upload Video Here!</Text>
            </View>
            <Icon style={styles.icon} name="slideshow" color="#F47066" size={40} />
          </Card>
        </Pressable>
      )}

      <TouchableOpacity onPress={() => { navigation.navigate('UploadVideo') }}>
        <View style={styles.iconContainer}>
          <Icon name="camera" color='white' size={30} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={openCamera} style={styles.button}>
        <Text style={styles.buttonText}>Upload Video</Text>
      </TouchableOpacity>

    </View>
  );
}






const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    height: 800
  },

  header: {
    paddingTop: 100,
    fontSize: 25,
    textAlign: "center",
    color: "#F47066",
    fontWeight: "bold",
    marginBottom: 30,
  },

  txtField: {
    width: 330,
    height: 60,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingLeft: 20,
    borderWidth: 1,
    color: "lightgrey",
    marginBottom: 20,
    fontSize: 16,
  },

  txtField2: {
    width: 330,
    height: 60,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingLeft: 20,
    borderWidth: 1,
    color: "lightgrey",
    marginTop: 10,
    fontSize: 16,
  },

  txtUser: {
    width: 330,
    height: 200,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingLeft: 100,
    marginTop: 10,
    borderWidth: 1,
  },

  icon: {
    marginTop: 30,
    marginLeft: 40,
  },

  paragraph: {
    marginBottom: 350,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#F96056'
  },

  input1: {
    width: 280,
    height: 40,
    borderRadius: 10,
    marginTop: -280,
    marginLeft: 17,
    padding: 20,
    fontSize: 16,
    borderColor: '#F96056',
    borderWidth: 1,
    //outlineColor: 'transparent',
  },

  input2: {
    width: 280,
    height: 40,
    borderRadius: 10,
    marginTop: -220,
    marginLeft: 17,
    padding: 20,
    fontSize: 16,
    borderColor: '#F96056',
    borderWidth: 1,
    //outlineColor: 'transparent',
  },

  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#F47066',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 3,
    marginTop: 40,
    marginLeft: -8,
  },

  picker: {
    borderWidth: 1,
    marginTop: -10,
    width: 330,
    height: 70,
    borderRadius: 10,
    color: "#000",
    paddingLeft: 20,
  },

  button: {
    backgroundColor: '#F47066',
    padding: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "white",
    marginRight: 20,
    height: 50,
    marginTop: 40,
  },

  buttonText: {
    fontSize: 20,
    color: '#fff',
    marginTop: -5,
  },

});
