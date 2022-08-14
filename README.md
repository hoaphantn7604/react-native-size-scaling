# react-native-size-scaling
Provide solutions to make your app flexible for different screen sizes, different devices. When developing with react-native, you need to manually adjust your app to look great on a variety of different screen sizes. This package provides some simple tooling to make your scaling a whole lot easier.
## Installation

```sh
npm install react-native-size-scaling
```

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

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)