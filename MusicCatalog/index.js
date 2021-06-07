import { Navigation } from 'react-native-navigation';

import { ArtistsScreen } from './src/modules/Artists/ArtistsScreen';
import { AlbumsScreen } from './src/modules/Albums/AlbumsScreen';
import { ReduxProvider } from './src/store/ReduxProvider';
import { RootNavigation } from './src/navigation/RootNavigation';
import { ArtistsAlbums } from './src/modules/Artists/components/ArtistsAlbums';
import { AlbumTracks } from './src/modules/Artists/components/AlbumTracks';
import { routes } from './src/constants/routes';
if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

Navigation.registerComponent(routes.Artists, () => ReduxProvider(ArtistsScreen));
Navigation.registerComponent(routes.Albums, () => ReduxProvider(AlbumsScreen));
Navigation.registerComponent(routes.ArtistsAlbums, () => ReduxProvider(ArtistsAlbums));
Navigation.registerComponent(routes.AlbumTracks, () => ReduxProvider(AlbumTracks));

Navigation.events().registerAppLaunchedListener(RootNavigation());
