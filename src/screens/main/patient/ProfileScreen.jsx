import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import React, { useState } from 'react';
import commonStyles from '../../../style/commonStyles';
import { Icons } from '../../../assets/icons/Icons';
import colors from '../../../assets/colors/AppColors';
import fonts from '../../../assets/fonts/MyFonts';
import AuthTextinput from '../../../components/inputs/AuthTextinput';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
import AppHeader from '../../../components/headers/AppHeader';
import { useNavigation } from '@react-navigation/native';
import ProfileTextInput from '../../../components/inputs/ProfileTextInput';

const ProfileScreen = () => {
  const [name, setName] = useState('Muhammad Nasir');
  const [email, setEmail] = useState('nasir@gmail.com');
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={[commonStyles.container]}>
          <View style={styles.header}>
            <Icons.Ionicons
              size={150}
              name={'person-circle-outline'}
              color={colors.primary}
            />
            <Text style={styles.title}>Muhammad Nasir</Text>
          </View>

          <View style={{ marginHorizontal: 16 }}>
            <Text style={styles.label}>Edit Name</Text>
            <ProfileTextInput
              state={name}
              placeholder="Enter Name"
              setState={setName}
            />
            <Text style={styles.label}>Edit Email</Text>
            <ProfileTextInput
              state={email}
              placeholder="Enter Email"
              setState={setEmail}
            />
            {/* <Text style={styles.label}>Edit Password</Text>
            <ProfileTextInput
              placeholder="Enter Password"
              secureTextEntry={true}
            /> */}
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton
              title={'Logout'}
              onPress={() => {
                console.log('Logout');
              }}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ProfileScreen;

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
  label: {
    fontSize: 12,
    color: colors.black,
    fontFamily: fonts.semibold,
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row', justifyContent: 'space-between'
  }
});
