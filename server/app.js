/**
 * Created by JacobSchoolmeesters on 9/25/15.
 */
var express = require('express');

var app = express();

var colorData = require('../modules/colorData');


var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log("Listening at port: " + port);

});

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
    console.log("Hit empty route");
    response.sendFile(__dirname + "/public/views/index.html");
});


app.get('/colorData', function(request, response){
    console.log("fetching the new color data!");
    response.send(colorData);
});