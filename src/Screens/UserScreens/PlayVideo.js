/**
    * @description      : 
    * @author           : TLeeuw
    * @group            : 
    * @created          : 03/11/2021 - 09:30:54
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 03/11/2021
    * - Author          : TLeeuw
    * - Modification    : 
**/

import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, TextInput, Button, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import { Video, } from 'expo-av';
import { Likes } from '../../firebase/Functions/Likes'
import { Dislikes } from '../../firebase/Functions/Dislikes'
import { auth, firestore } from '../../firebase'
import { Collect, Post, } from '../../firebase'

export default function PlayVideo({ route, Navigate }) {

  const { data } = route.params
  const [userName, setUserName] = useState(data.owner)
  const [videoPlay, setVideoPlay] = useState(data.url)
  const [views, setViews] = useState(data.views)
  const [videoVisible, setVideoVisible] = useState(true)
  const [count, setCount] = useState(0)
  const refrence = useRef(data.url)
  const [info, setInfo] = useState()
  const [Comments, setComments] = useState([]),
    [comment, setComment] = useState(""),
    [visibleStatusBar, setVisibleStatusBar] = useState(true),
    changeVisibilityStatusBar = () => {
      setVisibleStatusBar(!visibleStatusBar)
    },

    changeStyleStatusBar = () => {
      const styleId = styleTypes.indexOf(styleStatusBar) + 1
      if (styleId === styleTypes.length) {
        return setStyleStatusBar(styleTypes[0])
      }

      return setStyleStatusBar(styleTypes[styleId])
    },

    addAct = async () => {
      let metadata = firestore
        .collection('Videos')
        .doc(data.firestore /*"53b6444b-ce3b-4c39-b22d-0828f092e43f"*/)
        .collection('Acts')
      let found = (await metadata.doc(auth.currentUser.uid).get()).exists
      found
        ? null
        : (metadata.doc(auth.currentUser.uid).set({
          liked: false,
          disliked: false,
          Comments: [null],
          ref: auth.currentUser.uid
        }),
          setViews(views + 1))
    },
    Delete = remove => {
      firestore.collection("Videos").doc(data.firestore).collection("Acts").doc(auth.currentUser.uid).get()
        .then(doc => {
          return doc.data().Comments
        })

        .then(item => {
          let update = item.filter(item => item.comment !== remove)
          return update
        })

        .then(update => {
          firestore
            .collection('Videos')
            .doc(data.firestore)
            .collection('Acts')
            .doc(auth.currentUser.uid)
            .update({
              Comments: update
            })
        })

      setComments(Comments.filter(item => item.comment !== remove))
    }

  useEffect(() => {
    Collect(data.firestore, setComments, setCount)
  }, [])

  useEffect(() => {
    addAct()
  }, [])

  useEffect(() => {
    console.log(data)
  }, [])

  return (
    <View style={styles.contain}>

      {/**-------------Video----------------Video-----------------Video---------------- */}

      <View style={{ width: "335", marginTop: "50" }}>
        <Video ref={refrence} source={{ uri: videoPlay }} useNativeControls resizeMode="stretch" isLooping style={{ width: "335", height: "180" }} />
      </View>

      {/**-------------Visible Info----------------Visible Info-----------------Visible Info----------------  */}

      {visibleStatusBar ? (
        <View style={{ width: "335", marginTop: "15", alignItems: 'center', justifyContent: 'space-between' }}>

          <View style={{ flexDirection: 'row', width: "335", alignItems: 'center', justifyContent: 'space-between' }}>
            <Text>
              <Text style={{ fontWeight: 'bold', color: '#F47066', }}>{data.title}</Text>
              <Text style={{ fontSize: "10" }}> {views} views - {data.stamp} </Text>
            </Text>

            <Text>
              <Text title="topNav" onPress={() => changeVisibilityStatusBar()}><AntDesign name="downcircle" size={18} color="black" style={styles.dropDown} /> </Text>
            </Text>
          </View>

          <View
            style={{ width: "335", flexDirection: 'row', marginTop: "25", alignItems: 'center', justifyContent: 'space-around' }}>

            <Likes data={data.firestore} />

            <View style={{ marginTop: "3" }}>
              {<Dislikes data={data.firestore} />}
            </View>

            <Text onPress={() => ShareItem(data.url)}>
              <FontAwesome5 name="share" size={20} color="black" />
              <Text style={{ paddingTop: "5" }}>{" Share "}</Text>
            </Text>

            <Text>
              <Entypo name="save" size={20} color="black" />
              <Text style={{ paddingTop: "5" }}>{" Save "}</Text>
            </Text>
          </View>

          <View style={{ width: "335", marginTop: "50", flexDirection: 'row', justifyContent: 'flex' }}>
            <Avatar rounded source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }} size="medium" />
            <Text style={{ paddingTop: "15" }} > {data.owner}</Text>
          </View>
          <View style={{ width: 340, alignItems: 'flex-start' }}>
            <Text style={{ paddingTop: 35, paddingLeft: 10, fontWeight: 'medium', fontSize: 18 }} > Comments: {count} </Text>
          </View>
        </View>


      ) : (
        /**-------------Hidden Description----------------Hidden Description-----------------Hidden Description----------------  */

        <Card style={{ width: "335", height: "300", borderRadius: "20", backgroundColor: '#fff', marginTop: "15" }}>

          <View style={{ width: "335", flexDirection: 'row', justifyContent: 'space-between' }}>

            <Text>
              <Text style={{ fontWeight: 'bold', color: '#F47066', fontSize: 16, }}>{"  Description: "}</Text>
              <Text style={{ maxWidth: "315", paddinLeft: "20" }}>  {data.description} </Text>
            </Text>

            <Text onPress={() => changeVisibilityStatusBar()}>
              <AntDesign name="closecircle" size={18} color="black" />  </Text>
          </View>

          <View style={{ marginTop: "50", flexDirection: 'row' }}>
            <Avatar rounded source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg', }} size="medium" />
            <Text>{userName}</Text>
          </View>
        </Card>

      )}

      <Card style={styles.txtCards}>
        <View style={{ flexDirection: 'row' }}>
          <TextInput style={styles.comment} name="comment" placeholder="Write a comment" onChangeText={text => setComment(text)} />
          <View style={{ width: "90", height: "40", borderRadius: '30' }}>
            <Button color="#F47066" onPress={() => Post(comment, data.firestore)} title='Comment' />
          </View>
        </View>
      </Card>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Card style={{
          height: "335", width: "315", marginTop: "5"
        }}>
          {Comments.map((item, index) =>
            <Card style={{ backgroundColor: '#e8d7cc', height: "100", marginTop: "10" }} key={index}>
              <SafeAreaView style={{ paddingLeft: "20", paddingTop: "10" }}>
                <Text><Text style={{ color: 'red' }}>{item.user}</Text>{`: ${item.comment}`}</Text>
                {item.user === auth.currentUser.displayName ? <Text onPress={() => Delete(item.comment)}><Text>{"remove"}</Text></Text> : null}
              </SafeAreaView>
            </Card>
          )}
        </Card>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  descriptionContainer: {
    width: 340
  },

  txtCards: {
    width: 340,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginTop: "5",
    borderWidth: 1,
    borderColor: '#F47066'
  },

  comment: {
    width: "295",
    height: "38",
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingLeft: 10
  },

  comments: {
    width: 295,
    left: 3,
    marginVertical: 15,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#f47066',
    paddingLeft: 5
  },

  txtComments: {
    color: '#fff',
    padding: 10
  },

  txtUserComment: {
    padding: 10,
    fontSize: 18,
    color: '#fff'
  },

  btnComment: {
    backgroundColor: '#F47066'
  }
})
