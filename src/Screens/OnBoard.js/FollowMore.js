import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

function FollowMore () {
  return (
    <View>
      <Image
        style={{ height: 50, width: 50 }}
        source={require('../../images/FollowLOGO.png')}
      />

      <Text>Follow More</Text>
    </View>
  )
}

export default FollowMore
