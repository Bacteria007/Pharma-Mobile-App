import React, { useState } from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    Text,
    Image,
    Platform,
    Pressable,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'; // Import DateTimePicker
import AuthTextinput from '../../../components/inputs/AuthTextinput';
import BackHeader from '../../../components/headers/BackHeader';
import commonStyles from '../../../style/commonStyles';
import MyImages from '../../../assets/images/MyImages';
import colors from '../../../assets/colors/AppColors';
import fonts from '../../../assets/fonts/MyFonts';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
import { Icons } from '../../../assets/icons/Icons';

const CheckoutPrescription = () => {
    // Create all necessary states
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [cardNo, setCardNo] = useState('');
    const [cardName, setCardName] = useState('');
    const [cvv, setCvv] = useState('');
    const [expiryDate, setExpiryDate] = useState(new Date()); // State for expiry date
    const [showDatePicker, setShowDatePicker] = useState(false); // Control Date Picker visibility

    const onDateChange = (event, selectedDate) => {
        setShowDatePicker(Platform.OS == 'ios'); // Keep open on iOS until user selects
        if (selectedDate) setExpiryDate(selectedDate); // Update expiry date
    };

    const formatDate = (date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
        const year = date.getFullYear();
        return `${day}/${month}/${year}`; // Show day, month, and year
    };

    return (
        <View style={[commonStyles.container]}>
            <BackHeader title="Checkout" />
            <ScrollView>
                <View style={styles.container}>
                    {/* Card Summary */}
                    <View style={styles.summary}>
                        <View style={styles.logoContainer}>
                            <Image source={MyImages.heart_logo} style={styles.logoImage} />
                            <Text style={styles.storeName}>Medical City</Text>
                        </View>
                        <View style={styles.priceContainer}>
                            <Text style={styles.priceText}>Total Price</Text>
                            <Text style={styles.priceText}>120 AZN</Text>
                        </View>
                    </View>
                    <Text style={styles.headingTxt}>Personal Details</Text>

                    {/* Input Fields */}
                    <AuthTextinput state={name} setState={setName} placeholder="Name" />
                    <AuthTextinput
                        state={email}
                        setState={setEmail}
                        placeholder="Email"
                    />
                    <AuthTextinput
                        state={phone}
                        setState={setPhone}
                        placeholder="Phone"
                    />
                    <AuthTextinput
                        state={address}
                        setState={setAddress}
                        placeholder="Address"
                    />

                    <View style={styles.row}>
                        <AuthTextinput
                            state={city}
                            setState={setCity}
                            placeholder="City"
                            style={styles.input}
                        />
                        <AuthTextinput
                            state={state}
                            setState={setState}
                            placeholder="State"
                            style={styles.input}
                        />
                    </View>

                    <AuthTextinput
                        state={zipCode}
                        setState={setZipCode}
                        placeholder="Zip Code"
                    />
                    <Text style={styles.headingTxt}>Card Details</Text>
                    <AuthTextinput
                        state={cardNo}
                        setState={setCardNo}
                        placeholder="Card No"
                        keyboardType="number-pad"
                    />

                    {/* Expiry Date Picker */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.dateText}>{formatDate(expiryDate)}</Text>
                        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                            <Icons.Feather name="calendar" size={24} color={colors.primary} />
                        </TouchableOpacity>
                    </View>
                    {showDatePicker && (
                        <DateTimePicker
                            value={expiryDate}
                            mode="date"
                            display="default"
                            onChange={onDateChange}
                            minimumDate={new Date()} // Prevent past dates
                        />
                    )}

                    <AuthTextinput
                        state={cardName}
                        setState={setCardName}
                        placeholder="Name on Card"
                    />
                    <AuthTextinput
                        state={cvv}
                        setState={setCvv}
                        placeholder="CVV"
                        keyboardType="number-pad"
                        maxLength={3}
                    />

                    {/* Payment Logos */}
                    <View style={styles.paymentLogos}>
                        <Image source={MyImages.ion_card} style={styles.paymentIcon} />
                        <Image source={MyImages.visa} style={styles.paymentIcon} />
                        <Image source={MyImages.debit} style={styles.paymentIcon} />
                        <Image source={MyImages.jcb} style={styles.paymentIcon} />
                    </View>

                    {/* Checkout Button */}
                    <PrimaryButton
                        onPress={() => console.log('Checkout')}
                        title="Checkout"
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default CheckoutPrescription;

const styles = StyleSheet.create({
    headingTxt: { fontSize: 18, color: colors.black, fontFamily: fonts.bold, marginBottom: 15 },
    container: {
        padding: 16,
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    summary: {
        backgroundColor: colors.primaryLight,
        height: 120,
        padding: 10,
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 15,
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    storeName: {
        fontSize: 14,
        fontFamily: fonts.medium,
        color: colors.black,
    },
    priceContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    priceText: {
        fontSize: 16,
        fontFamily: fonts.bold,
        color: colors.black,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
    },
    input: {
        flex: 1,
    },

    dateText: {
        fontSize: 16,
        color: colors.black,
    },
    paymentLogos: {
        flexDirection: 'row',
        marginBottom: 15,
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 16,
    },
    paymentIcon: {
        height: 30,
        width: 30,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 10,
        paddingLeft: 8,
        paddingRight: 16,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        width: '100%',
        padding: 10,
        justifyContent: 'space-between',
    },
    dateInput: {
        flex: 1,
        padding: 10,
        fontFamily: fonts.normal,
        fontSize: 14,
        color: colors.black,
    },
});
