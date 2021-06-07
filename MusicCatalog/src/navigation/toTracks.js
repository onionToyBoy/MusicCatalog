import { Navigation } from 'react-native-navigation';
import { routes } from '../constants/routes';

export const toTracks = (artistName, albumNane, id, componentId) => {
    Navigation.push(componentId, {
      component: {
        name: routes.AlbumTracks,
        id: id,
        options: {
          topBar: {
            title: {
              text: albumNane,
            },
          },
        },
      },
    });
  };