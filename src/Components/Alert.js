import React from 'react'
import { Alert, StyleSheet } from 'react-native'

const alertNote = () =>{
    Alert.alert(
        "Title",
        "Custom Message",
        [
            {
                text: "Ok",
                onPress:()=>console.log("Ok pressed"),
            }
        ]
    )
}

const alertError = () =>{

}

export{alertNote}