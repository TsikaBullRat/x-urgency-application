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
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Picker
} from "react-native";
import { Card } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { handleSignUp } from "../../firebase";
import { AlertNote } from "../../Components/Alert";
export default function DoctorSignUp({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("GP"),
   [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [Confirmpassword, setConfirmPassword] = useState(""),
    [description, setDescription] = useState(""),
    [displayModal, setDisplaModal] = useState(false),
    [message, setMessage] = useState(""),
    [visibleStatusBar, setVisibleStatusBar] = useState(false),

   DoctorRegister = () => {
    handleSignUp(
      email,
      password,
      Confirmpassword,
      setEmail,
      setPassword,
      setConfirmPassword,
      setMessage
    );
    setDisplaModal(true);
  },

  

     changeVisibilityStatusBar = () => {
      setVisibleStatusBar(!visibleStatusBar);
    }

  return (
    <View style={styles.container}>
      <AlertNote
        modalVisible={displayModal}
        setModalVisible={setDisplaModal}
        msg={message}
      />

      <Card style={styles.card}>
        <View style={styles.heartIcon}>
          <FontAwesome name="heartbeat" size={90} color="#fff" />
        </View>
        <Text style={{ color: "#fff", fontSize: 28, marginLeft: 15 }}>
          X-urgency
        </Text>
      </Card>

      <View style={styles.header}>
        <Text style={{ fontWeight: "bold", fontSize: 18, paddingLeft: 5 }}>
          Doctor SignUp
        </Text>
      </View>


{!visibleStatusBar ? (
      <View>
        <Card style={{ height: 230 }}>

          <Card style={styles.txtCards}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.txtField}
                name="Name"
                placeholder="Name"
              />
            </View>
          </Card>

          <Card style={styles.txtCards}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.txtField}
                name="Surname"
                placeholder="Surname"
              />
            </View>
          </Card>

          <Card style={styles.txtCards}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.txtField}
                name="Contact Details"
                placeholder="Contact Details"
                onChangeText={(text) => setContact(text)}
              />
            </View>
          </Card>

          <Card style={styles.txtCards}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.txtField}
                name="Email"
                placeholder="Email"
              />
            </View>
          </Card>

        </Card>


        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              changeVisibilityStatusBar()
            }}
          >
            <Text style={{ color: "#fff" }}>Next </Text>
          </TouchableOpacity>
        </View>
      </View>
      ) : (
        <View>
          <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setSpecialization(itemValue)}
            >
                <Picker.Item label="GP" value="gp" />
                <Picker.Item label="Dentist" value="dentist" />
                <Picker.Item label="Epilepsy" value="epilepsy" />
                <Picker.Item label="CPR" value="cpr" />
                <Picker.Item label="Drowning" value="drowning" />
                <Picker.Item label="Choking" value="choking" />
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="Burns" value="burns" />
            </Picker>

          <Card style={styles.txtCards}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.txtField}
                name="Qualification"
                placeholder="Qualification"
                onChangeText={(text) => setQualification(text)}
              />
            </View>
          </Card>

          <Card style={styles.txtCards}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.txtField}
                name="Description"
                placeholder="Description"
                onChangeText={(text) => setDescription(text)}
              />
            </View>
          </Card>

          <Card style={styles.txtCards}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.txtField}
                name="Branch"
                placeholder="Branch"
                onChangeText={(text) => setBranch(text)}
              />
            </View>
          </Card>
          <Card style={styles.txtCards}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.txtField}
                name="Contact Details"
                placeholder="Contact Details"
                onChangeText={(text) => setContactDetails(text)}
              />
            </View>
          </Card>
        </View>
      )}

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
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
    width: 260,
    height: 38,
    marginTop: 5,
    marginLeft: 15,
    padding: 8,
    borderRadius: 10,
    outlineColor: "transparent",
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

  picker: {
    height: 50,
    borderRadius: 10,
    borderColor:'#F47066'
  },

  signIn: {
    height: 50, 
    width: 200,
    marginTop: 320,
    borderRadius: 10,
    backgroundColor: "#F47066",
    alignItems: "center",
    justifyContent: "center",
  },
});
