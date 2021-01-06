class Ground{
    constructor(x,y){
    var options={
        'isStatic':true,
        'restitution':0.3,
        'friction':0.8,
        'density':0.5
    }
    this.ground=Bodies.rectangle(x,y,1600,50,options)


    World.add(world,this.ground)
    }

    display(){
    var position=this.ground.position    
    
    push();
    translate(position.x,position.y)
    rectMode(CENTER)
    rect(position.x,position.y,this.ground.width,this.ground.height)
    pop();
    }
}