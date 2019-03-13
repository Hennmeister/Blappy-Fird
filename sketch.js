var b;
var birdColor;
var gravity;
const NUMBER_OF_PIPES = 4;
var pipes = [NUMBER_OF_PIPES];
var pipeOffset = 500;

function setup() {
  createCanvas(windowWidth, windowHeight);
  b = new bird(30);
	for(var i =0; i<NUMBER_OF_PIPES; i++){
		pipes[i] = new pipe(width + pipeOffset*i);
	}
	birdColor = color(255, 204, 0);
	gravity = (height/750);
	frameRate(120);
}

function draw() {
	background(204, 255, 255);
	b.display();
	ground.display();
	for(var i =0; i<NUMBER_OF_PIPES; i++){
		pipes[i].display();
	}
	update();
}

function update(){
	b.update();
	for(var i =0; i<NUMBER_OF_PIPES; i++){
		pipes[i].move();
		if(pipes[i].x < 0 - pipes[i].width){
			pipes[i] = new pipe(width);
		}
	}
}

function keyPressed(){
	b.isGrounded = false;
	b.frameCounter = frameCount;
}

function mouseClicked(){
	b.isGrounded = false;
	b.frameCounter = frameCount;
}

