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

export default function Home({ navigation, setDone }) {
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
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const link = 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'

  return (
    <View style={styles.contain}>
      {/*---------------------------Header--------------------------*/}
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.header}>
          <Text style={{ fontSize: 36, paddingLeft: 30 }}>What's your
          </Text>
          <Text style={{ fontSize: 36, paddingLeft: 30 }}>EMERGENCY</Text>
        </View>
        <View style={{ marginTop: 50, marginLeft: 30 }}>
          <Avatar
            rounded
            source={{
              uri: 'https://randomuser.me/api/portraits/men/41.jpg',
            }}
            size="large"
          />
          <Badge
            status="success"
            containerStyle={{ position: 'absolute', top: -4, right: -4 }}
          />
        </View>
      </View>
      {/*----------------------Search TextField----------------------*/}
      <Card style={styles.txtCards}>
        <View style={{ flexDirection: 'row' }}>
          <AntDesign name="search1" size={18} color="black" style={{ marginTop: 15, marginLeft: 8 }} />
          <TextInput style={styles.txtSearch}
            name='search' placeholder='Search'
          />
        </View>
      </Card>
      {/*----------------------Horizontal Menu----------------------*/}
      <Card style={styles.menu}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          
          <TouchableOpacity >
            <View>
              <Card style={{
                width: 50, height: 50, borderRadius: 15, marginLeft: 15,
                backgroundColor: '#F96056', alignItems: 'center'
              }}
                onPress={() => { navigation.navigate('Strokes') }}
              >
                <Image style={styles.strokeMenu} source={Stroke} />
              </Card>
              <Text style={{ paddingLeft: 20 }}>Stroke</Text>
            </View>
          </TouchableOpacity>

          <View>
            <Card style={{ width: 50, height: 50, marginLeft: 28, borderRadius: 15, backgroundColor: '#F96056', alignItems: 'center' }}>
              <Image style={styles.heartMenu} source={heart} />
            </Card>
            <Text style={{ paddingLeft: 15 }}>Heart-Attack</Text>
          </View>

          <View>
            <Image style={styles.epilepsyMenu} source={epilepsy} />
            <Text style={{ paddingLeft: 18 }}>Epilepsy</Text>
          </View>

          <View>
            <Card style={{ width: 50, height: 50, marginLeft: 28, borderRadius: 15, backgroundColor: '#F96056', alignItems: 'center' }}>
              <Image style={styles.cprMenu} source={cpr} />
              <Text style={{ paddingLeft: 8, paddingTop: 8 }}>CPR</Text>
            </Card>
          </View>

          <View>
            <Card style={{ width: 50, height: 50, marginLeft: 30, borderRadius: 15, backgroundColor: '#F96056', alignItems: 'center' }}>
              <Image style={styles.bloodMenu} source={bleeding} />
            </Card>
            <Text style={{ paddingLeft: 28 }}>Bleeding</Text>
          </View>

          <View>
            <Card style={{ width: 50, height: 50, marginLeft: 30, borderRadius: 15, backgroundColor: '#F96056', alignItems: 'center' }}>
              <Image style={styles.conImg} source={choking} />
              <Text style={{ paddingLeft: 5, paddingTop: 8 }}>Choking</Text>
            </Card>
          </View>

          <View>
            <Card style={{ width: 50, height: 50, marginLeft: 30, borderRadius: 15, backgroundColor: '#F96056', alignItems: 'center' }}>
              <Image style={styles.drown} source={drown} />
              <Text style={{ paddingLeft: 7, paddingTop: 3 }}>Drowning</Text>
            </Card>
          </View>

          <View>
            <Card style={{ width: 50, height: 50, marginLeft: 30, borderRadius: 15, backgroundColor: '#F96056', alignItems: 'center' }}>
              <Image style={styles.burn} source={burns} />
              <Text style={{ paddingLeft: 5, paddingTop: 8 }}>Burns</Text>
            </Card>
          </View>

        </ScrollView>
      </Card>



      {/*---------------------- Video Scroll View--------------------*/}

    <ScrollView vertical={true} >     

      <Card style= {styles.menu2}>

        <View>

              
            {videos.map(vid =>(
              <ol >

              <TouchableOpacity  onPress={() => { navigation.navigate('Strokes') }}>
                <Video
                  ref={video}
                  source={{ uri: link }}
                  // useNativeControls
                  resizeMode="contain"
                  isLooping
                  onPlaybackStatusUpdate={status => setStatus(() => status)}
                  style= {{width: 355, marginLeft: -
                  40, borderRadius: 25}}
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
  header: {
    flexDirection: 'column',
    paddingTop: 50
  },

  txtSearch: {
    width: 320,
    height: 50,
    borderRadius: 10,
    outline: 'none',
    backgroundColor: 'lightgrey',
    paddingLeft: 10,
  },

  txtCards: {
    backgroundColor: 'lightgrey',
    width: 355,
    height: 50,
    borderRadius: 10,
    marginLeft: 28,
    marginTop: 25
  },

  menu: {
    width: 305,
    marginLeft: 30,
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: '#f7eeee',
  },

  strokeMenu: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginTop: 10,
    color: '#fff',
  },

  heartMenu: {
    height: 35,
    width: 35,
    borderRadius: 15,
    marginTop: 6
  },

  epilepsyMenu: {
    height: 50,
    width: 50,
    borderRadius: 15,
    backgroundColor: '#F96056',
    marginLeft: 18
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
    width: 355,
    height: 428,
    marginLeft: 30,
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: '#f7eeee',
  },
});

