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

      <Text>Take a video</Text>
    </View>
  )
}

export default Welcome
