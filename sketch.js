
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ball_options;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);

var ball_options={
	isStatic:false,
	restitution:0.4,
	friction:1,
	density:1

}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



