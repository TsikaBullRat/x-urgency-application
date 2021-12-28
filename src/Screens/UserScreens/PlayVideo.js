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
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Card } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import { Video, } from 'expo-av';
import { Likes } from '../../firebase/Functions/Likes'
import { Dislikes } from '../../firebase/Functions/Dislikes'
import { auth, firestore, Count } from '../../firebase';

export default function Strokes({ navigation, data }) {

  const [userName, setUserName] = useState(data.owner)
  const [videoPlay, setVideoPlay] = useState(data.url)
  const [videoVisible, setVideoVisible] = useState(true)
  const [count, setCount] = useState(0)
  const refrence = useRef(data.url)
  const [comments, setComments] = useState({ userName }),
    [visibleStatusBar, setVisibleStatusBar] = useState(false),
    changeVisibilityStatusBar = () => {
      setVisibleStatusBar(!visibleStatusBar);
    },
    changeStyleStatusBar = () => {
      const styleId = styleTypes.indexOf(styleStatusBar) + 1;
      if (styleId === styleTypes.length) {
        return setStyleStatusBar(styleTypes[0]);
      }
      return setStyleStatusBar(styleTypes[styleId]);
    },
    addAct = async () => {
      let metadata = firestore.collection('Videos').doc(data.firestore).collection('Acts')
      let find = metadata.doc(auth.currentUser.uid).get()
      let found = await find.then(doc => doc.exist)

      found ? (
        null
      ) : (
        metadata.doc(auth.currentUser.uid).set({
          liked: false,
          disliked: false,
          viewed: true,
          comments: [null],
          user: auth.currentUser.email
        })
      )
    };

      useEffect(() => {
        addAct()
        setCount(Count(data.firestore))
      }, [])
  return (
    <View style={styles.contain}>
      <View style={{ width: 365 }}>
        <Video
          ref={refrence}
          source={{ uri: videoPlay }}
          rate={1.0}
          volume={1.0}
          isMuted
          useNativeControls
          resizeMode="contain"
          isLooping
          style={{ borderRadius: 25, width: 350, height: 180, }}
        />
      </View>
      <View style={styles.descriptionContainer}>
        {!visibleStatusBar ? (
          <View>
            <View style={{ flexDirection: 'row', paddingLeft: 30, marginTop: 15 }}>
              <Text style={{ fontWeight: 'bold' }}>{data.title}</Text>
              <TouchableOpacity
                title="topNav"
                onPress={() => changeVisibilityStatusBar()}>
                <AntDesign
                  name="downcircle"
                  size={18}
                  color="black"
                  style={styles.dropDown}
                />
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 10, paddingLeft: 35 }}>
              1.7M views - 2years ago
            </Text>
            <Card
              style={{
                borderColor: 'black',
                width: 315,
                marginTop: 5,
                marginLeft: 25,
              }}>
              <View
                style={{ flexDirection: 'row', marginTop: 5, marginLeft: 3 }}>
                <View>
                  <Likes data={data.firestore} />
                </View>
                <View style={{ marginLeft: 32, marginTop: 3 }}>
                  <Dislikes data={data.firestore} />
                </View>
                <View style={{ marginLeft: 40 }}>
                  <FontAwesome5
                    name="share"
                    size={20}
                    color="black"
                    style={{ marginLeft: 11 }}
                  />
                  <Text style={{ paddingTop: 5 }}> Share </Text>
                </View>
                <View style={{ marginLeft: 32 }}>
                  <Entypo
                    name="save"
                    size={20}
                    color="black"
                    style={{ marginLeft: 8 }}
                  />
                  <Text style={{ paddingTop: 5 }}> Save </Text>
                </View>
              </View>
            </Card>
            <View
              style={{ marginTop: 50, marginLeft: 30, flexDirection: 'row' }}>
              <Avatar
                rounded
                source={{
                  uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                }}
                size="medium"
                onPress={() => navigation.navigate('Doctor')}
              />
              <Text style={{ paddingTop: 15, paddingLeft: 15 }} >
                {data.owner}
              </Text>
            </View>
          </View>
        ) : (
          //Hidden Description
          <View>
            <Card
              style={{
                width: 315,
                height: 300,
                marginLeft: 10,
                borderRadius: 20,
                backgroundColor: '#fff',
                marginTop: 15,
              }}>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    paddingLeft: 10,
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}>
                  Description:
                  <Text>
                    {data.description}
                  </Text>
                </Text>
                <TouchableOpacity title="topNav" onPress={() => changeVisibilityStatusBar()} >
                  <AntDesign name="downcircle" size={18} color="black" style={styles.dropDown} />
                </TouchableOpacity>
              </View>
              <Text style={{ fontSize: 10, paddingLeft: 50, paddingTop: 5 }}>
                1.7M views - {data.stamps}
              </Text>
              <Card
                style={{
                  borderColor: 'black',
                  width: 315,
                  marginTop: 5,
                  marginLeft: 25,
                }}>
                <View
                  style={{ flexDirection: 'row', marginTop: 5, marginLeft: 3 }}>
                  <View>
                    <Likes />
                  </View>
                  <View style={{ marginLeft: 32, marginTop: 3 }}>
                    <Dislikes />
                  </View>
                  <View style={{ marginLeft: 40 }}>
                    <FontAwesome5
                      name="share"
                      size={20}
                      color="black"
                      style={{ marginLeft: 11 }}
                    />
                    <Text style={{ paddingTop: 5 }}> Share </Text>
                  </View>
                  <View style={{ marginLeft: 32 }}>
                    <Entypo
                      name="save"
                      size={20}
                      color="black"
                      style={{ marginLeft: 8 }}
                    />
                    <Text style={{ paddingTop: 5 }}> Save </Text>
                  </View>
                </View>
              </Card>
              <View
                style={{ marginTop: 50, marginLeft: 30, flexDirection: 'row' }}>
                <Avatar
                  rounded
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                  }}
                  size="medium"
                />
                <Text>{userName}</Text>
              </View>
            </Card>
          </View>

        )}
      </View>
      {/* <Comments video={data.firestore} /> */}
      <ScrollView showsVerticalScrollIndicator={false}>
            <Card style={{ height: 120, width: 315, marginTop: 5, marginLeft: 10 }}>
                <Text style={{ paddingTop: 10, paddingLeft: 10 }}>Comments: {count}</Text>
                <TextInput placeholder="Comment" />
                <Card style={{
                    backgroundColor: 'silver', height: 100,
                    marginTop: 10
                }}>
                    <Text style={{ paddingLeft: 20, paddingTop: 10 }}>
                        <SafeAreaView style={{ color: 'red' }}>This person</SafeAreaView>: dfhbdnd dgnsgn gfsnxgb
                        dfdbxgb fgbgb fgnjdcg nchgn gnfg gbgf fgfxxfngn xgngfn hnhnhn.
                    </Text>
                </Card>
            </Card>
        </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  contain: {
    alignItems: 'center'
  },

  header: {
    paddingLeft: 30,
    paddingTop: 50
  },

  txtCards: {
    backgroundColor: 'lightgrey',
    width: 320,
    height: 50,
    borderRadius: 10,
    marginTop: 25,
  },

  strokeVid: {
    height: 180,
    width: 315,
    borderRadius: 30,
    marginTop: 50,
  },

  dropDown: {
    marginLeft: 110
  }
});

