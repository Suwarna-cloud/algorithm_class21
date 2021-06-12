var fixedRect, movingRect;

function setup() {
  createCanvas(1200, 800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  // fixedRect.debug = true;
  movingRect = createSprite(30, 100, 80, 30);
  movingRect.shapeColor = "green";
  // movingRect.debug = true;

  movingRect.velocityX = 5;
  fixedRect.velocityX = -5;
}

function draw() {
  background(0, 0, 0);

  if (isTouching1(movingRect, fixedRect)) {
    fixedRect.shapeColor = "orange";
    movingRect.shapeColor = "orange";
  } else {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  bounceOff1(movingRect, fixedRect);
  //draw();
  drawSprites();
}
