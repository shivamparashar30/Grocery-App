import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

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

  const renderIcon = (iconName, iconType, isActive) => {
    const color = isActive ? '#1A1A1A' : '#9E9E9E';
    const size = 24;

    switch (iconType) {
      case 'MaterialIcons':
        return <MaterialIcon name={iconName} size={size} color={color} />;
      case 'MaterialCommunityIcons':
        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
      case 'Entypo':
        return <Entypo name={iconName} size={size} color={color} />;
      default:
        return <Icon name={iconName} size={size} color={color} />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBarWrapper}>
        <View style={styles.tabBar}>
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <TouchableOpacity
                key={tab.id}
                style={[styles.tabItem, isActive && styles.tabItemActive]}
                onPress={() => handleTabPress(tab.id)}
                activeOpacity={0.8}
              >
                <View style={styles.iconContainer}>
                  {renderIcon(tab.icon, tab.iconType, isActive)}
                </View>
                <Text style={[styles.tabText, isActive && styles.tabTextActive]}>
                  {tab.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 30 : 20,
    left: 20,
    right: 20,
  },
  tabBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  tabBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 8,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 25,
    minWidth: 60,
  },
  tabItemActive: {
    backgroundColor: '#FFF4E6',
  },
  iconContainer: {
    marginBottom: 2,
  },
  tabText: {
    fontSize: 11,
    color: '#9E9E9E',
    fontWeight: '500',
    textAlign: 'center',
  },
  tabTextActive: {
    color: '#1A1A1A',
    fontWeight: '700',
  },
});

export default BottomTabNavigator;