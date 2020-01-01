import * as Animatable from 'react-native-animatable';

import {StyledRowVisor, StyledText} from './styled';

import React from 'react';

export default ({size, textoVisor = '0', animation = ''}) => (
  <StyledRowVisor size={size}>
    <Animatable.Text animation={animation}>
      <StyledText>{textoVisor}</StyledText>
    </Animatable.Text>
  </StyledRowVisor>
);
