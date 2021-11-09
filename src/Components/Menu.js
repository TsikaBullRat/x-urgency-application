/**
    * @description      : 
    * @author           : TLeeuw
    * @group            : 
    * @created          : 03/11/2021 - 12:24:16
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 03/11/2021
    * - Author          : TLeeuw
    * - Modification    : 
**/
import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity, } from 'react-native';
import { Card } from 'react-native-paper';
import Stroke from '../images/stokeIc.png';
import strVid from '../images/stroke-vid.jpg';
import heartVid from '../images/heart-vid.jpg';
import epilepsyVid from '../images/epilepsy-vid.jpg';
import cpr_vid2 from '../images/cpr_vid2.jpg';
import drowning from '../images/drowning-vid.jpg';
import burn from '../images/burns-vid.jpg';
import choke from '../images/choking-vid.jpg';
import bleed from '../images/bleeding-vid.webp';
import heart from '../images/heartAttack.png';
import bleeding from '../images/bleed.png'
import epilepsy from '../images/Epilepsy.png'
import cpr from '../images/cprIcon.png'
import choking from '../images/choke.png'
import drown from '../images/drown.png'
import burns from '../images/burn.png'

export default function Header({ navigate }) {

  return (
    <View style={styles.contain}>
      {/*----------------------Horizontal Menu----------------------*/}
      <Card style={styles.menu}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity >
            <View>
              <Card style={{
                width: 50, height: 70, borderRadius: 15, marginLeft: 18, alignItems: 'center', textAlign: 'center', marginTop: 7
              }}
                onPress={navigate}
              >
                <Image style={styles.strokeMenu} source={Stroke} />
                <Text style={{ fontSize: 12 }}>Stroke</Text>
              </Card>
            </View>
          </TouchableOpacity>
          <View>
            <Card style={{ width: 50, height: 70, marginLeft: 40, borderRadius: 15, alignItems: 'center', marginTop: 7 }}>
              <Image style={styles.heartMenu} source={heart} />
              <Text style={{ paddingLeft: 10, fontSize: 12 }}>Heart-Attack</Text>
            </Card>
          </View>
          <View>
            <Card style={{ width: 50, height: 70, marginLeft: 40, borderRadius: 15, alignItems: 'center', textAlign: 'center', marginTop: 7 }}>
              <Image style={styles.epilepsyMenu} source={epilepsy} />
              <Text style={{ fontSize: 12 }}>Epilepsy</Text>
            </Card>
          </View>
          <View>
            <Card style={{ width: 50, height: 70, marginLeft: 40, borderRadius: 15, alignItems: 'center', textAlign: 'center', marginTop: 7 }}>
              <Image style={styles.cprMenu} source={cpr} />
              <Text style={{ paddingTop: 8, fontSize: 12 }}>CPR</Text>
            </Card>
          </View>
          <View>
            <Card style={{ width: 50, height: 70, marginLeft: 33, borderRadius: 15, alignItems: 'center', textAlign: 'center', marginTop: 7 }}>
              <Image style={styles.bloodMenu} source={bleeding} />
            </Card>
            <Text style={{ paddingLeft: 28, fontSize: 12 }}>Bleeding</Text>
          </View>
          <View>
            <Card style={{ width: 50, height: 70, marginLeft: 33, borderRadius: 15, alignItems: 'center', textAlign: 'center', marginTop: 7 }}>
              <Image style={styles.conImg} source={choking} />
              <Text style={{ paddingLeft: 5, paddingTop: 8, fontSize: 12 }}>Choking</Text>
            </Card>
          </View>
          <View>
            <Card style={{ width: 50, height: 70, marginLeft: 33, borderRadius: 15, alignItems: 'center', textAlign: 'center', marginTop: 7 }}>
              <Image style={styles.drown} source={drown} />
              <Text style={{ paddingLeft: 7, paddingTop: 3, fontSize: 12 }}>Drowning</Text>
            </Card>
          </View>
          <TouchableOpacity>
            <Card style={{ width: 50, height: 70, marginLeft: 33, borderRadius: 15, alignItems: 'center', alignText: 'center', marginTop: 7 }}>
              <Image style={styles.burn} source={burns} />
              <Text style={{ paddingLeft: 5, paddingTop: 8, fontSize: 12 }}>Burns</Text>
            </Card>
          </TouchableOpacity>
        </ScrollView>
      </Card>

    </View>
  )
}
const styles = StyleSheet.create({
  contain: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },

  menu: {
    width: 355,
    marginTop: 20,
    borderRadius: 15,
  },

  strokeMenu: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginTop: 10,
    color: '#fff',
  },

  heartMenu: {
    height: 35,
    width: 35,
    borderRadius: 15,
    marginTop: 5,
    marginLeft: 10
  },

  epilepsyMenu: {
    height: 50,
    width: 50,
    borderRadius: 15,
    marginLeft: 6
  },

  cprMenu: {
    height: 35,
    width: 35,
    borderRadius: 15,
    marginLeft: 5,
    marginTop: 8
  },

  bloodMenu: {
    height: 35,
    width: 35,
    borderRadius: 15,
    marginTop: 8
  },

  conImg: {
    height: 35,
    width: 35,
    borderRadius: 15,
    marginLeft: 15,
    marginTop: 8
  },

  drown: {
    height: 40,
    width: 40,
    borderRadius: 15,
    marginLeft: 15,
    marginTop: 8,
  },

  burn: {
    height: 35,
    width: 35,
    borderRadius: 15,
    marginLeft: 5,
    marginTop: 8
  },
})
