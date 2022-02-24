import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

function FollowMore () {
  return (
    <View>
      <Image
        style={{ height: 50, width: 50 }}
        source={require('../../images/FollowLOGO.png')}
      />

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

export default FollowMore
