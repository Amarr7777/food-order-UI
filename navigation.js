import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import React from 'react';
import {View, StyleSheet} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import RestrautentScreen from './screens/RestrautentScreen';
import CartScreen from './screens/CartScreen';

const Navigation = () => {
    return (
        <NavigationContainer>
      <Stack.Navigator screenOptions={
        {
            headerShown: false
        }
      }>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restrautent" component={RestrautentScreen} />
        <Stack.Screen name="Cart" options={{presentation: 'modal'}} component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({})

export default Navigation;
