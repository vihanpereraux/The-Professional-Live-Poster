var posterWidth;
var posterHeight;
var capture;
var seriosuly;
var fr;
var layerOneRandomPosition;
var layerOneRandomRadius;
var layerTwoRandomPosition;
var layerTwoRandomRadius;
var mainHeadingInput; 
var mainHeading; 
var textBlockOneColor;
var textBlockTwoColor;
var arrowIconColor;
var mainHeadingColor;
var textBlockThreeColor;


function setup() {
  // poster ratios
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

  // setting the default value
  localStorage.setItem("savedMainHeading", "Luke the professional");
  localStorage.setItem("textBlockOneColor", '#ffffff');
  localStorage.setItem("textBlockTwoColor", '#ffffff');
  localStorage.setItem("textBlockThreeColor", '#ffffff');
  localStorage.setItem("arrowIconColor", '#ffffff');
  localStorage.setItem("mainHeadingColor", '#ffffff');
}

function draw() {
  clear();  
  
  // applying custom names
  mainHeading = document.getElementById("main-heading"); 
  mainHeadingInput = document.getElementById('main-heading-input').value;
  localStorage.setItem("savedMainHeading", mainHeadingInput);
  mainHeading.innerHTML = localStorage.getItem('savedMainHeading');

  controlColors();

  // layer 01 
  drawingContext.filter = 'blur(15px)'; // applying the blur effect
  scale(-1, 1);
  image(capture, -800, 0, posterWidth*1.7, posterHeight*1); //without webgl params
  filter(GRAY);
  console.log(frameRate()); //debugging
  drawingContext.filter = 'none';  // removing the blur effect

  // layer 02 
  scale(-1, 1);
  noFill();
  stroke(255);
  strokeWeight(2);
  layerOneRandomPosition = (0, windowWidth);
  layerOneRandomRadius = (200, 500);
  circle(random(layerOneRandomPosition), posterHeight, random(layerOneRandomRadius));

  // layer 03
  noFill();
  stroke(255);
  strokeWeight(2);
  circle(random(posterWidth, 0), 0, random(400, 600)); 
}


function controlColors(){
  // calling all the properties
  textBlockOneColor = localStorage.getItem('textBlockOneColor');
  textBlockTwoColor = localStorage.getItem('textBlockOneColor');
  textBlockThreeColor = localStorage.getItem('textBlockOneColor');
  arrowIconColor = localStorage.getItem('textBlockOneColor');
  mainHeadingColor = localStorage.getItem('textBlockOneColor');

  var textBlockOne = document.getElementById('first-text');
  textBlockOne.style.color = textBlockOneColor;

  var textBlockTwo = document.getElementById('second-text');
  textBlockTwo.style.color = textBlockTwoColor;

  var arrowIcon = document.getElementById('arrow-icon');
  arrowIcon.style.color = arrowIconColor;

  var textBlockThree = document.getElementById('bottom-text');
  textBlockThree.style.color = textBlockThreeColor;

  var mainHeading = document.getElementById('main-heading');
  mainHeading.style.color = mainHeadingColor;
}
