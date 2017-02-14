var button= document.getElementById("but");
var counter= 0;
button.onclick= function(){
  counter= counter +1;
  span= document.getElementById("count");
  span.innerHTML=counter.toString();
};