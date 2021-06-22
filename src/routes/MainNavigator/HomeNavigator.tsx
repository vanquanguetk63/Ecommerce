import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/core';
import HomePage from '../../screens/HomeMenu/HomePage/HomePage';
import CategoryPage from '../../screens/HomeMenu/HomePage/CategoryPage';
import ProductPage from '../../screens/HomeMenu/HomePage/ProductPage';

const Stack = createStackNavigator();

export type HomeNavigatorProps = {
  HomePage: undefined;
  CategoryPage: undefined;
  ProductPage: undefined;
};

export type HomePageProps = StackNavigationProp<HomeNavigatorProps, 'HomePage'>;

export type HomePageRouteProps = RouteProp<HomeNavigatorProps, 'HomePage'>;

export type CategoryPageProps = StackNavigationProp<
  HomeNavigatorProps,
  'CategoryPage'
>;

export type CategoryPageRouteProps = RouteProp<
  HomeNavigatorProps,
  'CategoryPage'
>;

export type ProductPageProps = StackNavigationProp<
  HomeNavigatorProps,
  'ProductPage'
>;

export type ProductPageRouteProps = RouteProp<
  HomeNavigatorProps,
  'ProductPage'
>;

const HomeNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="HomePage"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="CategoryPage" component={CategoryPage} />
      <Stack.Screen name="ProductPage" component={ProductPage} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
