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


var nameInput=document.getElementById("name");
name=nameInput.value;
var submit=document.getElementById('submit_button');

submit.onclick=function()
{
    
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
                for(i=0;i<names.length;i++)
                {
                list+='<li>'+names[i]+'</li>';
                }
                
                var ul=document.getElementById('namelist');
                ul.innerHTML=list;  
            }
        }
    };

    //make the request
    request.open('GET', 'http://pruthvirajrpatil2016.imad.hasura-app.io/sumbit-name?name=' + name, true);
    request.send(null);
};