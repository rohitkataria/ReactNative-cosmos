import React from 'react';
import { NativeFixtureLoader } from 'react-cosmos/native';
import { View } from 'react-native';
// You generate cosmos.userdeps.js when you start the Cosmos server
import { rendererConfig, fixtures, decorators } from '../cosmos.userdeps';

const App= () =>  {
    return (
      <View style={{flex:1}}>
      <NativeFixtureLoader
        rendererConfig={rendererConfig}
        fixtures={fixtures}
        decorators={decorators}
      />
      </View>
    );
}
export default App;