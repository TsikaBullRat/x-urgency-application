/**
 * @description      :
 * @author           : TLeeuw
 * @group            :
 * @created          : 08/11/2021 - 10:11:41
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 08/11/2021
 * - Author          : TLeeuw
 * - Modification    :
 **/
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Picker,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

import { Card } from "react-native-paper";

export default function Upload({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("stroke");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Fill in Info. below:</Text>

      <Card style={styles.txtCards}>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            style={styles.txtField}
            name="username"
            placeholder="Title"
          />
        </View>
      </Card>

      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Stroke" value="stroke" />
        <Picker.Item label="Heart-Attack" value="heart-attack" />
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
            name="password"
            placeholder="Description"
          />
        </View>
      </Card>

      <TouchableOpacity onPress= {() => {navigation.navigate('UploadVideo')}} style= {{marginTop: 30}}>
        Go to Upload
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    fontSize: 28,
    textAlign: "center",
    color: "#F47066",
  },

  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
    marginTop: 20,
  },

  buttonText: {
    fontSize: 20,
    color: "#fff",
  },

  txtField: {
    width: 285,
    height: 40,
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
  },

   picker: {
    backgroundColor: "lightgrey",
    height: 40,
    width: 285,
    borderRadius: 10,
    marginLeft: 2,
    marginTop: 15,
  },
});
