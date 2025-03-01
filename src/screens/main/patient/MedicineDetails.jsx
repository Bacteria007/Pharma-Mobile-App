import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import colors from '../../../assets/colors/AppColors';
import fonts from '../../../assets/fonts/MyFonts';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
import BackHeader from '../../../components/headers/BackHeader';

const MedicineDetails = (props) => {
    const { medicine } = props.route.params;
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => setQuantity(prevQuantity => prevQuantity + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(prevQuantity => prevQuantity - 1);
    };

    const handleAddToCart = () => {
        console.log(`Adding ${quantity} of ${medicine.name} to the cart.`);
        // Add your add-to-cart logic here
    };

    return (
        <>
            <BackHeader title={'Medicine Details'} />
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={medicine.image} style={styles.image} />
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.name}>{medicine.name}</Text>
                    <Text style={styles.price}>Price: {medicine.price.toFixed(2)} AZN</Text>
                    <Text style={styles.description}>{medicine.desc}</Text>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10,marginVertical:10}}>
                        <Text style={styles.quantityLabel}>Quantity: </Text>
                        <View style={styles.quantityContainer}>
                            <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
                                <Text style={styles.quantityButtonText}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.quantityText}>{quantity}</Text>
                            <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
                                <Text style={styles.quantityButtonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.addTocartBtn}>
                    <PrimaryButton title={'Add to Cart'} onPress={handleAddToCart} />
                </View>
            </View>
        </>

    );
};

export default MedicineDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.bgClr,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
    detailsContainer: {
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontFamily: fonts.bold,
        color: colors.black,
    },
    price: {
        fontSize: 18,
        fontFamily: fonts.medium,
        color: colors.primary,
        marginTop: 10,
    },
    description: {
        fontSize: 14,
        fontFamily: fonts.medium,
        color: colors.black,
        marginVertical: 10,
    },
    quantityLabel: {
        fontSize: 16,
        fontFamily: fonts.bold,
        color: colors.black,
        // marginTop: 20,
        // marginBottom: 5,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    quantityButton: {
        backgroundColor: colors.light_black,
        paddingHorizontal: 10,
        // paddingVertical: 5,
        borderRadius: 5,
    },
    quantityButtonText: {
        color: colors.white,
        fontSize: 18,
        fontFamily: fonts.bold,
    },
    quantityText: {
        fontSize: 18,
        fontFamily: fonts.medium,
        color: colors.black,
        marginHorizontal: 15,
    },
    addTocartBtn: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
    },
});
