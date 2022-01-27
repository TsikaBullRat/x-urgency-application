import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Emergency = ({ navigation }) => {

    return (
        <View style={styles.Emergency}>

            <View>
                <Text> Emergency? Call Us ON : </Text> <br/>
            </View>
            
            <Text> Nationwide : 112 </Text> <br />

            <Text> Police : 10111 </Text> <br />

            <Text> Ambulance : 10177 </Text> <br />

            <Text> Fire Brigade : 10177 </Text> <br />

            <Text> Netcare911 : 082 911 </Text> <br />

            <Text> Medical Emergency Company ER24 : 084 124 </Text> <br />

            <Text> Ambulance Services : 053 802 9111</Text> <br />

            <Text> Fire Department : 053 832 4211  </Text> <br />

            <Text> Roads and Stormwater : 053 830 6836</Text> <br />

            <Text> Electrical : 053 830 6442</Text> <br />
 
        </View>

    )
}

const styles = StyleSheet.create({
    Emergency: {

        flex: 1 ,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 110,
        backgroundColor: 'red',

    },
})

export default Emergency