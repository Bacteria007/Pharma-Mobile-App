import { ScrollView, StyleSheet, Text, View, ImageBackground, Pressable, FlatList, Image, Alert, Button, PermissionsAndroid } from 'react-native';
import React, { useState } from 'react';
import colors from '../../../assets/colors/AppColors';
import AppHeader from '../../../components/headers/AppHeader';
import MyImages from '../../../assets/images/MyImages'; // Import your background image
import { getColmnCount, hp, wp } from '../../../helpers/common';
import { Icons } from '../../../assets/icons/Icons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ReactNativeModal from 'react-native-modal';
import fonts from '../../../assets/fonts/MyFonts';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const horizontalSpacing = 20
const HomeScreen = () => {
  const role = useSelector(state => state.user.role);
  console.log('===============', role);
  const navigation = useNavigation()
  const [search, setSearch] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // Store selected image
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const [isSellersExpanded, setSellersExpanded] = useState(false);
  const [isDoctorsExpanded, setDoctorsExpanded] = useState(false);

  const toggleSellers = () => setSellersExpanded(!isSellersExpanded);
  const toggleDoctors = () => setDoctorsExpanded(!isDoctorsExpanded);

  const sellers = [
    { id: 1, name: 'Medical City', image: MyImages.heart_logo },
    { id: 2, name: 'Pharmacy Store', image: MyImages.heart_logo },
    { id: 3, name: 'Medifix Shop', image: MyImages.heart_logo },
    { id: 4, name: 'Medical City', image: MyImages.heart_logo },
    { id: 5, name: 'Burhan Pharmacy', image: MyImages.heart_logo },
    { id: 6, name: 'Medical Store', image: MyImages.heart_logo },
    { id: 7, name: 'New Pharmacy', image: MyImages.heart_logo },
  ];
  const [medicines, setMedicines] = useState([
    { id: 1, name: 'Paracetamol', price: 5.99, image: MyImages.med2, desc: 'Used for pain relief and fever reduction.' },
    { id: 2, name: 'Ibuprofen', price: 7.49, image: MyImages.med1, desc: 'Helps reduce inflammation and relieve pain.' },
    { id: 3, name: 'Aspirin', price: 6.29, image: MyImages.med3, desc: 'Used as a blood thinner and pain reliever.' },
    { id: 4, name: 'Vitamin C', price: 8.99, image: MyImages.med1, desc: 'Boosts immune health and antioxidant levels.' },
    { id: 5, name: 'Cough Syrup', price: 12.49, image: MyImages.med2, desc: 'Relieves cough and soothes throat.' },
    { id: 6, name: 'Pain Relief', price: 9.99, image: MyImages.med3, desc: 'Effective for general pain relief.' },
  ]);
  const doctorCategories = [
    { id: 1, name: 'Lungs', image: MyImages.lungs },
    { id: 2, name: 'Cardiac', image: MyImages.cardiac },
    { id: 3, name: 'Diabetes', image: MyImages.diabates },
    { id: 4, name: 'Digestive Disorder', image: MyImages.digestion },
    { id: 5, name: 'Liver', image: MyImages.liver },
    { id: 6, name: 'Bones and Joints', image: MyImages.bones },
    { id: 7, name: 'Mental illness', image: MyImages.brain },
    { id: 8, name: 'Skin and Hair', image: MyImages.hair },
    { id: 9, name: 'Teeth', image: MyImages.teeth },
    { id: 10, name: 'Psychological Disorder', image: MyImages.brain },
    { id: 11, name: 'Surgery', image: MyImages.surgery },
    { id: 12, name: 'Eye', image: MyImages.eye },
  ];
  const [sponsors, setSponsors] = useState([
    { id: 1, name: '', image: MyImages.heart_logo },
    { id: 1, name: '', image: MyImages.heart_logo },
    { id: 1, name: '', image: MyImages.heart_logo },
  ]);

  const [doctorsByAppointments, setDoctorsByAppointments] = useState([
    { id: 1, name: 'Dilgam Mammadov', image: MyImages.d1, exp: '10 Years' },
    { id: 2, name: 'Valiyeva Elnura', image: MyImages.d2, exp: '10 Years' },
    { id: 3, name: 'Elbeyi Dashdemirli', image: MyImages.d3, exp: '10 Years' },
  ])
  const handleSearch = () => {
    console.log('Search', search);
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'This app needs access to your camera.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message: 'This app needs access to your storage.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const handleImagePick = async (type) => {
    const hasCameraPermission = await requestCameraPermission();
    const hasStoragePermission = await requestStoragePermission();

    if (!hasCameraPermission || !hasStoragePermission) {
      Alert.alert('Permission Denied', 'Camera or Storage permission is required.');
      return;
    }
    hideModal()
    const options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 0.5,
    };

    if (type === 'camera') {
      launchCamera(options, (response) => {
        if (response.didCancel) {
          // Alert.alert('Image Cancelled');

        } else if (response.errorCode) {
          Alert.alert('Error', response.errorMessage);
        } else {
          setSelectedImage(response.assets[0].uri);
          hideModal();
        }
      });
    } else {
      launchImageLibrary(options, (response) => {
        if (response.didCancel) {
          // Alert.alert('Cancelled');
        } else if (response.errorCode) {
          Alert.alert('Error', response.errorMessage);
        } else {
          setSelectedImage(response.assets[0].uri);
          hideModal();
        }
      });
    }
  };

  const handleSendPrescription = () => {
    Alert.alert(
      'Prescription Sent',
      'Your prescription has been sent to the store.',
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('PatientScreens', { screen: 'PCheckout', })
        },
      ],
      { cancelable: false }
    ); setSelectedImage(null); // Clear the image after sending
    hideModal();
  };

  const renderSellers = ({ item, index }) => {
    return (
      <Pressable style={styles.itemContainer}
        onPress={() =>
          navigation.navigate('PatientScreens', { screen: 'MedicineDetails', params: { medicine:item } })
          //  navigation.navigate('PatientScreens', { screen: 'StoreDetails', params: { item: item } })
        }
      >
        <View style={styles.itemImageContainer}>
          <Image source={item.image} style={styles.sellerImage} />
        </View>
        <Text style={styles.itemText}>{item.name}</Text>
      </Pressable>
    )
  }
  const renderDoctors = ({ item, index }) => {
    return (
      <Pressable style={styles.itemContainer}
        onPress={() => navigation.navigate('PatientScreens', { screen: 'DoctorDetails', params: { item: item } })}
      >
        <View style={styles.itemImageContainer}>
          <Image source={item.image} style={styles.sellerImage} />
        </View>
        <Text style={styles.itemText}>{item.name}</Text>
      </Pressable>
    )
  }
  const renderAppointmnts = ({ item, index }) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.doctorImageContainer}>
          <Image source={item.image} style={styles.doctorsImage} />
        </View>
        <Text style={styles.itemText}>{item?.name}</Text>
        <Text style={styles.itemText}>{item?.exp}</Text>
      </View>
    )
  }
  return (
    <>
      <AppHeader
        state={search}
        setState={setSearch}
        searchFunc={handleSearch}
        placeholder={'Search Home'}
        navigation={navigation}
      />
      <View style={styles.container}>
        <ScrollView>
          {/* Hero Section */}
          <ImageBackground
            source={MyImages.hero} // Background image
            style={styles.heroSection}
            resizeMode="cover"
          >
            <View style={styles.heroContent}>
              <Text style={styles.heroTitle}>From Prescription to your doorstep!</Text>
              <Text style={styles.heroSubtitle}>Get the best prices on medicines, with or without a prescription, and book video appointments with trusted doctors</Text>
            </View>
          </ImageBackground>
          {!selectedImage && (
            <Pressable style={styles.uploadBtn} onPress={showModal}>
              <Text style={styles.uploadTxt}>Upload Your Prescription</Text>
              <Icons.Fontisto name='prescription' color={colors.white} size={15} />
            </Pressable>
          )}
          {selectedImage && (
            <View style={{ marginTop: 20 }}>
              <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
              <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 15, paddingHorizontal: 16, marginTop: 20 }}>
                <Pressable
                  style={styles.sendButton}
                  onPress={showModal}
                >
                  <Text style={styles.sendButtonText}>Change</Text>
                </Pressable>
                <Pressable
                  style={styles.sendButton}
                  onPress={handleSendPrescription}
                >
                  <Text style={styles.sendButtonText}>Send to Store</Text>
                </Pressable>
              </View>
            </View>
          )}


          <View style={{ height: 200, justifyContent: 'space-around', alignItems: 'center', backgroundColor: colors.primaryLight, margin: horizontalSpacing }}>
            <Text style={[styles.headerText, { marginVertical: 12 }]}>Shop from our Central Store</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1, paddingHorizontal: 15 }}>
              <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <View style={{ height: 60, width: 60, backgroundColor: colors.white, borderRadius: 999, alignItems: 'center', justifyContent: 'center' }}>
                  <Image source={MyImages.heart_logo} style={styles.sellerImage} />
                </View>
                <Text style={{ color: colors.black, textAlign: 'center', fontWeight: '700', marginTop: 10 }}>Central Store</Text>
              </View>
              {/* points */}
              <View style={{ flex: 1, paddingHorizontal: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                  <View style={styles.bulletPoint} />
                  <Text style={styles.pointText}>48 hours service on all working days</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                  <View style={styles.bulletPoint} />
                  <Text style={styles.pointText}>24 hours service on Sunday</Text>
                </View>
              </View>
            </View>
            <Text style={{ color: 'red', marginVertical: 12, textAlign: 'center', fontWeight: '700' }}>Payment by card and on Return Back Policy</Text>
          </View>
          <View style={styles.listHeader}>
            <Text style={styles.headerText}>Medicines</Text>
            <Pressable onPress={() => navigation.navigate('PatientScreens', { screen: 'Medicines' })}>
              <Text style={styles.viewAllTxt}>View all{' >'}</Text>
            </Pressable>
          </View>
          <FlatList
            data={medicines.slice(0, 61)}
            numColumns={3}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderSellers}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: horizontalSpacing,
              paddingBottom: 20,
            }}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              marginVertical: 10,
            }}
          />
          <View style={styles.listHeader}>
            <Text style={styles.headerText}>Find Doctor by Specialty</Text>
            <Pressable onPress={toggleDoctors}>
              <Text style={styles.viewAllTxt}>{isDoctorsExpanded ? 'Show Less' : 'View all >'}</Text>
            </Pressable>
          </View>
          <FlatList
            data={isDoctorsExpanded ? doctorCategories : doctorCategories.slice(0, 6)}
            numColumns={3}
            // horizontal
            keyExtractor={(item) => item.id.toString()}
            // showsHorizontalScrollIndicator={false}
            renderItem={renderDoctors}
            contentContainerStyle={{
              paddingHorizontal: horizontalSpacing,
              paddingBottom: 20,
            }}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              marginVertical: 10,
            }}
          />
          {/* <View style={styles.listHeader}>
            <Text style={styles.headerText}>Get Appointments by Doctors</Text>
            <Text style={styles.viewAllTxt}>View all{' >'}</Text>
          </View>
          <FlatList
          horizontal={true}
            data={doctorsByAppointments}
            // numColumns={3}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderAppointmnts}
            contentContainerStyle={{
              paddingHorizontal: horizontalSpacing,
              paddingBottom: 20,
            }}
           
          /> */}
          {/* <View style={styles.listHeader}>
            <Text style={styles.headerText}>Our Sponsers</Text>
          </View>
          <FlatList
            data={sponsors}
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
          /> */}
        </ScrollView>
        <ReactNativeModal
          visible={isModalVisible}
          onBackButtonPress={hideModal}
          onBackdropPress={hideModal}
          style={{ margin: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Upload Prescription</Text>

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
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgClr,
  },
  heroSection: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(30), width: '100%'
  },
  heroContent: {
    backgroundColor: 'rgba(217, 217, 217, 0.7)',
    alignItems: 'center', flex: 1,
    width: '100%', justifyContent: 'center', paddingHorizontal: 10
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 8, textAlign: 'center'
  },
  heroSubtitle: {
    fontSize: 16,
    color: colors.black, textAlign: 'center'
  },
  uploadBtn: {
    backgroundColor: colors.primary,
    padding: 10, margin: horizontalSpacing, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10
  },
  uploadTxt: {
    color: colors.white, fontSize: 14, textAlign: 'center'
  },
  bulletPoint: {
    height: 8,
    width: 8,
    backgroundColor: colors.black,
    borderRadius: 4,
    marginRight: 8,
  },
  pointText: {
    fontSize: 14,
    color: colors.black,
  },
  selectedImage: {
    height: 250, width: '100%', resizeMode: 'contain'
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
    fontSize: 16, color: colors.primary, fontFamily:fonts.bold, textAlign: 'center', borderBottomWidth: 2, borderBottomColor: colors.primary, paddingBottom: 5
  },
  modalOption: {
    fontSize: 14, color: colors.black, marginBottom: 15, flexDirection: 'row', gap: 10, width: '100%', padding: 10
  },
  itemImageContainer: {
    margin: 10, padding: 10, borderRadius: 999, backgroundColor: colors.white, alignItems: 'center',elevation:2
  },
  doctorImageContainer: {
    margin: 10, borderRadius: 999, backgroundColor: colors.white, alignItems: 'center'
  },
  itemContainer: {
    justifyContent: 'center', alignItems: 'center',elevation:4
  },
  sellerImage: {
    width: 30, height: 30, borderRadius: 25, margin: 5, resizeMode: 'contain'
  },
  doctorsImage: {
    width: 55, height: 55, borderRadius: 25, resizeMode: 'contain'
  },
  listHeader: {
    flexDirection: 'row', paddingHorizontal: horizontalSpacing, width: '100%', justifyContent: 'space-between', marginVertical: 10
  },
  headerText: {
    fontSize: 14, color: colors.black, fontFamily:fonts.bold
  },
  viewAllTxt: {
    fontSize: 12, color: colors.light_black, fontFamily:fonts.medium
  },
  itemText: {
    fontSize: 12, color: colors.black,
  },
  previewContainer: {
    alignItems: 'center',
  },
  previewImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginVertical: 10,
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
