import React from 'react';
import RootNavigator from './routes/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App: () => JSX.Element = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
