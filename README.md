# react-native-size-scaling
Provide solutions to make your app flexible for different screen sizes, different devices. When developing with react-native, you need to manually adjust your app to look great on a variety of different screen sizes. This package provides some simple tooling to make your scaling a whole lot easier.
## Installation

```sh
npm install react-native-size-scaling
```

<br><p><a href="https://www.buymeacoffee.com/hoaphantn"> <img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="fateh999" /></a></p><br><br><br>

### Demo
Before
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/scaling/scaling1.png)
After
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/scaling/scaling2.png)

## Usage

```js
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

const styles = StyleSheet.create({
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
});
```
