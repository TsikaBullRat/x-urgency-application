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
 import React, { useState } from "react";
 import {
     Image,
     StyleSheet,
     Picker,
     Text,
     TouchableOpacity,
     View,
     TextInput,
 } from "react-native";
 
 import { Card } from "react-native-paper";
 import { Upload } from "../../firebase";
 import Icon from 'react-native-vector-icons/MaterialIcons';
 import * as ImagePicker from 'expo-image-picker';
 import * as Sharing from 'expo-sharing';
 import uploadToAnonymousFilesAsync from 'anonymous-files';

 
 export default function Clone({ navigation, Log }) {
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
         Run = () =>{
             openImagePickerAsync();
             selectedImage?(
               Upload(selectedImage.localUri, title, description, selectedValue, Log ),
               navigation.goBack()
               ):null
             
         }
 
     return (
         <View style={styles.container}>
             <Text style={styles.header}>Upload or create your first aid video here</Text>
 
            
                 <View style={{ flexDirection: "row" }}>
                     <TextInput
                         style={[styles.txtField, styles.shadowProp]}
                         name="username"
                         placeholder="Title"
                         onChangeText={text=>setTitle(text)}
                     />
                 </View>
            
 
             <Picker
                 selectedValue={selectedValue}
                 style={[styles.picker, styles.shadowProp]}
                 onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
             >
                 <Picker.Item label="Stroke" value="stroke" />
                 <Picker.Item label="Heart-Attack" value="heart-attack" />
                 <Picker.Item label="Epilepsy" value="epilepsy" />
                 <Picker.Item label="CPR" value="cpr" />
                 <Picker.Item label="Drowning" value="drowning" />
                 <Picker.Item label="Choking" value="choking" />
                 <Picker.Item label="Java" value="java" />
                 <Picker.Item label="Burns" value="burns" />
             </Picker>
 
            
                 <View style={{ flexDirection: "row" }}>
                     <TextInput
                         style={[styles.txtField, styles.shadowProp]}
                         name="password"
                         placeholder="Description"
                         onChangeText={text=>setDescpription(text)}
                     />
                 </View>

                 
          <View style={{ flexDirection: 'row' }}>
            <Card style={[styles.txtUser, styles.shadowProp]}>
              <View>
              <Text style={{fontSize: 16, paddingTop: -300, marginLeft: -20, marginTop: 30, color: 'lightgray'}}>Upload Video Here!</Text>
              </View>
               <Icon style={styles.icon}name="slideshow" color="#F47066" size={40} />
              </Card>
          </View>
   












          
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
      backgroundColor: "#fff",
      alignItems: "center",
      height: 800
    },
    header: {
      paddingTop: 60,
      fontSize: 25,
      textAlign: "center",
      color: "#F47066",
      fontWeight: "bold",
    },
    txtField:{
       width: 330,
       height: 60,
       borderRadius: 10,
       outline: 'none',
       backgroundColor: 'white',
       paddingLeft: 20, 
       color: "lightgrey",
       marginTop: 50,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
      txtUser: {
        width: 330,
        height: 200,
        borderRadius: 10,
        outline: 'none',
        backgroundColor: 'white',
        paddingLeft: 100, 
        marginTop: 60,
      },
      icon:{
        marginTop: 30,
        marginLeft: 40,
      },
    paragraph: {
      marginBottom: 350, 
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color:'#F96056'
    },
    shadowProp: {
      shadowColor: '#171717',
      shadowOffset: { width: -2,     height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 10,
    },
    input1:{
      width: 280,
      height: 40,
      borderRadius: 10,
      marginTop: -280,
      marginLeft: 17,
      padding: 20,
      fontSize: 16,
      borderColor: '#F96056', 
      borderWidth: 1,
      outline: 'none'
    },
    input2:{
      width: 280,
      height: 40,
      borderRadius: 10,
      marginTop: -220,
      marginLeft: 17,
      padding: 20,
      fontSize: 16,
      borderColor: '#F96056',
      borderWidth: 1,
      outline: 'none'
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
        marginTop: -55,
        marginLeft: 250,
      },
      picker:{
        marginTop: 40,
        width: 330,
        height: 60,
        borderRadius: 20,
      },
      button: {
        backgroundColor: '#F47066',
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
  });
