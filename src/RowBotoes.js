import {Col, Grid, Row} from 'react-native-easy-grid';

import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 50,
    color: '#fff',
  },
  buttonRow: {
    marginBottom: -1,
  },
  buttonCol: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000000',
    borderWidth: 1,
  },
  buttonBorderTopNone: {
    borderTopColor: 'transparent',
  },
  buttonColor1: {
    backgroundColor: '#3F4248',
  },
  buttonColor2: {
    backgroundColor: '#59616B',
  },
  buttonColor3: {
    backgroundColor: '#FF9429',
  },
});

const RowBotoes = ({size}) => (
  <Row size={size}>
    <Grid>
      <Row style={styles.buttonRow}>
        <Col
          style={[
            styles.buttonCol,
            styles.buttonBorderTopNone,
            styles.buttonColor1,
          ]}>
          <Text style={styles.buttonText}>AC</Text>
        </Col>
        <Col
          style={[
            styles.buttonCol,
            styles.buttonBorderTopNone,
            styles.buttonColor1,
          ]}>
          <Text style={styles.buttonText}>&plusmn;</Text>
        </Col>
        <Col
          style={[
            styles.buttonCol,
            styles.buttonBorderTopNone,
            styles.buttonColor1,
          ]}>
          <Text style={styles.buttonText}>%</Text>
        </Col>
        <Col
          style={[
            styles.buttonCol,
            styles.buttonBorderTopNone,
            styles.buttonColor3,
          ]}>
          <Text style={styles.buttonText}>&divide;</Text>
        </Col>
      </Row>
      <Row style={styles.buttonRow}>
        <Col style={[styles.buttonCol, styles.buttonColor2]}>
          <Text style={styles.buttonText}>7</Text>
        </Col>
        <Col style={[styles.buttonCol, styles.buttonColor2]}>
          <Text style={styles.buttonText}>8</Text>
        </Col>
        <Col style={[styles.buttonCol, styles.buttonColor2]}>
          <Text style={styles.buttonText}>9</Text>
        </Col>
        <Col style={[styles.buttonCol, styles.buttonColor3]}>
          <Text style={styles.buttonText}>&#215;</Text>
        </Col>
      </Row>
      <Row style={styles.buttonRow}>
        <Col style={[styles.buttonCol, styles.buttonColor2]}>
          <Text style={styles.buttonText}>4</Text>
        </Col>
        <Col style={[styles.buttonCol, styles.buttonColor2]}>
          <Text style={styles.buttonText}>5</Text>
        </Col>
        <Col style={[styles.buttonCol, styles.buttonColor2]}>
          <Text style={styles.buttonText}>6</Text>
        </Col>
        <Col style={[styles.buttonCol, styles.buttonColor3]}>
          <Text style={styles.buttonText}>&#8722;</Text>
        </Col>
      </Row>
      <Row style={styles.buttonRow}>
        <Col style={[styles.buttonCol, styles.buttonColor2]}>
          <Text style={styles.buttonText}>1</Text>
        </Col>
        <Col style={[styles.buttonCol, styles.buttonColor2]}>
          <Text style={styles.buttonText}>2</Text>
        </Col>
        <Col style={[styles.buttonCol, styles.buttonColor2]}>
          <Text style={styles.buttonText}>3</Text>
        </Col>
        <Col style={[styles.buttonCol, styles.buttonColor3]}>
          <Text style={styles.buttonText}>+</Text>
        </Col>
      </Row>
      <Row style={styles.buttonRow}>
        <Col size={50.5} style={[styles.buttonCol, styles.buttonColor2]}>
          <Text style={styles.buttonText}>0</Text>
        </Col>
        <Col size={25} style={[styles.buttonCol, styles.buttonColor2]}>
          <Text style={styles.buttonText}>,</Text>
        </Col>
        <Col size={25} style={[styles.buttonCol, styles.buttonColor3]}>
          <Text style={styles.buttonText}>=</Text>
        </Col>
      </Row>
    </Grid>
  </Row>
);

export default RowBotoes;
