import { ActivityIndicator, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import colors from '../../assets/colors/AppColors'
import MyImages from '../../assets/images/MyImages'
import fonts from '../../assets/fonts/MyFonts'

const PrimaryButton = ({ title, onPress, loader }) => {
    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.btnStyle,
                { backgroundColor: colors.primary, marginTop: 5 },
            ]}>
            {loader ? (
                // <LottieView
                //     style={{ height: 30, width: 30 }}
                //     source={MyImages.loading1}
                //     autoPlay
                //     loop={true}
                // />
                <ActivityIndicator size={'large'} color={colors.primary} />
            ) : (
                <Text style={styles.titleStle}>{title}</Text>
            )}
        </Pressable>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    btnStyle: {
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: colors.secondary,
        // marginTop: 5,
        alignItems: 'center',
     
    },
    titleStle: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 16,
        fontFamily: fonts.extrabold,
        fontWeight:'bold',
        letterSpacing:1,
        color: colors.white,
    }
})