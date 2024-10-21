import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    Dimensions,
    ScrollView,
    ImageBackground
} from 'react-native';
import MyImages from '../../assets/images/MyImages'; // Import your images
import BackHeader from '../../components/headers/BackHeader';
import commonStyles from '../../style/commonStyles';
import fonts from '../../assets/fonts/MyFonts';
import colors from '../../assets/colors/AppColors';
import AppHeader from '../../components/headers/AppHeader';
import { hp } from '../../helpers/common';

const { width } = Dimensions.get('window'); // Get device width for responsive layout

const StoreDetailScreen = (props) => {
    const { item } = props.route.params
    const [medicines, setMedicines] = useState([
        { id: 1, name: 'Paracetamol', image: MyImages.med2 },
        { id: 2, name: 'Ibuprofen', image: MyImages.med1 },
        { id: 3, name: 'Aspirin', image: MyImages.med3 },
        { id: 4, name: 'Vitamin C', image: MyImages.med1 },
        { id: 5, name: 'Cough Syrup', image: MyImages.med2 },
        { id: 6, name: 'Pain Relief', image: MyImages.med3 },
    ]);
    const [search, setSearch] = useState('');
    const [filteredItems, setFilteredItems] = useState(medicines);
    const handleSearch = (text) => {
        // console.log(text);

        setSearch(text);
        if (text === '') {
            setFilteredItems(medicines); // Reset to original list when search is cleared
        } else {
            const filtered = medicines.filter((item) =>
                item.name.toLocaleLowerCase().includes(text?.toLocaleLowerCase())
            );
            // console.log(filtered);

            setFilteredItems(filtered);
        }
    };
    const renderMedicineItem = ({ item }) => (
        <View style={styles.medicineItem}>
            <Image source={item.image} style={styles.medicineImage} />
            <Text style={styles.medicineName}>{item.name}</Text>
        </View>
    );

    return (
        <>
            <View style={commonStyles.container}>
               <BackHeader title={'Store Details'}/>
                {/* <AppHeader placeholder={'Search Medicine'} state={search} setState={setSearch} searchFunc={handleSearch} /> */}
                <ScrollView>
                    {/* Hero Section */}
                    <ImageBackground
                        source={MyImages.hero} // Background image
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
                        numColumns={3} // Display items in 3 columns
                        contentContainerStyle={styles.flatListContent}
                    />
                </ScrollView>
            </View>
        </>

    );
};

export default StoreDetailScreen;

const styles = StyleSheet.create({

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    flatListContent: {
        justifyContent: 'space-between',
    },
    medicineItem: {
        // width: width / 3 - 20,
        flex: 1,
        margin: 16,
        alignItems: 'center',
        // backgroundColor: '#f9f9f9',
        padding: 10,
        borderRadius: 8,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.1,
        // shadowRadius: 2,
        // elevation: 2,
    },
    medicineImage: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
        marginBottom: 8,
    },
    medicineName: {
        fontSize: 16,
        fontFamily: fonts.bold,
        color: colors.black,
        textAlign: 'center',
    },
    heroSection: {
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(20),
        width: '100%'
    },
    heroContent: {
        backgroundColor: 'rgba(217, 217,217, 0.7)',
        alignItems: 'center', flex: 1,
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    heroTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.black,
         textAlign: 'center'
    },
});
