import isArray from './utils';

export function min(...data) {
  if ((data.length !== 0) && (isArray(...data))) {
    return (Math.min(...data[0]));
  } else if (data.length !== 0) {
    return (Math.min(...data)); 
  }
}

export function copy(...data) {
  return isArray(...data) ? [...data[0]] : { ...data[0] };
}

export const reverseMerge = (...data) => [...data[1], ...data[0]];

export function filterAttribs(data) {
  const {a, b, ...rest} = data;
  return (rest);
}