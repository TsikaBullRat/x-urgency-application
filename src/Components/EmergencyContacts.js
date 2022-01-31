import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome, AntDesign, EvilIcons } from '@expo/vector-icons';
import { Card } from "react-native-paper";

const Emergency = ({ navigation }) => {

    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.head}> {"Emergency? \n CALL NOW!"}</Text>
            </View>

            <View>

                <TouchableOpacity>
                    <Card style={[styles.card7, styles.ShadowProp]}>
                        <Text style={{ marginLeft: 150, fontWeight: "bold", fontSize: 18, marginTop: 5, }}>Nationwide</Text>
                        <FontAwesome name="world" size={30} color="black" style={{ marginTop: 1, marginLeft: 190 }} />
                        <Text style={{ marginLeft: 180, fontWeight: "bold", fontSize: 20, marginTop: -1, }}>112</Text>
                    </Card>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Card style={[styles.card, styles.ShadowProp]}>
                        <Text style={{ marginLeft: 60, fontWeight: "bold", fontSize: 15, marginTop: 5, }}>Police</Text>
                        <FontAwesome name="car" size={30} color="black" style={{ marginTop: 1, marginLeft: 70 }} />
                        <Text style={{ marginLeft: 52, fontWeight: "bold", fontSize: 20, marginTop: -1, }}>10111</Text>
                    </Card>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Card style={[styles.card1, styles.ShadowProp]}>
                        <Text style={{ marginLeft: 40, fontWeight: "bold", fontSize: 16, marginTop: 5, }}>Ambulance</Text>
                        <FontAwesome name="ambulance" size={30} color="black" style={{ marginTop: 1, marginLeft: 60 }} />
                        <Text style={{ marginLeft: 50, fontWeight: "bold", fontSize: 20, marginTop: -1, }}>10177</Text>
                    </Card>
                </TouchableOpacity>

            </View>

            <View>

                <TouchableOpacity>
                    <Card style={[styles.card2, styles.ShadowProp]}>
                        <Text style={{ marginLeft: 60, fontWeight: "bold", fontSize: 18, marginTop: 5, }}>Fire</Text>
                        <FontAwesome name="fire" size={30} color="black" style={{ marginTop: 1, marginLeft: 65 }} />
                        <Text style={{ marginLeft: 55, fontWeight: "bold", fontSize: 24, marginTop: -1, }}>999</Text>
                    </Card>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Card style={[styles.card3, styles.ShadowProp]}>
                        <Text style={{ marginLeft: 50, fontWeight: "bold", fontSize: 15, marginTop: 5, }}>Air Rescue</Text>
                        <FontAwesome name="plane" size={30} color="black" style={{ marginTop: 1, marginLeft: 70 }} />
                        <Text style={{ marginLeft: 40, fontWeight: "bold", fontSize: 20, marginTop: -1, }}>083 1999</Text>
                    </Card>
                </TouchableOpacity>

            </View>

            <View>

                <TouchableOpacity>
                    <Card style={[styles.card4, styles.ShadowProp]}>
                        <Text style={{ marginLeft: 50, fontWeight: "bold", fontSize: 15, marginTop: 5, }}>Childline</Text>
                        <FontAwesome name="child" size={30} color="black" style={{ marginTop: 1, marginLeft: 70 }} />
                        <Text style={{ marginLeft: 20, fontWeight: "bold", fontSize: 20, marginTop: -1, }}>0800 055 555</Text>
                    </Card>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Card style={[styles.card5, styles.ShadowProp]}>
                        <Text style={{ marginLeft: 30, fontWeight: "bold", fontSize: 15, marginTop: 5, }}>Suicide Crisis Line</Text>
                        <FontAwesome name="abuse" size={30} color="black" style={{ marginTop: 1, marginLeft: 80 }} />
                        <Text style={{ marginLeft: 20, fontWeight: "bold", fontSize: 20, marginTop: -1, }}>0800 567 567</Text>
                    </Card>
                </TouchableOpacity>

            </View>

            <View>

                <TouchableOpacity>
                    <Card style={[styles.card6, styles.ShadowProp]}>
                        <Text style={{ marginLeft: 30, fontWeight: "bold", fontSize: 15, marginTop: 5, }}>Gender Based Violence Command Center</Text>
                        <FontAwesome name="transgender" size={30} color="black" style={{ marginTop: 1, marginLeft: 160 }} />
                        <Text style={{ marginLeft: 100, fontWeight: "bold", fontSize: 20, marginTop: -1, }}>0800 428 428</Text>
                    </Card>
                </TouchableOpacity>

            </View>

            <View>

                <TouchableOpacity>
                    <Card style={[styles.card7, styles.ShadowProp]}>
                        <Text style={{ marginLeft: 30, fontWeight: "bold", fontSize: 15, marginTop: 5, }}>National Institute For Communicable Diseases</Text>
                        <FontAwesome name="virus" size={30} color="black" style={{ marginTop: 1, marginLeft: 160 }} />
                        <Text style={{ marginLeft: 100, fontWeight: "bold", fontSize: 20, marginTop: -1, }}>0800 029 999</Text>
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