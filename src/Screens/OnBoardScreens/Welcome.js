import React from 'react'
import { View, Text, Image, StyleSheet} from 'react-native'

export default function Welcome () {
  return (
    <View style={styles.container}>
      
      <View style={styles.logo}>
        <Image
          style={{ height: 350, width: '95%' }}
          source={require('../../images/WatchLOGO.png')}
        />
      </View>

      <View style={styles.header}>
        <Text style={{fontSize:24, textAlign:'center',
        color:'#F47066'}}>{`Watch and Learn`}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.txtContent}>{`Learn basic first-aid skills`}</Text>
        <Text style={styles.txtContent}>{`by watching short`}</Text>
        <Text style={styles.txtContent}>{`videos of everyday first-aid scenarios`}</Text>
      </View>

      <View style={{ width:180, flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
        <Text style={{fontSize:22, color:'#F47066'}}>
          {`o`}
        </Text>
        <Text style={{fontSize:22, color:'#F47066'}}>
          {`o`}
        </Text>
        <Text style={{fontSize:22, color:'#F47066'}}>
          {`o`}
        </Text>
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
    width:360,
    top: 10,
    left: 10,
    right: 10
  },

  header: {
   width: 360,
   marginTop: 20
  },

  content: {
    width: 360,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  txtContent: {
    fontSize: 19,
    fontFamily: 'arial'
  },
})

