export interface IntroProps {
  city: string;
  temp: number;
  humidity: number | string;
  pressure: number;
  speed: number;
}

export interface ListItemProps {
  date: string;
  temp_max: number;
  wind_deg: number | string;
  onPress: () => void;
}
