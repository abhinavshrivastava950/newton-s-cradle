class Bob {
    constructor(x, y, radius) {
        var options = {
            'isStatic':false,
            'restitution':0.9,
            'friction':1.0,
            'density':1.2
        }
        this.body = Matter.Bodies.circle(x, y, radius, options);
        this.radius= radius;
        

        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("red")
        ellipseMode(RADIUS);
        ellipse(0 , 0 , 30 , 30 );
        pop();
      }
    };


