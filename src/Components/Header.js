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
import { color } from 'react-native-elements/dist/helpers';
import { auth, firestore, LogOut } from '../firebase'
import {Feather} from '@expo/vector-icons';

export default function Header({ Exit, Emergency, navigation }) {

  

  return (

    <View style={styles.contain}>

      {/*---------------------------Header--------------------------*/}
{/**---------Call Siren------------Call Siren---------Call Siren-------------------- */}
      <View style={{ marginVertical: 15 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('EmergencyContacts')}
        >
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('../../img/siren.jpg')}
              style={{ width: 30, height: 35 }}
            />

            <View style={{ paddingVertical: 10 }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  fontFamily: 'Arial',
                  color: '#F47066'
                }}
              >
                Call
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  fontFamily: 'Arial',
                  color: '#F47066'
                }}
              >
                Now
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        
      </View>

      

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

        <View style={{ top: -20 }}>
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

  

})
