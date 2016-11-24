var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public_html'));
// app.use(express.static('public'));
// app.use(express.static(__dirname)); // Current directory is root
// app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root

app.get('/', function(request, response) {
  response.render('public_html/');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
