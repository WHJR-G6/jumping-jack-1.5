
var player,player2;
var platform,platform2;
var player_image, platform_image;
var platformGroups;

function preload(){
  player_image=loadImage("images/jack2.png")
  platform_image = loadImage("images/p1.png");
  player2_image=loadImage("images/jack2.png")
  platform2_image = loadImage("images/p2.png");
}

function setup() {
  createCanvas(500, 500);
  player = createSprite(250,300,20,50);
  player.addImage("player",player_image)

  platform = createSprite(250,350,100,10);
  platform.addImage("platform", platform_image)
  platform.scale=0.15;
  platformGroups = new Group(); 

  
}

function draw() {
  background('#F2F5B6');
  
  if(keyDown("up"))
  {
    player.velocityY=-10
  }

  player.velocityY = player.velocityY +0.8;
  player.collide(platform)

  spawnPlatform();
  
  drawSprites();
}

function spawnPlatform(){
 if(frameCount % 40 ===0){
    var platforms = createSprite(250,0,50,50);
  platforms.velocityY = 5;
  platforms.scale = 0.1;
  platformGroups.add(platforms);
  platforms.x = random(0,500);
  platforms.lifetime = 120;
  }
}








