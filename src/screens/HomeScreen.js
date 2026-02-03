// import React, { useState, useRef, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   Dimensions,
//   StatusBar,
//   Animated,
//   Image,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Icon1 from 'react-native-vector-icons/Entypo';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import LinearGradient from 'react-native-linear-gradient';
// import LottieView from 'lottie-react-native';

// const { width } = Dimensions.get('window');

// const HomeScreen = () => {
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [isSearchFocused, setIsSearchFocused] = useState(false);
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
//         style={styles.categoryItem}
//         onPress={() => handleCategoryPress(item.name)}
//         activeOpacity={0.7}
//       >
//         <View style={styles.categoryIconWrapper}>
//           {renderIcon(item.icon, item.iconType, 28, '#1A1A1A')}
//         </View>
//         <Text style={[styles.categoryText, isSelected && styles.categoryTextSelected]}>
//           {item.name}
//         </Text>
//         {isSelected && <View style={styles.categoryUnderline} />}
//       </TouchableOpacity>
//     );
//   };

//   // Render featured banner
//   const renderFeaturedBanner = ({ item }) => (
//     <View style={styles.featuredBannerWrapper}>
//       {item.badge && (
//         <View style={styles.featuredBadge}>
//           <Text style={styles.featuredBadgeText}>{item.badge}</Text>
//         </View>
//       )}
//       <LinearGradient
//         colors={item.color}
//         style={styles.featuredBanner}
//       >
//         <Text style={[styles.bannerTitle, item.color[0].includes('4') && styles.bannerTitleLight]}>
//           {item.title}
//         </Text>
//       </LinearGradient>
//     </View>
//   );

//   // Render frequently bought section
//   const renderFrequentlyBought = ({ item }) => (
//     <View style={[styles.frequentSection, { backgroundColor: item.color }]}>
//       <View style={styles.frequentItems}>
//         {item.items.map((product) => (
//           <View key={product.id} style={styles.productItem}>
//             <Image source={{ uri: product.image }} style={styles.productImage} />
//           </View>
//         ))}
//         {item.moreCount && (
//           <View style={styles.moreCountBadge}>
//             <Text style={styles.moreCountText}>+{item.moreCount} more</Text>
//           </View>
//         )}
//       </View>
//       <Text style={styles.frequentTitle}>{item.title}</Text>
//     </View>
//   );

//   // Render winter product
//   const renderWinterProduct = ({ item }) => (
//     <View style={styles.winterProduct}>
//       <View style={styles.winterProductImageContainer}>
//         {item.subtitle && (
//           <View style={styles.importedBadge}>
//             <Text style={styles.importedText}>{item.subtitle}</Text>
//           </View>
//         )}
//         <Image source={{ uri: item.image }} style={styles.winterProductImage} />
//         <TouchableOpacity style={styles.wishlistButton}>
//           <Icon name="heart-outline" size={20} color="#999" />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.winterProductInfo}>
//         <Text style={styles.winterProductTitle} numberOfLines={2}>
//           {item.title}
//         </Text>
//         <View style={styles.priceRow}>
//           <Text style={styles.winterProductPrice}>{item.price}</Text>
//           {item.mrp && <Text style={styles.winterProductMrp}>MRP {item.mrp}</Text>}
//         </View>
//         <TouchableOpacity style={styles.addButton}>
//           <Text style={styles.addButtonText}>ADD</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   const currentBanners = featuredBanners[selectedCategory] || featuredBanners.All;
//   const isWinterSelected = selectedCategory === 'Winter';
//   const isKidsSelected = selectedCategory === 'Kids';

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor={getCurrentGradient()[0]} />
      
//       {/* Header Background with gradient and Winter animation */}
//       <View style={styles.headerBackground}>
//         <LinearGradient
//           colors={getCurrentGradient()}
//           style={styles.headerGradient}
//         >
//           {/* Winter Lottie Bear Animation - Positioned in top right */}
//           {isWinterSelected && (
//             <View style={styles.lottieContainer} pointerEvents="none">
//               <LottieView
//                 ref={lottieRef}
//                 source={require('../../assets/BearWinter.json')}
//                 autoPlay
//                 loop
//                 style={styles.lottieAnimation}
//               />
//             </View>
//           )}
          
//           {/* Winter Snowflakes - ABOVE the gradient content with proper positioning */}
//           {isWinterSelected && (
//             <View style={styles.snowfallContainer} pointerEvents="none">
//               {/* Snowflake 1 */}
//               <Animated.View
//                 style={[
//                   styles.snowflake,
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
//                 <Icon name="snow" size={30} color="#FFFFFF" style={styles.snowIcon} />
//               </Animated.View>
              
//               {/* Snowflake 2 */}
//               <Animated.View
//                 style={[
//                   styles.snowflake,
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
//                 <Icon name="snow" size={24} color="#FFFFFF" style={styles.snowIcon} />
//               </Animated.View>
              
//               {/* Snowflake 3 */}
//               <Animated.View
//                 style={[
//                   styles.snowflake,
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
//                 <Icon name="snow" size={28} color="#FFFFFF" style={styles.snowIcon} />
//               </Animated.View>
              
//               {/* Snowflake 4 */}
//               <Animated.View
//                 style={[
//                   styles.snowflake,
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
//                 <Icon name="snow" size={26} color="#FFFFFF" style={styles.snowIcon} />
//               </Animated.View>
              
//               {/* Snowflake 5 */}
//               <Animated.View
//                 style={[
//                   styles.snowflake,
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
//                 <Icon name="snow" size={22} color="#FFFFFF" style={styles.snowIcon} />
//               </Animated.View>
//             </View>
//           )}
          
//           <SafeAreaView edges={['top']} style={styles.safeArea}>
//             {/* Header */}
//             <View style={styles.header}>
//               <View style={styles.headerLeft}>
//                 <View style={styles.deliveryRow}>
//                   <Text style={styles.deliveryMinutes}>15 minutes</Text>
//                   <View style={styles.distanceBadge}>
//                     <Icon name="car" size={12} color="#00897B" />
//                     <Text style={styles.distanceText}>1 km away</Text>
//                   </View>
//                 </View>
//                 <TouchableOpacity style={styles.locationContainer}>
//                   <Text style={styles.locationText}>HOME - Shivam</Text>
//                   <Icon name="chevron-down" size={14} color="#1A1A1A" />
//                 </TouchableOpacity>
//               </View>
//               <View style={styles.headerRight}>
//                 <TouchableOpacity style={styles.walletButton}>
//                   <Icon1 name="shopping-cart" size={24} color="#1A1A1A" />
//                   <Text style={styles.walletAmount}>₹0</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.profileButton}>
//                   <Icon name="person" size={24} color="#1A1A1A" />
//                 </TouchableOpacity>
//               </View>
//             </View>

//             {/* Search Bar with Kids Animation */}
//             <View style={styles.searchContainer}>
//               {/* Kids Lottie Animation in Search Bar */}
//               {isKidsSelected && !isSearchFocused && (
//                 <View style={styles.kidsSearchLottieContainer} pointerEvents="none">
//                   <LottieView
//                     ref={kidsLottieRef}
//                     source={require('../../assets/kids.json')}
//                     autoPlay
//                     loop
//                     style={styles.kidsSearchLottie}
//                   />
//                 </View>
//               )}
              
//               <Icon name="search" size={22} color="#666" />
//               <TextInput
//                 style={styles.searchInput}
//                 placeholder={isKidsSelected && !isSearchFocused ? '' : 'Search "board games"'}
//                 placeholderTextColor="#999"
//                 onFocus={handleSearchFocus}
//                 onBlur={handleSearchBlur}
//               />
//               <TouchableOpacity style={styles.micButton}>
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
//               contentContainerStyle={styles.categoriesContent}
//             />
//           </SafeAreaView>
//         </LinearGradient>
//       </View>

//       {/* Scrollable Content - Touchable to restore animation */}
//       <TouchableOpacity 
//         style={styles.scrollViewTouchable}
//         activeOpacity={1}
//         onPress={() => setIsSearchFocused(false)}
//       >
//         <ScrollView
//           style={styles.scrollView}
//           showsVerticalScrollIndicator={false}
//         >
//           {/* Winter Season Banner (only for Winter category) */}
//           {isWinterSelected && (
//             <View style={styles.winterBanner}>
//               <Image 
//                 source={{ uri: 'https://via.placeholder.com/100/FF6B35/FFFFFF?text=🎿' }}
//                 style={styles.winterBannerImage}
//               />
//               <View style={styles.winterBannerContent}>
//                 <Text style={styles.winterBannerSubtitle}>STOCK UP FOR THE</Text>
//                 <Text style={styles.winterBannerTitle}>Winter Season</Text>
//               </View>
//               <Image 
//                 source={{ uri: 'https://via.placeholder.com/100/FFFFFF/000000?text=☃️' }}
//                 style={styles.winterBannerImage}
//               />
//             </View>
//           )}

//           {/* Featured Banners */}
//           <View style={styles.featuredSection}>
//             <FlatList
//               data={currentBanners}
//               renderItem={renderFeaturedBanner}
//               keyExtractor={(item) => item.id}
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.featuredContent}
//             />
//           </View>

//           {/* Winter Products Section (only for Winter category) */}
//           {isWinterSelected && (
//             <View style={styles.section}>
//               <View style={styles.sectionHeader}>
//                 <View>
//                   <Text style={styles.sectionTitle}>Time to snuggle, sip & stay warm!</Text>
//                   <Text style={styles.sectionSubtitle}>Grab deals on top winter picks</Text>
//                 </View>
//               </View>
//               <FlatList
//                 data={winterProducts}
//                 renderItem={renderWinterProduct}
//                 keyExtractor={(item) => item.id}
//                 horizontal
//                 showsHorizontalScrollIndicator={false}
//                 contentContainerStyle={styles.winterProductsList}
//               />
//             </View>
//           )}

//           {/* Frequently Bought Section (only for All category) */}
//           {selectedCategory === 'All' && (
//             <View style={styles.section}>
//               <Text style={styles.frequentlyBoughtTitle}>Frequently bought</Text>
//               <FlatList
//                 data={frequentlyBought}
//                 renderItem={renderFrequentlyBought}
//                 keyExtractor={(item) => item.id}
//                 numColumns={2}
//                 scrollEnabled={false}
//                 columnWrapperStyle={styles.frequentRow}
//               />
//             </View>
//           )}

//           {/* Promotional Banner */}
//           <View style={styles.promoBanner}>
//             <View style={styles.promoContent}>
//               <View style={styles.promoIconContainer}>
//                 <Image 
//                   source={{ uri: 'https://via.placeholder.com/60/7C4DFF/FFFFFF?text=D' }}
//                   style={styles.promoIcon}
//                 />
//               </View>
//               <View style={styles.promoTextContainer}>
//                 <Text style={styles.promoTitle}>Get a District Movie Voucher worth ₹125</Text>
//                 <Text style={styles.promoSubtitle}>on orders above ₹199</Text>
//               </View>
//               <Icon name="chevron-forward" size={20} color="#666" />
//             </View>
//             <TouchableOpacity style={styles.promoClose}>
//               <Icon name="close" size={20} color="#999" />
//             </TouchableOpacity>
//           </View>

//           {/* Bottom Spacing */}
//           <View style={styles.bottomSpacing} />
//         </ScrollView>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },
//   headerBackground: {
//     position: 'relative',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   headerGradient: {
//     position: 'relative',
//   },
//   lottieContainer: {
//     position: 'absolute',
//     top: 30,
//     right: 140,
//     width: 120,
//     height: 120,
//     zIndex: 2,
//   },
//   lottieAnimation: {
//     width: '100%',
//     height: '100%',
//   },
//   snowfallContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     zIndex: 10,
//   },
//   snowflake: {
//     position: 'absolute',
//     top: -20,
//     zIndex: 10,
//   },
//   snowIcon: {
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 3,
//   },
//   safeArea: {
//     position: 'relative',
//     zIndex: 5,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     paddingHorizontal: 16,
//     paddingTop: 8,
//     paddingBottom: 12,
//   },
//   headerLeft: {
//     flex: 1,
//   },
//   deliveryTime: {
//     fontSize: 14,
//     color: '#1A1A1A',
//     fontWeight: '500',
//     marginBottom: 2,
//   },
//   deliveryRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//     marginBottom: 4,
//   },
//   deliveryMinutes: {
//     fontSize: 28,
//     fontWeight: '800',
//     color: '#1A1A1A',
//     letterSpacing: -0.5,
//   },
//   distanceBadge: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#E0F2F1',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 12,
//     gap: 4,
//   },
//   distanceText: {
//     fontSize: 12,
//     color: '#00897B',
//     fontWeight: '600',
//   },
//   locationContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 4,
//   },
//   locationText: {
//     fontSize: 14,
//     color: '#1A1A1A',
//     fontWeight: '700',
//   },
//   headerRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 12,
//   },
//   walletButton: {
//     backgroundColor: '#FFF',
//     borderRadius: 50,
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 6,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   walletIcon: {
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//   },
//   walletAmount: {
//     fontSize: 14,
//     fontWeight: '700',
//     color: '#1A1A1A',
//   },
//   profileButton: {
//     backgroundColor: '#FFF',
//     borderRadius: 50,
//     width: 44,
//     height: 44,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFF',
//     marginHorizontal: 16,
//     marginVertical: 12,
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderRadius: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.05,
//     shadowRadius: 2,
//     elevation: 2,
//     position: 'relative',
//   },
//   kidsSearchLottieContainer: {
//     position: 'absolute',
//     right: 120,
//     top: 0,
//     width: 300,
//     height: 60,
//     zIndex: 10,
//   },
//   kidsSearchLottie: {
//     width: '100%',
//     height: '100%',
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,
//     color: '#1A1A1A',
//     marginLeft: 12,
//     fontWeight: '500',
//   },
//   micButton: {
//     padding: 4,
//   },
//   categoriesContent: {
//     paddingHorizontal: 16,
//     paddingBottom: 16,
//     gap: 8,
//   },
//   categoryItem: {
//     alignItems: 'center',
//     marginRight: 28,
//     position: 'relative',
//   },
//   categoryIconWrapper: {
//     marginBottom: 6,
//   },
//   categoryText: {
//     fontSize: 13,
//     color: '#666',
//     fontWeight: '600',
//   },
//   categoryTextSelected: {
//     color: '#1A1A1A',
//     fontWeight: '700',
//   },
//   categoryUnderline: {
//     position: 'absolute',
//     bottom: -8,
//     width: 40,
//     height: 3,
//     backgroundColor: '#1A1A1A',
//     borderRadius: 2,
//   },
//   scrollViewTouchable: {
//     flex: 1,
//   },
//   scrollView: {
//     flex: 1,
//   },
//   winterBanner: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: '#FFF',
//     marginHorizontal: 16,
//     marginTop: 16,
//     padding: 20,
//     borderRadius: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   winterBannerImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//   },
//   winterBannerContent: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   winterBannerSubtitle: {
//     fontSize: 12,
//     color: '#2196F3',
//     fontWeight: '600',
//     letterSpacing: 1,
//   },
//   winterBannerTitle: {
//     fontSize: 28,
//     fontWeight: '800',
//     color: '#1565C0',
//     marginTop: 4,
//   },
//   featuredSection: {
//     marginTop: 16,
//   },
//   featuredContent: {
//     paddingHorizontal: 16,
//     gap: 12,
//   },
//   featuredBannerWrapper: {
//     position: 'relative',
//   },
//   featuredBadge: {
//     position: 'absolute',
//     top: 12,
//     left: 12,
//     backgroundColor: '#FFF',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 20,
//     zIndex: 1,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   featuredBadgeText: {
//     fontSize: 12,
//     fontWeight: '700',
//     color: '#E91E63',
//   },
//   featuredBanner: {
//     width: width * 0.5,
//     height: 220,
//     borderRadius: 20,
//     padding: 16,
//     justifyContent: 'flex-end',
//     borderWidth: 3,
//     borderColor: '#2196F3',
//   },
//   bannerTitle: {
//     fontSize: 20,
//     fontWeight: '800',
//     color: '#1A1A1A',
//     lineHeight: 26,
//   },
//   bannerTitleLight: {
//     color: '#FFF',
//   },
//   section: {
//     marginTop: 24,
//     paddingHorizontal: 16,
//   },
//   sectionHeader: {
//     marginBottom: 16,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '800',
//     color: '#1A1A1A',
//     marginBottom: 4,
//   },
//   sectionSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     fontWeight: '500',
//   },
//   winterProductsList: {
//     gap: 12,
//   },
//   winterProduct: {
//     width: 160,
//     backgroundColor: '#FFF',
//     borderRadius: 12,
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.05,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   winterProductImageContainer: {
//     position: 'relative',
//     height: 140,
//     backgroundColor: '#F5F5F5',
//   },
//   winterProductImage: {
//     width: '100%',
//     height: '100%',
//   },
//   importedBadge: {
//     position: 'absolute',
//     top: 8,
//     left: 8,
//     backgroundColor: '#E8EAF6',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 8,
//     zIndex: 1,
//   },
//   importedText: {
//     fontSize: 10,
//     fontWeight: '700',
//     color: '#5C6BC0',
//   },
//   wishlistButton: {
//     position: 'absolute',
//     top: 8,
//     right: 8,
//     backgroundColor: '#FFF',
//     borderRadius: 20,
//     width: 32,
//     height: 32,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   winterProductInfo: {
//     padding: 12,
//   },
//   winterProductTitle: {
//     fontSize: 13,
//     fontWeight: '600',
//     color: '#1A1A1A',
//     marginBottom: 6,
//     height: 36,
//   },
//   priceRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 6,
//     marginBottom: 8,
//   },
//   winterProductPrice: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: '#1A1A1A',
//   },
//   winterProductMrp: {
//     fontSize: 12,
//     color: '#999',
//     textDecorationLine: 'line-through',
//   },
//   addButton: {
//     backgroundColor: '#FFF',
//     borderWidth: 1.5,
//     borderColor: '#4CAF50',
//     borderRadius: 8,
//     paddingVertical: 8,
//     alignItems: 'center',
//   },
//   addButtonText: {
//     fontSize: 13,
//     fontWeight: '700',
//     color: '#4CAF50',
//   },
//   frequentlyBoughtTitle: {
//     fontSize: 22,
//     fontWeight: '800',
//     color: '#1A1A1A',
//     marginBottom: 16,
//   },
//   frequentRow: {
//     justifyContent: 'space-between',
//     marginBottom: 12,
//   },
//   frequentSection: {
//     borderRadius: 16,
//     padding: 16,
//     width: (width - 44) / 2,
//     minHeight: 160,
//   },
//   frequentItems: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     gap: 8,
//     marginBottom: 12,
//   },
//   productItem: {
//     backgroundColor: '#FFF',
//     borderRadius: 12,
//     padding: 8,
//     width: 60,
//     height: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.05,
//     shadowRadius: 2,
//     elevation: 1,
//   },
//   productImage: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 8,
//   },
//   moreCountBadge: {
//     backgroundColor: '#FFF',
//     paddingHorizontal: 8,
//     paddingVertical: 6,
//     borderRadius: 12,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.08,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   moreCountText: {
//     fontSize: 11,
//     fontWeight: '700',
//     color: '#1A1A1A',
//   },
//   frequentTitle: {
//     fontSize: 15,
//     fontWeight: '700',
//     color: '#1A1A1A',
//   },
//   promoBanner: {
//     backgroundColor: '#FFF9E6',
//     marginHorizontal: 16,
//     marginTop: 24,
//     borderRadius: 16,
//     padding: 16,
//     flexDirection: 'row',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   promoContent: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 12,
//   },
//   promoIconContainer: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     overflow: 'hidden',
//   },
//   promoIcon: {
//     width: '100%',
//     height: '100%',
//   },
//   promoTextContainer: {
//     flex: 1,
//   },
//   promoTitle: {
//     fontSize: 14,
//     fontWeight: '700',
//     color: '#1A1A1A',
//     marginBottom: 2,
//   },
//   promoSubtitle: {
//     fontSize: 12,
//     color: '#666',
//     fontWeight: '500',
//   },
//   promoClose: {
//     padding: 4,
//   },
//   bottomSpacing: {
//     height: 120,
//   },
// });

// export default HomeScreen;

import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StatusBar,
  Animated,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import AddressSelectionModal from '../screens/Homescreen/AddressSelectionModal';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
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

  // Category-specific gradient colors - Updated to bluish/cool tones
  const categoryGradients = {
    All: ['#E0F7FA', '#B2EBF2'], // Light cyan/teal
    Winter: ['#B3E5FC', '#81D4FA'], // Light blue
    Electronics: ['#CE93D8', '#BA68C8'], // Purple
    Beauty: ['#F48FB1', '#F06292'], // Pink
    Decor: ['#A5D6A7', '#81C784'], // Green
    Kids: ['#FFCDD2', '#EF9A9A'], // Coral pink
  };

  useEffect(() => {
    Animated.timing(gradientAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();

    // Animate multiple snowflakes falling and play Lottie
    if (selectedCategory === 'Winter') {
      // Play Lottie animation
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
      // Pause Lottie animation
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
      // Handle current location
      setSelectedAddress('Current Location');
      // Navigate to map screen
      navigation.navigate('MapSelection', { 
        latitude: addressData.latitude,
        longitude: addressData.longitude 
      });
    } else if (addressData.type === 'new') {
      // Navigate to map screen for new address
      navigation.navigate('MapSelection');
    } else if (addressData.type === 'saved') {
      // Handle saved address selection
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

  // Featured banners data - Updated colors
  const featuredBanners = {
    All: [
      { 
        id: '1', 
        title: 'NEWLY\nLAUNCHED',
        badge: 'For You',
        color: ['#80DEEA', '#4DD0E1'], // Cyan gradient
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
    setIsSearchFocused(false); // Reset search focus when changing category
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
        style={styles.categoryItem}
        onPress={() => handleCategoryPress(item.name)}
        activeOpacity={0.7}
      >
        <View style={styles.categoryIconWrapper}>
          {renderIcon(item.icon, item.iconType, 28, '#1A1A1A')}
        </View>
        <Text style={[styles.categoryText, isSelected && styles.categoryTextSelected]}>
          {item.name}
        </Text>
        {isSelected && <View style={styles.categoryUnderline} />}
      </TouchableOpacity>
    );
  };

  // Render featured banner
  const renderFeaturedBanner = ({ item }) => (
    <View style={styles.featuredBannerWrapper}>
      {item.badge && (
        <View style={styles.featuredBadge}>
          <Text style={styles.featuredBadgeText}>{item.badge}</Text>
        </View>
      )}
      <LinearGradient
        colors={item.color}
        style={styles.featuredBanner}
      >
        <Text style={[styles.bannerTitle, item.color[0].includes('4') && styles.bannerTitleLight]}>
          {item.title}
        </Text>
      </LinearGradient>
    </View>
  );

  // Render frequently bought section
  const renderFrequentlyBought = ({ item }) => (
    <View style={[styles.frequentSection, { backgroundColor: item.color }]}>
      <View style={styles.frequentItems}>
        {item.items.map((product) => (
          <View key={product.id} style={styles.productItem}>
            <Image source={{ uri: product.image }} style={styles.productImage} />
          </View>
        ))}
        {item.moreCount && (
          <View style={styles.moreCountBadge}>
            <Text style={styles.moreCountText}>+{item.moreCount} more</Text>
          </View>
        )}
      </View>
      <Text style={styles.frequentTitle}>{item.title}</Text>
    </View>
  );

  // Render winter product
  const renderWinterProduct = ({ item }) => (
    <View style={styles.winterProduct}>
      <View style={styles.winterProductImageContainer}>
        {item.subtitle && (
          <View style={styles.importedBadge}>
            <Text style={styles.importedText}>{item.subtitle}</Text>
          </View>
        )}
        <Image source={{ uri: item.image }} style={styles.winterProductImage} />
        <TouchableOpacity style={styles.wishlistButton}>
          <Icon name="heart-outline" size={20} color="#999" />
        </TouchableOpacity>
      </View>
      <View style={styles.winterProductInfo}>
        <Text style={styles.winterProductTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <View style={styles.priceRow}>
          <Text style={styles.winterProductPrice}>{item.price}</Text>
          {item.mrp && <Text style={styles.winterProductMrp}>MRP {item.mrp}</Text>}
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>ADD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const currentBanners = featuredBanners[selectedCategory] || featuredBanners.All;
  const isWinterSelected = selectedCategory === 'Winter';
  const isKidsSelected = selectedCategory === 'Kids';

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={getCurrentGradient()[0]} />
      
      {/* Header Background with gradient and Winter animation */}
      <View style={styles.headerBackground}>
        <LinearGradient
          colors={getCurrentGradient()}
          style={styles.headerGradient}
        >
          {/* Winter Lottie Bear Animation - Positioned in top right */}
          {isWinterSelected && (
            <View style={styles.lottieContainer} pointerEvents="none">
              <LottieView
                ref={lottieRef}
                source={require('../../assets/BearWinter.json')}
                autoPlay
                loop
                style={styles.lottieAnimation}
              />
            </View>
          )}
          
          {/* Winter Snowflakes - ABOVE the gradient content with proper positioning */}
          {isWinterSelected && (
            <View style={styles.snowfallContainer} pointerEvents="none">
              {/* Snowflake 1 */}
              <Animated.View
                style={[
                  styles.snowflake,
                  { left: '10%' },
                  {
                    transform: [
                      {
                        translateY: snowAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, 400],
                        }),
                      },
                    ],
                    opacity: snowAnim.interpolate({
                      inputRange: [0, 0.2, 0.8, 1],
                      outputRange: [0, 1, 1, 0],
                    }),
                  },
                ]}
              >
                <Icon name="snow" size={30} color="#FFFFFF" style={styles.snowIcon} />
              </Animated.View>
              
              {/* Snowflake 2 */}
              <Animated.View
                style={[
                  styles.snowflake,
                  { left: '30%' },
                  {
                    transform: [
                      {
                        translateY: snowAnim2.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, 420],
                        }),
                      },
                    ],
                    opacity: snowAnim2.interpolate({
                      inputRange: [0, 0.2, 0.8, 1],
                      outputRange: [0, 1, 1, 0],
                    }),
                  },
                ]}
              >
                <Icon name="snow" size={24} color="#FFFFFF" style={styles.snowIcon} />
              </Animated.View>
              
              {/* Snowflake 3 */}
              <Animated.View
                style={[
                  styles.snowflake,
                  { left: '50%' },
                  {
                    transform: [
                      {
                        translateY: snowAnim3.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, 380],
                        }),
                      },
                    ],
                    opacity: snowAnim3.interpolate({
                      inputRange: [0, 0.2, 0.8, 1],
                      outputRange: [0, 1, 1, 0],
                    }),
                  },
                ]}
              >
                <Icon name="snow" size={28} color="#FFFFFF" style={styles.snowIcon} />
              </Animated.View>
              
              {/* Snowflake 4 */}
              <Animated.View
                style={[
                  styles.snowflake,
                  { left: '70%' },
                  {
                    transform: [
                      {
                        translateY: snowAnim4.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, 410],
                        }),
                      },
                    ],
                    opacity: snowAnim4.interpolate({
                      inputRange: [0, 0.2, 0.8, 1],
                      outputRange: [0, 1, 1, 0],
                    }),
                  },
                ]}
              >
                <Icon name="snow" size={26} color="#FFFFFF" style={styles.snowIcon} />
              </Animated.View>
              
              {/* Snowflake 5 */}
              <Animated.View
                style={[
                  styles.snowflake,
                  { left: '85%' },
                  {
                    transform: [
                      {
                        translateY: snowAnim5.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, 390],
                        }),
                      },
                    ],
                    opacity: snowAnim5.interpolate({
                      inputRange: [0, 0.2, 0.8, 1],
                      outputRange: [0, 1, 1, 0],
                    }),
                  },
                ]}
              >
                <Icon name="snow" size={22} color="#FFFFFF" style={styles.snowIcon} />
              </Animated.View>
            </View>
          )}
          
          <SafeAreaView edges={['top']} style={styles.safeArea}>
            {/* Header */}
            <View style={styles.header}>
              <View style={styles.headerLeft}>
                <View style={styles.deliveryRow}>
                  <Text style={styles.deliveryMinutes}>15 minutes</Text>
                  <View style={styles.distanceBadge}>
                    <Icon name="car" size={12} color="#00897B" />
                    <Text style={styles.distanceText}>1 km away</Text>
                  </View>
                </View>
                <TouchableOpacity 
                  style={styles.locationContainer}
                  onPress={() => setShowAddressModal(true)}
                >
                  <Text style={styles.locationText}>{selectedAddress}</Text>
                  <Icon name="chevron-down" size={14} color="#1A1A1A" />
                </TouchableOpacity>
              </View>
              <View style={styles.headerRight}>
                <TouchableOpacity style={styles.walletButton}>
                  <Icon1 name="shopping-cart" size={24} color="#1A1A1A" />
                  <Text style={styles.walletAmount}>₹0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profileButton}>
                  <Icon name="person" size={24} color="#1A1A1A" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Search Bar with Kids Animation */}
            <View style={styles.searchContainer}>
              {/* Kids Lottie Animation in Search Bar */}
              {isKidsSelected && !isSearchFocused && (
                <View style={styles.kidsSearchLottieContainer} pointerEvents="none">
                  <LottieView
                    ref={kidsLottieRef}
                    source={require('../../assets/kids.json')}
                    autoPlay
                    loop
                    style={styles.kidsSearchLottie}
                  />
                </View>
              )}
              
              <Icon name="search" size={22} color="#666" />
              <TextInput
                style={styles.searchInput}
                placeholder={isKidsSelected && !isSearchFocused ? '' : 'Search "board games"'}
                placeholderTextColor="#999"
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
              />
              <TouchableOpacity style={styles.micButton}>
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
              contentContainerStyle={styles.categoriesContent}
            />
          </SafeAreaView>
        </LinearGradient>
      </View>

      {/* Scrollable Content - Touchable to restore animation */}
      <TouchableOpacity 
        style={styles.scrollViewTouchable}
        activeOpacity={1}
        onPress={() => setIsSearchFocused(false)}
      >
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          {/* Winter Season Banner (only for Winter category) */}
          {isWinterSelected && (
            <View style={styles.winterBanner}>
              <Image 
                source={{ uri: 'https://via.placeholder.com/100/FF6B35/FFFFFF?text=🎿' }}
                style={styles.winterBannerImage}
              />
              <View style={styles.winterBannerContent}>
                <Text style={styles.winterBannerSubtitle}>STOCK UP FOR THE</Text>
                <Text style={styles.winterBannerTitle}>Winter Season</Text>
              </View>
              <Image 
                source={{ uri: 'https://via.placeholder.com/100/FFFFFF/000000?text=☃️' }}
                style={styles.winterBannerImage}
              />
            </View>
          )}

          {/* Featured Banners */}
          <View style={styles.featuredSection}>
            <FlatList
              data={currentBanners}
              renderItem={renderFeaturedBanner}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.featuredContent}
            />
          </View>

          {/* Winter Products Section (only for Winter category) */}
          {isWinterSelected && (
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <View>
                  <Text style={styles.sectionTitle}>Time to snuggle, sip & stay warm!</Text>
                  <Text style={styles.sectionSubtitle}>Grab deals on top winter picks</Text>
                </View>
              </View>
              <FlatList
                data={winterProducts}
                renderItem={renderWinterProduct}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.winterProductsList}
              />
            </View>
          )}

          {/* Frequently Bought Section (only for All category) */}
          {selectedCategory === 'All' && (
            <View style={styles.section}>
              <Text style={styles.frequentlyBoughtTitle}>Frequently bought</Text>
              <FlatList
                data={frequentlyBought}
                renderItem={renderFrequentlyBought}
                keyExtractor={(item) => item.id}
                numColumns={2}
                scrollEnabled={false}
                columnWrapperStyle={styles.frequentRow}
              />
            </View>
          )}

          {/* Promotional Banner */}
          <View style={styles.promoBanner}>
            <View style={styles.promoContent}>
              <View style={styles.promoIconContainer}>
                <Image 
                  source={{ uri: 'https://via.placeholder.com/60/7C4DFF/FFFFFF?text=D' }}
                  style={styles.promoIcon}
                />
              </View>
              <View style={styles.promoTextContainer}>
                <Text style={styles.promoTitle}>Get a District Movie Voucher worth ₹125</Text>
                <Text style={styles.promoSubtitle}>on orders above ₹199</Text>
              </View>
              <Icon name="chevron-forward" size={20} color="#666" />
            </View>
            <TouchableOpacity style={styles.promoClose}>
              <Icon name="close" size={20} color="#999" />
            </TouchableOpacity>
          </View>

          {/* Bottom Spacing */}
          <View style={styles.bottomSpacing} />
        </ScrollView>
      </TouchableOpacity>

      {/* Address Selection Modal */}
      <AddressSelectionModal
        visible={showAddressModal}
        onClose={() => setShowAddressModal(false)}
        onAddressSelect={handleAddressSelect}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerBackground: {
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 3,
  },
  headerGradient: {
    position: 'relative',
  },
  lottieContainer: {
    position: 'absolute',
    top: 30,
    right: 140,
    width: 120,
    height: 120,
    zIndex: 2,
  },
  lottieAnimation: {
    width: '100%',
    height: '100%',
  },
  snowfallContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
  snowflake: {
    position: 'absolute',
    top: -20,
    zIndex: 10,
  },
  snowIcon: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  safeArea: {
    position: 'relative',
    zIndex: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
  },
  headerLeft: {
    flex: 1,
  },
  deliveryTime: {
    fontSize: 14,
    color: '#1A1A1A',
    fontWeight: '500',
    marginBottom: 2,
  },
  deliveryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  deliveryMinutes: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1A1A1A',
    letterSpacing: -0.5,
  },
  distanceBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0F2F1',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  distanceText: {
    fontSize: 12,
    color: '#00897B',
    fontWeight: '600',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationText: {
    fontSize: 14,
    color: '#1A1A1A',
    fontWeight: '700',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  walletButton: {
    backgroundColor: '#FFF',
    borderRadius: 50,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  walletIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  walletAmount: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  profileButton: {
    backgroundColor: '#FFF',
    borderRadius: 50,
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginHorizontal: 16,
    marginVertical: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    position: 'relative',
  },
  kidsSearchLottieContainer: {
    position: 'absolute',
    right: 120,
    top: 0,
    width: 300,
    height: 60,
    zIndex: 10,
  },
  kidsSearchLottie: {
    width: '100%',
    height: '100%',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1A1A1A',
    marginLeft: 12,
    fontWeight: '500',
  },
  micButton: {
    padding: 4,
  },
  categoriesContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 8,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 28,
    position: 'relative',
  },
  categoryIconWrapper: {
    marginBottom: 6,
  },
  categoryText: {
    fontSize: 13,
    color: '#666',
    fontWeight: '600',
  },
  categoryTextSelected: {
    color: '#1A1A1A',
    fontWeight: '700',
  },
  categoryUnderline: {
    position: 'absolute',
    bottom: -8,
    width: 40,
    height: 3,
    backgroundColor: '#1A1A1A',
    borderRadius: 2,
  },
  scrollViewTouchable: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  winterBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    marginHorizontal: 16,
    marginTop: 16,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  winterBannerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  winterBannerContent: {
    flex: 1,
    alignItems: 'center',
  },
  winterBannerSubtitle: {
    fontSize: 12,
    color: '#2196F3',
    fontWeight: '600',
    letterSpacing: 1,
  },
  winterBannerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1565C0',
    marginTop: 4,
  },
  featuredSection: {
    marginTop: 16,
  },
  featuredContent: {
    paddingHorizontal: 16,
    gap: 12,
  },
  featuredBannerWrapper: {
    position: 'relative',
  },
  featuredBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#FFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  featuredBadgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#E91E63',
  },
  featuredBanner: {
    width: width * 0.5,
    height: 220,
    borderRadius: 20,
    padding: 16,
    justifyContent: 'flex-end',
    borderWidth: 3,
    borderColor: '#2196F3',
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1A1A1A',
    lineHeight: 26,
  },
  bannerTitleLight: {
    color: '#FFF',
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  winterProductsList: {
    gap: 12,
  },
  winterProduct: {
    width: 160,
    backgroundColor: '#FFF',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  winterProductImageContainer: {
    position: 'relative',
    height: 140,
    backgroundColor: '#F5F5F5',
  },
  winterProductImage: {
    width: '100%',
    height: '100%',
  },
  importedBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#E8EAF6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    zIndex: 1,
  },
  importedText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#5C6BC0',
  },
  wishlistButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#FFF',
    borderRadius: 20,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  winterProductInfo: {
    padding: 12,
  },
  winterProductTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 6,
    height: 36,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  winterProductPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  winterProductMrp: {
    fontSize: 12,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  addButton: {
    backgroundColor: '#FFF',
    borderWidth: 1.5,
    borderColor: '#4CAF50',
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#4CAF50',
  },
  frequentlyBoughtTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1A1A1A',
    marginBottom: 16,
  },
  frequentRow: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  frequentSection: {
    borderRadius: 16,
    padding: 16,
    width: (width - 44) / 2,
    minHeight: 160,
  },
  frequentItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12,
  },
  productItem: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 8,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  productImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  moreCountBadge: {
    backgroundColor: '#FFF',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  moreCountText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  frequentTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  promoBanner: {
    backgroundColor: '#FFF9E6',
    marginHorizontal: 16,
    marginTop: 24,
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  promoContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  promoIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
  },
  promoIcon: {
    width: '100%',
    height: '100%',
  },
  promoTextContainer: {
    flex: 1,
  },
  promoTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 2,
  },
  promoSubtitle: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  promoClose: {
    padding: 4,
  },
  bottomSpacing: {
    height: 120,
  },
});

export default HomeScreen;