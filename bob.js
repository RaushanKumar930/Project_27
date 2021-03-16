class Bob {
    constructor(x,y,r){
        var options={
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.body=Bodies.circle(x,y,r,options)
        this.r=50
        World.add(world,this.body)
    }
    display(){
        var angle = this.body.angle;
        push();
        fill("violet")
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        circle(0, 0, 50);
        pop();
    }
}