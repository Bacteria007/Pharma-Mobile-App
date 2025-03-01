import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Icons } from '../../assets/icons/Icons';
import fonts from '../../assets/fonts/MyFonts';
import colors from '../../assets/colors/AppColors';


const AuthTextinput = ({
    placeholder,
    state,
    setState,
    keyboard,
    style,
    secureTextEntry = false
}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={[styles.inputContainer, { ...style }]}>
            <TextInput
                value={state}
                onChangeText={t => setState(t.trim())}
                placeholder={placeholder}
                style={styles.inputStyle}
                keyboardType={keyboard}
                autoCapitalize="none"
                secureTextEntry={secureTextEntry && !showPassword}
                placeholderTextColor={colors.placeholder}
                underlineColorAndroid="transparent"
                importantForAutofill="off"
            />
            {secureTextEntry && (
                <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={styles.eyeIconContainer}
                >
                    <Icons.Ionicons
                        name={showPassword ? 'eye-off' : 'eye'}
                        size={24}
                        color={colors.white}
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default AuthTextinput;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 10,
        paddingLeft: 8,
        paddingRight: 16,
        marginBottom: 15,
        borderWidth:1,
        borderColor:'#ccc'
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
});