import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Avatar, Badge } from 'react-native-elements';
import { Socials } from '../../Components';
import {Card} from 'react-native-paper'
import { AntDesign, Feather } from '@expo/vector-icons';

const DoctorProfile = () => {

    return (
            <View>
                <View style={styles.container}>
                    <View style={{ marginTop: 50}}>
                        <Avatar style={styles.avatar} rounded source={{ uri: 'https://randomuser.me/api/portraits/men/44.jpg', }} size="large" />
                        <Badge status="success" containerStyle={{ position: 'absolute', top: -4, right: -4 }} />
                    </View>
                    <Text style={styles.textTitle}>{`Dr Sighn`}</Text>

                    <View style={{marginTop:20}}>
                      <Text style={{ paddingTop: 10, fontSize: 26, color:'#F47066' }}>
                        {`Pediatrician`}
                      </Text>
                    </View> 
                

                    <View style={{flexDirection: 'row', marginBottom: 20, justifyContent: 'center', alignItems: 'center' }}>
                       <Socials text="Following" number="15" />
                       <View style={styles.pole} />
                       <Socials text="Followers" number="3000K" />
                       <View style={styles.pole} />
                        <Socials text="Likes" number="3.1M" />
                    </View>                  

        <View
          style={{
            width: 380,
            marginTop:10,
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>

          <Card style={styles.docCards}>
            <View style={{marginTop:10, alignItems:'center'}}>
              <Image
                source={require('../../images/certificate.png')}
                style={{ width: 35, height: 35, color:'#fff' }}
              />
           
                <Text style={{ paddingTop: 5, color:'#fff' }}>
                  {`PHD`}
                </Text>            
            </View>
          </Card>

          <Card style={styles.docCards}>
            <View style={{alignItems:'center'}}>
              <Image
                source={require('../../images/briefcase.png')}
                style={{ width: 45, height: 45, color:'#fff' }}
              />
           
                <Text style={{ maxWidth: 80, paddingTop: 5,textAlign:'center', color:'#fff' }}>
                  {`15yrs Experience`}
                </Text>            
            </View>
          </Card>

          <Card style={styles.docCards}>
            <View style={{marginTop:10, alignItems:'center'}}>
              <Image
                source= {require('../../images/success.png')}
                style={{ width: 35, height: 35, color:'#fff' }}
              />
           
                <Text style={{ paddingTop: 5, color:'#fff' }}>
                  {`10 Awards`}
                </Text>            
            </View>
          </Card>
        </View>   

        <View style={{ marginTop: 35, width: 355 }}>
        <Text style={styles.txtHead}>{`About`}</Text>
        <Text style={styles.txtAbout}>
          {`Neurologists These are specialists in the nervous system, which includes the brain, spinal cord, and nerves. They treat strokes, brain and spinal tumors, epilepsy, Parkinson's disease, and Alzheimer's disease.`}
        </Text>
      </View>

      <View style={{ width: 355, marginTop: 35, justifyContent: 'flex-start' }}>

      <Text style={styles.txtHead}>{`Communication`}</Text>

        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <Feather name="phone" size={20} color="black" />

          <Text style={{ paddingLeft: 10, paddingTop: 2, fontSize: 16 }}>
            {`(053) 871 2545`}
          </Text>
        </View>

        <View style={{ flexDirection: 'row' }}>         
          <AntDesign name="mail" size={20} color="black" />
          <Text style={{ paddingLeft: 10, paddingTop: 2, fontSize: 16 }}>
            {`sighn@gmail.com`}
          </Text>
        </View>

        </View>
  
            
        </View>
    </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 15,
    },

    textTitle: {
        color: 'red',
        fontSize: 25,
        marginTop: 5,
    },

    textTitle2: {
        fontSize: 15,
        marginTop: 20,
        marginLeft: 5,
    },

    box: {
        flexDirection: "row",
    },

    tab: {
        paddingLeft: 10
    },

    avatar: {
        width: 70,
        height: 70,
        borderRadius: 50,
        borderBottomWidth: 3,
        borderColor: 'turquoise',
        shadowColor: 'grey',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        elevation: 1,
    },

    pole: {
        borderLeftWidth: 1,
        borderLeftColor: 'grey',
        height: 40,
        alignSelf: 'center',
    },

    docCards: {
    width: 100,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F47066',
  },

  txtAbout: {
    width: 372,
    justifyContent: 'flex-start',
    fontSize: 15,
  },

  txtHead: {
    justifyContent: 'flex-start',
    color: '#F47066',
    fontSize: 26,
  },

})

export default DoctorProfile;