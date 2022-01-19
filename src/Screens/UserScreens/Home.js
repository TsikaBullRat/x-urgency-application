import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, } from 'react-native';
import { Video, } from 'expo-av';
import { Card } from 'react-native-paper';
import { auth, LoadSet } from '../../firebase';
import Header from '../../Components/Header'
import Menu from '../../Components/Menu'

const VideoList = ({videos, VideoScreen}) =>{

  const [status, setStatus] = useState({});
  const ref=useRef(null);

  return(
    videos?(videos.map(vid => (
      <View key={vid.id}>
                <TouchableOpacity onPress={()=>VideoScreen(vid)} 
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
                    ref={ref}
                    source={{ uri: vid.url }}
                    resizeMode="contain"
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                  />
                  
                </TouchableOpacity>
                <Text style={styles.tag}>{vid.title}</Text>
                <Text style={styles.tag}>{vid.owner}</Text>
                <Text style={styles.tag}>Views: {vid.views}</Text>
                <Text style={styles.tag}>{vid.stamp}</Text>
                </View>
            ))):(null)
  )
}
export default function Home({ navigation, route, setData }) {
  
  const [videos, setLoad] = useState(null),
    VideoScreen = (data) =>{
      navigation.navigate('PlayVideo', {data})
    },
    Logout = () => {
    auth.signOut()
  }

  
  useEffect(()=>{
    LoadSet(setLoad)
    return ()=>LoadSet(setLoad)
  }, [])
  
  return (
    <View style={styles.contain}>
      <Text onPress={Logout}>X</Text>
      <Header />
      <Menu list={videos} setVids={setLoad}/>
      {/*---------------------- Video Scroll View--------------------*/}
      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
        <Card style={styles.menu2}>
          <View>
          <VideoList videos={videos} VideoScreen={VideoScreen}/>
          </View>
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
  },
  tag:{
    fontSize: 15,
    top: 30
  }
});

