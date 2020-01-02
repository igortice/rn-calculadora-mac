import {Col, Row} from 'react-native-easy-grid';

import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
import styled from 'styled-components';

export const styles = StyleSheet.create({
  buttonLabel: {
    fontSize: 35,
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
});

export const StyledRow = styled(Row)`
  margin-bottom: -1px;
`;

export const StyledCol = styled(Col)`
  align-items: center;
  justify-content: center;
  border-color: #000000;
  border-width: 1px;
  background-color: ${props => props.backgroundColor || '#ffffff'};
`;
