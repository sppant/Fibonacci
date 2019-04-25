function fib(n) {
  console.log(n);
  var result = [];
  var temp = 0;
  for (var i = 0; i < n; i++) {
    if (i <= 1) {
      temp = i;
    } else {
      temp = result[i - 2] + result[i - 1];
    }
    result.push(temp);
    console.log(result);
  }
}

//fib(10);
