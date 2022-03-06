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
import { auth, firestore } from '../../firebase/config'
import {LoadSet} from '../../firebase/Storage/Storage.functions'
import Header from '../../Components/Header'
import Menu from '../../Components/Menu'
import CallSiren from '../../Components/CallSiren'
import LogOutComp from '../../Components/LogOutComp'
import VideoList from '../../Components/VideoList'
import { Feather } from '@expo/vector-icons'
import { Avatar, Badge } from 'react-native-elements'
import { AlertNote } from '../../Components/Alert'
import { Video } from 'expo-av'

export default function Home ({ navigation, Exit }) {
  const [status, setStatus] = useState({})
  const [videos, setLoad] = useState(null)
  const [image, setImage] = useState(null)
  const [initial, setInitial] = useState('')
  const [collection, setCollection] = useState([])

  useEffect(() => {
    auth.currentUser ?
      //  (setImage(auth.currentUser.photoURL),
        setInitial(auth.currentUser.displayName.substring(0, 1))
      : auth.onAuthStateChanged(doc => {
          // setImage(doc.photoURL)
          // console.log(doc.displayName)
          setInitial(doc.displayName.substring(0, 1))
          console.log(auth.currentUser)
        })
  }, [])

  useEffect(()=>{
    LoadSet(setCollection)
  }, [])

  const reference = useRef(collection.map(item=>item.url))

  useEffect(()=>{
    console.log(collection)
  }, [])

  const ItemSeperatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: 380,
          left: -10,
          backgroundColor: '#c8c8c8'
        }}
      />
    )
  }

  const [displayModal, setDisplaModal] = useState(false)
  const [message, setMessage] = useState('')

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
          width: 345,
          flexDirection: 'row',
          marginVertical: 35,
          justifyContent: 'flex-end'
        }}>
        <View style={{ left: -15 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('EmergencyContacts')}
          >
            <CallSiren />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 10 }}>
          <TouchableOpacity onPress={Exit}>
            <LogOutComp />
          </TouchableOpacity>
        </View>
      </View>

      {/**----------------Header/Avatar--------------------Header/Avatar--------------- */}
      <View
        style={{
          flexDirection: 'row',
          width: 350,
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
        {/*-------------Header---------------Header--------------Header------- */}
        <View style={{ left: 6 }}>
          <Header />
        </View>

        <TouchableOpacity
          style={{ top: -24 }}
          onPress={() => navigation.navigate('Doctor')}>
          {image ? (
            <Avatar rounded source={{ uri: image }} size='large' />
          ) : (
            <View style={styles.temp}>
              <Text style={styles.temp_text}> {initial} </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/**-----------Menu Category--------------Menu Category--------------------- */}
      <View style={{ width: 360, left: 2 }}>
        <Menu />
      </View>

      {/*---------------------- Video Scroll View--------------------*/}
      <View style={{ marginVertical: 20 }}>
        <ScrollView
          style={{ height: 435 }}
          vertical={true}
          showsVerticalScrollIndicator={false}
        >
          {collection
            ? collection.map((vid, index) => (
                <View
                  style={{ width: 340, left: 11, backgroundColor: '#ffe7e6' }}
                  key={index}
                >
                  <TouchableOpacity
                    style={{ alignItems: 'center', justifyContent: 'center' }}
                    onPress={() => navigation.navigate('PlayVideo', { vid })}
                  >
                    <Video
                      ref={reference[index]}
                      source={{ uri: vid.url }}
                      resizeMode='stretch'
                      isLooping
                      style={{ width: 340, height: 180 }}
                    />
                  </TouchableOpacity>

                <View
                  style={{
                    flexDirection: 'row',
                    margin:3,
                    justifyContent: 'space-between'}} >
                    <Text style={styles.vidTitle}>{vid.title}</Text>
                    <Text style={styles.tag}>{vid.views}Views</Text>
                  </View>

                  <View style={{ margin:3}}>
                    <Text style={styles.tag}>{vid.tag} </Text>
                    <Text style={styles.tag}>{vid.stamp}</Text>
                  </View>

                  <ItemSeperatorView />
                </View>
              ))
            : null}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  logoutIMG: {
    width: 15,
    height: 15
  },

  menu2: {
    width: 335,
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
    alignItems: 'center',
    justifyContent: 'center'
  },

  temp_text: {
    fontSize: 40,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Roboto'
  }
})
