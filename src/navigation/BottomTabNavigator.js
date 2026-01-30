// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Platform,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Entypo from 'react-native-vector-icons/Entypo';

// const BottomTabNavigator = ({ activeTab = 'Home', onTabPress }) => {
//   const tabs = [
//     { 
//       id: 'Home', 
//       label: 'Home', 
//       icon: 'home',
//       iconType: 'Ionicons'
//     },
//     { 
//       id: 'OrderAgain', 
//       label: 'Order Again', 
//       icon: 'shopping-bag',
//       iconType: 'Entypo'
//     },
//     { 
//       id: 'Categories', 
//       label: 'Categories', 
//       icon: 'grid',
//       iconType: 'Ionicons'
//     },
//     { 
//       id: 'Print', 
//       label: 'Print', 
//       icon: 'print',
//       iconType: 'Ionicons'
//     },
//   ];

//   const handleTabPress = (tabId) => {
//     if (onTabPress) {
//       onTabPress(tabId);
//     }
//   };

//   const renderIcon = (iconName, iconType, isActive) => {
//     const color = isActive ? '#1A1A1A' : '#9E9E9E';
//     const size = 24;

//     switch (iconType) {
//       case 'MaterialIcons':
//         return <MaterialIcon name={iconName} size={size} color={color} />;
//       case 'MaterialCommunityIcons':
//         return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
//       case 'Entypo':
//         return <Entypo name={iconName} size={size} color={color} />;
//       default:
//         return <Icon name={iconName} size={size} color={color} />;
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.tabBarWrapper}>
//         <View style={styles.tabBar}>
//           {tabs.map((tab) => {
//             const isActive = activeTab === tab.id;
//             return (
//               <TouchableOpacity
//                 key={tab.id}
//                 style={[styles.tabItem, isActive && styles.tabItemActive]}
//                 onPress={() => handleTabPress(tab.id)}
//                 activeOpacity={0.8}
//               >
//                 <View style={styles.iconContainer}>
//                   {renderIcon(tab.icon, tab.iconType, isActive)}
//                 </View>
//                 <Text style={[styles.tabText, isActive && styles.tabTextActive]}>
//                   {tab.label}
//                 </Text>
//               </TouchableOpacity>
//             );
//           })}
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     bottom: Platform.OS === 'ios' ? 30 : 20,
//     left: 20,
//     right: 20,
//   },
//   tabBarWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 12,
//   },
//   tabBar: {
//     flex: 1,
//     flexDirection: 'row',
//     backgroundColor: '#FFFFFF',
//     paddingVertical: 10,
//     paddingHorizontal: 12,
//     borderRadius: 50,
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.12,
//     shadowRadius: 10,
//     elevation: 8,
//   },
//   tabItem: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 25,
//     minWidth: 60,
//   },
//   tabItemActive: {
//     backgroundColor: '#FFF4E6',
//   },
//   iconContainer: {
//     marginBottom: 2,
//   },
//   tabText: {
//     fontSize: 11,
//     color: '#9E9E9E',
//     fontWeight: '500',
//     textAlign: 'center',
//   },
//   tabTextActive: {
//     color: '#1A1A1A',
//     fontWeight: '700',
//   },
// });

// export default BottomTabNavigator;


import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Animated,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const TabItem = ({ tab, isActive, onPress, index }) => {
  const scaleAnim = useRef(new Animated.Value(isActive ? 1 : 0)).current;
  const bubbleAnim = useRef(new Animated.Value(0)).current;
  const iridescentAnim = useRef(new Animated.Value(0)).current;
  const iconScaleAnim = useRef(new Animated.Value(1)).current;
  
  useEffect(() => {
    if (isActive) {
      // Sequence: bubble grows with bounce, then iridescent effect fades in
      Animated.parallel([
        // Main bubble animation with overshoot
        Animated.sequence([
          Animated.spring(bubbleAnim, {
            toValue: 1.3,
            tension: 120,
            friction: 4,
            useNativeDriver: true,
          }),
          Animated.spring(bubbleAnim, {
            toValue: 1,
            tension: 100,
            friction: 8,
            useNativeDriver: true,
          }),
        ]),
        // Background scale
        Animated.spring(scaleAnim, {
          toValue: 1,
          tension: 80,
          friction: 8,
          useNativeDriver: true,
        }),
        // Icon scale pop
        Animated.sequence([
          Animated.spring(iconScaleAnim, {
            toValue: 1.2,
            tension: 100,
            friction: 5,
            useNativeDriver: true,
          }),
          Animated.spring(iconScaleAnim, {
            toValue: 1,
            tension: 100,
            friction: 7,
            useNativeDriver: true,
          }),
        ]),
        // Iridescent shimmer
        Animated.loop(
          Animated.sequence([
            Animated.timing(iridescentAnim, {
              toValue: 1,
              duration: 2000,
              useNativeDriver: true,
            }),
            Animated.timing(iridescentAnim, {
              toValue: 0,
              duration: 2000,
              useNativeDriver: true,
            }),
          ])
        ),
      ]).start();
    } else {
      // Reset animations smoothly
      Animated.parallel([
        Animated.spring(scaleAnim, {
          toValue: 0,
          tension: 80,
          friction: 8,
          useNativeDriver: true,
        }),
        Animated.spring(bubbleAnim, {
          toValue: 0,
          tension: 80,
          friction: 8,
          useNativeDriver: true,
        }),
        Animated.spring(iconScaleAnim, {
          toValue: 1,
          tension: 80,
          friction: 8,
          useNativeDriver: true,
        }),
      ]).start();
      iridescentAnim.setValue(0);
    }
  }, [isActive]);

  const renderIcon = (iconName, iconType) => {
    const color = isActive ? '#00A8FF' : '#666666';
    const size = 24;

    const IconComponent = {
      MaterialIcons: MaterialIcon,
      MaterialCommunityIcons: MaterialCommunityIcons,
      Entypo: Entypo,
      Ionicons: Icon,
    }[iconType] || Icon;

    return <IconComponent name={iconName} size={size} color={color} />;
  };

  const iridescentTranslateX = iridescentAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 100],
  });

  const iridescentOpacity = iridescentAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.3, 0.8, 0.3],
  });

  return (
    <TouchableOpacity
      style={styles.tabItem}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <View style={styles.tabContent}>
        {/* Animated bubble background with subtle gradient - only show when active */}
        {isActive && (
          <Animated.View
            style={[
              styles.bubbleBackgroundContainer,
              {
                transform: [{ scale: scaleAnim }],
                opacity: scaleAnim,
              },
            ]}
          >
            <LinearGradient
              colors={['rgba(0, 168, 255, 0.15)', 'rgba(0, 168, 255, 0.08)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.bubbleBackground}
            />
            
            {/* Iridescent shimmer overlay */}
            <Animated.View
              style={[
                styles.iridescentOverlay,
                {
                  transform: [{ translateX: iridescentTranslateX }],
                  opacity: iridescentOpacity,
                },
              ]}
            >
              <LinearGradient
                colors={[
                  'transparent',
                  'rgba(0, 255, 255, 0.3)',
                  'rgba(128, 0, 255, 0.3)',
                  'rgba(255, 0, 255, 0.3)',
                  'transparent',
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.iridescentGradient}
              />
            </Animated.View>
          </Animated.View>
        )}
        
        {/* Animated icon with scale - always visible */}
        <Animated.View
          style={[
            styles.iconBubble,
            {
              transform: [
                { scale: isActive ? Animated.multiply(bubbleAnim, iconScaleAnim) : 1 }
              ],
            },
          ]}
        >
          {renderIcon(tab.icon, tab.iconType)}
        </Animated.View>

        {/* Label with fade */}
        <Animated.Text 
          style={[
            styles.tabText, 
            isActive && styles.tabTextActive,
            { opacity: isActive ? 1 : 0.7 }
          ]}
        >
          {tab.label}
        </Animated.Text>
      </View>

      {/* Notification badge */}
      {tab.badge && (
        <Animated.View 
          style={[
            styles.badge,
            {
              transform: [{ scale: isActive ? 1.1 : 1 }]
            }
          ]}
        >
          <Text style={styles.badgeText}>{tab.badge}</Text>
        </Animated.View>
      )}
    </TouchableOpacity>
  );
};

const BottomTabNavigator = ({ activeTab = 'Home', onTabPress }) => {
    const tabs = [
    { 
      id: 'Home', 
      label: 'Home', 
      icon: 'home',
      iconType: 'Ionicons'
    },
    { 
      id: 'OrderAgain', 
      label: 'Order Again', 
      icon: 'shopping-bag',
      iconType: 'Entypo'
    },
    { 
      id: 'Categories', 
      label: 'Categories', 
      icon: 'grid',
      iconType: 'Ionicons'
    },
    { 
      id: 'Print', 
      label: 'Print', 
      icon: 'print',
      iconType: 'Ionicons'
    },
  ];

  const handleTabPress = (tabId) => {
    if (onTabPress) {
      onTabPress(tabId);
    }
  };

  return (
    <View style={styles.container}>
      {/* Blur background layer */}
      <View style={styles.blurContainer}>
        <View style={styles.tabBar}>
          {tabs.map((tab, index) => (
            <TabItem
              key={tab.id}
              tab={tab}
              isActive={activeTab === tab.id}
              onPress={() => handleTabPress(tab.id)}
              index={index}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingBottom: Platform.OS === 'ios' ? 34 : 20,
  },
  blurContainer: {
    overflow: 'hidden',
    borderRadius: 50,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.90)', // Clean white background
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.01)',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  tabContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  bubbleBackgroundContainer: {
    position: 'absolute',
    width: 85, // Reduced from 90
    height: 52, // Reduced from 60
    borderRadius: 30, // Adjusted
    top: -3, // Adjusted
    overflow: 'hidden',
  },
  bubbleBackground: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },
  iridescentOverlay: {
    position: 'absolute',
    width: '200%',
    height: '100%',
    top: 0,
    left: '-50%',
  },
  iridescentGradient: {
    width: '100%',
    height: '100%',
  },
  iconBubble: {
    width: 30, // Reduced from 44
    height: 25, // Reduced from 44
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
  },
  tabText: {
    fontSize: 10, // Reduced from 11
    color: 'rgba(102, 102, 102, 0.9)',
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 1, // Reduced from 2
  },
  tabTextActive: {
    color: '#00A8FF',
    fontWeight: '600',
  },
  badge: {
    position: 'absolute',
    top: -2,
    right: 8,
    backgroundColor: '#FF3B30',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    ...Platform.select({
      ios: {
        shadowColor: '#FF3B30',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
});

export default BottomTabNavigator;