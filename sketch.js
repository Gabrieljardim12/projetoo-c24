const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var martelo1, borracha1;
var pedra1, ferro1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    martelo1 = new martelo(10,100);
    borracha1 = new borracha(500,300, 70);
    pedra1 = new pedra(400,270);
    ferro1 = new ferro(356, 432,);

  
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    martelo1.display();
    borracha1.display();
    pedra1.display();
    ferro1.display();
    
 
}