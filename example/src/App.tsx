import * as React from 'react';

import { View, Text } from 'react-native';
import { scale, StyleSheet } from 'react-native-size-scaling';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello word</Text>
      <View style={styles.box}>
        <Text style={styles.text}>Device: IPhone 13</Text>
        <Text style={styles.text}>Before: 300x300</Text>
        <Text style={styles.text}>{`After: ${scale(300)}x${scale(300)}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 22,
    },
    box: {
      width: 300,
      height: 300,
      marginVertical: 20,
      backgroundColor: 'gray',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  {
    backgroundColor: 'red',
  }
);
