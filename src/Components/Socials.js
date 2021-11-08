import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Socials = ({ text, number }) => {
    return (
        <View style={styles.socials}>
            <Text style={{ marginRight: 40 }}>{number}</Text>
            <Text style={{ marginRight: 40 }}>{text}</Text>
        </View>

    )
}

export default Socials
const styles = StyleSheet.create({
    socials: {
        justifyContent: 'center',
        alignItems: 'center'
    },
})