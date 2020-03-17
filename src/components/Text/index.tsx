import React from 'react';
import { Text as NativeText } from 'react-native';
import TextProps from './index.interface';
import { getTextSizeStyle } from './helpers';

const { useMemo, memo } = React;

const Text: React.FC<TextProps> = ({ size, children, style, onPress }) => {
  const sizeStyle = useMemo(() => getTextSizeStyle(size), [size]);

  return (
    <NativeText
      children={children}
      ellipsizeMode="tail"
      allowFontScaling
      adjustsFontSizeToFit
      style={[sizeStyle, style]}
      onPress={onPress}
    />
  );
};

export default memo(Text);
