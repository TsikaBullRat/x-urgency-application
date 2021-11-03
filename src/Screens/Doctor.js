import React from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import { Avatar, Badge } from 'react-native-elements';

const DoctorProfile = () => {

    return (
        <View style={styles.container}>

            <View style={{ marginTop: 50, marginLeft: 10 }}>
                <Avatar style={styles.avatar}
                    rounded
                    source={{
                        uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                    }}
                    size="large"
                />
                <Badge
                    status="success"
                    containerStyle={{ position: 'absolute', top: -4, right: -4 }}
                />
            </View>

            <Text style={styles.textTitle}>Dr Keahara</Text>

            <View style={styles.box}>
                <Text style={styles.textTitle2}>Qualification</Text>
                <Text style={styles.textTitle2}>Specialization</Text>
                <Text style={styles.textTitle2}>Contacts</Text>
            </View>

            <Text style={styles.textTitle}>About Doctor</Text>
            <Text style={{ paddingTop: 20, marginTop: 15, }}>
                Hi I am Keahara.........more information about doctor.
              
            </Text>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 44
    },

    textTitle: {
        color: 'red',
        fontSize: 25,
        marginTop: 25
    },

    textTitle2: {
       
        fontSize: 15,
        marginTop: 20,
        marginLeft: 15

    },

    box: {
        flexDirection: "row",

    },

    avatar: {
        width: 70,
        height: 70,
        borderRadius: 50,
        margingTop: 80,
        borderBottomWidth: 3,
        borderColor: 'turquoise',
        shadowColor: 'grey',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.4,
        elevation: 1,
    },
})
export default DoctorProfile;