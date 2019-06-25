function CreateObstacle(x,parentEle){
  this.x = x;
  this.obstacleElement = null;

  this.init = function(pos) {
    this.obstacleElement = document.createElement('img');
    this.obstacleElement.setAttribute('src', "../images/simple.png");
    this.obstacleElement.style.backgroundRepeat =  'no-repeat';
    this.obstacleElement.style.height = CARHEIGHT + 'px';
    this.obstacleElement.style.width = CARWIDTH + 'px';
    this.obstacleElement.style.position = 'absolute';
    this.obstacleElement.style.top = this.x + 'px';
    this.obstacleElement.style.left = LANESCONFIG[pos] + 'px';
    this.copyObsLane = pos;
    parentEle.appendChild(this.obstacleElement);

    setInterval(this.callObs(),2);
  }
  this.callObs = function(){
    this.draw();
    this.update();
  }
  this.draw = function () {
    this.obstacleElement.style.top = this.x + 'px';
    this.copyObsPos = this.x;
  }
  this.update = function(){
    this.x += add ;
    console.log('update obj'+this.x);
  }

}


