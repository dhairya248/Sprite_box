var box
function setup() {
  createCanvas(300,300); 
      
  box= createSprite(150,150,20,30)
}

function draw() 
{
  background(30);
  drawSprites();

  if(keyIsDown(LEFT_ARROW))
  {
    box.x=box.x-3;
  }
  if(keyIsDown(RIGHT_ARROW))
  {
    box.x=box.x+3;
  }
  if(keyIsDown(DOWN_ARROW))
  {
    box.y=box.y+3;
  }
  if(keyIsDown(UP_ARROW))
  {
    box.y=box.y-3;
  }

}




