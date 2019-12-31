import {Col, Grid, Row} from 'react-native-easy-grid';

import {Button} from 'react-native-paper';
import React from 'react';
import {styles} from './styled';

export default ({size}) => (
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
