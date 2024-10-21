import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'; // Import DateTimePicker
import fonts from '../../assets/fonts/MyFonts';
import colors from '../../assets/colors/AppColors';
import AuthTextinput from '../../components/inputs/AuthTextinput';
import { Icons } from '../../assets/icons/Icons';
import PrimaryButton from '../../components/buttons/PrimaryButton'; // Assuming you have a PrimaryButton component
import commonStyles from '../../style/commonStyles';
import BackHeader from '../../components/headers/BackHeader';

const ScheduleAppointment = (props) => {
  const { item } = props.route.params;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [showPicker, setShowPicker] = useState({ show: false, mode: 'date' }); // Manage date/time picker visibility

  const onChange = (event, selectedDate) => {
    setShowPicker({ show: false }); // Hide the picker after selection
    if (selectedDate) {
      const formattedDate = selectedDate.toLocaleDateString();
      const formattedTime = selectedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      if (showPicker.mode === 'date') setDate(formattedDate); // Set the date
      else setTime(formattedTime); // Set the time
    }
  };

  const showDatePicker = () => {
    setShowPicker({ show: true, mode: 'date' }); // Open date picker
  };

  const showTimePicker = () => {
    setShowPicker({ show: true, mode: 'time' }); // Open time picker
  };

  return (
    <View style={[commonStyles.container]}>
      <BackHeader title={'Schedule Appointment'} />
      <View style={styles.container}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.name}</Text>
        <Text style={[styles.text, { fontSize: 14, }]}>{item.designation}</Text>
        <Text style={[styles.text, styles.title]}>Schedule An Appointment</Text>

        <AuthTextinput state={name} setState={setName} placeholder="Name" />
        <AuthTextinput state={email} setState={setEmail} placeholder="Email" />
        <AuthTextinput state={phone} setState={setPhone} placeholder="Phone" />

        {/* Date Picker */}
        <View style={styles.inputContainer}>
          <TextInput placeholderTextColor={colors.light_black}
            underlineColorAndroid="transparent"
            importantForAutofill="off" value={date} style={styles.dateInput} editable={false} placeholder="Select Date" />
          <TouchableOpacity onPress={showDatePicker}>
            <Icons.Feather name="calendar" size={24} color={colors.primary} />
          </TouchableOpacity>
        </View>

        {/* Time Picker */}
        <View style={styles.inputContainer}>
          <TextInput placeholderTextColor={colors.light_black}
            underlineColorAndroid="transparent"
            importantForAutofill="off" value={time} style={styles.dateInput} editable={false} placeholder="Select Time" />
          <TouchableOpacity onPress={showTimePicker}>
            <Icons.Ionicons name="time-outline" size={24} color={colors.primary} />
          </TouchableOpacity>
        </View>

        <PrimaryButton
          title="Book Now"
          onPress={() => console.log('Emergency book appointment', { name, phone, email, date, time })}
        />

        {/* Render DateTimePicker when needed */}
        {showPicker.show && (
          <DateTimePicker
            value={new Date()}
            mode={showPicker.mode}
            display="default"
            onChange={onChange}
            minimumDate={new Date()} // Disable past dates
          />
        )}
      </View>
    </View>
  );
};

export default ScheduleAppointment;

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    flex: 1,
    backgroundColor: 'transparent'
  },
  image: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
    borderRadius: 999,
    alignSelf: 'center',
    marginBottom: 15,
    marginTop: 10
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.bold,
    textAlign: 'center',
    color: colors.black,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingLeft: 8,
    paddingRight: 16,
    marginBottom: 15,
  },
  dateInput: {
    flex: 1,
    padding: 10,
    fontFamily: fonts.normal,
    fontSize: 14,
    color: colors.black,
  },
});
