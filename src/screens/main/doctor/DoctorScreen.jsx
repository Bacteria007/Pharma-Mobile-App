import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet, FlatList } from 'react-native';
import MyImages from '../../../assets/images/MyImages';
import colors from '../../../assets/colors/AppColors';
import { Rating } from 'react-native-ratings';
import commonStyles from '../../../style/commonStyles';
import fonts from '../../../assets/fonts/MyFonts';
import AppHeader from '../../../components/headers/AppHeader';
import { useNavigation } from '@react-navigation/native';

const horizontalSpacing = 20

const DoctorScreen = () => {
  const navigation = useNavigation()
  const [searchDoctor, setSearchDoctor] = useState('')
  const doctorCategories = [
    { id: 1, name: 'Lungs', image: MyImages.lungs },
    { id: 2, name: 'Cardiac', image: MyImages.cardiac },
    { id: 3, name: 'Diabetes', image: MyImages.diabates },
    { id: 4, name: 'Digestive Disorder', image: MyImages.digestion },
    { id: 5, name: 'Liver', image: MyImages.liver },
    { id: 6, name: 'Bones and Joints', image: MyImages.bones },
    { id: 7, name: 'Mental illness', image: MyImages.brain },
    { id: 8, name: 'Skin and Hair', image: MyImages.hair },
    { id: 9, name: 'Teeth', image: MyImages.teeth },
    { id: 10, name: 'Psychological Disorder', image: MyImages.brain },
    { id: 11, name: 'Surgery', image: MyImages.surgery },
    { id: 12, name: 'Eye', image: MyImages.eye },
  ];
  const renderDoctors = ({ item, index }) => {
    return (
      <Pressable style={styles.itemContainer}
        onPress={() => navigation.navigate('PatientScreens', { screen: 'DoctorDetails', params: { item: item } })}>
        <View style={styles.itemImageContainer}>
          <Image source={item.image} style={styles.sellerImage} />
        </View>
        <Text style={styles.itemText}>{item.name}</Text>
      </Pressable>
    )
  }
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: 'Dr. John',
      image: MyImages.d1,
      ratings: '4.5',
      experience: '20 years',
      description: `Dr. John is an experienced plastic surgeon specializing in reconstructive surgery. He holds memberships in various professional organizations and has authored over 17 medical publications.`,
      charges: '20AZN',
      designation: 'Plastic Surgeon',
    },
    {
      id: 2,
      name: 'Dr. Doe',
      image: MyImages.d2,
      ratings: '4.8',
      experience: '15 years',
      description: `Dr. Doe is a renowned general practitioner known for his exceptional care and dedication. He has been serving patients for over 15 years with a focus on preventive care.`,
      designation: 'Plastic Surgeon',
      charges: '30AZN',
    },
  ]);

  const renderDoctorItem = ({ item }) => (
    <View style={styles.listItem}>
      <View style={styles.listItemLeft}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.name}</Text>
        <Text style={[styles.txtSm, { fontSize: 12 }]}>{item.designation}</Text>
        <Rating
          imageSize={15}
          startingValue={parseFloat(item.ratings)}
          style={styles.rating}
          ratingBackgroundColor={colors.primaryLight}
          ratingColor={colors.primary}
          tintColor={colors.primaryLight}
          readonly={true}
        />
      </View>

      <View style={styles.listItemRight}>
        <Text style={styles.txtLg}>{item.experience} Experience</Text>
        <Text style={[styles.txtSm, { marginVertical: 10 }]}>{item.description}</Text>
        <Text style={styles.txtLg}>Consultancy Charges</Text>
        <Text style={styles.txtSm}>{item.charges} per hour</Text>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.btn}

            onPress={() => navigation.navigate('PatientScreens', { screen: 'EmergencyAppointment', params: { item: item } })}
          >
            <Text style={styles.btnTxt}>Emergency</Text>
          </Pressable>
          <Pressable style={styles.btn}
            onPress={() => navigation.navigate('PatientScreens', { screen: 'ScheduleAppointment', params: { item: item } })}
          >
            <Text style={styles.btnTxt}>Book Later</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
  const handleSearch = () => {
    console.log('searching doctors')
  }
  return (
    <View style={[commonStyles.container]}>
      <AppHeader placeholder={'Search Doctors'} state={searchDoctor} setState={setSearchDoctor} searchFunc={handleSearch} />
      {/* <FlatList
        data={doctors}
        renderItem={renderDoctorItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16 }}
      /> */}
      <FlatList
        data={doctorCategories}
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderDoctors}
        contentContainerStyle={{
          paddingHorizontal: horizontalSpacing,
          paddingBottom: 20,
        }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginVertical: 10,
        }}
      />
    </View>
  );
};

export default DoctorScreen;

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: colors.primaryLight,
    padding: 16,
    marginBottom: 10,
    flexDirection: 'row',

    alignItems: 'center',
  },
  listItemLeft: {
    alignItems: 'center',
    alignSelf: 'flex-start'
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.bold,
    color: colors.black,
    textAlign: 'center',
  },
  rating: {
    marginTop: 5,
  },
  listItemRight: {
    flex: 1,
    paddingLeft: 20,
  },
  txtLg: {
    fontSize: 16,
    fontFamily: fonts.bold,
    color: colors.black,
  },
  txtSm: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: colors.black,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 15,
    paddingTop: 10,
  },
  btn: {
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fonts.bold,
  },
  itemImageContainer: {
    margin: 10, padding: 10, borderRadius: 999, backgroundColor: colors.white, alignItems: 'center'
  },
  doctorImageContainer: {
    margin: 10, borderRadius: 999, backgroundColor: colors.white, alignItems: 'center'
  },
  itemContainer: {
    justifyContent: 'center', alignItems: 'center',
  },
  sellerImage: {
    width: 30, height: 30, borderRadius: 25, margin: 5, resizeMode: 'contain'
  },
  doctorsImage: {
    width: 55, height: 55, borderRadius: 25, resizeMode: 'contain'
  },
  itemText: {
    fontSize: 12, color: colors.black,fontFamily:fonts.medium
  },
});
