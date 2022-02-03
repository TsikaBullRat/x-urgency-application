import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { DoctorsScreens, UserScreens } from "../../Screens";
import { firestore } from "..";

const Check = ({ details, id }) => {

    
    // const What = firestore.collection("Doctors").doc(user).get()
    //     .then(doc=>doc.data())

    

    // console.log(What)

    return (
        null
    )

}


const styles = StyleSheet.create({
    loader: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export { Check }