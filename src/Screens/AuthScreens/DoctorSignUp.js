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
import { Text, View, StyleSheet, TextInput, TouchableOpacity, } from 'react-native';
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
    [specialization, setSpecialization] = useState("Neuro-Surgent"),
    [branch, setBranch] = useState(""),
    [password, setPassword] = useState(""),
    [confirmpassword, setConfirmPassword] = useState(""),

    [visibleStatusBar, setVisibleStatusBar] = useState(false)

    const changeVisibilityStatusBar = () => {
      setVisibleStatusBar(!visibleStatusBar)
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

      {!visibleStatusBar ? (
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
                name="contactDetails"
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

          <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.signIn} onPress={() => {changeVisibilityStatusBar()}}>
            <Text style={{ color: "#fff" }}>{`NEXT`} </Text>
          </TouchableOpacity>
        </View>

        </View>

      ) : (
        <View>
           <Card style={styles.txtCards}>
            <View style={{ flexDirection: "row" }}>
              <Picker
                specialization={specialization}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setSpecialization(itemValue)} >

                <Picker.Item label="Neuro-Surgent" value="stroke" />
                <Picker.Item label="General Practitioner" value="heart-attack" />
                <Picker.Item label="Epilepsy" value="epilepsy" />
                <Picker.Item label="CPR" value="cpr" />
                <Picker.Item label="Drowning" value="drowning" />
                <Picker.Item label="Choking" value="choking" />
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="Burns" value="burns" />
            </Picker>
            </View>
          </Card>

          <Card style={styles.txtCards}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.txtField}
                name="Qualification"
                placeholder="Qualification"
                onChangeText={(text) => setQualification(text)} />
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
                name="confirmPassword"
                placeholder="Confirm Password"
                onChangeText={(text) => setConfirmPassword(text)} />
            </View>
          </Card>


        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.signIn} onPress={DoctorRegister}>
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
    outlineColor: 'transparent',
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
