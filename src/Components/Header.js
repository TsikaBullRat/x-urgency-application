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
      <View
        style={{
          flexDirection: 'row',
          maxWidth: 295,
          justifyContent: 'flex-start',
        }}>

        <View style={styles.hearderContainer}>
        <Text style={styles.header}>What's your</Text>
        <Text style={styles.header}>EMERGENCY</Text>
        </View>
        <View>
          <Avatar
            style={styles.avatar}
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
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  contain: {
    width:295,    
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },

  header: {
    width:240,    
    justifyContent: 'flex-start',
    flexDirection: 'column',
    color: '#F96056',
    fontSize: 36,
    //fontFamily: 'poor story'
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginTop: 80,
    borderBottomWidth: 3,
    borderColor: 'turquoise',
    shadowColor: 'grey',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    elevation: 1,
  },

  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2,     height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },

})
