/**
    * @description      : 
    * @author           : MLab
    * @group            : 
    * @created          : 07/10/2021 - 10:05:53
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 07/10/2021
    * - Author          : MLab
    * - Modification    : 
**/
/**
    * @description      : 
    * @author           : MLab
    * @group            : 
    * @created          : 05/10/2021 - 14:22:53
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 05/10/2021
    * - Author          : MLab
    * - Modification    : 
**/
import React from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';

import {Input} from 'react-native-elements';

import { Card } from 'react-native-paper';

import { AntDesign } from '@expo/vector-icons';
import strVid from '../images/stroke-vid.jpg';
import User from '../images/user.jpg'
import home from '../images/home.jpg'
import play from '../images/playMenu.jpg'

export default function Strokes({navigation}) {


  return (
    <View style= {styles.contain}> 

      <View style= {styles.header}>
        <Text style= {{ fontSize: 36}}>What's your EMERGENCY?</Text>
      </View>


      <Card style={styles.txtCards}>

          <View style={{ flexDirection: 'row'}}> 
        
            <AntDesign name="search1" size={18} color="black"  style= {{marginTop:15, marginLeft: 8}}/>
        
            <TextInput style={styles.txtSearch} 
              name= 'search' placeholder= 'Search' 
            />

          </View>

        </Card>

      

      


  
          
        <View>
          <Image style={styles.strokeVid} source= {strVid} />
        
        </View>
        <View>
          <Text style={{paddingLeft: 20, fontWeight: 'bold'}}>Stroke</Text>
        </View>
      
  

        <Input
   placeholder="Comment"
   leftIcon={{ type: 'font-awesome', name: 'comment' }}
   
   onChangeText={value => this.setState({ comment: value })}
  />


<View style= {{flexDirection: 'row'}}>

<TouchableOpacity onPress={() => { navigation.navigate('Home') }}>

<Image style={styles.home} source= {home} />

</TouchableOpacity>

<TouchableOpacity  onPress={() => { navigation.navigate('Strokes') }}>
<Card style= {{backgroundColor: '#51545a31', height: 50, width: 50, borderRadius: 30, marginTop: 78, marginLeft: 35}}>


<Image style={styles.play} source= {play} />

</Card>
</TouchableOpacity>

<TouchableOpacity  onPress={() => { navigation.navigate('Strokes') }}>

<Image style={styles.user} source= {User} />

</TouchableOpacity>


</View>


<Card style= {{marginTop: 30, marginLeft: 30}}>
  <Text>Comments</Text>
</Card>

        
      


    </View>
  )
}

const styles = StyleSheet.create({


  header: {
    paddingLeft: 30,
    paddingTop: 50
  },

  txtSearch: {
    width: 320,
    height: 50,
    borderRadius: 10,
    outline: 'none',
    backgroundColor: 'lightgrey', 
    paddingLeft: 10,
  },

  txtCards: {
    backgroundColor: 'lightgrey', 
    width: 320,
    height: 50, 
    borderRadius: 10,
    marginLeft: 28,
    marginTop: 25
  },

 
  strokeVid: {
    height:180, 
    width: 315,
    borderRadius: 30,

  },

  user: {
    height: 25,
    width: 25,
    borderRadius: 30,
    borderWidth: 1, 
    borderColor: 'grey',
    marginLeft: 100,
    marginTop: 90,
  },
  
  home: {
    height: 25,
    width: 25,
    borderRadius: 30,
    borderWidth: 1, 
    borderColor: 'grey',
    marginLeft: 52,
    marginTop: 88,
  },
  
  play: {
    height: 25,
    width: 25,
    borderRadius: 30, 
    borderColor: 'grey',
    marginLeft: 12,
    marginTop: 13,
  }
  
});

