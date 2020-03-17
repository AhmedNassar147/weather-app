import React from 'react';
import { View } from 'react-native';
import Text from '../../components/Text';
import { IntroProps } from './index.interface';
import styles from './styles';

const ForcastIntro: React.FC<IntroProps> = ({
  city,
  temp,
  humidity,
  pressure,
  speed
}) => (
  <View style={[styles.weatherMainData]}>
    {!!city && (
      <Text style={[styles.city, styles.weatherSmallText]}>{city}</Text>
    )}
    <Text style={[styles.weatherTemp, styles.weatherSmallText]}>
      {Math.round(temp)}°
    </Text>

    <Text style={styles.weatherSmallText}>Humidity: {humidity}%</Text>
    <Text style={styles.weatherSmallText}>
      Pressure: {Math.round(pressure)} mm Hg
    </Text>
    <Text style={styles.weatherSmallText}>Wind: {Math.round(speed)} m/s</Text>
  </View>
);

export default React.memo(ForcastIntro);
