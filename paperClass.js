class Paper{
    constructor(x,y,radius){
        var options = {
           
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
            
        }
   this.body=Bodies.circle(x,y,radius,options);
   this.radius = radius;
   this.image = loadImage("paper.png");
   this.scale = 0.25;
   World.add(world, this.body);
        }
        display(){
            
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(3);
            fill(117,114,114)
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
			ellipse(0,0,this.radius, this.radius);
			pop()
        }

} 