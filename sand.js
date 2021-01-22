class Sand {
  constructor(x, y) {
    var options = {
        'restitution':1.3,
        'friction':5,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y,10,10, options);
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    stroke(255,0,0);
    strokeWeight(4);
    fill(255,0,0);
    rect(0, 0, this.width, this.height);
    pop();
  }
};
