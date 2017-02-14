var button= document.getElementById('but');
button.onclick= function(){
  counter= counter +1;
  span= document.getElementById('count');
  span.innerHTML=counter.toString();
};