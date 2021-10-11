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
import React,{useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Card } from 'react-native-paper';
import { FontAwesome, AntDesign, EvilIcons } from '@expo/vector-icons';
import SignUp from './SignUp'
import ForgotPassword from './ForgotPassword'
import {handleSignIn} from '../firebase'
import { AlertNote } from '../Components';

export default function SignIn({navigation, setDone}) {
  const 
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [displayModal, setDisplaModal] = useState(false),
    [message, setMessage] = useState("");
    

  const Login = () =>{
    handleSignIn(email, password, setMessage)
    setDisplaModal(true)
    setDone(true)
  }


  return (
    
    <View >
      <AlertNote modalVisible={displayModal} setModalVisible={setDisplaModal} msg={message}/>
      <Card style={styles.card}>
        <View style={styles.heartIcon}>
          <FontAwesome name="heartbeat" size={76} color="#fff" />
        </View>
        <Text style={{ color: '#fff', fontSize: 28, marginLeft: 15 }}> X-urgency </Text>
      </Card>

      <View style={styles.header}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, paddingLeft: 10 }}>LogIn</Text>
      </View>

      <View>
        <Card style={styles.txtCards}> 
        <View style={{flexDirection: 'row'}}> 
        <AntDesign name="user" size={22} color="black" style= {{marginTop:10, marginLeft: 8}} />
        <TextInput style={styles.txtUser} 
          name= 'username' placeholder= 'Username' onChangeText={text=>setEmail(text)} 
        />
        </View>
        </Card>

        <Card style={styles.txtCards}> 
         <View style={{flexDirection: 'row'}}> 
           <EvilIcons name="lock" size={28} color="black" style= {{ marginTop:8, marginLeft: 4}} />
           <TextInput style={styles.txtPass} 
             name= 'password' placeholder= 'Password' onChangeText={text=>setPassword(text)}  
           />   
        </View>
        </Card>

        <TouchableOpacity  onPress= {() => {navigation.navigate('Reset Password')}}>
        <Text style= {{paddingLeft: 220, paddingTop: 10, color: '#F47066'}}>Forgot Password? </Text>
        </TouchableOpacity>

        <TouchableOpacity style= {styles.signIn} onPress={Login}>
          <Text style= {{color: '#fff'}}>LOGIN </Text>
        </TouchableOpacity>

        <Text style={{ paddingTop: 5, paddingLeft: 120 }}>
          New User?
          <TouchableOpacity onPress={() => { navigation.navigate('Sign Up') }}>
            <Text style={{ color: '#F47066' }}> Sign Up</Text>
          </TouchableOpacity>

        </Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    card: {
      position: 'absolute',
      backgroundColor: '#F47066',
      filter: 'drop-shadow(0, 4, 4, rgba(0, 0, 0, 0.25))',
      width: 375,
      height: 280,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      alignItems: 'center',
      justifyContent: 'center'
    },
  
    heartIcon: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
    },
  
    header: {
      paddingTop: 300,
      paddingLeft: 130,
      paddingLeft: 150,
    },
  
    txtUser: {
      width: 320,
      height: 50,
      borderRadius: 10,
      outline: 'none',
      backgroundColor: 'lightgrey', 
      paddingLeft: 10,
    },
  
    txtPass: {
      width: 320,
      height: 50,
      borderRadius: 10,
      outline: 'none',
      border: 0,
      backgroundColor: 'lightgrey', 
      paddingLeft: 10,
    },
  
    txtRePass: {
      width: 320,
      height: 50,
      borderRadius: 10,
      outline: 'none',
      border: 0,
      backgroundColor: 'lightgrey', 
      paddingLeft: 10,
    },
  
    txtCards: {
      backgroundColor: 'lightgrey', 
      width: 320,
      height: 50, 
      borderRadius: 10,
      marginLeft: 28,
      marginTop: 25
    },
  
    signIn: { 
      height: 50, 
      width: 200, 
      marginLeft: 85,
      marginTop: 20,
      borderRadius: 10,
      backgroundColor: '#F47066',
      alignItems: 'center',
      justifyContent: 'center'
    },
   
    
  });