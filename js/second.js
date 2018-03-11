function lastDigit() {
    var arr = [];
    if (arr.length === 0) {
      return 1;
    }
    var rev_arr = arr.reverse();
    var k = 0;
    var final;
    exponent = rev_arr[k];
    while (k < arr.length) {
      if (arr[k+1] === undefined) {
        var to_string = exponent.toString();
        var last_char = to_string.substr(to_string.length - 1);
        return parseInt(last_char);
      } else {
        base = rev_arr[k+1];
        if (base == 0 && exponent == 0) {
          exponent = 1;
          k++
        } else {
          exponent = Math.pow(base, exponent);
          k++;
      }
    }
  }
}

//   var test = 1;
//   for (var i=0; i<387420486; i++) {
//     test = n * test;
//   }
//   console.log(test);
// }

addEventListener('load', lastDigit);
