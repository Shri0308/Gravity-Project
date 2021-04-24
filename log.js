class Log {
    constructor (x,y,hieght,angle){
        var options = {
            friction:0.3,
            desinty:1.0, 
            restitution:0.8
        }
        this.body = Bodies.rectangle(x,y,20,height,options);
        this.widht = 20;
        this.height = height;
        Matter.Body.setAngle (this.body,angle)
        World.add(world, this.body);
        }
    
        display (){
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            translate (pos.x,pos.y);
            rotate (angle);
            rectMode(CENTER);
            fill ("brown");
            rect (0,0,this.widht,this.height);
            pop();
    }
}  