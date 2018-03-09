function formatDuration() {
  var x = document.getElementById('seconds').value;
  var arr = [];
  if (x == 0) {
    arr.push("now")
  }
  while (x > 0) {
    switch(true) {
      case (x>=31536000):
          var a = x / 31536000;
          if (Math.floor(a) === 1) {
            arr.push(Math.floor(a) + " year")
          } else {
            arr.push(Math.floor(a) + " years")
          }
          a = Math.floor(a) * 31536000;
          x = x - a;
      break;
      case (x>=86400 && x<31536000):
          var a = x / 86400;
          if (Math.floor(a) === 1) {
            arr.push(Math.floor(a) + " day")
          } else {
            arr.push(Math.floor(a) + " days")
          }
          a = Math.floor(a) * 86400;
          x = x - a;
      break;
      case (x>=3600 && x<86400):
          var a = x / 3600;
          if (Math.floor(a) === 1) {
            arr.push(Math.floor(a) + " hour")
          } else {
            arr.push(Math.floor(a) + " hours")
          }
          a = Math.floor(a) * 3600;
          x = x - a;
      break;
      case (x>60 && x<3600):
          var a =  x / 60;
          if (Math.floor(a) === 1) {
            arr.push(Math.floor(a) + " minute")
          } else {
            arr.push(Math.floor(a) + " minutes")
          }
          a = Math.floor(a) * 60;
          x = x - a;
        break;
      case (x>0 && x<=60):
        if (x === 1) {
          arr.push(x + " second")
        } else {
          arr.push(x + " seconds")
        }
        x = 0;
      break;
    }
  }
  if (arr.length > 1) {
    var sec = arr.slice(-1).pop();
    var test = arr.pop();
    arr.join(", ");
    return arr.join(", ") + " and " + sec;
  } else {
    return arr.join(", ");
  }

}

document.getElementById('send_sec').addEventListener('click', formatDuration);
