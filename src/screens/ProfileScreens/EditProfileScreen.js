// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   StatusBar,
//   Alert,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/Ionicons';
// import tw from '../../utils/tailwind';

// const EditProfileScreen = ({ navigation }) => {
//   const [name, setName] = useState('Shivam Kumar');
//   const [email, setEmail] = useState('shivam@example.com');
//   const [phone, setPhone] = useState('+91 98765 43210');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSave = async () => {
//     if (!name.trim() || !email.trim() || !phone.trim()) {
//       Alert.alert('Error', 'Please fill in all fields');
//       return;
//     }

//     setIsLoading(true);
    
//     // Simulate API call
//     setTimeout(() => {
//       setIsLoading(false);
//       Alert.alert('Success', 'Profile updated successfully', [
//         { text: 'OK', onPress: () => navigation.goBack() }
//       ]);
//     }, 1500);
//   };

//   const handleChangePhoto = () => {
//     Alert.alert(
//       'Change Photo',
//       'Choose an option',
//       [
//         { text: 'Take Photo', onPress: () => console.log('Camera') },
//         { text: 'Choose from Gallery', onPress: () => console.log('Gallery') },
//         { text: 'Cancel', style: 'cancel' }
//       ]
//     );
//   };

//   return (
//     <View style={tw`flex-1 bg-gray-50`}>
//       <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
//       {/* Header */}
//       <SafeAreaView edges={['top']} style={tw`bg-white shadow-sm`}>
//         <View style={tw`flex-row items-center justify-between px-4 py-3`}>
//           <TouchableOpacity
//             onPress={() => navigation.goBack()}
//             style={tw`flex-row items-center`}
//           >
//             <Icon name="chevron-back" size={24} color="#1A1A1A" />
//             <Text style={tw`text-lg font-semibold text-[#1A1A1A] ml-2`}>
//               Edit Profile
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </SafeAreaView>

//       <ScrollView 
//         style={tw`flex-1`}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={tw`pb-6`}
//       >
//         {/* Profile Photo */}
//         <View style={tw`items-center py-8`}>
//           <View style={tw`relative`}>
//             <Image
//               source={{ uri: 'https://via.placeholder.com/120/4CAF50/FFFFFF?text=SK' }}
//               style={tw`w-30 h-30 rounded-full border-4 border-green-100`}
//             />
//             <TouchableOpacity
//               style={tw`absolute bottom-0 right-0 bg-green-500 rounded-full w-10 h-10 justify-center items-center shadow-lg`}
//               onPress={handleChangePhoto}
//             >
//               <Icon name="camera" size={20} color="#FFFFFF" />
//             </TouchableOpacity>
//           </View>
//           <Text style={tw`text-sm text-gray-500 mt-3`}>Tap to change photo</Text>
//         </View>

//         {/* Form Fields */}
//         <View style={tw`px-4`}>
//           {/* Name Field */}
//           <View style={tw`mb-4`}>
//             <Text style={tw`text-sm font-semibold text-gray-700 mb-2`}>
//               Full Name
//             </Text>
//             <View style={tw`bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-200`}>
//               <TextInput
//                 style={tw`text-base text-[#1A1A1A] font-medium`}
//                 value={name}
//                 onChangeText={setName}
//                 placeholder="Enter your name"
//                 placeholderTextColor="#9CA3AF"
//               />
//             </View>
//           </View>

//           {/* Email Field */}
//           <View style={tw`mb-4`}>
//             <Text style={tw`text-sm font-semibold text-gray-700 mb-2`}>
//               Email Address
//             </Text>
//             <View style={tw`bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-200`}>
//               <TextInput
//                 style={tw`text-base text-[#1A1A1A] font-medium`}
//                 value={email}
//                 onChangeText={setEmail}
//                 placeholder="Enter your email"
//                 placeholderTextColor="#9CA3AF"
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//               />
//             </View>
//           </View>

//           {/* Phone Field */}
//           <View style={tw`mb-4`}>
//             <Text style={tw`text-sm font-semibold text-gray-700 mb-2`}>
//               Phone Number
//             </Text>
//             <View style={tw`bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-200`}>
//               <TextInput
//                 style={tw`text-base text-[#1A1A1A] font-medium`}
//                 value={phone}
//                 onChangeText={setPhone}
//                 placeholder="Enter your phone"
//                 placeholderTextColor="#9CA3AF"
//                 keyboardType="phone-pad"
//               />
//             </View>
//           </View>

//           {/* Additional Info */}
//           <View style={tw`bg-blue-50 rounded-xl p-4 mt-2`}>
//             <View style={tw`flex-row items-start`}>
//               <Icon name="information-circle" size={20} color="#3B82F6" />
//               <Text style={tw`text-sm text-blue-700 ml-2 flex-1`}>
//                 Your email and phone number are used for account verification and order updates.
//               </Text>
//             </View>
//           </View>
//         </View>
//       </ScrollView>

//       {/* Save Button */}
//       <SafeAreaView edges={['bottom']} style={tw`bg-white border-t border-gray-200`}>
//         <View style={tw`px-4 py-3`}>
//           <TouchableOpacity
//             style={tw`bg-green-500 rounded-xl py-4 items-center shadow-sm ${isLoading ? 'opacity-50' : ''}`}
//             onPress={handleSave}
//             disabled={isLoading}
//             activeOpacity={0.7}
//           >
//             <Text style={tw`text-base font-bold text-white`}>
//               {isLoading ? 'Saving...' : 'Save Changes'}
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </SafeAreaView>
//     </View>
//   );
// };

// export default EditProfileScreen;

// EditProfileScreen.js - FIXED VERSION with guaranteed phone display
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tw from '../../utils/tailwind';
import { fetchUserProfile, updateUserProfile, clearUpdateSuccess } from '../../store/slices/userSlice';

const EditProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  
  // Redux state
  const { data: userData, loading, updating, updateSuccess, error } = useSelector((state) => state.user);
  
  // Local form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  // Load data from AsyncStorage AND Redux on mount
  useEffect(() => {
    const loadUserData = async () => {
      try {
        console.log('=== EditProfile: Loading user data ===');
        
        // First, try to get from AsyncStorage directly
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          const user = JSON.parse(storedUser);
          console.log('EditProfile: Data from AsyncStorage:', user);
          
          // Set form fields from AsyncStorage immediately
          setName(user.name || '');
          setEmail(user.email || '');
          setPhone(user.phone || '');
          setIsDataLoaded(true);
          
          console.log('EditProfile: Set phone from AsyncStorage:', user.phone);
        }
        
        // Also fetch fresh data from API
        dispatch(fetchUserProfile());
        
      } catch (error) {
        console.error('EditProfile: Error loading user data:', error);
      }
    };

    loadUserData();
  }, [dispatch]);

  // Update form when Redux userData changes (from API)
  useEffect(() => {
    if (userData) {
      console.log('=== EditProfile: userData from Redux ===');
      console.log('Name:', userData.name);
      console.log('Email:', userData.email);
      console.log('Phone:', userData.phone);
      
      // Update fields with API data
      setName(userData.name || '');
      setEmail(userData.email || '');
      setPhone(userData.phone || '');
      setIsDataLoaded(true);
      
      console.log('EditProfile: Updated form fields from Redux');
    }
  }, [userData]);

  // Log whenever phone state changes
  useEffect(() => {
    console.log('EditProfile: Phone state changed to:', phone);
  }, [phone]);

  // Handle update success
  useEffect(() => {
    if (updateSuccess) {
      console.log('EditProfile: Update successful!');
      
      Alert.alert(
        'Success', 
        'Profile updated successfully', 
        [
          { 
            text: 'OK', 
            onPress: async () => {
              // Fetch fresh data after update
              await dispatch(fetchUserProfile());
              dispatch(clearUpdateSuccess());
              navigation.goBack();
            }
          }
        ]
      );
    }
  }, [updateSuccess, dispatch, navigation]);

  // Handle errors
  useEffect(() => {
    if (error) {
      console.error('EditProfile: Error:', error);
      Alert.alert('Error', error);
    }
  }, [error]);

  const handleSave = async () => {
    console.log('=== EditProfile: Saving profile ===');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    
    // Validation
    if (!name.trim()) {
      Alert.alert('Error', 'Please enter your name');
      return;
    }

    if (!email.trim()) {
      Alert.alert('Error', 'Please enter your email');
      return;
    }

    if (!phone.trim()) {
      Alert.alert('Error', 'Please enter your phone number');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    // Phone validation (accepts various formats)
    const cleanPhone = phone.replace(/[\s-]/g, ''); // Remove spaces and dashes
    if (cleanPhone.length < 10) {
      Alert.alert('Error', 'Please enter a valid phone number (at least 10 digits)');
      return;
    }

    console.log('EditProfile: Validation passed, updating profile...');
    
    // Dispatch update action
    const result = await dispatch(updateUserProfile({ name, email, phone }));
    
    if (result.type === 'user/updateProfile/fulfilled') {
      console.log('EditProfile: Profile updated successfully in backend');
      
      // Also update AsyncStorage directly to ensure it's saved
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          const user = JSON.parse(storedUser);
          user.name = name;
          user.email = email;
          user.phone = phone;
          await AsyncStorage.setItem('user', JSON.stringify(user));
          console.log('EditProfile: AsyncStorage updated with phone:', phone);
        }
      } catch (error) {
        console.error('EditProfile: Error updating AsyncStorage:', error);
      }
    }
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

  // Get user initials for avatar
  const getInitials = (name) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  // Show loading state while fetching (only on first load)
  if (loading && !isDataLoaded) {
    return (
      <View style={tw`flex-1 bg-gray-50 justify-center items-center`}>
        <ActivityIndicator size="large" color="#4CAF50" />
        <Text style={tw`mt-4 text-gray-600`}>Loading profile...</Text>
      </View>
    );
  }

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
            {userData?.avatar ? (
              <Image
                source={{ uri: userData.avatar }}
                style={tw`w-30 h-30 rounded-full border-4 border-green-100`}
              />
            ) : (
              <View style={tw`w-30 h-30 rounded-full border-4 border-green-100 bg-green-500 justify-center items-center`}>
                <Text style={tw`text-3xl font-bold text-white`}>
                  {getInitials(name)}
                </Text>
              </View>
            )}
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
                editable={!updating}
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
                editable={!updating}
              />
            </View>
          </View>

          {/* Phone Field - GUARANTEED TO SHOW */}
          <View style={tw`mb-4`}>
            <Text style={tw`text-sm font-semibold text-gray-700 mb-2`}>
              Phone Number
            </Text>
            <View style={tw`bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-200`}>
              <TextInput
                style={tw`text-base text-[#1A1A1A] font-medium`}
                value={phone}
                onChangeText={setPhone}
                placeholder="Enter your phone number"
                placeholderTextColor="#9CA3AF"
                keyboardType="phone-pad"
                editable={!updating}
              />
            </View>
            {/* Show current phone value for debugging */}
            {phone ? (
              <Text style={tw`text-xs text-gray-500 mt-1 ml-1`}>
                Current: {phone}
              </Text>
            ) : (
              <Text style={tw`text-xs text-red-500 mt-1 ml-1`}>
                No phone number set
              </Text>
            )}
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

          {/* Show user stats */}
          {userData && (
            <View style={tw`bg-green-50 rounded-xl p-4 mt-4`}>
              <Text style={tw`text-sm font-semibold text-green-900 mb-2`}>
                Account Information
              </Text>
              <View style={tw`flex-row justify-between`}>
                <View>
                  <Text style={tw`text-xs text-green-700`}>Orders</Text>
                  <Text style={tw`text-lg font-bold text-green-900`}>
                    {userData.orderCount || 0}
                  </Text>
                </View>
                <View>
                  <Text style={tw`text-xs text-green-700`}>Member</Text>
                  <Text style={tw`text-lg font-bold text-green-900`}>
                    {userData.membershipTier || 'Gold'}
                  </Text>
                </View>
                <View>
                  <Text style={tw`text-xs text-green-700`}>Savings</Text>
                  <Text style={tw`text-lg font-bold text-green-900`}>
                    ₹{userData.totalSavings || 0}
                  </Text>
                </View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Save Button */}
      <SafeAreaView edges={['bottom']} style={tw`bg-white border-t border-gray-200`}>
        <View style={tw`px-4 py-3`}>
          <TouchableOpacity
            style={tw`bg-green-500 rounded-xl py-4 items-center shadow-sm ${updating ? 'opacity-50' : ''}`}
            onPress={handleSave}
            disabled={updating}
            activeOpacity={0.7}
          >
            {updating ? (
              <View style={tw`flex-row items-center`}>
                <ActivityIndicator size="small" color="#FFFFFF" />
                <Text style={tw`text-base font-bold text-white ml-2`}>
                  Saving...
                </Text>
              </View>
            ) : (
              <Text style={tw`text-base font-bold text-white`}>
                Save Changes
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default EditProfileScreen;