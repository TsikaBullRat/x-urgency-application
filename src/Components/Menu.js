import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, Pressable, Platform } from 'react-native';
import { Card } from 'react-native-paper';
import { auth, LoadSet, firestore } from "../firebase";

export default function Menu({ list, setVids }) {

  const Sort = (match) => { 
    LoadSet(setVids, match)
  }

  return (

    <View style={styles.contain}>

      {/*----------------------Horizontal Menu----------------------*/}

      <ScrollView

        style={{ width: 350 }} horizontal={true} showsHorizontalScrollIndicator={false}>

        <View style={{ width: 705, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
          <Pressable onPress={() => Sort("stroke")}>
            <Card style={styles.menuCard}>
              <Image style={styles.menuIcons} source={require('../images/StrokeIcon.png')} />
              <Text style={{ fontSize: 12, paddingTop: 8 }}> {`Stroke`} </Text>
            </Card>
          </Pressable>

          <Pressable onPress={() => Sort("heartattack")}>
            <Card style={styles.menuCard}>
              <Image style={styles.menuIcons} source={require('../images/Heart-AttackIcon.png')} />
              <Text style={{ fontSize: 12, }}> {`Heart Attack`} </Text>
            </Card>
          </Pressable>

          <Pressable onPress={() => Sort("epilepsy")}>
            <Card style={styles.menuCard}>
              <Image style={styles.menuIcons} source={require('../images/EpilepsyIcon.png')} />
              <Text style={{ fontSize: 12, paddingTop: 8 }}> {`Epilepsy`} </Text>
            </Card>
          </Pressable>

          <Pressable onPress={() => Sort("cpr")}>
              <Card style={styles.menuCard}>
                <Image style={styles.menuIcons} source={require('../images/cprIcon.png')} />
                <Text style={{ fontSize: 12, paddingTop:8 }}> {`CPR`} </Text>
                </Card>
          </Pressable>

          <Pressable onPress={() => Sort("bleeding")}>
            <Card style={styles.menuCard}>
              <Image style={styles.menuIcons} source={require('../images/chokeIcon.png')} />
              <Text style={{ fontSize: 12, paddingTop: 8 }}>{`Choking`} </Text>
            </Card>
          </Pressable>

          <Pressable onPress={() => Sort("choking")}>
            <Card style={styles.menuCard}>
              <Image style={styles.menuIcons} source={require('../images/BurnIcon.png')} />
              <Text style={{ fontSize: 12, paddingTop: 8, }}> {`Burns`} </Text>
            </Card>
          </Pressable>

          <Pressable onPress={() => Sort("drowning")}>
            <Card style={styles.menuCard}>
              <Image style={styles.menuIcons} source={require('../images/bleedIcon.png')} />
              <Text style={{ fontSize: 12, paddingTop: 8 }}> {`Bleeding`} </Text>
            </Card>
          </Pressable>

          <Pressable onPress={() => Sort("burn")}>
            <Card style={styles.menuCard}>
              <Image style={styles.menuIcons} source={require('../images/BurnIcon.png')} />
              <Text style={{ fontSize: 12, paddingTop: 8, }}> {`Burns`} </Text>
            </Card>
          </Pressable>

        </View>

      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  contain: {
    width: 375,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },

  menu: {
    width: 300,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 15,
  },

  menuIcons: {
    height: 30,
    width: 30,
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 2,
    ...Platform.select({
      web:{
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
