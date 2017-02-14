console.log('Loaded!');
var sss= document.getElementById("boss");
function moveRight(){
    sss.style.marginRight= '200px';
}
sss.onclick= function(){
  var interval= setInterval(moveRight, 100);
};
