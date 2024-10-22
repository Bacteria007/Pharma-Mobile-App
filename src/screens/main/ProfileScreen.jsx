import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import commonStyles from '../../style/commonStyles';
import { Icons } from '../../assets/icons/Icons';
import colors from '../../assets/colors/AppColors';
import fonts from '../../assets/fonts/MyFonts';
import AuthTextinput from '../../components/inputs/AuthTextinput';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import AppHeader from '../../components/headers/AppHeader';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const [name, setName] = useState('Muhammad Nasir');
  // const [name, setName] = useState('Muhammad Nasir');
  const [email, setEmail] = useState('nasir@gmail.com');
  const navigation = useNavigation()
  return (
    <View style={[commonStyles.container,]}>
      <View style={styles.header}>
        <Icons.Ionicons
          size={150}
          name={'person-circle-outline'}
          color={colors.primary}
        />
        <Text style={styles.title}>Muhammad Nasir</Text>
      </View>
      {/* <AuthTextinput state={name} placeholder="Enter Name" setState={setName} />
      <AuthTextinput
        state={email}
        placeholder="Enter Email"
        setState={setEmail}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton
          title={'Logout'}
          onPress={() => {
            console.log('logout');
          }}
        />
      </View> */}
      <View style={styles.item}>
        <View style={styles.leftView}>
          <Icons.Ionicons name="person-sharp" size={20} color={colors.primary} />
          <Text style={styles.itemTitle}>Edit Profile</Text>
        </View>
        <Pressable onPress={() => navigation.navigate('EditProfile')}>
          {/* <Text style={styles.btnTxt}>Edit</Text> */}
          <Icons.Feather name='chevron-right' size={20} color={colors.black} />
        </Pressable>
      </View>
      <View style={styles.item}>
        <View style={styles.leftView}>
          <Icons.Fontisto name="history" size={20} color={colors.primary} />
          <Text style={styles.itemTitle}>Previous Order History</Text>
        </View>
        <Pressable onPress={() => navigation.navigate('OrdersHistory')}>
          <Icons.Feather name='chevron-right' size={20} color={colors.black} />
        </Pressable>
      </View>
      <View style={styles.item}>
        <View style={styles.leftView}>
          <Icons.Fontisto name="doctor" size={20} color={colors.primary} />
          <Text style={styles.itemTitle}>Check Appointments</Text>
        </View>
        <Pressable onPress={() => navigation.navigate('Appointments')}>
          <Icons.Feather name='chevron-right' size={20} color={colors.black} />
        </Pressable>
      </View>
      <View style={styles.item}>
        <View style={styles.leftView}>
          <Icons.Fontisto name="prescription" size={20} color={colors.primary} />
          <Text style={styles.itemTitle}>Prescriptions</Text>
        </View>
        <Pressable onPress={() => navigation.navigate('AppointmentScreen')}>
          <Icons.Feather name='chevron-right' size={20} color={colors.black} />
        </Pressable>
      </View>
      <View style={styles.item}>
        <View style={styles.leftView}>
          <Icons.AntDesign name="infocirlceo" size={20} color={colors.primary} />
          <Text style={styles.itemTitle}>About</Text>
        </View>
        <Pressable onPress={() => navigation.navigate('AppointmentScreen')}>
          <Icons.Feather name='chevron-right' size={20} color={colors.black} />
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  leftView: { flexDirection: 'row', gap: 15 },
  title: {
    fontSize: 20,
    fontFamily: fonts.bold,
    color: colors.black,
  },
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 5,
  },
  item: {
    padding: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
    // backgroundColor: colors.primaryLight,
    marginBottom: 16,
    marginHorizontal: 16,
  },
  itemTitle: {
    fontSize: 16,
    color: colors.black,
    fontFamily: fonts.bold,
  },
  btnTxt: {
    fontSize: 14,
    color: colors.white,
    fontFamily: fonts.bold,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    padding: 16,
  },
});
