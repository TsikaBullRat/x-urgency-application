import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image, ScrollView
} from "react-native";
import { Video } from "expo-av";
import { Card } from "react-native-paper";
import { auth, LoadSet } from "../../firebase";
import Header from "../../Components/Header";
import Menu from "../../Components/Menu";

const VideoList = ({ videos, VideoScreen }) => {
  const [status, setStatus] = useState({});
  const ref = useRef(null);

  return videos
    ? videos.map((vid) => (
      <View style={{ width: 335, alignItems: "center" }} key={vid.id}>
        <Card
          style={{
            marginTop: 15,
            width: 335,
            height: 245,
            alignItems: "center",
            backgroundColor: "#FAFAFA",
          }}
        >
          <TouchableOpacity style={{ width: 335 }} onPress={() => VideoScreen(vid)}>
            <Video
              ref={ref}
              source={{ uri: vid.url }}
              resizeMode="stretch"
              isLooping
              onPlaybackStatusUpdate={(status) => setStatus(() => status)}
              style={{
                width: "100%",
                height: 165,
                marginTop: 5,
                alignSelf: "center",
              }}
            />
          </TouchableOpacity>

          <View style={{ justifyContent: 'space-evenly' }}>
            <Text style={styles.vidTitle}>{vid.title}</Text>
            <Text style={styles.tag}>{vid.owner}</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.tag}>{vid.views}Views</Text>
              <Text style={styles.tag}>{vid.stamp}</Text>
            </View>
          </View>
        </Card>

        <ItemSeperatorView />
      </View>
    ))
    : null;
};

const ItemSeperatorView = () => {
  return (
    <View style={{ height: 0.5, width: 400, backgroundColor: "#c8c8c8" }} />
  );
};

export default function Home({ navigation, setMatch }) {
  const [videos, setLoad] = useState(null),
    ref = useRef(null),
    VideoScreen = (data) => {
      let match = data.match
      let owner = data.owner
      setMatch({ match, owner })
      navigation.navigate("PlayVideo", { data });
    },
    Logout = () => {
      auth.signOut();
    };

  useEffect(() => {
    LoadSet(setLoad);
  }, []);

  //const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
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

        <Menu list={videos} setVids={setLoad} />
        {/*---------------------- Video Scroll View--------------------*/}
        <ScrollView style={{
          height: 580, width: 335, //alignItems:'center'
        }}
          vertical={true} showsVerticalScrollIndicator={false}>
          <Card style={styles.menu2}>
            <View>
              <VideoList videos={videos} VideoScreen={VideoScreen} />
            </View>
          </Card>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 840,
    backgroundColor: '#fff',
  },

  logoutIMG: {
    width: 15,
    height: 15,
    marginTop: 25
  },

  header: {
    fontWeight: "medium",
    fontSize: 18,
    color: "#F96056",
    paddingTop: 20,
    borderBottomWidth: 3,
    borderColor: "turquoise",
    shadowColor: "grey",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    elevation: 1,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderBottomWidth: 3,
    borderColor: "turquoise",
    shadowColor: "grey",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    elevation: 1,
  },
  txtCards: {
    backgroundColor: 'lightgrey',
    opacity: 0.8,
    width: 320,
    height: 50,
    borderRadius: 10,
    marginLeft: 28,
    marginTop: 25,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: 'turquoise',
    shadowColor: 'blue',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 1,
  },

  menu: {
    flexDirection: "row",
    width: 320,
    marginTop: 20,
    borderRadius: 15,
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
})
