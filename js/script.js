function Animation(wrapper) {
  var counter = 0;
  this.score =  0;
  var lane = new Lane(velocity, wrapper);
  lane.init();
  setInterval(function(){
    lane.update();
    lane.draw();
    counter ++;},24);

    console.log(counter);
  var car = new Car(wrapper);
  car.init();

function checkCollision () {// optimize
  if (car.activeLane == block.copyObsLane && (CONTAINERHEIGHT - CARHEIGHT) - (block.copyObsPos + CARHEIGHT ) < THRESHOLD){
    return true;//collision
  }
  
  else if(block.copyObsPos == CONTAINERHEIGHT) {
    score += 1;
  }
}
  function reset() {
    SCORES.push(score);    
    score = RESET;
    document.location.reload(true);
    clearInterval();
  }
}
function startGame(){
new Animation(container);
}
