import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={{ height: 350, width: '95%' }}
          source={require('../../images/WatchLOGO.png')}
        />
      </View>

      <View style={styles.header}>
        <Text
          style={{
            fontSize: 34,
            fontWeight: 'bold',
            fontFamily: 'arial',
            textAlign: 'center',
            color: '#F47066'
          }}
        >{`Watch and Learn`}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.txtContent}>{`Learn basic first-aid skills`}</Text>
        <Text style={styles.txtContent}>{`by watching short`}</Text>
        <Text
          style={styles.txtContent}
        >{`videos of everyday first-aid scenarios`}</Text>
      </View>

      {/**------Screen Indicators-----------Screen Indicators----------- */}
      <View
        style={{
          width: 360,
          alignItems: 'center',
          marginTop: 80
        }}>
        <View
          style={{
            width: 280,
            flexDirection: 'row',
            justifyContent: 'space-evenly'
          }}
        >
          <Text style={{ fontSize: 22, color: '#F47066' }}>{`o`}</Text>
          <Text style={{ fontSize: 22, color: '#F47066' }}>{`o`}</Text>
          <Text style={{ fontSize: 22, color: '#F47066' }}>{`o`}</Text>
        </View>
      </View>

      {/**------btnNext-----------btnNext--------- */}
      <View style={{ width: 360, marginVertical: 25, alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('FollowMore')}
          style={styles.btnNext}
        >
          <Text
            style={{
              fontWeight: 'bold',
              color: '#fff',
              paddingLeft: 25
            }}
          >
            {`NEXT`}
          </Text>

          <View
            style={{
              left: 40
            }}
          >
            <AntDesign name='arrowright' size={25} color='#fff' />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  logo: {
    width: 360,
    top: -15,
    left: 10,
    right: 10
  },

  header: {
    width: 360,
    top: -50
  },

  content: {
    width: 360,
    alignItems: 'center',
    justifyContent: 'center'
  },

  txtContent: {
    fontSize: 19,
    fontFamily: 'arial'
  },

  btnNext: {
    height: 50,
    width: '60%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f47066'
  }
})
