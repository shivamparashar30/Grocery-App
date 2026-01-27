import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PrintScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Print</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.infoCard}>
          <Text style={styles.infoIcon}>🖨️</Text>
          <Text style={styles.infoTitle}>Print & Scan Services</Text>
          <Text style={styles.infoText}>
            Upload your documents and get them printed or scanned at nearby stores
          </Text>
        </View>

        <View style={styles.servicesContainer}>
          <TouchableOpacity style={styles.serviceCard}>
            <Text style={styles.serviceIcon}>📄</Text>
            <Text style={styles.serviceName}>Document Print</Text>
            <Text style={styles.serviceDesc}>Black & White / Color</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.serviceCard}>
            <Text style={styles.serviceIcon}>📸</Text>
            <Text style={styles.serviceName}>Photo Print</Text>
            <Text style={styles.serviceDesc}>Various sizes available</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.serviceCard}>
            <Text style={styles.serviceIcon}>🔍</Text>
            <Text style={styles.serviceName}>Scan Documents</Text>
            <Text style={styles.serviceDesc}>High quality scans</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.serviceCard}>
            <Text style={styles.serviceIcon}>📋</Text>
            <Text style={styles.serviceName}>Xerox</Text>
            <Text style={styles.serviceDesc}>Quick photocopies</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.uploadButton}>
          <Text style={styles.uploadButtonText}>Upload Document</Text>
        </TouchableOpacity>
      </ScrollView>
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
  content: {
    flex: 1,
    padding: 16,
  },
  infoCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoIcon: {
    fontSize: 60,
    marginBottom: 12,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  serviceCard: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  serviceIcon: {
    fontSize: 40,
    marginBottom: 8,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
    textAlign: 'center',
  },
  serviceDesc: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  uploadButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  uploadButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default PrintScreen;