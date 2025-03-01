import {
    StyleSheet,
    TextInput,
    View,
    TouchableOpacity,
    Modal,
    Text,
    Button,
    Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { Icons } from '../../assets/icons/Icons';
import fonts from '../../assets/fonts/MyFonts';
import colors from '../../assets/colors/AppColors';
import ReactNativeModal from 'react-native-modal';

const ProfileTextInput = ({ placeholder, state, setState, keyboard, style }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [inputValue, setInputValue] = useState(state); 

    const handleSave = () => {
        setState(inputValue);
        setModalVisible(false);
    };

    return (
        <View style={[styles.inputContainer, { ...style }]}>
            <TextInput
                value={state}
                onChangeText={t => setState(t.trim())}
                placeholder={placeholder}
                style={styles.inputStyle}
                keyboardType={keyboard}
                autoCapitalize="none"
                placeholderTextColor={colors.placeholder}
                underlineColorAndroid="transparent"
                importantForAutofill="off"
                editable={false}
            />
            <TouchableOpacity
                style={styles.eyeIconContainer}
                activeOpacity={0.7}
                onPress={() => setModalVisible(true)}
            >
                <Icons.MaterialCommunityIcons
                    name="pencil"
                    size={20}
                    color={colors.light_black}
                />
            </TouchableOpacity>
            <ReactNativeModal
                animationIn={'fadeIn'}
                transparent={true}
                visible={modalVisible}
                style={{ margin: 0 }}
                onRequestClose={() => setModalVisible(false)}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>{placeholder}</Text>
                        <TextInput
                            value={inputValue}
                            onChangeText={setInputValue}
                            style={styles.modalInput}
                            autoFocus={true}
                        />
                        <View style={styles.modalButtons}>
                            <Pressable onPress={() => setModalVisible(false)}>
                                <Text style={[styles.btnTxt, { color: colors.black }]}>
                                    Cancel
                                </Text>
                            </Pressable>
                            <Pressable onPress={handleSave}>
                                <Text style={[styles.btnTxt, { color: colors.primary }]}>
                                    Save
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </ReactNativeModal>
        </View>
    );
};

export default ProfileTextInput;

const styles = StyleSheet.create({
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
    },
    inputStyle: {
        flex: 1,
        padding: 10,
        fontFamily: fonts.normal,
        fontSize: 14,
        color: colors.black,
    },
    eyeIconContainer: {
        marginLeft: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContent: {
        width: '85%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontFamily: fonts.bold,
        marginBottom: 10,
    },
    modalInput: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        fontFamily: fonts.normal,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
    },
    btnTxt: {
        fontSize: 14,
        fontFamily: fonts.semibold,
    },
});