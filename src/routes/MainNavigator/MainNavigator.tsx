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

export type MainNavigatorProps = {
  HomePage: undefined;
};

export type HomePageRouteProps = RouteProp<MainNavigatorProps, 'HomePage'>;

export type HomePageNavProps = CompositeNavigationProp<
  BottomTabNavigationProp<MainNavigatorProps, 'HomePage'>,
  StackNavigationProp<RootNavigatorProps>
>;

const BottomTabNavigator = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <BottomTabNavigator.Navigator
      initialRouteName="HomePage"
      tabBarOptions={{
        activeTintColor: '#0001FC',
        inactiveTintColor: '#0A3040',
        style: {
          backgroundColor: '#EFF5FB',
        },
      }}>
      <BottomTabNavigator.Screen
        name="HomePage"
        component={HomePage}
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

export default HomeNavigator;
