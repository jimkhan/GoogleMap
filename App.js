import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Modal, TextInput,} from 'react-native'

import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';


const App = () => {

  const [location, setLocation] = useState({
    coordinate: {
      latitude: 23.821471,
      longitude: 90.261851
    }
  });
  const [visiblity, setVisiblity] = useState(false);

  const [setMarginOne, getMargin] = useState({
    marginBottom: 1
  });

  const [value, setValue] = useState("Enter name");

  // const setMargin = () =>{  // Active these lines for getting original my location button ans also uncomment line number 79,80
  //   getMargin({
  //     marginBottom: 0
  //   })
  // }


  const getUserCurrentLocation = () => {

    let latitude, longitude;

    Geolocation.getCurrentPosition((info) => {
      const { coords } = info

      latitude = coords.latitude
      longitude = coords.longitude

      setLocation({
        coordinate: {
          latitude: latitude,
          longitude: longitude,
        }
      })

    },
      error => console.log(error),
      {
        enableHighAccuracy: false,
        timeout: 2000,
        maximumAge: 3600000
      }
    )
  }

  let { latitude, longitude } = location.coordinate;

  return (
    <>
      < StatusBar translucent={true} barStyle='dark-content' backgroundColor="transparent"
      />
      <View style={styles.container}>
        <MapView

          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={[styles.map, { marginBottom: setMarginOne.marginBottom }]} // Here we put 2nd style because of an error issue of (showsMyLocationButton)
          region={{
            latitude,   // latitude & longitude that we define out side of return function 
            longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
            // 22.834399, 89.559757  // permanet address
            // 23.821471, 90.261851    // Present Address
          }}
          // showsUserLocation = {true}
          // showsMyLocationButton = {true}
          provider="google"
          onPress={(e) => { // For randomly mark a location
            setLocation({
              coordinate: e.nativeEvent.coordinate,
            })

          }}
        // onMapReady={setMargin}  // This is also (line number 83) for showsMyLocationButton 
        >
          <Marker
            coordinate={{
              latitude,
              longitude,
            }}
            image={require('./img/homeIcon.png')}
            title="My home"
            description="click here"

          >
            <Callout tooltip onPress={() => { setVisiblity(true) }}>
              <View style={styles.marker}>
                <Text>Get info.</Text>
              </View>

            </Callout>
          </Marker>
        </MapView>

        <TouchableOpacity style={styles.button} onPress={() => { getUserCurrentLocation() }}>
          <Text style={styles.textStyle}> My Location </Text>
        </TouchableOpacity>


      </View>

      <Modal transparent={true} visible={visiblity} >

        <View style={styles.modalOutSide} >
          <View style={styles.modal} >
            <TextInput
              style={{ borderColor: 'gray', borderBottomWidth: 1, width: '60%' }}
              value={`${latitude}, ${longitude}`}
              keyboardType={'number-pad'}
            />
            <TextInput
              style={{ borderColor: 'gray', borderBottomWidth: 1, width: '60%' }}
              placeholder="Enter Name"
              onChangeText={(text) => { setValue(text) }}
            />

            <TouchableOpacity style={styles.buttonModal} onPress={() => { setVisiblity(false), console.log(` Latitude=${latitude}, Longitude = ${longitude}, ${value}`) }}>
              <Text style={styles.textStyle}> Submit </Text>
            </TouchableOpacity>

          </View>
        </View>


      </Modal>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonModal: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    height: 35,
    backgroundColor: '#F10859',
    borderRadius: 18,
    marginTop: 40,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF',
    borderWidth: 3,
    padding: 10,
    borderColor: '#FC5',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '35%',
    height: '5%',
    backgroundColor: '#F10859',
    marginVertical: 50,
    borderRadius: 18,
    opacity: 0.8,
  },
  textStyle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  modalOutSide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#000000aa",

  },
  modal: {
    height: '40%',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 10,

  }
});

export default App;
