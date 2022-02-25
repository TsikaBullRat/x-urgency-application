import React, { useState, useEffect, useRef } from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  ScrollView
} from 'react-native'
// import { ScrollView } from 'react-native-gesture-handler'
import { Card } from 'react-native-paper'
import { auth, LoadSet, firestore } from '../../firebase'
import Header from '../../Components/Header'
import Menu from '../../Components/Menu'
import CallSiren from '../../Components/CallSiren'
import LogOutComp from '../../Components/LogOutComp'
import { VideoList } from '../../Components/VideoList'
import { Feather } from '@expo/vector-icons'
import { Avatar, Badge } from 'react-native-elements'
import { AlertNote } from '../../Components/Alert'

export default function Home ({ navigation, Exit }) {
  const [status, setStatus] = useState({})
  const [videos, setLoad] = useState(null),
    ref = useRef(null),
    [image, setImage] = useState(null),
    [initial, setInitial] = useState('')

  useEffect(() => {
    auth.currentUser
      ? (setImage(auth.currentUser.photoURL),
        setInitial(auth.currentUser.displayName.substring(0, 1)))
      : auth.onAuthStateChanged(doc => {
          setImage(doc.photoURL)
          console.log(doc.displayName)
          setInitial(doc.displayName.substring(0, 1))
          console.log(auth.currentUser)
        })
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

  const [displayModal, setDisplaModal] = useState(false),
    [message, setMessage] = useState('')
  const signOut = () => {
    setMessage('Signed out successfully')
    setDisplaModal(true)
    navigation.navigate('SignIn')
  }

  return (
    <View style={styles.container}>
      <AlertNote
        modalVisible={displayModal}
        setModalVisible={setDisplaModal}
        msg={message}
      />

      {/**------------------CallSiren--------------------CallSiren----------------- */}
      <View
        style={{
          width: '90%',
          flexDirection: 'row',
          marginVertical: 35,
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('EmergencyContacts')}
          >
            <CallSiren />
          </TouchableOpacity>
        </View>

        <View style={{alignItems:'center', justifyContent:'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Doctor')}>
            {image ? (
              <Avatar rounded source={{ uri: image }} size='large' />
            ) : (
              <View style={styles.temp}>
                <Text style={styles.temp_text}> {initial} </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={signOut}>
            <LogOutComp />
          </TouchableOpacity>
        </View>
      </View>

      {/**----------------Header/Avatar--------------------Header/Avatar--------------- */}
      <View
        style={{
          width: '95%',
          alignItems: 'center',
          justifyContent: 'space-between'
      }}>
          <Header />
      </View>

      {/**-----------Menu Category--------------Menu Category--------------------- */}
      <View style={{ width: '90%', alignItems: 'center' }}>
        <Menu />
      </View>

      {/*---------------------- Video Scroll View--------------------*/}
      <View style={{ marginVertical: 20 }}>
        <ScrollView
          style={{ height: 435, width: 335 }}
          vertical={true}
          showsVerticalScrollIndicator={false}
        >
            <Card style={styles.menu2}>
              <View>
                <VideoList videos={videos} VideoScreen={VideoScreen} />
              </View>
            </Card>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  logoutIMG: {
    width: 15,
    height: 15
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

  temp: {
    width: 70,
    height: 70,
    borderRadius: 50,
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
