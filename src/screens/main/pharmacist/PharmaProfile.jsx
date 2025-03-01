import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, ScrollView, ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Rating } from 'react-native-ratings'; // Import Rating component
import colors from '../../../assets/colors/AppColors';
import fonts from '../../../assets/fonts/MyFonts';
import MyImages from '../../../assets/images/MyImages'; // Replace with your asset paths
import AppHeader from '../../../components/headers/AppHeader';
import DoctorsHeader from '../../../components/headers/DoctorsHeader';
import ProfileTextInput from '../../../components/inputs/ProfileTextInput';
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

const PharmaProfile = () => {
    const [name, setName] = useState('Medical Store');
    const [email, setEmail] = useState('medicalstore@gmail.com');
    const [address, setAddress] = useState('6 Istiglaliyyat Street AZ 1001 Baku')
 
    const handleUpdate = () => {
        ToastAndroid.show('Update successful!', ToastAndroid.SHORT);
    };
    return (
        <View style={styles.container}>
            <DoctorsHeader />
            <ScrollView>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={MyImages.store} style={styles.doctorImage} />
                    <View style={styles.header}>
                        <Text style={styles.doctorName}>Medical Stroe</Text>
                        <Text style={styles.designation}>Azarbaijan</Text>
                    </View>
                </View>
                <View style={{ marginHorizontal: 16, borderRadius: 8 }}>
                    <ProfileTextInput setState={setName} placeholder={name} state={name} />
                    <ProfileTextInput setState={setEmail} placeholder={email} state={email} />
                    <ProfileTextInput setState={setAddress} placeholder={address} state={address} />
                    <PrimaryButton title={'Update'} onPress={handleUpdate} />
                </View>
            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgClr,
    },
    header: {
        justifyContent: 'center',
        paddingVertical: 20,
    },
    doctorImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    doctorName: {
        fontSize: 16,
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


export default PharmaProfile

