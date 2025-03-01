import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DoctorsHeader from '../../../components/headers/DoctorsHeader';
import colors from '../../../assets/colors/AppColors';
import MyImages from '../../../assets/images/MyImages';

const AllDoctors = () => {
  // Mock list of doctors (replace with real data if available)
  const allDoctors = Array.from({length: 50}, (_, i) => ({
    id: i + 1,
    name: `Doctor ${i + 1}`,
    designation: 'Cardiologist', // Example designation
    imageUrl:MyImages.d1, // Example placeholder image URL
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const [visibleDoctors, setVisibleDoctors] = useState([]);
  const itemsPerPage = 10;

  // Effect to set the doctors to be displayed
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setVisibleDoctors(allDoctors.slice(startIndex, endIndex));
  }, [currentPage]);

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Image source={item.imageUrl} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.designation}>{item.designation}</Text>
        <Text style={styles.id}>ID: {item.id}</Text>
      </View>
    </View>
  );

  const handleNextPage = () => {
    if (currentPage < Math.ceil(allDoctors.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
    <DoctorsHeader/>
      <View style={styles.container}>
        <FlatList
          data={visibleDoctors}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          style={styles.list}
          showsVerticalScrollIndicator={false}
        />
        <View style={styles.pagination}>
          <TouchableOpacity
            onPress={handlePrevPage}
            disabled={currentPage === 1}
            style={styles.button}>
            <Icon
              name="chevron-back-outline"
              size={24}
              color={currentPage === 1 ? '#aaa' : '#007bff'}
            />
          </TouchableOpacity>
          <Text style={styles.pageNumber}>Page {currentPage}</Text>
          <TouchableOpacity
            onPress={handleNextPage}
            disabled={
              currentPage >= Math.ceil(allDoctors.length / itemsPerPage)
            }
            style={styles.button}>
            <Icon
              name="chevron-forward-outline"
              size={24}
              color={
                currentPage >= Math.ceil(allDoctors.length / itemsPerPage)
                  ? '#aaa'
                  : '#007bff'
              }
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default AllDoctors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.bgClr,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    flexGrow: 0,
  },
  item: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  designation: {
    fontSize: 16,
    color: '#666',
  },
  id: {
    fontSize: 14,
    color: '#888',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    padding: 10,
  },
  pageNumber: {
    fontSize: 18,
  },
});
