import React from 'react'
;<Text>Welcome</Text>
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

function Welcome () {
  return (
    <View>
      <Image
        style={{ height: 50, width: 50 }}
        source={require('../../images/WelcomeLOGO.png')}
      />

      <Text>Watch and Learn</Text>
    </View>
  )
}

export default Welcome
