import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainNavigator from './MainNavigator/MainNavigator';
import LoginPage from '../screens/LoginPage/LoginPage';

const Stack = createStackNavigator();

const RootNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="LoginPage"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="MainNavigator" component={MainNavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
