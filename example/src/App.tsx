import * as React from 'react';

import { View, Text } from 'react-native';
import { Scale, StyleSheet } from 'react-native-size-scaling';

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>Result: {Scale(100)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
