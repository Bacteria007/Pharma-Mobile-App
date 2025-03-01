import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../assets/colors/AppColors'
import commonStyles from '../../style/commonStyles'
import MyImages from '../../assets/images/MyImages'

const DocApprovalPending = () => {
    return (
        <View style={styles.container}>
            {/* Logo Section */}
            <View style={styles.logoContainer}>
                <Image source={MyImages.heart_logo} style={styles.logo} />
            </View>

            <View style={styles.inputsContainer}>
                <ScrollView
                    style={{ flex: 1 }}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={commonStyles.authtitle}>Your Registration is Pending for Approval</Text>
                    <Text style={commonStyles.authtitle}>The professionals wil review the information after which they will deny or approve your registration request</Text>
                    <Image source={MyImages.pending} style={styles.logo} />
                </ScrollView>
            </View>
        </View>
    )
}

export default DocApprovalPending

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgClr,
        alignItems: 'center',
    },
    bottomContainer: {
        justifyContent: 'center',
        width: '60%',
        alignItems: 'center',
        alignSelf: 'center'
    },
    logoContainer: {
        height: hp(30),
        width: wp(50),
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: hp(20),
        width: wp(30),
        resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center'
    },
    inputsContainer: {
        width: wp(100),
        height: hp(70),
        backgroundColor: colors.primaryLight,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 16,
        flex: 1,
        justifyContent: 'center',
    },
})