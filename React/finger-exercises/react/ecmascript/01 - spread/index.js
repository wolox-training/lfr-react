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

export function copy(...data) {
  if (isArray(...data)) {
    return [...data[0]];
  } else {
    return { ...data[0] };
  }
}

export function reverseMerge(...data) {
  return [...data[1], ...data[0]];
}

export function filterAttribs(data) {
  let {a, b, ...rest} = data;
  return (rest);
}