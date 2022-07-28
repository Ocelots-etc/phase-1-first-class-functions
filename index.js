function receivesAFunction(cb) {
  return cb();
}

function returnsANamedFunction() {
  function goodness(tooMuch) {
    tooMuch * 2;
  } 
  return goodness
}


function returnsAnAnonymousFunction() {
  return function () {
    'boop'
  }
}
