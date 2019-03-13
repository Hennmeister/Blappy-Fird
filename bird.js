class bird {
	constructor(y){
		this.y = y;
		this.size = 50;
		this.x = 50;	
	}
	
	display() {
		fill(birdColor);
		strokeWeight(2);
		ellipse(this.x, this.y, this.size, this.size);
	}
	
	detectCollision() {
			if(this.y + this.size >= height){
					this.y = height - this.size;
			}
	}
	
	update() {
		this.y += 3;
		this.detectCollision();
	}
};