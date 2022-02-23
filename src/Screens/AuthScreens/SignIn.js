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

export default function SignIn({ navigation }) {

  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [displayModal, setDisplaModal] = useState(false),
    [message, setMessage] = useState(""),
    [prompt, setPrompt] = useState(null),
    [prompt1, setPrompt1] = useState(null),
    [prompt2, setPrompt2] = useState(null);

  const Login = (setDone) => {
    if (email === "" && password === "") {
      setPrompt("Please enter thr requested information")
    } else if (email === "") {
      setPrompt(null)
      setPrompt1("Please enter email address")
      setPrompt2(null)
    } else if (password === "") {
      setPrompt(null)
      setPrompt1(null)
      setPrompt2("Please enter password")
    } else {
      handleSignIn(email, password, setMessage
      )
      setDisplaModal(true)
      navigation.navigate('Home', {setDone})
    }

  }

  return (

    <View style={styles.container}>
      <AlertNote modalVisible={displayModal} setModalVisible={setDisplaModal} msg={message} />
      
      <Card style={styles.card}>
        <View style={styles.heartIcon}>
          <FontAwesome name="heartbeat" size={110} color="#fff" />
        </View>
        <Text style={{ fontFamily: 'Arial', color: '#fff', fontSize: 30 }}> {`X-urgency`} </Text>
      </Card>

      <View style={styles.header}>
        <Text style={{
          fontSize: 30,
          fontWeight:'bold', ...Platform.select({
            web: {
              fontFamily: 'Arial'
            }
          }),
          color: '#F47066'
        }}>{`SignIn`}</Text>
      </View>
      {prompt ? <Text style={styles.prompt} >{prompt}</Text> : null}

      <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <AntDesign name="user" size={22} color="black" style={{ marginTop: 16, marginLeft: 18 }} />
            <TextInput style={styles.txtUser} name='username' placeholder='Username' onChangeText={text => setEmail(text)} />
          </View>
        </Card>
        {prompt1 ? <Text style={styles.prompt}>{prompt1}</Text> : null}

        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <EvilIcons name="lock" size={32} color="black" style={{ marginTop: 12, marginLeft: 12 }} />
            <TextInput style={styles.txtPassword} name='password' placeholder='Password' secureTextEntry={true} onChangeText={text => setPassword(text)} />
          </View>
        </Card>
        {prompt2 ? <Text style={styles.prompt}>{prompt2}</Text> : null}

        <View style={{ width: '80%', alignItems: 'flex-end' }}>
          <TouchableOpacity
            onPress={() => { navigation.navigate('ForgotPassword') }}>
            <Text style={{ paddingTop: 20, fontSize: 18, fontFamily: 'Arial', color: '#F47066' }}>{`Forgot Password?`} </Text>
          </TouchableOpacity>
        </View>

        <View style={{ width: '100%', alignItems: 'center', alignContent: 'center' }}>
          <TouchableOpacity style={styles.signIn} onPress={Login}>
            <Text style={{ fontSize: 20, fontFamily: 'Arial', color: '#fff' }}>{`LOGIN`} </Text>
          </TouchableOpacity>
        </View>

        <View style={{width:335, marginRight:10, marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ paddingTop: 10, fontWeight:'bold', color:'grey', fontSize: 15, }}>  {`New User?`} </Text>
          
          <View style={{ marginTop: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => { navigation.navigate('Sign Up') }}>
              <Text style={{ paddingTop: 9, fontSize: 20, fontFamily: 'Arial', color: '#F47066' }}> {`SignUp`}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: 10, }} >
          <Text style={{ paddingTop: 10, fontWeight: 'bold', color: 'grey', fontSize: 15, textAlign: 'center', justifyContent: 'center' }}> {`Medical Personel?`} </Text>
          <View style={{ flexDirection: 'row', textAlign: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('MedSignIn')}>
              <Text style={{ fontFamily: 'Arial', fontSize: 20, paddingTop: 5, color: '#F47066' }}> {`SignIn`} </Text>
            </TouchableOpacity>
          </View>
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
    width: '100%',
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
    fontSize: 36,
    fontFamily: 'Cooper',
    color: '#F47066'
  },

  txtUser: {
    marginTop: 7,
    paddingLeft: 10,
    paddingTop: 15,
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

  prompt: {
    color: '#F47066',
    textAlign: "center"
  },

  txtPassword: {
    height: 35,
    marginTop: 5,
    paddingLeft: 6,
    paddingTop: 20,
    fontSize: 18,
    fontFamily: 'Arial',
    borderRadius: 10,
    ...Platform.select({
      web: {
        outlineColor: '#fff',
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
    backgroundColor:'#fff',
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

})
