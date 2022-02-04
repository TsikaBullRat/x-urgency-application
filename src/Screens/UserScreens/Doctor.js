import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import SwitchSelector from "react-native-switch-selector";
import { Avatar, Badge } from 'react-native-elements';
import { Socials,  } from '../../Components';
import { auth, firestore } from '../../firebase';
import Button from '../../Components/button';

const DoctorProfile = ({ route }) => {

    const info = route.params.match
    const options = [
        { label: "About ", value: "About" },
        { label: "Qualification", value: "Qualification" },
        { label: "Specialization", value: "Specialization" },
        { label: "Contact", value: "Contact" }];

    const [About, setAbout] = useState(true);
    const [Qalification, setQualification] = useState(false);
    const [Specialization, setSpecialization] = useState(false);
    const [Contact, setContact] = useState(false);
    const [doctor, setDoctor] = useState("")
    const [email, setEmail] = useState("")
    const [data, setData] = useState(null);
    const [ subscription, setSubscription] = useState({text:"", Func:()=>null})

    const check = (value) => {

        if (value == 'About') {
            setAbout(true)
            setQualification(false)
            setSpecialization(false)
            setContact(false)
        }

        if (value == 'Qualification') {
            setQualification(true)
            setAbout(false)
            setSpecialization(false)
            setContact(false)
        }

        if (value == 'Specialization') {
            setSpecialization(true)
            setAbout(false)
            setQualification(false)
            setContact(false)
        }

        if (value == 'Contact') {
            setContact(true)
            setAbout(false)
            setQualification(false)
            setSpecialization(false)

        }

    }

    const getDoctorInfo = () => {
        firestore.collection("Users").doc(info).collection("cred").doc(info).get()
            .then(doc => {
                setData(doc.data())
            })
        firestore.collection("Users").doc(info).get()
            .then(doc => {
                setDoctor(doc.data().username)
                setEmail(doc.data().email)
            })
    }

    const Subscribe = async () =>{
        let change = await firestore.collection("Users").doc(info).collection("cred").doc(info).get()
            .then(doc=>{
              return doc.data().subscribers  
            })
        firestore.collection("Users").doc(info).collection("cred").doc(info).update({
            subscribers: [...change, auth.currentUser.uid]
        })

        setSubscription({
            Func: unSubscribe,
            text: "unfollow"
        })
    }

    const unSubscribe = async () =>{
        let change = await firestore.collection("Users").doc(info).collection("cred").doc(info).get()
            .then(doc=>{
              return doc.data().subscribers  
            })
        change = change.filter(item=>item !== auth.currentUser.uid)
        firestore.collection("Users").doc(info).collection("cred").doc(info).update({
            subscribers: change
        })
        setSubscription({
            Func: Subscribe,
            text: "follow"
        })
    }

    useEffect(() => {
        getDoctorInfo()
    }, [])

    const [image, setImage] = useState()
    const [initial, setInitial] = useState()
    const getProfile = async () => {
        let name
        setImage(false)
        name = await firestore.collection("Users").doc(info).get().then(doc=>doc.data().username)
        setInitial(name.substring(0, 1))
    }

    useEffect(() => {
        getProfile()
    }, [])

    useEffect(()=>{
        firestore.collection("Users").doc(info).collection("cred").doc(info).get()
            .then(doc=>{
                let array = []
                array = [...array, doc.data().subscribers]
                let index = array.indexOf(auth.currentUser.uid)
                if(index === -1){
                    setSubscription({
                        Func: unSubscribe,
                        text: "unfollow"
                    })
                }else{
                    
                    setSubscription({
                        Func: Subscribe,
                        text: "follow"
                    })
                }
            })
    }, [])

    return (

        data ? (<>
            
            <View>
                <View style={styles.container}>
                    <View style={{ marginTop: 50, marginLeft: 10 }}>
                    {/* {
                        image ? (
                            <Avatar style={styles.avatar} rounded source={{ uri: image, }} size="large" />
                        ):(
                            <View style={styles.temp}>
                                <Text style={styles.temp_text}> {initial} </Text>
                            </View>
                    )} */}
                    <Avatar style={styles.avatar} rounded source={{ uri: image, }} size="large" />
                    </View>

                    <Text style={styles.textTitle}>Dr. {doctor}</Text>

                </View>

                <View style={{ flexDirection: 'row', marginLeft: 60, marginBottom: 20 }}>
                    <Socials text="Following" number="15" />
                    <Socials text="Followers" number={data.subscribers ? data.subscribers.length : 0} />
                    <Socials text="Likes" number="3.1M" />
                    <Pressable style={styles.follow} onPress={subscription.Func}>
                        <Text>{subscription.text}</Text>
                    </Pressable>
                </View>
                <View style={{marginTop: 20}}>
                </View>

              

                <View>
                    <SwitchSelector
                        options={options}
                        initial={0}
                        style={styles.tab}
                        onPress={value => check(value)}
                        testID="gender-switch-selector"
                        accessibilityLabel="gender-switch-selector"
                        hasPadding />
                </View>
            </View>

            {About ? <View style={styles.words}>
                <Text style={styles.textTitle2}>
                    {data ? data.about : null}
                </Text>
            </View>

                : <View></View>}

            {Qalification ? <View style={styles.words}>
                <Text style={styles.textTitle2}>
                    {data.qualification}
                </Text>
            </View>

                : <View></View>}

            {Specialization ? <View style={styles.words}>
                <Text style={styles.textTitle2}>
                    {data.specilization}
                </Text>
            </View>

                : <View></View>}

            {Contact ? <View style={styles.words}>
                <Text style={styles.textTitle2}>
                    {email}
                    {"\n"}
                    {data.contact}
                    {"\n"}
                    {data.branch}
                </Text>
            </View>

                : <View></View>} </>

        ) : null
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 15,
        backgroundColor: '#fff',
        height: 850,
    },

    textTitle: {
        color: 'red',
        fontSize: 25,
        marginTop: 5,
    },

    textTitle2: {
        fontSize: 15,
        marginTop: 20,
        marginLeft: 5,
    },

    box: {
        flexDirection: 'row',
    },

    tab: {
        paddingLeft: 5,
        width: 380,
    },

    avatar: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginTop: 80,
        borderBottomWidth: 3,
        borderColor: 'turquoise',
        shadowColor: 'grey',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        elevation: 1,
    },

    words: {
        width: 250,
        textAlign: 'center',
        alignSelf: 'center'
    },
    follow:{
        top: 10,
        left: 5,
        backgroundColor: "#f47066",
        width: 70,
        height: 40,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    temp: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginTop: 80,
        backgroundColor: 'turquoise',
        textAlign: 'center',
        justifyContent: 'center'
      },
    
      temp_text: {
        fontSize: 40,
        color: '#fff',
      }
});

export default DoctorProfile;