import transformResult from './transformer';
import { Alert } from 'react-native';

const API_KEY: string = '7a7aa34bac53cdaa104a7e54c863055f';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast';

const fetchCityWeather = async (cityName: string) => {
  try {
    let apiUrl = BASE_URL;
    apiUrl += `?q=${cityName}&APPID=${API_KEY}&units=metric`;

    const apiCall = await fetch(apiUrl);
    const response = await apiCall.json();
    const data = transformResult(response);
    return data;
  } catch (error) {
    Alert.alert(
      'Somthing Went Wrong',
      'Please Check your internet',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        { text: 'ok' }
      ],
      { cancelable: true }
    );
  }
};

export default fetchCityWeather;
