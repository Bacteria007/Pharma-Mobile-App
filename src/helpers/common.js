import {Dimensions} from 'react-native';
const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');

export const wp = percent => {
  return (percent * deviceWidth) / 100;
};
export const hp = percent => {
  return (percent * deviceHeight) / 100;
};
export const getColmnCount = percent => {
  if (deviceWidth >= 1024) {
    return 4;
  } else if (deviceWidth >= 500) {
    return 3;
  } else {
    return 2;
  }
};

// Helper function to format date as "1 Nov 2024"
export const formatDate = dateString => {
  const [year, month, day] = dateString.split('-'); 

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const monthIndex = parseInt(month, 10) - 1; 
  const monthName = monthNames[monthIndex]; 

  return `${parseInt(day)} ${monthName} ${year}`;
};
