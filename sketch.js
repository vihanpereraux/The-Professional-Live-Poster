var posterWidth;
var posterHeight;
var capture;
var seriosuly;

function setup() {
  posterWidth = 1080/2;
  posterHeight = 1350/2;

  var myCanvas = createCanvas(posterWidth, posterHeight);
  myCanvas.parent("test");

  capture = createCapture(VIDEO);
  capture.size(posterWidth, posterHeight);

  seriosuly = new Seriously();
  seriosuly.go();
}

function draw() {
  clear();
  image(capture, 0, 0, posterWidth*1.6, posterHeight);
  filter(GRAY);
  
  noFill();
  stroke(255);
  strokeWeight(.8);
  circle(0, posterHeight, 400);

  noFill();
  stroke(255);
  strokeWeight(.8);
  circle(posterWidth, 0, 600);
}
