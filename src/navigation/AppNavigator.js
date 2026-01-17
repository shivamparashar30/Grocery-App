// navigation/AppNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
// Import your other app screens here
// import ProductsScreen from '../screens/ProductsScreen';
// import CartScreen from '../screens/CartScreen';
// import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* Add your other app screens here */}
      {/* <Stack.Screen name="Products" component={ProductsScreen} /> */}
      {/* <Stack.Screen name="Cart" component={CartScreen} /> */}
      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
    </Stack.Navigator>
  );
};

export default AppNavigator;