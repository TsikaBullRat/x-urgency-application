/**
    * @description      : 
    * @author           : MLab
    * @group            : 
    * @created          : 07/10/2021 - 10:05:53
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 07/10/2021
    * - Author          : MLab
    * - Modification    : 
**/
/**
    * @description      : 
    * @author           : MLab
    * @group            : 
    * @created          : 05/10/2021 - 14:22:53
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 05/10/2021
    * - Author          : MLab
    * - Modification    : 
**/
import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import { Video, AVPlaybackStatus } from 'expo-av';


export default function Strokes({navigation}) {

  const [userName, setUserName] = useState('Rando123')
  const [videoPlay, setVideoPlay] = useState('http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4')

  const video = React.useRef(null); 
  const [status, setStatus] = React.useState({}); 

  const setVid = () => {
    setVideoPlay()
  } 
    
    const [comments, setComments] = useState({userName})

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
    <View style= {styles.contain}> 

<<<<<<< HEAD
      <TouchableOpacity onPress= {() => {navigation.navigate('Home')}}
=======
      <TouchableOpacity
      onPress={() => { navigation.goBack(null)}}
      
>>>>>>> dff0c9ab768f542a73841180afcb87944f317a94
      >
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>


      <View style={{ width: 315, marginTop: 50, marginLeft: 30 }}>
        
        <Video
          ref={video}
          source={{ uri: videoPlay }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
          style={{ borderRadius: 25 }}
        />

      </View>


      <View style={styles.descriptionContainer}>
        {!visibleStatusBar ? (
          <View>

            <View style={{ flexDirection: 'row', paddingLeft: 50, marginTop: 10 }}>
              
              <Text style={{ fontWeight: 'bold' }}>
                Stroke Emergency Video
              </Text>

              <TouchableOpacity title="topNav" onPress={() => changeVisibilityStatusBar()} >
                <AntDesign name="downcircle" size={18} color="black" style={styles.dropDown} />
              </TouchableOpacity>

            </View>


            <Text style={{ fontSize: 10, paddingLeft: 50, paddingTop: 5 }}>
              1.7M views - 2years ago
            </Text>

            <Card style={{ borderColor: 'black', width: 315, marginTop: 20, marginLeft: 30 }}>
              
              <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 3 }}>
                <View style={{ marginLeft: 10 }}>
                  
                  <Entypo name="thumbs-up" size={24} color="black" style={{ marginLeft: 10 }} />                 
                  <Text style={{ marginTop: 5 }}>  16k  </Text>

                </View>

                <View style={{ marginLeft: 45 }}>
                  <Entypo name="thumbs-down" size={24} color="black" style={{ marginTop: 3, marginLeft: 5 }} />
                  <Text style={{ paddingTop: 2 }}>  16  </Text>
                </View>
                <View style={{ marginLeft: 40 }}>
                  <FontAwesome5 name="share" size={24} color="black"
                    style={{ marginLeft: 13 }} />
                  <Text style={{ paddingTop: 5 }}>  Share  </Text>
                </View>
                <View style={{ marginLeft: 40 }}>
                  <Entypo name="save" size={24} color="black" style={{ marginLeft: 10 }} />
                  <Text style={{ paddingTop: 5 }}>  Save  </Text>
                </View>
              </View>
            </Card>
            <View style={{ marginTop: 50, marginLeft: 30, flexDirection: 'row' }}>
              <Avatar rounded
                source={{
                  uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                }}
                size="medium"
              />
              <Text style={{ paddingTop: 15, paddingLeft: 15 }}>{userName}</Text>
            </View>
          </View>
        )
          : //Hidden Description
      
         <View>       

            <Card style={{width: 315, height: 300, marginLeft: 28,
                          borderRadius: 20,
                          backgroundColor: '#fff',
                          marginTop: 20
            }}>  

              <View style={{ flexDirection: 'row' }}>
                
                <Text
                  style={{
                    paddingLeft: 10,
                    paddingTop: 15,
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}>                 
                  Description:
                </Text>

                <TouchableOpacity onPress={() => changeVisibilityStatusBar()}>
                  
                  <AntDesign name="closecircle" size={18} color="black" style={{ marginLeft: 180, marginTop: 15 }} />

                </TouchableOpacity>

              </View>


              <View
                style={{
                  marginTop: 10,
                  marginLeft: 12,
                  width: 255,
                }}>

                <Text >
                  Stroke Emergency Video
                </Text>

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
                  Lost your faith in ambulance response time?
                  You can play doctor and help save a life by just
                  following the instructions of this video.
                  This video is accredited by the Department of Health
                  and Social Development, for critical emergencies only.
                </Text>

                <Text 
                  style={{ paddingTop: 10, fontWeight: 'bold' }}>
                  Thank you for your support.
                </Text>

              </View>
            </Card>


          </View>
        }
      </View>
      
      <Card style={{ height: 40, width: 315, marginTop: 30, marginLeft: 30 }}>
        
        <Text style={{ paddingTop: 10, paddingLeft: 10 }}>Comments - 498</Text>

        {/*userName Array*/}
        <Text>{userName}</Text>

      </Card>
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    paddingLeft: 30,
    paddingTop: 50
  },
  txtSearch: {
    width: 320,
    height: 50,
    borderRadius: 10,
    outline: 'none',
    backgroundColor: 'lightgrey',
    paddingLeft: 10,
  },
  txtCards: {
    backgroundColor: 'lightgrey',
    width: 320,
    height: 50,
    borderRadius: 10,
    marginLeft: 28,
    marginTop: 25,
  },
  strokeVid: {
    height: 180,
    width: 315,
    borderRadius: 30,
    marginTop: 50,
    marginLeft: 30
  },
  dropDown: {
    marginLeft: 100
  }
});

