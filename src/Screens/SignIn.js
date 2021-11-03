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
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { FontAwesome, AntDesign, EvilIcons } from '@expo/vector-icons';
import { handleSignIn } from '../firebase'
import { AlertNote } from '../Components';

export default function SignIn({ navigation, setDone }) {
  const
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [displayModal, setDisplaModal] = useState(false),
    [message, setMessage] = useState("");
<<<<<<< HEAD

=======
>>>>>>> a63d26169c456fc56b6ac4f4bd7654c1144d2b68
  const Login = () => {
    handleSignIn(email, password, setMessage, setDone)
    setDisplaModal(true)
    navigation.navigate('Home')
  }
  return (
    <View style={styles.container}>
      <AlertNote modalVisible={displayModal} setModalVisible={setDisplaModal} msg={message} />
      <Card style={styles.card}>
        <View style={styles.heartIcon}>
          <FontAwesome name="heartbeat" size={90} color="#fff" />
        </View>
        <Text style={{ color: '#fff', fontSize: 28, marginLeft: 15 }}> X-urgency </Text>
      </Card>
      <View style={styles.header}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>LogIn</Text>
      </View>
      <View>
        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <AntDesign name="user" size={22} color="black" style={{ marginTop: 10, marginLeft: 8 }} />
            <TextInput style={styles.txtUser}
              name='username' placeholder='Username' onChangeText={text => setEmail(text)}
            />
          </View>
        </Card>
        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <EvilIcons name="lock" size={28} color="black" style={{ marginTop: 8, marginLeft: 4 }} />
            <TextInput style={styles.txtPass}
              name='password' placeholder='Password'
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
            />
          </View>
        </Card>
        <TouchableOpacity onPress={() => { navigation.navigate('Reset Password') }}>
          <Text style={{ paddingLeft: 180, paddingTop: 10, color: '#F47066' }}>Forgot Password? </Text>
        </TouchableOpacity>
        <View style={{ alignItems: 'center', alignContent: 'center' }}>
          <TouchableOpacity style={styles.signIn} onPress={Login}>
            <Text style={{ color: '#fff' }}>LOGIN </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', textAlign: 'center', justifyContent: 'center' }}>
          <Text style={{ paddingTop: 5 }}>
            New User?
          </Text>
          <TouchableOpacity onPress={() => { navigation.navigate('Sign Up') }}>
            <Text style={{ paddingTop: 5, color: '#F47066' }}> SignUp</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ paddingTop: 10, textAlign: 'center', justifyContent: 'center' }}>
          Medical Personel?
        </Text>
        <View style={{ flexDirection: 'row', textAlign: 'center', justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => { navigation.navigate('Doctor SignUp') }}>
            <Text style={{ color: '#F47066' }}> SignUp /</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { navigation.navigate('MedicalHome') }}>
            <Text style={{ color: '#F47066' }}> SignIn</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },

  card: {
    backgroundColor: '#F47066',
    width: 325,
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

  txtUser: {
    width: 260,
    height: 40,
    borderRadius: 10,
    outline: 'none',
    backgroundColor: 'lightgrey',
    paddingLeft: 10,
  },

  txtPass: {
    width: 260,
    height: 40,
    borderRadius: 10,
    outline: 'none',
    backgroundColor: 'lightgrey',
    paddingLeft: 10,
  },

  txtCards: {
    backgroundColor: 'lightgrey',
    width: 285,
    height: 40,
    borderRadius: 10,
    marginLeft: 2,
    marginTop: 25
  },

  signIn: {
    height: 50,
    width: 200,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#F47066',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
