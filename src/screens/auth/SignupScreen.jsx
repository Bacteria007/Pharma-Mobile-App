import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import colors from '../../assets/colors/AppColors';
import MyImages from '../../assets/images/MyImages';
import { hp, wp } from '../../helpers/common';
import AuthTextinput from '../../components/inputs/AuthTextinput';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import fonts from '../../assets/fonts/MyFonts';
import commonStyles from '../../style/commonStyles';
import { setRole } from '../../reducers/userSlice'; // Import Redux action
import { useDispatch } from 'react-redux';

const SignupScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [role, setRoleState] = useState(null);
  const [open, setOpen] = useState(false); // Controls dropdown visibility
  const [roles, setRoles] = useState([
    { label: 'Patient', value: 'patient' },
    { label: 'Doctor', value: 'doctor' },
    { label: 'Pharmacist', value: 'pharmacist' },
    { label: 'Rider', value: 'rider' },
    { label: 'Admin', value: 'admin' },
  ]);

  const handleLogin = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  const handleSignup = () => {
    if (role) {
      // console.log('==sign',role);
      dispatch(setRole(role));

      // Navigate based on the selected role
      if (role === 'patient') {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Main', params: { screen: 'Home' } }],
        });
      } else if (role === 'doctor') {
        navigation.reset({
          index: 0,
          // routes: [{ name: 'UploadDoc' }],
          routes: [{ name: 'Main',params:{screen:'Home'} }], 
        });
      } 
      else if (role === 'pharmacist') {
        navigation.reset({
          index: 0,
          // routes: [{ name: 'UploadDoc' }],
          routes: [{ name: 'Main',params:{screen:'Home'} }], 
        });
      } 
      else if (role === 'rider') {
        navigation.reset({
          index: 0,
          // routes: [{ name: 'UploadDoc' }],
          routes: [{ name: 'Main',params:{screen:'Home'} }], 
        });
      } 
      else if (role === 'admin') {
        navigation.reset({
          index: 0,
          // routes: [{ name: 'UploadDoc' }],
          routes: [{ name: 'Main',params:{screen:'Home'} }], 
        });
      } 
      else {
        alert('Selected role does not have a defined screen.');
      }
    } else {
      alert('Please select a role');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {/* Logo Section */}
          <View style={styles.logoContainer}>
            <Image source={MyImages.heart_logo} style={styles.logo} />
          </View>

          {/* Input Fields with ScrollView */}
          <View style={styles.inputsContainer}>
            <ScrollView
              style={{ flex: 1 }}
              contentContainerStyle={{ paddingBottom: 20 }}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >
              <Text style={commonStyles.authtitle}>Sign Up</Text>

              <AuthTextinput state={name} placeholder="Enter Name" setState={setName} />
              <AuthTextinput state={email} placeholder="Enter Email" setState={setEmail} />
              <AuthTextinput
                state={password}
                placeholder="Enter Password"
                setState={setPassword}
                secureTextEntry={true}
              />
              <AuthTextinput
                state={confirmPassword}
                placeholder="Confirm Password"
                setState={setConfirmPassword}
              />

              {/* Role Selection with DropDownPicker */}
              <View style={styles.pickerContainer}>
                <DropDownPicker
                  open={open}
                  value={role}
                  items={roles}
                  setOpen={setOpen}
                  setValue={setRoleState}
                  setItems={setRoles}
                  style={styles.picker}
                  dropDownContainerStyle={styles.dropDownContainer}
                  placeholder="Select a role"
                  dropDownDirection='TOP'
                  placeholderStyle={{ color: colors.light_black }}
                />
              </View>

              <View style={styles.bottomContainer}>
                <PrimaryButton title={'Sign Up'} onPress={handleSignup} />
                <Text style={styles.loginLink}>
                  If you do not have an account?{' '}
                  <Text style={styles.loginLinkBold} onPress={handleLogin}>
                    Log In
                  </Text>
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgClr,
    alignItems: 'center',
  },
  bottomContainer: {
    justifyContent: 'center',
    width: '100%',
  },
  logoContainer: {
    height: hp(30),
    width: wp(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: hp(20),
    width: wp(30),
    resizeMode: 'contain',
  },
  inputsContainer: {
    width: wp(100),
    height: hp(70),
    backgroundColor: colors.primaryLight,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    flex: 1,
  },
  loginLinkBold: {
    color: colors.primary,
    fontSize: 14,
    fontFamily: fonts.extrabold,
    fontWeight: 'bold',
  },
  loginLink: {
    color: colors.black,
    fontSize: 14,
    fontFamily: fonts.normal,
    textAlign: 'center',
    marginTop: 20,
  },
  pickerContainer: {
    marginBottom: 16,
  },
  pickerLabel: {
    fontSize: 16,
    fontFamily: fonts.semibold,
    color: colors.light_black,
    marginBottom: 8,
  },
  picker: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  dropDownContainer: {
    backgroundColor: '#fff',
    borderColor: '#fff',
  },
});
