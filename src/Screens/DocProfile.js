/**
    * @description      : 
    * @author           : MLab
    * @group            : 
    * @created          : 07/10/2021 - 10:05:53
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 07/10/2021
    * - Author          : MLab
    * - Modification    : 
**/
/**
    * @description      : 
    * @author           : MLab
    * @group            : 
    * @created          : 05/10/2021 - 14:22:53
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 05/10/2021
    * - Author          : MLab
    * - Modification    : 
**/
import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity, Button } from 'react-native';
import { Avatar, Badge } from 'react-native-elements';
import { Card } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { Video, AVPlaybackStatus } from 'expo-av';
import Stroke from '../images/stokeIc.png';
import strVid from '../images/stroke-vid.jpg';
import heartVid from '../images/heart-vid.jpg';
import epilepsyVid from '../images/epilepsy-vid.jpg';
import cpr_vid2 from '../images/cpr_vid2.jpg';
import drowning from '../images/drowning-vid.jpg';
import burn from '../images/burns-vid.jpg';
import choke from '../images/choking-vid.jpg';
import bleed from '../images/bleeding-vid.webp';
import heart from '../images/heartAttack.png';
import bleeding from '../images/bleed.png'
import epilepsy from '../images/Epilepsy.png'
import cpr from '../images/cprIcon.png'
import choking from '../images/choke.png'
import drown from '../images/drown.png'
import burns from '../images/burn.png'
import { auth } from '../firebase';
export default function MedicalHome({ navigation }) {
  const Logout = () => {
    auth.signOut()
    setDone(false)
  }
  const videos = [
    {
      id: 1,
      title: "Stroke",
      url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
    },
    {
      id: 2,
      title: "Heart-Attack",
      url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
    },
    {
      id: 3,
      title: "Epilepsy",
      url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
    },
    {
      id: 4,
      title: "CPR",
      url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
    },
    {
      id: 5,
      title: "Bleeding",
      url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
    },
    {
      id: 6,
      title: "Choking",
      url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
    },
    {
      id: 7,
      title: "Drowning",
      url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
    },
    {
      id: 8,
      title: "Burn",
      url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
    },
  ];

  const video = React.useRef('http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4');
  const [status, setStatus] = React.useState({});
  const link = 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'

  return (
    <View style={styles.contain}>
      {/*---------------------------Header--------------------------*/}

        <View style={{ marginTop: 50, marginLeft: 10 }}>
          <Avatar style={styles.avatar}
            source={{
              uri: 'https://randomuser.me/api/portraits/men/28.jpg',
            }}
    
          />
        </View>
     
    </View>
  )
}
const styles = StyleSheet.create({
  contain: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  header: {
    flexDirection: 'column',
    paddingTop: 50
  },

  avatar: {
    height: 150,
    width: 150,
    margingTop: 80,
    borderBottomWidth: 3,
    borderColor: 'turquoise',
    shadowColor: 'grey',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    elevation: 1,
  },

  menu2: {
    width: 355,
    height: 260,
    marginLeft: 10,
    marginTop: 50,
    borderRadius: 15,
    shadowColor: "#fff",
    shadowOffset: {
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

