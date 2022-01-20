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
      <View style={{width:295, alignItems:'center'}}
            key={vid.id}
      >
      <Card
        style={{ 
          width: 295,
          height: 195, 
          backgroundColor: '#FAFAFA'
        }}>
                  <Video
                    ref={ref}
                    source={{ uri: vid.url }}
                    resizeMode="contain"
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                    style={{
            width: 280,
            height: 200,
            marginTop: 5,
            alignSelf: 'center',
          }}
                  />
                  <View style={{flexDirection: 'row', width: 295, 
marginVertical: -40,justifyContent:'space-around', alignItems:'center'}}>
<TouchableOpacity
            onPress={() => {
              navigation.navigate('VideoScreen');
            }}>
<<<<<<< HEAD
           {/* <Image
              style={{ borderRadius: 50 }}
              source={require('../images/btnPlay.jpg')}
            />*/}
          </TouchableOpacity>

          {/*<Image 
            style={{ width: 220, marginVertical: 5}} 
            source={require('../images/timeBar.png')}
          />*/}
=======
         
          </TouchableOpacity>

        
>>>>>>> 6d34ea741c7641e9392bd58b573b1ddb9726df20
        </View> 
        </Card>

              <View style={{ width: 295 }}>
                <Text style={styles.tag}>{vid.title}</Text>

                <View style={{ flexDirection: 'row', maxWidth: 250 }}>
                  <Text style={styles.tag}>{vid.owner}</Text>
                </View>
              </View>
                
      </View>
            ))):(null)
  )
}

 const ItemSeperatorView = () => {
    return (
      <View
        style={{ height: 0.5, width: '100%', backgroundColor: '#c8c8c8' }}
      />
    );
  };

export default function Home({ navigation, route, setData }) {
  
  const [videos, setLoad] = useState(null),
    ref=useRef(null),
    VideoScreen = (data) =>{
      setData(data)
      navigation.navigate('PlayVideo')
    },
    Logout = () => {
    auth.signOut()
  }

  
  useEffect(()=>{
    LoadSet(setLoad)
    console.log(videos)
  }, [])

  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Text onPress={Logout}>X</Text>
      <Header />
      <Menu list={videos} setVids={setLoad}/>
      {/*---------------------- Video Scroll View--------------------*/}
      <ScrollView style={{height:555}} 
      vertical={true} showsVerticalScrollIndicator={false}>
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
    fontWeight: 'medium',
    fontSize: 18,
    color: '#F96056',
    paddingTop: 20, 
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
  },

  tag: {
    fontSize: 16, 
    fontWeight: 'bold'
  }
});

