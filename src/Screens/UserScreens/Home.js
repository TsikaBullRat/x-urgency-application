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
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  //ScrollView,
  Text,
  TouchableOpacity,
  Image,
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
        <View style={{ width: 295, alignItems: "center" }} key={vid.id}>
          <Card
            style={{
              marginTop: 15,
              width: 335,
              height: 245,
              alignItems: "center",             
              backgroundColor: "#FAFAFA",
            }}
          >
            <TouchableOpacity style={{ width: 335 }} onPress={()=>VideoScreen(vid)}>
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

            <View style={{ justifyContent:'space-evenly' }}>
              <Text style={styles.vidTitle}>{vid.title}</Text>
              <Text style={styles.tag}>{vid.owner}</Text>

              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
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
    <View style={{ height: 0.5, width: "100%", backgroundColor: "#c8c8c8" }} />
  );
};

export default function Home({ navigation, route, setData }) {
  const [videos, setLoad] = useState(null),
    ref = useRef(null),
    VideoScreen = (data) => {
      setData(data);
      navigation.navigate("PlayVideo");
    },
    Logout = () => {
      auth.signOut();
    };

  useEffect(() => {
    LoadSet(setLoad);
    console.log(videos);
  }, []);

  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <View style={{ width: 295 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <Header />
          <TouchableOpacity>
            <Image
              source={require("../../images/logOut.png")}
              style={styles.logoutIMG}
            />
          </TouchableOpacity>
        </View>

        <Menu list={videos} setVids={setLoad} />
        {/*---------------------- Video Scroll View--------------------*/}
        {/* <ScrollView style={{height:555}} 
      vertical={true} showsVerticalScrollIndicator={false}> */}
        <Card style={styles.menu2}>
          <View>
            <VideoList videos={videos} VideoScreen={VideoScreen} />
          </View>
        </Card>
        {/* </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },

  logoutIMG: {
    width: 15,
    height: 15,
    marginTop: -80,
    marginLeft: -20,
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
    paddingVertical:2,
    fontSize: 12,
  },
});
