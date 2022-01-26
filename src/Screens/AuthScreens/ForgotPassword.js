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
import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, } from 'react-native';
import { Card } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { handleResetPassword } from '../../firebase'

export default function ForgotPassword() {
  const forgotPassword = () => {
    handleResetPassword("lindiwe.mpondo@gmail.com")
  }
  const Exit = () => {
    alert("Successfully logged out")
  }
  return (
    <View >
      <Card style={styles.card}>
        <View style={styles.heartIcon}>
          <FontAwesome name="heartbeat" size={76} color="#fff" />
        </View>
        <Text style={{ color: '#fff', fontSize: 28, marginLeft: 15 }}> X-urgency </Text>
      </Card>
      <View style={styles.header} >
        <Text style={{ fontWeight: 'bold', fontSize: 18, paddingLeft: 5 }}>Reset Password</Text>
      </View>
      <View>
        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <AntDesign name="user" size={22} color="black" />
            <TextInput style={styles.txtUser}
              name='username' placeholder='Username'
            />
          </View>
        </Card>
        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <EvilIcons name="lock" size={28} color="black" style={{ marginTop: 10, }} />
            <TextInput style={styles.txtPass}
              name='password' placeholder='New Password'
            />
          </View>
        </Card>
        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <EvilIcons name="lock" size={28} color="black" style={{ marginTop: 10, }} />
            <TextInput style={styles.txtRePass}
              name='password' placeholder='Confirm Password'
            />
          </View>
        </Card>
        <TouchableOpacity style={styles.signIn} onPress={forgotPassword}>
          <Text style={{ color: '#fff' }}>Reset Password </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signIn} onPress={Exit}>
          <Text style={{ color: '#fff' }}>Exit</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    textAlign: 'center',
    height: 950,
    backgroundColor: '#fff'
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
    height: 35,
    borderRadius: 10,
    outline: 'none',
    backgroundColor: 'lightgrey',
    padding: 8,
    paddingTop: 20
  },
  txtPass: {
    width: 280,
    height: 35,
    borderRadius: 10,
    outline: 'none',
    border: 0,
    backgroundColor: 'lightgrey',
    padding: 5,
    paddingTop: 18
  },
  txtRePass: {
    width: 280,
    height: 35,
    borderRadius: 10,
    outline: 'none',
    border: 0,
    backgroundColor: 'lightgrey',
    padding: 5,
    paddingTop: 18
  },
  txtCards: {
    backgroundColor: 'lightgrey',
    width: 280,
    height: 40,
    borderRadius: 10,
    marginTop: 25,
    borderWidth: 2,
    borderColor: '#F47066'
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
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2,     height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
});