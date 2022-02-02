var Player1,Player1s;
var Player2,Player2s;
var bg,bgs,bgs2;
var database;
function preload() {
    Player1 = loadAnimation("Images/Sprites/Blue/B1.png", "Images/Sprites/Blue/B2.png", "Images/Sprites/Blue/B3.png", "Images/Sprites/Blue/B4.png", "Images/Sprites/Blue/B5.png");
    Player2 = loadAnimation("Images/Sprites/Red/R1.png", "Images/Sprites/Red/R2.png", "Images/Sprites/Red/R3.png", "Images/Sprites/Red/R4.png", "Images/Sprites/Red/R5.png");
  bg=loadImage("Images/Bg/Morning.jpg");
}

function setup(){
createCanvas(windowWidth,windowHeight-2);
 

database = firebase.database();

bgs=createSprite(0,150,windowWidth,windowHeight)
bgs.addImage(bg)
bgs.scale=1

bgs2=createSprite(0,450,windowWidth,windowHeight)
bgs2.addImage(bg)
bgs2.scale=1

Player1s= createSprite(200,200,200,200);
 Player1s.addAnimation("bluePlayer",Player1)

 Player2s=createSprite(200,500,200,200);
 Player2s.addAnimation("redPlayer",Player2)
}

function draw(){
    background("red")
    
    drawSprites()

    bgs.velocityX=-2;
    bgs2.velocityX=-2;

    if(bgs.x<-1000){
        bgs.x=0
    }
    if(bgs2.x<-1000){
        bgs2.x=0
    }
}