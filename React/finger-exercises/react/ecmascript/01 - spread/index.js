import isArray from './utils';

export function min(...args) {
  if (args[0] === undefined) {
    return (args[0]);
  } else if (isArray(...args)) {
    return (Math.min(...args[0]));
  } else if (isArray(args)) {
    return (Math.min(...args));
  }
}

export function copy() {

}