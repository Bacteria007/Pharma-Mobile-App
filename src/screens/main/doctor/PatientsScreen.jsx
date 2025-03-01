import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import colors from '../../../assets/colors/AppColors';
import { Icons } from '../../../assets/icons/Icons';
import fonts from '../../../assets/fonts/MyFonts';
import DoctorsHeader from '../../../components/headers/DoctorsHeader';
import { formatDate } from '../../../helpers/common';

// Sample data of patients
const patientsData = [
  {
    id: '1',
    name: 'John Doe',
    profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
    appointmentDate: '2024-10-26',
    disease: 'Flu and Fever',
  },
  {
    id: '2',
    name: 'Jane Smith',
    profilePicture: 'https://randomuser.me/api/portraits/women/2.jpg',
    appointmentDate: '2024-10-01',
    disease: 'Migraine',
  },
  {
    id: '3',
    name: 'Alice Johnson',
    profilePicture: '',
    appointmentDate: '2024-10-26',
    disease: 'High Blood Pressure',
  },
  {
    id: '4',
    name: 'Mark Robinson',
    profilePicture: 'https://randomuser.me/api/portraits/men/4.jpg',
    appointmentDate: '2024-1-05',
    disease: 'Asthma',
  },
  {
    id: '5',
    name: 'Mark Robinson',
    profilePicture: 'https://randomuser.me/api/portraits/men/5.jpg',
    appointmentDate: '2024-1-05',
    disease: 'Asthma',
  },
  {
    id: '6',
    name: 'Mark Robinson',
    profilePicture: 'https://randomuser.me/api/portraits/men/6.jpg',
    appointmentDate: '2024-1-05',
    disease: 'Asthma',
  },
];

// Helper function to group patients by date
const groupByDate = (data) => {
  return data.reduce((acc, patient) => {
    const date = patient.appointmentDate;
    if (!acc[date]) acc[date] = [];
    acc[date].push(patient);
    return acc;
  }, {});
};

const PatientsScreen = () => {
  // Sort patients by appointment date in descending order
  const sortedPatients = patientsData.sort(
    (a, b) => new Date(b.appointmentDate) - new Date(a.appointmentDate)
  );

  // Group patients by date
  const groupedData = groupByDate(sortedPatients);

  const renderPatient = ({ item }) => (
    <View style={styles.patientContainer}>
      {item.profilePicture ? (
        <Image source={{ uri: item.profilePicture }} style={styles.profileImage} />
      ) : (
        <Icons.Ionicons name="person-circle-outline" size={50} color={colors.primary} />
      )}

      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.date}>Appointment: {formatDate(item.appointmentDate)}</Text>
        <Text style={styles.disease}>Disease: {item.disease}</Text>
      </View>
    </View>
  );

  const renderSection = ({ item }) => (
    <View>
      <Text style={styles.sectionTitle}>{formatDate(item.date)}</Text>
      <FlatList
        data={item.patients}
        keyExtractor={(patient) => patient.id}
        renderItem={renderPatient}
      />
    </View>
  );

  const sections = Object.keys(groupedData).map((date) => ({
    date,
    patients: groupedData[date],
  }));

  return (
    <>
      <DoctorsHeader />
      <View style={styles.container}>
        <FlatList
          data={sections}
          keyExtractor={(item) => item.date}
          renderItem={renderSection}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </>
  );
};

export default PatientsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgClr,
    paddingTop: 10,
  },
  listContainer: {
    paddingBottom: 20,
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: fonts.bold,
    color: colors.primary,
    marginVertical: 10,
  },
  patientContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 14,
    fontFamily: fonts.semibold,
    color: colors.black,
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: colors.light_black,
    fontFamily: fonts.medium,
    marginBottom: 2,
  },
  disease: {
    fontSize: 12,
    fontFamily: fonts.medium,
    color: colors.light_black,
  },
});
