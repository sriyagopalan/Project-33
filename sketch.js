const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;

function preload(){
	backgroundImg = loadImage()
}

function setup() {
	var canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600, height, 1200, 20);

	for (var j = 40; j <=width; j=j+50) {
		plinkos.push(new plinkos(j, 75));
	}

	for (var j = 15; j <=width-10; j=j+50) {
		plinkos.push(new plinko(j, 175));
	}
  
}


function draw() {
  
  background(backgroundImg);
  Engine.run(engine);
	drawSprites();
	particles.display();
	plinkos.display();
	divisions.display();

	for (var j = 0; j < particles.length; j++) {
		particles[j].display();
	}
	for (var k = 0; k < divisions.length; k++) {
		divisions[k].display();
	}
	
}

for (var k = 0; k <=width; k = k + 80) {
	divisions.push(new Divisions(k, height-divisionsHeight/2, 10, divisionHeight));
}

if(frameCount%60===0){
	particles.push(new Particle(random(width/2-10, width/2+10), 10, 10))
}