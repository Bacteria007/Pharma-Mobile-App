import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, ToastAndroid} from 'react-native';
import ProfileTextInput from '../../../components/inputs/ProfileTextInput';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
import colors from '../../../assets/colors/AppColors';
import DoctorsHeader from '../../../components/headers/DoctorsHeader';

const RiderProfile = () => {
  // Sample values for rider information
  const [name, setName] = useState('Ali Khan');
  const [email, setEmail] = useState('ali.khan@example.com');
  const [address, setAddress] = useState('123 Main St, Springfield');
  const earnings = 98765.43; // Example earnings
  const deliveredOrders = 58; // Example number of delivered orders

  // Function to handle updating rider information
  const handleUpdate = () => {
    ToastAndroid.show('Profile updated successfully!', ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <DoctorsHeader />
        {/* Dashboard Metrics Section */}
        <View style={styles.dashboardSection}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Total Earnings</Text>
            <Text style={styles.cardValue}>${earnings.toFixed(2)}</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Delivered Orders</Text>
            <Text style={styles.cardValue}>{deliveredOrders}</Text>
          </View>
        </View>
        {/* Editable Fields */}
        <View style={styles.profileSection}>
          <ProfileTextInput
            setState={setName}
            placeholder={name}
            state={name}
          />
          <ProfileTextInput
            setState={setEmail}
            placeholder={email}
            state={email}
          />
          <ProfileTextInput
            setState={setAddress}
            placeholder={address}
            state={address}
          />
          <PrimaryButton title="Update Profile" onPress={handleUpdate} />
        </View>
      </ScrollView>
    </View>
  );
};

export default RiderProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgClr,
  },
  header: {
    backgroundColor: '#4a90e2',
    paddingVertical: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  profileSection: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 3,
    marginTop: 30,
    marginBottom: 30,
  },
  dashboardSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    width: '48%',
    paddingVertical: 30,
    paddingHorizontal: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    marginBottom: 10,
  },
  cardValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4a90e2',
  },
});
