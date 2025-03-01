import React, { useEffect, useState } from 'react';
import {
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import MyImages from '../../../assets/images/MyImages';
import colors from '../../../assets/colors/AppColors';
import fonts from '../../../assets/fonts/MyFonts';
import AppHeader from '../../../components/headers/AppHeader';
import { Icons } from '../../../assets/icons/Icons'; // Import icons

const DELIVERY_CHARGE = 5;

const CartScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Paracetamol', quantity: 6, price: 10, image: MyImages.med2 },
    { id: 2, name: 'Ibuprofen', quantity: 4, price: 20, image: MyImages.med1 },
    { id: 3, name: 'Aspirin', quantity: 1, price: 30, image: MyImages.med3 },
    { id: 4, name: 'Aspirin', quantity: 2, price: 30, image: MyImages.med3 },
    { id: 5, name: 'Aspirin', quantity: 4, price: 30, image: MyImages.med3 },
    { id: 6, name: 'Aspirin', quantity: 3, price: 30, image: MyImages.med3 },
    { id: 7, name: 'Aspirin', quantity: 6, price: 30, image: MyImages.med3 },
  ]);
  const [filteredItems, setFilteredItems] = useState(cartItems);
  useEffect(() => {
    handleSearch(search); // Maintain search results after cart changes
  }, [cartItems]);

  const handleSearch = (text) => {
    // console.log(text);
    
    setSearch(text);
    if (text === '') {
      setFilteredItems(cartItems); // Reset to original list when search is cleared
    } else {
      const filtered = cartItems.filter((item) =>
        item.name.toLocaleLowerCase().includes(text?.toLocaleLowerCase())
      );
      // console.log(filtered);
      
      setFilteredItems(filtered);
    }
  };
  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const deleteItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItemContainer}>
      {/* Product Image and Name */}
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image source={item.image} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
      </View>

      {/* Product Info */}
      <View style={styles.productInfo}>
        <Text style={styles.productPrice}>Price: {item.price} AZN</Text>

        {/* Quantity Controls */}
        <View style={styles.quantityContainer}>
          <Text style={styles.productPrice}>Quantity</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => decreaseQuantity(item.id)}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity} pills</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => increaseQuantity(item.id)}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Delete Button */}
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteItem(item.id)}
      >
        <Icons.MaterialCommunityIcons
          name="delete-outline"
          size={24}
          color={colors.red}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <AppHeader
        state={search}
        setState={setSearch}
        searchFunc={handleSearch}
        placeholder={'Search Medicine'}
        navigation={navigation}
      />
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCartItem}
        contentContainerStyle={{ padding: 16, paddingBottom: 80 }} 
      />

      {/* Bottom Section: Price Summary and Checkout */}
      <View style={styles.bottomSection}>
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Subtotal:</Text>
          <Text style={styles.priceValue}>{calculateTotal()} AZN</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Delivery:</Text>
          <Text style={styles.priceValue}>{DELIVERY_CHARGE} AZN</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalValue}>
            {calculateTotal() + DELIVERY_CHARGE} AZN
          </Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgClr,
  },
  cartItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    position: 'relative',
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
    resizeMode: 'contain',
  },
  productInfo: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
  productPrice: {
    fontSize: 16,
    color: colors.black,
    marginVertical: 4,
    fontFamily: fonts.semibold,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  buttonText: {
    color: colors.black,
    fontSize: 24,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  bottomSection: {
    padding: 16,
    backgroundColor: colors.white,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  priceLabel: {
    fontSize: 16,
    color: colors.black,
  },
  priceValue: {
    fontSize: 16,
    color: colors.black,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  checkoutButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 12,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
