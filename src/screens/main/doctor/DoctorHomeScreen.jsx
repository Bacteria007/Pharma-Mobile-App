import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Pressable, FlatList, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DoctorsHeader from '../../../components/headers/DoctorsHeader';
import colors from '../../../assets/colors/AppColors';
import fonts from '../../../assets/fonts/MyFonts';
import { Icons } from '../../../assets/icons/Icons';
import MyImages from '../../../assets/images/MyImages';

const { width } = Dimensions.get('window');

const DoctorHomeScreen = () => {
    const [appointments, setAppointments] = useState([
        { id: 1, patient: 'Alice Johnson', date: '2024-10-20', time: '10:00 AM', image: MyImages.d1 },
        { id: 2, patient: 'Mark Robinson', date: '2024-10-22', time: '02:00 PM', image: MyImages.d2 },
    ]);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);
    const [mode, setMode] = useState('date');

    const onDateChange = (event, selectedValue) => {
        // if(event.nativeEvent.type == 'set'){
        if (selectedValue) {
            if (mode === 'date') {
                // Set date and switch to time picker
                const updatedAppointments = appointments.map((appointment) =>
                    appointment.id === selectedAppointmentId
                        ? { ...appointment, date: selectedValue.toISOString().split('T')[0] }
                        : appointment
                );
                setAppointments(updatedAppointments);
                setMode('time'); // Switch to time mode
                setShowDatePicker(true); // Show picker again for time
            } else {
                // Update time and close picker
                const updatedAppointments = appointments.map((appointment) =>
                    appointment.id === selectedAppointmentId
                        ? { ...appointment, time: selectedValue.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
                        : appointment
                );
                setAppointments(updatedAppointments);
                setSelectedAppointmentId(null);
                setShowDatePicker(false); // Close the picker after selecting time
                setMode('date'); // Reset to date mode for the next usage
            }
        } else {
            setShowDatePicker(false); // Close picker if no value selected
            setMode('date'); // Reset to date mode
        // }
    }
    };
    

    const showDatePickerForAppointment = (appointmentId) => {
        setSelectedAppointmentId(appointmentId);
        setShowDatePicker(true);
        setMode('date');
    };

    const renderAppointment = ({ item }) => (
        <View style={styles.appointmentContainer}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.date}>Time: {item.time}</Text>
                <Text style={styles.title}>{item.patient}</Text>
                {/* <Text style={styles.date}>Date: {item.date}</Text> */}
                {/* <View style={styles.iconRow}>
                    <Pressable style={styles.iconButton}>
                        <Icons.MaterialCommunityIcons name="phone" size={20} color="black" />
                    </Pressable>
                    <Pressable style={styles.iconButton} 
                    onPress={() => showDatePickerForAppointment(item.id)}>
                        <Icons.MaterialCommunityIcons name="calendar" size={20} color="black" />
                    </Pressable>
                </View> */}
            </View>
        </View>
    );

    return (
        <>
            <DoctorsHeader />
            <View style={styles.container}>
                <View style={styles.row}>
                    <Pressable style={styles.leftBox}>
                        <Icons.MaterialCommunityIcons name="hospital-box" size={24} color="black" />
                        <Text style={styles.boxText}>Total Appointments 30</Text>
                    </Pressable>
                    <View style={styles.rightColumn}>
                        <Pressable style={styles.smallBox}>
                            <Icons.MaterialCommunityIcons name="bell-ring" size={24} color="black" />
                            <Text style={styles.boxText}>Instant Appointments{'\n'}2</Text>
                        </Pressable>
                        <Pressable style={styles.smallBox}>
                            <Icons.MaterialCommunityIcons name="calendar" size={24} color="black" />
                            <Text style={styles.boxText}>Scheduled Appointments{'\n'}10</Text>
                        </Pressable>
                    </View>
                </View>
                <Text style={{ fontSize: 14, fontFamily: fonts.bold, marginTop: 6 }}>Today Appointments</Text>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={appointments}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderAppointment}
                />
                {showDatePicker && (
                    <DateTimePicker
                        value={new Date()}
                        mode={mode}
                        display="default"
                        onChange={onDateChange}
                    />
                )}
            </View>
        </>
    );
};

export default DoctorHomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        gap: 10,
        backgroundColor: colors.bgClr,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'stretch',
    },
    leftBox: {
        width: '48%',
        backgroundColor: colors.primaryLight,
        borderRadius: 5,
        marginRight: 8,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
    },
    rightColumn: {
        flex: 1,
        justifyContent: 'space-between',
        gap: 8,
    },
    smallBox: {
        backgroundColor: colors.primaryLight,
        borderRadius: 5,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
    },
    boxText: {
        fontFamily: fonts.semibold,
        fontSize: 14,
        color: colors.black,
        textAlign: 'center',
        flexShrink: 1,
    },
    appointmentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        padding: 10,
        backgroundColor: colors.bgClr,
        borderRadius: 8,
        elevation: 2,
        marginHorizontal: 5,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    },
    info: {
        flex: 1,
    },
    date: {
        fontSize: 14,
        fontFamily: fonts.medium,
        color: colors.black,
        marginBottom: 4,
    },
    title: {
        fontSize: 14,
        fontFamily: fonts.bold,
        color: colors.black,
    },
    iconRow: {
        flexDirection: 'row',
        marginTop: 8,
    },
    iconButton: {
        marginRight: 16,
    },
});
