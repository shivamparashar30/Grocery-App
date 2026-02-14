import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  Animated,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import tw from '../utils/tailwind';

const TabItem = ({ tab, isActive, onPress, index, screenWidth, isTablet, isLargeScreen }) => {
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
    const color = isActive ? '#00A8FF' : '#1F2937';
    // Responsive icon size based on screen width
    let size = 24; // default
    if (isLargeScreen) {
      size = 32; // Large tablets/iPads
    } else if (isTablet) {
      size = 28; // Small tablets
    } else if (screenWidth < 360) {
      size = 22; // Small phones
    } else if (screenWidth >= 400) {
      size = 26; // Large phones
    }

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

  // Responsive bubble dimensions based on device type
  let bubbleWidth = 85;
  let bubbleHeight = 52;
  
  if (isLargeScreen) {
    bubbleWidth = 110;
    bubbleHeight = 68;
  } else if (isTablet) {
    bubbleWidth = 100;
    bubbleHeight = 60;
  } else if (screenWidth < 360) {
    bubbleWidth = 75;
    bubbleHeight = 48;
  } else if (screenWidth >= 400) {
    bubbleWidth = 95;
    bubbleHeight = 58;
  }

  // Responsive icon bubble size
  let iconBubbleWidth = 30;
  let iconBubbleHeight = 25;
  
  if (isLargeScreen) {
    iconBubbleWidth = 40;
    iconBubbleHeight = 35;
  } else if (isTablet) {
    iconBubbleWidth = 36;
    iconBubbleHeight = 30;
  } else if (screenWidth < 360) {
    iconBubbleWidth = 28;
    iconBubbleHeight = 23;
  }

  return (
    <TouchableOpacity
      style={tw`flex-1 items-center justify-center relative min-w-[60px] ${isTablet ? 'min-w-[80px]' : ''} ${isLargeScreen ? 'min-w-[100px]' : ''}`}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <View style={tw`items-center justify-center ${isLargeScreen ? 'py-3 px-4' : isTablet ? 'py-2 px-3' : 'py-1.5 px-2'}`}>
        {/* Animated bubble background with subtle gradient - only show when active */}
        {isActive && (
          <Animated.View
            style={[
              tw`absolute overflow-hidden`,
              {
                width: bubbleWidth,
                height: bubbleHeight,
                borderRadius: isLargeScreen ? 40 : 30,
                top: isLargeScreen ? -5 : -3,
                transform: [{ scale: scaleAnim }],
                opacity: scaleAnim,
              },
            ]}
          >
            <LinearGradient
              colors={['rgba(0, 168, 255, 0.25)', 'rgba(0, 168, 255, 0.15)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[tw`w-full h-full`, { borderRadius: isLargeScreen ? 40 : 30 }]}
            />
            
            {/* Iridescent shimmer overlay */}
            <Animated.View
              style={[
                tw`absolute top-0`,
                {
                  width: '200%',
                  height: '100%',
                  left: '-50%',
                  transform: [{ translateX: iridescentTranslateX }],
                  opacity: iridescentOpacity,
                },
              ]}
            >
              <LinearGradient
                colors={[
                  'transparent',
                  'rgba(0, 255, 255, 0.4)',
                  'rgba(128, 0, 255, 0.4)',
                  'rgba(255, 0, 255, 0.4)',
                  'transparent',
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={tw`w-full h-full`}
              />
            </Animated.View>
          </Animated.View>
        )}
        
        {/* Animated icon with scale - always visible */}
        <Animated.View
          style={[
            tw`items-center justify-center rounded-full ${isLargeScreen ? 'mb-2' : isTablet ? 'mb-1' : 'mb-0.5'}`,
            {
              width: iconBubbleWidth,
              height: iconBubbleHeight,
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
            tw`font-medium text-center ${isLargeScreen ? 'text-sm' : isTablet ? 'text-xs' : 'text-[10px]'}`,
            isActive ? tw`text-[#00A8FF] font-semibold` : tw`text-gray-800 opacity-90`,
            { opacity: isActive ? 1 : 0.85 }
          ]}
          numberOfLines={1}
          adjustsFontSizeToFit
          minimumFontScale={0.8}
        >
          {tab.label}
        </Animated.Text>
      </View>

      {/* Notification badge */}
      {tab.badge && (
        <Animated.View 
          style={[
            tw`absolute bg-red-500 rounded-full items-center justify-center px-1.5 shadow-md ${
              isLargeScreen ? '-top-1 right-4 min-w-6 h-6' : 
              isTablet ? '-top-0.5 right-3 min-w-5.5 h-5.5' : 
              '-top-0.5 right-2 min-w-5 h-5'
            }`,
            Platform.OS === 'ios' && {
              shadowColor: '#FF3B30',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.5,
              shadowRadius: 4,
            },
            {
              transform: [{ scale: isActive ? 1.1 : 1 }]
            }
          ]}
        >
          <Text style={tw`text-white font-bold ${isLargeScreen ? 'text-xs' : 'text-[11px]'}`}>{tab.badge}</Text>
        </Animated.View>
      )}
    </TouchableOpacity>
  );
};

const BottomTabNavigator = ({ activeTab = 'Home', onTabPress }) => {
  const { width, height } = useWindowDimensions();
  
  // Device type detection
  const isTablet = width >= 600; // Small tablets (iPad Mini)
  const isLargeScreen = width >= 768; // Large tablets (iPad, iPad Pro)
  const isLandscape = width > height;
  
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

  // Responsive padding based on device type and orientation
  let bottomPadding = 20;
  let horizontalPadding = 20;
  
  if (Platform.OS === 'ios') {
    if (isLargeScreen) {
      bottomPadding = isLandscape ? 20 : 40;
    } else if (isTablet) {
      bottomPadding = isLandscape ? 20 : 36;
    } else if (width < 375) {
      bottomPadding = 30;
    } else {
      bottomPadding = 34;
    }
  } else {
    // Android
    if (isLargeScreen) {
      bottomPadding = 24;
    } else if (isTablet) {
      bottomPadding = 22;
    } else if (width < 375) {
      bottomPadding = 16;
    } else {
      bottomPadding = 20;
    }
  }
  
  // Horizontal padding
  if (isLargeScreen) {
    horizontalPadding = isLandscape ? 60 : 40;
  } else if (isTablet) {
    horizontalPadding = isLandscape ? 40 : 30;
  } else if (width < 360) {
    horizontalPadding = 12;
  } else if (width < 400) {
    horizontalPadding = 16;
  }

  // Vertical padding inside tab bar
  let tabBarVerticalPadding = 8;
  let tabBarHorizontalPadding = 12;
  
  if (isLargeScreen) {
    tabBarVerticalPadding = 12;
    tabBarHorizontalPadding = 20;
  } else if (isTablet) {
    tabBarVerticalPadding = 10;
    tabBarHorizontalPadding = 16;
  } else if (width < 360) {
    tabBarVerticalPadding = 6;
    tabBarHorizontalPadding = 8;
  }

  // Maximum width for tablets to prevent tab bar from stretching too much
  const maxWidth = isLargeScreen ? 800 : isTablet ? 600 : '100%';

  return (
    <View 
      style={[
        tw`absolute bottom-0 left-0 right-0 items-center`,
        { 
          paddingHorizontal: horizontalPadding,
          paddingBottom: bottomPadding 
        }
      ]}
    >
      {/* Transparent background layer */}
      <View 
        style={[
          tw`overflow-hidden rounded-full w-full`,
          { maxWidth }
        ]}
      >
        <View 
          style={[
            tw`flex-row justify-around items-center rounded-full`,
            {
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              backdropFilter: 'blur(10px)',
              paddingVertical: tabBarVerticalPadding,
              paddingHorizontal: tabBarHorizontalPadding,
            },
            Platform.OS === 'ios' && {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.08,
              shadowRadius: 8,
            },
          ]}
        >
          {tabs.map((tab, index) => (
            <TabItem
              key={tab.id}
              tab={tab}
              isActive={activeTab === tab.id}
              onPress={() => handleTabPress(tab.id)}
              index={index}
              screenWidth={width}
              isTablet={isTablet}
              isLargeScreen={isLargeScreen}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default BottomTabNavigator;