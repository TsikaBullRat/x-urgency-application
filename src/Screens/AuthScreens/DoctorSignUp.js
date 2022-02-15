/**
    * @description      : 
    * @author           : TLeeuw
    * @group            : 
    * @created          : 26/10/2021 - 11:55:25
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 26/10/2021
    * - Author          : TLeeuw
    * - Modification    : 
**/

import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Platform, Picker } from 'react-native';
import { Card } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { handleDoctorSignUp } from '../../firebase';
import { AlertNote } from '../../Components/Alert';

export default function DoctorSignUp({ navigation, setDetails }) {

  const [email, setEmail] = useState(""),
    [name, setName] = useState(""),
    [surname, setSurname] = useState(""),
    [contactdetails, setContactDetails] = useState(""),
    [qualification, setQualification] = useState(""),
    [specialization, setSpecialization] = useState(""),
    [branch, setBranch] = useState(""),
    [password, setPassword] = useState(""),
    [description, setDescription] = useState(""),
    [confirmpassword, setConfirmPassword] = useState(""),
    [prompt1, setPrompt1] = useState(null),
    [prompt2, setPrompt2] = useState(null),
    [prompt3, setPrompt3] = useState(null),
    [prompt4, setPrompt4] = useState(null),
    [prompt5, setPrompt5] = useState(null),
    [prompt6, setPrompt6] = useState(null),
    [prompt7, setPrompt7] = useState(null),
    [prompt8, setPrompt8] = useState(null),
    [prompt9, setPrompt9] = useState(null),
    [visibleStatusBar, setVisibleStatusBar] = useState(true);

  const changeVisibilityStatusBar = () => {
    if (name === "") {
      setPrompt1("Please enter name")
      setPrompt2(null)
      setPrompt3(null)
      setPrompt4(null)
      setPrompt5(null)
      setVisibleStatusBar(!visibleStatusBar)
    } else if (surname === "") {
      setPrompt1(null)
      setPrompt2("Please enter surname")
      setPrompt3(null)
      setPrompt4(null)
      setPrompt5(null)
      setVisibleStatusBar(!visibleStatusBar)
    } else if (contactdetails === "") {
      setPrompt1(null)
      setPrompt2(null)
      setPrompt3("Please enter contact details")
      setPrompt4(null)
      setPrompt5(null)
      setVisibleStatusBar(!visibleStatusBar)
    } else if (email === "") {
      setPrompt1(null)
      setPrompt2(null)
      setPrompt3(null)
      setPrompt4("Please enter email address")
      setPrompt5(null)
    } else if (qualification === "") {
      setPrompt1(null)
      setPrompt2(null)
      setPrompt3(null)
      setPrompt4(null)
      setPrompt5("Please enter qualification")
    } else {
      setVisibleStatusBar(!visibleStatusBar)
    }
  }

  const Register = () => {
    if (qualification === "" && branch === "" && password === "" && confirmpassword === "") {
      setPrompt("Please enter thr requested information")
    } else if (description === "") {
      setPrompt6("Please tell us about you")
      setPrompt7(null)
      setPrompt8(null)
      setPrompt9(null)
    } else if (branch === "") {
      setPrompt6(null)
      setPrompt7("Please enter branch name")
      setPrompt8(null)
      setPrompt9(null)
    } else if (password === "") {
      setPrompt6(null)
      setPrompt7(null)
      setPrompt8("Please enter password")
      setPrompt9(null)
    } else if (confirmpassword === "") {
      setPrompt6(null)
      setPrompt7(null)
      setPrompt8(null)
      setPrompt9("Please re-enter password")
    } else {
      handleDoctorSignUp(email, password, name + " " + surname, qualification, specialization, branch, contactdetails, description)
    }
  }

  return (

    <View style={styles.container}>

      <Card style={styles.card}>
        <View style={styles.heartIcon}>
          <FontAwesome name="heartbeat" size={110} color="#fff" />
        </View>
        <Text style={{ color: "#fff", fontSize: 28, marginLeft: 8 }}> {`X-urgency`} </Text>
      </Card>

      <View style={styles.header}>
        <Text style={{
          fontWeight: 'bold', fontSize: 36, ...Platform.select({
            web: {
              fontFamily: 'Felix Titling'
            }
          }),
          color: '#F47066'
        }}>{`Doctor SignUp`}</Text>
      </View>

      {visibleStatusBar ? (
        <View>

          <Card style={styles.txtCards}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.txtField}
                name="Name"
                placeholder="Name"
                onChangeText={(text) => setName(text)} />
            </View>
          </Card>
          {prompt1 ? <Text style={styles.prompt}>{prompt1}</Text> : null}

          <Card style={styles.txtCards}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.txtField}
                name="Surname"
                placeholder="Surname"
                onChangeText={(text) => setSurname(text)} />
            </View>
          </Card>
          {prompt2 ? <Text style={styles.prompt}>{prompt2}</Text> : null}

          <Card style={styles.txtCards}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.txtField}
                name="ContactDetails"
                placeholder="Contact Details"
                onChangeText={(text) => setContactDetails(text)} />
            </View>
          </Card>
          {prompt3 ? <Text style={styles.prompt}>{prompt3}</Text> : null}

          <Card style={styles.txtCards}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.txtField}
                name="Email"
                placeholder="Email"
                onChangeText={(text) => setEmail(text)} />
            </View>
          </Card>
          {prompt4 ? <Text style={styles.prompt}>{prompt4}</Text> : null}

          <View style={{ flexDirection: "row" }}>
            <Picker
              specialization={specialization}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => setSpecialization(itemValue)} >
              <Picker.Item label="Doctor" value="Doctor" />
              <Picker.Item label="Nurse" value="Nurse" />
              <Picker.Item label="Basic Abulance Assistance" value="BEA" />
              <Picker.Item label="Ambulance Emergency Assistance" value="AEA" />
              <Picker.Item label="Critical Care Assist" value="CCA" />
              <Picker.Item label="Emergency Care Practitioner" value="ECP" />

            </Picker>
          </View>

          <Card style={styles.txtCards}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.txtField}
                name="Qualification"
                placeholder="Qualification"
                onChangeText={(text) => setQualification(text)} />
            </View>
          </Card>
          {prompt5 ? <Text style={styles.prompt}>{prompt5}</Text> : null}

          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.signIn} onPress={changeVisibilityStatusBar}>
              <Text style={{ color: "#fff" }}>{`NEXT`} </Text>
            </TouchableOpacity>
          </View>

        </View>

      ) : (
        <View>

          <Card style={styles.txtCards}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.txtField}
                name="Description"
                placeholder="Description"
                onChangeText={(text) => setDescription(text)} />
            </View>
          </Card>

          <Card style={styles.txtCards}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.txtField}
                name="Branch"
                placeholder="Branch"
                onChangeText={(text) => setBranch(text)} />
            </View>
          </Card>

          <Card style={styles.txtCards}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.txtField}
                name="Password"
                placeholder="Password"
                onChangeText={(text) => setPassword(text)} />
            </View>
          </Card>

          <Card style={styles.txtCards}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.txtField}
                name="ConfirmPassword"
                placeholder="Confirm Password"
                onChangeText={(text) => setConfirmPassword(text)} />
            </View>
          </Card>

          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.signIn} onPress={Register}>
              <Text style={{ color: "#fff" }}>{`SIGNIN`} </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  card: {
    backgroundColor: "#F47066",
    width: 335,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  heartIcon: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },

  header: {
    paddingTop: 10,
  },

  txtField: {
    width: 245,
    height: 30,
    marginTop: 2,
    marginLeft: 2,
    paddingLeft: 10,
    paddingTop: 15,
    borderRadius: 10,
    ...Platform.select({
      web: {
        outlineColor: 'transparent'
      }
    })
  },

  txtCards: {
    width: 315,
    height: 50,
    borderRadius: 10,
    marginLeft: 2,
    marginTop: 35,
    borderWidth: 1,
    borderColor: '#F47066',
  },

  picker: {
    width: 315,
    height: 50,
    borderRadius: 10,
    marginLeft: 2,
    marginTop: 35,
    borderWidth: 1,
    borderColor: '#F47066',
    opacity: 0.8
  },
  prompt: {
    color: '#F47066',
    textAlign: "center"
  },

  signIn: {
    height: 50,
    width: 200,
    margin: 40,
    borderRadius: 10,
    backgroundColor: '#F47066',
    alignItems: 'center',
    justifyContent: 'center',
  }

})
