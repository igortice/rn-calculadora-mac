import {Grid, Row} from 'react-native-easy-grid';
import {StyledCol, StyledRow, styles} from './styled';

import {Button} from 'react-native-paper';
import React from 'react';

const cor1 = '#3F4248';
const cor2 = '#59616B';
const cor3 = '#FF9429';

export default ({size}) => (
  <Row size={size}>
    <Grid>
      <StyledRow>
        <StyledCol backgroundColor={cor1}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('AC')}>
            AC
          </Button>
        </StyledCol>
        <StyledCol backgroundColor={cor1}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('+-')}>
            &plusmn;
          </Button>
        </StyledCol>
        <StyledCol backgroundColor={cor1}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('%')}>
            %
          </Button>
        </StyledCol>
        <StyledCol backgroundColor={cor3}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('%')}>
            &divide;
          </Button>
        </StyledCol>
      </StyledRow>
      <StyledRow>
        <StyledCol backgroundColor={cor2}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('7')}>
            7
          </Button>
        </StyledCol>
        <StyledCol backgroundColor={cor2}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('8')}>
            8
          </Button>
        </StyledCol>
        <StyledCol backgroundColor={cor2}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('9')}>
            9
          </Button>
        </StyledCol>
        <StyledCol backgroundColor={cor3}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('x')}>
            &#215;
          </Button>
        </StyledCol>
      </StyledRow>
      <StyledRow>
        <StyledCol backgroundColor={cor2}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('4')}>
            4
          </Button>
        </StyledCol>
        <StyledCol backgroundColor={cor2}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('5')}>
            5
          </Button>
        </StyledCol>
        <StyledCol backgroundColor={cor2}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('6')}>
            6
          </Button>
        </StyledCol>
        <StyledCol backgroundColor={cor3}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('-')}>
            &#8722;
          </Button>
        </StyledCol>
      </StyledRow>
      <StyledRow>
        <StyledCol backgroundColor={cor2}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('1')}>
            1
          </Button>
        </StyledCol>
        <StyledCol backgroundColor={cor2}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('2')}>
            2
          </Button>
        </StyledCol>
        <StyledCol backgroundColor={cor2}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('3')}>
            3
          </Button>
        </StyledCol>
        <StyledCol backgroundColor={cor3}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('+')}>
            +
          </Button>
        </StyledCol>
      </StyledRow>
      <Row>
        <StyledCol size={50.5} backgroundColor={cor2}>
          <Button
            contentStyle={styles.buttonContent2}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('0')}>
            0
          </Button>
        </StyledCol>
        <StyledCol size={25} backgroundColor={cor2}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log(',')}>
            ,
          </Button>
        </StyledCol>
        <StyledCol size={25} backgroundColor={cor3}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => console.log('=')}>
            =
          </Button>
        </StyledCol>
      </Row>
    </Grid>
  </Row>
);
