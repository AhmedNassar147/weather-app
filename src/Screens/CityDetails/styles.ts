import { StyleSheet, Dimensions, Platform } from 'react-native';
import colors from '../../utils/colors';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  /*-----   intro section style  ------------------- */
  weatherMainData: {
    width: width,
    borderBottomWidth: 5,
    borderBottomColor: colors.shadowColor,
    paddingTop: 10,
    backgroundColor: colors.blue3,
    justifyContent: 'flex-start',
    paddingHorizontal: 15,
    height: 250
  },
  weatherTemp: {
    fontSize: 60
  },
  weatherSmallText: {
    color: colors.white
  },

  city: {
    fontSize: 45
  },

  /*-----   end of intro section style  ------------------- */

  /*-----   list item style  ------------------- */
  listItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    height: 48,
    borderBottomColor: colors.shadowColor
  },

  listItemMetaText: {
    color: colors.shadowColor,
    fontSize: 18,
    marginEnd: 10
  },
  metaText: {
    fontSize: 22,
    color: colors.shadowColor
  },
  metaBlock: {
    marginStart: 5,
    width: 30,
    height: 30,
    overflow: 'hidden'
  },
  cliosTextStyle: {
    color: colors.red,
    fontSize: 14,
    marginBottom: 5
  }
  /*-----  end of list item style  ------------------- */
});
