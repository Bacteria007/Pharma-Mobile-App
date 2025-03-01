import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
import colors from '../../../assets/colors/AppColors';
import BackHeader from '../../../components/headers/BackHeader';
import fonts from '../../../assets/fonts/MyFonts';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleChooseImage = () => {
    ImagePicker.launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setImage(response.assets[0].uri);
      }
    });
  };

  const handleAddProduct = () => {
    if (!title || !stock || !price || !image) {
      Alert.alert("Error", "Please fill in all fields and add an image.");
      return;
    }

    console.log({
      title,
      stock: parseInt(stock),
      price: parseFloat(price),
      image,
    });

    Alert.alert("Product Added", "Your product has been added successfully.");
    setTitle('');
    setStock('');
    setPrice('');
    setImage(null);
  };

  return (
    <>
      <BackHeader title={'Add Product'} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.label}>Product Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter product title"
            value={title}
            onChangeText={setTitle}
          />

          <Text style={styles.label}>Stock</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter stock quantity"
            value={stock}
            onChangeText={setStock}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Price</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter price"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />

          <TouchableOpacity onPress={handleChooseImage} style={styles.imagePicker}>
            {image ? (
              <Image source={{ uri: image }} style={styles.image} />
            ) : (
              <Text style={styles.imageText}>Select Product Image</Text>
            )}
          </TouchableOpacity>
          <PrimaryButton title="Add Product" onPress={handleAddProduct} />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    padding: 20,
    backgroundColor: colors.bgClr,
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.semibold,
    color: colors.black,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  imagePicker: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  imageText: {
    color: '#888',
  },
});

export default AddProduct;
