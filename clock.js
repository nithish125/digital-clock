 setInterval(showTime, 1000);
 function showTime() {
 var time2=new Date()
var hors=document.getElementById("hors")
var min=document.getElementById("min")
var sec=document.getElementById("sec")
 var ap=document.getElementById("ap")
var time1=time2.getHours()
var min1=time2.getMinutes()
var sec2=time2.getSeconds()
if(time1>12){
    time1 =time1-12
    ap.innerText="pm"
}
else if(time1==12){
    ap.innerText="am"
}

hors.innerHTML= time1
min.innerHTML= min1
sec.innerHTML= sec2
console.log(time1)
 }
 

 //clock.append(time1+":"+min+":"+sec)