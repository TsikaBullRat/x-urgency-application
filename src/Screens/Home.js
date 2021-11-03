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
import { Video, AVPlaybackStatus } from 'expo-av';
import { Card } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { auth } from '../firebase';

import Header from '../Components/Header'
import Menu from '../Components/Menu'

export default function Home({ navigation, setDone }) {
  const Logout = () => {
    auth.signOut()
  }

  const videos = [
    {
      id: 1,
      title: "Stroke",
      url: 'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4'
    },

    {
      id: 2,
      title: "Heart-Attack",
      url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
    },

    {
      id: 3,
      title: "Epilepsy",
      url: 'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4'
    },

    {
      id: 4,
      title: "CPR",
      url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
    },

    {
      id: 5,
      title: "Bleeding",
      url: 'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4'
    },

    {
      id: 6,
      title: "Choking",
      url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
    },

    {
      id: 7,
      title: "Drowning",
      url: 'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4'
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

      <Header />

      <Menu />

      {/*---------------------- Video Scroll View--------------------*/}
      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
        <Card style={styles.menu2}>
          <View >
            {videos.map(vid => (
              <ol >
                <TouchableOpacity onPress={() => {navigation.navigate('PlayVideo') }}>
                  <Video
                    ref={video}
                    source={{ uri: vid.url }}
                    resizeMode="contain"
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                    style={{
                      width: 315
                    }}
                  />
                  <h4>{vid.title}</h4>
                </TouchableOpacity>
              </ol>
            ))}
          </View>
        </Card  >
      </ScrollView >
   
    </View>
  )
}

const styles = StyleSheet.create({
  contain: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'column',
    paddingTop: 50
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
    margingTop: 80,
    borderBottomWidth: 3,
    borderColor: 'turquoise',
    shadowColor: 'grey',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    elevation: 1,
  },
  txtCards: {
    backgroundColor: 'lightgray',
    opacity: 0.8,
    width: 320,
    height: 50,
    borderRadius: 10,
    marginLeft: 28,
    marginTop: 25,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: 'turquoise',
    shadowColor: 'skyblue',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 1,
  },
  menu: {
    width: 355,
    left: 10,
    marginTop: 20,
    borderRadius: 15,
  },
  strokeMenu: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginTop: 10,
    color: '#fff',
    marginLeft: 3,
    marginTop: 10
  },
  heartMenu: {
    height: 35,
    width: 35,
    borderRadius: 15,
    marginTop: 5,
    marginLeft: 12
  },
  epilepsyMenu: {
    height: 50,
    width: 50,
    borderRadius: 15,
    marginLeft: 6
  },
  cprMenu: {
    height: 35,
    width: 35,
    borderRadius: 15,
    marginLeft: 5,
    marginTop: 8
  },
  bloodMenu: {
    height: 35,
    width: 35,
    borderRadius: 15,
    marginTop: 8
  },
  conImg: {
    height: 35,
    width: 35,
    borderRadius: 15,
    marginLeft: 15,
    marginTop: 8
  },
  drown: {
    height: 40,
    width: 40,
    borderRadius: 15,
    marginLeft: 15,
    marginTop: 8,
  },
  burn: {
    height: 35,
    width: 35,
    borderRadius: 15,
    marginLeft: 5,
    marginTop: 8
  },
  menu2: {
    width: 315,
    height: 560,
    marginTop: 20,
    borderRadius: 15,
    alignItems: 'center'
  },
});

