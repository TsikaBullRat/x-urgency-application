import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function ViewMap() {
  const [mediClinic, setMediClinic] = useState({
    latitude: -28.76488,
    longitude: 24.737966,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [lenmed, setLenmed] = useState({
    latitude:-28.7564052336,
    longitude: 24.762328747,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [mediClinicGariep, setMediClinicGariep] = useState({
    latitude: -28.76488,
    longitude: 24.737966,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [rmsHospital, setRmsHospital] = useState({
    latitude:-28.7564052336,
    longitude: 24.762328747,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  // latitude:          longitude
  //Lenmed Kimberley
  // -28.7564052336    24.762328747
  //Careline
  // -28.73127          24.70693
  //Medi-Clinic Gariep
  //-28.764656566398    24.737085985737
  //Robert-Mangaliso-Sobukwe-Hospital
  //-28.7464918457     24.7713414848
  return (
    <View style={styles.container}>
      <MapView
        style={{ alignSelf: 'stretch', height: '100%' }}
        region={mediClinic}
      >

      <Marker coordinate={mediClinic} title='Medi-Clinic'
      pinColor='blue' />
   
      <Marker coordinate={lenmed} title='Lenmed' />

      <Marker coordinate={mediClinicGariep} title='Medi-Clinic Gariep' />
   
      <Marker coordinate={rmsHospital} title='Robert-Mangaliso-Sobukwe Hospital' />

      {/*-----Custom Pin-------
      <Marker
  coordinate={{ latitude : latitude , longitude : longitude }}
  image={{uri: 'custom_pin'}}
/>

-----Map-----Map---------Map--
<MapView
  region={this.state.region}
  onRegionChange={this.onRegionChange}
>
  {this.state.markers.map((marker, index) => (
    <Marker
      key={index}
      coordinate={marker.latlng}
      title={marker.title}
      description={marker.description}
    />
  ))}
</MapView>

      

      <Marker coordinate={mediClinic} title='Lenmed Kimberley' />

      <Marker coordinate={mediClinic} title='Medi-Clinic' />

      <Marker coordinate={mediClinic} title='Medi-Clinic' />*/}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
