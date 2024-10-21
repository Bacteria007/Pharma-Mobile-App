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
import React, { useState } from 'react';
import colors from '../../assets/colors/AppColors';
import MyImages from '../../assets/images/MyImages';
import { hp, wp } from '../../helpers/common';
import AuthTextinput from '../../components/inputs/AuthTextinput';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import fonts from '../../assets/fonts/MyFonts';
import commonStyles from '../../style/commonStyles';

const SignupScreen = () => {
  const navigation = useNavigation()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = () => {
    console.log('login');

    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });

  }
  const handleSignup = () => {
    console.log('signup click');
  }
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
              <View style={styles.bottomContainer}>
                <PrimaryButton title={'Sign Up'} onPress={handleSignup} />
                <Text style={styles.loginLink}>If do not have an account ? <Text style={styles.loginLinkBold} onPress={handleLogin}>Log In</Text></Text>
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
    // alignSelf: 'center',
    justifyContent: 'center', width: '100%'
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
    fontWeight: 'bold'
  },
  loginLink: {
    color: colors.black,
    fontSize: 14,
    fontFamily: fonts.normal,
    textAlign: 'center', marginTop: 20
  }
});
