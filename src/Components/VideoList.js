import React, { useState, useRef, useEffect } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-paper'
import { Video } from 'expo-av'
import { ScrollView } from 'react-native-gesture-handler'

const ItemSeperatorView = () => {
  return (
    <View style={{ height: 0.5, width: 380, backgroundColor: '#c8c8c8' }} />
  )
}

export const VideoList = ({ videos, navigation }) => {
  const [status, setStatus] = useState({})
  const ref = useRef(null)

  return (
    <View style={{alignItems:'center', justifyContent:'center'}}>
      <ScrollView
        style={{ height: 420, width: 335 }}
        vertical={true}
        showsVerticalScrollIndicator={false}
      >
        {videos
          ? videos.map((vid) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                key={vid.id}>
                <Card
                  style={{
                    width: 340,
                    height: 245,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#FAFAFA'
                  }}
                >
                  
                    <Video
                      ref={vid.ref}
                      source={{ uri: vid.url }}
                      resizeMode='stretch'
                      isLooping
                      onPlaybackStatusUpdate={status => setStatus(() => status)}
                      style={{
                        width: '100%',
                        height: 165,
                        marginTop: 5,
                        alignSelf: 'center'
                      }}
                    />


                  <View style={{ justifyContent: 'space-between' }}>
                    <Text style={styles.vidTitle}>{vid.title}</Text>
                    <Text style={styles.tag}>{vid.owner}</Text>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Text style={styles.tag}>{vid.views} Views</Text>
                      <Text style={styles.tag}>{vid.stamp}</Text>
                    </View>
                  </View>
                </Card>
                <ItemSeperatorView />
              </View>
            ))
          : 
            <>
            <Text>{`Nothing to show`}</Text>
            </>
          }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  vidTitle: {
    paddingLeft: 2,
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#F47066'
  },

  tag: {
    paddingLeft: 5,
    fontSize: 12,
    fontFamily: 'Roboto'
  }
})
