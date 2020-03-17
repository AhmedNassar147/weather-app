import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Screens/Home';
import CityDetailsScreen from './Screens/CityDetails';
import colors from './utils/colors';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleAllowFontScaling: true
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen
        name="CityDetails"
        component={CityDetailsScreen}
        options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: colors.blue3
          },
          headerTintColor: colors.white
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default React.memo(Routes);
