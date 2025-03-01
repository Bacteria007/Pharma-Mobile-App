import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import colors from '../../../assets/colors/AppColors';
import fonts from '../../../assets/fonts/MyFonts';
import commonStyles from '../../../style/commonStyles';
import DoctorsHeader from '../../../components/headers/DoctorsHeader';
import BackHeader from '../../../components/headers/BackHeader';

const OrderHistory = () => {
  // Sample order history data
  const orders = [
    {
      id: '1',
      product: 'Product 1',
      price: '10 AZN',
      quantity: '2',
      status: 'Delivered',
    },
    {
      id: '2',
      product: 'Product 2',
      price: '15 AZN',
      quantity: '1',
      status: 'Pending',
    },
    {
      id: '3',
      product: 'Product 3',
      price: '20 AZN',
      quantity: '3',
      status: 'Cancelled',
    },
    {
      id: '4',
      product: 'Product 4',
      price: '25 AZN',
      quantity: '1',
      status: 'Delivered',
    },
    {
      id: '5',
      product: 'Product 4',
      price: '25 AZN',
      quantity: '1',
      status: 'Delivered',
    },
    {
      id: '6',
      product: 'Product 4',
      price: '25 AZN',
      quantity: '1',
      status: 'Delivered',
    },
    {
      id: '7',
      product: 'Product 4',
      price: '25 AZN',
      quantity: '1',
      status: 'Delivered',
    },
    // Add more orders as needed
  ];

  // Function to determine the status color
  const getStatusColor = status => {
    switch (status) {
      case 'Delivered':
        return colors.primary; // Use your defined green color for delivered
      case 'Pending':
        return 'orange'; // Use your defined orange color for pending
      case 'Cancelled':
        return 'red'; // Use your defined red color for cancelled
      default:
        return colors.black; // Default color
    }
  };

  const renderOrder = ({item, index}) => {
    return (
      <View style={[styles.row, {backgroundColor:index%2==0?'rgba(0,0,0,0.05)':colors.white}]}>
        <Text style={styles.cell}>{item.product}</Text>
        <Text style={styles.cell}>{item.price}</Text>
        <Text style={styles.cell}>{item.quantity}</Text>
        <Text style={[styles.cell, {color: getStatusColor(item.status)}]}>
          {item.status}
        </Text>
      </View>
    );
  };
  return (
    <>
      <BackHeader title={'Oorders'} />
      <View style={[commonStyles.container, {paddingHorizontal: 16}]}>
        <Text style={styles.title}>Medical City</Text>
        {/* Table Header */}
        <View
          style={{
            padding: 16,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.primaryLight,
            marginBottom: 15,
          }}>
          <Text style={styles.headerText}>Order History</Text>
        </View>
        <View style={[styles.row, styles.headerRow]}>
          <Text style={[styles.cell, styles.headerText]}>Product</Text>
          <Text style={[styles.cell, styles.headerText]}>Price</Text>
          <Text style={[styles.cell, styles.headerText]}>Quantity</Text>
          <Text style={[styles.cell, styles.headerText]}>Status</Text>
        </View>

        {/* Order List */}
        <FlatList
          data={orders}
          keyExtractor={item => item.id}
          renderItem={renderOrder}
          contentContainerStyle={styles.list}
        />
      </View>
    </>
  );
};

export default OrderHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.bold,
    color: colors.black,
    marginVertical: 30,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 16,
  },
  headerRow: {
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
  },
  headerText: {
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center', // Center items vertically
  },
  cell: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: fonts.medium,
    color: colors.black,
  },
});
