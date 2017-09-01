function persistence(num) {
  if (num.toString().length === 1) {
    return 0;
  }
  else {
    let product = num.toString().split("").map(Number).reduce(function(a, b) {
      return a*b;
    });

    return 1 + persistence(product);
  }
}
