console.log('Loaded!');
//write the comments
var element=document.getElementById("main-text");
element.innerHTML="smita is great";
//write a code to change the image
var img=document.getElementById("mandi");
function moveRight(){
    marginRight=marginRight+10;
    img.style.marginRight=marginRight+'px';
    
}
img.onclick=function(){
    var interval=setInterval(moveRight,100);
    
    };