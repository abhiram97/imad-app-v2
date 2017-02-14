console.log('Loaded!');
var sss= document.getElementById("boss");
var marginLeft=0;
function moveRight(){
    marginLeft= marginLeft + 10;
    sss.style.marginLeft= marginLeft + 'px';
}
sss.onclick= function(){
  var interval= setInterval(moveRight, 50);
};
var a= document.getElementById("but");

a.onclick= function(){
  var b= document.getElementById("count");  
  counter= counter + 1;
  b.innerHTML=counter;
};