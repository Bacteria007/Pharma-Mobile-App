import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    Pressable,
    Alert,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ReactNativeModal from 'react-native-modal';
import colors from '../../assets/colors/AppColors';
import MyImages from '../../assets/images/MyImages';
import { hp, wp } from '../../helpers/common';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import fonts from '../../assets/fonts/MyFonts';
import { Icons } from '../../assets/icons/Icons';
import { useNavigation } from '@react-navigation/native';

const UploadDoc = () => {
    const navigation=useNavigation()
    const [selectedImage, setSelectedImage] = useState(null); // Store selected image
    const [isModalVisible, setModalVisible] = useState(false); // Track modal visibility

    const showModal = () => setModalVisible(true);
    const hideModal = () => setModalVisible(false);

    // Handle image selection from camera or gallery
    const handleImagePick = async (type) => {
        const options = { mediaType: 'photo', maxWidth: 300, maxHeight: 300, quality: 0.5 };

        if (type === 'camera') {
            launchCamera(options, response => {
                if (response.didCancel) return;
                if (response.errorCode) Alert.alert('Error', response.errorMessage);
                else setSelectedImage(response.assets[0].uri);
            });
        } else {
            launchImageLibrary(options, response => {
                if (response.didCancel) return;
                if (response.errorCode) Alert.alert('Error', response.errorMessage);
                else setSelectedImage(response.assets[0].uri);
            });
        }
        hideModal();
    };

    const handleSend = () => {
        Alert.alert('Document Sent', 'Your document has been sent successfully.', [
            {
                text: 'OK',
                onPress: () => {
                    setSelectedImage(null);
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Main',params:{screen:'Home'} }], // Navigate to HomeScreen
                    });
                },
            },
        ]);
    };


    return (

        <View style={styles.container}>
            {/* Logo Section */}
            <View style={styles.logoContainer}>
                <Image source={MyImages.heart_logo} style={styles.logo} />
            </View>

            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 20, width: wp(100),
                    height: hp(70),
                    backgroundColor: colors.primaryLight,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    padding: 16,
                    flex: 1,
                }}
                keyboardShouldPersistTaps="handled"
            >
                <Text style={styles.title}>Upload Document</Text>

                {/* Show uploaded image or dummy image */}
                <Image
                    source={selectedImage ? { uri: selectedImage } : MyImages.upload}
                    style={styles.uploadedImage}
                />

                <View style={styles.buttonsContainer}>
                    {selectedImage ? (
                        <>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 15, paddingHorizontal: 16, marginTop: 20 }}>
                                {/* <Pressable
                                    style={styles.sendButton}
                                    onPress={showModal}
                                >
                                    <Text style={styles.sendButtonText}>Change</Text>
                                </Pressable> */}
                                <Pressable
                                    style={styles.sendButton}
                                    onPress={()=>setSelectedImage(null)}
                                >
                                    <Text style={styles.sendButtonText}>Remove</Text>
                                </Pressable>
                                <Pressable
                                    style={styles.sendButton}
                                    onPress={handleSend}
                                >
                                    <Text style={styles.sendButtonText}>Send to Admins</Text>
                                </Pressable>
                            </View>
                        </>
                    ) : (
                        <View style={{width:'70%'}}>
                        <PrimaryButton title="Upload" onPress={showModal} />
                        </View>
                    )}
                </View>
            </ScrollView>

            {/* Image Upload Modal */}
            <ReactNativeModal
                visible={isModalVisible}
                onBackButtonPress={hideModal}
                onBackdropPress={hideModal}
                style={{ margin: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}
            >
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Upload Documents</Text>

                    <View style={styles.modalContent}>
                        <Pressable
                            style={styles.modalOption}
                            onPress={() => handleImagePick('camera')}
                        >
                            <Icons.FontAwesome name="camera" size={20} color={colors.black} />
                            <Text>Open Camera</Text>
                        </Pressable>
                        <Pressable
                            style={styles.modalOption}
                            onPress={() => handleImagePick('gallery')}
                        >
                            <Icons.Ionicons name="image" size={20} color={colors.black} />
                            <Text>Choose from Gallery</Text>
                        </Pressable>
                    </View>

                </View>
            </ReactNativeModal>
        </View>

    );
};

export default UploadDoc;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgClr,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        height: hp(30),
        width: wp(50),
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: hp(20),
        width: wp(30),
        resizeMode: 'contain',
    },
    title: {
        fontSize: 22,
        fontFamily: fonts.bold,
        color: colors.black,
        textAlign: 'center',
        marginVertical: 20,
    },
    uploadedImage: {
        width: wp(80),
        height: hp(30),
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 20,
    },
    buttonsContainer: {
        alignItems: 'center',
        marginTop: 10,
        gap: 10,
    },
    modalContainer: {
        backgroundColor: colors.white,
        margin: 20,
        borderRadius: 10,
        padding: 15
    },
    modalContent: {
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'flex-start', marginTop: 10,
    },
    modalTitle: {
        fontSize: 16, color: colors.primary, fontWeight: '700', textAlign: 'center', borderBottomWidth: 2, borderBottomColor: colors.primary, paddingBottom: 5
    },
    modalOption: {
        fontSize: 14, color: colors.black, marginBottom: 15, flexDirection: 'row', gap: 10, width: '100%', padding: 10
    },
    modalOptionText: {
        fontSize: 16,
        color: colors.black,
    },
    sendButton: {
        backgroundColor: colors.primary,
        paddingHorizontal: 10, paddingVertical: 4,
        borderRadius: 4,
    },
    sendButtonText: {
        color: colors.white,
        fontSize: 14,
        textAlign: 'center',
        fontFamily: fonts.medium
    },
});
