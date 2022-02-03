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

export default function ForgotPassword({ navigation }) {

  const forgotPassword = () => {
    handleResetPassword("lindiwe.mpondo@gmail.com")
  }
  const Exit = () => {
    alert("Successfully logged out")
  }

  return (
    <View style={styles.container}>

      <Card style={styles.card}>
        <View style={styles.heartIcon}>
          <FontAwesome name="heartbeat" size={90} color="#fff" />
        </View>
        <Text style={{ color: '#fff', fontSize: 28}}> {`X-urgency`} </Text>
      </Card>

      <View style={styles.header} >
        <Text style={{ fontWeight: 'bold', fontSize: 36, color: '#51535D' }}>{`Reset Password`}</Text>
      </View>

      <View style={{alignItems:'center'}}>
        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <AntDesign name="user" size={20} color="black" style={{ marginTop: 10, marginLeft: 8 }} />
            <TextInput style={styles.txtField} name='email' placeholder='Email' />
          </View>
        </Card>

        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <EvilIcons name="lock" size={28} color="black" style={{ marginTop: 9, marginLeft: 8 }} />
            <TextInput style={styles.txtField} name='password' placeholder='New Password' />
          </View>
        </Card>

        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <EvilIcons name="lock" size={28} color="black" style={{ marginTop: 9, marginLeft: 8 }} />
            <TextInput style={styles.txtField} name='password' placeholder='Confirm Password' />
          </View>
        </Card>

        </View>

        <View style={{alignItems:'center'}}>
        <TouchableOpacity style={styles.signIn} onPress={forgotPassword}>
          <Text style={{ color: '#fff' }}>{`RESET PASSWORD`} </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signIn} onPress={Exit}>
          <Text style={{ color: '#fff' }}>{`EXIT`}</Text>
        </TouchableOpacity>

      </View>

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 979,
    backgroundColor: '#fff',
  },

  card: {
    backgroundColor: '#F47066',
    width: 325,
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
    textAlign: 'center'
  },

  txtField: {
    width: 245,
    height: 30,
    marginTop: 3,
    marginLeft: 2,
    paddingLeft: 10,
    paddingTop: 15,
    borderRadius: 10,
    outlineColor: 'transparent',
  },

  txtCards: {
    width: 285,
    height: 50,
    borderRadius: 10,
    marginLeft: 2,
    marginTop: 75,
    borderWidth: 1,
    borderColor: '#F47066',
  },

  signIn: {
    height: 50,
    width: 200,
    marginTop: 60,
    borderRadius: 10,
    backgroundColor: '#F47066',
    alignItems: 'center',
    justifyContent: 'center',
  },

});