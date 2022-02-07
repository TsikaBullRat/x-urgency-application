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
    [prompt1, setPrompt1] = useState(null),
    [prompt2, setPrompt2] = useState(null),
    [prompt3, setPrompt3] = useState(null),
    [prompt4, setPrompt4] = useState(null)

  const Register = () => {
    if(username === ""){
      setPrompt1("Please enter username")
      setPrompt2(null)
      setPrompt3(null)
      setPrompt4(null)
    }else if(email === ""){
      setPrompt1(null)
      setPrompt2("Please enter email address")
      setPrompt3(null)
      setPrompt4(null)
    }else if(password === ""){
      setPrompt1(null)
      setPrompt2(null)
      setPrompt3("Please enter password")
      setPrompt4(null)
    }else if(ConfirmPassword === ""){
      setPrompt1(null)
      setPrompt2(null)
      setPrompt3(null)
      setPrompt4("Please re-enter password")
    }else{
      handleSignUp(username, email, password, ConfirmPassword, setUserName, setEmail, setPassword, setConfirmPassword, setMessage,)
      setDisplayModal(true)
    }
    
  }

  return (

    <View style={styles.container}>

      <AlertNote modalVisible={displayModal} setModalVisible={setDisplayModal} msg={message} />
      <Card style={styles.card}>
        <View style={styles.heartIcon}>
          <FontAwesome name="heartbeat" size={90} color="#fff" />
        </View>
        <Text style={{ color: '#fff', fontSize: 28, marginLeft: 15 }}> {`X-urgency`} </Text>
      </Card>

      <View style={styles.header}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, paddingLeft: 5 }}>{`SignUp`}</Text>
      </View>

      <Card style={styles.txtCards}>
        <View style={{ flexDirection: 'row' }}>
          <AntDesign name="user" size={20} color="black" style={{ marginTop: 10, marginLeft: 8 }} />
          <TextInput style={styles.txtField} name='username' placeholder='Username' onChangeText={text => setUserName(text)} />
        </View>
      </Card>
      {prompt1?<Text style={styles.prompt}>{prompt1}</Text>:null}

      <View>
        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <AntDesign name="mail" size={20} color="black" style={{ marginTop: 10, marginLeft: 8 }} />
            <TextInput style={styles.txtField} name='email' placeholder='Email' onChangeText={text => setEmail(text)} />
          </View>
        </Card>
        {prompt2?<Text style={styles.prompt}>{prompt2}</Text>:null}

        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <EvilIcons name="lock" size={28} color="black" style={{ marginTop: 8, marginLeft: 4 }} />
            <TextInput style={styles.txtField}
              name='password' placeholder='Password'
              secureTextEntry={true}
              onChangeText={text => setPassword(text)} />
          </View>
        </Card>
        {prompt3?<Text style={styles.prompt}>{prompt3}</Text>:null}

        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <EvilIcons name="lock" size={28} color="black" style={{ marginTop: 9, marginLeft: 4 }} />
            <TextInput style={styles.txtField}
              name='password' placeholder='Re-enter Password'
              secureTextEntry={true}
              onChangeText={text => setConfirmPassword(text)} />
          </View>
        </Card>
        {prompt4?<Text style={styles.prompt}>{prompt4}</Text>:null}

        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity style={styles.signIn} onPress={Register}>
            <Text style={{ color: '#fff' }} >{`SIGN_UP`} </Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 850,
    backgroundColor: '#fff',
  },

  card: {
    position: 'absolute',
    backgroundColor: '#F47066',
    width: 325,
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
    paddingTop: 205,
    textAlign: 'center',
  },
  prompt:{
    color:'#F47066',
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
      web:{
        outlineColor: 'transparent'
      }
    })
  },

  txtCards: {
    width: 285,
    height: 50,
    borderRadius: 10,
    marginLeft: 2,
    marginTop: 35,
    borderWidth: 1,
    borderColor: '#F47066',
  },

  signIn: {
    height: 40,
    width: 150,
    marginTop: 45,
    borderRadius: 10,
    backgroundColor: '#F47066',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

