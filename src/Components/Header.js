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
import { Text, View, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';
import { Avatar, Badge } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import { auth, firestore, LogOut } from '../firebase'

export default function Header({ done, navigation }) {

  const [image, setImage] = useState('')
  const [initial, setInitial] = useState('')
  const getProfile = async () => {
    let name
    setImage(auth.currentUser.photoURL)
    name = auth.currentUser.displayName
    setInitial(name.substring(0, 1))
  }

  useEffect(() => { getProfile() }, [])

  return (

    <View style={styles.contain}>

      <View style={{
        width: 370,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>

        <TouchableOpacity onPress={() => { navigation.navigate('EmergencyContacts') }}>

          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../../img/siren.jpg')}
              style={{ width: 30, height: 30 }} />

            <View style={{ paddingHorizontal: 10 }}>
              <Text>Call</Text>
              <Text>Now</Text>
            </View>
          </View>
        </TouchableOpacity>

        <Pressable onPress={LogOut} >

          <Image source={require("../images/logOut.png")} style={styles.logoutIMG} />

        </Pressable>
      </View>

      {/*---------------------------Header--------------------------*/}

      <View style={{
        flexDirection: 'row',
        width: 380,
        marginLeft: -12,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>

        <View>

          <Text style={styles.header}> WHAT'S YOUR</Text>
          <Text style={styles.header}> EMERGENCY ?</Text>

        </View>

        <View style={styles.avatar}> {image ? (
          <Avatar rounded source={{ uri: image, }} size="medium" />) : (
          <View style={styles.temp}>
            <Text style={styles.temp_text}> {initial} </Text>
          </View>
        )}

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
  },

  header: {
    justifyContent: 'flex-start',
    color: '#F96056',
    fontSize: 30,
  },

  avatar: {
    marginBottom: 80,
    paddingRight: 40,

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
  }

})
