/**
 * @description      :
 * @author           : TLeeuw
 * @group            :
 * @created          : 12/10/2021 - 16:06:47
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 12/10/2021 
 * - Author          : TLeeuw
 * - Modification    :
 **/
import React, { useState, useEffect } from "react";
import { NavigationContainer, TabRouter } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// You can import from local files
import { auth, Check, LoadSet } from './src/firebase'
import { StyleSheet, NativeModules } from 'react-native';
import { AuthScreens } from "./src/Screens";

export default function App() {
  const [id, setID] = useState();
  const [details, setDetails] = useState(null);
  const [mainComponent, setComponent] = useState(null);
  const Load = () =>{
    if(id){
      try{
        return <Check id={id} details={details}/>
      }catch(err){
        return <AuthScreens setDetails={setDetails} />
      }
    }else{
      return <AuthScreens setDetails={setDetails} />
    }
  }

  useEffect(() => {
    auth.onAuthStateChanged(user => user ? setID(user.uid) : null)
  }, [ true ])

  useEffect(()=>{
    console.log(id)
  }, [id])

  useEffect(()=>{
    id?(
    setComponent(Load())
    ):(
      NativeModules.DevSettings.reload(),
      setComponent(Load())
    )
  }, [id])

  return (
    <NavigationContainer>
      <KeyboardAwareScrollView>
      {mainComponent}
      </KeyboardAwareScrollView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loader: {
    alignItems: "center",
    justifyContent: "center"
  }
});
