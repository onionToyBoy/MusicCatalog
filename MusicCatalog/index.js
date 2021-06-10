import { Navigation } from 'react-native-navigation';

import { RootNavigation } from './src/navigation/RootNavigation';

if (__DEV__) {
    
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

Navigation.events().registerAppLaunchedListener(RootNavigation());
