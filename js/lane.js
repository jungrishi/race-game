var container = document.getElementById('container');
container.style.height = CONTAINERHEIGHT + 'px';
container.style.width = CONTAINERWIDTH + 'px';
container.style.overflow = 'hidden';
container.style.position = 'relative';
container.style.margin = '0px auto';


function Lane(y, parentEle) {
  this.x = 0;
  this.vel =y;
  this.element = null;
  this.startTime =null;

  this.init = function(){
    // this.startTime = new Date().getSeconds();
    this.element = document.createElement('div');
    this.element.setAttribute('class', 'ele');
    this.element.style.width = WIDTH + 'px';
    this.element.style.height = HEIGHT + '%';
    this.element.style.backgroundImage = "url('./images/laneBackground.png')";
    this.element.style.position = 'absolute';
    this.element.style.backgroundSize = '600px';
    this.element.style.backgroundRepeat = 'repeat-y';
    this.element.style.margin = '0px auto';
    parentEle.appendChild(this.element);
  }

  this.draw = function () {
    // this.element.style.marginTop = this.x + 'px';
    this.element.style.backgroundPositionY = this.x + 'px';

  }

  this.update = function(){
    this.x += sub;
  }

  // this.checkTime = function() {
  //   currentTime = new Date().getSeconds();
  //   // if (startTime - currentTime > 200){
  //   //   // this.vel = -5;
  //   //   console.log('timmer on');
  //   // }
  // }
}
