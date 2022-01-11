/**
    * @description      : 
    * @author           : TLeeuw
    * @group            : 
    * @created          : 09/11/2021 - 14:41:15
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 09/11/2021
    * - Author          : TLeeuw
    * - Modification    : 
**/
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, PlayVideo} from '..';
import SignIn from '../AuthScreens/SignIn'
import SignUp from '../AuthScreens/SignUp'
import DocSignIn from '../AuthScreens/DocSignIn'
import DoctorSignUp from '../AuthScreens/DoctorSignUp'
import DocSignUp from '../AuthScreens/DocSignUp'
import MedicalHome from '../DoctorsScreens/MedicalHome'
import Upload from '../DoctorsScreens/Upload'
import UploadVideo from '../DoctorsScreens/UploadVideo'

const Stack = createNativeStackNavigator()

export const UserScreens = () =>{
    return(
        <Stack.Navigator initialRouteName="SignIn">

        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />

        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />

        <Stack.Screen name="DocSignIn" component={DocSignIn} options={{ headerShown: false }} />

        <Stack.Screen name="DocSignUp" component={DocSignUp} options={{ headerShown: false }} />

        <Stack.Screen name="DoctorSignUp" component={DoctorSignUp} options={{ headerShown: false }} />

        <Stack.Screen name="PlayVideo" component={PlayVideo} options={{ headerShown: false }} />

        <Stack.Screen name="Home" options={{ headerShown: false }} >
        {props => <Home {...props}/>}
        </Stack.Screen>

        
            <Stack.Screen name="MedicalHome" options={{ headerShown: false }} >
        {props => <MedicalHome {...props}/>}
        </Stack.Screen>

        <Stack.Screen name="Upload" options={{ headerShown: false }} >
        {props => <Upload {...props}/>}
        </Stack.Screen>

        <Stack.Screen name="UploadVideo" options={{ headerShown: false }} >
        {props => <UploadVideo {...props}/>}
        </Stack.Screen>

            

        </Stack.Navigator>
    )   
}