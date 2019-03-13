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
	
	log () {
		console.log(this.y);
	}
	
	update() {
		push();
		this.y += 1;
		log();
	}
};