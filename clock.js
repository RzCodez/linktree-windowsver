function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    // var s = date.getSeconds(); 
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    // s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m  ;
    document.getElementById("DigitalCLOCK").innerText = time;
    document.getElementById("DigitalCLOCK").textContent = time;
    
    setTimeout(showTime, 1000);
    
}
 
showTime();

function clockTick() {
    // let dateString = document.querySelector("#date");
    // dateString.innerText = moment().format("dddd, MMMM Do");
    // dateString.textContent = moment().format("dddd, MMMM Do");   
  }
  
  setInterval(clockTick, 1000);
