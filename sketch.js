const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bob1,bob2,bob3,bob4,bob5

function setup() {
  createCanvas(1360,600);

  engine = Engine.create();
  world = engine.world;

  bob1 = new Bob(580,450)
  bob2 = new Bob(630,450)
  bob3 = new Bob(680,450)
  bob4 = new Bob(730,450)
  bob5 = new Bob(780,450)
}

function draw() {
  background(0);  
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
}