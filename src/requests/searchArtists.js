export const searchArtists = async searchValue => {
  try {
    const response = await fetch(
      `https://itunes.apple.com/search?term=${searchValue}&media=music&entity=musicArtist&country=by&limit=15`,
    );
    return response.json();
  } catch {
    error => console.error(error);
  }
};
