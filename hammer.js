class Hammer {
    constructor(x, y, width, height) {
      var options = {
          'restitution':2,
          'friction':1,
          'density':0.5
      }
      this.body = Bodies.rectangle(x, y, 50, 10, options);
      this.width = 50;
      this.height = 10;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x=mouseX;
      pos.y=mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke(255,255,0);
      strokeWeight(4);
      fill(255,255,0);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  