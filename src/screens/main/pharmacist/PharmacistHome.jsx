import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyImages from '../../../assets/images/MyImages'
import commonStyles from '../../../style/commonStyles'
import fonts from '../../../assets/fonts/MyFonts'
import colors from '../../../assets/colors/AppColors'
import { Icons } from '../../../assets/icons/Icons'
import DoctorsHeader from '../../../components/headers/DoctorsHeader'
import { useNavigation } from '@react-navigation/native'

const PharmacistHome = () => {
    const navigation=useNavigation()
    const addProdcut=()=>{
        navigation.navigate('PharmacistScreens', { screen: 'AddProduct' });
    }
    return (
        <>
            <DoctorsHeader />
            <View style={[commonStyles.container, { paddingHorizontal: 16 }]}>
                <View style={{ flexDirection: 'row',marginTop:-15 }}>
                    <Image source={MyImages.store} style={styles.image} />
                    <View style={styles.textContainer}>
                        <Text style={styles.storename}>Medial City</Text>
                        <Text style={styles.storelocation}>City Housing, Gujranwala, Pakistan</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, backgroundColor: colors.primaryLight, paddingVertical: 12 }}>
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <Icons.FontAwesome5 name="clipboard-list" size={18} color={colors.primary} />
                        <Text style={styles.storelocation}>Total Orders</Text>
                    </View>
                    <Text style={styles.storelocation}>30</Text>
                </View>
                <Text style={[styles.storename, { paddingVertical: 20 }]}>Quick Orders Statistics</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={styles.stats}>
                        <Icons.MaterialCommunityIcons name="clipboard-text-clock" size={25} color={colors.primary} />
                        <Text style={styles.storelocation}>Pending</Text>
                        <Text style={styles.storelocation}>5</Text>
                    </View>
                    <View style={styles.stats}>
                        <Icons.AntDesign name="checkcircle" size={25} color={colors.primary} />
                        <Text style={styles.storelocation}>Approved</Text>
                        <Text style={styles.storelocation}>3</Text>
                    </View>
                    <View style={styles.stats}>
                        <Icons.MaterialCommunityIcons name="van-utility" size={25} color={colors.primary} />
                        <Text style={styles.storelocation}>Delivered</Text>
                        <Text style={styles.storelocation}>10</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, backgroundColor: colors.primaryLight, height: 60, alignItems: 'center', marginVertical: 20 }}>
                    <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Icons.FontAwesome5 name="history" size={28} color={colors.primary} />
                        <Text style={styles.storelocation}>Order History</Text>
                    </View>
                    <Pressable style={styles.btn} onPress={()=>navigation.navigate('Order History')}>
                        <Text style={styles.btnTxt}>View</Text>
                    </Pressable>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, backgroundColor: colors.primaryLight, height: 60, alignItems: 'center', paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Icons.MaterialIcons name="addchart" size={28} color={colors.primary} />
                        <Text style={styles.storelocation}>Add Products</Text>
                    </View>
                    <Pressable style={styles.btn} onPress={addProdcut}>
                        <Text style={styles.btnTxt}>Add</Text>
                    </Pressable>
                </View>
            </View>
        </>

    )
}

export default PharmacistHome

const styles = StyleSheet.create({
    image: {
        width: 100,
        resizeMode: 'contain'
    },
    textContainer: {
        alignItems: 'center', justifyContent: 'center'
    },

    storename: {
        fontSize: 18,
        fontFamily: fonts.bold, color: colors.black
    },
    storelocation: {
        fontSize: 14,
        fontFamily: fonts.medium, color: colors.black
    },
    stats: { justifyContent: 'center', alignItems: 'center' },
    btn: {
        backgroundColor: colors.primary, height: 30, width: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 5
    },
    btnTxt: {
        fontSize: 14,
        fontFamily: fonts.medium, color: colors.white
    },
})