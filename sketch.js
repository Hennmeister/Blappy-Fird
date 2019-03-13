var b;
var x, y;
var birdColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  b = new bird(30);
	birdColor = color(255, 204, 0);
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
	b.y -= 100;
}

function mouseClicked(){
	b.y -= 100;
}

