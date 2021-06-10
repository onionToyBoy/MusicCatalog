export const getSpecificTracks = async albumId => {
  try {
    const response = await fetch(`https://itunes.apple.com/lookup?id=${albumId}&entity=song`);
    return response.json();
  } catch {
    error => console.error(error);
  }
};
