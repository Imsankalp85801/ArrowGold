import { MaterialIcons } from '@expo/vector-icons';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import React, { useState,useEffect } from 'react';
import { Provider } from 'react-redux';
import configureStore from './app/js/redux/Store';
import AppContainer from './app/js/screens/AppContainer';

const store = configureStore();

export default function App() {

  let [isLoadingComplete, setLoadingComplete] = useState(false);


  if(isLoadingComplete){
    return(
      <Provider store={store}>
        <AppContainer />
      </Provider>
      
    )
  }else{
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={()=> setLoadingComplete(true)}
      />
    )
  }
  
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...MaterialIcons.font,
      'ssp-regular': require('./assets/fonts/SourceSansPro/SourceSansPro-Regular.ttf'),
      'ssp-semiBold': require('./assets/fonts/SourceSansPro/SourceSansPro-SemiBold.ttf'),
      'ssp-bold': require('./assets/fonts/SourceSansPro/SourceSansPro-Bold.ttf'),
      'arial': require('./assets/fonts/arial.ttf'),
      'Calibri': require('./assets/fonts/Calibri.ttf')

    })
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

