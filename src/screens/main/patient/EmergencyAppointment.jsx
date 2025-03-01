import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import MyImages from '../../../assets/images/MyImages';
import AuthTextinput from '../../../components/inputs/AuthTextinput';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
import commonStyles from '../../../style/commonStyles';
import fonts from '../../../assets/fonts/MyFonts';
import colors from '../../../assets/colors/AppColors';
import { Icons } from '../../../assets/icons/Icons';
import BackHeader from '../../../components/headers/BackHeader';

const EmergencyAppointment = props => {
  const { item } = props.route.params;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  console.log(name);

  return (
    <View style={[commonStyles.container]}>
      <BackHeader title={'Emergecy Appointment'} />

      <ScrollView>
        <View style={styles.container}>

          <Image source={item.image} style={styles.image} />
          <Text style={styles.text}>{item.name}</Text>
          <Text style={[styles.text, { fontSize: 14, }]}>{item.designation}</Text>
          <Text style={[styles.text, styles.title]}>
            Book Emergency Appointment
          </Text>
          <AuthTextinput state={name} setState={setName} placeholder="Name" />
          <AuthTextinput state={email} setState={setEmail} placeholder="Email" />
          <AuthTextinput state={phone} setState={setPhone} placeholder="Phone" />
          <PrimaryButton
            title={'Book Now'}
            onPress={() => console.log('Emegency book appointment')}
          />

        </View>
      </ScrollView>
    </View>
  );
};

export default EmergencyAppointment;

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    flex: 1,
    backgroundColor: 'transparent'
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
    borderRadius: 999, marginBottom: 15,
    marginTop: 10

  },
  text: {
    fontSize: 20,
    fontFamily: fonts.bold,
    textAlign: 'center',
    color: colors.black,
  },
  title: {
    fontSize: 24,
    marginVertical: 20
  },
});
