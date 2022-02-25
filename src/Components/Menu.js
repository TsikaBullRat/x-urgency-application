import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Card } from 'react-native-paper'
import { auth, LoadSet, firestore } from '../firebase'

export default function Menu ({ list, setVids }) {
  const categories = [
    'Stroke',
    'Heart-Attack',
    'Epilepsy',
    'CPR',
    'Choking',
    'Drowning',
    'Bleeding',
    'Burns'
  ]
  const { selectedCategory, setSelectedCategory } = React.useState(0)

  return (
    <View>
      {/*----------------------Horizontal Menu----------------------*/}
      <ScrollView
        style={{
          width: 355
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            width: 676,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            left: 2
          }}
        >
          {categories.map((emergency, index) => (
            <TouchableOpacity key={index} activeOpacity={0.8}
                              onPress={() => setSelectedCategory(index)}>
              <View>
                <Text style={{fontSize:20, 
                              color: selectedCategory == index ? 'f47066' : 'black' }}>
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
