import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import MainNavigator from './MainNavigator';
import AppointmentsScreen from '../screens/main/patient/AppointmentsScreen';
import OrderScreen from '../screens/main/patient/OrderScreen';
import AboutScreen from '../screens/main/AboutScreen';
import Prescriptions from '../screens/main/patient/Prescriptions';
import {Icons} from '../assets/icons/Icons';
import MyImages from '../assets/images/MyImages';
import colors from '../assets/colors/AppColors';
import fonts from '../assets/fonts/MyFonts';
import {wp} from '../helpers/common';
import {useSelector} from 'react-redux';
import OrderHistory from '../screens/main/pharmacist/OrderHistory';
import DoctorProfile from '../screens/main/doctor/DoctorProfile';
import AllDoctors from '../screens/main/admin/AllDoctors';
import AllStores from '../screens/main/admin/AllStores';

const Drawer = createDrawerNavigator();
const iconColor = 'rgba(0,0,0,0.6)';
const txtColor = colors.black;
const iconSize = 18;
const CustomDrawerContent = props => (
  <View style={{flex: 1, backgroundColor: colors.bgClr}}>
    <DrawerContentScrollView {...props}>
      <View style={styles.logoContainer}>
        <Image source={MyImages.heart_logo} style={styles.logo} />
        <Text style={styles.appTitle}>Pharma Care</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>

    {/* Logout Button at the Bottom */}
    <View style={styles.logoutContainer}>
      <Pressable
        style={styles.logoutButton}
        onPress={() =>
          props.navigation.reset({
            index: 0,
            routes: [{name: 'Auth', params: {screen: 'Login'}}],
          })
        }>
        <Icons.MaterialIcons name="logout" size={18} color={iconColor} />
        <Text style={styles.logoutText}>Logout</Text>
      </Pressable>
    </View>
  </View>
);

const DrawerNavigator = () => {
  const role = useSelector(state => state.user.role);
  console.log('role=====', role);

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={({route}) => ({
        drawerType: 'front',
        headerShown: false,
        drawerInactiveTintColor: '#000',
        drawerStyle: {
          width: wp(70),
        },
        drawerLabelStyle: {
          fontFamily: fonts.medium,
          fontSize: 12,
          color: colors.black,
          marginLeft: -10,
        },
        drawerIcon: ({focused}) => {
          switch (route.name) {
            case 'Home':
              return (
                <Icons.Octicons name="home" size={iconSize} color={iconColor} />
              );
            case 'Appointments':
              return (
                <Icons.MaterialIcons
                  name="event"
                  size={iconSize}
                  color={iconColor}
                />
              );
            case 'Prescriptions':
              return (
                <Icons.Fontisto
                  name="prescription"
                  size={iconSize}
                  color={iconColor}
                />
              );
            case 'Orders':
              return (
                <Icons.MaterialCommunityIcons
                  name="cart-outline"
                  size={iconSize}
                  color={iconColor}
                />
              );
            case 'Order History':
              return (
                <Icons.MaterialCommunityIcons
                  name="history"
                  size={iconSize}
                  color={iconColor}
                />
              );
            case 'About':
              return (
                <Icons.SimpleLineIcons
                  name="info"
                  size={iconSize}
                  color={iconColor}
                />
              );
            case 'Profile':
              return (
                <Icons.MaterialCommunityIcons
                  name="account-circle"
                  size={iconSize}
                  color={iconColor}
                />
              );
            case 'Doctors':
              return (
                <Icons.FontAwesome
                  name="stethoscope"
                  size={24}
                  color={iconColor}
                />
              );
            case 'Other Stores':
              return (
                <Icons.MaterialCommunityIcons
                  size={20}
                  name={'store'}
                  color={iconColor}
                />
              );
          }
        },
      })}>
      <Drawer.Screen name="Home" component={MainNavigator} />
      {role == 'patient' ? (
        <>
          <Drawer.Screen name="Appointments" component={AppointmentsScreen} />
          <Drawer.Screen name="Prescriptions" component={Prescriptions} />
          <Drawer.Screen name="Orders" component={OrderScreen} />
          <Drawer.Screen name="About" component={AboutScreen} />
        </>
      ) : role == 'pharmacist' ? (
        <>
          <Drawer.Screen name="Order History" component={OrderHistory} />
          <Drawer.Screen name="About" component={AboutScreen} />
        </>
      ) : role == 'doctor' ? (
        <>
          <Drawer.Screen name="Profile" component={DoctorProfile} />
          <Drawer.Screen name="About" component={AboutScreen} />
        </>
      ) : role == 'rider' ? (
        <>
          <Drawer.Screen name="About" component={AboutScreen} />
        </>
      ) : role == 'admin' ? (
        <>
          <Drawer.Screen name="Doctors" component={AllDoctors} />
          <Drawer.Screen name="Other Stores" component={AllStores} />
          <Drawer.Screen name="About" component={AboutScreen} />
        </>
      ) : (
        <>
          <Drawer.Screen name="About" component={AboutScreen} />
        </>
      )}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  appTitle: {
    fontFamily: fonts.semibold,
    fontSize: 16,
    marginTop: 10,
    color: colors.black,
  },
  logoutContainer: {
    // padding: 5,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  logoutText: {
    marginLeft: 8,
    fontSize: 16,
    color: txtColor,
    fontFamily: fonts.medium,
  },
});
