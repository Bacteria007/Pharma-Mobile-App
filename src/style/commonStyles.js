import {StyleSheet} from 'react-native';
import colors from '../assets/colors/AppColors';
import fonts from '../assets/fonts/MyFonts';

const commonStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgClr,
    flex: 1,
  },
  authtitle: {
    fontSize: 20,
    fontFamily: fonts.bold,
    color: colors.black,
    textAlign: 'center',
    marginBottom: 15,
  },
});

export default commonStyles;
