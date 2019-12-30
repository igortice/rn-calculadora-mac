import {Appbar} from 'react-native-paper';
import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  contentTitle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
  },
});

const AppBar = () => (
  <Appbar.Header>
    <Appbar.Content title={'CALCULADORA'} titleStyle={styles.contentTitle} />
  </Appbar.Header>
);

export default AppBar;
