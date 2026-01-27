import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CategoriesScreen = () => {
  const categories = [
    { id: '1', name: 'Vegetables & Fruits', icon: '🥬', color: '#E8F5E9' },
    { id: '2', name: 'Dairy & Breakfast', icon: '🥛', color: '#FFF9C4' },
    { id: '3', name: 'Munchies', icon: '🍿', color: '#FFE0B2' },
    { id: '4', name: 'Cold Drinks & Juices', icon: '🥤', color: '#E1F5FE' },
    { id: '5', name: 'Instant & Frozen Food', icon: '🍜', color: '#F3E5F5' },
    { id: '6', name: 'Tea, Coffee & Health Drinks', icon: '☕', color: '#EFEBE9' },
    { id: '7', name: 'Bakery & Biscuits', icon: '🍪', color: '#FFF3E0' },
    { id: '8', name: 'Sweet Tooth', icon: '🍭', color: '#FCE4EC' },
    { id: '9', name: 'Atta, Rice & Dal', icon: '🌾', color: '#FFF9E6' },
    { id: '10', name: 'Masala, Oil & More', icon: '🧂', color: '#FFEBEE' },
    { id: '11', name: 'Sauces & Spreads', icon: '🍯', color: '#E8EAF6' },
    { id: '12', name: 'Chicken, Meat & Fish', icon: '🍗', color: '#FFCDD2' },
    { id: '13', name: 'Paan Corner', icon: '🌿', color: '#C8E6C9' },
    { id: '14', name: 'Organic & Healthy Living', icon: '🥗', color: '#DCEDC8' },
    { id: '15', name: 'Baby Care', icon: '👶', color: '#F8BBD0' },
    { id: '16', name: 'Pharma & Wellness', icon: '💊', color: '#B2DFDB' },
    { id: '17', name: 'Cleaning Essentials', icon: '🧹', color: '#B2EBF2' },
    { id: '18', name: 'Home & Office', icon: '🏠', color: '#D1C4E9' },
    { id: '19', name: 'Personal Care', icon: '💅', color: '#F0F4C3' },
    { id: '20', name: 'Pet Care', icon: '🐕', color: '#FFCCBC' },
  ];

  const renderCategory = ({ item }) => (
    <TouchableOpacity style={[styles.categoryCard, { backgroundColor: item.color }]}>
      <Text style={styles.categoryIcon}>{item.icon}</Text>
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Shop by Category</Text>
      </View>
      
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9E6',
  },
  header: {
    padding: 16,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  listContent: {
    padding: 12,
  },
  categoryCard: {
    flex: 1,
    margin: 6,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 120,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryIcon: {
    fontSize: 40,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
});

export default CategoriesScreen;