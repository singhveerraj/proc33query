class Plinko {
    constructor(x,y,r){
        var options={
            isStatic:true
        }
    this.body = Bodies.circle(x,y,10,options);
this.r = r;
World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("white");
        ellipse(pos.x,pos.y,12.5,12.5);
    }
    }