/**
    * @description      : 
    * @author           : MLab
    * @group            : 
    * @created          : 07/10/2021 - 10:00:40
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 07/10/2021
    * - Author          : MLab
    * - Modification    : 
**/
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPassword from './src/Screens/ForgotPassword';
// You can import from local files
import { SignIn, SignUp, Home, Strokes} from './src/Screens';
import {auth} from './src/firebase'
const Stack = createNativeStackNavigator();
export default function App() {

  const [successful, setSuccess] = useState(false),
        [user, setUser] = useState(null);

  useEffect(()=>{
    auth.onAuthStateChanged(user=>setUser(user))
  },[])
  return (
    <NavigationContainer>
      {successful?(
      user?(
        // Main Application
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" options={{ headerShown: false }} >
          {props=><Home {...props} setDone={setSuccess}/>}
        </Stack.Screen>
          <Stack.Screen name="Strokes" component={Strokes} options={{ headerShown: false }}/>
        </Stack.Navigator>
      ):(
        //Loader
        null
      )
    ):(
    // Login/Sign functions
    
      <Stack.Navigator initialRouteName="SignIn">



        <Stack.Screen name="Sign In" options={{ headerShown: false }} >
          {props=><SignIn {...props} setDone={setSuccess}/>}
        </Stack.Screen>

        <Stack.Screen name="Sign Up" options={{ headerShown: false }}>
          {props=><SignUp {...props} setDone={setSuccess}/>}
        </Stack.Screen>

        <Stack.Screen name="Reset Password" component={ForgotPassword} options={{ headerShown: false }}/>

        

        



      </Stack.Navigator>
    
     )}
    </NavigationContainer>
  );
}