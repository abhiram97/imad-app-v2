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
var count=0;
a.onclick= function(){
  var b= document.getElementById("count");  
  count= count + 1;
  b.innerHTML=count;
};