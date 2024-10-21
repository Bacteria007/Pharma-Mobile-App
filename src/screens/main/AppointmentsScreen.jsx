import React, { useState } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MyImages from '../../assets/images/MyImages';
import commonStyles from '../../style/commonStyles';
import BackHeader from '../../components/headers/BackHeader';
import fonts from '../../assets/fonts/MyFonts';
import colors from '../../assets/colors/AppColors';
import Modal from 'react-native-modal';

const AppointmentsScreen = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctor: 'Dilgam Mammadov',
      date: 'September 11, 2024',
      image: MyImages.d1,
    },
    {
      id: 2,
      doctor: 'Valiyeva Elnura',
      date: 'September 11, 2024',
      image: MyImages.d2,
    },
    {
      id: 3,
      doctor: 'Dilgam Mammadov',
      date: 'September 11, 2024',
      image: MyImages.d3,
    },
    {
      id: 4,
      doctor: 'Dilgam Mammadov',
      date: 'September 11, 2024',
      image: MyImages.d1,
    },
    {
      id: 5,
      doctor: 'Dilgam Mammadov',
      date: 'September 11, 2024',
      image: MyImages.d2,
    },
    {
      id: 6,
      doctor: 'Dilgam Mammadov',
      date: 'September 11, 2024',
      image: MyImages.d3,
    },
    {
      id: 7,
      doctor: 'Dilgam Mammadov',
      date: 'September 11, 2024',
      image: MyImages.d2,
    },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const openCancelModal = (appointment) => {
    setSelectedAppointment(appointment);
    setIsModalVisible(true);
  };

  const cancelAppointment = () => {
    setAppointments((prev) =>
      prev.filter((appointment) => appointment.id !== selectedAppointment.id)
    );
    setIsModalVisible(false);
    setSelectedAppointment(null);
  };

  const renderAppointments = ({ item }) => (
    <View style={{ flexDirection: 'row', marginBottom: 20 ,padding:10}}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.doctor}</Text>
        <Text style={styles.date}>Date: {item.date}</Text>
      </View>
        <Pressable onPress={() => openCancelModal(item)} style={{padding:8,backgroundColor:colors.primary,justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
          <Text style={{textAlign:'center',color:colors.white,borderRadius:8}}>Cancel</Text>
        </Pressable>
    </View>
  );

  return (
    <View style={commonStyles.container}>
      <BackHeader title={'Appointments'} />
      <FlatList
        data={appointments}
        renderItem={renderAppointments}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16 }}
      />

      {/* Cancel Appointment Modal */}
      <Modal
        visible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
        onBackButtonPress={() => setIsModalVisible(false)}
        animationIn="fadeIn"
        animationOut="fadeOut"
        backdropColor="rgba(0, 0, 0, 0.5)"
        style={{backgroundColor:"rgba(0, 0, 0, 0.5)",margin:0,padding:20}}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Cancel Appointment</Text>
          <Text style={styles.modalMessage}>
            Are you sure you want to cancel this appointment?
          </Text>
          <View style={styles.modalButtons}>
            <Pressable
              style={styles.cancelButton}
              onPress={() => setIsModalVisible(false)}
            >
              <Text style={styles.buttonText}>No</Text>
            </Pressable>
            <Pressable
              style={styles.confirmButton}
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

export default AppointmentsScreen;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 999,
    resizeMode: 'contain',
  },
  info: {
    marginLeft: 16,flex:1
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.bold,
    color: colors.black,
  },
  date: {
    fontSize: 14,
    fontFamily: fonts.medium,
    color: colors.black,
  },
  cancelText: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: colors.white,
    backgroundColor: colors.red,
    padding: 6,
    borderRadius: 4,
    marginTop: 8,
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
    color: colors.black,
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.black,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '75%',
    gap:20,
  },
  cancelButton: {
    backgroundColor: colors.primary,
    // flex:1,

    padding: 10,
    borderRadius: 4,
    width: '35%',
    alignItems: 'center',
  },
  confirmButton: {
    backgroundColor: 'red',

    padding: 10,
    borderRadius: 4,
    width: '35%',
    // flex:1,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontFamily: fonts.medium,
    fontSize: 14,
  },
});
