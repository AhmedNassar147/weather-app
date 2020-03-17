import { StyleSheet, Platform } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  flexStyle: {
    flex: 1
  },
  verticalCenteredFlex: {
    justifyContent: 'center'
  },
  horizontalCenteredFlex: {
    alignItems: 'center'
  },
  spaceBetweenItems: {
    justifyContent: 'space-between'
  },
  rowStyle: {
    flexDirection: 'row'
  },
  fullWidth: {
    width: '100%'
  },
  shadow: {
    backgroundColor: colors.white,
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: Platform.select({
      android: 0.8,
      ios: 0
    })
  }
});
