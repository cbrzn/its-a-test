function formatDuration() {
  var x = document.getElementById('seconds').value;
  var arr = [];
  while (x > 0) {
    switch(true) {
      // case (x>0 && x<60):
      //   console.log(x + " segundos");
      //   x = 0;
      // break;
      case (x>3600 && x<=86400):
          var a = x / 3600;
          console.log(Math.floor(a) + " horas");
          a = Math.floor(a) * 3600;
          x = x - a;
      break;
      case (x>60 && x<=3600):
          var a =  x / 60;
          console.log(Math.floor(a) + " minutos");
          a = Math.floor(a) * 60;
          x = x - a;
        break;
      case (x>0 && x<60):
        console.log(x + " segundos");
        x = 0;
      break;
    }
  }
  return arr;
}

document.getElementById('send_sec').addEventListener('click', formatDuration);
