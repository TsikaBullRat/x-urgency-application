import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Pressable, Image } from 'react-native';
import SwitchSelector from "react-native-switch-selector";
import { Card } from 'react-native-paper'
import { Avatar, Badge } from 'react-native-elements';
import { Socials, } from '../../Components';
import { auth, firestore } from '../../firebase';
import Button from '../../Components/button';
import { AntDesign, Feather } from '@expo/vector-icons';

const Doctor = ({ route }) => {

  const [About, setAbout] = useState(true);
  const [Qualification, setQualification] = useState(false);
  const [Specialization, setSpecialization] = useState(false);
  const [Contact, setContact] = useState(false);
  const [doctor, setDoctor] = useState("")
  const [email, setEmail] = useState("")
  const [data, setData] = useState(null);
  const [subscription, setSubscription] = useState({ text: "", Func: () => null })

  const getDoctorInfo = () => {
    firestore.collection("Users").doc(/*info*/"XYRltIaLknbfJrvZG4OfyOtGYTz2").collection("cred").doc(/*info*/"XYRltIaLknbfJrvZG4OfyOtGYTz2").get()
      .then(doc => {
        setData(doc.data())
      })

    firestore.collection("Users").doc(/*info*/"XYRltIaLknbfJrvZG4OfyOtGYTz2").get()
      .then(doc => {
        setDoctor(doc.data().username)
        setEmail(doc.data().email)
      })
  }

  const Subscribe = async () => {
    let change = await firestore.collection("Users").doc(/*info*/"XYRltIaLknbfJrvZG4OfyOtGYTz2").collection("cred").doc(/*info*/"XYRltIaLknbfJrvZG4OfyOtGYTz2").get()
      .then(doc => {
        return doc.data().subscribers
      })

    firestore.collection("Users").doc(/*info*/"XYRltIaLknbfJrvZG4OfyOtGYTz2").collection("cred").doc(/*info*/"XYRltIaLknbfJrvZG4OfyOtGYTz2").update({
      subscribers: [...change, auth.currentUser.uid]
    })

    setSubscription({
      Func: unSubscribe,
      text: "unfollow"
    })
  }

  const unSubscribe = async () => {
    let change = await firestore.collection("Users").doc(/*info*/"XYRltIaLknbfJrvZG4OfyOtGYTz2").collection("cred").doc(/*info*/"XYRltIaLknbfJrvZG4OfyOtGYTz2").get()
      .then(doc => {
        return doc.data().subscribers
      })

    change = change.filter(item => item !== auth.currentUser.uid)
    firestore.collection("Users").doc(/*info*/"XYRltIaLknbfJrvZG4OfyOtGYTz2").collection("cred").doc(/*info*/"XYRltIaLknbfJrvZG4OfyOtGYTz2").update({
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

  const [image, setImage] = useState(null)
  const [initial, setInitial] = useState("N")
  const getProfile = async () => {
    let name
    setImage(false)
    name = await firestore.collection("Users").doc(/*info*/"XYRltIaLknbfJrvZG4OfyOtGYTz2").get().then(doc => doc.data().username)
    setInitial(name.substring(0, 1))
  }

  useEffect(() => {
    getProfile()
  }, [])

  useEffect(() => {
    firestore.collection("Users").doc(/*info*/"XYRltIaLknbfJrvZG4OfyOtGYTz2").collection("cred").doc(/*info*/"XYRltIaLknbfJrvZG4OfyOtGYTz2").get()
      .then(doc => {
        let array = []
        array = [...array, doc.data().subscribers]
        let index = array.indexOf(auth.currentUser.uid)
        if (index === -1) {
          setSubscription({
            Func: unSubscribe,
            text: "unfollow"
          })

        } else {
          setSubscription({
            Func: Subscribe,
            text: "follow"
          })
        }
      })
  }, [])

  return (

        /*data ? (*/<>
      <View style={styles.container}>
        <View>
          {
            image ? (
              <Avatar style={styles.avatar} rounded source={{ uri: image, }} size="large" />
            ) : (
              <View style={styles.temp}>
                <Text style={styles.temp_text}> {initial} </Text>
              </View>
            )}
        </View>

        <Text style={styles.textTitle}>Dr. <Text>{doctor}</Text></Text>

        {/**--------Socials Follow--------Socials Follow--------Socials Follow------- */}
        <View style={{ width: 425, marginTop: 5, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', marginBottom: 20 }}>

          <View style={{ paddingTop: 20, flexDirection: 'row' }}>
            <Socials text="Following" number="15" />
            <Socials text="Followers" number={/*data.subscribers ? data.subscribers.length :*/ 0} />
            <Socials text="Likes" number="3.1M" />
          </View>
          <View style={{ left: -15 }}>
            <Pressable style={styles.follow} onPress={subscription.Func}>
              <Text style={{ color: '#fff' }}>{subscription.text}</Text>
            </Pressable>
          </View>
        </View>

        {/*Doctor-Cards---------------Doctor-Cards---------Doctor-Cards */}

        <View
          style={{
            width: 355,
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <Card style={styles.docCards}>
            <View style={{ marginTop: 10, alignItems: 'center' }}>
              <Image
                source={require('../../images/certificate.png')}
                style={{ width: 35, height: 35, color: '#fff' }}
              />

              <Text style={{ paddingTop: 10, fontSize: 16, color: '#fff' }}>
                {`Qualifiation`}
              </Text>
            </View>
          </Card>

          <Card style={styles.docCards}>
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('../../images/briefcase.png')}
                style={{ width: 45, height: 45, color: '#fff' }}
              />

              <Text style={{ paddingTop: 10, fontSize: 16, color: '#fff' }}>
                {`Experience`}
              </Text>
            </View>
          </Card>

          <Card style={styles.docCards}>
            <View style={{ marginTop: 10, alignItems: 'center' }}>
              <Image
                source={require('../../images/success.png')}
                style={{ width: 35, height: 35, color: '#fff' }}
              />

              <Text style={{ paddingTop: 10, fontSize: 16, color: '#fff' }}>
                {`Awards`}
              </Text>
            </View>
          </Card>
        </View>

        <View style={{ marginTop: 35, width: 335 }}>
          <Text style={styles.txtHead}>{`About`}</Text>
          <Text style={styles.txtAbout}>
            {`Neurologists These are specialists in the nervous system, which includes the brain, spinal cord, and nerves. They treat strokes, brain and spinal tumors, epilepsy, Parkinson's disease, and Alzheimer's disease.`}
          </Text>
        </View>

        <View style={{ width: 355, marginTop: 35, justifyContent: 'flex-start' }}>
          <View style={{ flexDirection: 'row' }}>
            <Feather name="phone" size={20} color="black" />
            <Text
              style={{
                paddingLeft: 10,
                paddingTop: 2,
                fontSize: 16,
                color: '#F47066',
              }}>
              {`Call Now `}
            </Text>
            <Text style={{ paddingLeft: 10, paddingTop: 2, fontSize: 16 }}>
              {`(053) 871 2956`}
            </Text>
          </View>

          <View>
            <Text style={{ paddingLeft: 35, paddingTop: 5 }}>{`OR`}</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <AntDesign name="mail" size={20} color="black" />
            <Text
              style={{
                paddingLeft: 10,
                paddingTop: 2,
                fontSize: 16,
                color: '#F47066',
              }}>
              {`SMS`}
            </Text>
            <Text style={{ paddingLeft: 10, paddingTop: 2, fontSize: 16 }}>
              {`078 454 2123`}
            </Text>
          </View>
        </View>

      </View>
    </>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  textTitle: {
    fontFamily: 'Roboto',
    color: '#F47066',
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
    alignSelf: 'center',

  },

  follow: {
    top: 10,
    backgroundColor: "#f47066",
    width: 70,
    height: 40,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
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
  },

  textTitle: {
    color: 'red',
    fontSize: 25,
    marginTop: 5,
  },

  docCards: {
    width: 100,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F47066',
  },

});

export default Doctor;