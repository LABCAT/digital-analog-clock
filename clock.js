/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
function draw_clock(hour, minute, second, millis, alarm) {
  // use parsley green as the background colour
  background(26, 86, 34); 
  //set the stroke weight to 0
  strokeWeight(0);
  
  //first create the number to represent hours
  
  //use thunderbird red as the fill colour
  fill(205, 38, 19);
	
  //create the number 4 by drawing 5 rectangles
  rect(290, 145, 30, 210);
  rect(200, 265, 150, 30);
  rect(200, 235, 30, 30);
  rect(230, 205, 30, 30);
  rect(260, 175, 30, 30);
  
  //next create the numbers to represent minutes
  
  //use lightning yellow with 50% transparency as the fill colour
  fill(255, 204, 26, 127);
  
  //create the number 0 by drawing 4 rectangles
  rect(470, 195, 20, 100);
  rect(550, 195, 20, 100);
  rect(490, 295, 60, 20);
  rect(490, 175, 60, 20);
  
  //create the number 8 by drawing 7 rectangles
  rect(620, 175, 60, 20);
  rect(620, 235, 60, 20);
  rect(620, 295, 60, 20);
  rect(600, 195, 20, 40);
  rect(680, 195, 20, 40);
  rect(600, 255, 20, 40);
  rect(680, 255, 20, 40);
}
