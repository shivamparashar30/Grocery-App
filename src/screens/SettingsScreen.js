import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Switch,
  StatusBar,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import tw from '../utils/tailwind';

const SettingsScreen = ({ navigation }) => {
  // Settings states
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [orderUpdates, setOrderUpdates] = useState(true);
  const [promotionalOffers, setPromotionalOffers] = useState(true);
  const [locationServices, setLocationServices] = useState(true);
  const [autoPlayVideos, setAutoPlayVideos] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [biometricAuth, setBiometricAuth] = useState(false);

  const handleClearCache = () => {
    Alert.alert(
      'Clear Cache',
      'This will clear all cached data. Continue?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Clear',
          style: 'destructive',
          onPress: () => {
            // Implement cache clearing logic
            Alert.alert('Success', 'Cache cleared successfully');
          },
        },
      ]
    );
  };

  const handleResetSettings = () => {
    Alert.alert(
      'Reset Settings',
      'This will reset all settings to default. Continue?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: () => {
            // Reset all settings
            setPushNotifications(true);
            setEmailNotifications(true);
            setSmsNotifications(false);
            setOrderUpdates(true);
            setPromotionalOffers(true);
            setLocationServices(true);
            setAutoPlayVideos(false);
            setDarkMode(false);
            setBiometricAuth(false);
            Alert.alert('Success', 'Settings reset to default');
          },
        },
      ]
    );
  };

  const renderSettingItem = ({ 
    icon, 
    iconType = 'Ionicons',
    title, 
    subtitle, 
    hasSwitch, 
    switchValue, 
    onSwitchToggle,
    onPress,
    rightText,
    showChevron = true,
    iconColor = '#4CAF50'
  }) => {
    const IconComponent = iconType === 'MaterialCommunityIcons' ? MaterialCommunityIcons : Icon;

    return (
      <TouchableOpacity
        style={tw`flex-row items-center justify-between px-4 py-4 border-b border-gray-100`}
        onPress={hasSwitch ? null : onPress}
        disabled={hasSwitch}
        activeOpacity={hasSwitch ? 1 : 0.7}
      >
        <View style={tw`flex-row items-center flex-1`}>
          <View style={[tw`w-10 h-10 rounded-full justify-center items-center`, { backgroundColor: `${iconColor}20` }]}>
            <IconComponent name={icon} size={22} color={iconColor} />
          </View>
          <View style={tw`flex-1 ml-3`}>
            <Text style={tw`text-base font-semibold text-[#1A1A1A]`}>
              {title}
            </Text>
            {subtitle && (
              <Text style={tw`text-sm text-gray-500 mt-0.5`}>
                {subtitle}
              </Text>
            )}
          </View>
        </View>
        {hasSwitch ? (
          <Switch
            value={switchValue}
            onValueChange={onSwitchToggle}
            trackColor={{ false: '#D1D5DB', true: '#4CAF50' }}
            thumbColor="#FFFFFF"
          />
        ) : (
          <View style={tw`flex-row items-center`}>
            {rightText && (
              <Text style={tw`text-sm text-gray-500 mr-2`}>{rightText}</Text>
            )}
            {showChevron && <Icon name="chevron-forward" size={20} color="#9CA3AF" />}
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const renderSectionHeader = (title) => {
    return (
      <View style={tw`px-4 py-3 bg-gray-50`}>
        <Text style={tw`text-sm font-bold text-gray-500 uppercase tracking-wide`}>
          {title}
        </Text>
      </View>
    );
  };

  return (
    <View style={tw`flex-1 bg-gray-50`}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <SafeAreaView edges={['top']} style={tw`bg-white shadow-sm`}>
        <View style={tw`flex-row items-center px-4 py-3`}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={tw`mr-3`}
          >
            <Icon name="chevron-back" size={24} color="#1A1A1A" />
          </TouchableOpacity>
          <Text style={tw`text-lg font-semibold text-[#1A1A1A]`}>
            Settings
          </Text>
        </View>
      </SafeAreaView>

      <ScrollView 
        style={tw`flex-1`}
        showsVerticalScrollIndicator={false}
      >
        {/* Notifications Section */}
        {renderSectionHeader('Notifications')}
        <View style={tw`bg-white mb-2`}>
          {renderSettingItem({
            icon: 'notifications',
            title: 'Push Notifications',
            subtitle: 'Receive push notifications',
            hasSwitch: true,
            switchValue: pushNotifications,
            onSwitchToggle: setPushNotifications,
          })}
          {renderSettingItem({
            icon: 'mail',
            title: 'Email Notifications',
            subtitle: 'Receive email updates',
            hasSwitch: true,
            switchValue: emailNotifications,
            onSwitchToggle: setEmailNotifications,
          })}
          {renderSettingItem({
            icon: 'chatbubble',
            title: 'SMS Notifications',
            subtitle: 'Receive SMS updates',
            hasSwitch: true,
            switchValue: smsNotifications,
            onSwitchToggle: setSmsNotifications,
          })}
          {renderSettingItem({
            icon: 'cart',
            title: 'Order Updates',
            subtitle: 'Get notified about order status',
            hasSwitch: true,
            switchValue: orderUpdates,
            onSwitchToggle: setOrderUpdates,
          })}
          {renderSettingItem({
            icon: 'pricetag',
            title: 'Promotional Offers',
            subtitle: 'Receive offers and deals',
            hasSwitch: true,
            switchValue: promotionalOffers,
            onSwitchToggle: setPromotionalOffers,
          })}
        </View>

        {/* App Preferences Section */}
        {renderSectionHeader('App Preferences')}
        <View style={tw`bg-white mb-2`}>
          {renderSettingItem({
            icon: 'location',
            title: 'Location Services',
            subtitle: 'Allow app to access your location',
            hasSwitch: true,
            switchValue: locationServices,
            onSwitchToggle: setLocationServices,
            iconColor: '#2196F3',
          })}
          {renderSettingItem({
            icon: 'play-circle',
            iconType: 'Ionicons',
            title: 'Auto-Play Videos',
            subtitle: 'Play videos automatically',
            hasSwitch: true,
            switchValue: autoPlayVideos,
            onSwitchToggle: setAutoPlayVideos,
            iconColor: '#FF5722',
          })}
          {renderSettingItem({
            icon: 'moon',
            title: 'Dark Mode',
            subtitle: 'Coming soon',
            hasSwitch: true,
            switchValue: darkMode,
            onSwitchToggle: setDarkMode,
            iconColor: '#9C27B0',
          })}
          {renderSettingItem({
            icon: 'globe',
            title: 'Language',
            rightText: 'English',
            onPress: () => Alert.alert('Language', 'Language selection coming soon'),
            iconColor: '#FF9800',
          })}
          {renderSettingItem({
            icon: 'cash',
            title: 'Currency',
            rightText: 'INR (₹)',
            onPress: () => Alert.alert('Currency', 'Currency selection coming soon'),
            iconColor: '#4CAF50',
          })}
        </View>

        {/* Security Section */}
        {renderSectionHeader('Security & Privacy')}
        <View style={tw`bg-white mb-2`}>
          {renderSettingItem({
            icon: 'finger-print',
            title: 'Biometric Authentication',
            subtitle: 'Use fingerprint/face to login',
            hasSwitch: true,
            switchValue: biometricAuth,
            onSwitchToggle: setBiometricAuth,
            iconColor: '#E91E63',
          })}
          {renderSettingItem({
            icon: 'lock-closed',
            title: 'Change Password',
            onPress: () => navigation.navigate('ChangePassword'),
            iconColor: '#FF5722',
          })}
          {renderSettingItem({
            icon: 'shield-checkmark',
            title: 'Privacy Policy',
            onPress: () => navigation.navigate('Privacy'),
            iconColor: '#2196F3',
          })}
          {renderSettingItem({
            icon: 'document-text',
            title: 'Terms & Conditions',
            onPress: () => navigation.navigate('Terms'),
            iconColor: '#9C27B0',
          })}
        </View>

        {/* Data & Storage Section */}
        {renderSectionHeader('Data & Storage')}
        <View style={tw`bg-white mb-2`}>
          {renderSettingItem({
            icon: 'trash',
            title: 'Clear Cache',
            subtitle: 'Free up storage space',
            onPress: handleClearCache,
            showChevron: false,
            iconColor: '#FF9800',
          })}
          {renderSettingItem({
            icon: 'download',
            title: 'Download Quality',
            rightText: 'High',
            onPress: () => Alert.alert('Download Quality', 'Quality settings coming soon'),
            iconColor: '#4CAF50',
          })}
          {renderSettingItem({
            icon: 'cellular',
            iconType: 'Ionicons',
            title: 'Data Saver',
            subtitle: 'Reduce data usage',
            hasSwitch: true,
            switchValue: false,
            onSwitchToggle: () => {},
            iconColor: '#00BCD4',
          })}
        </View>

        {/* About Section */}
        {renderSectionHeader('About')}
        <View style={tw`bg-white mb-2`}>
          {renderSettingItem({
            icon: 'information-circle',
            title: 'App Version',
            rightText: '1.0.0',
            showChevron: false,
            iconColor: '#607D8B',
          })}
          {renderSettingItem({
            icon: 'star',
            title: 'Rate Us',
            onPress: () => Alert.alert('Rate Us', 'Thank you for your support!'),
            iconColor: '#FFC107',
          })}
          {renderSettingItem({
            icon: 'share-social',
            title: 'Share App',
            onPress: () => Alert.alert('Share', 'Share feature coming soon'),
            iconColor: '#2196F3',
          })}
          {renderSettingItem({
            icon: 'help-circle',
            title: 'Help & Support',
            onPress: () => navigation.navigate('HelpCenter'),
            iconColor: '#4CAF50',
          })}
        </View>

        {/* Danger Zone */}
        <View style={tw`px-4 mt-6 mb-4`}>
          <TouchableOpacity
            style={tw`bg-gray-100 border border-gray-300 rounded-xl py-4 items-center mb-3`}
            onPress={handleResetSettings}
            activeOpacity={0.7}
          >
            <View style={tw`flex-row items-center`}>
              <Icon name="refresh" size={20} color="#666" />
              <Text style={tw`text-base font-semibold text-gray-700 ml-2`}>
                Reset Settings to Default
              </Text>
            </View>
          </TouchableOpacity>

          <View style={tw`bg-red-50 rounded-xl p-4 border border-red-200`}>
            <View style={tw`flex-row items-start`}>
              <Icon name="warning" size={20} color="#EF4444" />
              <View style={tw`flex-1 ml-2`}>
                <Text style={tw`text-sm font-semibold text-red-700 mb-1`}>
                  Danger Zone
                </Text>
                <Text style={tw`text-xs text-red-600`}>
                  Some actions here cannot be undone. Please proceed with caution.
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Bottom Spacing */}
        <View style={tw`h-6`} />
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;