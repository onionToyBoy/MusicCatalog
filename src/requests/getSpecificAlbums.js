export const getSpecificAlbums = async artistId => {
  try {
    const response = await fetch(`https://itunes.apple.com/lookup?id=${artistId}&entity=album`);

    return response.json();
  } catch {
    error => console.error(error);
  }
};
