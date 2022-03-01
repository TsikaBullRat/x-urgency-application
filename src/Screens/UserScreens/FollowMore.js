import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default function FollowMore({ navigation }) {
  return (

    <View style={styles.container}>
      <View style={styles.logo}>
        <Image style={{ height: 350, width: '95%' }} source={require('../../images/FollowLOGO.png')} />
      </View>

      <View style={styles.header}>
        <Text style={{ fontSize: 34, fontWeight: 'bold', fontFamily: 'arial', textAlign: 'center', color: '#F47066' }} >{`Follow for More`}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.txtContent}>{`Follow your favourite`}</Text>
        <Text style={styles.txtContent}>{`Medical health professional`}</Text>
      </View>

      {/**------Screen Indicators-----------Screen Indicators----------- */}

      <View style={{ width: 360, alignItems: 'center', marginTop: 102 }} >
        <View style={{ width: 130, top: -25, flexDirection: 'row', justifyContent: 'space-evenly' }} >
          <Text style={{ fontSize: 22, color: '#F47066' }}>{`o`}</Text>
          <Text style={{ fontSize: 22, color: '#F47066' }}>{`o`}</Text>
          <Text style={{ fontSize: 22, color: '#F47066' }}>{`o`}</Text>
        </View>
      </View>

      {/**------btnNext-----------btnNext--------- */}

      <View style={{ width: 360, marginVertical: 25, alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('UrgentHelp')} style={styles.btnNext} >
          <Text style={{ fontWeight: 'bold', color: '#fff', paddingLeft: 25 }} > {`NEXT`} </Text>
          <View style={{ left: 40 }}>
            <AntDesign name='arrowright' size={25} color='#fff' />
          </View>
        </TouchableOpacity>
      </View>

      {/**-------BACK------BACK-------BACK */}

      <View style={{ marginVertical: 15, alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
          <Text>BACK</Text>
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
    top: -75,
    left: 10,
    right: 10
  },

  header: {
    width: 360,
    top: -60
  },

  content: {
    width: 360,
    top: -20,
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
    top: -30,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f47066'
  }

})
