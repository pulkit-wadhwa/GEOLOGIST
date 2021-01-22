const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var box1,box2,box3,box4,box5;
var pig1,pig2,ground;
var log1,log2,log3,log4;

function setup() {
	createCanvas(1700, 775);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    box1 = new Stone(700,320,100,100);
    box2 = new Stone(920,320,100,100);
    box3 = new Stone(700,240,100,100);

    pig1= new Rubber(890,350);
    pig2= new Rubber(800,220);

    log1=new Sand(10,260);
    log2=new Sand(50,180);
    log3=new Sand(760,120);
    log4=new Sand(170,130)

    bird=new Hammer(100,100);
    ground = new Ground(850,775,1800,10)

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
  box1.display();
  box2.display();
  box3.display();
  
  pig1.display();
  pig2.display();

  log1.display();
  log2.display();
  log3.display();
  log4.display();
  
  bird.display();
  ground.display();
 
}



