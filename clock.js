//multidimensional array to represent numbers from 0-9
//each number is respresented by 7 segments, each segment has a different level of transparency to determine whether or not it can be seen
var numberSegments = [
  // 0
  [255,0,255,255,255,255,255],
  // 1
  [0,0,0,0,255,0,255],
  // 2
  [255,255,255,0,255,255,0],
  //3
  [255,255,255,0,255,0,255],
  //4
  [0,255,0,255,255,0,255],
  //5
  [255,255,255,0,255,0,255],
  //6
  [255,255,255,0,255,255,255],
  //7
  [255,0,0,0,255,0,255],
  //8
  [255,255,255,255,255,255,255],
  //9
  [255,255,255,255,255,0,255],
]

function drawNumber(x, y, s, number, degrees, rgb = Array(255, 255, 255)){
	//adjustment variables used to allow the shapes to be drawn with 0,0 point as the center of the shapes
	var xAdjuster = -(s * 5) - s / 2;
	var yAdjuster = -(s * 9) / 2;
	//this resets any previous translations
	resetMatrix();
	translate(x, y);
	rotate(degrees);  

	//top horizontal segment
	fill(rgb[0], rgb[1], rgb[2], numberSegments[number][0]);
	rect(xAdjuster + s * 4, yAdjuster + 0, s * 3, s);
	//middle horizontal segment
	fill(rgb[0], rgb[1], rgb[2], numberSegments[number][1]);
	rect(xAdjuster + s * 4, yAdjuster + s * 4, s * 3, s);
	//bottom horizontal segment
	fill(rgb[0], rgb[1], rgb[2], numberSegments[number][2]);
	rect(xAdjuster + s * 4, yAdjuster + s * 8, s * 3, s);
	//top-left vertical segment
	fill(rgb[0], rgb[1], rgb[2], numberSegments[number][3]);
	rect(xAdjuster + s * 3, yAdjuster + s, s, s * 3);
	//top-right vertical segment
	fill(rgb[0], rgb[1], rgb[2], numberSegments[number][4]);
	rect(xAdjuster + s * 7, yAdjuster + s, s, s * 3);
	//bottom-left vertical segment
	fill(rgb[0], rgb[1], rgb[2], numberSegments[number][5]);
	rect(xAdjuster + s * 3, yAdjuster + s * 5, s, s * 3);
	//bottom-right vertical segment
	fill(rgb[0], rgb[1], rgb[2], numberSegments[number][6]);
	rect(xAdjuster + s * 7, yAdjuster + s * 5, s, s * 3);
}

/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
function draw_clock(hour, minute, second, millis, alarm) {
  
	//set up some variables to determine the first and second digits of the current minutes and the digit for the current hour
	var firstMinuteDigit = floor(map(minute, 0, 60, 0, 6));
	var secondMinuteDigit = minute % 10;
	var currentHour = hour % 12;	

	//set angle mode to degrees
	angleMode(DEGREES);
	// use parsley green as the background colour
	fill(26, 86, 34); 
	ellipse(480, 250, 960, 490);
	//set the stroke weight to 0
	strokeWeight(0);
	
	//draw the hours digits 
	//use thunderbird red as the rgb fill colour
	// drawNumber(140, 255, 25, 0, (minute * 6 + floor(second/10)), Array(205, 38, 19));
	// drawNumber(390, 255, 25, currentHour, (minute * 6 + floor(second/10)), Array(205, 38, 19));
	drawNumber(140, 255, 25, 0, 0, Array(205, 38, 19));
	drawNumber(390, 255, 25, currentHour, 0, Array(205, 38, 19));

	//draw the minute digits
	//use lightning yellow as the rgb fill colour
	drawNumber(660, 270, 20, firstMinuteDigit, (minute * 60 + second), Array(255, 204, 26));
	drawNumber(840, 270, 20, secondMinuteDigit, (second * 6), Array(255, 204, 26));
}