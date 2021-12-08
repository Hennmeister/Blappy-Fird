class pipe {
	constructor(x) {
		this.speed = 6;
		this.color = color(0,255,0);
		this.x = x;
		this.gapY = height/4 + ((height/2) * Math.random());
		this.gapSize = height/5;
		this.width = 100;
	}
	
	display(){
		strokeWeight(5);
		fill(this.color);
		rect(this.x, 0, this.width, this.gapY);
		rect(this.x, this.gapY + this.gapSize, this.width, height - this.gapY + this.gapSize);
	}
	
	move(){
		this.x -= this.speed;;
	}	
}