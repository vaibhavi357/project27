
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof, rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(300, 400, 50, 50);
	bobObject2 = new Bob(350, 400, 50, 50);
	bobObject3 = new Bob(400, 400, 50, 50);
	bobObject4 = new Bob(450, 400, 50, 50);
	bobObject5 = new Bob(500, 400, 50, 50);

	roof = new Roof(400, 200, 350, 20);

	rope1 = new Rope(300, 294, 2, 165);
	rope2 = new Rope(350, 294, 2, 165);
	rope3 = new Rope(400, 294, 2, 165);
	rope4 = new Rope(450, 294, 2, 165);
	rope5 = new Rope(500, 294, 2, 165);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof.display();
  
  drawSprites();
 
}



