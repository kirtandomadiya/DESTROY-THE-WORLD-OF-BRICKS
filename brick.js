class Brick{
constructor(x,y){
   this.brick1 = loadImage('IMAGES/brick1.png');
   this.brick2 = loadImage('IMAGES/brick2.png');
    this.brick3 = loadImage('IMAGES/brick3.png');
    this.brick4 = loadImage('IMAGES/brick4.png');
    this.brick5 = loadImage('IMAGES/brick5.png');
    this.brick6 = loadImage('IMAGES/brick6.png');
    this.brick7 = loadImage('IMAGES/brick7.png');
    this.brick8 = loadImage('IMAGES/brick8.png');
    this.brick9 = loadImage('IMAGES/brick9.png');
    this.brick10 = loadImage('IMAGES/brick10.png');
this.brick=createSprite(x,y,60,20);


}
display (){
    //drawSprites();
    var rand =Math.round(random(1,7));
    switch(rand){
        case 1: this.brick .addImage('blue',this.brick1); this.brick.scale=0.2;
break;
case 2: this.brick .addImage('blue',this.brick2); this.brick.scale=0.2;
break;
case 3: this.brick .addImage('blue',this.brick3); this.brick.scale=0.2;
break;
case 4: this.brick .addImage('blue',this.brick4); this.brick.scale=0.2;
break;
case 5: this.brick .addImage('blue',this.brick5); this.brick.scale=0.2;
break;
case 6: this.brick .addImage('blue',this.brick6); this.brick.scale=0.2;
break;
case 7: this.brick .addImage('blue',this.brick7); this.brick.scale=0.2;
break;
case 8: this.brick .addImage('blue',this.brick8); this.brick.scale=0.2;
break;
case 9: this.brick .addImage('blue',this.brick9); this.brick.scale=0.2;
break;
case 10: this.brick .addImage('blue',this.brick10); this.brick.scale=0.2;
break;
default:break;

    }
    if(ball.isTouching(this.brick)){
        this.brick.destroy();
        score=score+5
    }
    
}
}
