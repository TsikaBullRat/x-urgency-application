import React from 'react'
;<Text>Welcome</Text>
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

function TakeVideo () {
  return (
    <View>
      <Image
        style={{ height: 50, width: 50 }}
        source={require('../../images/TakeVideoLOGO.png')}
      />

      <View>
        <Text>{`Take a video?`}</Text>
      </View>

      <View style={styles.content}>
        <Text>{`Learn basic first-aid skills`}</Text>
        <Text>{`by watching short`}</Text>
        <Text>{`videos of everyday first-aid scenarios`}</Text>
      </View>
    </View>
  )
}

export default Welcome
