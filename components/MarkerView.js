import React from 'react'
import { View, Text, StyleSheet, } from 'react-native'

import MapView, { Marker, Callout } from 'react-native-maps';

import Map from './Map';
import ModalView from './ModalView';



function MarkerView({ setVisiblity , latitude, longitude }) {
    return (
        
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

        
    )
}

const styles = StyleSheet.create({
    marker: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
        borderWidth: 3,
        padding: 10,
        borderColor: '#FC5',
    },
})


export default MarkerView;