import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../../../assets/colors/AppColors';
import DoctorsHeader from '../../../components/headers/DoctorsHeader';
import BackHeader from '../../../components/headers/BackHeader';

const patientsData = [
  {
    id: '1',
    name: 'Kevin Petersen',
    age: 25,
    gender: 'Male',
    bloodType: 'AB-',
    appointments: 15,
    image: 'https://example.com/kevin.jpg', // Replace with actual image URLs
  },
  {
    id: '2',
    name: 'Dravie Brave',
    age: 30,
    gender: 'Male',
    bloodType: 'A-',
    appointments: 11,
    image: 'https://example.com/dravie.jpg', // Replace with actual image URLs
  },
  {
    id: '3',
    name: 'Dreshal Son',
    age: 32,
    gender: 'Female',
    bloodType: 'O-',
    appointments: 14,
    image: 'https://example.com/dresha.jpg', // Replace with actual image URLs
  },
];

const AllPatients = () => {
  const renderPatientCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.patientImage} />
      <View style={styles.patientInfo}>
        <Text style={styles.patientName}>{item.name}</Text>
        <View style={styles.patientDetails}>
          <Text style={styles.patientDetailText}>{item.age} yrs</Text>
          <Text style={styles.patientDetailText}>| {item.gender}</Text>
          <Text style={styles.patientDetailText}>| {item.bloodType}</Text>
        </View>
        <Text style={styles.totalAppointments}>
          Total Appointments ({item.appointments})
        </Text>
      </View>
      <TouchableOpacity style={styles.viewButton}>
        <Text style={styles.viewButtonText}>View</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <BackHeader title={'Patients'}/>
      <FlatList
        data={patientsData}
        renderItem={renderPatientCard}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default AllPatients;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    backgroundColor: colors.bgClr,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,margin:16,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  patientImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  patientInfo: {
    flex: 1,
  },
  patientName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2A4858',
  },
  patientDetails: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  patientDetailText: {
    fontSize: 14,
    color: '#606060',
    marginRight: 10,
  },
  totalAppointments: {
    fontSize: 16,
    color: '#606060',
    fontWeight: 'bold',
  },
  viewButton: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  viewButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    
  },
});
