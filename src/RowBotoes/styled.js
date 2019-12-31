import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
