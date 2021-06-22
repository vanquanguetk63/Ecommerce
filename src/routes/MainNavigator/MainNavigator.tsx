import React from 'react';
import HomePage from '../../screens/HomeMenu/HomePage/HomePage';
import {
  createMaterialBottomTabNavigator,
  MaterialBottomTabNavigationProp,
} from '@react-navigation/material-bottom-tabs';
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {RootNavigatorProps} from '../RootNavigator';
import SearchPage from '../../screens/HomeMenu/SearchPage/SearchPage';
import PaymentPage from '../../screens/HomeMenu/PaymenPage/PaymentPage';
import ProfilePage from '../../screens/HomeMenu/ProfilePage/ProfilePage';
import IconHome from '../../components/icons/IconHome';
import IconFind from '../../components/icons/IconFind';
import IconPayment from '../../components/icons/IconPayment';
import IconProfile from '../../components/icons/IconProfile';
import HomeNavigator from './HomeNavigator';

export type MainNavigatorProps = {
  HomeNavigator: undefined;
};

export type HomeNavigatorRouteProps = RouteProp<
  MainNavigatorProps,
  'HomeNavigator'
>;

export type HomeNavigatorNavProps = CompositeNavigationProp<
  BottomTabNavigationProp<MainNavigatorProps, 'HomeNavigator'>,
  StackNavigationProp<RootNavigatorProps>
>;

const BottomTabNavigator = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <BottomTabNavigator.Navigator
      initialRouteName="HomeNavigator"
      tabBarOptions={{
        activeTintColor: '#0001FC',
        inactiveTintColor: '#0A3040',
        style: {
          backgroundColor: '#EFF5FB',
        },
      }}>
      <BottomTabNavigator.Screen
        name="HomePage"
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <IconHome color={focused ? '#0001FC' : undefined} />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="SearchPage"
        component={SearchPage}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({focused}) => (
            <IconFind color={focused ? '#0001FC' : undefined} />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="PaymentPage"
        component={PaymentPage}
        options={{
          tabBarLabel: 'Payment',
          tabBarIcon: ({focused}) => (
            <IconPayment color={focused ? '#0001FC' : undefined} />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => (
            <IconProfile color={focused ? '#0001FC' : undefined} />
          ),
        }}
      />
    </BottomTabNavigator.Navigator>
  );
};

export default MainNavigator;
