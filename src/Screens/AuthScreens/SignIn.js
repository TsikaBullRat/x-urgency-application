/**
 * @description      : 
 * @author           : MLab
 * @group            : 
 * @created          : 07/10/2021 - 10:07:05
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
import { handleSignIn } from '../../firebase'
import { AlertNote } from '../../Components';

export default function SignIn({ navigation, setDone }) {

  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [displayModal, setDisplaModal] = useState(false),
    [message, setMessage] = useState(""),
    [prompt, setPrompt] = useState(null),
    [prompt1, setPrompt1] = useState(null),
    [prompt2, setPrompt2] = useState(null);
    
  const Login = () => {
    if(email === "" && password === ""){
      setPrompt("Please enter thr requested information")
    }else if(email === ""){
      setPrompt(null)
      setPrompt1("Please enter email address")
      setPrompt2(null)
    }else if(password === ""){
      setPrompt(null)
      setPrompt1(null)
      setPrompt2("Please enter password")
    }else{
      handleSignIn(email, password, setMessage, setDone)
      setDisplaModal(true)
    }
  }

  return (

    <View style={styles.container}>
      <AlertNote modalVisible={displayModal} setModalVisible={setDisplaModal} msg={message} />
      <Card style={styles.card}>
        <View style={styles.heartIcon}>
          <FontAwesome name="heartbeat" size={90} color="#fff" />
        </View>
        <Text style={{ color: '#fff', fontSize: 28, marginLeft: 15 }}> {`X-urgency`} </Text>
      </Card>

      <View style={styles.header}>
        <Text style={{ fontWeight: 'bold', fontSize: 36, color: '#51535D' }}>{`LogIn`}</Text>
      </View>

      {prompt?<Text style={styles.prompt} >{prompt}</Text>:null}

      <View>
        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <AntDesign name="user" size={22} color="black" style={{ marginTop: 13, marginLeft: 8 }} />
            <TextInput style={styles.txtUser} name='username' placeholder='Username' onChangeText={text => setEmail(text)} />
          </View>
        </Card>
        {prompt1?<Text style={styles.prompt}>{prompt1}</Text>:null}

        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <EvilIcons name="lock" size={30} color="black" style={{ marginTop: 10, marginLeft: 4 }} />
            <TextInput style={styles.txtPass}
              name='password' placeholder='Password'
              secureTextEntry={true}
              onChangeText={text => setPassword(text)} />
          </View>
        </Card>
        {prompt2?<Text style={styles.prompt}>{prompt2}</Text>:null}

        <TouchableOpacity onPress={() => { navigation.navigate('Reset Password') }}>
          <Text style={{ paddingLeft: 160, paddingTop: 20, fontSize: 18, color: '#F47066' }}>{`Forgot Password?`} </Text>
        </TouchableOpacity>

        <View style={{ alignItems: 'center', alignContent: 'center' }}>
          <TouchableOpacity style={styles.signIn} onPress={Login}>
            <Text style={{ fontSize: 18, color: '#fff' }}>{`LOGIN`} </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', textAlign: 'center', justifyContent: 'center' }}>
          <Text style={{ paddingTop: 5, fontSize: 18, }}>  {`New User?`} </Text>
          <TouchableOpacity onPress={() => { navigation.navigate('Sign Up') }}>
            <Text style={{ paddingTop: 5, fontSize: 18, color: '#F47066' }}> {`SignUp`}</Text>
          </TouchableOpacity>
        </View>

        <Text style={{ paddingTop: 10, fontSize: 18, textAlign: 'center', justifyContent: 'center' }}> {`Medical Personel?`} </Text>

        <View style={{ flexDirection: 'row', textAlign: 'center', justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => { navigation.navigate('Doctor SignUp') }}>
            <Text style={{fontSize: 18, color: '#F47066' }}> {`SignUp`} </Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 800,
    backgroundColor: '#fff',
  },

  card: {
    backgroundColor: '#F47066',
    width: 380,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

  heartIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  header: {
    paddingTop: 25,
  },

  txtUser: {
    width: 245,
    height: 35,
    marginTop: 5,
    marginLeft: 2,
    paddingLeft: 8,
    paddingTop: 12,
    borderRadius: 10,
    ...Platform.select({
      web:{
        outlineColor: 'transparent'
      }
    })
  },
  prompt:{
    color:'#F47066',
    textAlign: "center"
  },
  txtPass: {
    width: 245,
    height: 35,
    marginTop: 5,
    marginLeft: 2,
    paddingLeft: 8,
    paddingTop: 12,
    borderRadius: 10,
    //backgroundColor: '#fff',
    ...Platform.select({
      web:{
        outlineColor: 'transparent'
      }
    })
  },

  txtCards: {
    width: 300,
    height: 50,
    borderRadius: 10,
    marginLeft: 2,
    marginTop: 35,
    paddingTop: 5,
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

})
