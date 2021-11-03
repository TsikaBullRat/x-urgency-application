/**
    * @description      : 
    * @author           : TLeeuw
    * @group            : 
    * @created          : 03/11/2021 - 11:05:52
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 03/11/2021
    * - Author          : TLeeuw
    * - Modification    : 
**/
import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { FontAwesome, AntDesign, EvilIcons } from '@expo/vector-icons';
import { handleSignUp } from '../firebase';
import { AlertNote } from '../Components/Alert';
export default function DoctorSignUp({ navigation }) {
    const [email, setEmail] = useState(""),
        [password, setPassword] = useState(""),
        [Confirmpassword, setConfirmPassword] = useState(""),
        [displayModal, setDisplaModal] = useState(false),
        [message, setMessage] = useState("")

    const DoctorRegister = () => {
        handleSignUp(email, password, Confirmpassword, setEmail, setPassword, setConfirmPassword, setMessage)
        setDisplaModal(true)
    }
    return (
        <View style={styles.container}>
            <AlertNote modalVisible={displayModal} setModalVisible={setDisplaModal} msg={message} />

            <Card style={styles.card}>
                <View style={styles.heartIcon}>
                    <FontAwesome name="heartbeat" size={90} color="#fff" />
                </View>

                <Text style={{ color: '#fff', fontSize: 28, marginLeft: 15 }}> X-urgency
                </Text>
            </Card>

            <View style={styles.header}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, paddingLeft: 5 }}>Doctor SignUp</Text>
            </View>

            <View>
                
                        <Card style={styles.txtCards}>
                            <View style={{ flexDirection: 'row' }}>
                                <TextInput style={styles.txtField}
                                    name='Branch' placeholder='Branch'
                                />
                            </View>
                        </Card>
                        <Card style={styles.txtCards}>
                            <View style={{ flexDirection: 'row' }}>
                                <TextInput style={styles.txtField}
                                    name='Contact Details' placeholder='Contact Details'
                                />
                            </View>
                        </Card>

                        <Card style={styles.txtCards}>
                            <View style={{ flexDirection: 'row' }}>
                                <AntDesign name="user" size={20} color="black" style={{ marginTop: 10, marginLeft: 8 }} />
                                <TextInput style={styles.txtField}
                                    name='Email' placeholder='Email' 
                                    value= '' onChangeText={text => setEmail(text)}
                                />
                            </View>
                        </Card>

                        <Card style={styles.txtCards}>
                            <View style={{ flexDirection: 'row' }}>
                                <EvilIcons name="lock" size={28} color="blwack" style={{ marginTop: 8, marginLeft: 4 }} />
                                <TextInput style={styles.txtField}
                                    name='password' placeholder='Password'
                                    secureTextEntry={true} value= ''
                                    onChangeText={text => setPassword(text)}
                                />
                            </View>
                        </Card>

                        <Card style={styles.txtCards}>
                            <View style={{ flexDirection: 'row' }}>
                                <EvilIcons name="lock" size={28} color="black"
                                    style={{ marginTop: 9, marginLeft: 4 }}
                                />
                                <TextInput style={styles.txtRePass}
                                    name='password' placeholder='Re-enter Password'
                                    secureTextEntry={true}
                                    onChangeText={text => setConfirmPassword(text)}
                                />
                            </View>
                        </Card>

                    <View style={{ alignItems: 'center' }}>
                      <TouchableOpacity style={styles.signIn} onPress={() => { navigation.navigate('MedicalHome') }}>

                        <Text style={{ color: '#fff' }}>SIGNUP </Text>
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
        paddingTop: 10,
    },

    txtField: {
        width: 285,
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
        marginTop: 15
    },

    signIn: {
        height: 50,
        width: 200,
        marginTop: 35,
        borderRadius: 10,
        backgroundColor: '#F47066',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
