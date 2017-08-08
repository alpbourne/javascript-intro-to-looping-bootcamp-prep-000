function forLoop(array1) {
  for (var i=0; i<25; i++) {
    array1.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
  }
  return array1;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());
  return array;
}
