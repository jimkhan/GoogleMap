import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

import Map from './Map';

class ModalView extends Component {
  state = {
        value: "Enter name",
        visiblity: false
    }

  render() {
    return (
        <Modal transparent={true} visible={this.state.visiblity} >

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
                        onChangeText={(text) => { this.setState({ value: text }) }}
                    />

                    <TouchableOpacity style={styles.buttonModal} onPress={() => { this.setState( { visiblity: false}), console.log(` Latitude=${latitude}, Longitude = ${longitude}, ${value}`) }}>
                        <Text style={styles.textStyle}> Submit </Text>
                    </TouchableOpacity>

                </View>
            </View>


        </Modal>
    );
  }
}
const styles = StyleSheet.create({
    buttonModal: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
        height: 35,
        backgroundColor: '#F10859',
        borderRadius: 18,
        marginTop: 40,
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

    },

})

export default ModalView;



// import React, {useState} from 'react'

// import { View,StyleSheet, Modal, Text, TextInput,TouchableOpacity } from 'react-native';

// import MarkerView from './MarkerView';

// function ModalView(props) {

//      const [visiblity, setVisiblity] = useState(false);
//      const [value, setValue] = useState("Enter name");


//     return (
//         <Modal transparent={true} visible={visiblity} >

//             <View style={styles.modalOutSide} >
//                 <View style={styles.modal} >
//                     <TextInput
//                         style={{ borderColor: 'gray', borderBottomWidth: 1, width: '60%' }}
//                         value={`${latitude}, ${longitude}`}
//                         keyboardType={'number-pad'}
//                     />
//                     <TextInput
//                         style={{ borderColor: 'gray', borderBottomWidth: 1, width: '60%' }}
//                         placeholder="Enter Name"
//                         onChangeText={(text) => { setValue(text) }}
//                     />

//                     <TouchableOpacity style={styles.buttonModal} onPress={() => { setVisiblity(false), console.log(` Latitude=${latitude}, Longitude = ${longitude}, ${value}`) }}>
//                         <Text style={styles.textStyle}> Submit </Text>
//                     </TouchableOpacity>

//                 </View>
//             </View>


//         </Modal>
//     )
// }
// const styles = StyleSheet.create({
//     buttonModal: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: '60%',
//         height: 35,
//         backgroundColor: '#F10859',
//         borderRadius: 18,
//         marginTop: 40,
//     },
//     modalOutSide: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: "#000000aa",

//     },
//     modal: {
//         height: '40%',
//         width: '60%',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         elevation: 10,

//     },

// })


// export default ModalView;