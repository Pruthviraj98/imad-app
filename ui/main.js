console.log('Loaded!');

//change the text of main-text div

var  element=document.getElementById("main-text");

element.innerHTML="newvalue";

var img = document.getElementById("madi");

img.onClick=function(){
    var interval=setInterval(moveLeft, 100);
};