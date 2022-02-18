import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity, Image, Text } from "react-native";
import { Card } from "react-native-paper";
import { auth, LoadSet, firestore } from "../../firebase";
import Header from "../../Components/Header";
import Menu from "../../Components/Menu";
import { VideoList } from "../../Components/VideoList";

export default function Home({ navigation, Exit }) {

  const [status, setStatus] = useState({});
  const [videos, setLoad] = useState(null),
    ref = useRef(null),
    VideoScreen = (data) => {
      navigation.navigate("PlayVideo", { data });
    },
    FirstTimeUser = async () =>{
      await firestore.collection("Users").doc(auth.currentUser.uid).get().then(doc=>doc.exists)?(
        null
      ):(
     firestore.collection("Users").doc(auth.currentUser.uid).set({
       username: auth.currentUser.displayName,
       doctor: false,
       email: auth.currentUser.email,
       cred: null
     })
     )
    },
    Logout = () => {
      auth.signOut();
    };

  useEffect(() => {
    LoadSet(setLoad);
  }, []);

  return (
      <View style={{ width: 335 }}>
        <View
          style={{
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={Logout}>
            <Image
              source={require("../../images/logOut.png")}
              style={styles.logoutIMG}
            />
          </TouchableOpacity>
          <Header />
        </View>
      <View style={{ top: 5 }}>
        <TouchableOpacity onPress={() => navigation.navigate('EmergencyContacts')}>

          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../../../img/siren.jpg')}
              style={{ width: 30, height: 35 }} />

            <View style={{ paddingHorizontal: 10 }}>
              <Text style={{ fontSize: 12, fontFamily: 'Arial' }}>Call</Text>
              <Text style={{ fontSize: 12, fontFamily: 'Arial' }}>Now</Text>
            </View>

          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{ alignItems: "flex-end", justifyContent: "space-between", }} >
        <Header Exit={Exit} Emergency={Emergency} />
      </View>

      <View style={{ width: 335, alignItems: 'center' }}>
        <Menu list={videos} setVids={setLoad} />
      </View>

      <View style={{ width: 335, alignItems: "center", marginTop: 20, flexDirection: 'row', justifyContent: "space-between", }}>
        <Text style={{ fontFamily: 'Roboto' }}> {`Most Viewed`} </Text>

        <TouchableOpacity onPress={() => navigation.navigate('ViewMap')}>
          <Text style={{ fontFamily: 'Roboto', color: '#F96056' }}>{`Medical Facilities`} </Text>
        </TouchableOpacity>
      </View>

      {/*---------------------- Video Scroll View--------------------*/}

      <ScrollView style={{ height: 580, width: 335, }} vertical={true} showsVerticalScrollIndicator={false}>
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
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  logoutIMG: {
    width: 15,
    height: 15,
    marginTop: 25
  },

  header: {
    fontWeight: "200",
    fontSize: 18,
    color: "#F96056",
    paddingTop: 20,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },

  menu2: {
    width: 320,
    height: 520,
    borderRadius: 15,
    shadowOpacity: 0.8,
    shadowRadius: 3.84,
    elevation: 5,
  },

  categoryListText: {
    paddingLeft: 15,
    fontSize: 17,
    fontWeight: "bold",
  },

  vidTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },

  tag: {
    paddingVertical: 2,
    fontSize: 12,
  },

});
