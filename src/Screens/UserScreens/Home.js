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

  
  useEffect(()=>{
    LoadSet(setLoad)
  }, [])

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

