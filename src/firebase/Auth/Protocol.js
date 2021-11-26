import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { AuthScreens, DoctorsScreens, UserScreens } from "../../Screens";
import { firestore } from "..";

const Check = ({ id, data }) => {

    const [statement, setStatement] = useState(null)
    const [busy, setBusy] = useState(true)

    useEffect(() => {
        data?(
            firestore.collection('Doctors').doc(id).set({
                Branch: branch,
                Contact: Contact,
                Qualification: qualification,
                Specilization: specialization,
                verified: false
            })
            .then(()=>{
                setStatement(true)
                setBusy(false)
            })
        ):(
        firestore.collection("Doctors").doc(user).get()
            .then(doc => {
                setStatement(doc.exists)
                setBusy(false)
            })
        )
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

const Detector = ({ id }) => {

    const [data, setData] = useState(null)

    return (
        id ? (
            <Check id={id} data={data}/>
        ) : (
            <AuthScreens setData={setData}/>
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