const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
backgroundImg = loadImage("images/GamingBackground.png");
}

function setup() {
createCanvas(3000, 800);
engine = Engine.create();
world = engine.world;

ground = new Ground(600,600,1500,20);
hero = new Hero(200,200,250);
monster = new Monster(1150,200,200,200);
fly = new Fly(hero.body,{x:500,y:50});
Block1 = new Block(900,100,70,70);
  Block2 = new Block(900,100,70,70);
  Block3 = new Block(900,100,70,70);
  Block4 = new Block(900,100,70,70);
  Block5 = new Block(900,100,70,70);
  Block6 = new Block(900,100,70,70);
  Block7 = new Block(800,100,70,70);
  Block8 = new Block(800,100,70,70);
  Block9 = new Block(800,100,70,70);
  Block10 = new Block(800,100,70,70);
  Block11 = new Block(800,100,70,70);
  Block12 = new Block(800,100,70,70);
  Block13 = new Block(700,100,70,70);
  Block14 = new Block(700,100,70,70);
  Block15 = new Block(700,100,70,70);
  Block16 = new Block(700,100,70,70);
  Block17 = new Block(700,100,70,70);
  Block18 = new Block(700,100,70,70);
  Block19 = new Block(700,100,70,70);
  Block20 = new Block(700,100,70,70);
  

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  ground.display();
  hero.display();
  fly.display();
  monster.display();
  Block1.display();
  Block2.display();
  Block3.display();
  Block4.display();
  Block5.display();
  Block6.display();
  Block7.display();
  Block8.display();
  Block9.display();
  Block10.display();
  Block11.display();
  Block12.display();
  Block13.display();
  Block14.display();
  Block15.display();
  Block16.display();
  Block17.display();
  Block18.display();
  Block19.display();
  Block20.display();

}
function mouseDragged(){
Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

