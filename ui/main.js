//console.log('Loaded!');

//change the text of main-text div

//var  element=document.getElementById("main-text");

//element.innerHTML="newvalue";
/*
var img = document.getElementById("madi");

var marginLeft=0;

function moveRight(){
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
}

img.onclick=function(){
    var interval=setInterval(moveRight, 100);
};*/

var button=document.getElementById('counter');

button.onclick=function()
{
    
    //create the reqest object
    var request=new XMLHttpRequest();
    
    //capture the request and stare it in the variable
    request.onreadystatechange=function()
    {
        if(request.readyState==XMLHttpResponse.DONE)
        {
            //take some action
            if(request.status==200)
            {
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    };

    //make the request
    request.open('GET', 'http://pruthvirajrpatil2016.imad.hasura-app.io/counter', true);
    request.send(null);
};


var element=document.getElementById("counter");
var counter=0;


element.onclick=function(){
//make a request to the counter end point;
counter=counter+1

//capture the response and store it in a variable
var span=document.getElementById("count");

//render the incremented counter value to the spanned area.
span.innerHTML=counter.toString();
}