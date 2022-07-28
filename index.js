function receivesAFunction(cb) {
  return cb();
}

function returnsANamedFunction() {
  let boop = (function goodness(tooMuch) {
    tooMuch * 2;
  }) 
  return boop
}

