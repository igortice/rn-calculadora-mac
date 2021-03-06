import * as React from 'react';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import App from './src/App';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00020c',
    accent: '#50565c',
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
