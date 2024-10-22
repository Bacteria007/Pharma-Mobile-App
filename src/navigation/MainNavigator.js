// src/navigation/MainNavigator.js
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/main/HomeScreen';
import DoctorScreen from '../screens/main/DoctorScreen';
import CartScreen from '../screens/main/CartScreen';
import ProfileScreen from '../screens/main/ProfileScreen';
import colors from '../assets/colors/AppColors';
import fonts from '../assets/fonts/MyFonts';
import { Icons } from '../assets/icons/Icons';
import { Dimensions } from 'react-native';

const Tab = createBottomTabNavigator();
const activeColor = colors.primary;
const inactiveColor = colors.tab_inactive;
const iconSize = 24;
const {height,width}=Dimensions.get('window')
const tabHeight=height<630?60:70
const tabTextSize=height<630?12:14
const MainNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarLabelStyle: {
        fontSize: tabTextSize,
        marginBottom: 6,
        marginTop: 0,
        fontFamily: fonts.semibold,
      },
      tabBarItemStyle: {
        backgroundColor: colors.white,
      },
      tabBarStyle: {
        height: tabHeight,
        borderTopWidth: 0,
        shadowColor: colors.black,
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        // Elevation for Android
        elevation: 10,
      },
      tabBarActiveTintColor: activeColor,
      tabBarInactiveTintColor: inactiveColor,
      tabBarHideOnKeyboard: 'true',
      tabBarPressColor: 'rgba(255,255,255,0.6)',
      tabBarIcon: ({focused}) => {
        let iconColor = focused ? activeColor : inactiveColor;
        if (route.name === 'Home') {
          return (
            <Icons.Entypo
              size={iconSize}
              name={'home'}
              color={iconColor}
            />
          );
        } else if (route.name === 'Doctors') {
          return (
            <Icons.FontAwesome
              size={iconSize}
              name={'stethoscope'}
              color={iconColor}
            />
          );
        } else if (route.name === 'Cart') {
          return (
            <Icons.MaterialCommunityIcons
              size={21}
              name={'cart'}
              color={iconColor}
            />
          );
        } else if (route.name === 'Profile') {
          return (
            <Icons.MaterialIcons
              size={21}
              name={'account-circle'}
              color={iconColor}
            />
          );
        }
      },
    })}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Doctors" component={DoctorScreen} />
    <Tab.Screen name="Cart" component={CartScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default MainNavigator;
