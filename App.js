/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Fragment } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';
import MainStack from './src/navigation/MainStack'
import AppStore from './src/store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
const App=() => {
console.log(AppStore)
  return (
    <Fragment>
      <Provider store={AppStore.store}>
        <PersistGate 
          persistor={AppStore.persistor}
          loading={
            <View 
              style={{flex:1,backgroundColor:'green',
              justifyContent:'center',
              alignItems:'center'}}>
              <ActivityIndicator color="white" size={'small'}/>
            </View>
              }
          
          >
        <SafeAreaView style={{flex:1,backgroundColor:'white'  }}>
         <MainStack/>
          </SafeAreaView>
       </PersistGate>
     </Provider>
     </Fragment>
  );
};
export default App;
