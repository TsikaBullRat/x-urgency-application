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

import React, { useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform
} from 'react-native'
import { Card } from 'react-native-paper'
import { FontAwesome, AntDesign, EvilIcons } from '@expo/vector-icons'
import { handleSignIn } from '../../firebase/Auth/HandleSignIn'
import { AlertNote } from '../../Components'

export default function MedSignIn ({ navigation }) {
  const [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    [displayModal, setDisplaModal] = useState(false),
    [message, setMessage] = useState('')

  const Login = () => {
    handleSignIn(email, password, setMessage, setDone)
    setDisplaModal(true)
  }

  return (
    <View style={styles.container}>
      <AlertNote
        modalVisible={displayModal}
        setModalVisible={setDisplaModal}
        msg={message}
      />

      <View style={{ width: 410 }}>
        <Card style={styles.card}>
          <View style={styles.heartIcon}>
            <FontAwesome name='heartbeat' size={110} color='#fff' />
          </View>
          <Text style={{ fontFamily: 'Arial', color: '#fff', fontSize: 30 }}>
            {' '}
            {`X-urgency`}{' '}
          </Text>
        </Card>
      </View>

      <View style={styles.header}>
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            color: '#F47066',
            fontWeight: 'bold',
            ...Platform.select({ web: { fontFamily: 'Arial' } })
          }}
        >{`Medical SignIn`}</Text>
      </View>

      <View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <AntDesign
              name='user'
              size={22}
              color='black'
              style={{ marginTop: 16, marginLeft: 18 }}
            />
            <TextInput
              style={styles.txtUser}
              name='username'
              placeholder='Username'
              onChangeText={text => setEmail(text)}
            />
          </View>
        </Card>

        <Card style={styles.txtCards}>
          <View style={{ flexDirection: 'row' }}>
            <EvilIcons
              name='lock'
              size={32}
              color='black'
              style={{ marginTop: 12, marginLeft: 12 }}
            />
            <TextInput
              style={styles.txtPassword}
              name='password'
              placeholder='Password'
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
            />
          </View>
        </Card>

        <View style={{ width: '80%', alignItems: 'flex-end' }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <Text
              style={{
                paddingTop: 20,
                fontSize: 18,
                fontFamily: 'Arial',
                color: '#F47066'
              }}
            >
              {`Forgot Password?`}{' '}
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: '100%',
            alignItems: 'center',
            alignContent: 'center'
          }}
        >
          <TouchableOpacity style={styles.signIn} onPress={Login}>
            <Text style={{ fontSize: 20, fontFamily: 'Arial', color: '#fff' }}>
              {`LOGIN`}{' '}
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            textAlign: 'center',
            justifyContent: 'center'
          }}
        >
          <Text style={{ paddingTop: 10, fontSize: 15 }}> {`New User?`} </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Doctor SignUp')}
          >
            <Text
              style={{
                paddingTop: 10,
                fontSize: 20,
                fontFamily: 'Arial',
                color: '#F47066'
              }}
            >
              {' '}
              {`SignUp`}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{ marginVertical: 20 }}
          onPress={() => navigation.goBack()}
        >
          <Text>{`BACK`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  card: {
    width: '100%',
    height: 310,
    backgroundColor: '#F47066',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },

  heartIcon: {
    marginTop: 85,
    alignItems: 'center'
  },

  header: {
    marginTop: 20
  },

  textfieldCards: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  txtUser: {
    marginTop: 7,
    // paddingLeft: 10,
    paddingTop: 10,
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
    textAlign: 'center'
  },

  txtPassword: {
    height: 35,
    marginTop: 5,
    // paddingLeft: 6,
    paddingTop: 20,
    fontSize: 18,
    fontFamily: 'Arial',
    borderRadius: 10,
    ...Platform.select({
      web: {
        outlineColor: '#fff'
      }
    })
  },

  txtCards: {
    width: '95%',
    height: 50,
    borderRadius: 10,
    marginTop: 35,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#F47066'
  },

  reset: {
    width: '97%',
    alignItems: 'flex-end'
  },

  loginView: {
    width: 360,
    alignItems: 'center',
    justifyContent: 'center'
  },

  newUser: {
    width: 335,
    marginRight: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  signIn: {
    height: 50,
    width: '60%',
    marginTop: 40,
    borderRadius: 10,
    backgroundColor: '#F47066',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
