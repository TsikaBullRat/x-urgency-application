import React, { useState, useEffect, useRef } from 'react'
import { View, StyleSheet, TouchableOpacity, Image, Text, ScrollView } from 'react-native'
import { Card } from 'react-native-paper'
import { auth, firestore } from '../../firebase/config'
import { LoadSet } from '../../firebase/Storage/Storage.functions'
import Header from '../../Components/Header'
import Menu from '../../Components/Menu'
import CallSiren from '../../Components/CallSiren'
import LogOutComp from '../../Components/LogOutComp'
import VideoList from '../../Components/VideoList'
import { Feather } from '@expo/vector-icons'
import { Avatar, Badge } from 'react-native-elements'
import { AlertNote } from '../../Components/Alert'
import { Video } from 'expo-av'

export default function Home({ navigation, Exit }) {
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

  // useEffect(()=>{
  //   LoadSet(setCollection)
  // }, [])

  useEffect(()=>{
    LoadSet(setCollection)
  }, [])

  const reference = useRef(null)

  useEffect(()=>{
    console.log(collection)
  }, [])

  const ItemSeperatorView = () => {
    return (
      <View style={styles.seperator}
      />
    )
  }

  const [displayModal, setDisplaModal] = useState(false)
  const [message, setMessage] = useState('')

  return (
    <View style={styles.container}>

      <View style={styles.center}>

        <View style={styles.width}>
          <AlertNote modalVisible={displayModal} setModalVisible={setDisplaModal} msg={message} />

          {/**------------------CallSiren--------------------CallSiren----------------- */}

          <View style={styles.callMain}>
            <View style={styles.callCenter}>
              <TouchableOpacity onPress={() => navigation.navigate('EmergencyContacts')} >
                <CallSiren />
              </TouchableOpacity>
            </View>

            <View style={styles.logout}>
              <TouchableOpacity onPress={Exit}>
                <LogOutComp />
              </TouchableOpacity>
            </View>
          </View>

          {/**----------------Header/Avatar--------------------Header/Avatar--------------- */}

          

            {/*-------------Header---------------Header--------------Header------- */}

            <View style={styles.header}>
              <Header />
            </View>
        </View>

      {/**-----------Menu Category--------------Menu Category--------------------- */}
        <Menu />

      {/*---------------------- Video Scroll View--------------------*/}
      <View style={styles.mainBody}>
        <ScrollView
          style={styles.scroll}
          vertical={true}
          showsVerticalScrollIndicator={false}
        >
          {collection?( 
            collection.map((vid, index) => (
                <View
                  style={styles.item}
                  key={index}
                >
                  <TouchableOpacity
                    style={styles.pressable}
                    onPress={() => navigation.navigate('PlayVideo', { vid })}
                  >
                    <Video
                      ref={reference}
                      source={{ uri: vid.url }}
                      resizeMode='stretch'
                      isLooping
                      style={styles.video}
                    />
                  </TouchableOpacity>
                
                <View
                  style={styles.vidText} >
                    <Text style={styles.vidTitle}>{vid.title}</Text>
                    <Text style={styles.tag}>{vid.views}Views</Text>
                  </View>

                  <View style={styles.vidText2}>
                    <Text style={styles.tag}>{vid.tag} </Text>
                    <Text style={styles.tag}>{vid.stamp}</Text>
                  </View>
                </View>
            ))): null }

            </ScrollView>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff'
  },

  logoutIMG: {
    width: 15,
    height: 15
  },

  menu2: {
    width: '95%',
    height: 520,
    borderRadius: 15,
    elevation: 5
  },

  categoryListText: {
    paddingLeft: 15,
    fontSize: 17,
    fontWeight: 'bold'
  },

  vidTitle: {
    marginTop: -25,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black'
  },

  tag: {
    color: '#fff'
  },

  tag1: {
    color: '#fff',
    marginTop: -25
  },

  tag: {
    // fontSize: 12
  },

  temp: {
    width: 70,
    height: 70,
    borderRadius: 50,
    left: -10,
    backgroundColor: 'turquoise',
    alignItems: 'center',
    justifyContent: 'center'
  },

  temp_text: {
    fontSize: 40,
    color: '#fff',
    textAlign: 'center',

  },
  seperator: { 
    height: 0.5, 
    width: 380, 
    left: -10, 
    backgroundColor: '#c8c8c8' 
  },
  center: {
    alignItems: 'center'
  },
  width: { 
    width: '100%' 
  },
  callMain: { 
    width: '95%', 
    flexDirection: 'row', 
    marginVertical: 35, 
    justifyContent: 'flex-end' 
  },
  callCenter: { 
    left: -15 
  },
  logout: { 
    marginTop: 10 
  },
  header: { 
    flexDirection: 'row', 
    width: '100%', 
    alignItems: 'center', 
    justifyContent: 'space-between' 
  },
  avatar: { 
    top: -25 
  },
  scrollBase:{ 
    marginTop: 15, 
    alignItems: 'center' 
  },
  scrollHeight:{ 
    height: 435 
  },
  card: { 
    width: 360, 
    marginTop: 20, 
    alignItems: 'center', 
    backgroundColor: '#b5a8a8' 
  },
  touchable: { 
    width: '100%', 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  textBox1: { 
    width: '98%', 
    flexDirection: 'row', 
    margin: 3, 
    justifyContent: 'space-between' 
  },
  textBox2: { 
    width: '98%', 
    margin: 3, 
    marginTop: -25, 
    alignItems: 'flex-start' 
  },
  video: { 
    width: '100%', 
    height: 180 
  }
})
