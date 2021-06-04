import { Navigation } from 'react-native-navigation';

import { ArtistsScreen } from './src/modules/Artists/ArtistsScreen';
import { AlbumsScreen } from './src/modules/Albums/AlbumsScreen';
import { ReduxProvider } from './src/store/ReduxProvider';
import { RootNavigation } from './src/navigation/RootNavigation';
import { ArtistsAlbums } from './src/modules/Artists/components/ArtistsAlbums';
if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

Navigation.registerComponent('Artists', () => ReduxProvider(ArtistsScreen));
Navigation.registerComponent('Albums', () => ReduxProvider(AlbumsScreen));
Navigation.registerComponent('ArtistsAlbums', () => ReduxProvider(ArtistsAlbums));

Navigation.events().registerAppLaunchedListener(RootNavigation());
