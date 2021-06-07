

export const getSpecificTracks = async albumsId => {
    try {
      const response = await fetch(`https://itunes.apple.com/lookup?id=${albumsId}&entity=song`);
      return response.json();
    } catch {
      error => console.error(error);
    }
  };