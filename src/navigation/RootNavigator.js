// // navigation/RootNavigator.js

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { ActivityIndicator, View, StyleSheet } from 'react-native';
// import { useAuth } from '../context/AuthContext';
// import AuthNavigator from './AuthNavigator';
// import AppNavigator from './AppNavigator';

// const RootNavigator = () => {
//   const { isLoading, userToken } = useAuth();

//   if (isLoading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#4CAF50" />
//       </View>
//     );
//   }

//   return (
//     <NavigationContainer>
//       {userToken ? <AppNavigator /> : <AuthNavigator />}
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
// });

// export default RootNavigator;
// navigation/RootNavigator.js - Updated to use Redux

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux'; // ✅ Import Redux hook
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

const RootNavigator = () => {
  // ✅ Get auth state from Redux instead of AuthContext
  const { isAuthenticated, isInitialized } = useSelector((state) => state.auth);

  // ✅ Show loading while checking authentication
  if (!isInitialized) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default RootNavigator;