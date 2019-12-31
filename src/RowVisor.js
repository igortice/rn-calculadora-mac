import React from 'react';
import {Row} from 'react-native-easy-grid';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

const styles = StyleSheet.create({
  rowVisor: {
    backgroundColor: '#282D33',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  rowText: {
    fontSize: 70,
    color: '#fff',
    fontWeight: '200',
  },
});

const RowVisor = ({size}) => (
  <Row size={size} style={styles.rowVisor}>
    <Text style={styles.rowText}>-5</Text>
  </Row>
);

export default RowVisor;
