import { Navigation } from 'react-native-navigation';

import { colors } from '../constants/colors';
import { routes } from '../constants/routes';
import { ArtistsScreen } from '../modules/Artists/components/ArtistsScreen';
import { AlbumsScreen } from '../modules/Albums/AlbumsScreen';
import { ReduxProvider } from '../store/ReduxProvider';
import { ArtistsAlbums } from '../modules/Artists/components/ArtistsAlbums';
import { AlbumTracks } from '../modules/Artists/components/AlbumTracks';

Navigation.registerComponent(routes.Artists, () => ReduxProvider(ArtistsScreen));
Navigation.registerComponent(routes.Albums, () => ReduxProvider(AlbumsScreen));
Navigation.registerComponent(routes.ArtistsAlbums, () => ReduxProvider(ArtistsAlbums));
Navigation.registerComponent(routes.AlbumTracks, () => ReduxProvider(AlbumTracks));

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: colors.PURPLE,
  },
  topBar: {
    height: 0,
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 16,
  },
});

export const RootNavigation = () => {
  return async () => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      name: routes.Artists,
                      options: {
                        bottomTab: {
                          text: 'Artists',
                        },
                      },
                    },
                  },
                ],
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: routes.Albums,
                      options: {
                        bottomTab: {
                          text: 'Favorites',
                        },
                      },
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    });
  };
};
