var socket=io.connect('http://localhost:3000/');

function setup(){
    createCanvas(1024,512)
    background(200);
    
}
function draw(){
    
}

function mouseDragged(){
    fill(0);
    socket.emit('draw',{
        x:mouseX,
        y:mouseY,
    })
  
   //ellipse(mouseX,mouseY,30);
    
    
    
}

socket.on('draw',function(data){
    fill(0);
    ellipse(data.x,data.y,30);
})
    
