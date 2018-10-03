// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  return new Promise((resolve, reject) => {
    setInterval(function(){
      const endTime = Date.now();
      const timeRandom = time - (endTime - startTime);
      if ((timeRandom) > (time + 100)) {
        reject(Error('This time is too much !'));
      } else {
        resolve(timeRandom);
      }
    }, 100);
  });
}

export function asyncDelay() {

}
