var express = require('express');
var morgan = require('morgan');//to help us output logs
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articleOne={
  title:'article-one',
  date:'15 feb 2018',
  list:`<ul> <li>C</li> <li>CPP</li> <li>Javascript</li> <li>PHP</li><li>python</li> </ui>`,
  content:`<h1>I am very Enthusiastic in Techstuffs. Imad attracted me as I got Interested for the mobile application development.</h1>`
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
};


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/article-one', function( req, res){
    res.send(createTemplate(articleOne));
});

app.get('/article-two', function( req, res){
    res.send("article 2 has been requested here");
});

app.get('/article-three', function( req, res){
    res.send("article 3 has been requested here");
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
