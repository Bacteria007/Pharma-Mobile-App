import React from 'react';
import AuthNavigator from './AuthNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainNavigator from './MainNavigator';
import NotificationScreen from '../screens/main/NotificationScreen';
import ScheduleAppointment from '../screens/main/ScheduleAppointment';
import EmergencyAppointment from '../screens/main/EmergencyAppointment';
import AppointmentsScreen from '../screens/main/AppointmentsScreen';
import EditProfileScreen from '../screens/main/EditProfileScreen';
import OrderScreen from '../screens/main/OrderScreen';
import DrawerNavigator from './DrawerNavigator';
import StoreDetailScreen from '../screens/main/StoreDetailScreen';

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
      <Stack.Screen name="MainNavigator" component={MainNavigator} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="ScheduleAppointment" component={ScheduleAppointment} />
      <Stack.Screen name="EmergencyAppointment" component={EmergencyAppointment} />
      <Stack.Screen name="Appointments" component={AppointmentsScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="OrdersHistory" component={OrderScreen} />
      <Stack.Screen name="StoreDetails" component={StoreDetailScreen} />
      <Stack.Screen name={'Menu'} component={DrawerNavigator}/>
    </Stack.Navigator>
  );
};

export default AppNavigator;
