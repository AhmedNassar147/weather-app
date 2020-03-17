export type PressType = (city: string) => void;

export interface CityItemProps {
  name: string;
  onPress: PressType;
  onRemoveCity: PressType;
}
