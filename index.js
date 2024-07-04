
function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
    return function named(){ console.log(" Wow!")}
}

function returnsAnAnonymousFunction() {
    return function(){ console.log(" Wow!")}
}