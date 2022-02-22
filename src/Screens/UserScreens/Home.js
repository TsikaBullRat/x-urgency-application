import React, { useState, useEffect, useRef } from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text
} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import { Card } from 'react-native-paper'
import { auth, LoadSet, firestore } from '../../firebase'
import Header from '../../Components/Header'
import Menu from '../../Components/Menu'
import { VideoList } from '../../Components/VideoList'
import { Feather } from '@expo/vector-icons';
import { Avatar, Badge } from 'react-native-elements';

export default function Home ({ navigation, Exit }) {
  const [status, setStatus] = useState({})
  const [videos, setLoad] = useState(null),
    ref = useRef(null),
  [image, setImage] = useState(null),
  [initial, setInitial] = useState('')

  useEffect(() => {
    auth.currentUser ? (
      setImage(auth.currentUser.photoURL),
      setInitial(auth.currentUser.displayName.substring(0, 1))
    ) : (
      auth.onAuthStateChanged(doc => {
        setImage(doc.photoURL)
        console.log(doc.displayName)
        setInitial(doc.displayName.substring(0, 1))
        console.log(auth.currentUser)
      })
    )
  }, [])

   const VideoScreen = data => {
      navigation.navigate('PlayVideo', { data })
    },
    
    Emergency = () => {
      navigation.navigate('EmergencyContacts')
    }

  useEffect(() => {
    LoadSet(setLoad)
  }, [])

  return (
    <View style={styles.container}>
      

      {/**------------------Header-----------------------Header----------------- */}
      <View style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <Header Exit={Exit} Emergency={Emergency} />

        <View style={{ marginTop: 50, marginLeft: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Doctor')}>
            {image ? (<Avatar style={styles.avatar} rounded source={{ uri: image, }} size="large" />

            ) : (

              <View style={styles.temp}>
                <Text style={styles.temp_text}> {initial} </Text>
              </View>
            )}

          </TouchableOpacity>

          <TouchableOpacity onPress={() => { navigation.navigate("Update") }} >
            <Feather name="edit" size={24} color="#F47066" style={{ left: 120, top: -20 }} />
          </TouchableOpacity>
        </View>
      </View>

      {/**-----------Menu Category--------------Menu Category--------------------- */}
      <View style={{ width: 335, alignItems: 'center' }}>
        <Menu list={videos} setVids={setLoad} />
      </View>

      <View
        style={{
          width: 335,
          alignItems: 'center',
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <Text style={{ fontFamily: 'Roboto' }}> {`Most Viewed`} </Text>

        <TouchableOpacity onPress={() => navigation.navigate('Doctor')}>
          <Text
            style={{ fontSize: 18, fontFamily: 'Roboto', color: '#F96056' }}
          >
            {`Medical Personnel`}{' '}
          </Text>
        </TouchableOpacity>
      </View>

      {/*---------------------- Video Scroll View--------------------*/}

      {/* <ScrollView
        style={{ height: 220, width: 335 }}
        vertical={true}
        showsVerticalScrollIndicator={false}
      > */}
        <Card style={styles.menu2}>
          <View>
            <VideoList videos={videos} VideoScreen={VideoScreen} />
          </View>
        </Card>
      {/* </ScrollView> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  logoutIMG: {
    width: 15,
    height: 15
  },

  header: {
    fontWeight: '200',
    fontSize: 18,
    color: '#F96056',
    paddingTop: 20
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50
  },

  menu2: {
    width: 320,
    height: 520,
    borderRadius: 15,
    shadowOffset: {},
    shadowOpacity: 0.8,
    shadowRadius: 3.84,
    elevation: 5
  },

  categoryListText: {
    paddingLeft: 15,
    fontSize: 17,
    fontWeight: 'bold'
  },

  vidTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  tag: {
    paddingVertical: 2,
    fontSize: 12
  },

  avatar: {
    //top: -60,
    left: -3
  },

  temp: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginTop: 80,
    backgroundColor: 'turquoise',
    textAlign: 'center',
    justifyContent: 'center'
  },

  temp_text: {
    fontSize: 40,
    color: '#fff',
    fontFamily: 'Roboto'
  }
})
