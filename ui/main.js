var button= document.getElementById("but");
var counter= 0;
button.onclick= function(){
    var request= new XMLHttprequest();
    
    request.onreadystatechange = function(){
        if(request.readyState=== XMLHttprequest.DONE)
        {
            if(request.status=== 200)
            {
                var counter= request.responseText;
                var span= document.getElementById("count");
                span.innerHTML=counter.toString();               
            }
        }
    };
    request.open('GET','http://abhiram97.imad.hasura-app.io/counter',true);
    request.send(null);
};
