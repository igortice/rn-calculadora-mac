import * as React from 'react';

import {Appbar} from 'react-native-paper';

export default class MyComponent extends React.Component {
  render() {
    return (
      <Appbar.Header statusBarHeight={20}>
        <Appbar.Content title="Calculadora Igor" />
      </Appbar.Header>
    );
  }
}
