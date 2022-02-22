import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
import { Card } from 'react-native-paper';
import { FontAwesome, AntDesign, EvilIcons } from '@expo/vector-icons';
import { handleResetPassword } from '../../firebase'
import { ForgotPassword } from '..';

export default function ResetPassword({ navigation }) {

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
        <View style={styles.heartIcon}>
          <FontAwesome name="heartbeat" size={110} color="#fff" />
        </View>
        <Text style={{ color: '#fff', fontSize: 28 }}> {`X-urgency`} </Text>
      </Card>

      <View style={styles.header}>

        <Text style={{
          fontWeight: 'bold', fontSize: 36, fontFamily: 'Felix Titling', color: '#F47066', justifyContent: "left"
        }}>{`Reset Your Password?`}</Text>
      </View>
      <br />
      <Text style={{ fontWeight: 'light', fontSize: 16, fontFamily: 'Felix Titling', color: '#000000' }}>Create your new<br /> password</Text>

      <View style={{ alignItems: 'center' }}>
        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <EvilIcons name="lock" size={28} color="black" style={{ marginTop: 7, marginLeft: 8 }} />
            <TextInput style={styles.txtField} name='password' placeholder='New Password' onChangeText={text => setPassword(text)} />
          </View>
        </Card>
        {prompt2 ? <Text style={styles.prompt}>{prompt2}</Text> : null}

        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <EvilIcons name="lock" size={28} color="black" style={{ marginTop: 7, marginLeft: 8 }} />
            <TextInput style={styles.txtField} name='password' placeholder='Confirm Password' onChangeText={text => setConfirmPassword(text)} />
          </View>
        </Card>
        {prompt3 ? <Text style={styles.prompt}>{prompt3}</Text> : null}

      </View>

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={styles.signIn} onPress={ForgotPassword}>
          <Text style={{ color: '#fff' }}>{`DONE`} </Text>
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
    width: 335,
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

  signIn: {
    height: 50,
    width: 200,
    marginTop: 40,
    borderRadius: 10,
    backgroundColor: '#F47066',
    alignItems: 'center',
    justifyContent: 'center',
  },

});





