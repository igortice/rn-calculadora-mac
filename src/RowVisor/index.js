import {StyledRowVisor, StyledText} from './styled';

import React from 'react';

export default ({size, textoVisor = '0'}) => (
  <StyledRowVisor size={size}>
    <StyledText>{textoVisor}</StyledText>
  </StyledRowVisor>
);
