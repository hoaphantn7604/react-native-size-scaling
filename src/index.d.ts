import * as RN from 'react-native';

declare module 'react-native-size-scaling' {
  export function scale(size: number): number;

  export namespace StyleSheet {
    type NamedStyles<T> = {
      [P in keyof T]: RN.ViewStyle | RN.TextStyle | RN.ImageStyle;
    };
    export function create<T extends NamedStyles<T> | NamedStyles<any>>(
      styles: T | NamedStyles<T>
    ): T;
  }
}
