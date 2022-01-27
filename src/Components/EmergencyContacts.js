import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome, AntDesign, EvilIcons } from '@expo/vector-icons';
import { Card } from "react-native-paper";



const Emergency = ({ navigation }) => {

    return (
        <View style={styles.container}>
         <View>
          <TouchableOpacity>
         
           <Card style={[styles.card, styles.ShadowProp]}>
           <Text style={{marginLeft: 54, fontWeight: "bold", fontSize: 24, marginTop: 5,}}>Police</Text>
           <FontAwesome name="car" size={30} color="black" style={{ marginTop: 1, marginLeft: 70 }} />
           <Text style={{marginLeft: 52, fontWeight: "bold", fontSize: 24, marginTop: -1,}}>10111</Text>
           </Card>
           </TouchableOpacity>


           <TouchableOpacity>
           <Card style={[styles.card1, styles.ShadowProp]}>  
           <Text style={{marginLeft: 54, fontWeight: "bold", fontSize: 18, marginTop: 5,}}>Ambulance</Text>
           <FontAwesome name="ambulance" size={30} color="black" style={{ marginTop: 1, marginLeft: 70 }} />
           <Text style={{marginRight: -10, fontWeight: "bold", fontSize: 24, marginTop: -1,}}>10177</Text> 
           </Card>
           </TouchableOpacity>
           </View>


           <View>
           <TouchableOpacity>
           <Card style={[styles.card2, styles.ShadowProp]}>
           </Card>
           </TouchableOpacity>
           
           <TouchableOpacity>
           <Card style={[styles.card3, styles.ShadowProp]}>  

           </Card>
           </TouchableOpacity>
           </View>


           <View>
           <TouchableOpacity>
           <Card style={[styles.card4, styles.ShadowProp]}>
           </Card>
           </TouchableOpacity>

           <TouchableOpacity>
           
           <Card style={[styles.card5, styles.ShadowProp]}>  

           </Card>
           </TouchableOpacity>
           </View>


           <View>
           <TouchableOpacity>
             <Card style={[styles.card6, styles.ShadowProp]}>

             </Card>
             </TouchableOpacity>
           </View>
           <View>
           <TouchableOpacity>
             <Card style={[styles.card7, styles.ShadowProp]}>

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

  
    card:{
      width: 180,
      height: 100,
      backgroundColor: "#F47066",
      marginRight: 200,
      marginTop: 200,
    },
    ShadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.10,
        shadowRadius: 10,
      },
      
    card1:{
      width: 180,
      height: 100,
      backgroundColor: "#F47066",
      marginLeft: 200,
      marginTop: -100,
    },
    card2:{
      width: 180,
      height: 100,
      backgroundColor: "#F47066",
      marginLeft: 200,
      marginTop: 10,
    },
    card3:{
      width: 180,
      height: 100,
      backgroundColor: "#F47066",
      marginLeft: 1,
      marginTop: -100,
    },
    card4:{
      width: 180,
      height: 100,
      backgroundColor: "#F47066",
      marginLeft: 200,
      marginTop: 10,
    },
    card5:{
      width: 180,
      height: 100,
      backgroundColor: "#F47066",
      marginLeft: 1,
      marginTop: -100,
    },
    card6:{
      width: 378,
      height: 100,
      backgroundColor: "#F47066",
      marginLeft: 1,
      marginTop: 10,
    },
    card7:{
      width: 378,
      height: 100,
      backgroundColor: "#F47066",
      marginLeft: 1,
      marginTop: 10,
    },
    
})

export default Emergency