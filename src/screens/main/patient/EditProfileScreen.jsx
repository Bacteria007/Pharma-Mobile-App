import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import commonStyles from '../../../style/commonStyles';
import {Icons} from '../../../assets/icons/Icons';
import colors from '../../../assets/colors/AppColors';
import fonts from '../../../assets/fonts/MyFonts';
import AuthTextinput from '../../../components/inputs/AuthTextinput';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
import AppHeader from '../../../components/headers/AppHeader';
import { useNavigation } from '@react-navigation/native';
import BackHeader from '../../../components/headers/BackHeader';

const EditProfileScreen = () => {
  const [name, setName] = useState('Muhammad Nasir');
  // const [name, setName] = useState('Muhammad Nasir');
  const [email, setEmail] = useState('nasir@gmail.com');
  const navigation=useNavigation()
  return (
    <>
    <View style={[commonStyles.container, ]}>
      <BackHeader title={'Profile'}/>
      <View style={styles.header}>
        <Icons.Ionicons
          size={150}
          name={'person-circle-outline'}
          color={colors.primary}
        />
        <Text style={styles.title}>Muhammad Nasir</Text>
      </View>
      <AuthTextinput state={name} placeholder="Enter Name" setState={setName} style={{marginHorizontal:16}}/>
      <AuthTextinput style={{marginHorizontal:16}}
        state={email}
        placeholder="Enter Email"
        setState={setEmail}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton
          title={'Edit'}
          onPress={() => {
            console.log('Edit');
          }}
        />
      </View>
      </View>
    </>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
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
    backgroundColor: colors.primaryLight,
    margin: 16,
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
