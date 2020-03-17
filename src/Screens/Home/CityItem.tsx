import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Text from '../../components/Text';
import registeredStyles from '../../utils/styles';
import { CityItemProps, PressType } from './index.interface';
import styles from './styles';

const { useCallback, memo } = React;

const CityItemView: React.FC<CityItemProps> = ({
  name,
  onPress,
  onRemoveCity
}) => {
  const onPressItem = useCallback((action: PressType) => () => action(name), [
    name
  ]);

  return (
    <View
      style={[
        registeredStyles.fullWidth,
        registeredStyles.rowStyle,
        registeredStyles.horizontalCenteredFlex,
        registeredStyles.spaceBetweenItems,
        registeredStyles.shadow,
        styles.cityNameContainer
      ]}>
      <Text
        children={name}
        style={registeredStyles.flexStyle}
        onPress={onPressItem(onPress)}
      />

      <TouchableOpacity
        style={[
          styles.cancelStyle,
          registeredStyles.verticalCenteredFlex,
          registeredStyles.horizontalCenteredFlex
        ]}
        onPress={onPressItem(onRemoveCity)}>
        <Text children="X" />
      </TouchableOpacity>
    </View>
  );
};

export default memo(CityItemView);
