import { StackNavigationProp } from '@react-navigation/stack';

type Route = {
  params?: any;
};

export default interface ScreenProps {
  navigation: StackNavigationProp<Record<string, object | undefined>>;
  route: Route;
}
