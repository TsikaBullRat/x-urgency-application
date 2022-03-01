import React, { useState, useEffect, useRef } from 'react'
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Card } from 'react-native-paper'
import { auth, LoadSet, firestore } from '../../firebase'
import Header from '../../Components/Header'
import Menu from '../../Components/Menu'
import CallSiren from '../../Components/CallSiren'
import LogOutComp from '../../Components/LogOutComp'
import { VideoList } from '../../Components/VideoList'
import { Feather } from '@expo/vector-icons'
import { Avatar, Badge } from 'react-native-elements'

export default function Home ({ Navigate, Exit }) {
  const [status, setStatus] = useState({})
  const [image, setImage ] = useState()
  const[ initial , setInitial ] = useState()
  const [videos, setLoad] = useState(null),
    ref = useRef(null),
    VideoScreen = data => {
      console.log(data)
      Navigate(1, data)
    },
    Emergency = () => {
      Navigate(2)
    }

  useEffect(() => {
    LoadSet(setLoad)
    return ()=>LoadSet(setLoad)
  }, [])

  return (
    <View style={styles.container}>
      {/**------------------CallSiren--------------------CallSiren----------------- */}
      <View
        style={{
          width: '80%',
          flexDirection: 'row',
          marginVertical: 15,
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >

        <View>
          <TouchableOpacity onPress={() =>Navigate(2)}>
            <CallSiren />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={{
              width: 335,
              alignItems: 'flex-end',
              justifyContent: 'center'
            }}
            onPress={Exit}
          >
            <LogOutComp />
          </TouchableOpacity>
        </View>
      </View>

      {/**------------------Header-----------------------Header----------------- */}

      <View style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <Header Exit={Exit} />

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Doctor')}>
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
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Update')
            }}
          >
            <Feather
              name='edit'
              size={24}
              color='#F47066'
              style={{ left: 120, top: -20 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/**-----------Menu Category--------------Menu Category--------------------- */}

      <View style={{ width: 335, alignItems: 'center' }}>
        <Menu list={videos} setVids={setLoad} />
      </View>

      {/**-----------Medical Personel--------------Most View--------------------- */}
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
            {`Medical Personel`}
          </Text>
        </TouchableOpacity>
      </View>

      {/*---------------------- Video Scroll View--------------------*/}

      <ScrollView
        style={{ height: 220, width: 335 }}
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
    top: -60,
    left: -3
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
