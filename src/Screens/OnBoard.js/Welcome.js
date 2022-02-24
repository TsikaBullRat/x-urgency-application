import React from 'react'
;<Text>Welcome</Text>
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

function Welcome () {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{ height: 50, width: 50 }}
          source={require('../../images/WelcomeLOGO.png')}
        />
      </View>

      <View style={styles.header}>
        <Text>{`Watch and Learn`}</Text>
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
