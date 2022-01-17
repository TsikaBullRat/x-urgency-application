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

export default function Home({ navigation, setData }) {
  
  const [videos, setLoad] = useState(null),
    VideoScreen = (data) =>{
      navigation.navigate('PlayVideo')
      setData(data)
    },
    Logout = () => {
    auth.signOut()
  }
<<<<<<< HEAD
  //const [videos, setLoad] = useState(null);

 // LoadSet(setLoad)
  
  


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
       url: 'http://d23dyxelo5psv.cloudfront.net/big_buck_bunny.mp4'
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
   ]

  const video = React.useRef('http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4');
  const [status, setStatus] = useState({});
  // const link = 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
=======

  
  useEffect(()=>{
    LoadSet(setLoad)
  }, [])

  const [status, setStatus] = React.useState({});
>>>>>>> 31775eba9d486977bb629ed03e65537688786fb3
  return (
    <View style={styles.contain}>
      <Text onPress={Logout}>X</Text>
      <Header />
      <Menu />

      {/*---------------------- Video Scroll View--------------------*/}
      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
<<<<<<< HEAD

        <Card style={[styles.menu2, styles.shadowProp]}>
     
            {videos ? (videos.map(vid => (
              <TouchableOpacity onPress={() => { navigation.navigate('PlayVideo') }} key={vid.id}>
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
       
=======
        <Card style={styles.menu2}>
          <View>
            {videos?(videos.map(vid => (
                <TouchableOpacity onPress={()=>VideoScreen(vid)} key={vid.id}
                style={{
                  width: 315,
                  height: 180,
                  overflow: 'hidden',
                  borderRadius: 25,
                  marginTop: 20,
                  marginBottom: 20,
                  marginLeft: 20
                }}>
                  <Video
                    // ref={vid.url}
                    source={{ uri: vid.url }}
                    resizeMode="contain"
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                    
                  />
                  <h4>{vid.title}</h4>
                </TouchableOpacity>
            ))):(null)}
          </View>
>>>>>>> 31775eba9d486977bb629ed03e65537688786fb3
        </Card  >
      </ScrollView >
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff' 
  },
  header: {
    flexDirection: 'column',
    paddingTop: 5, 
    marginLeft: 15,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
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

  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2,     height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },

  menu: {
    flexDirection: 'row',
    width: 320, 
    marginTop: 20,  
    borderRadius: 15, 
  }, 
  menu2: {
    width: 320, 
    height: 520,    
    borderRadius: 15,
    shadowOffset: {}, 
    shadowOpacity: 0.8,
    shadowRadius: 3.84,
    elevation: 5,
  },
  categoryListText: {
    paddingLeft: 15, 
    fontSize: 17,
    fontWeight: 'bold'
  }
});

