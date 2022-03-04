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
import LogOut from '../../firebase/Auth/LogOut'
import Header from '../../Components/Header'
import Menu from '../../Components/Menu'
import CallSiren from '../../Components/CallSiren'
import LogOutComp from '../../Components/LogOutComp'
import { VideoList } from '../../Components/VideoList'
import { Feather } from '@expo/vector-icons'
import { Avatar, Badge } from 'react-native-elements'
import { AlertNote } from '../../Components/Alert'
import { Video } from 'expo-av'

export default function Home ({ navigation, Exit, route }) {
  const [status, setStatus] = useState({})
  const [videos, setLoad] = useState(null),
     [videoPlay, setVideoPlay] = useState(
    // data.url 
    "https://firebasestorage.googleapis.com/v0/b/x-urgency.appspot.com/o/Videos%2F53b6444b-ce3b-4c39-b22d-0828f092e43f.mp4?alt=media&token=8f52518d-65a8-4d1f-b18b-a6511a056caa"
  )

  const reference = useRef(
    //data.ref 
    "https://firebasestorage.googleapis.com/v0/b/x-urgency.appspot.com/o/Videos%2F53b6444b-ce3b-4c39-b22d-0828f092e43f.mp4?alt=media&token=8f52518d-65a8-4d1f-b18b-a6511a056caa"
  ),

   data = route.params,

    [image, setImage] = useState(null),
    [initial, setInitial] = useState('')

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

  // useEffect(() => {
  //   firestore.collection('Videos').onSnapshot(snapshot => {
  //     const videos = snapshot.docs.map(doc => ({
  //       ...doc.data()
  //     }))
  //     setCollection(videos)
  //     // setFilteredData(videos);
  //     console.log(videos)
  //   })

  //   //query.forEach(async doc => {
  //   // let locator
  //   // let user
  //   // let comment
  //   // let time
  //   // let load = []

  //   // if (doc.data().comments !== undefined) {
  //   //     if (doc.data().comments[0] !== null) count = doc.data().comments.length
  //   //     else count = 0
  //   // }

  //   // if (doc.data().comments !== undefined) {
  //   //     if (doc.data().comments[0] !== null) {
  //   //         for (var i = 0; i < doc.data().comments.length; i++) {
  //   //             locator = doc.data().ref
  //   //             user = await firestore.collection("Users").doc(locator).get().then(doc => doc.data().username ? doc.data().username : null)
  //   //             comment = doc.data().comments[i].comment
  //   //             time = doc.data().comments[i].time.toDate()
  //   //             load = [...load, { user, comment, time }]
  //   //         }
  //   //     }
  //   // }
  //   // set = [...set, ...load]
  //   // SetCollection(set)
  //   //     })
  //   //     Count(count)
  //   // })
  // }, [])

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

  const [displayModal, setDisplaModal] = useState(false),
    [message, setMessage] = useState(''),
    signOut = () => {
      LogOut()
      setMessage('Signed out successfully')
      setDisplaModal(true)
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
                      ref={reference}
                      source={{ uri: videoPlay }}
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
