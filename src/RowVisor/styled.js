import {Platform} from 'react-native';
import {Row} from 'react-native-easy-grid';
import styled from 'styled-components';

export const StyledRowVisor = styled(Row)`
  background-color: #282d33;
  flex-direction: row-reverse;
  align-items: center;
  padding: 0 10px;
`;

export const StyledText = styled.Text`
  font-size: 70;
  color: #ffffff;
  font-weight: ${Platform.OS === 'ios' ? 400 : 100};
`;
