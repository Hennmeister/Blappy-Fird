var b;
var birdColor;
var gravity;

function setup() {
  createCanvas(windowWidth, windowHeight);
  b = new bird(30);
	birdColor = color(255, 204, 0);
	gravity = (height/750);
	frameRate(120);
}

function draw() {
	background(255);
	b.display();
	ground.display();
	update();
}

function update(){
	b.update();
}

function keyPressed(){
	b.isGrounded = false;
	b.frameCounter = frameCount;
}

function mouseClicked(){
	b.isGrounded = false;
	b.frameCounter = frameCount;
}

