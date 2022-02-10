/**
    * @description      : 
    * @author           : MLab
    * @group            : 
    * @created          : 05/10/2021 - 14:22:53
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 05/10/2021
    * - Author          : MLab
    * - Modification    : 
**/

import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
import { Card } from 'react-native-paper';
import { FontAwesome, AntDesign, EvilIcons } from '@expo/vector-icons';
import { handleSignUp } from '../../firebase';
import { AlertNote } from '../../Components/Alert';

export default function SignUp({ navigation }) {

  const [username, setUserName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [ConfirmPassword, setConfirmPassword] = useState(""),
    [displayModal, setDisplayModal] = useState(false),
    [message, setMessage] = useState(""),
    [prompt, setPrompt] = useState(null),
    [prompt1, setPrompt1] = useState(null),
    [prompt2, setPrompt2] = useState(null),
    [prompt3, setPrompt3] = useState(null),
    [prompt4, setPrompt4] = useState(null)

  const Register = () => {
    if (username === "" && ConfirmPassword === "" && password === "" && email === "") {
      setPrompt("Please enter thr requested information")
    } else if (username === "") {
      setPrompt(null)
      setPrompt1("Please enter username")
      setPrompt2(null)
      setPrompt3(null)
      setPrompt4(null)
    } else if (email === "") {
      setPrompt(null)
      setPrompt1(null)
      setPrompt2("Please enter email address")
      setPrompt3(null)
      setPrompt4(null)
    } else if (password === "") {
      setPrompt(null)
      setPrompt1(null)
      setPrompt2(null)
      setPrompt3("Please enter password")
      setPrompt4(null)
    } else if (ConfirmPassword === "") {
      setPrompt(null)
      setPrompt1(null)
      setPrompt2(null)
      setPrompt3(null)
      setPrompt4("Please re-enter password")
    } else {
      handleSignUp(username, email, password, ConfirmPassword, setMessage,)
      setDisplayModal(true)
    }

  }

  return (

    <View style={styles.container}>

      <AlertNote modalVisible={displayModal} setModalVisible={setDisplayModal} msg={message} />
      <Card style={styles.card}>
        <View style={styles.heartIcon}>
          <FontAwesome name="heartbeat" size={110} color="#fff" />
        </View>
        <Text style={{ color: '#fff', fontSize: 28}}> {`X-urgency`} </Text>
      </Card>

      <View style={styles.header}>
        <Text style={{ fontWeight: 'bold', fontSize: 36, fontFamily:'Arial', 
        color: '#51535D' }}>{`SignUp`}</Text>
      </View>

      {prompt ? <Text style={styles.prompt} >{prompt}</Text> : null}

      <Card style={styles.txtCards}>
        <View style={{ flexDirection: 'row' }}>
          <AntDesign name="user" size={20} color="black" style={{ marginTop: 10, marginLeft: 8 }} />
          <TextInput style={styles.txtField} name='username' placeholder='Username' onChangeText={text => setUserName(text)} />
        </View>
      </Card>
      {prompt1 ? <Text style={styles.prompt}>{prompt1}</Text> : null}

      <View>
        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <AntDesign name="mail" size={20} color="black" style={{ marginTop: 12, marginLeft: 8 }} />
            <TextInput style={styles.txtField} name='email' placeholder='Email' onChangeText={text => setEmail(text)} />
          </View>
        </Card>
        {prompt2 ? <Text style={styles.prompt}>{prompt2}</Text> : null}

        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <EvilIcons name="lock" size={28} color="black" style={{ marginTop: 7, marginLeft: 4 }} />
            <TextInput style={styles.txtField}
              name='password' placeholder='Password'
              secureTextEntry={true}
              onChangeText={text => setPassword(text)} />
          </View>
        </Card>
        {prompt3 ? <Text style={styles.prompt}>{prompt3}</Text> : null}

        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <EvilIcons name="lock" size={28} color="black" style={{ marginTop: 7, marginLeft: 4 }} />
            <TextInput style={styles.txtField}
              name='password' placeholder='Re-enter Password'
              secureTextEntry={true}
              onChangeText={text => setConfirmPassword(text)} />
          </View>
        </Card>
        {prompt4 ? <Text style={styles.prompt}>{prompt4}</Text> : null}

        <View style={{ alignItems: 'center', alignContent: 'center' }}>
          <TouchableOpacity style={styles.signIn} onPress={Register}>
            <Text style={{ fontSize: 18, color: '#fff' }}>{`SIGN_UP`} </Text>
          </TouchableOpacity>
        </View>

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
  },

  heartIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  header: {
    paddingTop: 25,
    textAlign: 'center',
  },
  prompt: {
    color: '#F47066',
    textAlign: "center"
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

