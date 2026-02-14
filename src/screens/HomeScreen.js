// import React, { useState, useRef, useEffect } from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   TextInput,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   FlatList,
//   useWindowDimensions,
//   StatusBar,
//   Animated,
//   Image,
//   Keyboard,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Icon1 from 'react-native-vector-icons/Entypo';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import LinearGradient from 'react-native-linear-gradient';
// import LottieView from 'lottie-react-native';
// import AddressSelectionModal from '../screens/Homescreen/AddressSelectionModal';
// import { useNavigation } from '@react-navigation/native';
// import tw from '../../src/utils/tailwind';

// const HomeScreen = () => {
//   const { width } = useWindowDimensions(); // Use hook instead of Dimensions.get
//   const navigation = useNavigation();
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [isSearchFocused, setIsSearchFocused] = useState(false);
//   const [showAddressModal, setShowAddressModal] = useState(false);
//   const [selectedAddress, setSelectedAddress] = useState('HOME - Shivam');
//   const gradientAnim = useRef(new Animated.Value(0)).current;
//   const snowAnim = useRef(new Animated.Value(0)).current;
//   const snowAnim2 = useRef(new Animated.Value(0)).current;
//   const snowAnim3 = useRef(new Animated.Value(0)).current;
//   const snowAnim4 = useRef(new Animated.Value(0)).current;
//   const snowAnim5 = useRef(new Animated.Value(0)).current;
//   const lottieRef = useRef(null);
//   const kidsLottieRef = useRef(null);

//   // Category-specific gradient colors - Updated to bluish/cool tones
//   const categoryGradients = {
//     All: ['#E0F7FA', '#B2EBF2'], // Light cyan/teal
//     Winter: ['#B3E5FC', '#81D4FA'], // Light blue
//     Electronics: ['#CE93D8', '#BA68C8'], // Purple
//     Beauty: ['#F48FB1', '#F06292'], // Pink
//     Decor: ['#A5D6A7', '#81C784'], // Green
//     Kids: ['#FFCDD2', '#EF9A9A'], // Coral pink
//   };

//   useEffect(() => {
//     Animated.timing(gradientAnim, {
//       toValue: 1,
//       duration: 500,
//       useNativeDriver: false,
//     }).start();

//     // Animate multiple snowflakes falling and play Lottie
//     if (selectedCategory === 'Winter') {
//       // Play Lottie animation
//       if (lottieRef.current) {
//         lottieRef.current.play();
//       }
      
//       Animated.loop(
//         Animated.timing(snowAnim, {
//           toValue: 1,
//           duration: 3000,
//           useNativeDriver: true,
//         })
//       ).start();
      
//       Animated.loop(
//         Animated.timing(snowAnim2, {
//           toValue: 1,
//           duration: 3500,
//           useNativeDriver: true,
//         })
//       ).start();
      
//       Animated.loop(
//         Animated.timing(snowAnim3, {
//           toValue: 1,
//           duration: 4000,
//           useNativeDriver: true,
//         })
//       ).start();
      
//       Animated.loop(
//         Animated.timing(snowAnim4, {
//           toValue: 1,
//           duration: 3200,
//           useNativeDriver: true,
//         })
//       ).start();
      
//       Animated.loop(
//         Animated.timing(snowAnim5, {
//           toValue: 1,
//           duration: 3800,
//           useNativeDriver: true,
//         })
//       ).start();
//     } else {
//       // Pause Lottie animation
//       if (lottieRef.current) {
//         lottieRef.current.pause();
//       }
      
//       snowAnim.setValue(0);
//       snowAnim2.setValue(0);
//       snowAnim3.setValue(0);
//       snowAnim4.setValue(0);
//       snowAnim5.setValue(0);
//     }

//     // Handle Kids animation
//     if (selectedCategory === 'Kids' && !isSearchFocused) {
//       if (kidsLottieRef.current) {
//         kidsLottieRef.current.play();
//       }
//     } else {
//       if (kidsLottieRef.current) {
//         kidsLottieRef.current.pause();
//       }
//     }
//   }, [selectedCategory, isSearchFocused]);

//   const getCurrentGradient = () => {
//     return categoryGradients[selectedCategory] || categoryGradients.All;
//   };

//   // Handler for address selection
//   const handleAddressSelect = (addressData) => {
//     console.log('Address selected:', addressData);
    
//     if (addressData.type === 'current') {
//       // Handle current location
//       setSelectedAddress('Current Location');
//       // Navigate to map screen
//       navigation.navigate('MapSelection', { 
//         latitude: addressData.latitude,
//         longitude: addressData.longitude 
//       });
//     } else if (addressData.type === 'new') {
//       // Navigate to map screen for new address
//       navigation.navigate('MapSelection');
//     } else if (addressData.type === 'saved') {
//       // Handle saved address selection
//       setSelectedAddress(addressData.address.label);
//     }
//   };

//   // Categories data
//   const categories = [
//     { id: '1', name: 'All', icon: 'grid', iconType: 'Ionicons' },
//     { id: '2', name: 'Winter', icon: 'snow', iconType: 'Ionicons' },
//     { id: '3', name: 'Electronics', icon: 'headset', iconType: 'Ionicons' },
//     { id: '4', name: 'Beauty', icon: 'rose', iconType: 'Ionicons' },
//     { id: '5', name: 'Decor', icon: 'bulb', iconType: 'Ionicons' },
//     { id: '6', name: 'Kids', icon: 'football', iconType: 'Ionicons' },
//   ];

//   // Featured banners data - Updated colors
//   const featuredBanners = {
//     All: [
//       { 
//         id: '1', 
//         title: 'NEWLY\nLAUNCHED',
//         badge: 'For You',
//         color: ['#80DEEA', '#4DD0E1'], // Cyan gradient
//         image: 'https://via.placeholder.com/200x300/80DEEA/000000?text=New',
//       },
//       { 
//         id: '2', 
//         title: 'Enriching\nExotic Nuts',
//         badge: 'Featured',
//         color: ['#5D4037', '#4E342E'],
//         image: 'https://via.placeholder.com/200x300/5D4037/FFFFFF?text=Nuts',
//       },
//       { 
//         id: '3', 
//         title: 'Major Price\nDrop',
//         badge: 'Featured',
//         color: ['#C8E6C9', '#A5D6A7'],
//         image: 'https://via.placeholder.com/200x300/C8E6C9/000000?text=Deals',
//       },
//     ],
//     Winter: [
//       { 
//         id: '1', 
//         title: 'myTRIDENT',
//         badge: 'Featured',
//         color: ['#26626D', '#1E4D55'],
//         image: 'https://via.placeholder.com/200x300/26626D/FFFFFF?text=Trident',
//       },
//       { 
//         id: '2', 
//         title: 'NESCAFÉ\nRistretto',
//         badge: 'Featured',
//         color: ['#2C1810', '#1A0F09'],
//         image: 'https://via.placeholder.com/200x300/2C1810/FFFFFF?text=Coffee',
//       },
//       { 
//         id: '3', 
//         title: 'Lip Balms',
//         badge: 'Featured',
//         color: ['#8E0038', '#6D0029'],
//         image: 'https://via.placeholder.com/200x300/8E0038/FFFFFF?text=Balms',
//       },
//     ],
//   };

//   // Frequently bought sections
//   const frequentlyBought = [
//     {
//       id: '1',
//       title: 'Favourites',
//       color: '#E8F5E9',
//       items: [
//         { id: '1', image: 'https://via.placeholder.com/80/4285F4/FFFFFF?text=Lays' },
//         { id: '2', image: 'https://via.placeholder.com/80/E53935/FFFFFF?text=KitKat' },
//       ],
//     },
//     {
//       id: '2',
//       title: 'Chips & Namkeen',
//       color: '#E8F5E9',
//       items: [
//         { id: '1', image: 'https://via.placeholder.com/80/4285F4/FFFFFF?text=Lays' },
//         { id: '2', image: 'https://via.placeholder.com/80/FFB300/FFFFFF?text=Lays' },
//       ],
//       moreCount: 2,
//     },
//     {
//       id: '3',
//       title: 'Bread, Butter & Eggs',
//       color: '#E8F5E9',
//       items: [
//         { id: '1', image: 'https://via.placeholder.com/80/795548/FFFFFF?text=Bread' },
//         { id: '2', image: 'https://via.placeholder.com/80/FFB74D/FFFFFF?text=Amul' },
//       ],
//     },
//     {
//       id: '4',
//       title: 'Instant Food',
//       color: '#E8F5E9',
//       items: [
//         { id: '1', image: 'https://via.placeholder.com/80/4CAF50/FFFFFF?text=Maggi' },
//         { id: '2', image: 'https://via.placeholder.com/80/8BC34A/FFFFFF?text=Whole' },
//       ],
//     },
//     {
//       id: '5',
//       title: 'Milk, Curd & Paneer',
//       color: '#E8F5E9',
//       items: [
//         { id: '1', image: 'https://via.placeholder.com/80/F44336/FFFFFF?text=Amul' },
//         { id: '2', image: 'https://via.placeholder.com/80/FF9800/FFFFFF?text=Amul' },
//       ],
//     },
//     {
//       id: '6',
//       title: 'Chocolates & Candies',
//       color: '#E8F5E9',
//       items: [
//         { id: '1', image: 'https://via.placeholder.com/80/E53935/FFFFFF?text=KitKat' },
//         { id: '2', image: 'https://via.placeholder.com/80/7B1FA2/FFFFFF?text=Dairy' },
//       ],
//     },
//   ];

//   // Winter-specific content
//   const winterProducts = [
//     {
//       id: '1',
//       title: 'Myom Bedsheet',
//       subtitle: 'No cost EMI offer',
//       price: '₹696',
//       mrp: '₹948',
//       image: 'https://via.placeholder.com/150/FFB6C1/000000?text=Bedsheet',
//     },
//     {
//       id: '2',
//       title: 'Knorr Thick Tomato Soup',
//       price: '₹600',
//       image: 'https://via.placeholder.com/150/4CAF50/FFFFFF?text=Soup',
//     },
//     {
//       id: '3',
//       title: 'Davidoff Aroma Instant Coffee',
//       subtitle: 'Imported',
//       price: '₹638',
//       mrp: '₹689',
//       image: 'https://via.placeholder.com/150/000000/FFFFFF?text=Coffee',
//     },
//   ];

//   const handleCategoryPress = (categoryName) => {
//     setSelectedCategory(categoryName);
//     setIsSearchFocused(false); // Reset search focus when changing category
//     gradientAnim.setValue(0);
//   };

//   const handleSearchFocus = () => {
//     setIsSearchFocused(true);
//   };

//   const handleSearchBlur = () => {
//     setIsSearchFocused(false);
//   };

//   // Render icon helper
//   const renderIcon = (iconName, iconType, size, color) => {
//     switch (iconType) {
//       case 'MaterialCommunityIcons':
//         return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
//       case 'FontAwesome5':
//         return <FontAwesome5 name={iconName} size={size} color={color} />;
//       default:
//         return <Icon name={iconName} size={size} color={color} />;
//     }
//   };

//   // Render category item
//   const renderCategory = ({ item }) => {
//     const isSelected = selectedCategory === item.name;
//     return (
//       <TouchableOpacity
//         style={tw`items-center mr-7 relative`}
//         onPress={() => handleCategoryPress(item.name)}
//         activeOpacity={0.7}
//       >
//         <View style={tw`mb-1.5`}>
//           {renderIcon(item.icon, item.iconType, 28, '#1A1A1A')}
//         </View>
//         <Text style={tw`text-[13px] ${isSelected ? 'text-[#1A1A1A] font-bold' : 'text-gray-500 font-semibold'}`}>
//           {item.name}
//         </Text>
//         {isSelected && <View style={tw`absolute -bottom-2 w-10 h-0.5 bg-[#1A1A1A] rounded`} />}
//       </TouchableOpacity>
//     );
//   };

//   // Render featured banner
//   const renderFeaturedBanner = ({ item }) => {
//     const bannerWidth = Math.min(width * 0.5, 250); // Max width 250px
//     return (
//       <View style={tw`relative`}>
//         {item.badge && (
//           <View style={tw`absolute top-3 left-3 bg-white px-3 py-1.5 rounded-full z-10 shadow-sm`}>
//             <Text style={tw`text-xs font-bold text-pink-600`}>{item.badge}</Text>
//           </View>
//         )}
//         <LinearGradient
//           colors={item.color}
//           style={[tw`rounded-2xl p-4 justify-end border-2 border-blue-500`, { width: bannerWidth, height: 220 }]}
//         >
//           <Text style={tw`text-xl font-extrabold ${item.color[0].includes('4') ? 'text-white' : 'text-[#1A1A1A]'} leading-tight`}>
//             {item.title}
//           </Text>
//         </LinearGradient>
//       </View>
//     );
//   };

//   // Render frequently bought section
//   const renderFrequentlyBought = ({ item }) => {
//     const sectionWidth = (width - 44) / 2;
//     return (
//       <View style={[tw`rounded-2xl p-4 min-h-40`, { backgroundColor: item.color, width: sectionWidth }]}>
//         <View style={tw`flex-row flex-wrap gap-2 mb-3`}>
//           {item.items.map((product) => (
//             <View key={product.id} style={tw`bg-white rounded-xl p-2 w-15 h-15 justify-center items-center shadow-sm`}>
//               <Image source={{ uri: product.image }} style={tw`w-full h-full rounded-lg`} />
//             </View>
//           ))}
//           {item.moreCount && (
//             <View style={tw`bg-white px-2 py-1.5 rounded-xl shadow-sm`}>
//               <Text style={tw`text-[11px] font-bold text-[#1A1A1A]`}>+{item.moreCount} more</Text>
//             </View>
//           )}
//         </View>
//         <Text style={tw`text-[15px] font-bold text-[#1A1A1A]`} numberOfLines={2}>{item.title}</Text>
//       </View>
//     );
//   };

//   // Render winter product
//   const renderWinterProduct = ({ item }) => {
//     const productWidth = Math.min(width * 0.4, 180); // Responsive width, max 180px
//     return (
//       <View style={[tw`bg-white rounded-xl overflow-hidden shadow-sm`, { width: productWidth }]}>
//         <View style={[tw`relative bg-gray-100`, { height: productWidth * 0.875 }]}>
//           {item.subtitle && (
//             <View style={tw`absolute top-2 left-2 bg-indigo-50 px-2 py-1 rounded-lg z-10`}>
//               <Text style={tw`text-[10px] font-bold text-indigo-400`}>{item.subtitle}</Text>
//             </View>
//           )}
//           <Image source={{ uri: item.image }} style={tw`w-full h-full`} />
//           <TouchableOpacity style={tw`absolute top-2 right-2 bg-white rounded-full w-8 h-8 justify-center items-center shadow-sm`}>
//             <Icon name="heart-outline" size={20} color="#999" />
//           </TouchableOpacity>
//         </View>
//         <View style={tw`p-3`}>
//           <Text style={tw`text-[13px] font-semibold text-[#1A1A1A] mb-1.5 h-9`} numberOfLines={2}>
//             {item.title}
//           </Text>
//           <View style={tw`flex-row items-center gap-1.5 mb-2`}>
//             <Text style={tw`text-base font-bold text-[#1A1A1A]`}>{item.price}</Text>
//             {item.mrp && <Text style={tw`text-xs text-gray-400 line-through`}>MRP {item.mrp}</Text>}
//           </View>
//           <TouchableOpacity style={tw`bg-white border-[1.5px] border-green-500 rounded-lg py-2 items-center`}>
//             <Text style={tw`text-[13px] font-bold text-green-500`}>ADD</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };

//   const currentBanners = featuredBanners[selectedCategory] || featuredBanners.All;
//   const isWinterSelected = selectedCategory === 'Winter';
//   const isKidsSelected = selectedCategory === 'Kids';

//   return (
//     <View style={tw`flex-1 bg-gray-100`}>
//       <StatusBar barStyle="dark-content" backgroundColor={getCurrentGradient()[0]} />
      
//       {/* Header Background with gradient and Winter animation */}
//       <View style={tw`relative shadow-sm`}>
//         <LinearGradient
//           colors={getCurrentGradient()}
//           style={tw`relative`}
//         >
//           {/* Winter Lottie Bear Animation - Positioned in top right */}
//           {isWinterSelected && (
//             <View style={tw`absolute top-7.5 right-35 w-30 h-30 z-10`} pointerEvents="none">
//               <LottieView
//                 ref={lottieRef}
//                 source={require('../../assets/BearWinter.json')}
//                 autoPlay
//                 loop
//                 style={tw`w-full h-full`}
//               />
//             </View>
//           )}
          
//           {/* Winter Snowflakes - ABOVE the gradient content with proper positioning */}
//           {isWinterSelected && (
//             <View style={tw`absolute top-0 left-0 right-0 bottom-0 z-10`} pointerEvents="none">
//               {/* Snowflake 1 */}
//               <Animated.View
//                 style={[
//                   tw`absolute -top-5 z-10`,
//                   { left: '10%' },
//                   {
//                     transform: [
//                       {
//                         translateY: snowAnim.interpolate({
//                           inputRange: [0, 1],
//                           outputRange: [0, 400],
//                         }),
//                       },
//                     ],
//                     opacity: snowAnim.interpolate({
//                       inputRange: [0, 0.2, 0.8, 1],
//                       outputRange: [0, 1, 1, 0],
//                     }),
//                   },
//                 ]}
//               >
//                 <Icon name="snow" size={30} color="#FFFFFF" style={tw`shadow-md`} />
//               </Animated.View>
              
//               {/* Snowflake 2 */}
//               <Animated.View
//                 style={[
//                   tw`absolute -top-5 z-10`,
//                   { left: '30%' },
//                   {
//                     transform: [
//                       {
//                         translateY: snowAnim2.interpolate({
//                           inputRange: [0, 1],
//                           outputRange: [0, 420],
//                         }),
//                       },
//                     ],
//                     opacity: snowAnim2.interpolate({
//                       inputRange: [0, 0.2, 0.8, 1],
//                       outputRange: [0, 1, 1, 0],
//                     }),
//                   },
//                 ]}
//               >
//                 <Icon name="snow" size={24} color="#FFFFFF" style={tw`shadow-md`} />
//               </Animated.View>
              
//               {/* Snowflake 3 */}
//               <Animated.View
//                 style={[
//                   tw`absolute -top-5 z-10`,
//                   { left: '50%' },
//                   {
//                     transform: [
//                       {
//                         translateY: snowAnim3.interpolate({
//                           inputRange: [0, 1],
//                           outputRange: [0, 380],
//                         }),
//                       },
//                     ],
//                     opacity: snowAnim3.interpolate({
//                       inputRange: [0, 0.2, 0.8, 1],
//                       outputRange: [0, 1, 1, 0],
//                     }),
//                   },
//                 ]}
//               >
//                 <Icon name="snow" size={28} color="#FFFFFF" style={tw`shadow-md`} />
//               </Animated.View>
              
//               {/* Snowflake 4 */}
//               <Animated.View
//                 style={[
//                   tw`absolute -top-5 z-10`,
//                   { left: '70%' },
//                   {
//                     transform: [
//                       {
//                         translateY: snowAnim4.interpolate({
//                           inputRange: [0, 1],
//                           outputRange: [0, 410],
//                         }),
//                       },
//                     ],
//                     opacity: snowAnim4.interpolate({
//                       inputRange: [0, 0.2, 0.8, 1],
//                       outputRange: [0, 1, 1, 0],
//                     }),
//                   },
//                 ]}
//               >
//                 <Icon name="snow" size={26} color="#FFFFFF" style={tw`shadow-md`} />
//               </Animated.View>
              
//               {/* Snowflake 5 */}
//               <Animated.View
//                 style={[
//                   tw`absolute -top-5 z-10`,
//                   { left: '85%' },
//                   {
//                     transform: [
//                       {
//                         translateY: snowAnim5.interpolate({
//                           inputRange: [0, 1],
//                           outputRange: [0, 390],
//                         }),
//                       },
//                     ],
//                     opacity: snowAnim5.interpolate({
//                       inputRange: [0, 0.2, 0.8, 1],
//                       outputRange: [0, 1, 1, 0],
//                     }),
//                   },
//                 ]}
//               >
//                 <Icon name="snow" size={22} color="#FFFFFF" style={tw`shadow-md`} />
//               </Animated.View>
//             </View>
//           )}
          
//           <SafeAreaView edges={['top']} style={tw`relative z-10`}>
//             {/* Header */}
//             <View style={tw`flex-row justify-between items-start px-4 pt-2 pb-3`}>
//               <View style={tw`flex-1 mr-3`}>
//                 <View style={tw`flex-row items-center flex-wrap gap-2 mb-1`}>
//                   <Text style={tw`text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] tracking-tight`}>15 minutes</Text>
//                   <View style={tw`flex-row items-center bg-teal-50 px-2 py-1 rounded-xl gap-1`}>
//                     <Icon name="car" size={12} color="#00897B" />
//                     <Text style={tw`text-xs text-teal-700 font-semibold`}>1 km away</Text>
//                   </View>
//                 </View>
//                 <TouchableOpacity 
//                   style={tw`flex-row items-center gap-1`}
//                   onPress={() => setShowAddressModal(true)}
//                 >
//                   <Text style={tw`text-sm text-[#1A1A1A] font-bold`} numberOfLines={1}>{selectedAddress}</Text>
//                   <Icon name="chevron-down" size={14} color="#1A1A1A" />
//                 </TouchableOpacity>
//               </View>
//               <View style={tw`flex-row items-center gap-2`}>
//                 <TouchableOpacity style={tw`bg-white rounded-full px-3 py-2 flex-row items-center gap-1.5 shadow-md`}>
//                   <Icon1 name="shopping-cart" size={20} color="#1A1A1A" />
//                   <Text style={tw`text-sm font-bold text-[#1A1A1A]`}>₹0</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={tw`bg-white rounded-full w-11 h-11 justify-center items-center shadow-md`}>
//                   <Icon name="person" size={20} color="#1A1A1A" />
//                 </TouchableOpacity>
//               </View>
//             </View>

//             {/* Search Bar with Kids Animation */}
//             <View style={tw`flex-row items-center bg-white mx-4 my-3 px-4 py-3 rounded-2xl shadow-sm relative`}>
//               {/* Kids Lottie Animation in Search Bar */}
//               {isKidsSelected && !isSearchFocused && (
//                 <View style={tw`absolute right-30 top-0 w-75 h-15 z-10`} pointerEvents="none">
//                   <LottieView
//                     ref={kidsLottieRef}
//                     source={require('../../assets/kids.json')}
//                     autoPlay
//                     loop
//                     style={tw`w-full h-full`}
//                   />
//                 </View>
//               )}
              
//               <Icon name="search" size={22} color="#666" />
//               <TextInput
//                 style={tw`flex-1 text-base text-[#1A1A1A] ml-3 font-medium`}
//                 placeholder={isKidsSelected && !isSearchFocused ? '' : 'Search "board games"'}
//                 placeholderTextColor="#999"
//                 onFocus={handleSearchFocus}
//                 onBlur={handleSearchBlur}
//               />
//               <TouchableOpacity style={tw`p-1`}>
//                 <Icon name="mic" size={22} color="#1A1A1A" />
//               </TouchableOpacity>
//             </View>

//             {/* Categories Tab */}
//             <FlatList
//               data={categories}
//               renderItem={renderCategory}
//               keyExtractor={(item) => item.id}
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={tw`px-4 pb-4 gap-2`}
//             />
//           </SafeAreaView>
//         </LinearGradient>
//       </View>

//       {/* Scrollable Content */}
//       <ScrollView
//         style={tw`flex-1`}
//         showsVerticalScrollIndicator={false}
//         onScrollBeginDrag={() => {
//           setIsSearchFocused(false);
//           Keyboard.dismiss();
//         }}
//       >
//           {/* Winter Season Banner (only for Winter category) */}
//           {isWinterSelected && (
//             <View style={tw`flex-row items-center justify-between bg-white mx-4 mt-4 p-4 sm:p-5 rounded-2xl shadow-sm`}>
//               <Image 
//                 source={{ uri: 'https://via.placeholder.com/100/FF6B35/FFFFFF?text=🎿' }}
//                 style={tw`w-16 h-16 sm:w-20 sm:h-20 rounded-full`}
//               />
//               <View style={tw`flex-1 items-center px-2`}>
//                 <Text style={tw`text-[10px] sm:text-xs text-blue-500 font-semibold tracking-wide`}>STOCK UP FOR THE</Text>
//                 <Text style={tw`text-xl sm:text-2xl lg:text-3xl font-extrabold text-blue-800 mt-1`} numberOfLines={1} adjustsFontSizeToFit>Winter Season</Text>
//               </View>
//               <Image 
//                 source={{ uri: 'https://via.placeholder.com/100/FFFFFF/000000?text=☃️' }}
//                 style={tw`w-16 h-16 sm:w-20 sm:h-20 rounded-full`}
//               />
//             </View>
//           )}

//           {/* Featured Banners */}
//           <View style={tw`mt-4`}>
//             <FlatList
//               data={currentBanners}
//               renderItem={renderFeaturedBanner}
//               keyExtractor={(item) => item.id}
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={tw`px-4 gap-3`}
//             />
//           </View>

//           {/* Winter Products Section (only for Winter category) */}
//           {isWinterSelected && (
//             <View style={tw`mt-6 px-4`}>
//               <View style={tw`mb-4`}>
//                 <Text style={tw`text-xl font-extrabold text-[#1A1A1A] mb-1`}>Time to snuggle, sip & stay warm!</Text>
//                 <Text style={tw`text-sm text-gray-500 font-medium`}>Grab deals on top winter picks</Text>
//               </View>
//               <FlatList
//                 data={winterProducts}
//                 renderItem={renderWinterProduct}
//                 keyExtractor={(item) => item.id}
//                 horizontal
//                 showsHorizontalScrollIndicator={false}
//                 contentContainerStyle={tw`gap-3`}
//               />
//             </View>
//           )}

//           {/* Frequently Bought Section (only for All category) */}
//           {selectedCategory === 'All' && (
//             <View style={tw`mt-6 px-4`}>
//               <Text style={tw`text-[22px] font-extrabold text-[#1A1A1A] mb-4`}>Frequently bought</Text>
//               <FlatList
//                 data={frequentlyBought}
//                 renderItem={renderFrequentlyBought}
//                 keyExtractor={(item) => item.id}
//                 numColumns={2}
//                 scrollEnabled={false}
//                 columnWrapperStyle={tw`justify-between mb-3`}
//               />
//             </View>
//           )}

//           {/* Promotional Banner */}
//           <View style={tw`bg-yellow-50 mx-4 mt-6 rounded-2xl p-4 shadow-sm`}>
//             <View style={tw`flex-row items-center`}>
//               <View style={tw`w-12 h-12 sm:w-15 sm:h-15 rounded-full overflow-hidden flex-shrink-0`}>
//                 <Image 
//                   source={{ uri: 'https://via.placeholder.com/60/7C4DFF/FFFFFF?text=D' }}
//                   style={tw`w-full h-full`}
//                 />
//               </View>
//               <View style={tw`flex-1 mx-3`}>
//                 <Text style={tw`text-xs sm:text-sm font-bold text-[#1A1A1A] mb-0.5`} numberOfLines={2}>Get a District Movie Voucher worth ₹125</Text>
//                 <Text style={tw`text-xs text-gray-500 font-medium`}>on orders above ₹199</Text>
//               </View>
//               <View style={tw`flex-row items-center gap-1`}>
//                 <Icon name="chevron-forward" size={20} color="#666" />
//                 <TouchableOpacity style={tw`p-1`}>
//                   <Icon name="close" size={20} color="#999" />
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>

//           {/* Bottom Spacing */}
//           <View style={tw`h-30`} />
//         </ScrollView>

//       {/* Address Selection Modal */}
//       <AddressSelectionModal
//         visible={showAddressModal}
//         onClose={() => setShowAddressModal(false)}
//         onAddressSelect={handleAddressSelect}
//       />
//     </View>
//   );
// };

// export default HomeScreen;


import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  useWindowDimensions,
  StatusBar,
  Animated,
  Image,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import AddressSelectionModal from './Homescreen/AddressSelectionModal';
import { useNavigation } from '@react-navigation/native';
import tw from '../utils/tailwind';

const HomeScreen = () => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState('HOME - Shivam');
  const gradientAnim = useRef(new Animated.Value(0)).current;
  const snowAnim = useRef(new Animated.Value(0)).current;
  const snowAnim2 = useRef(new Animated.Value(0)).current;
  const snowAnim3 = useRef(new Animated.Value(0)).current;
  const snowAnim4 = useRef(new Animated.Value(0)).current;
  const snowAnim5 = useRef(new Animated.Value(0)).current;
  const lottieRef = useRef(null);
  const kidsLottieRef = useRef(null);

  // Category-specific gradient colors
  const categoryGradients = {
    All: ['#E0F7FA', '#B2EBF2'],
    Winter: ['#B3E5FC', '#81D4FA'],
    Electronics: ['#CE93D8', '#BA68C8'],
    Beauty: ['#F48FB1', '#F06292'],
    Decor: ['#A5D6A7', '#81C784'],
    Kids: ['#FFCDD2', '#EF9A9A'],
  };

  useEffect(() => {
    Animated.timing(gradientAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();

    // Animate snowflakes for Winter category
    if (selectedCategory === 'Winter') {
      if (lottieRef.current) {
        lottieRef.current.play();
      }
      
      Animated.loop(
        Animated.timing(snowAnim, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        })
      ).start();
      
      Animated.loop(
        Animated.timing(snowAnim2, {
          toValue: 1,
          duration: 3500,
          useNativeDriver: true,
        })
      ).start();
      
      Animated.loop(
        Animated.timing(snowAnim3, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: true,
        })
      ).start();
      
      Animated.loop(
        Animated.timing(snowAnim4, {
          toValue: 1,
          duration: 3200,
          useNativeDriver: true,
        })
      ).start();
      
      Animated.loop(
        Animated.timing(snowAnim5, {
          toValue: 1,
          duration: 3800,
          useNativeDriver: true,
        })
      ).start();
    } else {
      if (lottieRef.current) {
        lottieRef.current.pause();
      }
      
      snowAnim.setValue(0);
      snowAnim2.setValue(0);
      snowAnim3.setValue(0);
      snowAnim4.setValue(0);
      snowAnim5.setValue(0);
    }

    // Handle Kids animation
    if (selectedCategory === 'Kids' && !isSearchFocused) {
      if (kidsLottieRef.current) {
        kidsLottieRef.current.play();
      }
    } else {
      if (kidsLottieRef.current) {
        kidsLottieRef.current.pause();
      }
    }
  }, [selectedCategory, isSearchFocused]);

  const getCurrentGradient = () => {
    return categoryGradients[selectedCategory] || categoryGradients.All;
  };

  // Handler for address selection
  const handleAddressSelect = (addressData) => {
    console.log('Address selected:', addressData);
    
    if (addressData.type === 'current') {
      setSelectedAddress('Current Location');
      navigation.navigate('MapSelection', { 
        latitude: addressData.latitude,
        longitude: addressData.longitude 
      });
    } else if (addressData.type === 'new') {
      navigation.navigate('MapSelection');
    } else if (addressData.type === 'saved') {
      setSelectedAddress(addressData.address.label);
    }
  };

  // Categories data
  const categories = [
    { id: '1', name: 'All', icon: 'grid', iconType: 'Ionicons' },
    { id: '2', name: 'Winter', icon: 'snow', iconType: 'Ionicons' },
    { id: '3', name: 'Electronics', icon: 'headset', iconType: 'Ionicons' },
    { id: '4', name: 'Beauty', icon: 'rose', iconType: 'Ionicons' },
    { id: '5', name: 'Decor', icon: 'bulb', iconType: 'Ionicons' },
    { id: '6', name: 'Kids', icon: 'football', iconType: 'Ionicons' },
  ];

  // Featured banners data
  const featuredBanners = {
    All: [
      { 
        id: '1', 
        title: 'NEWLY\nLAUNCHED',
        badge: 'For You',
        color: ['#80DEEA', '#4DD0E1'],
        image: 'https://via.placeholder.com/200x300/80DEEA/000000?text=New',
      },
      { 
        id: '2', 
        title: 'Enriching\nExotic Nuts',
        badge: 'Featured',
        color: ['#5D4037', '#4E342E'],
        image: 'https://via.placeholder.com/200x300/5D4037/FFFFFF?text=Nuts',
      },
      { 
        id: '3', 
        title: 'Major Price\nDrop',
        badge: 'Featured',
        color: ['#C8E6C9', '#A5D6A7'],
        image: 'https://via.placeholder.com/200x300/C8E6C9/000000?text=Deals',
      },
    ],
    Winter: [
      { 
        id: '1', 
        title: 'myTRIDENT',
        badge: 'Featured',
        color: ['#26626D', '#1E4D55'],
        image: 'https://via.placeholder.com/200x300/26626D/FFFFFF?text=Trident',
      },
      { 
        id: '2', 
        title: 'NESCAFÉ\nRistretto',
        badge: 'Featured',
        color: ['#2C1810', '#1A0F09'],
        image: 'https://via.placeholder.com/200x300/2C1810/FFFFFF?text=Coffee',
      },
      { 
        id: '3', 
        title: 'Lip Balms',
        badge: 'Featured',
        color: ['#8E0038', '#6D0029'],
        image: 'https://via.placeholder.com/200x300/8E0038/FFFFFF?text=Balms',
      },
    ],
  };

  // Frequently bought sections
  const frequentlyBought = [
    {
      id: '1',
      title: 'Favourites',
      color: '#E8F5E9',
      items: [
        { id: '1', image: 'https://via.placeholder.com/80/4285F4/FFFFFF?text=Lays' },
        { id: '2', image: 'https://via.placeholder.com/80/E53935/FFFFFF?text=KitKat' },
      ],
    },
    {
      id: '2',
      title: 'Chips & Namkeen',
      color: '#E8F5E9',
      items: [
        { id: '1', image: 'https://via.placeholder.com/80/4285F4/FFFFFF?text=Lays' },
        { id: '2', image: 'https://via.placeholder.com/80/FFB300/FFFFFF?text=Lays' },
      ],
      moreCount: 2,
    },
    {
      id: '3',
      title: 'Bread, Butter & Eggs',
      color: '#E8F5E9',
      items: [
        { id: '1', image: 'https://via.placeholder.com/80/795548/FFFFFF?text=Bread' },
        { id: '2', image: 'https://via.placeholder.com/80/FFB74D/FFFFFF?text=Amul' },
      ],
    },
    {
      id: '4',
      title: 'Instant Food',
      color: '#E8F5E9',
      items: [
        { id: '1', image: 'https://via.placeholder.com/80/4CAF50/FFFFFF?text=Maggi' },
        { id: '2', image: 'https://via.placeholder.com/80/8BC34A/FFFFFF?text=Whole' },
      ],
    },
    {
      id: '5',
      title: 'Milk, Curd & Paneer',
      color: '#E8F5E9',
      items: [
        { id: '1', image: 'https://via.placeholder.com/80/F44336/FFFFFF?text=Amul' },
        { id: '2', image: 'https://via.placeholder.com/80/FF9800/FFFFFF?text=Amul' },
      ],
    },
    {
      id: '6',
      title: 'Chocolates & Candies',
      color: '#E8F5E9',
      items: [
        { id: '1', image: 'https://via.placeholder.com/80/E53935/FFFFFF?text=KitKat' },
        { id: '2', image: 'https://via.placeholder.com/80/7B1FA2/FFFFFF?text=Dairy' },
      ],
    },
  ];

  // Winter-specific content
  const winterProducts = [
    {
      id: '1',
      title: 'Myom Bedsheet',
      subtitle: 'No cost EMI offer',
      price: '₹696',
      mrp: '₹948',
      image: 'https://via.placeholder.com/150/FFB6C1/000000?text=Bedsheet',
    },
    {
      id: '2',
      title: 'Knorr Thick Tomato Soup',
      price: '₹600',
      image: 'https://via.placeholder.com/150/4CAF50/FFFFFF?text=Soup',
    },
    {
      id: '3',
      title: 'Davidoff Aroma Instant Coffee',
      subtitle: 'Imported',
      price: '₹638',
      mrp: '₹689',
      image: 'https://via.placeholder.com/150/000000/FFFFFF?text=Coffee',
    },
  ];

  const handleCategoryPress = (categoryName) => {
    setSelectedCategory(categoryName);
    setIsSearchFocused(false);
    gradientAnim.setValue(0);
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
  };

  // Render icon helper
  const renderIcon = (iconName, iconType, size, color) => {
    switch (iconType) {
      case 'MaterialCommunityIcons':
        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
      case 'FontAwesome5':
        return <FontAwesome5 name={iconName} size={size} color={color} />;
      default:
        return <Icon name={iconName} size={size} color={color} />;
    }
  };

  // Render category item
  const renderCategory = ({ item }) => {
    const isSelected = selectedCategory === item.name;
    return (
      <TouchableOpacity
        style={tw`items-center mr-7 relative`}
        onPress={() => handleCategoryPress(item.name)}
        activeOpacity={0.7}
      >
        <View style={tw`mb-1.5`}>
          {renderIcon(item.icon, item.iconType, 28, '#1A1A1A')}
        </View>
        <Text style={tw`text-[13px] ${isSelected ? 'text-[#1A1A1A] font-bold' : 'text-gray-500 font-semibold'}`}>
          {item.name}
        </Text>
        {isSelected && <View style={tw`absolute -bottom-2 w-10 h-0.5 bg-[#1A1A1A] rounded`} />}
      </TouchableOpacity>
    );
  };

  // Render featured banner
  const renderFeaturedBanner = ({ item }) => {
    const bannerWidth = Math.min(width * 0.5, 250);
    return (
      <View style={tw`relative`}>
        {item.badge && (
          <View style={tw`absolute top-3 left-3 bg-white px-3 py-1.5 rounded-full z-10 shadow-sm`}>
            <Text style={tw`text-xs font-bold text-pink-600`}>{item.badge}</Text>
          </View>
        )}
        <LinearGradient
          colors={item.color}
          style={[tw`rounded-2xl p-4 justify-end border-2 border-blue-500`, { width: bannerWidth, height: 220 }]}
        >
          <Text style={tw`text-xl font-extrabold ${item.color[0].includes('4') ? 'text-white' : 'text-[#1A1A1A]'} leading-tight`}>
            {item.title}
          </Text>
        </LinearGradient>
      </View>
    );
  };

  // Render frequently bought section
  const renderFrequentlyBought = ({ item }) => {
    const sectionWidth = (width - 44) / 2;
    return (
      <View style={[tw`rounded-2xl p-4 min-h-40`, { backgroundColor: item.color, width: sectionWidth }]}>
        <View style={tw`flex-row flex-wrap gap-2 mb-3`}>
          {item.items.map((product) => (
            <View key={product.id} style={tw`bg-white rounded-xl p-2 w-15 h-15 justify-center items-center shadow-sm`}>
              <Image source={{ uri: product.image }} style={tw`w-full h-full rounded-lg`} />
            </View>
          ))}
          {item.moreCount && (
            <View style={tw`bg-white px-2 py-1.5 rounded-xl shadow-sm`}>
              <Text style={tw`text-[11px] font-bold text-[#1A1A1A]`}>+{item.moreCount} more</Text>
            </View>
          )}
        </View>
        <Text style={tw`text-[15px] font-bold text-[#1A1A1A]`} numberOfLines={2}>{item.title}</Text>
      </View>
    );
  };

  // Render winter product
  const renderWinterProduct = ({ item }) => {
    const productWidth = Math.min(width * 0.4, 180);
    return (
      <View style={[tw`bg-white rounded-xl overflow-hidden shadow-sm`, { width: productWidth }]}>
        <View style={[tw`relative bg-gray-100`, { height: productWidth * 0.875 }]}>
          {item.subtitle && (
            <View style={tw`absolute top-2 left-2 bg-indigo-50 px-2 py-1 rounded-lg z-10`}>
              <Text style={tw`text-[10px] font-bold text-indigo-400`}>{item.subtitle}</Text>
            </View>
          )}
          <Image source={{ uri: item.image }} style={tw`w-full h-full`} />
          <TouchableOpacity style={tw`absolute top-2 right-2 bg-white rounded-full w-8 h-8 justify-center items-center shadow-sm`}>
            <Icon name="heart-outline" size={20} color="#999" />
          </TouchableOpacity>
        </View>
        <View style={tw`p-3`}>
          <Text style={tw`text-[13px] font-semibold text-[#1A1A1A] mb-1.5 h-9`} numberOfLines={2}>
            {item.title}
          </Text>
          <View style={tw`flex-row items-center gap-1.5 mb-2`}>
            <Text style={tw`text-base font-bold text-[#1A1A1A]`}>{item.price}</Text>
            {item.mrp && <Text style={tw`text-xs text-gray-400 line-through`}>MRP {item.mrp}</Text>}
          </View>
          <TouchableOpacity style={tw`bg-white border-[1.5px] border-green-500 rounded-lg py-2 items-center`}>
            <Text style={tw`text-[13px] font-bold text-green-500`}>ADD</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const currentBanners = featuredBanners[selectedCategory] || featuredBanners.All;
  const isWinterSelected = selectedCategory === 'Winter';
  const isKidsSelected = selectedCategory === 'Kids';

  return (
    <View style={tw`flex-1 bg-gray-100`}>
      <StatusBar barStyle="dark-content" backgroundColor={getCurrentGradient()[0]} />
      
      {/* Header Background with gradient and Winter animation */}
      <View style={tw`relative shadow-sm`}>
        <LinearGradient
          colors={getCurrentGradient()}
          style={tw`relative`}
        >
          {/* Winter Lottie Bear Animation */}
          {isWinterSelected && (
            <View style={tw`absolute top-7.5 right-35 w-30 h-30 z-10`} pointerEvents="none">
              <LottieView
                ref={lottieRef}
                source={require('../../assets/BearWinter.json')}
                autoPlay
                loop
                style={tw`w-full h-full`}
              />
            </View>
          )}
          
          {/* Winter Snowflakes */}
          {isWinterSelected && (
            <View style={tw`absolute top-0 left-0 right-0 bottom-0 z-10`} pointerEvents="none">
              {[snowAnim, snowAnim2, snowAnim3, snowAnim4, snowAnim5].map((anim, index) => (
                <Animated.View
                  key={index}
                  style={[
                    tw`absolute -top-5 z-10`,
                    { left: `${10 + index * 20}%` },
                    {
                      transform: [
                        {
                          translateY: anim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 400 + index * 10],
                          }),
                        },
                      ],
                      opacity: anim.interpolate({
                        inputRange: [0, 0.2, 0.8, 1],
                        outputRange: [0, 1, 1, 0],
                      }),
                    },
                  ]}
                >
                  <Icon name="snow" size={22 + index * 2} color="#FFFFFF" style={tw`shadow-md`} />
                </Animated.View>
              ))}
            </View>
          )}
          
          <SafeAreaView edges={['top']} style={tw`relative z-10`}>
            {/* Header */}
            <View style={tw`flex-row justify-between items-start px-4 pt-2 pb-3`}>
              <View style={tw`flex-1 mr-3`}>
                <View style={tw`flex-row items-center flex-wrap gap-2 mb-1`}>
                  <Text style={tw`text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] tracking-tight`}>15 minutes</Text>
                  <View style={tw`flex-row items-center bg-teal-50 px-2 py-1 rounded-xl gap-1`}>
                    <Icon name="car" size={12} color="#00897B" />
                    <Text style={tw`text-xs text-teal-700 font-semibold`}>1 km away</Text>
                  </View>
                </View>
                <TouchableOpacity 
                  style={tw`flex-row items-center gap-1`}
                  onPress={() => setShowAddressModal(true)}
                >
                  <Text style={tw`text-sm text-[#1A1A1A] font-bold`} numberOfLines={1}>{selectedAddress}</Text>
                  <Icon name="chevron-down" size={14} color="#1A1A1A" />
                </TouchableOpacity>
              </View>
              <View style={tw`flex-row items-center gap-2`}>
                <TouchableOpacity 
                  style={tw`bg-white rounded-full px-3 py-2 flex-row items-center gap-1.5 shadow-md`}
                  onPress={() => navigation.navigate('Cart')}
                >
                  <Icon1 name="shopping-cart" size={20} color="#1A1A1A" />
                  <Text style={tw`text-sm font-bold text-[#1A1A1A]`}>₹0</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={tw`bg-white rounded-full w-11 h-11 justify-center items-center shadow-md`}
                  onPress={() => navigation.navigate('Profile')}
                >
                  <Icon name="person" size={20} color="#1A1A1A" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Search Bar with Kids Animation */}
            <View style={tw`flex-row items-center bg-white mx-4 my-3 px-4 py-3 rounded-2xl shadow-sm relative`}>
              {/* Kids Lottie Animation in Search Bar */}
              {isKidsSelected && !isSearchFocused && (
                <View style={tw`absolute right-30 top-0 w-75 h-15 z-10`} pointerEvents="none">
                  <LottieView
                    ref={kidsLottieRef}
                    source={require('../../assets/kids.json')}
                    autoPlay
                    loop
                    style={tw`w-full h-full`}
                  />
                </View>
              )}
              
              <Icon name="search" size={22} color="#666" />
              <TextInput
                style={tw`flex-1 text-base text-[#1A1A1A] ml-3 font-medium`}
                placeholder={isKidsSelected && !isSearchFocused ? '' : 'Search "board games"'}
                placeholderTextColor="#999"
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
              />
              <TouchableOpacity style={tw`p-1`}>
                <Icon name="mic" size={22} color="#1A1A1A" />
              </TouchableOpacity>
            </View>

            {/* Categories Tab */}
            <FlatList
              data={categories}
              renderItem={renderCategory}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={tw`px-4 pb-4 gap-2`}
            />
          </SafeAreaView>
        </LinearGradient>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        style={tw`flex-1`}
        showsVerticalScrollIndicator={false}
        onScrollBeginDrag={() => {
          setIsSearchFocused(false);
          Keyboard.dismiss();
        }}
      >
        {/* Winter Season Banner */}
        {isWinterSelected && (
          <View style={tw`flex-row items-center justify-between bg-white mx-4 mt-4 p-4 sm:p-5 rounded-2xl shadow-sm`}>
            <Image 
              source={{ uri: 'https://via.placeholder.com/100/FF6B35/FFFFFF?text=🎿' }}
              style={tw`w-16 h-16 sm:w-20 sm:h-20 rounded-full`}
            />
            <View style={tw`flex-1 items-center px-2`}>
              <Text style={tw`text-[10px] sm:text-xs text-blue-500 font-semibold tracking-wide`}>STOCK UP FOR THE</Text>
              <Text style={tw`text-xl sm:text-2xl lg:text-3xl font-extrabold text-blue-800 mt-1`} numberOfLines={1} adjustsFontSizeToFit>Winter Season</Text>
            </View>
            <Image 
              source={{ uri: 'https://via.placeholder.com/100/FFFFFF/000000?text=☃️' }}
              style={tw`w-16 h-16 sm:w-20 sm:h-20 rounded-full`}
            />
          </View>
        )}

        {/* Featured Banners */}
        <View style={tw`mt-4`}>
          <FlatList
            data={currentBanners}
            renderItem={renderFeaturedBanner}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={tw`px-4 gap-3`}
          />
        </View>

        {/* Winter Products Section */}
        {isWinterSelected && (
          <View style={tw`mt-6 px-4`}>
            <View style={tw`mb-4`}>
              <Text style={tw`text-xl font-extrabold text-[#1A1A1A] mb-1`}>Time to snuggle, sip & stay warm!</Text>
              <Text style={tw`text-sm text-gray-500 font-medium`}>Grab deals on top winter picks</Text>
            </View>
            <FlatList
              data={winterProducts}
              renderItem={renderWinterProduct}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={tw`gap-3`}
            />
          </View>
        )}

        {/* Frequently Bought Section */}
        {selectedCategory === 'All' && (
          <View style={tw`mt-6 px-4`}>
            <Text style={tw`text-[22px] font-extrabold text-[#1A1A1A] mb-4`}>Frequently bought</Text>
            <FlatList
              data={frequentlyBought}
              renderItem={renderFrequentlyBought}
              keyExtractor={(item) => item.id}
              numColumns={2}
              scrollEnabled={false}
              columnWrapperStyle={tw`justify-between mb-3`}
            />
          </View>
        )}

        {/* Promotional Banner */}
        <View style={tw`bg-yellow-50 mx-4 mt-6 rounded-2xl p-4 shadow-sm`}>
          <View style={tw`flex-row items-center`}>
            <View style={tw`w-12 h-12 sm:w-15 sm:h-15 rounded-full overflow-hidden flex-shrink-0`}>
              <Image 
                source={{ uri: 'https://via.placeholder.com/60/7C4DFF/FFFFFF?text=D' }}
                style={tw`w-full h-full`}
              />
            </View>
            <View style={tw`flex-1 mx-3`}>
              <Text style={tw`text-xs sm:text-sm font-bold text-[#1A1A1A] mb-0.5`} numberOfLines={2}>Get a District Movie Voucher worth ₹125</Text>
              <Text style={tw`text-xs text-gray-500 font-medium`}>on orders above ₹199</Text>
            </View>
            <View style={tw`flex-row items-center gap-1`}>
              <Icon name="chevron-forward" size={20} color="#666" />
              <TouchableOpacity style={tw`p-1`}>
                <Icon name="close" size={20} color="#999" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Bottom Spacing */}
        <View style={tw`h-30`} />
      </ScrollView>

      {/* Address Selection Modal */}
      <AddressSelectionModal
        visible={showAddressModal}
        onClose={() => setShowAddressModal(false)}
        onAddressSelect={handleAddressSelect}
      />
    </View>
  );
};

export default HomeScreen;