var redb, b1;
var blueb, b2;
var greenb, b3;
var pinkb, b4;
var bow, bowImage;
var bg, bgImage;
var arrow, bannaarrow;
var score;
var arrowGroup;
var blueg;
var rg;
var pg;
var gg;

function preload() {
  //load your images here

  bgImage = loadImage("background0.png");

  b1 = loadImage("red_balloon0.png");

  b2 = loadImage("blue_balloon0.png");

  b3 = loadImage("green_balloon0.png");

  b4 = loadImage("pink_balloon0.png");

  bowImage = loadImage("bow0.png");
  bannaarrow = loadImage("arrow0.png");

}

function setup() {
  createCanvas(600, 600);

  score = 0;

  //add background
  bg = createSprite(0, 0, 600, 600);
  bg.addImage("background", bgImage);
  bg.x = bg.width / 2;
  bg.velocityX = -3;
  bg.scale = 3;
  //add code here

  billoo = createSprite(460, 300, 20, 20);
  billoo.addImage("billoo", bowImage);
  billoo.scale = 1;

  arrowGroup = new Group();
  blueg = createGroup();
  rg = createGroup();
  pg = createGroup();
  gg = createGroup();


  var rand = Math.round(random(1, 300));
}

function draw() {
  background("white");
  //add code here

  billoo.y = World.mouseY;

  if (bg.x < 0) {
    bg.x = bg.width / 2;
  }

  if (keyDown("space")) {
    releaseArrows();
  }

  if (arrowGroup.isTouching(blueg)) {

    arrowGroup.destroyEach();
    blueg.destroyEach();
    score = score + 1;
  }

  if (arrowGroup.isTouching(rg)) {

    arrowGroup.destroyEach();
    rg.destroyEach();
    score = score + 1;
  }

  if (arrowGroup.isTouching(gg)) {

    arrowGroup.destroyEach();
    gg.destroyEach();
    score = score + 1;
  }

  if (arrowGroup.isTouching(pg)) {

    arrowGroup.destroyEach();
    pg.destroyEach();
    score = score + 1;
  }

  spawnballoons();


  drawSprites();


  textSize(40);
  fill("black");
  text("Score : " + score, 400, 50);

}

function releaseArrows() {

  arrow = createSprite(460, 300, 20, 20);
  arrow.addImage("bannaarrow", bannaarrow);
  arrow.scale = 0.3;
  arrow.y = billoo.y;
  arrow.velocityX = -5;
  arrow.lifetime = 120;
  arrowGroup.add(arrow);
}





function spawnballoons() {

  if (frameCount % 80 === 0) {

    redb = createSprite(-5, 100, 20, 20);
    redb.addImage("redBalloon", b1);
    redb.scale = 0.1;
    redb.velocityX = 3;
    redb.lifetime = 200;
    rg.add(redb);
  }

  if (frameCount % 100 === 0) {

    blueb = createSprite(-5, 200, 20, 20);
    blueb.addImage("blueBalloon", b2);
    blueb.scale = 0.12;
    blueb.velocityX = 3;
    blueb.lifetime = 200;
    blueg.add(blueb);
  }

  if (frameCount % 120 === 0) {

    greenb = createSprite(-5, 350, 20, 20);
    greenb.addImage("greenBalloon", b3);
    greenb.scale = 0.15;
    greenb.velocityX = 3;
    greenb.lifetime = 200;
    gg.add(greenb);
  }

  if (frameCount % 140 === 0) {

    pinkb = createSprite(-5, 500, 20, 20);
    pinkb.addImage("pinkBalloon", b4);
    pinkb.scale = 1;
    pinkb.velocityX = 3;
    pinkb.lifetime = 200;
    pg.add(pinkb);
  }
}