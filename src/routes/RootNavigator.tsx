import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/core';
import MainNavigator, {MainNavigatorProps} from './MainNavigator/MainNavigator';
import LoginPage from '../screens/OnBoarding/LoginPage/LoginPage';
import SignUpPage from '../screens/OnBoarding/SignUpPage/SignUpPage';
import {NavigatorScreenParams} from '@react-navigation/native';
import CategoryPage from '../screens/HomeMenu/HomePage/CategoryPage';

const Stack = createStackNavigator();

export type RootNavigatorProps = {
  LoginPage: undefined;
  SignUpPage: undefined;
  MainNavigator: NavigatorScreenParams<MainNavigatorProps>;
  CategoryPage: undefined;
};

export type LoginPageProps = StackNavigationProp<
  RootNavigatorProps,
  'LoginPage'
>;

export type LoginPageRouteProps = RouteProp<RootNavigatorProps, 'LoginPage'>;

export type SignUpPageProps = StackNavigationProp<
  RootNavigatorProps,
  'LoginPage'
>;

export type SignUpPageRouteProps = RouteProp<RootNavigatorProps, 'LoginPage'>;

const RootNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="MainNavigator"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="SignUpPage" component={SignUpPage} />
      <Stack.Screen name="MainNavigator" component={MainNavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
