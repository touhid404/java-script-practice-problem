function minimum(values) {
    let min = values[0];
    for (const v of values) {
      if (v < min) {
        min = v;
      }
    }
    return min;
  }
  
  const array = [20,4,7,8,5,3,2];
  console.log(minimum(array));
  