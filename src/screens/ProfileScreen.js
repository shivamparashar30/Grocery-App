import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  Switch,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import tw from '../utils/tailwind';
import { useAuth } from '../context/AuthContext';

const ProfileScreen = ({ navigation }) => {
  const { userToken, signOut } = useAuth();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(true);

  // User data (this would normally come from your API/context)
  const userData = {
    name: 'Shivam Kumar',
    email: 'shivam@example.com',
    phone: '+91 98765 43210',
    memberSince: 'Jan 2024',
    avatar: 'https://via.placeholder.com/100/4CAF50/FFFFFF?text=SK',
  };

  // Menu sections
  const accountSection = [
    {
      id: '1',
      title: 'Edit Profile',
      icon: 'person-outline',
      iconType: 'Ionicons',
      onPress: () => navigation.navigate('EditProfile'),
    },
    {
      id: '2',
      title: 'My Addresses',
      icon: 'location-outline',
      iconType: 'Ionicons',
      badge: '3',
      onPress: () => navigation.navigate('MyAddresses'),
    },
    {
      id: '3',
      title: 'Payment Methods',
      icon: 'card-outline',
      iconType: 'Ionicons',
      onPress: () => navigation.navigate('PaymentMethods'),
    },
    {
      id: '4',
      title: 'Order History',
      icon: 'time-outline',
      iconType: 'Ionicons',
      onPress: () => navigation.navigate('OrderHistory'),
    },
  ];

  const preferencesSection = [
    {
      id: '1',
      title: 'Notifications',
      icon: 'notifications-outline',
      iconType: 'Ionicons',
      hasSwitch: true,
      value: notificationsEnabled,
      onToggle: setNotificationsEnabled,
    },
    {
      id: '2',
      title: 'Location Services',
      icon: 'navigate-outline',
      iconType: 'Ionicons',
      hasSwitch: true,
      value: locationEnabled,
      onToggle: setLocationEnabled,
    },
    {
      id: '3',
      title: 'Language',
      icon: 'language-outline',
      iconType: 'Ionicons',
      rightText: 'English',
      onPress: () => navigation.navigate('Language'),
    },
  ];

  const supportSection = [
    {
      id: '1',
      title: 'Help Center',
      icon: 'help-circle-outline',
      iconType: 'Ionicons',
      onPress: () => navigation.navigate('HelpCenter'),
    },
    {
      id: '2',
      title: 'About Us',
      icon: 'information-circle-outline',
      iconType: 'Ionicons',
      onPress: () => navigation.navigate('About'),
    },
    {
      id: '3',
      title: 'Terms & Conditions',
      icon: 'document-text-outline',
      iconType: 'Ionicons',
      onPress: () => navigation.navigate('Terms'),
    },
    {
      id: '4',
      title: 'Privacy Policy',
      icon: 'shield-checkmark-outline',
      iconType: 'Ionicons',
      onPress: () => navigation.navigate('Privacy'),
    },
  ];

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: () => signOut(),
        },
      ],
      { cancelable: true }
    );
  };

  const renderMenuItem = (item) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={tw`flex-row items-center justify-between bg-white px-4 py-4 border-b border-gray-100`}
        onPress={item.onPress}
        activeOpacity={0.7}
      >
        <View style={tw`flex-row items-center flex-1`}>
          <View style={tw`w-10 h-10 bg-gray-100 rounded-full justify-center items-center`}>
            <Icon name={item.icon} size={20} color="#1A1A1A" />
          </View>
          <Text style={tw`text-base font-semibold text-[#1A1A1A] ml-3`}>
            {item.title}
          </Text>
          {item.badge && (
            <View style={tw`bg-green-500 rounded-full px-2 py-0.5 ml-2`}>
              <Text style={tw`text-xs font-bold text-white`}>{item.badge}</Text>
            </View>
          )}
        </View>
        {item.hasSwitch ? (
          <Switch
            value={item.value}
            onValueChange={item.onToggle}
            trackColor={{ false: '#D1D5DB', true: '#4CAF50' }}
            thumbColor="#FFFFFF"
          />
        ) : (
          <View style={tw`flex-row items-center`}>
            {item.rightText && (
              <Text style={tw`text-sm text-gray-500 mr-2`}>{item.rightText}</Text>
            )}
            <Icon name="chevron-forward" size={20} color="#9CA3AF" />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={tw`flex-1 bg-gray-50`}>
      <StatusBar barStyle="light-content" backgroundColor="#4CAF50" />
      
      {/* Header with Gradient */}
      <LinearGradient
        colors={['#4CAF50', '#45A049']}
        style={tw`pb-6`}
      >
        <SafeAreaView edges={['top']}>
          <View style={tw`flex-row items-center justify-between px-4 pt-2`}>
            <View style={tw`flex-row items-center flex-1`}>
              <TouchableOpacity 
                style={tw`bg-white bg-opacity-20 rounded-full w-10 h-10 justify-center items-center mr-3`}
                onPress={() => navigation.goBack()}
              >
                <Icon name="chevron-back" size={24} color="#FFFFFF" />
              </TouchableOpacity>
              <Text style={tw`text-2xl font-extrabold text-white`}>Profile</Text>
            </View>
            <TouchableOpacity 
              style={tw`bg-white bg-opacity-20 rounded-full w-10 h-10 justify-center items-center`}
              onPress={() => navigation.navigate('Settings')}
            >
              <Icon name="settings-outline" size={22} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          {/* User Info Card */}
          <View style={tw`mx-4 mt-6 bg-white rounded-2xl p-4 shadow-lg`}>
            <View style={tw`flex-row items-center`}>
              <Image
                source={{ uri: userData.avatar }}
                style={tw`w-20 h-20 rounded-full border-4 border-green-100`}
              />
              <View style={tw`flex-1 ml-4`}>
                <Text style={tw`text-xl font-bold text-[#1A1A1A] mb-1`}>
                  {userData.name}
                </Text>
                <Text style={tw`text-sm text-gray-500 mb-0.5`}>
                  {userData.email}
                </Text>
                <Text style={tw`text-sm text-gray-500`}>
                  {userData.phone}
                </Text>
              </View>
            </View>

            {/* Stats Row */}
            <View style={tw`flex-row justify-around mt-4 pt-4 border-t border-gray-100`}>
              <View style={tw`items-center`}>
                <Text style={tw`text-2xl font-bold text-green-600`}>24</Text>
                <Text style={tw`text-xs text-gray-500 mt-1`}>Orders</Text>
              </View>
              <View style={tw`w-px bg-gray-200`} />
              <View style={tw`items-center`}>
                <Text style={tw`text-2xl font-bold text-green-600`}>₹2,450</Text>
                <Text style={tw`text-xs text-gray-500 mt-1`}>Saved</Text>
              </View>
              <View style={tw`w-px bg-gray-200`} />
              <View style={tw`items-center`}>
                <Text style={tw`text-2xl font-bold text-green-600`}>Gold</Text>
                <Text style={tw`text-xs text-gray-500 mt-1`}>Member</Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>

      {/* Scrollable Content */}
      <ScrollView 
        style={tw`flex-1`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`pb-6`}
      >
        {/* Account Section */}
        <View style={tw`mt-6`}>
          <Text style={tw`text-sm font-bold text-gray-500 uppercase tracking-wide px-4 mb-2`}>
            Account
          </Text>
          <View style={tw`bg-white rounded-2xl mx-4 overflow-hidden shadow-sm`}>
            {accountSection.map(renderMenuItem)}
          </View>
        </View>

        {/* Preferences Section */}
        <View style={tw`mt-6`}>
          <Text style={tw`text-sm font-bold text-gray-500 uppercase tracking-wide px-4 mb-2`}>
            Preferences
          </Text>
          <View style={tw`bg-white rounded-2xl mx-4 overflow-hidden shadow-sm`}>
            {preferencesSection.map(renderMenuItem)}
          </View>
        </View>

        {/* Support Section */}
        <View style={tw`mt-6`}>
          <Text style={tw`text-sm font-bold text-gray-500 uppercase tracking-wide px-4 mb-2`}>
            Support
          </Text>
          <View style={tw`bg-white rounded-2xl mx-4 overflow-hidden shadow-sm`}>
            {supportSection.map(renderMenuItem)}
          </View>
        </View>

        {/* Membership Card */}
        <View style={tw`mx-4 mt-6`}>
          <LinearGradient
            colors={['#FFD700', '#FFC107']}
            style={tw`rounded-2xl p-4 shadow-lg`}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <View style={tw`flex-row items-center justify-between`}>
              <View style={tw`flex-1`}>
                <Text style={tw`text-sm font-semibold text-gray-800 mb-1`}>
                  Gold Member
                </Text>
                <Text style={tw`text-xl font-extrabold text-gray-900 mb-2`}>
                  Member since {userData.memberSince}
                </Text>
                <Text style={tw`text-xs text-gray-700`}>
                  Enjoying exclusive benefits & rewards
                </Text>
              </View>
              <MaterialCommunityIcons name="crown" size={50} color="#CD7F32" />
            </View>
          </LinearGradient>
        </View>

        {/* App Info */}
        <View style={tw`items-center mt-6 px-4`}>
          <Text style={tw`text-xs text-gray-400 mb-1`}>
            Version 1.0.0
          </Text>
          <Text style={tw`text-xs text-gray-400`}>
            Made with ❤️ in India
          </Text>
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          style={tw`mx-4 mt-6 bg-red-50 border-2 border-red-500 rounded-xl py-4 items-center shadow-sm`}
          onPress={handleLogout}
          activeOpacity={0.7}
        >
          <View style={tw`flex-row items-center`}>
            <Icon name="log-out-outline" size={22} color="#EF4444" />
            <Text style={tw`text-base font-bold text-red-500 ml-2`}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>

        {/* Bottom Spacing */}
        <View style={tw`h-6`} />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;