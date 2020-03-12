var express=require('express');
var socket=require('socket.io');
var cors=require('cors');

var app=express();

var server=app.listen(3000,function(){
   console.log("Server is running!"); 
});

app.use(express.static('public'));
app.use(cors());


var io=socket(server);

io.on("connection",function(socket){
   console.log("Connection made! "+socket.id); 
   
   socket.on('draw',function(draw){
       io.sockets.emit('draw',draw);
   })
    
    
    
    
});


