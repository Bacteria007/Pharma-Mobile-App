import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainNavigator from './MainNavigator';
import AppointmentsScreen from '../screens/main/AppointmentsScreen';
import OrderScreen from '../screens/main/OrderScreen';
import AboutScreen from '../screens/main/AboutScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'slide',
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Home" component={MainNavigator}/>
      <Drawer.Screen name="Appointments" component={AppointmentsScreen} />
      <Drawer.Screen name="OrdersHistory" component={OrderScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
