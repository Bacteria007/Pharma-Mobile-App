import React, { useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import MyImages from '../../../assets/images/MyImages';
import commonStyles from '../../../style/commonStyles';
import BackHeader from '../../../components/headers/BackHeader';
import fonts from '../../../assets/fonts/MyFonts';
import colors from '../../../assets/colors/AppColors';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import { Icons } from '../../../assets/icons/Icons';
import DoctorsHeader from '../../../components/headers/DoctorsHeader';

const appointmentsData = [
  // pending: [
    { id: 1, patient: 'Alice Johnson', date: '2024-10-20', image: MyImages.d1 },
    { id: 2, patient: 'Mark Robinson', date: '2024-10-22', image: MyImages.d2 },
  // ],
  // completed: [
    { id: 3, patient: 'John Doe', date: '2024-10-18', image: MyImages.d3 },
  // ],
  // canceled: [
    { id: 4, patient: 'Jane Smith', date: '2024-10-15', image: MyImages.d2 },
  // ],
];

const DocAppointmentsScreen = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [appointments, setAppointments] = useState(appointmentsData);
  const navigation = useNavigation(); // Initialize navigation

  const openCancelModal = (appointment) => {
    setSelectedAppointment(appointment);
    setIsModalVisible(true);
  };

  const cancelAppointment = () => {
    setAppointments((prev) => ({
      ...prev,
      pending: prev.pending.filter((a) => a.id !== selectedAppointment.id),
      canceled: [...prev.canceled, selectedAppointment],
    }));
    setIsModalVisible(false);
    setSelectedAppointment(null);
  };

  // const getTabContent = () => {
  //   switch (activeTab) {
  //     case 'pending':
  //       return appointments.pending;
  //     case 'completed':
  //       return appointments.completed;
  //     case 'canceled':
  //       return appointments.canceled;
  //     default:
  //       return [];
  //   }
  // };

  const renderAppointment = ({ item }) => (
    <View style={styles.appointmentContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.patient}</Text>
        <Text style={styles.date}>Date: {item.date}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable
          onPress={() => navigation.navigate('AppointmentDetails', { appointment: item })}

        >
          <Icons.Ionicons name='eye' size={20} color={colors.primary} />

        </Pressable>
        {/* {activeTab === 'pending' && (
          <Pressable
            onPress={() => openCancelModal(item)}

          >
            <Icons.MaterialCommunityIcons name='delete' size={20} color='red' />

          </Pressable>
        )} */}
      </View>
    </View>
  );

  return (
    <View style={commonStyles.container}>
      <DoctorsHeader />
      {/* <View style={styles.tabContainer}>
        {['completed', 'canceled'].map((tab) => (
          <Pressable
            key={tab}
            style={[styles.tabButton, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
          </Pressable>
        ))}
      </View> */}

      <FlatList
        data={appointmentsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderAppointment}
        contentContainerStyle={{ padding: 16 }}
      />

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
        onBackButtonPress={() => setIsModalVisible(false)}
        animationIn="fadeIn"
        animationOut="fadeOut"
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Cancel Appointment</Text>
          <Text style={styles.modalMessage}>
            Are you sure you want to cancel this appointment?
          </Text>
          <View style={styles.modalButtons}>
            <Pressable
              style={styles.noButton}
              onPress={() => setIsModalVisible(false)}
            >
              <Text style={styles.buttonText}>No</Text>
            </Pressable>
            <Pressable
              style={styles.yesButton}
              onPress={cancelAppointment}
            >
              <Text style={styles.buttonText}>Yes</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DocAppointmentsScreen;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // marginBottom: 10,
    marginTop:10,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
  },
  activeTab: {
    backgroundColor: colors.primary,
  },
  tabText: {
    fontSize: 14,
    fontFamily: fonts.semibold,
    color: '#000',
  },
  activeTabText: {
    color: '#fff',
  },
  appointmentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.bold,
    color: colors.black,
  },
  date: {
    fontSize: 14,
    fontFamily: fonts.medium,
    color: colors.black,
    marginTop: 4,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  viewButton: {
    backgroundColor: colors.primary,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  viewText: {
    color: colors.white,
    fontFamily: fonts.medium,
    fontSize: 14,
  },
  cancelButton: {
    backgroundColor: 'red',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  cancelText: {
    color: colors.white,
    fontFamily: fonts.medium,
    fontSize: 14,
  },
  modalContent: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: fonts.bold,
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    fontFamily: fonts.medium,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
  },
  noButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 4,
    width: '40%',
    alignItems: 'center',
  },
  yesButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 4,
    width: '40%',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontFamily: fonts.medium,
    fontSize: 14,
  },
});
