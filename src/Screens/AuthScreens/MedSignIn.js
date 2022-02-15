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

  const
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [displayModal, setDisplaModal] = useState(false),
    [message, setMessage] = useState("");
  const Login = () => {
    handleSignIn(email, password, setMessage, setDone)
    setDisplaModal(true)
    navigation.navigate('MedicalHome')
  }

  return (

    <View style={styles.container}>
      <AlertNote modalVisible={displayModal} setModalVisible={setDisplaModal} msg={message} />
      <Card style={styles.card}>
        <View style={styles.heartIcon}>
          <FontAwesome name="heartbeat" size={110} color="#fff" />
        </View>
        <Text style={{ color: '#fff', fontSize: 28, marginLeft: 15 }}> {`X-urgency`} </Text>
      </Card>

      <View style={styles.header}>
        <Text style={{
           fontSize: 40, ...Platform.select({
            web: {
              //fontFamily: 'Cooper',
              fontWeight:'bold',
              
              paddingTop: 25
            }
          }),
          color: '#F47066'
        }}>{`Medical SignIn`}</Text>
      </View>

      <View>
        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <AntDesign name="user" size={20} color="black" style={{ marginTop: 10, marginLeft: 8 }} />
            <TextInput style={styles.txtField} name='username' placeholder='Username' onChangeText={text => setEmail(text)} />
          </View>
        </Card>

        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <EvilIcons name="lock" size={28} color="black" style={{ marginTop: 7, marginLeft: 4 }} />
            <TextInput style={styles.txtField}
              name='password' placeholder='Password'
              secureTextEntry={true}
              onChangeText={text => setPassword(text)} />
          </View>
        </Card>

        <TouchableOpacity onPress={() => { navigation.navigate('Reset Password') }}>
          <Text style={{ paddingLeft: 180, paddingTop: 10, color: '#F47066' }}>{`Forgot Password?`} </Text>
        </TouchableOpacity>

        <View style={{ alignItems: 'center', alignContent: 'center' }}>
          <TouchableOpacity style={styles.signIn} onPress={Login}>
            <Text style={{ color: '#fff' }}>{`LOGIN`} </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', textAlign: 'center', justifyContent: 'center' }}>
          <Text style={{ paddingTop: 9, fontSize: 14, }}>  {`New User?`} </Text>
          <TouchableOpacity onPress={() => { navigation.navigate('Doctor SignUp') }}>
            <Text style={{ paddingTop: 5, fontSize: 18, color: '#F47066' }}> {`SignUp`}</Text>
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
    textAlign: 'center'
  },

  heartIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  header: {
    paddingTop: 5
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
