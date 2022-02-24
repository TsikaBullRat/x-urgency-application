import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import { Avatar, Badge } from 'react-native-elements';
import { Card } from 'react-native-paper';
import { auth, LoadSet, LogOut, firestore } from '../../firebase';
import { ProgressBar, VideoList, AlertNote } from '../../Components'
import { Feather } from '@expo/vector-icons';

export default function MedicalHome({ navigation, Exit, credentials }) {
  const [done, setDone] = useState(true);
  const [display, setDisplayModal] = useState(false)
  const [videos, setLoad] = useState(null),
    VideoScreen = (data) => {
      navigation.navigate("PlayVideo", { data });
    },
    Logout = () => {
      LogOut()
      Exit()
    },
    VideoNotifier = () => {
      let today = new Date()
      if (today === auth.currentUser.metadata.creationTime) {
        setDisplayModal(true)
      }
    };

  const [image, setImage] = useState()
  const [initial, setInitial] = useState()
  const getProfile = async () => {
    let name
    setImage(auth.currentUser.photoURL)
    name = auth.currentUser.displayName
    setInitial(name.substring(0, 1))
  }

  useEffect(() => {
    getProfile()
  }, [])

  const video = React.useRef(
    "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
  );

  const [status, setStatus] = useState({}),
    [loading, setLoading] = useState(null);
  const link = "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4";

  const setDoctor = () => {
    firestore.collection("Users").doc(auth.currentUser.uid).collection("cred").doc(auth.currentUser.uid).get().then(doc => doc.exists) ? (
      null
    ) : (
      firestore.collection("Users").doc(auth.currentUser.uid).collection("cred").doc(auth.currentUser.uid).set(credentials)
    )
  }

  useEffect(() => {
    LoadSet(setLoad);
  }, []);

  useEffect(() => {
    VideoNotifier()
  }, [])

  return (

    <View style={styles.contain}>

      <AlertNote modalVisible={display} setModalVisible={setDisplayModal} msg="Hey doc why not add your first video" />

      {/*---------------------------Header--------------------------*/}

      <View style={{ flexDirection: "row" }}>
        <View style={styles.header}>
          <Text
            style={{
              fontSize: 36,
              paddingLeft: 30,
              color: "turquoise",
              textShadowColor: "grey",
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 1,
            }}
            onPress={Logout}>
            Dr. {auth.currentUser.displayName.split(" ")[1]}
          </Text>

          <Text
            style={{
              fontSize: 36,
              paddingLeft: 30,
              color: "red",
              textShadowColor: "grey",
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 1,
            }}
          > In Da House
          </Text>

        </View>
        <View style={{ marginTop: 50, marginLeft: 10 }}>
          <TouchableOpacity onPress={Logout}>
            {image ? (<Avatar style={styles.avatar} rounded source={{ uri: image, }} size="large" />

            ) : (

              <View style={styles.temp}>
                <Text style={styles.temp_text}> {initial} </Text>
              </View>
            )}

          </TouchableOpacity>
          <Pressable onPress={() => { navigation.navigate("Update") }} >
            <Feather name="edit" size={24} color="#F47066" style={{ left: 120, top: -20 }} />
          </Pressable>
        </View>
      </View>

      {/*---------------------- Video Scroll View--------------------*/}

      {loading ? <ProgressBar status={loading} /> : null}

      <ScrollView style={{ height: 580, width: 335, }}

      vertical={true} showsVerticalScrollIndicator={false}>

      <Card style={styles.menu2}>
        <View>
          <VideoList videos={videos} VideoScreen={VideoScreen} />
        </View>
      </Card>

      </ScrollView>
      <TouchableOpacity
        style={styles.btnUpload} onPress={() => { navigation.navigate("Upload") }} >
        <Text style={{ color: "#fff", fontSize: 26 }}>+</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: 'column',
    paddingTop: 50,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginTop: 55,
    borderBottomWidth: 3,
    borderColor: 'turquoise',
    shadowColor: 'grey',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    elevation: 1,
  },

  menu2: {
    width: 355,
    height: 550,
    marginLeft: 10,
    marginTop: 50,
    borderRadius: 15,
  },

  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
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
    // flex: 1,
    width: 70,
    height: 70,
    borderRadius: 50,
    marginTop: 80,
    backgroundColor: 'turquoise',
    textAlign: 'center',
    justifyContent: 'center'
  },

  temp_text: {
    fontSize: 40,
    color: '#fff',
  }

});