import React from 'react';
import HomePage from '../../screens/HomePage/HomePage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTabNavigator = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <BottomTabNavigator.Navigator>
      <BottomTabNavigator.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
        }}
      />
    </BottomTabNavigator.Navigator>
  );
};

export default HomeNavigator;
