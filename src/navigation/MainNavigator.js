import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/main/patient/HomeScreen';
import DoctorScreen from '../screens/main/doctor/DoctorScreen';
import CartScreen from '../screens/main/patient/CartScreen';
import ProfileScreen from '../screens/main/patient/ProfileScreen';
import colors from '../assets/colors/AppColors';
import fonts from '../assets/fonts/MyFonts';
import {Icons} from '../assets/icons/Icons';
import {Dimensions} from 'react-native';
import DoctorHomeScreen from '../screens/main/doctor/DoctorHomeScreen';
import {useSelector} from 'react-redux';
import PatientsScreen from '../screens/main/doctor/PatientsScreen';
import AppointmentsScreen from '../screens/main/patient/AppointmentsScreen';
import Prescriptions from '../screens/main/patient/Prescriptions';
import DocAppointmentsScreen from '../screens/main/doctor/DocAppointmentsScreen';
import DoctorProfile from '../screens/main/doctor/DoctorProfile';
import PharmacistHome from '../screens/main/pharmacist/PharmacistHome';
import PharmaProfile from '../screens/main/pharmacist/PharmaProfile';
import Products from '../screens/main/pharmacist/Products';
import AdminHome from '../screens/main/admin/AdminHome';
import DocPrescriptions from '../screens/main/doctor/DocPrescriptions';
import MedicineScreen from '../screens/main/patient/MedicineScreen';
import RiderHome from '../screens/main/rider/RiderHome';
import RiderOrders from '../screens/main/rider/RiderOrders';
import RiderProfile from '../screens/main/rider/RiderProfile';
import Erro404 from '../screens/error/404';
import AllDoctors from '../screens/main/admin/AllDoctors';
import AllMedicines from '../screens/main/admin/AllMedicines';
import AllStores from '../screens/main/admin/AllStores';
import AllOrders from '../screens/main/admin/AllOrders';
import AllPatients from '../screens/main/admin/AllPatients';

const Tab = createBottomTabNavigator();
const {height} = Dimensions.get('window');
const tabHeight = height < 630 ? 60 : 70;
const tabTextSize = height < 630 ? 11 : 14;

const MainNavigator = () => {
  const role = useSelector(state => state.user.role);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: tabTextSize,
          marginBottom: 6,
          fontFamily: fonts.semibold,
        },
        tabBarStyle: {
          height: tabHeight,
          backgroundColor: colors.white,
          shadowOffset: {width: 0, height: 4},
          shadowOpacity: 0.5,
          elevation: 10,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.tab_inactive,
        tabBarIcon: ({focused}) => {
          const iconColor = focused ? colors.primary : colors.tab_inactive;
          switch (route.name) {
            case 'Home' || 'DocHome':
              return <Icons.Entypo name="home" size={20} color={iconColor} />;
            case 'Doctors':
              return (
                <Icons.FontAwesome
                  name="stethoscope"
                  size={24}
                  color={iconColor}
                />
              );
            case 'Cart':
              return (
                <Icons.MaterialCommunityIcons
                  name="cart"
                  size={21}
                  color={iconColor}
                />
              );
            case 'Prescriptions':
              return (
                <Icons.Fontisto
                  name="prescription"
                  size={21}
                  color={iconColor}
                />
              );
            case 'Patients':
              return (
                <Icons.Fontisto
                  name="bed-patient"
                  size={21}
                  color={iconColor}
                />
              );
            case 'Appointment':
              return (
                <Icons.FontAwesome5
                  name="calendar-check"
                  size={20}
                  color={iconColor}
                />
              );
            case 'Settings':
              return (
                <Icons.MaterialIcons
                  name="settings"
                  size={20}
                  color={iconColor}
                />
              );
            case 'Profile':
              return (
                <Icons.Ionicons
                  size={20}
                  name={'person-circle-outline'}
                  color={iconColor}
                />
              );
            case 'Medicines':
              return (
                <Icons.FontAwesome5
                  size={20}
                  name={'pills'}
                  color={iconColor}
                />
              );
            case 'Products' :
              return (
                <Icons.MaterialIcons
                  size={20}
                  name={'filter-list'}
                  color={iconColor}
                />
              );
            case 'Orders' :
              return (
                <Icons.MaterialIcons
                  size={20}
                  name={'filter-list'}
                  color={iconColor}
                />
              );
            case 'Stores' :
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
      {role == 'doctor' ? (
        <>
          <Tab.Screen name="Home" component={DoctorHomeScreen} />
          <Tab.Screen name="Patients" component={PatientsScreen} />
          <Tab.Screen name="Appointment" component={DocAppointmentsScreen} />
          <Tab.Screen name="Prescriptions" component={DocPrescriptions} />
        </>
      ) : role == 'patient' ? (
        <>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Doctors" component={DoctorScreen} />
          {/* <Tab.Screen name="Medicines" component={MedicineScreen} /> */}
          <Tab.Screen name="Cart" component={CartScreen} />
          <Tab.Screen name="Settings" component={ProfileScreen} />
        </>
      ) : role == 'pharmacist' ? (
        <>
          <Tab.Screen name="Home" component={PharmacistHome} />
          <Tab.Screen name="Products" component={Products} />
          <Tab.Screen name="Profile" component={PharmaProfile} />
        </>
      ) :role == 'rider' ? (
        <>
          <Tab.Screen name="Home" component={RiderHome} />
          <Tab.Screen name="Orders" component={RiderOrders} />
          <Tab.Screen name="Profile" component={RiderProfile} />
        </>
      ) :role == 'admin' ? (
        <>
          <Tab.Screen name="Home" component={AdminHome} />
          <Tab.Screen name="Orders" component={AllOrders} />
          <Tab.Screen name="Medicines" component={AllMedicines} />
          <Tab.Screen name="Prescriptions" component={Prescriptions} />
          {/* <Tab.Screen name="Patients" component={AllPatients} /> */}
        </>
      ) 
      : (
        <>
          <Tab.Screen name="Error" component={Erro404} />
        </>
      )}
    </Tab.Navigator>
  );
};

export default MainNavigator;
