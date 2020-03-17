import { List, Response } from './index.interface';

const transformResult = (response: Response) => {
  let formattedForecast: List | undefined;

  if (response && response.hasOwnProperty('list') && !!response.list?.length) {
    formattedForecast = response.list.map(i => ({
      temp: i.main.temp,
      humidity: i.main.humidity,
      pressure: +i.main.pressure * 0.750062,
      wind_speed: +i.wind.speed,
      key: i.dt_txt,
      temp_max: +i.main.temp_max,
      wind_deg: +i.wind.deg
    }));
  }

  return formattedForecast;
};

export default transformResult;
