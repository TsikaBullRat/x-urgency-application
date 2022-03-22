import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/Drawer";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { auth, firestore } from "./src/firebase/config";
import LogOut from "./src/firebase/Auth/LogOut";
import { StyleSheet } from "react-native";
import {
  Welcome,
  FollowMore,
  UrgentHelp,
  TakeVideo,
  ShareContent,
  LikeConn,
  PlayVideo,
  UploadVideo,
  MedicalHome,
  Upload,
  UpdateProfile,
  Home,
  EmergencyContacts,
  SignIn,
  SignUp,
  ForgotPassword,
  ResetPassword,
  DoctorSignUp,
  MedSignIn,
  Doctor,
  Clone,
} from "./src/Screens";

const Drawer = createDrawerNavigator();

export default function App() {
  const [id, setID] = useState(null);
  const [doctor, setDoctor] = useState(null);
  const [firstTimeUser, setFirstTimeUser] = useState(false);

  const Exit = () => {
    LogOut();
  };

  useEffect(() => {
    try {
      auth.onAuthStateChanged((doc) => (doc ? setID(doc.uid) : setID(null)));
    } catch (err) {
      null;
    }
  }, []);

  useEffect(() => {
    if (id) {
      firestore
        .collection("Users")
        .doc(id)
        .get()
        .then((doc) => setDoctor(doc.data().doctor));
    }
  }, [id]);

  useEffect(() => {
    if (auth.currentUser) {
      if (auth.currentUser.metadata.creationTime === new Date()) {
        setFirstTimeUser(true);
      }
    }
  }, [auth.currentUser]);

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {id ? (
          doctor ? (
            <>
              {firstTimeUser ? (
                <>
                  <Drawer.Screen name="TakeVideo" component={TakeVideo} options={{ headerShown: false }} />
                  <Drawer.Screen name="ShareContent" component={ShareContent} options={{ headerShown: false }} />
                  <Drawer.Screen name="LikeConn" component={LikeConn} options={{ headerShown: false }} />
                </>
              ) : null}
              <Drawer.Screen name="DocHome" options={{ headerShown: false }}>
                {(props) => <MedicalHome {...props} Exit={Exit} />}
              </Drawer.Screen>
              <Drawer.Screen name="Upload" options={{ headerShown: false }}>
                {(props) => <Upload {...props} />}
              </Drawer.Screen>
              <Drawer.Screen name="Update" component={UpdateProfile} options={{ headerShown: false }} />
              <Drawer.Screen name="UploadVideo" component={UploadVideo} options={{ headerShown: false }} />
              <Drawer.Screen name="PlayVideo" component={PlayVideo} options={{ headerShown: false }} />
              <Drawer.Screen name="Doctor" component={Doctor} options={{ headerShown: false }} />
            </>
          ) : (
            <>
              {firstTimeUser ? (
                <>
                  <Drawer.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
                  <Drawer.Screen name="FollowMore" component={FollowMore} options={{ headerShown: false }} />
                  <Drawer.Screen name="UrgentHelp" component={UrgentHelp} options={{ headerShown: false }} />
                </>
              ) : null}

              <Drawer.Screen name="Home" >
                {(props) => <Home {...props} Exit={Exit} />}
              </Drawer.Screen>
              <Drawer.Screen name="Doctor" component={Doctor} options={{ headerShown: false }} />
              <Drawer.Screen name="PlayVideo" component={PlayVideo} options={{ headerShown: false }} />
              <Drawer.Screen name="EmergencyContacts" options={{ headerShown: false }} >
                {(props) => <EmergencyContacts {...props} />}
              </Drawer.Screen>
            </>
          )
        ) : (
          <>
            <Drawer.Screen name="SignIn" options={{ headerShown: false }} component={SignIn} />
            
            <Drawer.Screen name="SignUp" options={{ headerShown: false }} component={SignUp} />

            <Drawer.Screen name="MedSignIn" options={{ headerShown: false }} component={MedSignIn} />

            <Drawer.Screen name="DoctorSignUp" options={{ headerShown: false }} component={DoctorSignUp} />

            <Drawer.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
            
            <Drawer.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
            <Drawer.Screen name="DocHome" options={{ headerShown: false }}>
                {(props) => <MedicalHome {...props} Exit={Exit} />}
                </Drawer.Screen>
          </>
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loader: {
    alignItems: "center",
    justifyContent: "center",
  },
});
