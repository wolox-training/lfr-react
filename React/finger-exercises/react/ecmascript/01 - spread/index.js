import isArray from './utils';

export function min(...data) {
  if (data[0] === undefined) {
    return (data[0]);
  } else if (isArray(...data)) {
    return (Math.min(...data[0]));
  } else if (isArray(data)) {
    return (Math.min(...data));
  }
}

export function copy(...object) {
  console.log(object);
  console.log(object[0]);
  console.log(...object);
  //console.log(...object[0]);
  return (object[0]);
}