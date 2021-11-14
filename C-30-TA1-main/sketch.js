const Engine = Matter.Engine
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
const World = Matter.World

function preload() {
background1 = loadImage("./assets/background.png")
melon = loadImage("./assets/melon.png")
rabbit = loadImage("./assets/Rabbit-01.png")

}


function setup() 
{
  createCanvas(500,600);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;

  button = createImg('./assets/cut_btn.png'); 
  button.position(200,30); 
  button.size(50,50); 
  button.mouseClicked(drop);

  ground = new Ground(200,580,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

bunny = createSprite(250,550,100,100)
bunny.addImage(rabbit)
bunny.scale = 0.2

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  image(background1,0,0,displayWidth+8,displayHeight)
  rope.show();
  image(melon,fruit.position.x-10,fruit.position.y-30,30,30);
  Engine.update(engine);
  ground.show();
 
   drawSprites()
}

function drop(){
  rope.break()
  fruit_con.detach()
  fruit_con = null
}