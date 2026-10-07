let yellowPal = ['#FFD700','#FFE45C','#FFF09A','#FFF7CC','#FFFFFF'];
let bluePal = ['#0066CC','#3399FF','#80BFFF','#CCE6FF','#FFFFFF'];

let unitW, unitH;

// rotation variables
let angle1, angle2, angle3;
let rotSpeed1, rotSpeed2, rotSpeed3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  angle1 = 0;
  angle2 = 0;
  angle3 = 0;

  rotSpeed1 = 2;

  rotSpeed2 = 0.5;

  rotSpeed3 = 1;

  unitW = width/8;
  unitH = height/8;
}

function draw() {
  background(0);

  noFill();
  strokeWeight(10);

//square1
  push();
  translate(width/3, height/2);
  rectMode(CENTER);
  rotate(angle1);

  let sqW1 = unitW*2;
  let sqH1 = unitH*3;

  let numShapes1 = yellowPal.length;
  let spacing1 = 1/numShapes1;

  let sqWSpacing1 = sqW1*spacing1;
  let sqHSpacing1 = sqH1*spacing1;

  for (let i = 0; i < numShapes1; i++) {
    stroke(yellowPal[i]);
    rect(0,0,sqW1,sqH1);

    sqW1 -= sqWSpacing1;
    sqH1 -= sqHSpacing1;
  }

  pop();


  // square2
  push();
  translate((width/3)*2, height/2);
  rectMode(CENTER);
  rotate(angle2);

  let sqW2 = unitW*2;
  let sqH2 = unitH*3;

  let numShapes2 = bluePal.length;
  let spacing2 = 1/numShapes2;

  let sqWSpacing2 = sqW2*spacing2;
  let sqHSpacing2 = sqH2*spacing2;

  for (let i = 0; i < numShapes2; i++) {
    stroke(bluePal[i]);
    rect(0,0,sqW2,sqH2);

    sqW2 -= sqWSpacing2;
    sqH2 -= sqHSpacing2;
  }

  pop();

//circle
  push();
  translate(width/2, height/2);

  let circSize = unitH*2;

  stroke('#66CC88');
  circle(0,0,circSize);

  rotate(angle3);
  line(0,0,circSize/2,0);

  pop();


  angle1 += rotSpeed1;
  angle2 += rotSpeed2;
  angle3 += rotSpeed3;
}