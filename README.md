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
      <View style={styles.box}>
        <Text>Result: {scale(100)}</Text>
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

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)