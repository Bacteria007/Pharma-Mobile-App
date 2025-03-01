import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import MyImages from '../../../assets/images/MyImages';
import commonStyles from '../../../style/commonStyles';
import BackHeader from '../../../components/headers/BackHeader';
import fonts from '../../../assets/fonts/MyFonts';
import colors from '../../../assets/colors/AppColors';

const OrderScreen = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      store: 'Medical City',
      price: '20 AZN',
      quantity: '1',
      date: 'September 11, 2024',
      image: MyImages.heart_logo,
    },
    {
      id: 2,
      store: 'Medical City',
      price: '30 AZN',
      quantity: '2',
      date: 'September 11, 2024',
      image: MyImages.heart_logo,
    },
    {
      id: 3,
      store: 'Medical City',
      price: '40 AZN',
      quantity: '3',
      date: 'September 11, 2024',
      image: MyImages.heart_logo,
    },
    {
      id: 3,
      store: 'Medical City',
      price: '40 AZN',
      quantity: '3',
      date: 'September 11, 2024',
      image: MyImages.heart_logo,
    },
    {
      id: 3,
      store: 'Medical City',
      price: '40 AZN',
      quantity: '3',
      date: 'September 11, 2024',
      image: MyImages.heart_logo,
    },
    {
      id: 3,
      store: 'Medical City',
      price: '40 AZN',
      quantity: '3',
      date: 'September 11, 2024',
      image: MyImages.heart_logo,
    },
    {
      id: 3,
      store: 'Medical City',
      price: '40 AZN',
      quantity: '3',
      date: 'September 11, 2024',
      image: MyImages.heart_logo,
    },
    {
      id: 3,
      store: 'Medical City',
      price: '40 AZN',
      quantity: '3',
      date: 'September 11, 2024',
      image: MyImages.heart_logo,
    },
    {
      id: 3,
      store: 'Medical City',
      price: '40 AZN',
      quantity: '3',
      date: 'September 11, 2024',
      image: MyImages.heart_logo,
    },
  ]);
  const renderAppointments = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title}>{item.store}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.price}>Price: {item.price}</Text>
            <Text style={[styles.price, { marginLeft: 20 }]}>
              Quantity: {item.quantity}
            </Text>
          </View>
          <Text style={styles.date}>Date: {item.date}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={commonStyles.container}>
      <BackHeader title={'Orders'} />
      <FlatList
        data={appointments}
        renderItem={renderAppointments}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 999,
    resizeMode: 'contain',
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: colors.white,
    padding: 10,
    elevation: 2,
    shadowColor: colors.primary,
    borderRadius: 10,
    shadowOffset: { height: 5 },
    shadowRadius: 5,
    shadowOpacity: 1
  },
  info: {
    marginLeft: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.bold,
    color: colors.black,
  },
  price: {
    fontSize: 14,
    fontFamily: fonts.medium,
    color: colors.black,
  },
  date: {
    color: colors.black,
    fontSize: 14,
    fontFamily: fonts.medium,
  },
});
