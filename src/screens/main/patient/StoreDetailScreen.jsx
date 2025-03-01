import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Dimensions, ScrollView, ImageBackground, TouchableOpacity, Pressable, } from 'react-native';
import MyImages from '../../../assets/images/MyImages';
import BackHeader from '../../../components/headers/BackHeader';
import commonStyles from '../../../style/commonStyles';
import fonts from '../../../assets/fonts/MyFonts';
import colors from '../../../assets/colors/AppColors';
import { hp } from '../../../helpers/common';
import { useNavigation } from '@react-navigation/native';

const StoreDetailScreen = (props) => {
    const { item } = props.route.params;
    const navigation = useNavigation()
    const [medicines, setMedicines] = useState([
        { id: 1, name: 'Paracetamol', price: 5.99, image: MyImages.med2, desc: 'Used for pain relief and fever reduction.' },
        { id: 2, name: 'Ibuprofen', price: 7.49, image: MyImages.med1, desc: 'Helps reduce inflammation and relieve pain.' },
        { id: 3, name: 'Aspirin', price: 6.29, image: MyImages.med3, desc: 'Used as a blood thinner and pain reliever.' },
        { id: 4, name: 'Vitamin C', price: 8.99, image: MyImages.med1, desc: 'Boosts immune health and antioxidant levels.' },
        { id: 5, name: 'Cough Syrup', price: 12.49, image: MyImages.med2, desc: 'Relieves cough and soothes throat.' },
        { id: 6, name: 'Pain Relief', price: 9.99, image: MyImages.med3, desc: 'Effective for general pain relief.' },
    ]);
    

    const [search, setSearch] = useState('');
    const [filteredItems, setFilteredItems] = useState(medicines);

    const handleSearch = (text) => {
        setSearch(text);
        if (text === '') {
            setFilteredItems(medicines);
        } else {
            const filtered = medicines.filter((item) =>
                item.name.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredItems(filtered);
        }
    };


    const gotoDetails = (medicine) => {
        navigation.navigate('PatientScreens', { screen: 'MedicineDetails', params: { medicine } });
    };
    
    const renderMedicineItem = ({ item }) => (
        <Pressable style={styles.medicineItem} onPress={() => gotoDetails(item)}>
            <Image source={item.image} style={styles.medicineImage} />
            <Text style={styles.medicineName}>{item.name}</Text>
            <Text style={styles.medicinePrice}>{item.price.toFixed(2)} AZN</Text>
        </Pressable>
    );
    

    return (
        <>
            <View style={commonStyles.container}>
                <BackHeader title={'Store Products'} />
                <ScrollView>
                    <ImageBackground
                        source={MyImages.hero}
                        style={styles.heroSection}
                        resizeMode="cover"
                    >
                        <View style={styles.heroContent}>
                            <Text style={styles.heroTitle}>{item.name}</Text>
                        </View>
                    </ImageBackground>
                    <FlatList
                        data={filteredItems}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderMedicineItem}
                        numColumns={2}
                        contentContainerStyle={styles.flatListContent}
                        columnWrapperStyle={{ gap: 15 }}
                    />
                </ScrollView>
            </View>
        </>
    );
};

export default StoreDetailScreen;

const styles = StyleSheet.create({
    flatListContent: {
        justifyContent: 'space-between',
        gap: 15,
        marginHorizontal: 15,
        marginTop: 20,
        marginBottom: 20,
    },
    medicineItem: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.bgClr,
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    medicineImage: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
        marginBottom: 8,
    },
    medicineName: {
        fontSize: 16,
        fontFamily: fonts.semibold,
        color: colors.black,
        textAlign: 'center',
    },
    medicinePrice: {
        fontSize: 14,
        fontFamily: fonts.medium,
        color: colors.primary,
        marginVertical: 5,
    },
    addToCartButton: {
        backgroundColor: colors.primary,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 5,
        marginTop: 10,
        // width:'100%'
    },
    addToCartButtonText: {
        color: '#fff',
        fontSize: 12,
        fontFamily: fonts.bold,
        textAlign: 'center',
    },
    heroSection: {
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(20),
        width: '100%',
    },
    heroContent: {
        backgroundColor: 'rgba(217, 217, 217, 0.7)',
        alignItems: 'center',
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    heroTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.black,
        textAlign: 'center',
    },
});
