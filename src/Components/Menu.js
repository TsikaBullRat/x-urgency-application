import React from 'react';
import { Text, View, StyleSheet, Image, Pressable, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'
import { Card } from 'react-native-paper';
import { auth, LoadSet, firestore } from "../firebase";

export default function Menu({ list, setVids }) {

  const Sort = (match) => {
    LoadSet(setVids, match)
  }

  return (

    <View style={{alignItems:'center'}}>

      {/*----------------------Horizontal Menu----------------------*/}
      <ScrollView 
      style={{ width: 355 }} horizontal={true} showsHorizontalScrollIndicator={false}>

        <View style={{ width: 705, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
          <Pressable onPress={() => Sort("stroke")}>
            <Card style={styles.menuCard}>
              <Image style={styles.menuIcons} source={require('../images/human-brain.png')} />
              <Text style={{ fontFamily: 'Roboto', fontSize: 12, paddingTop: 8 }}> {`Stroke`} </Text>
            </Card>
          </Pressable>

          <Pressable onPress={() => Sort("heartattack")}>
            <Card style={styles.menuCard}>
              <Image style={styles.menuIcons} source={require('../images/heart-attack.png')} />
              <Text style={{ fontFamily: 'Roboto', fontSize: 12, paddingTop: 8 }}> {`Heart Attack`} </Text>
            </Card>
          </Pressable>

          <Pressable onPress={() => Sort("epilepsy")}>
            <Card style={styles.menuCard}>
              <Image style={styles.menuIcons} source={require('../images/fainting.png')} />
              <Text style={{ fontFamily: 'Roboto', fontSize: 12, paddingTop: 8 }}> {`Epilepsy`} </Text>
            </Card>
          </Pressable>

          <Pressable onPress={() => Sort("cpr")}>
            <Card style={styles.menuCard}>
              <Image style={styles.menuIcons} source={require('../images/cpr (1).png')} />
              <Text style={{ fontFamily: 'Roboto', fontSize: 12, paddingTop: 8 }}> {`CPR`} </Text>
            </Card>
          </Pressable>

          <Pressable onPress={() => Sort("bleeding")}>
            <Card style={styles.menuCard}>
              <Image style={styles.menuIcons} source={require('../images/abdominal-thrusts.png')} />
              <Text style={{ fontFamily: 'Roboto', fontSize: 12, paddingTop: 8 }}>{`Choking`} </Text>
            </Card>
          </Pressable>

          <Pressable onPress={() => Sort("choking")}>
            <Card style={styles.menuCard}>
              <Image style={styles.menuIcons} source={require('../images/BurnIcon.png')} />
              <Text style={{ fontFamily: 'Roboto', fontSize: 12, paddingTop: 8, }}> {`Burns`} </Text>
            </Card>
          </Pressable>

          <Pressable onPress={() => Sort("drowning")}>
            <Card style={styles.menuCard}>
              <Image style={styles.menuIcons} source={require('../images/bleedIcon.png')} />
              <Text style={{ fontFamily: 'Roboto', fontSize: 12, paddingTop: 8 }}> {`Bleeding`} </Text>
            </Card>
          </Pressable>

          <Pressable onPress={() => Sort("burn")}>
            <Card style={styles.menuCard}>
              <Image style={styles.menuIcons} source={require('../images/BurnIcon.png')} />
              <Text style={{ fontFamily: 'Roboto', fontSize: 12, paddingTop: 8, }}> {`Burns`} </Text>
            </Card>
          </Pressable>

        </View>

      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({

  menuIcons: {
    height: 30,
    width: 30,
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 2,
    ...Platform.select({
      web: {
        color: '#fff',
      }
    })
  },

  menuCard: {
    width: 65,
    height: 65,
    borderRadius: 5,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#f96056'
  },

})
