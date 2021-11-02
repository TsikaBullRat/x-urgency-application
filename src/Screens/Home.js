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
      {/*---------------------------Header--------------------------*/}
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.header}>
          <Text style={{
            fontSize: 36, paddingLeft: 30,
            color: 'turquoise',
            textShadowColor: 'grey', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 1
          }}
          >
            What's your
          </Text>
          <Text style={{
            fontSize: 36, paddingLeft: 30, color: 'red',
            textShadowColor: 'grey',
            textShadowOffset: { width: 2, height: 2 },
            textShadowRadius: 1
          }} >
            EMERGENCY
          </Text>
        </View>
        <View style={{ marginTop: 50, marginLeft: 10 }}>
          <Avatar style={styles.avatar}
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
      {/*----------------------Horizontal Menu----------------------*/}
      <Card style={styles.menu}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity >
            <View>
              <Card style={{
                width: 50, height: 70, borderRadius: 15, marginLeft: 18, alignItems: 'center', textAlign: 'center', marginTop: 7
              }}
                onPress={() => { navigation.navigate('Strokes') }}
              >
                <Image style={styles.strokeMenu} source={Stroke} />
                <Text style={{ fontSize: 12 }}>Stroke</Text>
              </Card>
            </View>
          </TouchableOpacity>
          <View>
            <Card style={{ width: 50, height: 70, marginLeft: 40, borderRadius: 15, alignItems: 'center', marginTop: 7 }}>
              <Image style={styles.heartMenu} source={heart} />
              <Text style={{ paddingLeft: 10, fontSize: 12 }}>Heart-Attack</Text>
            </Card>
          </View>
          <View>
            <Card style={{ width: 50, height: 70, marginLeft: 40, borderRadius: 15, alignItems: 'center', textAlign: 'center', marginTop: 7 }}>
              <Image style={styles.epilepsyMenu} source={epilepsy} />
              <Text style={{ fontSize: 12 }}>Epilepsy</Text>
            </Card>
          </View>
          <View>
            <Card style={{ width: 50, height: 70, marginLeft: 40, borderRadius: 15, alignItems: 'center', textAlign: 'center', marginTop: 7 }}>
              <Image style={styles.cprMenu} source={cpr} />
              <Text style={{ paddingTop: 8, fontSize: 12 }}>CPR</Text>
            </Card>
          </View>
          <View>
            <Card style={{ width: 50, height: 70, marginLeft: 33, borderRadius: 15, alignItems: 'center', textAlign: 'center', marginTop: 7 }}>
              <Image style={styles.bloodMenu} source={bleeding} />
            </Card>
            <Text style={{ paddingLeft: 28, fontSize: 12 }}>Bleeding</Text>
          </View>
          <View>
            <Card style={{ width: 50, height: 70, marginLeft: 33, borderRadius: 15, alignItems: 'center', textAlign: 'center', marginTop: 7 }}>
              <Image style={styles.conImg} source={choking} />
              <Text style={{ paddingLeft: 5, paddingTop: 8, fontSize: 12 }}>Choking</Text>
            </Card>
          </View>
          <View>
            <Card style={{ width: 50, height: 70, marginLeft: 33, borderRadius: 15, alignItems: 'center', textAlign: 'center', marginTop: 7 }}>
              <Image style={styles.drown} source={drown} />
              <Text style={{ paddingLeft: 7, paddingTop: 3, fontSize: 12 }}>Drowning</Text>
            </Card>
          </View>
          <TouchableOpacity onPress={Logout}>
            <Card style={{ width: 50, height: 70, marginLeft: 33, borderRadius: 15, alignItems: 'center', alignText: 'center', marginTop: 7 }}>
              <Image style={styles.burn} source={burns} />
              <Text style={{ paddingLeft: 5, paddingTop: 8, fontSize: 12 }}>Burns</Text>
            </Card>
          </TouchableOpacity>
        </ScrollView>
      </Card>

      {/*---------------------- Video Scroll View--------------------*/}
      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
        <Card style={styles.menu2}>
          <View>
            {videos.map(vid => (
              <ol >
                <TouchableOpacity onPress={() => { navigation.navigate('Strokes') }}>
                  <Video
                    ref={video}
                    source={{ uri: vid.url }}
                    resizeMode="contain"
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                    style={{
                      width: 315, marginLeft: -
                        10
                    }}
                  />
                  <h4>{vid.title}</h4>
                </TouchableOpacity>
              </ol>
            ))}
          </View>
        </Card  >
      </ScrollView >

      <View style={{paddingTop: 20}}>
        <TouchableOpacity>
          Med Home
        </TouchableOpacity>
      </View>
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
    height: 520,
    marginTop: 20,
    borderRadius: 15,
  },
});

