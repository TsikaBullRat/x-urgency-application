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
    [confirmpassword, setConfirmPassword] = useState(""),
    [prompt1, setPrompt1] = useState(null),
    [prompt2, setPrompt2] = useState(null),
    [prompt3, setPrompt3] = useState(null),
    [prompt4, setPrompt4] = useState(null),
    [prompt5, setPrompt5] = useState(null),
    [prompt6, setPrompt6] = useState(null),
    [prompt7, setPrompt7] = useState(null),
    [prompt8, setPrompt8] = useState(null),
    [visibleStatusBar, setVisibleStatusBar] = useState(true);

  const changeVisibilityStatusBar = () => {
    if(name === ""){
      setPrompt1("Please enter name")
      setPrompt2(null)
      setPrompt3(null)
      setPrompt4(null)
      setPrompt5(null)
      setPrompt6(null)
      setPrompt7(null)
      setPrompt8(null)
    }else if(surname === ""){
      setPrompt1(null)
      setPrompt2("Please enter surname")
      setPrompt3(null)
      setPrompt4(null)
      setPrompt5(null)
      setPrompt6(null)
      setPrompt7(null)
      setPrompt8(null)
    }else if(contactdetails === ""){
      setPrompt1(null)
      setPrompt2(null)
      setPrompt3("Please enter contact details")
      setPrompt4(null)
      setPrompt5(null)
      setPrompt6(null)
      setPrompt7(null)
      setPrompt8(null)
    }else if(email === ""){
      setPrompt1(null)
      setPrompt2(null)
      setPrompt3(null)
      setPrompt4("Please enter email address")
      setPrompt5(null)
      setPrompt6(null)
      setPrompt7(null)
      setPrompt8(null)
    }else{
    setVisibleStatusBar(!visibleStatusBar)
    }
  }

  const Register = () =>{
      if(qualification === "" && branch === "" && password === "" && confirmpassword === ""){
        setPrompt("Please enter thr requested information")
      }else if(qualification === ""){
        setPrompt5("Please enter qualification")
        setPrompt6(null)
        setPrompt7(null)
        setPrompt8(null)
      }else if(branch === ""){
        setPrompt5(null)
        setPrompt6("Please enter branch name")
        setPrompt7(null)
        setPrompt8(null)
      }else if(password === ""){
        setPrompt5(null)
        setPrompt6(null)
        setPrompt7("Please enter password")
        setPrompt8(null)
      }else if(confirmpassword === ""){
        setPrompt5(null)
        setPrompt6(null)
        setPrompt7(null)
        setPrompt8("Please re-enter password")
      }else{
        handleDoctorSignUp(email, password, name + " " + surname, setMessage, qualification, specialization, branch, contactdetails)
        setDisplayModal(true)
      }
  }

  return (

    <View style={styles.container}>

      <Card style={styles.card}>
        <View style={styles.heartIcon}>
          <FontAwesome name="heartbeat" size={90} color="#fff" />
        </View>
        <Text style={{ color: "#fff", fontSize: 28, marginLeft: 8 }}> {`X-urgency`} </Text>
      </Card>

      <View style={styles.header}>
        <Text style={{ fontWeight: "bold", fontSize: 18, paddingLeft: 5 }}>  {`Doctor SignUp`} </Text>
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

          <Card style={styles.txtCards}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.txtField}
                name="Surname"
                placeholder="Surname"
                onChangeText={(text) => setSurname(text)} />
            </View>
          </Card>

          <Card style={styles.txtCards}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.txtField}
                name="ContactDetails"
                placeholder="Contact Details"
                onChangeText={(text) => setContactDetails(text)} />
            </View>
          </Card>

          <Card style={styles.txtCards}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.txtField}
                name="Email"
                placeholder="Email"
                onChangeText={(text) => setEmail(text)} />
            </View>
          </Card>

          <View style={{ flexDirection: "row" }}>
            <Picker
              specialization={specialization}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => setSpecialization(itemValue)} >
              <Picker.Item label="Neuro-Surgent" value="Stroke" />
              <Picker.Item label="General Practitioner" value="Heart-Attack" />
              <Picker.Item label="Dentist" value="Dentist" />
              <Picker.Item label="Pediatrician" value="Pediatrician" />
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

          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.signIn} onPress={() => { changeVisibilityStatusBar() }}>
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
            <TouchableOpacity style={styles.signIn} onPress={null}>
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
    alignItems: "center",
    backgroundColor: '#fff',
    height: 850
  },

  card: {
    backgroundColor: "#F47066",
    width: 325,
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
    width: 285,
    height: 50,
    borderRadius: 10,
    marginLeft: 2,
    marginTop: 75,
    borderWidth: 1,
    borderColor: '#F47066',
  },

  signIn: {
    height: 50,
    width: 200,
    marginTop: 280,
    borderRadius: 10,
    backgroundColor: "#F47066",
    alignItems: "center",
    justifyContent: "center",
  },

});
