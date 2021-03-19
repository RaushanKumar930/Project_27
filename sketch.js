
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4
var roof, rope1, rope2, rope3, rope4, rope5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);
  
  roof = new Roof(400,350,500,20)

  bob1 = new Bob(200,450,50)
  bob2 = new Bob(300,450,50)
  bob3 = new Bob(400,450,50)
  bob4 = new Bob(500,450,50)
  bob5 = new Bob(600,450,50)


  rope1=new Rope(bob1.body,roof.body,-100*2,0)
  rope2=new Rope(bob2.body,roof.body,-50*2,0)
  rope3=new Rope(bob3.body,roof.body,0*2,0)
  rope4=new Rope(bob4.body,roof.body,+50*2,0)
  rope5=new Rope(bob5.body,roof.body,+100*2,0)

}


function draw() {
  rectMode(CENTER);
  background(300);
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  
  roof.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  keyPr()
  drawSprites();
 
}
function keyPr(){
	if (keyDown("left")){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-130,y:-130})
	}
}


