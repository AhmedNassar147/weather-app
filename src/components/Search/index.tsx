import React from 'react';
import { View, TextInput, Alert } from 'react-native';
import registeredStyles from '../../utils/styles';
import colors from '../../utils/colors';
import styles from './styles';
import Props from './index.interface';

const { useState, memo, useCallback, useEffect } = React;

const SearchInput: React.FC<Props> = ({ onSearch }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    return () => {
      setValue('');
    };
  }, [setValue]);

  const onSubmit = useCallback(() => {
    if (!value || value.length < 5) {
      return Alert.alert(
        'Error',
        'City Name Length must be more than 4 Characters',
        [
          {
            text: 'Cancel',
            style: 'cancel'
          },
          { text: 'ok' }
        ],
        { cancelable: true }
      );
    } else {
      return onSearch(value);
    }
  }, [onSearch, value]);

  return (
    <View
      style={[
        styles.container,
        registeredStyles.shadow,
        registeredStyles.fullWidth
      ]}>
      <TextInput
        placeholder="Type City Name"
        value={value}
        onChangeText={setValue}
        style={[styles.inputStyle, registeredStyles.flexStyle]}
        placeholderTextColor={colors.shadowColor}
        autoCapitalize="none"
        blurOnSubmit
        underlineColorAndroid="transparent"
        onSubmitEditing={onSubmit}
        returnKeyType="search"
      />
    </View>
  );
};

export default memo(SearchInput);
