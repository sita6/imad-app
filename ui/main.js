console.log('Loaded!');
//write the comments
var element=document.getElementById("main-text");
element.innerHTML="smita is great";
//write a code to change the image
var img=document.getElementById("mandi");
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
    
}
img.onclick=function(){
    var interval=setInterval(moveRight,100);
    
    };