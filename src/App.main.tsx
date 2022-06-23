/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { Button } from './components';

const App = () => {
  return (
    
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <Text style={{ alignItems: 'center' }}>
          React native project
        </Text> */}
        <Button/>
      </View>
    
  );
};
export default App;
module.exports = __DEV__
  ? require('./App.cosmos')
  : require('./App.main');