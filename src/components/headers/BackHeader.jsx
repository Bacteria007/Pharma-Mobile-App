import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icons } from '../../assets/icons/Icons'
import colors from '../../assets/colors/AppColors'

const BackHeader = ({ title }) => {
    const navigation = useNavigation()
    return (
        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center',margin:16 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icons.AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default BackHeader

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        color:colors.black
    }
})