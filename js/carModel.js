function Car(carWrapper) {
  this.carElement= null;
  this.activeLane = null;

  this.init = function() {
    this.carElement= document.createElement('img');
    this.carElement.setAttribute('src', "./images/images.png");
    this.carElement.style.backgroundRepeat =  'no-repeat';
    this.carElement.style.height = CARHEIGHT + 'px';
    this.carElement.style.width = CARWIDTH + 'px';
    this.carElement.style.position = 'absolute';
    this.carElement.style.backgroundSize = '100px';
    this.carElement.style.bottom = 0 + 'px';
    this.activeLane = LANEPOSITION.second; 
    this.carElement.style.left = LANESCONFIG[this.activeLane] + 'px';
    carWrapper.appendChild(this.carElement);

    window.addEventListener("keydown",this.checkPosition.bind(this));
  }

  this.draw = function(obsLeftValue) {
    this.carElement.style.left = obsLeftValue + 'px';
    this.x += add;
  }

  this.checkPosition = function() {
    if(event.code == "KeyD" || event.code == "KeyA"){ 
    if ((event.code == "KeyD" && this.activeLane == LANEPOSITION.third ) || (event.code == "KeyA" && this.activeLane == LANEPOSITION.first)){
      this.activeLane = this.activeLane;
    }
    else{
      this.activeLane = (event.code == "KeyA")?(this.activeLane - 1):(this.activeLane + 1) ;
      console.log(this.activeLane);
      this.laneUpdate(this.activeLane);  
    }
  }

  else if (event.code == 32){
    new Bullet(getRandomInt(0,5),this.activeLane,carWrapper).init();
  }
  else {
    return;
  }
  }
  
  this.laneUpdate = function(leftUpdate) {
    console.log(leftUpdate);
    this.carElement.style.left = LANESCONFIG[leftUpdate] + 'px';
    
  }
}
