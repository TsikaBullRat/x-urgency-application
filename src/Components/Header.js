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
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Avatar, Badge } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import { auth, firestore, LogOut } from '../firebase'

export default function Header({ Exit, Emergency, navigation }) {

  const [image, setImage] = useState(null)
  const [initial, setInitial] = useState('')

  useEffect(() => {
    auth.currentUser ? (
      setImage(auth.currentUser.photoURL),
      setInitial(auth.currentUser.displayName.substring(0, 1))
    ) : (
      auth.onAuthStateChanged(doc => {
        setImage(doc.photoURL)
        console.log(doc.displayName)
        setInitial(doc.displayName.substring(0, 1))
        console.log(auth.currentUser)
      })
    )
  }, [])

  return (

    <View style={styles.contain}>
      <View style={{
        width: 335,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
      }}>

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
    alignSelf:'flex-end'
  },

  header: {
    color: '#F96056',
    fontSize: 30,
    fontFamily: 'Felix Titling'
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
