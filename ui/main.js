//console.log('Loaded!');

//change the text of main-text div

//var  element=document.getElementById("main-text");

//element.innerHTML="newvalue";
/*
var img = document.getElementById("madi");

var marginLeft=0;

function moveRight()
{
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
}

img.onclick=function()
{
    var interval=setInterval(moveRight, 100);
};*/



var button=document.getElementById("counter");

button.onclick=function()
{
    var request=new XMLHttpRequest();
    request.onsteadystatechange=function()
    {
        if(request.readyState===XMLHttpRequest.DONE)
        {
            if(request.status===200)
            {
                var count=request.responseText;
                var a=document.getElementById('count');
                a.innerHTML=count;
            }
        }
    };
    
    request.open('GET', 'http://pruthvirajrpatil2016.imad.hasura-app.io/:counter', true);
    request.send(null);
};





var submit=document.getElementById('submit_button');

submit.onclick=function()
{
    var nameInput=document.getElementById('name');
    var name=nameInput.value;
    //create the reqest object
    var request=new XMLHttpRequest();
    //capture the request and stare it in the variable
    request.onreadystatechange=function()
    {
        if(request.readyState===XMLHttpRequest.DONE)
        {
            //take some action
            if(request.status===200)
            {
                var names=request.responseText;
                names=JSON.parse(names);
                var list='';
                for(var i=0;i<names.length;i++)
                {
                list+='<li>'+names[i]+'</li>';
                }
                var ul=document.getElementById('namelist');
                ul.innerHTML=list;  
            }
        }
    };

    //make the request
    request.open('GET', 'http://pruthvirajrpatil2016.imad.hasura-app.io/submit-name?name='+name, true);
    request.send(null);
};