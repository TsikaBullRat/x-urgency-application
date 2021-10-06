/**
    * @description      : 
    * @author           : MLab
    * @group            : 
    * @created          : 05/10/2021 - 14:39:04
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 05/10/2021
    * - Author          : MLab
    * - Modification    : 
**/
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// You can import from local files
import { SignIn, SignUp } from './src/Screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Sign In" component={SignIn}
          options= {{headerShown: false}} /> 

        <Stack.Screen name="Sign Up" component={SignUp}   
          options= {{headerShown: false}} />
        </Stack.Navigator>

    </NavigationContainer>
  );
}

