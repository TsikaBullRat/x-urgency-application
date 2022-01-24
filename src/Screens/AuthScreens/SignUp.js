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
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { FontAwesome, AntDesign, EvilIcons } from '@expo/vector-icons';
import { handleSignUp } from '../../firebase';
import { AlertNote } from '../../Components/Alert';

export default function SignUp({ navigation }) {

  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [ConfirmPassword, setConfirmPassword] = useState(""),
    [displayModal, setDisplayModal] = useState(false),
    [message, setMessage] = useState("")
  const Register = () => {
    handleSignUp(email, password, ConfirmPassword, setEmail, setPassword, setConfirmPassword, setMessage)
    setDisplayModal(true)
  }
  return (
    <View style={styles.container}>
      <AlertNote modalVisible={displayModal} setModalVisible={setDisplayModal} msg={message} />
      
      <Card style={[styles.card, styles.shadowProp]}>
        <View style={styles.heartIcon}>
          <FontAwesome name="heartbeat" size={90} color="#fff" />
        </View>
        <Text style={{ color: '#fff', fontSize: 28, marginLeft: 15 }}> X-urgency </Text>
      </Card>

      <View style={styles.header}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, paddingLeft: 5 }}>SignUp</Text>
      </View>

      <View>
        <Card style={[styles.txtCards, styles.shadowProp]}>
          <View style={{ flexDirection: 'row' }}>
            <AntDesign name="user" size={20} color="black" style={{ marginTop: 10, marginLeft: 8 }} />
            <TextInput style={styles.txtUser}
              name='username' placeholder='Username' onChangeText={text => setEmail(text)}
            />
          </View>
        </Card>

        <Card style={[styles.txtCards, styles.shadowProp]}>
          <View style={{ flexDirection: 'row' }}>
            <EvilIcons name="lock" size={28} color="black" style={{ marginTop: 8, marginLeft: 4 }} />
            <TextInput style={styles.txtPass}
              name='password' placeholder='Password'
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
            />
          </View>
        </Card>

        <Card style={[styles.txtCards, styles.shadowProp]}>
          <View style={{ flexDirection: 'row' }}>
            <EvilIcons name="lock" size={28} color="black"
              style={{ marginTop: 9, marginLeft: 4 }}
            />
            <TextInput style={styles.txtRePass}
              name='password' placeholder='Re-enter Password'
              secureTextEntry={true}
              onChangeText={text => setConfirmPassword(text)}
            />
          </View>
        </Card>

        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity style={[styles.signIn, styles.shadowProp]} onPress={() => { navigation.navigate('Home') }}>
            <Text style={{ color: '#fff' }} >SIGN_UP </Text>
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

  txtUser: {
    width: 260,
    height: 38,
    borderRadius: 10,
    outlineColor: 'transparent',
    backgroundColor: 'lightgrey',
    padding: 5,
    paddingTop: 18,
  },

  txtPass: {
    width: 260,
    height: 50,
    borderRadius: 10,
    outlineColor: 'transparent',
    backgroundColor: '#ffffff',
    padding: 5,
    paddingTop: 18,
  },

  txtRePass: {
    width: 260,
    height: 50,
    borderRadius: 10,
    outlineColor: 'transparent',
    backgroundColor: '#ffffff',
    padding: 5,
    paddingTop: 18,
  },

  txtCards: {
    backgroundColor: '#ffffff',
    width: 285,
    height: 50,
    borderRadius: 10,
    marginLeft: 2,
    marginTop: 25,
    borderWidth: 1,
    borderColor: '#F47066',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },

  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2,     height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
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

