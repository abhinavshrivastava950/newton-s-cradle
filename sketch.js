
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof1, bob1, rope1;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(windowWidth/2, windowHeight/2-100, 300, 30);

	bob1 = new Bob(windowWidth/2-120, windowHeight/2+100, 30);
	bob2 = new Bob(windowWidth/2-60, windowHeight/2+100, 30);
	bob3 = new Bob(windowWidth/2, windowHeight/2+100, 30);
	bob4 = new Bob(windowWidth/2+60, windowHeight/2+100, 30);
	bob5 = new Bob(windowWidth/2+120, windowHeight/2+100, 30);

	rope1 = new Rope(bob1.body, roof1.body, -120, 0);
	rope2 = new Rope(bob2.body, roof1.body, -60, 0);
	rope3 = new Rope(bob3.body, roof1.body, 0, 0);
	rope4 = new Rope(bob4.body, roof1.body, 60, 0);
	rope5 = new Rope(bob5.body, roof1.body, 120, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  
  
  drawSprites();
 
}

function keyPressed (){
	if (keyCode===LEFT_ARROW){
	Body.applyForce(bob1.body,bob1.body.position, {x:-150 , y: -100 })
	
	}
	
	
	if (keyCode ===RIGHT_ARROW){
		Body.applyForce(bob5.body,bob5.body.position, {x:150 , y: 100} )
	}
	
	}
	//function mouseDragged(){
	//	Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
	//	Matter.Body.setPosition(bob5.body, {x: mouseX , y: mouseY});
	//}
	//if(touches.length > 0 && trex.y  >= height-120) {
	//	jumpSound.play()
	//	trex.velocityY = -10;
		 touches = [];
	//  }
	
