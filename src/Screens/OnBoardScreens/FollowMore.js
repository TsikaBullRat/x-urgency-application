import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function FollowMore () {
  return (
    <View style={styles.container}>
      
      <View style={styles.logo}>
        <Image
          style={{ height: 310, width: 250 }}
          source={require('../../images/FollowLOGO.png')}
        />
      </View>

      <View style={styles.header}>
        <Text>{`Follow More`}</Text>
      </View>
      <Text></Text>

      <View style={styles.content}>
        <Text>{`Learn basic first-aid skills`}</Text>
        <Text>{`by watching short`}</Text>
        <Text>{`videos of everyday first-aid scenarios`}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  header: {},

  content: {}
})
