var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

/*var article={
    articleone :{title: 'Article-one | IMAD 2017 | Abhiram97',
    heading:'Article one',
    date: '5 june 2015',
    content: `
        <p>
            this is the first paragraph
        </p>
        <p>
            this is the second paragraph
        </p>
        <p>
            this is the second paragraph
        </p> `},
    articletwo :{
        title: 'Article-two | IMAD 2017 | Abhiram97',
    heading:'Article one',
    date: '5 june 2015',
    content: `
        <p>
            this is the first paragraph
        </p>
        <p>
            this is the second paragraph
        </p>
        <p>
            this is the second paragraph
        </p>
    `
    },
    articlethree :{
        title: 'Article-three | IMAD 2017 | Abhiram97',
    heading:'Article one',
    date: '5 june 2015',
    content: `
        <p>
            this is the first paragraph
        </p>
        <p>
            this is the second paragraph
        </p>
        <p>
            this is the second paragraph
        </p>
    `
    }
};*/

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


/*function template(data){
    var title= data.title;
    var heading= data.heading;
    var date= data.date;
    var content= data.content;
var htmltemplate=`<html>
    <head>
        <title>
            ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="contain">
        <div><a href="/">home</a></div>
        <hr/>
        
      <h2>
      ${heading}
      </h2>  
        <div>
          
        ${date}
    </div>
    <div>
        ${content}
    </div>
    </div>
    </body>
    
</html>`;
return htmltemplate;
}*/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
   res.send(template(article[articleName]));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
