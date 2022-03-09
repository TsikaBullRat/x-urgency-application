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
  const [collection, setCollection] = useState([
    {
      title: "Video 1",
      views: 7,
      tag: "Choking",
      stamp: "2 days ago",
      id: 1,
      description: "Lorem ipsum etc",
      owner: "Ntsikayomzi Ngcakani",
      firestore: "c4ac278a-baa1-403a-bb98-1f4ff9d8af7",
      match: "XYRltIaLknbfJrvZG4OfyOtGYTz2",
      url: '../../images/pexels-sathyaprabha-rakkimuthu-5613843.mp4'
    },
    {
      title: "Video 2",
      views: 200,
      tag: "Stroke",
      stamp: "3 years ago",
      id: 2,
      description: "Lorem ipsum etc",
      owner: "Thabo Moeti",
      firestore: "b7e7379f-4c5b-459a-8b17-14cfb254786",
      match: "SvkJPojTkUNBr8IVgoKqoTosIlE3",
      url: '../../images/pexels-anastasia-shuraeva-8028812.mp4'
    }
  ])

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

  const reference = useRef(collection.map(item=>item.url))

  const ItemSeperatorView = () => {
    return (
      <View
        style={styles.seperator}
      />
    )
  }

  const [displayModal, setDisplaModal] = useState(false)
  const [message, setMessage] = useState('')

  return (
    <View style={styles.container}>

<View style={styles.alignment}>

  <View style={styles.totalbody}>
      <AlertNote
        modalVisible={displayModal}
        setModalVisible={setDisplaModal}
        msg={message}
      />

      {/**------------------CallSiren--------------------CallSiren----------------- */}
      <View
        style={styles.topButtons}>
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
        style={styles.header}>
        {/*-------------Header---------------Header--------------Header------- */}
        <View>
          <Header />
        </View>

        <View style={styles.avatar}>
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
      <View style={styles.menu}>
        <Menu />
      </View>

      {/*---------------------- Video Scroll View--------------------*/}
      <View style={styles.mainBody}>
        <ScrollView
          style={styles.scroll}
          vertical={true}
          showsVerticalScrollIndicator={false}
        >
          {collection
            ? collection.map((vid, index) => (
                <View
                  style={styles.item}
                  key={index}
                >
                  <TouchableOpacity
                    style={styles.pressable}
                    onPress={() => navigation.navigate('PlayVideo', { vid })}
                  >
                    <Video
                      ref={reference[index]}
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

                  <ItemSeperatorView />
                </View>
              ))
            : null}
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
    width:'100%',
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
  alignment: { alignItems:'center' },
  totalbody: {width:'100%'},
  topButtons: {
    width: '95%',
    flexDirection: 'row',
    marginVertical: 35,
    justifyContent: 'flex-end'
  },
  emergency: { left: -15 },
  logout: { left: -15 },
  header: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  avatar: {top:-20},
  menu: { width: '100%', alignItems:'center'},
  mainBody: { marginTop:15, alignItems:' center'},
  scroll: { height: 435 },
  item: { width: 360, alignItems:'center', backgroundColor: '#ffe7e6' },
  pressable: { alignItems: 'center', justifyContent: 'center' },
  video: { width: 360, height: 180 },
  vidText: {
    width: '98%',
    flexDirection: 'row',
    margin:3,
    justifyContent: 'space-between'},
    vidText2: { width:'98%', margin:3},
    seperator: {
      height: 0.5,
      width: 380,
      left: -10,
      backgroundColor: '#c8c8c8'
    }
})
