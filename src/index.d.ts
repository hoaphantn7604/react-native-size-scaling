import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export namespace StyleSheet {
  type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };
  export function create<T extends NamedStyles<T> | NamedStyles<any>>(styles: T | NamedStyles<T>): T;
}

export function scale (value: number): number;

