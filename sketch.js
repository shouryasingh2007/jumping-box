var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1=createSprite(50,560,150,20);
    box1.shapeColor="red";
    box2=createSprite(220,560,150,20);
    box2.shapeColor="green";
    box3=createSprite(380,560,150,20);
    box3.shapeColor="yellow";
    box4=createSprite(550,560,150,20);
    box4.shapeColor="pink";

    

   //create box sprite and give velocity
   ball=createSprite(400,100,20,20);ball.shapeColor="white";
   ball.x=Math.round(random(20,750));
   ball.velocityX=-5;
   ball.velocityY=5;

}

function draw() {
    background(rgb(169,169,169));

    //add condition to check if box touching surface and make it box
    if(ball.isTouching(box1)){
        ball.shapeColor="red";
    }
    if(ball.isTouching(box2)){
        ball.shapeColor="green";
    }
    if(ball.isTouching(box3)){
        ball.shapeColor="yellow";
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop();

    }
    if(ball.isTouching(box4)){
        ball.shapeColor="pink";
        music.play();
    }
    //create edgeSprite
    edges=createEdgeSprites();
    createEdgeSprites();
    ball.bounceOff(edges);
    ball.bounceOff(box1);
    ball.bounceOff(box2);
    ball.bounceOff(box4);



    drawSprites();
}
