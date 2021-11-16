import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import { Upload } from '../firebase'

export default function Clone({ navigation }) {

    const [image, setImage] = useState(),
        [upload, setUpload] = useState(false),
        [transferred, setTransferred] = useState(),
        selectImage = () => {
            ImagePicker.launchImageLibrary({
                mediaType: 'photo',
                maxWidth: 2000,
                maxHeight: 2000
            }, response => {
                if(response.didCancel)console.log("User canceled")
                else if(response.errorMessage)console.log(response.errorMessage)
                else{
                    console.log(response.assets)
                }
            })
        }



    //   if (selectedImage !== null) {
    //     return (
    //       <View style={styles.container}>
    //         <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
    //         <TouchableOpacity onPress={() => {Upload(selectedImage)}} style={styles.button}>
    //           <Text style={styles.buttonText}>Share this photo</Text>
    //         </TouchableOpacity>
    //       </View>
    //     );
    //   }

    return (
        <View style={styles.container}>
            <Text style={styles.instructions}>
                To upload a Video from your phone, just press the button below!
            </Text>
            <TouchableOpacity onPress={selectImage} style={styles.button}>
                <Text style={styles.buttonText}>Pick a photo</Text>
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
    logo: {
        width: 305,
        height: 159,
        marginBottom: 20,
    },
    instructions: {
        color: '#888',
        fontSize: 18,
        marginHorizontal: 15,
        marginTop: 500,
    },
    button: {
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 5,
        marginTop: 30
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
    thumbnail: {
        width: 300,
        height: 300,
        marginTop: 550,
        resizeMode: 'contain',
    },
});
