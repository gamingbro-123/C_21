function bounceOff()
{
  if(rect1.x-rect2.x <= (rect1.width+rect2.width)/2
&& rect2.x-rect1.x <= (rect1.width+rect2.width)/2) 
    
{
  rect1.velocityX = -1 * rect1.velocityX; 
}
}

function isTouching(movObject, Object2)
{
  if(movObject.x-Object2.x <= (movObject.width+Object2.width)/2
&& Object2.x-movObject.x <= (movObject.width+Object2.width)/2
&& movObject.y-Object2.y <= (movObject.height+Object2.height)/2
&& Object2.y-movObject.y <= (movObject.height+Object2.height)/2 )
{
  console.log("Is Touching");
  return true;
}
else
{
  return false;
}
}