import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes';

const App = () => (
  <>
    <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    <Routes />
  </>
);

export default App;
