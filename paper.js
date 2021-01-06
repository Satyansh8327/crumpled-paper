class Paper{
    constructor(x,y){
      var options ={
          'isStatic':false,
          'restitution':0.8,
          'friction':0.3,
          'density':1.2
      }
      this.body=Bodies.circle(x,y,10,options);
      this.radius=10

      World.add(world,this.body)

    }
    display(){
        var pos = this.body.position
        var angle=this.body.position
        
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius*2,this.radius*2)
        pop();
    }

}