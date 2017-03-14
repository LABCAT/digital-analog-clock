/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
function draw_clock(hour, minute, second, millis, alarm) {
  
  var firstMinuteNumber = floor(map(minute, 0, 60, 0, 6));
  var secondMinuteNumber = parseInt(minute.toString().substring(1, 2));
  // console.debug(second);
  // console.debug(minute);
  // console.debug(firstMinuteNumber);
  //console.debug(secondMinuteNumber);

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

  //rotate the minute numbers 6 degrees every second
  translate(580, 235);
  angleMode(DEGREES);
  rotate((second * 6));
  
  drawFirstMinuteDigit(firstMinuteNumber);
  drawSecondMinuteDigit(secondMinuteNumber);
 
}

function drawFirstMinuteDigit(number){
    //draw a collection of rectangles (in the position of the first minute digit) 
    //to provide a digital representation of the number passed to this funtion
    switch (number) {
        case 0:
          rect(-110, -40, 20, 100);
          rect(-30, -40, 20, 100);  
          rect(-90, 60, 60, 20);
          rect(-90, -60, 60, 20); 
            break;
        case 1:
          rect(-60, -60, 20, 140);
          rect(-80, -40, 20, 20);
            break;
        case 2:
          rect(-100, -60, 60, 20);
          rect(-100, 0, 60, 20);
          rect(-100, 60, 60, 20);
          rect(-40, -40, 20, 40);
          rect(-120, 20, 20, 40);
            break;
        case 3:
          rect(-100, -60, 60, 20);
          rect(-100, 0, 60, 20);
          rect(-100, 60, 60, 20);
          rect(-40, -40, 20, 40);
          rect(-40, 20, 20, 40);
            break;
        case 4:
          rect(-60, -60, 20, 140);
          rect(-120, 20, 100, 20);
          rect(-100, -20, 20, 20);
          rect(-120, 0, 20, 20);
          rect(-80, -40, 20, 20);
            break;
        case 5:
          rect(-100, -60, 60, 20);
          rect(-100, 0, 60, 20);
          rect(-100, 60, 60, 20);
          rect(-120, -40, 20, 40);
          rect(-40, 20, 20, 40);
            break;
    }
}

function drawSecondMinuteDigit(number){
    //draw a collection of rectangles (in the position of the second minute digit) 
    //to provide a digital representation of the number passed to this funtion
    switch (number) {
        case 0:
          rect(40, -60, 60, 20);
          rect(40, 60, 60, 20);
          rect(20, -40, 20, 100);
          rect(100, -40, 20, 100);
            break;
        case 1:
          rect(80, -40, 20, 20);
          rect(100, -60, 20, 140);  
            break;
        case 2:
          rect(40, -60, 60, 20);
          rect(40, 0, 60, 20);
          rect(40, 60, 60, 20);
          rect(100, -40, 20, 40);
          rect(20, 20, 20, 40);
            break;
        case 3:
          rect(40, -60, 60, 20);
          rect(40, 0, 60, 20);
          rect(40, 60, 60, 20);
          rect(100, -40, 20, 40);
          rect(100, 20, 20, 40);
            break;
        case 4:
          rect(80, -40, 20, 20);
          rect(60, -20, 20, 20);
          rect(40, 0, 20, 20);
          rect(100, -60, 20, 140);
          rect(40, 20, 100, 20);
            break;
        case 5:
          rect(40, -60, 60, 20);
          rect(40, 0, 60, 20);
          rect(40, 60, 60, 20);
          rect(20, -40, 20, 40);
          rect(100, 20, 20, 40);
            break;
        case 6:
          rect(40, -60, 60, 20);
          rect(40, 0, 60, 20);
          rect(40, 60, 60, 20);
          rect(20, -40, 20, 40);
          rect(20, 20, 20, 40);
          rect(100, 20, 20, 40);
            break;
        case 7:
          rect(40, -60, 60, 20);
          rect(100, -60, 20, 140);
            break;
        case 8:
          rect(40, -60, 60, 20);
          rect(40, 0, 60, 20);
          rect(40, 60, 60, 20);
          rect(20, -40, 20, 40);
          rect(100, -40, 20, 40);
          rect(20, 20, 20, 40);
          rect(100, 20, 20, 40);
            break;
        case 9:
          rect(40, -60, 60, 20);
          rect(40, 0, 60, 20);
          rect(40, 60, 60, 20);
          rect(20, -40, 20, 40);
          rect(100, -40, 20, 40);
          rect(100, 20, 20, 40);
            break;
    }
}


