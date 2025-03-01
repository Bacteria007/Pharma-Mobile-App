import React from 'react';
import {StyleSheet, Text, View, FlatList, Image, Pressable,} from 'react-native';
import colors from '../../../assets/colors/AppColors';
import MyImages from '../../../assets/images/MyImages';
import fonts from '../../../assets/fonts/MyFonts';
import DoctorsHeader from '../../../components/headers/DoctorsHeader';
import { Icons } from '../../../assets/icons/Icons';
import { useNavigation } from '@react-navigation/native';

const Products = () => {
  // Sample product data
  const products = [
    {id: '1', title: 'Product 1', price: '10 AZN', stock: '20'},
    {id: '2', title: 'Product 2', price: '15 AZN', stock: '30'},
    {id: '3', title: 'Product 3', price: '20 AZN', stock: '15'},
    {id: '4', title: 'Product 4', price: '25 AZN', stock: '10'},
    // Add more products as needed
  ];
  const navigation=useNavigation()
  const addProdcut=()=>{
    navigation.navigate('PharmacistScreens', { screen: 'AddProduct' });
}
  const renderProduct = ({item}) => (
    <View style={styles.row}>
      <View style={styles.productContainer}>
        <Image source={MyImages.med1} style={styles.productImage} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <Text style={styles.cell}>{item.price}</Text>
      <Text style={styles.cell}>{item.stock}</Text>
      <Pressable style={styles.editBtn}>
       <Icons.MaterialCommunityIcons name="pencil-box" size={20} color={colors.black}/>
      </Pressable>
    </View>
  );

  return (
    <>
      <DoctorsHeader />
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            backgroundColor: colors.primaryLight,
            height: 60,
            alignItems: 'center',
            paddingVertical: 15,
            marginBottom: 20
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icons.MaterialIcons
              name="addchart"
              size={28}
              color={colors.primary}
            />
            <Text style={styles.storelocation}>Add Products</Text>
          </View>
          <Pressable style={styles.btn} onPress={addProdcut}>
            <Text style={styles.btnTxt}>Add</Text>
          </Pressable>
        </View>
        {/* Table Header */}
        <View style={[styles.row, styles.headerRow]}>
          <Text style={[styles.cell, styles.headerText]}>Product</Text>
          <Text style={[styles.cell, styles.headerText]}>Price</Text>
          <Text style={[styles.cell, styles.headerText]}>Stock</Text>
          <Text style={[styles.cell, styles.headerText]}>Actions</Text>
        </View>

        {/* Product List */}
        <FlatList
          data={products}
          keyExtractor={item => item.id}
          renderItem={renderProduct}
          contentContainerStyle={styles.list}
        />
      </View>
    </>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  list: {
    paddingBottom: 16,
  },
  headerRow: {
    backgroundColor: colors.primaryLight,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontWeight: 'bold',
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center', // Center items vertically
  },
  productContainer: {
    flexDirection: 'column', // Stack image and title vertically
    alignItems: 'center', // Center align content
    flex: 1, // Ensure it takes the same space as other cells
  },
  productImage: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  cell: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: fonts.medium,
    color: colors.black,
    textAlignVertical: 'center',
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.semibold,
    color: colors.black,
  },
  storelocation: {
    fontSize: 14,
    fontFamily: fonts.medium, 
    color: colors.black
  },
  stats: { justifyContent: 'center', alignItems: 'center' },
  btn: {
    backgroundColor: colors.primary, 
    height: 30, 
    width: 60, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 5
  },
  btnTxt: {
    fontSize: 14,
    fontFamily: fonts.medium, 
    color: colors.white
  },
  editBtn: {
    // backgroundColor: colors.primary, // You can choose a different color for the edit button
    height: 30,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 10, // Spacing between stock and button
  },
});
