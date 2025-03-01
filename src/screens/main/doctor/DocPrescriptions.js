  import React from 'react';
  import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
  import MyImages from '../../../assets/images/MyImages';
  import colors from '../../../assets/colors/AppColors';
  import fonts from '../../../assets/fonts/MyFonts';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import BackHeader from '../../../components/headers/BackHeader';
import AppHeader from '../../../components/headers/AppHeader';
import DoctorsHeader from '../../../components/headers/DoctorsHeader';
  
  const prescriptionsData = [
    { id: 1, disease: 'Flu', patient: 'Alice Brown', date: '2024-10-01', image: MyImages.prescription },
    { id: 2, disease: 'Cold', patient: 'Bob Green', date: '2024-10-02', image: MyImages.prescription },
    { id: 3, disease: 'Allergy', patient: 'Chris Blue', date: '2024-10-05', image: MyImages.prescription },
    { id: 4, disease: 'Asthma', patient: 'Dana Red', date: '2024-10-10', image: MyImages.prescription },
    { id: 5, disease: 'Diabetes', patient: 'Eva Yellow', date: '2024-10-10', image: MyImages.prescription },
    { id: 6, disease: 'Hypertension', patient: 'Frank Black', date: '2024-10-10', image: MyImages.prescription },
  ];
  
  const DocPrescriptions = () => {
    const navigation = useNavigation();
  
    const renderItem = ({ item }) => (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.card}
        // onPress={() =>
        //   navigation.navigate('DoctorScreens', {
        //     screen: 'PrescriptionDetails',
        //     params: { item: item },
        //   })
        // }
      >
        <Image source={item.image} style={styles.image} />
        <View style={styles.cardContent}>
          <Text style={styles.patientName}>{item.patient}</Text>
          <Text style={styles.disease}>Disease: {item.disease}</Text>
          <Text style={styles.date}>Date: {item.date}</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color="#777" />
      </TouchableOpacity>
    );
  
    return (
      <>
        <DoctorsHeader title={'All Prescriptions'} />
        <View style={styles.container}>
          <FlatList
          showsVerticalScrollIndicator={false}
            data={prescriptionsData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
        </View>
      </>
    );
  };
  
  export default DocPrescriptions;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.bgClr,
      padding: 16,
    },
    card: {
      flexDirection: 'row',
      padding: 16,
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: '#ddd',
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 8,
      marginRight: 16,
    },
    cardContent: {
      flex: 1,
    },
    patientName: {
      fontSize: 16,
      fontFamily: fonts.semibold,
      color: colors.black,
    },
    disease: {
      fontSize: 14,
      color: '#555',
      fontFamily: fonts.medium,
    },
    date: {
      fontSize: 14,
      color: '#777',
      marginVertical: 4,
      fontFamily: fonts.medium,
    },
  });
  