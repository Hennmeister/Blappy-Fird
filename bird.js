class bird {
	constructor(y){
		this.y = y;
		this.size = 50;
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
	
	detectCollision() {
			if(this.y + this.size >= height){
					this.y = height - this.size;
					this.isGrounded = true;
					this.yVel = 0;
			}
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
		this.detectCollision();
		if(frameCount - this.frameCounter < 5){
			 this.fly();
		}
		console.log(this.yVel);
	}
};