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

const DoctorsHeader = ({ state, setState, placeholder, searchFunc }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ marginRight: 8 }}
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
                <Icons.MaterialIcons name="menu" size={24} color={'rgba(0,0,0,0.7)'} />
            </TouchableOpacity>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={MyImages.heart_logo} style={{ height: 30, width: 30 }} />
            </View>
            <View style={{gap:5,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

            <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                <Icons.MaterialCommunityIcons
                    name="bell"
                    size={20}
                    color={colors.light_black}
                    style={styles.cartIcon}
                />
            </TouchableOpacity>
            <Image source={MyImages.d1} style={{ height: 25, width: 25 }} />

            {/* <Image source={MyImages.d1} style={{ height: 25, width: 25 }} /> */}
            </View>

        </View>
    );
};

export default DoctorsHeader;

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
