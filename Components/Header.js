import React from 'react'
import { View, Text } from 'react-native'
 
 export const Header = () => {
    return(
    <View style={{
        width: 360,
        textAlign: 'center',
        backgroundColor: '#f47066',
    }}>
        {/**----------------------JellyTots----------------- */}
        <View style={{
            width: 20,
            height: 20, borderRadius: 50,
            backgroundColor: 'yellow',
        }}>
        </View>

        <Text style={{
            marginTop: -15,
            width: '100%', textAlign: 'center',
            color: '#fff'
        }}>Jelly-Tots</Text>
        </View>
    )
}
