import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Likes } from '../Components/Likes'
import { Dislikes } from '../Components/Dislikes'

export default function Strokes({ navigation }) {
  const [userName, setUserName] = useState('Rando123')
  const [videoPlay, setVideoPlay] = useState('http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4')
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const setVid = () => {
    setVideoPlay()
  }
  const [comments, setComments] = useState({ userName })
  const [visibleStatusBar, setVisibleStatusBar] = useState(false);
  const changeVisibilityStatusBar = () => {
    setVisibleStatusBar(!visibleStatusBar);
  };
  const changeStyleStatusBar = () => {
    const styleId = styleTypes.indexOf(styleStatusBar) + 1;
    if (styleId === styleTypes.length) {
      return setStyleStatusBar(styleTypes[0]);
    }
    return setStyleStatusBar(styleTypes[styleId]);
  };
  return (
    <View style={styles.contain}>
      <TouchableOpacity
        onPress={goBack}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <View style={{ width: 315, marginTop: 50, marginLeft: 30 }}>
        <Video
          source={{ uri: videoPlay }}
          useNativeControls
          resizeMode="contain"
          shouldPlay
          shouldRasterizeIOS
          isLooping
          style={{ borderRadius: 25 }}
        />
      </View>
      <View style={styles.descriptionContainer}>
        {!visibleStatusBar ? (
          <View>
            <View style={{ flexDirection: 'row', paddingLeft: 30, marginTop: 15 }}>
              <Text style={{ fontWeight: 'bold' }}>Stroke Emergency Video</Text>
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
              />
              <Text style={{ paddingTop: 15, paddingLeft: 15 }}>
                {userName}
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
                </Text>
                <TouchableOpacity title="topNav" onPress={() => changeVisibilityStatusBar()} >
                  <AntDesign name="downcircle" size={18} color="black" style={styles.dropDown} />
                </TouchableOpacity>
              </View>
              <Text style={{ fontSize: 10, paddingLeft: 50, paddingTop: 5 }}>
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
                />
                <Text style={{ paddingTop: 15, paddingLeft: 15 }}>
                  {userName}
                </Text>
              </View>
            </Card>
          </View>
        )(
          //Hidden Description
          <View>
            <Card
              style={{
                width: 315,
                height: 300,
                marginLeft: 40,
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
                </Text>
                <TouchableOpacity onPress={() => changeVisibilityStatusBar()}>
                  <AntDesign
                    name="closecircle"
                    size={18}
                    color="black"
                    style={{ marginLeft: 182 }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  marginTop: 10,
                  marginLeft: 12,
                  width: 255,
                }}>
                <Text>Stroke Emergency Video</Text>
                <Text style={{ fontSize: 10, color: 'gray' }}>
                  1 000 000 Views
                </Text>
              </View>
              <View
                style={{
                  marginTop: 10,
                  marginLeft: 12,
                  width: 255,
                }}>
                <Text style={{ paddingTop: 10 }}>
                  Lost your faith in ambulance response time? You can play
                  doctor and help save a life by just following the instructions
                  of this video. This video is accredited by the Department of
                  Health and Social Development, for critical emergencies only.
                </Text>
                <Text style={{ paddingTop: 10, fontWeight: 'bold' }}>
                  Thank you for your support.
                </Text>
              </View>
            </Card>
          </View>
        )}
      </View>
      <Card style={{ height: 40, width: 315, marginTop: 5, marginLeft: 10 }}>
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
