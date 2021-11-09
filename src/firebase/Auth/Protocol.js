import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { AuthScreens, DoctorsScreens, UserScreens } from "../../Screens";
import { firestore } from "..";

const Check = ({ user }) => {

    const [statement, setStatement] = useState(null)
    const [busy, setBusy] = useState(true)
    // const What = firestore.collection("Doctors").doc(user).get()
    //     .then(doc=>doc.data())
    useEffect(() => {
        firestore.collection("Doctors").doc(user).get()
            .then(doc => {
                setStatement(doc.exists)
                setBusy(false)
            })

    }, [])

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

const Detector = ({ user }) => {

    return (
        user ? (
            <Check user={user.uid} />
        ) : (
            <AuthScreens />
        )
    )

}

const styles = StyleSheet.create({
    loader: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export { Detector }