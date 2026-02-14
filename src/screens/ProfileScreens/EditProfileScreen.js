import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import tw from '../../utils/tailwind';

const EditProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('Shivam Kumar');
  const [email, setEmail] = useState('shivam@example.com');
  const [phone, setPhone] = useState('+91 98765 43210');
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    if (!name.trim() || !email.trim() || !phone.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert('Success', 'Profile updated successfully', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    }, 1500);
  };

  const handleChangePhoto = () => {
    Alert.alert(
      'Change Photo',
      'Choose an option',
      [
        { text: 'Take Photo', onPress: () => console.log('Camera') },
        { text: 'Choose from Gallery', onPress: () => console.log('Gallery') },
        { text: 'Cancel', style: 'cancel' }
      ]
    );
  };

  return (
    <View style={tw`flex-1 bg-gray-50`}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <SafeAreaView edges={['top']} style={tw`bg-white shadow-sm`}>
        <View style={tw`flex-row items-center justify-between px-4 py-3`}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={tw`flex-row items-center`}
          >
            <Icon name="chevron-back" size={24} color="#1A1A1A" />
            <Text style={tw`text-lg font-semibold text-[#1A1A1A] ml-2`}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView 
        style={tw`flex-1`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`pb-6`}
      >
        {/* Profile Photo */}
        <View style={tw`items-center py-8`}>
          <View style={tw`relative`}>
            <Image
              source={{ uri: 'https://via.placeholder.com/120/4CAF50/FFFFFF?text=SK' }}
              style={tw`w-30 h-30 rounded-full border-4 border-green-100`}
            />
            <TouchableOpacity
              style={tw`absolute bottom-0 right-0 bg-green-500 rounded-full w-10 h-10 justify-center items-center shadow-lg`}
              onPress={handleChangePhoto}
            >
              <Icon name="camera" size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
          <Text style={tw`text-sm text-gray-500 mt-3`}>Tap to change photo</Text>
        </View>

        {/* Form Fields */}
        <View style={tw`px-4`}>
          {/* Name Field */}
          <View style={tw`mb-4`}>
            <Text style={tw`text-sm font-semibold text-gray-700 mb-2`}>
              Full Name
            </Text>
            <View style={tw`bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-200`}>
              <TextInput
                style={tw`text-base text-[#1A1A1A] font-medium`}
                value={name}
                onChangeText={setName}
                placeholder="Enter your name"
                placeholderTextColor="#9CA3AF"
              />
            </View>
          </View>

          {/* Email Field */}
          <View style={tw`mb-4`}>
            <Text style={tw`text-sm font-semibold text-gray-700 mb-2`}>
              Email Address
            </Text>
            <View style={tw`bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-200`}>
              <TextInput
                style={tw`text-base text-[#1A1A1A] font-medium`}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                placeholderTextColor="#9CA3AF"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          {/* Phone Field */}
          <View style={tw`mb-4`}>
            <Text style={tw`text-sm font-semibold text-gray-700 mb-2`}>
              Phone Number
            </Text>
            <View style={tw`bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-200`}>
              <TextInput
                style={tw`text-base text-[#1A1A1A] font-medium`}
                value={phone}
                onChangeText={setPhone}
                placeholder="Enter your phone"
                placeholderTextColor="#9CA3AF"
                keyboardType="phone-pad"
              />
            </View>
          </View>

          {/* Additional Info */}
          <View style={tw`bg-blue-50 rounded-xl p-4 mt-2`}>
            <View style={tw`flex-row items-start`}>
              <Icon name="information-circle" size={20} color="#3B82F6" />
              <Text style={tw`text-sm text-blue-700 ml-2 flex-1`}>
                Your email and phone number are used for account verification and order updates.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Save Button */}
      <SafeAreaView edges={['bottom']} style={tw`bg-white border-t border-gray-200`}>
        <View style={tw`px-4 py-3`}>
          <TouchableOpacity
            style={tw`bg-green-500 rounded-xl py-4 items-center shadow-sm ${isLoading ? 'opacity-50' : ''}`}
            onPress={handleSave}
            disabled={isLoading}
            activeOpacity={0.7}
          >
            <Text style={tw`text-base font-bold text-white`}>
              {isLoading ? 'Saving...' : 'Save Changes'}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default EditProfileScreen;