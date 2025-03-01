import React from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DoctorsHeader from '../../../components/headers/DoctorsHeader';
import {Icons} from '../../../assets/icons/Icons';
import colors from '../../../assets/colors/AppColors';
import fonts from '../../../assets/fonts/MyFonts'; // Import your fonts here
const {width} = Dimensions.get('window');

const AdminHome = () => {
  const navigation = useNavigation();

  // Example counts for each category
  const registeredPatients = 150;
  const registeredDoctors = 25;
  const registeredStores = 18;
  const availableMedicines = 120;
  const totalSales = 150000.0;

  return (
    <>
      <DoctorsHeader />
      <ScrollView style={styles.container}>
        {/* Total Sales Section */}
        <View style={styles.fullWidthCard}>
          <View style={styles.iconCircle}>
            <Icons.FontAwesome name="dollar" size={40} color={colors.primary} />
          </View>
          <View style={{marginLeft: 15}}>
            <Text style={styles.cardTitle}>Total Sales</Text>
            <Text style={styles.cardValue}>${totalSales.toFixed(2)}</Text>
          </View>
        </View>

        {/* Dashboard Metrics Section */}
        <View style={[styles.dashboardSection, {marginBottom: 20}]}>
          {/* Patients Card */}
          <TouchableOpacity
            style={[styles.card, {backgroundColor: colors.primaryLight}]}
            onPress={() => navigation.navigate('AllPatients')}>
            <Icons.MaterialIcons name="group" size={40} color="#00695C" style={styles.icon} />
            <Text style={styles.cardValue}>{registeredPatients}</Text>
            <Text style={styles.cardTitle}>Patients</Text>
          </TouchableOpacity>
          {/* Doctors Card */}
          <TouchableOpacity
            style={[styles.card, {backgroundColor: '#A7C7E7'}]}
            onPress={() => navigation.navigate('DoctorsScreen')}>
            <Icons.MaterialIcons name="local-hospital" size={40} color="#41729F" style={styles.icon} />
            <Text style={styles.cardValue}>{registeredDoctors}</Text>
            <Text style={styles.cardTitle}>Doctors</Text>
          </TouchableOpacity>
          {/* Stores Card */}
          <TouchableOpacity
            style={[styles.card, {backgroundColor: '#FFC3A0'}]}
            onPress={() => navigation.navigate('StoresScreen')}>
            <Icons.FontAwesome name="building" size={40} color="#C0785A" style={styles.icon} />
            <Text style={styles.cardValue}>{registeredStores}</Text>
            <Text style={styles.cardTitle}>Stores</Text>
          </TouchableOpacity>
          {/* Medicines Card */}
          <TouchableOpacity
            style={[styles.card, {backgroundColor: '#FFEE93'}]}
            onPress={() => navigation.navigate('Medicines')}>
            <Icons.MaterialCommunityIcons name="pill" size={40} color="#C9A826" style={styles.icon} />
            <Text style={styles.cardValue}>{availableMedicines}</Text>
            <Text style={styles.cardTitle}>All Medicines</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default AdminHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.bgClr,
  },
  fullWidthCard: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
    marginBottom: 30,
  },
  iconCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dashboardSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#ffffff',
    width: '48%',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: fonts.medium, // Updated to use fonts.medium
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
  },
  cardValue: {
    fontSize: 28,
    fontFamily: fonts.bold, // Updated to use fonts.bold
    color: "#171717",
    textAlign: 'center',
  },
});
