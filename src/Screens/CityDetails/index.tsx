import React from 'react';
import { View, StatusBar, FlatList } from 'react-native';
import registeredStyles from '../../utils/styles';
import ScreenProps from '../interfaces/routeInterface';
import fetchCityWeather from '../../api/index';
import MainIntro from './Intro';
import colors from '../../utils/colors';
import { List } from '../../api/index.interface';

const {
  memo,
  useEffect,
  useMemo,
  useState,
  lazy,
  Suspense,
  useCallback
} = React;

const ListItem = lazy(() => import('./ListItem'));

const CityDetailsScreen: React.FC<ScreenProps> = ({ route: { params } }) => {
  const [currentIndex, setIndex] = useState<number>(0);
  const [data, setData] = useState<List | undefined>();

  const cityName = useMemo(() => params?.cityName, [params]);

  useEffect(() => {
    if (cityName) {
      const fetchForcast = async () => {
        const res = await fetchCityWeather(cityName);
        setData(res);
      };

      fetchForcast();
    }
  }, [cityName, setData]);

  const selectedItem = useMemo(() => {
    return !!data?.length
      ? data[currentIndex]
      : {
          humidity: 0,
          pressure: 0,
          temp: 0,
          wind_speed: 0
        };
  }, [currentIndex, data]);

  const renderItem = useCallback(
    ({ item, index }) => {
      if (item) {
        const handlePress = () => setIndex(index);

        return (
          <Suspense fallback={null} key={item.date}>
            <ListItem
              date={item.key}
              temp_max={item.temp_max}
              wind_deg={item.wind_deg}
              onPress={handlePress}
            />
          </Suspense>
        );
      }
      return null;
    },
    [setIndex]
  );

  return (
    <>
      <StatusBar backgroundColor={colors.blue3} barStyle="light-content" />
      <View style={[registeredStyles.flexStyle]}>
        <MainIntro
          city={cityName}
          humidity={selectedItem.humidity}
          pressure={selectedItem.pressure}
          speed={selectedItem.wind_speed}
          temp={selectedItem.temp}
        />

        {data && (
          <FlatList
            showsVerticalScrollIndicator={false}
            bounces={false}
            data={data}
            renderItem={renderItem}
            style={registeredStyles.flexStyle}
          />
        )}
      </View>
    </>
  );
};

export default memo(CityDetailsScreen);
