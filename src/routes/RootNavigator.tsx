import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomePage from '../screens/HomePage/HomePage';

const Stack = createStackNavigator();

const RootNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName="HomePage">
      <Stack.Screen name="HomePage" component={HomePage} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
