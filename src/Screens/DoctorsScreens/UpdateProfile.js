import React, { useState, useEffect } from "react"
import { View, StyleSheet, TextInput, Pressable, Text, ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons'; 
import { auth, firestore } from '../../firebase'
import { DisplayPicture, LargeInput } from '../../Components'

export const UpdateProfile = () =>{
    return(
        <ScrollView contentContainerStyle={styles.body}>
            <View>
                <DisplayPicture />
                <Feather name="edit" size={24} color="#F47066" style={{left:120, top:-20}}/>
            </View>
            <LargeInput />
            <TextInput placeholder="Qualification" style={styles.input} />
            <TextInput placeholder="Specialization" style={styles.input} />
            <TextInput placeholder="Branch" style={styles.input} />
            <TextInput placeholder="Contact number" style={styles.input} />
            <TextInput placeholder="Email" style={styles.input} />
            <Pressable style={styles.button}>
                <Text style={{ fontSize: 18, color: '#fff' }}>Save</Text>
            </Pressable>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body:{
        alignItems: "center",
        justifyContent: "center"
    },
    button:{
        height: 50,
        width: 200,
        marginTop: 40,
        borderRadius: 10,
        backgroundColor: '#F47066',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50
    },
    input:{
        width: 300,
        height: 50,
        borderRadius: 10,
        marginLeft: 2,
        marginTop: 35,
        paddingTop: 5,
        borderWidth: 1,
        borderColor: '#F47066',
        paddingLeft: 25
    }
})