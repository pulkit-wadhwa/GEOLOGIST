class Rubber {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y,50,50, options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke("blue");
      strokeWeight(4);
      fill("blue");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  