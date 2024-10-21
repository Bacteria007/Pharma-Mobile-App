import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import React, { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import MyImages from '../../assets/images/MyImages';
import { wp, hp } from '../../helpers/common';
import colors from '../../assets/colors/AppColors';
import fonts from '../../assets/fonts/MyFonts';

const { width } = Dimensions.get('window'); // Get screen width

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const flatListRef = useRef(null); // Create a ref for the FlatList

  // Define sections with title and image
  const sections = [
    { title: 'Upload Your Prescription, Get Medicine Fast at the Best Price!', image: MyImages.prescription },
    { title: 'Get Your Medicines at the Best Competitive Prices!', image: MyImages.medicine },
    { title: 'Book Appointments with top professional Doctors!', image: MyImages.doctor },
  ];

  const [currentSection, setCurrentSection] = useState(0);

  const nextSection = () => {
    if (currentSection === sections.length - 1) {
      navigation.navigate('Login');
    } else {
      const nextIndex = currentSection + 1;
      flatListRef.current.scrollToIndex({ index: nextIndex });
      setCurrentSection(nextIndex);
    }
  };

  const prevSection = () => {
    const prevIndex = currentSection > 0 ? currentSection - 1 : 0;
    flatListRef.current.scrollToIndex({ index: prevIndex });
    setCurrentSection(prevIndex);
  };

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentSection(viewableItems[0].index);
    }
  }).current;

  return (
    <View style={styles.container}>
      {/* FlatList to render sections */}
      <FlatList
        ref={flatListRef}
        data={sections}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        onViewableItemsChanged={onViewableItemsChanged}
        renderItem={({ item }) => (
          <View style={styles.section}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />

      {/* Buttons at the Bottom */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
        <View style={styles.pagination}>
          {sections.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentSection ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.button} onPress={nextSection}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgClr,
  },
  section: {
    width, // Full width of the screen
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: wp(95), // Responsive width
    height: hp(60), // Responsive height
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    fontFamily:fonts.semibold
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: colors.primary,
  },
  inactiveDot: {
    backgroundColor: '#ccc',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    marginBottom: 30,
  },
  button: {},
  buttonText: {
    color: colors.black,
    fontFamily:fonts.bold,
    fontWeight:'700'
  },
});
