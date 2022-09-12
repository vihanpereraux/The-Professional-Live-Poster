var posterWidth;
var posterHeight;
var capture;
var seriosuly;

function setup() {
  posterWidth = 1080/2;
  posterHeight = 1350/2;

  var posterBackground = createCanvas(posterWidth, posterHeight, WEBGL);
  posterBackground.id('poster-background');
  posterBackground.parent("test");

  capture = createCapture(VIDEO);
  capture.size(posterWidth, posterHeight);
  capture.id('live-feed')

  seriosuly = new Seriously();
  var source = seriosuly.source('#live-feed');
  var target = seriosuly.target('#poster-background')
  seriosuly.go();
}

function draw() {
  clear(); 
  translate(-500, -340, 0); //only for webgl parameter
  image(capture, 0, 0, posterWidth*2.3, posterHeight*1);
  // filter(GRAY);
  
  translate(0, 0, 0);
  noFill();
  stroke(255, 0, 0);
  strokeWeight(.8);
  circle(posterWidth, 0, 300);


  // noFill();
  // stroke(255);
  // strokeWeight(.8);
  // circle(posterWidth, 0, 600);
}
