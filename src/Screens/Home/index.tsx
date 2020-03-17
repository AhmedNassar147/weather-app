import React from 'react';
import { View, ScrollView } from 'react-native';
import SearchInput from '../../components/Search';
import Text from '../../components/Text';
import registeredStyles from '../../utils/styles';
import styles from './styles';
import CityItem from './CityItem';
import ScreenProps from '../interfaces/routeInterface';

const { useCallback, memo, useState } = React;

const HomeScreen: React.FC<ScreenProps> = ({ navigation: { navigate } }) => {
  const [cities, setCity] = useState(['Cairo', 'london', 'China']);

  const addCity = useCallback(
    (city: string) => {
      if (!cities.some(item => city === item)) {
        setCity(oldCities => [...oldCities, city]);
      }
    },
    [setCity, cities]
  );

  const removeCity = useCallback(
    (city: string) => {
      setCity(oldCities => oldCities.filter(item => item !== city));
    },
    [setCity]
  );

  const onSearch = useCallback(
    (value: string) => {
      addCity(value);
      navigate('CityDetails', {
        cityName: value
      });
    },
    [navigate, addCity]
  );

  return (
    <View style={[registeredStyles.flexStyle, styles.contianerStyle]}>
      <SearchInput onSearch={onSearch} />

      <Text size="title" children={`Suggestions & History`} />

      <ScrollView
        style={registeredStyles.flexStyle}
        contentContainerStyle={styles.scrollContent}>
        {cities.map(city => (
          <CityItem
            name={city}
            key={city}
            onRemoveCity={removeCity}
            onPress={onSearch}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default memo(HomeScreen);
