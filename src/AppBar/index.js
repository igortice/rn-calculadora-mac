import {Appbar} from 'react-native-paper';
import React from 'react';
import {styles} from './styled';

export default () => (
  <Appbar.Header>
    <Appbar.Content title={'CALCULADORA'} titleStyle={styles.contentTitle} />
  </Appbar.Header>
);
