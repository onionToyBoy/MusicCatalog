export const checkPrice = price => (price>0 ? price + ' $' : 'FREE');

export const timeConventer = millis => {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  };
