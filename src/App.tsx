import React from 'react';
import RootNavigator from './routes/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {defaultTheme} from './theme';

const App: () => JSX.Element = () => {
  return (
    <PaperProvider theme={defaultTheme}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
