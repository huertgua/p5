var diam1=0; 

function setup() {
  // put setup code here
    createCanvas(500,500);
    background("#fcba03");
}

function draw() {
  // put drawing code here
    fill("#7f23db");
    stroke("#7f23db");
    strokeWeight(5);
    ellipse(50,100,30,30);
    fill("#329630");
    stroke("#329630");
    ellipse(200,200,20,20);
    fill("#f5f545");
    stroke("#f5f545");
    ellipse(400,300,60,60);
    fill("#f06c1a");
    stroke("#f06c1a");
    ellipse(100,400,40,40);
    fill("#e3a3d5");
    stroke("#e3a3d5");
    ellipse(470,70,diam1,diam1);
    fill("#4a21cf");
    stroke("#ff7b08")
    ellipse(mouseX,mouseY,20,20)
    stroke("#d5de8a");
    strokeWeight(7);
    textSize(11);
    textFont("Georgia");
    textStyle(ITALIC);
    textAlign(LEFT);
    text("BOUND",30,50);
       // A design for a simple flower
  translate(280, 70);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(10,30,20,80);
    rotate(PI/5);
  }
}

function mousePressed(){
    if(diam1>300){
        diam1=0;
    }else{
    diam1=diam1+17;
    }
    
}