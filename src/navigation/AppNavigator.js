import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import NotificationScreen from '../screens/main/patient/NotificationScreen';
import ScheduleAppointment from '../screens/main/patient/ScheduleAppointment';
import EmergencyAppointment from '../screens/main/patient/EmergencyAppointment';
import AppointmentsScreen from '../screens/main/patient/AppointmentsScreen';
import EditProfileScreen from '../screens/main/patient/EditProfileScreen';
import OrderScreen from '../screens/main/patient/OrderScreen';
import StoreDetailScreen from '../screens/main/patient/StoreDetailScreen';
import Prescriptions from '../screens/main/patient/Prescriptions';
import DoctorsDetailScreen from '../screens/main/doctor/DoctorsDetailScreen';
import CheckoutPrescription from '../screens/main/patient/CheckoutPrescription';
import AddProduct from '../screens/main/pharmacist/AddProduct';
import MedicineDetails from '../screens/main/patient/MedicineDetails';
import MedicineScreen from '../screens/main/patient/MedicineScreen';
import OtherSellers from '../screens/main/patient/OtherSellers';
import AllPatients from '../screens/main/admin/AllPatients';

const Stack = createNativeStackNavigator();

const PatientScreens = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Notification" component={NotificationScreen} />
    <Stack.Screen name="ScheduleAppointment" component={ScheduleAppointment} />
    <Stack.Screen
      name="EmergencyAppointment"
      component={EmergencyAppointment}
    />
    <Stack.Screen name="Appointments" component={AppointmentsScreen} />
    <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    <Stack.Screen name="OrdersHistory" component={OrderScreen} />
    <Stack.Screen name="Medicines" component={MedicineScreen} />
    <Stack.Screen name="OtherSellers" component={OtherSellers} />
    <Stack.Screen name="StoreDetails" component={StoreDetailScreen} />
    <Stack.Screen name={'Menu'} component={DrawerNavigator} />
    <Stack.Screen name={'MedicineDetails'} component={MedicineDetails} />
    <Stack.Screen name={'Prescriptions'} component={Prescriptions} />
    <Stack.Screen name={'DoctorDetails'} component={DoctorsDetailScreen} />
    <Stack.Screen name={'PCheckout'} component={CheckoutPrescription} />
  </Stack.Navigator>
);
const DoctorScreens = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Notification" component={NotificationScreen} />
    <Stack.Screen name="ScheduleAppointment" component={ScheduleAppointment} />
    <Stack.Screen
      name="EmergencyAppointment"
      component={EmergencyAppointment}
    />
    <Stack.Screen name="Appointments" component={AppointmentsScreen} />
    <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    <Stack.Screen name="OrdersHistory" component={OrderScreen} />
    <Stack.Screen name="StoreDetails" component={StoreDetailScreen} />
    <Stack.Screen name={'Menu'} component={DrawerNavigator} />
    <Stack.Screen name={'Prescriptions'} component={Prescriptions} />
    <Stack.Screen name={'DoctorDetails'} component={DoctorsDetailScreen} />
    <Stack.Screen name={'PCheckout'} component={CheckoutPrescription} />
  </Stack.Navigator>
);
const PharmacistScreens = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Notification" component={NotificationScreen} />
    <Stack.Screen name="AddProduct" component={AddProduct} />
    <Stack.Screen
      name="EmergencyAppointment"
      component={EmergencyAppointment}
    />
  </Stack.Navigator>
);
const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="Main" component={DrawerNavigator} />
      <Stack.Screen name="PatientScreens" component={PatientScreens} />
      <Stack.Screen name="AllPatients" component={AllPatients} />
      <Stack.Screen name="DoctorScreens" component={DoctorScreens} />
      <Stack.Screen name="PharmacistScreens" component={PharmacistScreens} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
