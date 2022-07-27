function receivesAFunction(cb) {
  return cb();
}

let thisOne = function returnsANamedFunction() {
  return returnsANamedFunction();
}