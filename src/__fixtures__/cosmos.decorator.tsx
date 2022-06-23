import {View} from 'react-native';

import React, {ReactNode} from 'react';

type Props = {
  children?: ReactNode;
  // any props that come into the component
};

export default ({children}: Props) => (
  <View style={{flex: 1}}>{children}</View>
);
