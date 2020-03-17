import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Text from '../../components/Text';
import styles from './styles';
import registeredStyles from '../../utils/styles';
import { ListItemProps } from './index.interface';

const ListItem: React.FC<ListItemProps> = ({
  date,
  temp_max,
  wind_deg,
  onPress
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.listItem,
      registeredStyles.rowStyle,
      registeredStyles.spaceBetweenItems,
      registeredStyles.horizontalCenteredFlex
    ]}>
    <Text style={styles.listItemMetaText}>{date}</Text>

    <Text style={styles.metaText}>{Math.round(temp_max)}°</Text>

    <View
      style={[
        styles.metaBlock,
        registeredStyles.horizontalCenteredFlex,
        registeredStyles.verticalCenteredFlex
      ]}>
      <Text style={styles.cliosTextStyle} children="C" />
      <View
        style={{
          transform: [{ rotate: wind_deg + 'deg' }]
        }}>
        <Text children="↑" />
      </View>
    </View>
  </TouchableOpacity>
);

export default React.memo(ListItem);
