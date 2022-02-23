import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

function UrgentHelp () {
  return (
    <View>
      <Image
        style={{ height: 50, width: 50 }}
        source={require('../../images/FollowLOGO.png')}
      />

      <Text>Need Urgent Help?</Text>
    </View>
  )
}

export default UrgentHelp
