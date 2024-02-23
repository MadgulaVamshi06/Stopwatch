 let hr = 0;
 let min = 0;
 let sec = 0;
 let count = 0;

 let timer = false;
 

function start(){
  timer = true;
  stopwatch();
}
function stopp(){
  clearInterval
    timer = false;
}
function reset(){
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0 ;
    document.getElementById("sec").innerText = "00";
}

function stopwatch(){
  if (timer == true){
    count = count+1;

    if (count == 100){
        sec = sec +1;
        count = 0;
    }

    if(sec == 60){
        min = min +1;
        sec = 0;
    }
    if(min == 60){
        hr = hr +1 ;
        min = 0;
        sec = 0
    }
    document.getElementById("hr").innerText = `${formatTime(hr)}`;
    document.getElementById("min").innerText = `${formatTime(min)}`;
    document.getElementById("sec").innerText = `${formatTime(sec)}`;
    setTimeout("stopwatch()",10)

    function formatTime(value) {
        return value.toString().padStart(2, '0');
      }
  }
}