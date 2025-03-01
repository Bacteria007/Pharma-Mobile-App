import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable, Alert } from 'react-native';
import colors from '../../../assets/colors/AppColors';
import { Icons } from '../../../assets/icons/Icons';
import DoctorsHeader from '../../../components/headers/DoctorsHeader';

const RiderHome = () => {
  // Define your own list of orders
  const [orders, setOrders] = useState([
    {
      id: 1,
      customerName: 'John Doe',
      deliveryAddress: '123 Main St, Springfield',
      status: 'Pending',
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      deliveryAddress: '456 Elm St, Shelbyville',
      status: 'Delivered',
    },
    {
      id: 3,
      customerName: 'Mark Johnson',
      deliveryAddress: '789 Oak St, Capital City',
      status: 'In Progress',
    },
  ]);

  // Function to change the status of an order
  const changeOrderStatus = (orderId) => {
    Alert.alert(
      'Change Order Status',
      'Select the new status for the order',
      [
        {
          text: 'Pending',
          onPress: () => updateOrderStatus(orderId, 'Pending'),
        },
        {
          text: 'In Progress',
          onPress: () => updateOrderStatus(orderId, 'In Progress'),
        },
        {
          text: 'Delivered',
          onPress: () => updateOrderStatus(orderId, 'Delivered'),
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      { cancelable: true }
    );
  };

  // Helper function to update order status
  const updateOrderStatus = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  // Render an individual order item
  const renderOrderItem = ({ item }) => {
    let statusColor;
    switch (item.status) {
      case 'Pending':
        statusColor = '#FF0000'; // Set the color for Pending to red
        break;
      case 'In Progress':
        statusColor = colors.blue; // Set the color for In Progress to blue
        break;
      case 'Delivered':
        statusColor = colors.primary; // Set the color for Delivered to green
        break;
      default:
        statusColor = colors.black; // Default color if status is unknown
    }

    return (
      <View style={styles.orderItem}>
        <Text style={styles.orderTitle}>Order ID: {item.id}</Text>
        <Text>Customer: {item.customerName}</Text>
        <Text>Delivery Address: {item.deliveryAddress}</Text>
        <Text style={[styles.orderStatus, { color: statusColor }]}>
          Status: {item.status}
        </Text>
        <Pressable
          style={styles.statusButton}
          onPress={() => changeOrderStatus(item.id)}
        >
          <Text style={styles.statusButtonText}>Change Status</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <DoctorsHeader />
      <Text
        style={[
          styles.storename,
          { paddingVertical: 20, paddingHorizontal: 16 },
        ]}
      >
        Quick Orders Statistics
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
        }}
      >
        <View style={styles.stats}>
          <Icons.MaterialCommunityIcons
            name="clipboard-text-clock"
            size={25}
            color={colors.primary}
          />
          <Text style={styles.storelocation}>Pending</Text>
          <Text style={styles.storelocation}>
            {orders.filter((order) => order.status === 'Pending').length}
          </Text>
        </View>
        <View style={styles.stats}>
          <Icons.AntDesign name="checkcircle" size={25} color={colors.primary} />
          <Text style={styles.storelocation}>In Progress</Text>
          <Text style={styles.storelocation}>
            {orders.filter((order) => order.status === 'In Progress').length}
          </Text>
        </View>
        <View style={styles.stats}>
          <Icons.MaterialCommunityIcons
            name="van-utility"
            size={25}
            color={colors.primary}
          />
          <Text style={styles.storelocation}>Delivered</Text>
          <Text style={styles.storelocation}>
            {orders.filter((order) => order.status === 'Delivered').length}
          </Text>
        </View>
      </View>

      {/* Orders List */}
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderOrderItem}
        ListEmptyComponent={<Text style={styles.emptyText}>No orders found.</Text>}
      />
    </View>
  );
};

export default RiderHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgClr,
  },
  storename: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
  },
  storelocation: {
    fontSize: 14,
    color: colors.black,
  },
  stats: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderItem: {
    backgroundColor: '#fff',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  orderTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
  },
  statusButton: {
    marginTop: 10,
    backgroundColor: colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  statusButtonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  orderStatus: {
    fontSize: 16,
    marginTop: 8,
    fontWeight: 'bold',
  },
});
