import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import colors from '../../assets/colors/AppColors'
import MyImages from '../../assets/images/MyImages'
import { wp, hp } from '../../helpers/common'
import fonts from '../../assets/fonts/MyFonts'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Welcome');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image source={MyImages.heart_logo} style={styles.logo} />
            <View style={styles.loader}>
                <ActivityIndicator size={'large'} color={colors.primary} />
                <Text style={styles.bottomLine}>Your Health Care Store</Text>
            </View>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', alignItems: 'center', backgroundColor: colors.bgClr,
    },
    logo: {
        height: hp(30),
        width: wp(100),
        resizeMode: 'center'
    },
    bottomLine: {
        fontSize: 20,
        color: colors.black,
        fontFamily: fonts.extrabold,
        fontWeight: 'bold',
    },
    loader: {
        position: 'absolute',
        bottom: hp(5),
        // left: wp(40),
        justifyContent: 'center', alignItems: 'center', alignSelf: 'center'

    }
})