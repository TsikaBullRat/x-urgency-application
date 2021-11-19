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
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import { Video } from 'expo-av';
import { Likes } from '../../Functions/Likes'
import { Dislikes } from '../../Functions/Dislikes'

export default function Strokes({ navigation, data }) {
  const [userName, setUserName] = useState('Rando123')
  const [videoPlay, setVideoPlay] = useState(data.url)
  const [videoVisible, setVideoVisible] = useState(true);
  const setVid = () => {
    setVideoPlay()
  }

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
    };

    useEffect(()=>{
      console.log(data.stamp)
    }, [])
  return (
    <View style={styles.contain}>
      <View style={{ width: 365 }}>
        <Video
          source={{ uri: videoPlay }}
          rate={1.0}
          volume={1.0}
          isMuted
          useNativeControls
          resizeMode="contain"
          isLooping
          style={{ borderRadius: 25 }}
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
              onPress={()=>navigation.navigate('Doctor')}
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
              </View>
            </Card>
          </View>

        )}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}
      >
        <Card style={{ height: 120, width: 315, marginTop: 5, marginLeft: 10 }}>
          <Text style={{ paddingTop: 10, paddingLeft: 10 }}>Comments: 498</Text>
          {/*userName Array*/}
          <Card style={{
            backgroundColor: 'silver', height: 100,
            marginTop: 10
          }}>
            <Text style={{ paddingLeft: 20, paddingTop: 10 }}>
              <SafeAreaView style={{ color: 'red' }}>{userName}</SafeAreaView>: dfhbdnd dgnsgn gfsnxgb
              dfdbxgb fgbgb fgnjdcg nchgn gnfg gbgf fgfxxfngn xgngfn hnhnhn.
            </Text>
          </Card>
          <Card style={{
            backgroundColor: 'silver', height: 100,
            marginTop: 10
          }}>
            <Text style={{ paddingLeft: 20, paddingTop: 10 }}>
              <SafeAreaView style={{ color: 'red' }}>{userName}</SafeAreaView>: dfhbdnd dgnsgn gfsnxgb
              dfdbxgb fgbgb fgnjdcg nchgn gnfg gbgf fgfxxfngn xgngfn hnhnhn.
            </Text>
          </Card>
          <Card style={{
            backgroundColor: 'silver', height: 100,
            marginTop: 10
          }}>
            <Text style={{ paddingLeft: 20, paddingTop: 10 }}>
              <SafeAreaView style={{ color: 'red' }}>{userName}</SafeAreaView>: dfhbdnd dgnsgn gfsnxgb
              dfdbxgb fgbgb fgnjdcg nchgn gnfg gbgf fgfxxfngn xgngfn hnhnhn.
            </Text>
          </Card>
          <Card style={{
            backgroundColor: 'silver', height: 100,
            marginTop: 10
          }}>
            <Text style={{ paddingLeft: 20, paddingTop: 10 }}>
              <SafeAreaView style={{ color: 'red' }}>{userName}</SafeAreaView>: dfhbdnd dgnsgn gfsnxgb
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

