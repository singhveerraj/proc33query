const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
var particles;
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;
var turn = 0;
var gameState = play;
function setup() {
  createCanvas(500,780);
  
  

 engine = Engine.create();
 world = engine.world;

 yLine = createSprite(250,460,500,10);
yLine.shapeColor = "yellow";
ground = new Ground(200,755,605,40);

for(var k = 0; k <= this.width; k = k + 70){
  divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight-10));
}
for(var j = 45; j <=width; j = j+40){
  plinkos.push(new Plinko(j,75));
  
}
for(var j = 22; j <=width - 10; j = j+40){
  plinkos.push(new Plinko(j,150));
  
}
for(var j = 45; j <=width; j = j+40){
  plinkos.push(new Plinko(j,225));
  
}
for(var j = 22; j <=width - 10; j = j+40){
  plinkos.push(new Plinko(j,300));
  
}
for(var j = 45; j <=width; j = j+40){
  plinkos.push(new Plinko(j,225));
  
}


Engine.run(engine);
}

function draw() {
  background(0); 
  ground.display(); 
  textSize(20);
 text("Score : "+score,20,30);
 text("300",20,620);
 text("300",90,620);
 text("100",160,620);
 text("100",230,620);
 text("100",300,620);
 text("200",370,620);
 text("200",440,620);

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }
  particle.display();
 
  drawSprites();
}

function mousePressed(){
  if(gameState!=="end"){
count++;
particle = new Particle(mouseX,10,10,10);
  }
}
