import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, ScrollView, ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Rating } from 'react-native-ratings'; // Import Rating component
import colors from '../../../assets/colors/AppColors';
import fonts from '../../../assets/fonts/MyFonts';
import MyImages from '../../../assets/images/MyImages'; // Replace with your asset paths
import BackHeader from '../../../components/headers/BackHeader';
import ProfileTextInput from '../../../components/inputs/ProfileTextInput';
import { useNavigation } from '@react-navigation/native';
import PrimaryButton from '../../../components/buttons/PrimaryButton';

const commentsData = [
  {
    id: '1',
    patientName: 'Alice Johnson',
    comment: 'Great doctor! Very professional.',
    rating: 5,
    patientImage: MyImages.patient1, // Replace with your image path
  },
  {
    id: '2',
    patientName: 'Mark Robinson',
    comment: 'Helped me recover fast.',
    rating: 4,
    patientImage: '', // No image
  },
  {
    id: '3',
    patientName: 'Jane Smith',
    comment: 'Highly recommended.',
    rating: 5,
    patientImage: MyImages.patient2,
  },
];

const DoctorProfile = () => {
  const averageRating =
    commentsData.reduce((acc, comment) => acc + comment.rating, 0) /
    commentsData.length;
    const [name, setName] = useState('Muhammad Nasir');
    const [email, setEmail] = useState('nasir@gmail.com');
    const [category, setCategory] = useState('Cardiologist');
    const navigation=useNavigation()

    const handleUpdate = () => {
      ToastAndroid.show('Update successful!', ToastAndroid.SHORT);
    };
    

  return (
    <View style={styles.container}>
      {/* Doctor Header */}
      <BackHeader title={'Profile'} />
      <ScrollView>
        <View style={styles.header}>
          <Image source={MyImages.doctor} style={styles.doctorImage} />
          <Text style={styles.doctorName}>Dr. John Doe</Text>
          <Text style={styles.designation}>Cardiologist</Text>
          <View style={styles.averageRatingContainer}>
            <Rating type="star" readonly startingValue={averageRating} imageSize={20} tintColor={colors.bgClr} />
            <Text style={styles.averageRatingText}>{averageRating.toFixed(1)}</Text>
          </View>
        </View>

        <View style={{backgroundColor:colors.white,padding:16,elevation:4,marginHorizontal:16,borderRadius:8}}>
          <ProfileTextInput setState={setName} placeholder={name} state={name}/>
          <ProfileTextInput setState={setEmail} placeholder={email} state={email}/>
          <ProfileTextInput setState={setCategory} placeholder={category} state={category}/>
        <PrimaryButton title={'Update'} onPress={handleUpdate}/>
        </View>
      </ScrollView>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgClr,
  },
  header: {
    alignItems: 'center',
    paddingBottom: 15,
    paddingTop: 0,
  },
  doctorImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  doctorName: {
    fontSize: 20,
    fontFamily: fonts.bold,
    color: colors.black,
  },
  designation: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.light_black,
    marginBottom: 8,
  },
  averageRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  averageRatingText: {
    fontSize: 18,
    fontFamily: fonts.semibold,
    color: colors.black,
    marginLeft: 8,
  },
  commentsList: {
    padding: 16,
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  patientImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  commentInfo: {
    flex: 1,
  },
  patientName: {
    fontSize: 14,
    fontFamily: fonts.bold,
    color: colors.black,
  },
  commentText: {
    fontSize: 12,
    fontFamily: fonts.medium,
    color: colors.light_black,
    marginVertical: 4,
  },
  rating: {
    alignSelf: 'flex-start',
    marginTop: 4,
  },
});
