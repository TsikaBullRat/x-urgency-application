import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { DoctorsScreens, UserScreens } from "../../Screens";
import { firestore } from "..";

const Check = ({ details, id }) => {

    const [statement, setStatement] = useState(null)
    const [busy, setBusy] = useState(true)
    // const What = firestore.collection("Doctors").doc(user).get()
    //     .then(doc=>doc.data())

    details ? (
        useEffect(() => {
            firestore.collection("Doctors").doc(id).set({
                Branch: details.Branch,
                Contact: details.Contact,
                Qualification: details.Qualification,
                Specilization: details.Specilization,
                verified: details.verified,
            })

                .then(doc => {
                    setStatement(true)
                    setBusy(false)
                })
        }, [])) : (

        useEffect(() => {
            firestore.collection("Doctors").doc(id).get()
                .then(doc => {
                    setStatement(doc.exists)
                    setBusy(false)
                })
        }, []))

    // console.log(What)

    return (
        busy ? (
            <View style={styles.loader}>
                <ActivityIndicator size="large" />
            </View>

        ) : (

            statement ? (
                <DoctorsScreens />
            ) : (
                <UserScreens />
            )
        )
    )

}


const styles = StyleSheet.create({
    loader: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export { Check }