function maximum(values) {
  let max = values[0];
  for (const v of values) {
    if (v > max) {
      max = v;
    }
  }
  return max;
}

const array = [1,2,4,7,8,5,3,2];
console.log(maximum(array));
