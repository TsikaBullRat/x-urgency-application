/**
    * @description      : 
    * @author           : TLeeuw
    * @group            : 
    * @created          : 03/11/2021 - 12:02:33
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 03/11/2021
    * - Author          : TLeeuw
    * - Modification    : 
**/
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Avatar, Badge } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import { auth, firestore } from '../firebase'

export default function Header({ Exit, Emergency }) {

  const [image, setImage] = useState()
  const [initial, setInitial] = useState()
  const getProfile = async () =>{
    let name
    setImage(auth.currentUser.photoURL)
    // name = await firestore.collection("Users").doc(auth.currentUser.uid).get().then(()=>doc.data().username)
    name = auth.currentUser.displayName
    setInitial(name.substring(0,1))
  }
  
  useEffect(()=>{
    getProfile()
  }, [])

  return (

    <View style={styles.contain}>
      <View> 
             <Image
               source={require("../images/logOut.png")}
               style={styles.logoutIMG}
             />
      </View>
      {/*---------------------------Header--------------------------*/}

      <View style={{
        flexDirection: 'row',
        width: 340,
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>

        <View style={{ top: -20 }}>
          <Text style={styles.header}> WHAT'S YOUR</Text>
          <Text style={styles.header}> EMERGENCY ?</Text>
        </View>

        <View style={styles.avatar}>
          {image ? (
            <View>
              <Avatar rounded source={{ uri: image, }} size="medium" />
            </View>
          ) : (
            <View style={styles.temp}>
              <Text style={styles.temp_text}> {initial} </Text>
            </View>
          )}
        </View>

        <View style={{ top: -40 }}>
          <TouchableOpacity onPress={Exit} >
            <Image source={require("../images/logOut.png")} style={styles.logoutIMG} />
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  contain: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },

  logoutIMG: {
    width: 20,
    height: 20,
    top: -30,
    left: 170
  },

  header: {
    color: '#F96056',
    fontSize: 30,
    fontFamily:'Felix Titling'
  },

  avatar: {
    top: -60,
    left: -3
  },

  temp: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginTop: 80,
    backgroundColor: 'turquoise',
    textAlign: 'center',
    justifyContent: 'center'
  },

  temp_text: {
    fontSize: 40,
    color: '#fff',
    fontFamily: 'Roboto'
  }

})
