var posterWidth;
var posterHeight;
var capture;
var seriosuly;
var fr;

function setup() {
  // psoter ratios
  posterWidth = 1080/2;
  posterHeight = 1350/2;

  // setting the canvas
  var posterBackground = createCanvas(posterWidth, posterHeight);
  posterBackground.id('poster-background');
  posterBackground.parent("test");
  background(0);
  fr = 5;
  frameRate(fr);

  // getting live feed
  capture = createCapture(VIDEO);
  capture.size(posterWidth, posterHeight);
  capture.id('live-feed');
}

function draw() {

  // layer 01 
  clear(); 
  // translate(-500, -340, 0); //only for webgl parameter
  image(capture, -200, 0, posterWidth*1.7, posterHeight*1); //without webgl params
  // image(capture, 0, 0, posterWidth*2.3, posterHeight*1); //with webgl params
  filter(GRAY);
  drawingContext.filter = 'blur(10px)';
  console.log(frameRate()); //debugging
  
  // layer 02 
  noFill();
  stroke(255);
  strokeWeight(2);
  circle(0, posterHeight, 450);

  // layer 03
  noFill();
  stroke(255);
  strokeWeight(2);
  circle(posterWidth, 0, 600);
  
}
