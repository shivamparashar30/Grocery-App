// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from '../screens/HomeScreen';
// import OrderAgainScreen from '../screens/OrderAgainScreen';
// import CategoriesScreen from '../screens/CategoriesScreen';
// import PrintScreen from '../screens/PrintScreen';
// import BottomTabNavigator from '../navigation/BottomTabNavigator';

// const Stack = createNativeStackNavigator();

// // Main Tab Container Component
// const TabContainer = ({ navigation, route }) => {
//   const [activeTab, setActiveTab] = React.useState('Home');

//   const handleTabPress = (tabId) => {
//     setActiveTab(tabId);
//   };

//   const renderScreen = () => {
//     switch (activeTab) {
//       case 'Home':
//         return <HomeScreen />;
//       case 'OrderAgain':
//         return <OrderAgainScreen />;
//       case 'Categories':
//         return <CategoriesScreen />;
//       case 'Print':
//         return <PrintScreen />;
//       default:
//         return <HomeScreen />;
//     }
//   };

//   return (
//     <>
//       {renderScreen()}
//       <BottomTabNavigator activeTab={activeTab} onTabPress={handleTabPress} />
//     </>
//   );
// };

// const AppNavigator = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Stack.Screen name="MainApp" component={TabContainer} />
//       {/* Add additional screens here that are outside the tab flow */}
//       {/* <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} /> */}
//       {/* <Stack.Screen name="Cart" component={CartScreen} /> */}
//     </Stack.Navigator>
//   );
// };

// export default AppNavigator;

// navigation/AppNavigator.js

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import OrderAgainScreen from '../screens/OrderAgainScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import PrintScreen from '../screens/PrintScreen';
import BottomTabNavigator from '../navigation/BottomTabNavigator';

const Stack = createNativeStackNavigator();

// Main Tab Container Component
const TabContainer = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabPress = (tabId) => {
    setActiveTab(tabId);
  };

  const renderScreen = () => {
    switch (activeTab) {
      case 'Home':
        return <HomeScreen />;
      case 'OrderAgain':
        return <OrderAgainScreen />;
      case 'Categories':
        return <CategoriesScreen />;
      case 'Print':
        return <PrintScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}
      <BottomTabNavigator activeTab={activeTab} onTabPress={handleTabPress} />
    </View>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="MainApp" component={TabContainer} />
        {/* Add additional screens here that are outside the tab flow */}
        {/* <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} /> */}
        {/* <Stack.Screen name="Cart" component={CartScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppNavigator;