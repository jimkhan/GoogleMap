import React from 'react';
import { StatusBar,} from 'react-native'

import Map from './components/Map';
import ModalView from './components/ModalView';


const App = () => {

  
  return (
    <>
      < StatusBar translucent={true} barStyle='light-content' backgroundColor="#000000aa"
      />
      <Map/>
      <ModalView/>

    </>
  )
}


export default App

