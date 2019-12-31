import {Grid, Row} from 'react-native-easy-grid';
import {StyledCol, StyledRow, styles} from './styled';

import {Button} from 'react-native-paper';
import React from 'react';

const cor1 = '#3F4248';
const cor2 = '#59616B';
const cor3 = '#FF9429';

export default ({size, onClickBotao}) => (
  <Row size={size}>
    <Grid>
      <StyledRow>
        <StyledCol backgroundColor={cor1}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => onClickBotao('AC')}>
            AC
          </Button>
        </StyledCol>
        <StyledCol backgroundColor={cor1}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => onClickBotao('+/-')}>
            &plusmn;
          </Button>
        </StyledCol>
        <StyledCol backgroundColor={cor1}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => onClickBotao('%')}>
            %
          </Button>
        </StyledCol>
        <StyledCol backgroundColor={cor3}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => onClickBotao('/')}>
            &divide;
          </Button>
        </StyledCol>
      </StyledRow>
      <StyledRow>
        <StyledCol backgroundColor={cor2}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => onClickBotao(7)}>
            7
          </Button>
        </StyledCol>
        <StyledCol backgroundColor={cor2}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => onClickBotao(8)}>
            8
          </Button>
        </StyledCol>
        <StyledCol backgroundColor={cor2}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => onClickBotao(9)}>
            9
          </Button>
        </StyledCol>
        <StyledCol backgroundColor={cor3}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => onClickBotao('*')}>
            &#215;
          </Button>
        </StyledCol>
      </StyledRow>
      <StyledRow>
        <StyledCol backgroundColor={cor2}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => onClickBotao(4)}>
            4
          </Button>
        </StyledCol>
        <StyledCol backgroundColor={cor2}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => onClickBotao(5)}>
            5
          </Button>
        </StyledCol>
        <StyledCol backgroundColor={cor2}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => onClickBotao(6)}>
            6
          </Button>
        </StyledCol>
        <StyledCol backgroundColor={cor3}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => onClickBotao('-')}>
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
            onPress={() => onClickBotao(2)}>
            2
          </Button>
        </StyledCol>
        <StyledCol backgroundColor={cor2}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => onClickBotao(3)}>
            3
          </Button>
        </StyledCol>
        <StyledCol backgroundColor={cor3}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => onClickBotao('+')}>
            +
          </Button>
        </StyledCol>
      </StyledRow>
      <Row>
        <StyledCol size={50.5} backgroundColor={cor2}>
          <Button
            contentStyle={styles.buttonContent2}
            labelStyle={styles.buttonLabel}
            onPress={() => onClickBotao(0)}>
            0
          </Button>
        </StyledCol>
        <StyledCol size={25} backgroundColor={cor2}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => onClickBotao(',')}>
            ,
          </Button>
        </StyledCol>
        <StyledCol size={25} backgroundColor={cor3}>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => onClickBotao('=')}>
            =
          </Button>
        </StyledCol>
      </Row>
    </Grid>
  </Row>
);
