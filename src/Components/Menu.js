import React, {useState} from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
<<<<<<< HEAD
import { Card } from 'react-native-paper';
import { LoadSet } from "../firebase";

export default function Menu({ list, setVids }) {

  const Sort = (match) => {
    LoadSet(setVids, match)
  }
=======
import { Card } from 'react-native-paper'
import { auth, LoadSet, firestore } from '../firebase'

export default function Menu ({ list, setVids }) {
  const categories = [
    'Stroke',
    'Cardiac',
    'Epilepsy',
    'CPR',
    'Choking',
    'Drowning',
    'Bleeding',
    'Burns'
  ]
  const { selectedCategory, setSelectedCategory } = useState(0)
>>>>>>> 36f8773e978df9701dfdd2050ef20a2d74cd394d

  return (
    <View>
      {/*----------------------Horizontal Menu----------------------*/}
      <ScrollView
<<<<<<< HEAD

        style={{ width: 350 }} horizontal={true} showsHorizontalScrollIndicator={false}>

        <View style={{ width: 705, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
          <Pressable onPress={() => Sort("stroke")}>
            <Card style={styles.menuCard}>
              <Image style={styles.menuIcons} source={require('../images/StrokeIcon.png')} />
              <Text style={{ fontFamily: 'Roboto', fontSize: 12, paddingTop: 8 }}> {`Stroke`} </Text>
            </Card>
          </Pressable>

          <Pressable onPress={() => Sort("heartattack")}>
            <Card style={styles.menuCard}>
              <Image style={styles.menuIcons} source={require('../images/Heart-AttackIcon.png')} />
              <Text style={{ fontFamily: 'Roboto', fontSize: 12, paddingTop: 8 }}> {`Heart Attack`} </Text>
            </Card>
          </Pressable>

          <Pressable onPress={() => Sort("epilepsy")}>
            <Card style={styles.menuCard}>
              <Image style={styles.menuIcons} source={require('../images/EpilepsyIcon.png')} />
              <Text style={{ fontFamily: 'Roboto', fontSize: 12, paddingTop: 8 }}> {`Epilepsy`} </Text>
            </Card>
          </Pressable>

          <Pressable onPress={() => Sort("cpr")}>
            <Card style={styles.menuCard}>
              <Image style={styles.menuIcons} source={require('../images/cprIcon.png')} />
              <Text style={{ fontFamily: 'Roboto', fontSize: 12, paddingTop: 8 }}> {`CPR`} </Text>
            </Card>
          </Pressable>

          <Pressable onPress={() => Sort("bleeding")}>
            <Card style={styles.menuCard}>
              <Image style={styles.menuIcons} source={require('../images/chokeIcon.png')} />
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

=======
        style={{
          width: 350
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            width: 695,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            left: 3
          }}
        >
          {categories.map((emergency, index) => (
            <TouchableOpacity style={{height:30, width:75, borderRadius:20, backgroundColor:'#f47066', alignItems:'center', justifyContent:'center'}}
                              key={index} activeOpacity={0.8}
                               //onPress={() => {setSelectedCategory(index)}}
                               >
              <View>
                <Text style={{fontSize:16, 
                               color: '#fff'
                               //color: selectedCategory == index ? 'f47066' : '#' 
                              }}>
                  {emergency}
                </Text>

                {selectedCategory == index && (
                  <View style={{height:3, width:55, backgroundColor: '#47066',
                                marginTop:2}}>
                  
                  </View>
                )}
              </View>
            </TouchableOpacity>
          ))}
>>>>>>> 36f8773e978df9701dfdd2050ef20a2d74cd394d
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
        color: '#fff'
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
  }
})
