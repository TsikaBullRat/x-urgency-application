import React, { useState, useEffect, useRef } from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  ActivityIndicator
} from 'react-native'
// import { ScrollView } from 'react-native-gesture-handler'
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
import { AntDesign } from '@expo/vector-icons'
import { Video } from 'expo-av'

export default function Home ({ navigation, Exit }) {
  const [status, setStatus] = useState({})
  const [videos, setLoad] = useState(null)
  const [image, setImage] = useState(null)
  const [initial, setInitial] = useState('')
  const [collection, setCollection] = useState([])
  const [visibleStatusBar, setVisibleStatusBar] = useState(false)

  const changeVisibilityStatusBar = () => {
    setVisibleStatusBar(!visibleStatusBar)
  }

  useEffect(() => {
    auth.currentUser
      ? //  (setImage(auth.currentUser.photoURL),
        setInitial(auth.currentUser.displayName.substring(0, 1))
      : auth.onAuthStateChanged(doc => {
          // setImage(doc.photoURL)
          // console.log(doc.displayName)
          setInitial(doc.displayName.substring(0, 1))
        })
  }, [])

  useEffect(() => {
    LoadSet(setCollection)
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
      <View style={{ alignItems: 'center' }}>
        <View style={{ width: '100%' }}>
          <AlertNote
            modalVisible={displayModal}
            setModalVisible={setDisplaModal}
            msg={message}
          />

          {/**------------------CallSiren--------------------CallSiren----------------- */}
          <View
            style={styles.callSiren}>
            <View style={styles.emergency}>
              <TouchableOpacity
                onPress={() => navigation.navigate('EmergencyContacts')}
              >
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
          <View
            style={styles.upperView}>
            {/*-------------Header---------------Header--------------Header------- */}
            <View>
              <Header />
            </View>

            <View style={styles.displaypicture}>
              {image ? (
                <Avatar rounded source={{ uri: image }} size='large' />
              ) : (
                <View style={styles.temp}>
                  <Text style={styles.temp_text}> {initial} </Text>
                </View>
              )}
            </View>
          </View>

          {/**-----------Menu Category--------------Menu Category--------------------- */}
          {/* <View style={{ width: '100%', alignItems: 'center' }}> */}
            <Menu />
          {/* </View> */}

          {/*---------------------- Video Scroll View--------------------*/}
          <View
            style={styles.videoList}>
            <ScrollView
              // style={{ height: '15%', width:'100%' }}
              vertical={true}
              showsVerticalScrollIndicator={false}
            >
              {collection
                ? collection.map((vid, index) => (
                    <View
                      style={styles.videoContainer}
                      key={index}
                    >
                      
                      <Video
                        ref={vid.index}
                        source={{ uri: vid.url }}
                        resizeMode='stretch'
                        isLooping
                        style={styles.video}
                      />
                        <TouchableOpacity style={styles.playContainer} onPress={() =>navigation.navigate('PlayVideo', {vid})} >
                          <Image style={styles.playButton} source={require('../../images/playMenu.jpg')} />
                        </TouchableOpacity>
                      <View
                        style={styles.titleVideo}
                      >
                        <Text style={styles.vidTitle}>{vid.title}</Text>                       
                      </View>

                      <View
                        style={styles.desBox}
                      >

                        <View style={styles.desBox2}>
                        <Text style={styles.description}>{vid.description}</Text>
                        <Text style={styles.tag}>{vid.views} views</Text>
                        </View>


                        <Text style={styles.description}>{vid.tag} </Text>
                        <Text style={styles.tag}>{vid.stamp}</Text>
                      </View>
                      
                      <ItemSeperatorView />
                    </View>
                  ))
                :( 
                  <View>
                    <ActivityIndicator size="large" color="#f47066"/>
                  </View>
                )}
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height:'100%',
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
    fontSize: 17,
    fontWeight: 'bold'
  },

  vidTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'red'
  },

  description: {
    color: '#fff',    
  },

  tag: {
    color: '#fff'
  },

  tag1: {
    color: '#fff',
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
    textAlign: 'center'
  },
  callSiren:{
    width: '97%',
    flexDirection: 'row',
    marginVertical: 35,
    justifyContent: 'flex-end',             
  },
  emergency:{ 
    left: -15 
  },
  logout:{ 
    marginTop: 10 
  },
  upperView:{
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  displaypicture:{ 
    top: -25 
  },
  videoList:{
    top: 25, 
    marginBottom: 25,
    alignItems: 'center',
    justifyContent:'center'
  },
  videoContainer:{
    width: '100%',
    marginTop: 15,
    alignItems: 'center',
    backgroundColor: '#b5a8a8'
  },
  video:{ 
    width: '100%', 
    height: 255 
  },
  playButton:{
    borderRadius: 50
  },
  playContainer:{
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: '#f47066',
    bottom: 150,
  },
  titleVideo:{
    width: '98%',
    flexDirection: 'row',
    margin: 3,
    justifyContent: 'space-between'
  },
  desBox: {
    width: '98%',
    margin: 3,
    alignItems: 'flex-start'
  },
  desBox2: { 
    width: 350, 
    flexDirection:'row', 
    justifyContent:'space-between'
  }
})
