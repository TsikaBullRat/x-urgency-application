import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Card } from "react-native-paper";

const Emergency = ({ navigation }) => {

    const Call = (number) => {
        Linking.openURL(`tel:${number}`)
    }

    return (

        <View style={styles.container}>

            <View>
                <Text style={styles.head}> {"EMERGENCY? \n CALL NOW!"}</Text>
            </View>

            <View>

                <TouchableOpacity onPress={() => Call("112")} >
                    <Card style={[styles.card7, styles.ShadowProp]}>
                        <Text style={{ marginLeft: 150, fontWeight: "bold", fontSize: 18, marginTop: 5, color: "white" }}>Nationwide</Text>
                        <FontAwesome name="world" size={30} color="lightblue" style={{ marginTop: 1, marginLeft: 190 }} />
                        <Text style={{ marginLeft: 180, fontWeight: "bold", fontSize: 20, marginTop: -1, color: "white" }}>112</Text>
                    </Card>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Call("10111")}>
                    <Card style={[styles.card, styles.ShadowProp]}>
                        <Text style={{ marginLeft: 65, fontWeight: "bold", fontSize: 15, marginTop: 5, color: "white" }}>Police</Text>
                        <FontAwesome name="car" size={30} color="lightblue" style={{ marginTop: 1, marginLeft: 70 }} />
                        <Text style={{ marginLeft: 52, fontWeight: "bold", fontSize: 20, marginTop: -1, color: "white" }}>10111</Text>
                    </Card>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Call("10177")} >
                    <Card style={[styles.card1, styles.ShadowProp]}>
                        <Text style={{ marginLeft: 40, fontWeight: "bold", fontSize: 16, marginTop: 5, color: "white" }}>Ambulance</Text>
                        <FontAwesome name="ambulance" size={30} color="lightblue" style={{ marginTop: 1, marginLeft: 60 }} />
                        <Text style={{ marginLeft: 50, fontWeight: "bold", fontSize: 20, marginTop: -1, color: "white" }}>10177</Text>
                    </Card>
                </TouchableOpacity>

            </View>

            <View>

                <TouchableOpacity onPress={() => Call("999")} >
                    <Card style={[styles.card2, styles.ShadowProp]}>
                        <Text style={{ marginLeft: 60, fontWeight: "bold", fontSize: 18, marginTop: 5, color: "white" }}>Fire</Text>
                        <FontAwesome name="fire" size={30} color="lightblue" style={{ marginTop: 1, marginLeft: 65 }} />
                        <Text style={{ marginLeft: 55, fontWeight: "bold", fontSize: 24, marginTop: -1, color: "white" }}>999</Text>
                    </Card>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Call("0831999")} >
                    <Card style={[styles.card3, styles.ShadowProp]}>
                        <Text style={{ marginLeft: 50, fontWeight: "bold", fontSize: 15, marginTop: 5, color: "white" }}>Air Rescue</Text>
                        <FontAwesome name="plane" size={30} color="lightblue" style={{ marginTop: 1, marginLeft: 70 }} />
                        <Text style={{ marginLeft: 40, fontWeight: "bold", fontSize: 20, marginTop: -1, color: "white" }}>083 1999</Text>
                    </Card>
                </TouchableOpacity>

            </View>

            <View>

                <TouchableOpacity onPress={() => Call("0800055555")}>
                    <Card style={[styles.card4, styles.ShadowProp]}>
                        <Text style={{ marginLeft: 50, fontWeight: "bold", fontSize: 15, marginTop: 5, color: "white" }}>Childline</Text>
                        <FontAwesome name="child" size={30} color="lightblue" style={{ marginTop: 1, marginLeft: 70 }} />
                        <Text style={{ marginLeft: 20, fontWeight: "bold", fontSize: 20, marginTop: -1, color: "white" }}>0800 055 555</Text>
                    </Card>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Call("0800567567")}>
                    <Card style={[styles.card5, styles.ShadowProp]}>
                        <Text style={{ marginLeft: 30, fontWeight: "bold", fontSize: 15, marginTop: 5, color: "white" }}>Suicide Crisis Line</Text>
                        <FontAwesome name=" lifering " size={30} color="lightblue" style={{ marginTop: 1, marginLeft: 80 }} />
                        <Text style={{ marginLeft: 20, fontWeight: "bold", fontSize: 20, marginTop: -1, color: "white" }}>0800 567 567</Text>
                    </Card>
                </TouchableOpacity>

            </View>

            <View>

                <TouchableOpacity onPress={() => Call("0800428428")} >
                    <Card style={[styles.card6, styles.ShadowProp]}>
                        <Text style={{ marginLeft: 30, fontWeight: "bold", fontSize: 15, marginTop: 5, color: "white" }}>Gender Based Violence Command Center</Text>
                        <FontAwesome name="transgender" size={30} color="lightblue" style={{ marginTop: 1, marginLeft: 160 }} />
                        <Text style={{ marginLeft: 100, fontWeight: "bold", fontSize: 20, marginTop: -1, color: "white" }}>0800 428 428</Text>
                    </Card>
                </TouchableOpacity>

            </View>

            <View>

                <TouchableOpacity onPress={() => Call("0800029999")} >
                    <Card style={[styles.card7, styles.ShadowProp]}>
                        <Text style={{ marginLeft: 30, fontWeight: "bold", fontSize: 15, marginTop: 5, color: "white" }}>National Institute For Communicable Diseases</Text>
                        <FontAwesome name=" virus " size={30} color="lightblue" style={{ marginTop: 1, marginLeft: 160 }} />
                        <Text style={{ marginLeft: 100, fontWeight: "bold", fontSize: 20, marginTop: -1, color: "white" }}>0800 029 999</Text>
                    </Card>
                </TouchableOpacity>

            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
    },

    card: {
        width: 180,
        height: 100,
        backgroundColor: "#F47066",
        marginRight: 200,
        marginTop: 10,
    },

    card0: {
        width: 180,
        height: 100,
        backgroundColor: "#F47066",
        marginRight: 200,
        marginTop: 100,
    },

    ShadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.10,
        shadowRadius: 10,
    },

    card1: {
        width: 180,
        height: 100,
        backgroundColor: "#F47066",
        marginLeft: 200,
        marginTop: -100,
    },

    card2: {
        width: 180,
        height: 100,
        backgroundColor: "#F47066",
        marginLeft: 200,
        marginTop: 10,
    },

    card3: {
        width: 180,
        height: 100,
        backgroundColor: "#F47066",
        marginLeft: 1,
        marginTop: -100,
    },

    card4: {
        width: 180,
        height: 100,
        backgroundColor: "#F47066",
        marginLeft: 200,
        marginTop: 10,
    },

    card5: {
        width: 180,
        height: 100,
        backgroundColor: "#F47066",
        marginLeft: 1,
        marginTop: -100,
    },

    card6: {
        width: 378,
        height: 100,
        backgroundColor: "#F47066",
        marginLeft: 1,
        marginTop: 10,
    },

    card7: {
        width: 378,
        height: 100,
        backgroundColor: "#F47066",
        marginLeft: 1,
        marginTop: 10,
    },

    head: {
        width: 220,
        color: "#F47066",
        fontSize: 35,

    },

})

export default Emergency