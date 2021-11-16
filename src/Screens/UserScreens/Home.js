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
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, } from 'react-native';
import { Video, } from 'expo-av';
import { Card } from 'react-native-paper';
import { auth, LoadSet } from '../../firebase';
import Header from '../../Components/Header'
import Menu from '../../Components/Menu'

export default function Home({ navigation }) {
  const Logout = () => {
    auth.signOut()
  }
  const [videos, setLoad] = useState(null);

<<<<<<< HEAD
  useEffect(()=>{
    LoadSet(setLoad)
  }, [])

  useEffect(()=>{
    console.log(videos)
  }, [])
  
=======
  LoadSet(setLoad)
  // useEffect(()=>{


  // const videos = [
  //   {
  //     id: 1,
  //     title: "Stroke",
  //     url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
  //   },
  //   {
  //     id: 2,
  //     title: "Heart-Attack",
  //     url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
  //   },
  //   {
  //     id: 3,
  //     title: "Epilepsy",
  //     url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
  //   },
  //   {
  //     id: 4,
  //     title: "CPR",
  //     url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
  //   },
  //   {
  //     id: 5,
  //     title: "Bleeding",
  //     url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
  //   },
  //   {
  //     id: 6,
  //     title: "Choking",
  //     url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
  //   },
  //   {
  //     id: 7,
  //     title: "Drowning",
  //     url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
  //   },
  //   {
  //     id: 8,
  //     title: "Burn",
  //     url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
  //   },
  // ];
  const video = React.useRef('http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4');
>>>>>>> 9647312d5ffd3bb0eee41dfdc23df6dc5c839840
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.contain}>
      <Text onPress={Logout}>X</Text>
      <Header />
      <Menu />
      {/*---------------------- Video Scroll View--------------------*/}
      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
        <Card style={styles.menu2}>
          <View>
<<<<<<< HEAD
            {videos?(videos.map(vid => (
                <TouchableOpacity onPress={() => { navigation.navigate('Strokes') }} key={vid.id}>
                  <Video
                    // ref={vid.url}
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
            ))):(null)}
=======
            {videos ? (videos.map(vid => (
              <TouchableOpacity onPress={() => { navigation.navigate('Strokes') }} key={vid.id}>
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
            ))) : (null)}
>>>>>>> 9647312d5ffd3bb0eee41dfdc23df6dc5c839840
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
    marginTop: 80,
    borderBottomWidth: 3,
    borderColor: 'turquoise',
    shadowColor: 'grey',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    elevation: 1,
  },
  txtCards: {
    backgroundColor: 'lightgrey',
    opacity: 0.8,
    width: 320,
    height: 50,
    borderRadius: 10,
    marginLeft: 28,
    marginTop: 25,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: 'turquoise',
    shadowColor: 'blue',
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

