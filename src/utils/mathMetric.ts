import {
  Dimensions,
  PixelRatio,
} from 'react-native';
import { StyleSheet as RNStyleSheet } from 'react-native';

const { width, height } = Dimensions.get('screen');
const pixelDensity = PixelRatio.get();

const metricsNumber = () => {
  const density = pixelDensity * 160;
  const x = Math.pow((width * pixelDensity) / density, 2);
  const y = Math.pow((height * pixelDensity) / density, 2);
  const screenInches = Math.sqrt(x + y);

  return screenInches;
};

const objectMap = (object: any, mapFn: (value:string)=> void) => {
  return Object.keys(object).reduce((result: any, key: string) => {
    result[key] = mapFn(object[key]);
    return result;
  }, {});
};

const objectMap2 = (object: any) => {
  return Object.keys(object).reduce((result: any, key: string) => {
    if (typeof object[key] === 'number') {
      if (key.includes('flex') || key.includes('opacity') || key.includes('opacity')) {
        result[key] = object[key];
      } else {
        result[key] = scale(object[key]);
      }
    } else {
      result[key] = object[key];
    }

    return result;
  }, {});
};

export const scale = (number: number) => {
  const ratio = (metricsNumber() + pixelDensity) / 10;
  const value = number * Number(ratio.toFixed(1));
  return value;
};

export const StyleSheet = {
  create: (styleSheet: any) =>
    RNStyleSheet.create(
      objectMap(styleSheet, (value) => {
        const style = objectMap2(value);
        return style;
      })
    ),
};