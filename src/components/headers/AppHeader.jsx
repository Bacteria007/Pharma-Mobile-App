import { 
    StyleSheet, 
    TextInput, 
    View, 
    Image, 
    TouchableOpacity, 
    Pressable 
  } from 'react-native';
  import React from 'react';
  import { useNavigation, DrawerActions } from '@react-navigation/native'; // Import DrawerActions
  import MyImages from '../../assets/images/MyImages';
  import colors from '../../assets/colors/AppColors';
  import { Icons } from '../../assets/icons/Icons';
  import fonts from '../../assets/fonts/MyFonts';
  
  const AppHeader = ({ state, setState, placeholder, searchFunc }) => {
    const navigation = useNavigation(); // Access navigation
  
    return (
      <View style={styles.container}>
        {/* Drawer Button (Hamburger Icon) */}
        {/* <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())} // Open drawer
        >
          <Icons.MaterialIcons name="menu" size={24} color={colors.black} />
        </TouchableOpacity> */}
  
        {/* Logo */}
        <Image source={MyImages.heart_logo} style={styles.logo} />
  
        {/* Search Input with Icon */}
        <View style={styles.searchContainer}>
          <TextInput
            value={state}
            onChangeText={(text) => {
                setState(text); // Update the search state in CartScreen
                searchFunc(text); // Trigger search logic in CartScreen
            }}
            style={styles.textInput}
            placeholder={placeholder}
            placeholderTextColor={colors.light_black}
          />
          <Pressable
            style={styles.searchIcon}
            onPress={searchFunc}
            disabled={state == '' ? true : false}
          >
            <Icons.Fontisto
              name="search"
              size={15}
              color={state == '' ? colors.light_black : colors.black}
            />
          </Pressable>
        </View>
  
        {/* Notification Icon */}
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Icons.MaterialCommunityIcons
            name="bell"
            size={20}
            color={colors.light_black}
            style={styles.cartIcon}
          />
        </TouchableOpacity>
      </View>
    );
  };
  
  export default AppHeader;
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      backgroundColor: colors.bgClr,
    },
    logo: {
      width: 30,
      height: 30,
      resizeMode: 'contain',
      marginHorizontal: 10,
    },
    searchContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.white,
      borderRadius: 8,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    textInput: {
      flex: 1,
      fontSize: 14,
      padding: 5,
      fontFamily: fonts.medium,
    },
    searchIcon: {
      marginLeft: 5,
    },
    cartIcon: {
      marginLeft: 10,
    },
  });
  