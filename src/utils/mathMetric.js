import { Dimensions, PixelRatio } from 'react-native';
import { StyleSheet as RNStyleSheet, Platform } from 'react-native';

const { width: W, height: H } = Dimensions.get('screen');
const pixelDensity = PixelRatio.get();

const metricsNumber = () => {
  const density = pixelDensity * 160;
  const x = Math.pow((W * pixelDensity) / density, 2);
  const y = Math.pow((H * pixelDensity) / density, 2);
  const screenInches = Math.sqrt(x + y) + 1.6;

  return screenInches;
};

const objectMap = (object, mapFn) => {
  return Object.keys(object).reduce((result, key) => {
    result[key] = mapFn(object[key]);
    return result;
  }, {});
};

const objectMap2 = (object, overload) => {
  return Object.keys(object).reduce((result, key) => {
    if (typeof object[key] === 'number') {
      if (
        key.includes('flex') ||
        key.includes('opacity') ||
        key.includes('elevation')
      ) {
        result[key] = object[key];
      } else {
        result[key] = scale(object[key]);
      }
    } else {
      result[key] = object[key];
    }

    return { ...overload, ...result };
  }, {});
};

const checkTablet = () => {
  const adjustedWidth = width * pixelDensity;
  const adjustedHeight = height * pixelDensity;
  if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
    return true;
  } else {
    return (
      pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920)
    );
  }
};

export const width = W;
export const height = H;
export const isTablet = checkTablet();
export const isAndroid = Platform.OS === 'android';
export const isIOS = Platform.OS === 'ios';

export const scale = (number) => {
  const ratio = (metricsNumber() + pixelDensity) / 10;
  const value = number * Number(ratio.toFixed(1));
  return Number(value.toFixed(1));
};

export const StyleSheet = {
  create: (styleSheet, overload = {}) =>
    RNStyleSheet.create(
      objectMap(styleSheet, (value) => {
        const style = objectMap2(value, overload);
        return style;
      })
    ),
};
