const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world;
var box1;
var score=0;
var poligon, polygonImg
function preload(){    
polygonImg=loadImage("polygon.png")
}
function setup(){
var canvas = createCanvas(900,400);
engine = Engine.create();
world = engine.world;
ground=new Ground();
stand1=new Stand(390, 300, 250, 10);
stand2=new Stand(700, 200, 200, 10);
box1=new Box(300, 275, 30, 40);
box2=new Box(330, 275, 30, 40);
box3=new Box(360, 275, 30, 40);
box4=new Box(390, 275, 30, 40);
box5=new Box(420, 275, 30, 40);
box6=new Box(450, 275, 30, 40);
box7=new Box(480, 275, 30, 40);
box8=new Box(330, 235, 30, 40);
box9=new Box(360, 235, 30, 40);
box10=new Box(390, 235, 30, 40);
box11=new Box(420, 235, 30, 40);
box12=new Box(450, 235, 30, 40);
box13=new Box(360, 195, 30, 40);
box14=new Box(390, 195, 30, 40);
box15=new Box(420, 195, 30, 40);
box16=new Box(390, 155, 30, 40);
box17=new Box(640, 175, 30, 40);
box18=new Box(670, 175, 30, 40);
box19=new Box(700, 175, 30, 40);
box20=new Box(760, 175, 30, 40);
box21=new Box(670, 135, 30, 40);
box22=new Box(700, 135, 30, 40);
box23=new Box(730, 135, 30, 40);
box24=new Box(700, 95, 30, 40);
polygon=Bodies.circle(50, 200, 20);
World.add(world, polygon);
slingshot=new Slingshot(this.polygon, {x:500, y:50})
}
function draw(){
//if(backgroundImage)    
//background(backgroundImage);
background(0);
Engine.update(engine);
//textSize(25);
//text("score"+score, width-300, 50);
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
slingshot.display();
ground.display();
stand1.display();
stand2.display();
image(polygonImg, polygon.position.x, polygon.position.y, 40, 40);
//console.log(box2.body.position.x);
//console.log(box2.body.position.y);
// console.log(box2.body.angle);
}
function mouseDragged(){
Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY})
}
/*async function getbackgroundImage(){
var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo ");
var responseJSON=await response.json();
var datetime=responseJSON.datetime;
var hour=datetime.slice(11, 13);
if(hour>=06 && hour<=19){
bg="bg.png";
}
else{
bg="bg2.jpg";
}
backgroundImage=loadImage(bg);
}
function keyPressed(){
if(keyCode==32 && gamestate=="launched"){
Matter.Body.setPosition(bird.body, {x:200, y:50})
bird.trjectory=[];
slingshot.attach(bird.body);
gamestate="onsling";
}
}*/