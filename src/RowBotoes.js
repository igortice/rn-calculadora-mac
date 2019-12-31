import {Button, Text} from 'react-native-paper';
import {Col, Grid, Row} from 'react-native-easy-grid';

import {Dimensions} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonLabel: {
    fontSize: 50,
    color: '#fff',
  },
  buttonContent: {
    flex: 1,
    width: Dimensions.get('window').width / 4,
  },
  buttonContent2: {
    flex: 1,
    width: Dimensions.get('window').width / 2,
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
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('AC')}>
            AC
          </Button>
        </Col>
        <Col
          style={[
            styles.buttonCol,
            styles.buttonBorderTopNone,
            styles.buttonColor1,
          ]}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('+-')}>
            &plusmn;
          </Button>
        </Col>
        <Col
          style={[
            styles.buttonCol,
            styles.buttonBorderTopNone,
            styles.buttonColor1,
          ]}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('%')}>
            %
          </Button>
        </Col>
        <Col
          style={[
            styles.buttonCol,
            styles.buttonBorderTopNone,
            styles.buttonColor3,
          ]}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('%')}>
            &divide;
          </Button>
        </Col>
      </Row>
      <Row style={styles.buttonRow}>
        <Col style={[styles.buttonCol, styles.buttonColor2]}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('7')}>
            7
          </Button>
        </Col>
        <Col style={[styles.buttonCol, styles.buttonColor2]}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('8')}>
            8
          </Button>
        </Col>
        <Col style={[styles.buttonCol, styles.buttonColor2]}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('9')}>
            9
          </Button>
        </Col>
        <Col style={[styles.buttonCol, styles.buttonColor3]}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('x')}>
            &#215;
          </Button>
        </Col>
      </Row>
      <Row style={styles.buttonRow}>
        <Col style={[styles.buttonCol, styles.buttonColor2]}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('4')}>
            4
          </Button>
        </Col>
        <Col style={[styles.buttonCol, styles.buttonColor2]}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('5')}>
            5
          </Button>
        </Col>
        <Col style={[styles.buttonCol, styles.buttonColor2]}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('6')}>
            6
          </Button>
        </Col>
        <Col style={[styles.buttonCol, styles.buttonColor3]}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('-')}>
            &#8722;
          </Button>
        </Col>
      </Row>
      <Row style={styles.buttonRow}>
        <Col style={[styles.buttonCol, styles.buttonColor2]}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('1')}>
            1
          </Button>
        </Col>
        <Col style={[styles.buttonCol, styles.buttonColor2]}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('2')}>
            2
          </Button>
        </Col>
        <Col style={[styles.buttonCol, styles.buttonColor2]}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('3')}>
            3
          </Button>
        </Col>
        <Col style={[styles.buttonCol, styles.buttonColor3]}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('+')}>
            +
          </Button>
        </Col>
      </Row>
      <Row style={styles.buttonRow}>
        <Col size={50.5} style={[styles.buttonCol, styles.buttonColor2]}>
          <Button
            contentStyle={styles.buttonContent2}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('0')}>
            0
          </Button>
        </Col>
        <Col size={25} style={[styles.buttonCol, styles.buttonColor2]}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log(',')}>
            ,
          </Button>
        </Col>
        <Col size={25} style={[styles.buttonCol, styles.buttonColor3]}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('=')}>
            =
          </Button>
        </Col>
      </Row>
    </Grid>
  </Row>
);

export default RowBotoes;
