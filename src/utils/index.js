export const checkPrice = price => (price > 0 ? price + ' $' : 'FREE');

export const timeConventer = millis => {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);

  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};
