import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, } from 'react-native';
import { Video, } from 'expo-av';
import { Card } from 'react-native-paper';
import { auth, LoadSet } from '../firebase';
import Header from '../Components/Header'
import Menu from '../Components/Menu'

export default function Home({ navigation }) {
  const Logout = () => {
    auth.signOut()
  }
  const [videos, setLoad] = useState(null);

  useEffect(() => {
    LoadSet(setLoad)
  }, [])

  //   useEffect(()=>{

  //     if(videos){
  //         for(var i = 0; i<videos.length; i++){
  //             console.log(require(videos[0].url))
  //         }
  //     }
  //   }, [videos])

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
            {videos ? (videos.map(vid => (
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
                  full
                />
                <h4>{vid.title}</h4>
              </TouchableOpacity>
            ))) : (null)}
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

