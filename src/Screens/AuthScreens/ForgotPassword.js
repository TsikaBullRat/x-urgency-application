/**
    * @description      : 
    * @author           : MLab
    * @group            : 
    * @created          : 07/10/2021 - 10:18:53
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 07/10/2021
    * - Author          : MLab
    * - Modification    : 
**/

import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
import { Card } from 'react-native-paper';
import { FontAwesome, AntDesign, EvilIcons } from '@expo/vector-icons';
import { handleResetPassword } from '../../firebase'

export default function ForgotPassword({ navigation }) {

  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [ConfirmPassword, setConfirmPassword] = useState(""),
    [prompt1, setPrompt1] = useState(null),
    [prompt2, setPrompt2] = useState(null),
    [prompt3, setPrompt3] = useState(null);

  const forgotPassword = () => {
    if (email === "") {
      setPrompt1("Please enter email address")
      setPrompt2(null)
      setPrompt3(null)
    } else if (password === "") {
      setPrompt1(null)
      setPrompt2("Please enter password")
      setPrompt3(null)
    } else if (ConfirmPassword === "") {
      setPrompt1(null)
      setPrompt2(null)
      setPrompt3("Please re-enter password")
    } else {
      handleResetPassword("lindiwe.mpondo@gmail.com")
    }
  }

  const Exit = () => {
    alert("Successfully logged out")
    navigation.navigate('SignIn')
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.heartIcon}><FontAwesome name="heartbeat" size={110} color="#fff" /></View>
        <Text style={{ fontFamily: 'Arial', color: '#fff', fontSize: 30 }}> {`X-urgency`} </Text>
      </Card>

      <View style={styles.header}>
        <Text style={{ fontWeight: 'bold', fontSize: 30, fontFamily: 'Arial', color: '#F47066', justifyContent: "left" }}>{`Forgot your password?`}</Text>
      </View>
      <br />
      <Text style={{ fontWeight: 'light', fontSize: 16, fontFamily: 'Arial', color: '#000000' }}>Enter your Email and we will send<br /> you a link to reset your password</Text>

      <View style={{ width: '100%', alignItems: 'center' }}>
        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <AntDesign name="mail" size={20} color="black" style={{ marginTop: 16, marginLeft: 18 }} />
            <TextInput style={styles.txtField} name='email' placeholder='example@gmail.com' onChangeText={text => setEmail(text)} />
          </View>
        </Card>
        {prompt1 ? <Text style={styles.prompt}>{prompt1}</Text> : null}
      </View>

      <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={styles.signIn} onPress={() => navigation.navigate('ResetPassword')}  >
          <Text style={{ fontSize: 20, fontFamily: 'Arial', color: '#fff' }}>{`SEND`} </Text>
        </TouchableOpacity>
      </View>

      <View style={{
        alignItems: 'center', justifyContent: 'center',
        marginVertical: 20
      }}>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text>BACK</Text>
        </TouchableOpacity>
      </View>

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  card: {
    backgroundColor: '#F47066',
    width: '100%',
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

  prompt: {
    color: '#F47066',
    textAlign: "center"
  },

  heartIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  header: {
    paddingTop: 25,
    textAlign: 'center'
  },

  txtField: {
    marginTop: 7,
    paddingLeft: 10,
    paddingTop: 9,
    fontSize: 18,
    fontFamily: 'Arial',
    borderRadius: 10,
    ...Platform.select({
      web: {
        outlineColor: '#fff',
        width: 220
      }
    })
  },

  txtCards: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    marginLeft: 2,
    marginTop: 35,
    borderWidth: 1,
    borderColor: '#F47066',
  },

  signIn: {
    height: 50,
    width: '60%',
    marginTop: 40,
    borderRadius: 10,
    backgroundColor: '#F47066',
    alignItems: 'center',
    justifyContent: 'center',
  },

});





