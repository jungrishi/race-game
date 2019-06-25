function Bullet(yVel, activeLane, parentEle) {
  this.yVel = yVel;
  this.belement = null;
  this.activeLane = activeLane;

  this.init = function() {
    this.belement = document.createElement('div');
    this.belement.style.width = BULLETWIDTH + 'px';
    this.belement.style.height = BULLETHEIGHT + 'px';
    this.belement.style.position = 'absolute';
    this.belement.style.bottom = CARHEIGHT + 'px';
    this.belement.style.background = 'red';
    this.belement.style.left = LANESCONFIG[activeLane] + '100px';
    parentEle.appendChild(this.belement);    
    
    setInterval(this.bulletSetting.bind(this), 20);
  }
  this.bulletSetting = function(){
    this.moveBullet();
    this.update();
    console.log('space bullet');
  }

  this.moveBullet = function() {
    this.belement.style.bottom = this.yVel;
  }

  this.update = function() {
    this.yVel += sub; 
  }
}
