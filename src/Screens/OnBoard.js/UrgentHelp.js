import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

function UrgentHelp () {
  return (
    <View>
      <Image
        style={{ height: 50, width: 50 }}
        source={require('../../images/FollowLOGO.png')}
      />

      <View>
        <Text>{`Need Urgent Help?`}</Text>
      </View>

      <View style={styles.content}>
        <Text>{`Learn basic first-aid skills`}</Text>
        <Text>{`by watching short`}</Text>
        <Text>{`videos of everyday first-aid scenarios`}</Text>
      </View>
    </View>
  )
}

export default UrgentHelp
