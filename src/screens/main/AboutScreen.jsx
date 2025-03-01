import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import MyImages from '../../assets/images/MyImages'; // Replace with your logo if needed
import colors from '../../assets/colors/AppColors';
import fonts from '../../assets/fonts/MyFonts';
import BackHeader from '../../components/headers/BackHeader';

const AboutScreen = () => {
  return (
    <>
      <BackHeader title={'About'} />
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={MyImages.heart_logo} style={styles.logo} />
        <Text style={styles.title}>Pharma App</Text>
        <Text style={styles.version}>Version: 1.0.0</Text>

        <Text style={styles.aboutText}>
          Welcome to Pharma App! Our goal is to provide a seamless experience for managing your prescriptions,
          booking video appointments with trusted doctors, and purchasing medicines at the best prices.
          Whether you need to upload a prescription, find nearby pharmacies, or get your medicines delivered to your doorstep,
          we've got you covered.
        </Text>

        <Text style={styles.aboutText}>
          Stay updated with the latest offers and healthcare tips, all within the app. Your health and convenience
          are our top priorities. Thank you for choosing Pharma App as your healthcare companion.
        </Text>

        <Text style={styles.copyright}>© 2024 Pharma App. All rights reserved.</Text>
      </ScrollView>
    </>

  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: colors.bgClr,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 16,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.semibold,
    color: colors.primary,
    marginBottom: 8,
  },
  version: {
    fontSize: 14,
    color: '#777',
    marginBottom: 16,
  },
  aboutText: {
    fontSize: 14,
    fontFamily: fonts.medium,
    color: colors.black,
    textAlign: 'left',
    marginBottom: 16,
    lineHeight: 24,
  },
  copyright: {
    fontSize: 14,
    color: '#aaa',
    marginTop: 24,
    textAlign: 'center',
  },
});
