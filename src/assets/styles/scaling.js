import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {width, height} = Dimensions.get('window');

console.log('DeviceInfo.hasNotch(): ', DeviceInfo.hasNotch());

console.log('width: ', width);

const isSmall = width <= 375 && !DeviceInfo.hasNotch();

console.log('isSmall: ', isSmall);

const guidelineBaseWidth = () => {
  if (isSmall) {
    return 330;
  }
  return 350;
};

console.log('guidelineBaseWidth: ', guidelineBaseWidth());

console.log('width / guidelineBaseWidth(): ', width / guidelineBaseWidth());

const horizontalScale = size => (width / guidelineBaseWidth()) * size;

const guidelineBaseHeight = () => {
  if (isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
};

const verticalScale = size => (height / guidelineBaseHeight()) * size;

const guidelineBaseFonts = () => {
  if (width > 410) {
    return 430;
  }
  return 400;
};

console.log('guidelineBaseFonts: ', guidelineBaseFonts());

console.log(
  'Math.round((width / guidelineBaseFonts()) * size): ',
  Math.round((width / guidelineBaseFonts()) * 6),
);

console.log('width / guidelineBaseFonts(): ', 800 / guidelineBaseFonts());

const scaleFontSize = size => Math.round((width / guidelineBaseFonts()) * size);

export {horizontalScale, verticalScale, scaleFontSize};
