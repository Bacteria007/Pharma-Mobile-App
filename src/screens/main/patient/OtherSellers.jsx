import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import colors from '../../../assets/colors/AppColors'
import AppHeader from '../../../components/headers/AppHeader'
import BackHeader from '../../../components/headers/BackHeader'

const OtherSellers = () => {
    const horizontalSpacing = 20
    const navigation=useNavigation()
    const sellers = [
        { id: 1, name: 'Medical City', image: MyImages.heart_logo },
        { id: 2, name: 'Pharmacy Store', image: MyImages.heart_logo },
        { id: 3, name: 'Medifix Shop', image: MyImages.heart_logo },
        { id: 4, name: 'Medical City', image: MyImages.heart_logo },
        { id: 5, name: 'Burhan Pharmacy', image: MyImages.heart_logo },
        { id: 6, name: 'Medical Store', image: MyImages.heart_logo },
        { id: 7, name: 'New Pharmacy', image: MyImages.heart_logo },
    ];
    const [search, setSearch] = useState('');
    const [filteredItems, setFilteredItems] = useState(sellers);
    const renderSellers = ({ item, index }) => {
        return (
            <Pressable style={styles.itemContainer}
                onPress={() =>
                    navigation.navigate('PatientScreens', { screen: 'StoreDetails', params: { item: item } })
                }
            >
                <View style={styles.itemImageContainer}>
                    <Image source={item.image} style={styles.sellerImage} />
                </View>
                <Text style={styles.itemText}>{item.name}</Text>
            </Pressable>
        )
    }
    const handleSearch = (text) => {
        setSearch(text);
        if (text == '') {
            setFilteredItems(sellers);
        } else {
            const filtered = sellers.filter((item) =>
                item.name.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredItems(filtered);
        }
    };

    return (
        <View style={styles.container}>
            <BackHeader title={'Other Stores'}/>
            <FlatList
                data={filteredItems}
                numColumns={3}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderSellers}
                contentContainerStyle={{
                    paddingHorizontal: horizontalSpacing,
                    paddingBottom: 20,
                }}
                columnWrapperStyle={{
                    justifyContent: 'space-between',
                    marginVertical: 10,
                }}
            />
        </View>
    )
}

export default OtherSellers

const styles = StyleSheet.create({
    container:{
        flex:1,backgroundColor:colors.bgClr
    },
    itemImageContainer: {
        margin: 10, padding: 10, borderRadius: 999, backgroundColor: colors.white, alignItems: 'center'
    },
    sellerImage: {
        width: 30, height: 30, borderRadius: 25, margin: 5, resizeMode: 'contain'
    },
    itemContainer: {
        justifyContent: 'center', alignItems: 'center',
    },
    itemText: {
        fontSize: 12, color: colors.black,
    },
})