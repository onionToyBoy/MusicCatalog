export const checkPrice = price => (price > 0 ? price + ' $' : 'FREE');

export const timeConventer = millis => {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);

  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};

export const titleLimiter = title => {
  if (title.length <= 17) {
    return title;
  } else {
    for (let i = 17; i < title.length; i++) {
      if (title[i] === ' ') {
        return `${title.slice(0, i)}...`;
      }
    }
  }
  return `${title.slice(0, 24)}...`;
};
