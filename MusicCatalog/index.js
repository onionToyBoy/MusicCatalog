import { Navigation } from 'react-native-navigation';

import { ArtistsScreen } from './src/modules/Artists/ArtistsScreen';
import { AlbumsScreen } from './src/modules/Albums/AlbumsScreen';
import { ReduxProvider } from './src/store/ReduxProvider';
import { RootNavigation } from './src/navigation/RootNavigation';
if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

Navigation.registerComponent('Artists', () => ReduxProvider(ArtistsScreen));

Navigation.registerComponent('Albums', () => ReduxProvider(AlbumsScreen));

Navigation.events().registerAppLaunchedListener(RootNavigation());
