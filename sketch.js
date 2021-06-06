var canvas;
var ground;
var together;
var gatoTom, gatoTomImg1, gatoTomImg2, gatoTomImg3;
var ratonJerry, ratonJerryImg1, ratonJerryImg2, ratonJerryImg3;

function preload() {
    ground = loadImage("images/garden.png");
    gatoTomImg1= loadAnimation("images/tomOne.png");
    gatoTomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    gatoTomImg3= loadAnimation("images/tomFour.png");
    ratonJerryImg1=loadAnimation("images/jerryOne.png");
    ratonJerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    ratonJerryImg3=loadAnimation("images/jerryFour.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    gatoTom = createSprite(870, 600);
    gatoTom.addAnimation("gatoTomSleeping", gatoTomImg1);
    gatoTom.scale = 0.2;

    ratonJerry = createSprite(200, 600);
    ratonJerry.addAnimation("ratonJerryStanding", ratonJerryImg1);
    ratonJerry.scale = 0.15;

}

function draw() {

    background(ground);

    if(gatoTom.x - ratonJerry.x < (gatoTom.width - ratonJerry.width)/2)
    { 
        gatoTom.velocityX=0;
        gatoTom.addAnimation("gatoTomLastImage", gatoTomImg3);
        gatoTom.x =300;
        gatoTom.scale=0.2;
        gatoTom.changeAnimation("gatoTomLastImage");
        ratonJerry.addAnimation("ratonJerryLastImage", ratonJerryImg3);
        ratonJerry.scale=0.15;
        ratonJerry.changeAnimation("ratonJerryLastImage");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        gatoTom.velocityX = -5; 
        gatoTom.addAnimation("gatoTomRunning", gatoTomImg2);
        gatoTom.changeAnimation("gatoTomRunning");
        
        ratonJerry.addAnimation("ratonJerryTeasing", ratonJerryImg2);
        ratonJerry.frameDelay = 25;
        ratonJerry.changeAnimation("ratonJerryTeasing");
    }
}