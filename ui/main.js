var button=document.getElementById('counter');

button.onclick=function(){
   //make a request
var request =new XMLHtmlRequest();
//capture the response and store it in the variable
request.onreadystatechange=function(){
    if (request.readyState==XMLHtmlRequest.Done){
        if(request.status==200){
            var counter=request.responseText;
            var span=document.getElementById('count');
            span.innerHTML=counter.toString();
            
            
        }
    }
    
};
//make a request
request.open('GET','http://http://smitan.imad.hasura-app.io/',true);
request.send(null);
};

