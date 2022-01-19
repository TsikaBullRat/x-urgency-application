/**
    * @description      : 
    * @author           : TLeeuw
    * @group            : 
    * @created          : 03/11/2021 - 12:02:33
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 03/11/2021
    * - Author          : TLeeuw
    * - Modification    : 
**/
import React from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import { Avatar, Badge } from 'react-native-elements';

export default function Header() {

  return (
    <View style={styles.contain}>
      {/*---------------------------Header--------------------------*/}
      <View style={{ flexDirection: 'row', width: 295, justifyContent: 'flex-start' }}>
        <View style={styles.header}>
          <Text>
            What's your
          </Text>
          <Text>
            EMERGENCY ?
          </Text>
        </View>
        <View style={{ marginTop: 50, marginLeft: 10 }}>
          <Avatar style={styles.avatar}
            rounded
            source={{
              uri: 'https://randomuser.me/api/portraits/men/40.jpg',
            }}
            size="large"
          />
          <Badge
            status="success"
            containerStyle={{ position: 'absolute', top: -4, right: -4 }}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  contain: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },

  header: {
    flexDirection: 'column',
    color: '#F96056',
    fontSize: 36,
    //fontFamily: 'poor story'
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
