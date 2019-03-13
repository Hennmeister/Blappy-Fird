class pipe {
	constructor(x) {
		this.x = x;
		this.gapY = height/4 + ((height/2) * Math.random());
		this.gapSize = height/5;
		this.width = 75;
	}
	
	display(){
		strokeWeight(5);
		fill(0,255,0);
		rect(this.x, 0, this.width, this.gapY);
		rect(this.x, this.gapY + this.gapSize, this.width, height - this.gapY + this.gapSize);
	}
	
	move(){
		this.x -= 5;
	}
	
	
}