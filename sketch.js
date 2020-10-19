const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand;
var polygon, polygon_img;
var sling;

var gameState = "onSling";

function preload()
{
  polygon_img = loadImage("Images/polygon1.gif");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  var options={
    'restitution':0.8,
    'friction':1.0,
    'density':1.0
  }
 
  polygon = Bodies.circle(200, 300, 50, options);
  World.add(world, polygon);
  
  ground = new Ground(400, 390, 800, 20);
  
  stand = new Ground(505, 300, 180, 20);
  
  box1 = new Box(445, 270, 30, 50);
  box2 = new Box(475, 270, 30, 50);
  box3 = new Box(505, 270, 30, 50);
  box4 = new Box(535, 270, 30, 50);
  box5 = new Box(565, 270, 30, 50);
  box7 = new Box(460, 220, 30, 50);
  box8 = new Box(490, 220, 30, 50);
  box9 = new Box(520, 220, 30, 50);
  box10 = new Box(550, 220, 30, 50);
  box12 = new Box(475, 170, 30, 50);
  box13 = new Box(505, 170, 30, 50);
  box14 = new Box(535, 170, 30, 50);
  box16 = new Box(490, 120, 30, 50);
  box17 = new Box(520, 120, 30, 50);
  box18 = new Box(505, 70, 30, 50);
  
  sling = new SlingShot(polygon, {x:100, y:300});
}

function draw() {
  background(201, 222, 245);  
  Engine.update(engine);

  ground.display();

  stand.display();
  

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box12.display();
  box13.display();
  box14.display();
  box16.display();
  box17.display();
  box18.display();

  image(polygon_img, polygon.position.x, polygon.position.y, 50, 50);

  sling.display();

  //drawSprites();
}

function mouseDragged()
{
  if(gameState !== "launched")
  {
    Matter.Body.setPosition(polygon, {x:mouseX, y:mouseY});
  }
}

function mouseReleased()
{
  sling.fly();
  gameState = "launched";
}

function KeyPress()
{
  if(KeyCode === 32)
  {
    gameState = "onSling";
    Matter.Body.setPosition(polygon.body, {
      x: 100,
      y: 300
  });
    sling.attach(polygon.body);
  }
}