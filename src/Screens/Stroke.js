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
import { Text, View, StyleSheet, TextInput, ScrollView, Image } from 'react-native';

import {Input} from 'react-native-elements';

import { Card } from 'react-native-paper';

import { AntDesign } from '@expo/vector-icons';
import Stroke from '../images/stroke.png';
import strVid from '../images/stroke-vid.jpg';
import heartVid from '../images/heart-vid.jpg';

import epilepsyVid from '../images/epilepsy-vid.jpg';
import cpr_vid2 from '../images/cpr_vid2.jpg';
import drowning from '../images/drowning-vid.jpg';
import pain from '../images/pain-vid.png';
import burn from '../images/burns-vid.jpg';
import choke from '../images/choking-vid.jpg';
import bleed from '../images/bleeding-vid.webp';
import heart from '../images/heart.png';
import blood from '../images/blood.jpg';
export default function Strokes() {


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

      

      

      <ScrollView vertical={true} >
      <Card style= {styles.menu2}>
  
          
        <View>
          <Image style={styles.strokeVid} source= {strVid} />
        
        </View>
        <View>
          <Text style={{paddingLeft: 20, fontWeight: 'bold'}}>Stroke</Text>
        </View>
      
  
        <View> 
          <Image style={styles.heartVid} source= {heartVid} />
        </View>
        <View>
          <Text style={{paddingLeft: 20, fontWeight: 'bold'}}>Heart-Attack</Text>
        </View>
  
        <View> 
          <Image style={styles.strokeVid} source= {epilepsyVid} />
        </View>
        <View>
          <Text style={{paddingLeft: 20, fontWeight: 'bold'}}>Epilepsy</Text>
        </View>
  
        <View> 
            <Image style={styles.cpr} source= {cpr_vid2} />
        </View>
        <View>
          <Text style={{paddingLeft: 20, fontWeight: 'bold'}}>CPR</Text>
        </View>
            
        <View> 
          <Image style={styles.bleed} source= {bleed} />
        </View>
        <View>
          <Text style={{paddingLeft: 20, fontWeight: 'bold'}}>Bleeding</Text>
        </View>

        <View> 
            <Image style={styles.choke} source= {choke} />
        </View>
        <View>
          <Text style={{paddingLeft: 20, fontWeight: 'bold'}}>Choking</Text>
        </View>

        <View> 
            <Image style={styles.drowning} source= {drowning} />
        </View>
        <View>
          <Text style={{paddingLeft: 20, fontWeight: 'bold'}}>Drowning</Text>
        </View>


        <View> 
            <Image style={styles.burns} source= {burn} />
        </View>
        <View>
          <Text style={{paddingLeft: 20, fontWeight: 'bold'}}>Burns</Text>
        </View>
            
  
        </Card>
        </ScrollView> 

        <Input
   placeholder="Comment"
   leftIcon={{ type: 'font-awesome', name: 'comment' }}
   
   onChangeText={value => this.setState({ comment: value })}
  />

        
      


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

  menu: {
      width: 360, 
      marginLeft: 10,
      marginTop: 20, 
      borderRadius: 15, 
      backgroundColor: '#f7eeee',
    },

  strokeMenu: {
    height:35, 
    width: 35, 
    borderRadius: 15,
    marginTop: 5
  },

  heartMenu: {
    height:35, 
    width: 35, 
    borderRadius: 15,
    marginTop: 6
  },

  epilepsyMenu: {
    height:55, 
    width: 55, 
    borderRadius: 15,
    borderWidth: 15,
    borderColor: '#F96056',
    marginLeft:22
  },

  cprMenu: {
    height:55, 
    width: 55, 
    borderRadius: 15,
    borderWidth: 15,
    borderColor: '#F96056',
    marginLeft:22
  },

  bloodMenu: {
    height:45, 
    width: 45, 
    borderRadius: 15,
    marginTop: 8
  },

  conImg: {
    height:55, 
    width: 55, 
    borderRadius: 15,
    borderWidth: 15,
    borderColor: '#F96056',
    marginLeft: 32
  },

  

  menu2: {
    width: 316, 
    height: 200,
    marginLeft: 30,
    marginTop: 20, 
    borderRadius: 15, 
    backgroundColor: '#f7eeee',
  },

  strokeVid: {
    height:180, 
    width: 315,
    borderRadius: 30,

  },

  heartVid: {
  height:180, 
  width: 315,
  borderRadius: 30,
  marginTop: 30

}, 

cpr: {
  height:180, 
  width: 315,
  borderRadius: 30,
  marginTop: 30
},

bleed: {
  height:180, 
  width: 315,
  borderRadius: 30,
  marginTop: 30
},

choke: {
  height:180, 
  width: 315,
  borderRadius: 30,
  marginTop: 30
},

drowning: {
  height:180, 
  width: 315,
  borderRadius: 30,
  marginTop: 30
},

burns: {
  height:180, 
  width: 315,
  borderRadius: 30,
  marginTop: 30
},
  
});

