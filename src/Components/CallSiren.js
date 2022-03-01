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

export default function CallSiren() {

  

  return (
    <View>
{/**---------Call Siren------------Call Siren---------Call Siren-------------------- */}
          <View style={{ width: 335, flexDirection: 'row', justifyContent:'space-between' }}>

            <Image
              source={require('../../img/siren.jpg')}
              style={{ width: 30, height: 35 }}
            />

            <View style={{ paddingVertical: 10 }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold', 
                  color: '#F47066'
                }}
              >
                Call
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold', 
                  color: '#F47066'
                }}
              >
                Now
              </Text>
            </View>

            <View style={{ paddingTop: 100 }}
            >
            <Image source={require("../images/logOut.png")} style={styles.logoutIMG} /> 
            </View>

          </View>
    </View>
  )
}

const styles = StyleSheet.create({

  logoutIMG: {
    width: 20,
    height: 20,
    top: -30,
    alignSelf:'flex-end'
  },

})
