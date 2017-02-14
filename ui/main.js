console.log('Loaded!');
var sss= document.getElementById("boss");
var marginLeft=0;
function moveRight(){
    marginLeft= marginLeft + 10;
    sss.style.marginLeftt= marginLeft + 'px';
}
sss.onclick= function(){
  var interval= setInterval(moveRight, 100);
};
