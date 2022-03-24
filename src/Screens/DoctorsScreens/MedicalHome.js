import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Pressable
} from 'react-native'
import { Avatar, Badge } from 'react-native-elements'
import { Card } from 'react-native-paper'
import { auth, firestore } from '../../firebase/config'
import { LoadSet } from '../../firebase/Storage/Storage.functions'
import { ProgressBar, VideoList, AlertNote } from '../../Components'
import LogOutComp from '../../Components/LogOutComp'
import { Feather } from '@expo/vector-icons'
import { Video } from 'expo-av'

export default function MedicalHome ({ navigation, Exit, credentials }) {
  const [done, setDone] = useState(true)
  const [display, setDisplayModal] = useState(false)
  const [collection, setCollection] = useState([]),
    VideoScreen = data => {
      Navigate(1, data)
    },
    Logout = () => {
      Exit()
    },
    VideoNotifier = () => {
      let today = new Date()
      if (today === auth.currentUser.metadata.creationTime) {
        setDisplayModal(true)
      }
      firestore
        .collection('Videos')
        .where('ref', '==', auth.currentUser.uid)
        .get()
        .then(query => {
          var data = []
          query.forEach(doc => {
            data = [...data, doc.data().added.toDate()]
            return data
            console.log(data)
          })
          return data
        })
    }

  const [image, setImage] = useState()
  const [initial, setInitial] = useState()
  const getProfile = async () => {
    let name
    setImage(auth.currentUser.photoURL)

    setInitial(name.substring(0, 1))
  }

  useEffect(() => {
    getProfile()
  }, [])

  const video = React.useRef(
    'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
  )

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

  const [status, setStatus] = useState({}),
    [loading, setLoading] = useState(null)
  const link = 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'

  useEffect(() => {
    LoadSet(setCollection)
  }, [])

  useEffect(() => {
    VideoNotifier()
  }, [])

  return (
    <View style={styles.contain}>
      <AlertNote
        modalVisible={display}
        setModalVisible={setDisplayModal}
        msg='Hey doc why not add your first video'
      />
      <View style={styles.logout}>
        <TouchableOpacity onPress={Exit}>
          <LogOutComp />
        </TouchableOpacity>
      </View>

      {/*---------------------------Header--------------------------*/}
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.medName} onPress={Logout}>
          {' '}
          Dr. {auth.currentUser.displayName.split(' ')[1]}
        </Text>
        {'\n'}

        <Text style={styles.medHeader}> In Da House</Text>

        <View style={{ marginTop: 10, marginLeft: 10 }}>
          {image ? (
            <Avatar
              style={styles.avatar}
              rounded
              source={{ uri: image }}
              size='large'
            />
          ) : (
            <View style={styles.temp}>
              <Text style={styles.temp_text}> {initial} </Text>
            </View>
          )}
        </View>
        <Text onPress={() => navigation.navigate('Update')}>
          <Feather
            name='edit'
            size={24}
            color='#F47066'
            style={{ left: 120, top: -20 }}
          />
        </Text>
      </View>
      
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
                    <View style={styles.videoContainer}
                      key={index}>
                      
                      <Video
                        ref={vid.index}
                        source={{ uri: vid.url }}
                        resizeMode='stretch'
                        isLooping
                        style={styles.video}/>
                        
                        <TouchableOpacity style={styles.playContainer} onPress={() =>navigation.navigate('PlayVideo', {vid})} >
                          <Image style={styles.playMenu} source={require('../../images/playMenu.jpg')} />
                        </TouchableOpacity>

                      <View style={styles.titleVideo} >
                        <Text style={styles.vidTitle}>{vid.title}
                        </Text>                       
                      </View>

                      <View >

                        <View style={{width:355, flexDirection:'row', alignitems:'center', justifyContent:'space-between'}}>
                        <Text style={styles.description}>{vid.description}</Text>
                        <Text style={styles.tag}>{vid.views} views</Text>
                        </View>

                        <Text style={styles.tag}>{vid.stamp}</Text>
                      </View>
                      
                      <ItemSeperatorView />
                    </View>
                  ))
                : null}
            </ScrollView>
          </View>

      <View>
        style={styles.btnUpload}
        onPress={() => {
          navigation.navigate('Upload')
        }}>
        <Text style={{ color: '#fff', fontSize: 26 }}>+</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 40
  },
  logout: {
    left: 150
  },

  header: {
    flexDirection: 'column',
    paddingTop: 10
  },

  medName: {
    fontSize: 36,
    paddingLeft: 30,
    color: '#f47066'
  },

  medHeader: {
    fontSize: 36,
    color: '#f47066'
  },

  tag: {
    paddingVertical: 2,
    fontSize: 12
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderBottomWidth: 3,
    borderColor: 'turquoise'
  },

  vidTitle: {
    fontSize: 18,
    color: '#F47066'
  },

  btnUpload: {
    backgroundColor: '#F47066',
    height: 40,
    width: 40,
    borderRadius: 50,
    textAlign: 'center',
    marginLeft: 290,
    marginTop: 15
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
