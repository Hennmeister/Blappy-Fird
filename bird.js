class bird {
	constructor(y){
		this.y = y;
		this.size = 50;
		this.x = 50;
		this.frameCounter;
	}
	
	display() {
		fill(birdColor);
		strokeWeight(2);
		ellipse(this.x, this.y, this.size, this.size);
	}
	
	fly() {
		this.y-= 20;
	}
	
	detectCollision() {
			if(this.y + this.size >= height){
					this.y = height - this.size;
			}
	}
	
	update() {
		this.y += 5;
		this.detectCollision();
		if(frameCount - this.frameCounter < 10){
			 this.fly();
		}
	}
};