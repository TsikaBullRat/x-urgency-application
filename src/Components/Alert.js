import React, { useState } from 'react'
// import { Alert, StyleSheet } from 'react-native'
import { Modal, Platform, Pressable, StyleSheet, View } from 'react-native'

// const alertNote = () =>{
//     Alert.alert(
//         "Title",
//         "Custom Message",
//         [
//             {
//                 text: "Ok",
//                 onPress:()=>console.log("Ok pressed"),
//             }
//         ]
//     )
// }

const AlertNote = ({ visible, setVisible }) => {


    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                setVisible(false)
            }}
        >
            <Pressable style={styles.backdrop} onPress={() => props.setModalVisible(false)} />
            <View>
                
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        ...Platform.select({
            android: {
                backgroundColor: "#232f34",
                opacity: 0.32
            },
            ios: {
                backgroundColor: "#000000",
                opacity: 0.3
            },
            default:{
                backgroundColor: '#000',
                opacity: 0.3
            }
        })
    }
})
// const alertError = () =>{

// }

// export{alertNote}
export { AlertNote }