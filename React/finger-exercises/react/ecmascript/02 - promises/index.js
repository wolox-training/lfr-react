// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  const startTime = Date.now();
  return new Promise((resolve, reject) => {
    setTimeout(function() { 
      const endTime = Date.now();
      const timeRandom = time - (endTime - startTime);
      if (timeRandom > (time + 100)) {
        reject(Error('This time is too much !'));
      } else {
        resolve(timeRandom);
      }
    }, 50);
  });
}

export function asyncDelay(time) {
  return delay(time);
}
