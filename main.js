function a(){
     date = new Date;
     h = date.getHours();
    // console.log(hours);
     m = date.getMinutes();
    // console.log(min);
     s = date.getSeconds();
    // console.log(sec);

    var hoursrotation = 30*h+m/2;
    var minrotation = 6*m;
    var secrotation = 6*s;

    sec.style.transform =  `rotate(${secrotation}deg)`;
    min.style.transform =  `rotate(${minrotation}deg)`;
    hours.style.transform =  `rotate(${hoursrotation}deg)`;
    setTimeout(a,1000);
}