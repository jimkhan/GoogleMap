
import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

class Map extends Component {
   
        state = {
            coordinate: {
                latitude: 23.821471,
                longitude: 90.261851
            },
            marginBottom: 1,

        }
  
    render() {
        const getUserCurrentLocation = () => {
            let latitude, longitude;

            Geolocation.getCurrentPosition((info) => {
                const { coords } = info

                latitude = this.state.coords.latitude
                longitude = this.state.coords.longitude

                this.state({
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
        };

        let { latitude, longitude } = this.state.coordinate;

        return (
            <View style={styles.container}>
                <MapView

                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={[styles.map, { marginBottom: this.state.marginBottom }]} // Here we put 2nd style because of an error issue of (showsMyLocationButton)
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
                        this.setState({
                            coordinate: e.nativeEvent.coordinate,
                        })

                    }}
                // onMapReady={setMargin}  // This is also (line number 83) for showsMyLocationButton 
                >

                    <Marker
                        coordinate={{
                            latitude,
                            longitude
                        }}
                        image={require('../img/homeIcon.png')}
                        title="My home"
                        description="click here"

                    >
                        <Callout tooltip onPress={() => { props.setVisiblity(true) }}>
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
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
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


});

export default Map;

// import React, {useState} from 'react'

// import { View, StyleSheet,Text, TouchableOpacity } from 'react-native';

// import MapView, { PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';

// import MarkerView from './MarkerView';


//  function Map(props) {

//      const [location, setLocation] = useState({
//          coordinate: {
//              latitude: 23.821471,
//              longitude: 90.261851
//          }
//      });

//      const [setMarginOne, getMargin] = useState({
//          marginBottom: 5
//      });

//     // const setMargin = () =>{  // Active these lines for getting original my location button and also uncomment line number 79,80
//     //   getMargin({
//     //     marginBottom: 0
//     //   })
//     // }

//      const getUserCurrentLocation = () => {
//          let latitude, longitude;

//          Geolocation.getCurrentPosition((info) => {
//              const { coords } = info

//              latitude = coords.latitude
//              longitude = coords.longitude

//              setLocation({
//                  coordinate: {
//                      latitude: latitude,
//                      longitude: longitude,
//                  }
//              })

//          },
//              error => console.log(error),
//              {
//                  enableHighAccuracy: false,
//                  timeout: 2000,
//                  maximumAge: 3600000
//              }
//          )
//      }

//      let { latitude, longitude } = location.coordinate;

//     return (
//         <View style={styles.container}>
//             <MapView

//                 provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//                 style={[styles.map, { marginBottom: setMarginOne.marginBottom }]} // Here we put 2nd style because of an error issue of (showsMyLocationButton)
//                 region={{
//                     latitude,   // latitude & longitude that we define out side of return function 
//                     longitude,
//                     latitudeDelta: 0.015,
//                     longitudeDelta: 0.0121,
//                     // 22.834399, 89.559757  // permanet address
//                     // 23.821471, 90.261851    // Present Address
//                 }}
//                 // showsUserLocation = {true}
//                 // showsMyLocationButton = {true}
//                 provider="google"
//                 onPress={(e) => { // For randomly mark a location
//                     setLocation({
//                         coordinate: e.nativeEvent.coordinate,
//                     })

//                 }}
//             // onMapReady={setMargin}  // This is also (line number 83) for showsMyLocationButton 
//             >
//                 <MarkerView/>

//             </MapView>

//             <TouchableOpacity style={styles.button} onPress={() => { getUserCurrentLocation() }}>
//                 <Text style={styles.textStyle}> My Location </Text>
//             </TouchableOpacity>


//         </View>

//     )
// }


// const styles = StyleSheet.create({
//     container: {
//         ...StyleSheet.absoluteFillObject,
//         height: '100%',
//         width: '100%',
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//     },

//     map: {
//         ...StyleSheet.absoluteFillObject,
//     },
//     marker: {
//         width: '100%',
//         height: '100%',
//         backgroundColor: '#FFF',
//         borderWidth: 3,
//         padding: 10,
//         borderColor: '#FC5',
//     },

//     button: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: '35%',
//         height: '5%',
//         backgroundColor: '#F10859',
//         marginVertical: 50,
//         borderRadius: 18,
//         opacity: 0.8,
//     },
//     textStyle: {
//         color: '#fff',
//         fontWeight: 'bold',
//         fontSize: 16
//     },


// });

// export default Map;