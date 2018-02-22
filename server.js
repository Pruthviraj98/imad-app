var express = require('express');
var morgan = require('morgan');//to help us output logs
var path = require('path');

var Pool=require('pg').Pool;
var config={
    user:'pruthvirajrpatil2016',
    database:'pruthvirajrpatil2016',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password: process.env.DB_PASSWORD
};



var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

//new pool creating..
var pool=new Pool(config);

app.get('/test-db', function(req, res){
   //make select request
   //resturn response with results
   pool.query('SELECT * from test', function(err, result){
      if(err)
      {
          res.status(500).send(err.toString());
      }
      else
      {
          res.send(JSON.stringify(result.rows));
      }
   });
});




var articles=
{
'article-one':
{
  title:'article-one',
  date:'15 feb 2018',
  list:`<ul> <li>C</li> <li>CPP</li> <li>Javascript</li> <li>PHP</li><li>python</li> </ui>`,
  content:`<h1>I am very Enthusiastic in Techstuffs. Imad attracted me as I got Interested for the mobile application development.</h1>`
},
'article-two':
{  
  title:'article-two',
  date:'16 feb 2018',
  list:`<ul> <li>C</li> <li>CPP</li> <li>Javascript</li> <li>PHP</li><li>python</li> </ui>`,
  content:`<h1>I am telling again that very Enthusiastic in Techstuffs. Imad attracted me as I got Interested for the mobile application development. :p</h1>`
},
'article-three':
{ 
  title:'article-three',
  date:'17 feb 2018',
  list:`<ul> <li>CPP</li> <li>Javascript</li> <li>PHP</li><li>python</li> </ui>`,
  content:`<h1>I am telling t=you again and again very Enthusiastic in Techstuffs. Imad attracted me as I got Interested for the mobile application development :P.</h1>`
}
};



function createTemplate(data)
{
    title=data.title;
    list=data.list;
    date=data.date;
    content=data.content;
    var htmlTemplate=
        `<!doctype html>
        <html>
        <title>${title}</title>
        <head>This is the article-one</head>
        <h2>${date}</h2>
        <body>
        <h1>This is the list of Programming languages that I know</h1>
        ${list}
        <br>
        <br>
        <div class="second" style="background-color:black; color:white">
        ${content}
        </div>
        </body>
        </html>`;  

    return htmlTemplate;
}





var counter=0;
app.get('/counter', function(req, res){
   counter=counter+1;
   res.send(counter.toString());
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
})

var names=[];
app.get('/submit-name', function(req, res)
{
    //////////////////////////////////////////////////
    ////method of json by using the variable in the url;
    
    //get the name from the request object
    var name=req.query.name ;
    names.push(name);
    
    //JSON= Javascript objects Notation
    res.send(JSON.stringify(names));

    /////////////////////////////////////////////
    
    ////another method of using query method using : URL: /submit-name?name=XXXXXX
    ///the things after '?' is called as the query parmeter. so replace the param to query this will work than.
});


app.get('/:articleName', function( req, res){
    //for ex: articleName==article-one 
    //articles[articleName]=={}content object for article one
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80


var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
