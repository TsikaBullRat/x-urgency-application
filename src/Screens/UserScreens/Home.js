import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
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
    Emergency = () =>{
      navigation.navigate("EmergencyContacts")
    };

  useEffect(() => {
    LoadSet(setLoad);
  }, []);

  // useEffect(() => {
  //   Exit()
  // }, [])

  return (

    <View style={styles.container}>

      <View
        style={{ alignItems: "flex-end", justifyContent: "space-between", }} >
        <Header Exit={Exit} Emergency={Emergency} />
      </View>

      <View style={{ width: 335, alignItems: 'center' }}>
        <Menu list={videos} setVids={setLoad} />
      </View>

      {/*---------------------- Video Scroll View--------------------*/}

      {/* <ScrollView style={{ height: 580, width: 335, }} vertical={true} showsVerticalScrollIndicator={false}> */}
        <Card style={styles.menu2}>
          <View>
            <VideoList videos={videos} VideoScreen={VideoScreen} />
          </View>
        </Card>
      {/* </ScrollView> */}
    </View>
  );
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
    shadowOffset: {},
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
