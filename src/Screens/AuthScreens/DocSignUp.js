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
  ScrollView,
} from "react-native";
import { Card } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { handleSignUp } from "../../firebase";
import { AlertNote } from "../../Components/Alert";
export default function DoctorSignUp({ navigation }) {
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [Confirmpassword, setConfirmPassword] = useState(""),
    [displayModal, setDisplaModal] = useState(false),
    [message, setMessage] = useState("");
  const DoctorRegister = () => {
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
  };
  return (
    <View style={styles.container}>
      <AlertNote
        modalVisible={displayModal}
        setModalVisible={setDisplaModal}
        msg={message}
      />

      <Card style={[styles.card, styles.shadowProp]}>
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

      <View>
        <Card style={{ height: 230 }}>

          <Card style={[styles.txtCards, styles.shadowProp]}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.txtField}
                name="Name"
                placeholder="Name"
              />
            </View>
          </Card>

          <Card style={[styles.txtCards, styles.shadowProp]}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.txtField}
                name="Surname"
                placeholder="Surname"
              />
            </View>
          </Card>

          <Card style={[styles.txtCards, styles.shadowProp]}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.txtField}
                name="Contact Details"
                placeholder="Contact Details"
                onChangeText={(text) => setContact(text)}
              />
            </View>
          </Card>

          <Card style={[styles.txtCards, styles.shadowProp]}>
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
            style={[styles.signIn, styles.shadowProp]}
            onPress={() => {
              navigation.navigate("DoctorSignUp");
            }}
          >
            <Text style={{ color: "#fff" }}>Next </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
<<<<<<< HEAD
  
  container: {
    alignItems: 'center',
    height: 850,
    backgroundColor: '#fff'
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
    width: 285,
    height: 38,
    borderRadius: 10,
    outline: "none",
    backgroundColor: "lightgrey",
    paddingLeft: 10,
  },

  txtCards: {
    backgroundColor: "lightgrey",
    width: 285,
    height: 40,
    borderRadius: 10,
    marginLeft: 2,
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#F47066"
  },

  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2,     height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },

  signIn: {
    height: 50,
    width: 200,
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: "#F47066",
    alignItems: "center",
    justifyContent: "center",
  },
=======
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
        width: 285,
        height: 40,
        borderRadius: 10,
        // outline: "none",
        backgroundColor: "lightgrey",
        paddingLeft: 10,
    },

    txtCards: {
        backgroundColor: "lightgrey",
        width: 285,
        height: 40,
        borderRadius: 10,
        marginLeft: 2,
        marginTop: 15,
    },

    signIn: {
        height: 50,
        width: 200,
        marginTop: 15,
        borderRadius: 10,
        backgroundColor: "#F47066",
        alignItems: "center",
        justifyContent: "center",
    },
>>>>>>> 31775eba9d486977bb629ed03e65537688786fb3
});