class bird {
	constructor(y){
		this.y = y;
		this.size = 40;
		this.x = width/7;
		this.frameCounter;
		this.yVel = 0;
		this.isGrounded = false;
		this.terminalVel = 15;
	}
	
	display() {
		fill(birdColor);
		strokeWeight(2);
		ellipse(this.x, this.y, this.size, this.size);
	}
	
	fly() {
		this.yVel -= gravity * 5;
		this.isGrounded = false;
	}
	
	detectGroundCollision() {
			if(this.y + this.size >= height){
					this.y = height - this.size;
					this.isGrounded = true;
					this.yVel = 0;
			}
	}
	
	detectPipeCollision() {
		let nearX, nearYUpper, nearYLower, nearestPipe, nearestDist = 10000;
		for(let i = 0; i<NUMBER_OF_PIPES; i++){
			let dist = (pipes[i].x + pipes[i].width) - (this.x + this.size);
			if(dist >= 0 && dist < nearestDist){
				nearestDist = dist;
				nearestPipe = pipes[i];
			}	
		}
		nearestPipe.color = ("black");
		
		nearX = this.nearestValue(this.x, nearestPipe.x, nearestPipe.x + nearestPipe.width);
		console.log(nearX);
		
		nearYUpper = this.nearestValue(this.y, 0, nearestPipe.gapY);
		nearYLower = this.nearestValue(this.y, nearestPipe.gapY + nearestPipe.gapSize, height);
		
		//calculate distances
		let upperDist = Math.sqrt(Math.pow(nearX - this.x, 2) + Math.pow(nearYUpper - this.y, 2));
		if(upperDist < this.size) {
			reset();
			return;
		}
		let LowerDist = Math.sqrt(Math.pow(nearX - this.x, 2) + Math.pow(nearYUpper - this.y, 2));
		if(LowerDist < this.size){
			reset();
		}
	}
		
	nearestValue(c, r1, r2) {
		if(c <= r1) return r1;
		if(c >= r2) return r2;
		else return c;
	}
	
	update() {
		if(!this.isGrounded){
			this.yVel += gravity / 2;
		}
		if(this.yVel > this.terminalVel){
			this.yVel = this.terminalVel;
		}
		else if(this.yVel < this.terminalVel*-1) {
				this.yVel = this.terminalVel*-1;
		}
		this.y += this.yVel;
		this.detectGroundCollision();
		this.detectPipeCollision();
		if(frameCount - this.frameCounter < 5){
			 this.fly();
		}
	}
};