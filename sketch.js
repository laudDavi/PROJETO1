function setup() {
  createCanvas(3000, 1000);
 background("red");
}

function draw() {

  fill("black");
  stroke("rgb(7,186,245)");
   if(mouseIsPressed) 
  rect(mouseX,mouseY,30,50);
  
}
