class Dustbin{
    constructor(x,y,width,height){
        var options={
            'isStatic':true,
            'restitution' :0.3,
            'friction':0.8,
            'density':0.3
        }
        this.dustbin=Bodies.rectangle(x,y,width,height,options)

        World.add(world,this.dustbin)
    }
    display(){
        var position=this.dustbin.position
        push();
        translate(position.x,position.y)
        rectMode(CENTER)
        rect(position.x,position.y,this.dustbin.width,this.dustbin.height)
        pop();
    }
}