import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import colors from '../../../assets/colors/AppColors';
import DoctorsHeader from '../../../components/headers/DoctorsHeader';

const RiderOrders = () => {
  // Sample data for orders with a date field
  const [orders, setOrders] = useState([
    {
      id: 1,
      customerName: 'John Doe',
      deliveryAddress: '123 Main St, Springfield',
      status: 'Delivered',
      date: '12-8-2024',
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      deliveryAddress: '456 Elm St, Shelbyville',
      status: 'Pending',
      date: '12-8-2024',
    },
    {
      id: 3,
      customerName: 'Mark Johnson',
      deliveryAddress: '789 Oak St, Capital City',
      status: 'In Progress',
      date: '13-8-2024',
    },
    {
      id: 4,
      customerName: 'Emily Brown',
      deliveryAddress: '101 Pine St, Greenville',
      status: 'Delivered',
      date: '13-8-2024',
    },
    {
      id: 5,
      customerName: 'Chris Evans',
      deliveryAddress: '202 Cedar St, Rivertown',
      status: 'Pending',
      date: '14-8-2024',
    },
  ]);

  // Filter orders to show only the delivered ones
  const deliveredOrders = orders.filter(order => order.status === 'Delivered');

  // Grouped data with date headers for delivered orders
  const groupedDeliveredOrders = orders.reduce((acc, order) => {
    const existingDateSection = acc.find(
      section => section.date === order.date,
    );
    if (existingDateSection) {
      existingDateSection.data.push(order);
    } else {
      acc.push({date: order.date, data: [order]});
    }
    return acc;
  }, []);

  // Flattened data to display in FlatList with sections
  const flattenedData = groupedDeliveredOrders.flatMap(section => [
    {type: 'header', date: section.date},
    ...section.data.map(item => ({...item, type: 'item'})),
  ]);

  // Render individual items or headers based on the type
  const renderOrderItem = ({item}) => {
    if (item.type === 'header') {
      return <Text style={styles.dateTitle}>Orders of {item.date}</Text>;
    }
    return (
      <View style={styles.orderItem}>
        <Text style={styles.orderTitle}>Order ID: {item.id}</Text>
        <Text>Customer: {item.customerName}</Text>
        <Text>Delivery Address: {item.deliveryAddress}</Text>
        {/* <Text style={[styles.orderStatus, getStatusStyle(item.status)]}>
          Status: {item.status}
        </Text> */}
      </View>
    );
  };

  // Dynamic color based on status
  const getStatusStyle = status => {
    switch (status) {
      case 'Pending':
        return {color: colors.red};
      case 'In Progress':
        return {color: colors.blue};
      case 'Delivered':
        return {color: colors.green};
      default:
        return {color: colors.black};
    }
  };

  return (
    <>
      <DoctorsHeader />
      <View style={styles.container}>
        <FlatList
          data={flattenedData}
          keyExtractor={item =>
            item.type === 'header' ? item.date : item.id.toString()
          }
          renderItem={renderOrderItem}
        />
      </View>
    </>
  );
};

export default RiderOrders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    backgroundColor: colors.bgClr,
  },
  dateTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 10,
    marginTop: 20,
    marginHorizontal:16,

  },
  orderItem: {
    marginHorizontal:16,
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  orderTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  orderStatus: {
    fontSize: 16,
    marginTop: 8,
    fontWeight: 'bold',
  },
});
