export default class Validator {
  static validateUsername(name) {
    const firstReg = /^[a-z][a-z|\d|\-|_]*[a-z]$/i;
    const secondReg = /\d{4}/;
    return firstReg.test(name) && !secondReg.test(name);
  }
}
