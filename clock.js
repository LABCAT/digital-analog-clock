//multidimensional array to represent numbers from 0-9
//each number is respresented by 7 segments, each segment has a different level of opacity to determine whether or not it can be seen
var numberSegments = [
  // 0
  [255,63,255,255,255,255,255],
  // 1
  [63,63,63,63,63,255,255],
  // 2
  [255,255,255,255,63,63,255],
  //3
  [255,255,255,63,255,63,255],
  //4
  [63,255,63,255,63,255,255],
  //5
  [255,255,255,63,255,63,255],
  //6
  [255,255,255,255,255,63,255],
  //7
  [255,63,63,63,63,255,255],
  //8
  [255,255,255,255,255,255,255],
  //9
  [255,255,255,255,255,63,255],
]

function drawNumber(number, x, y, s, degrees){
	//adjustment variables used to draw the shapes with 0,0 point as the center of the shapes
	var xAdjuster = -(s * 5) - s / 2;
	var yAdjuster = -(s * 9) / 2;
	//this resets any previous translations
	resetMatrix();
	translate(x, y);
	//rotate(degrees);  

	//top horizontal segment
	fill(255, 204, 26, numberSegments[number][0]);
	rect(xAdjuster + s * 4, yAdjuster + 0, s * 3, s);
	//middle horizontal segment
	fill(255, 204, 26, numberSegments[number][1]);
	rect(xAdjuster + s * 4, yAdjuster + s * 4, s * 3, s);
	//bottom horizontal segment
	fill(255, 204, 26, numberSegments[number][2]);
	rect(xAdjuster + s * 4, yAdjuster + s * 8, s * 3, s);
	//top-left vertical segment
	fill(255, 204, 26, numberSegments[number][3]);
	rect(xAdjuster + s * 3, yAdjuster + s, s, s * 3);
	//top-right vertical segment
	fill(255, 204, 26, numberSegments[number][4]);
	rect(xAdjuster + s * 7, yAdjuster + s, s, s * 3);
	//bottom-left vertical segment
	fill(255, 204, 26, numberSegments[number][5]);
	rect(xAdjuster + s * 3, yAdjuster + s * 5, s, s * 3);
	//bottom-right vertical segment
	fill(255, 204, 26, numberSegments[number][6]);
	rect(xAdjuster + s * 7, yAdjuster + s * 5, s, s * 3);
	
	
	//draw a collection of rectangles to provide a digital representation of the number (from 0-12) passed to this funtion
	// switch (number) {
	// 	case 0:
	// 		rect(xAdjuster + s * 4, yAdjuster + 0, s * 3, s);
	// 		rect(xAdjuster + s * 4, yAdjuster + s * 8, s * 3, s);
	// 		rect(xAdjuster + s * 3, yAdjuster + s, s, s * 3);
	// 		rect(xAdjuster + s * 7, yAdjuster + s, s, s * 3);
	// 		rect(xAdjuster + s * 3, yAdjuster + s * 5, s, s * 3);
	// 		rect(xAdjuster + s * 7, yAdjuster + s * 5, s, s * 3);
	// 		break;
	// 	case 1:
	// 		//use lightning yellow with 50% transparency as the fill colour
			

	// 		fill(255, 204, 26, numberSegments[number][0]);
	// 		rect(xAdjuster + s * 4, yAdjuster + 0, s * 3, s);
	// 		fill(255, 204, 26, numberSegments[number][1]);
	// 		rect(xAdjuster + s * 4, yAdjuster + s * 4, s * 3, s);
	// 		fill(255, 204, 26, numberSegments[number][2]);
	// 		rect(xAdjuster + s * 4, yAdjuster + s * 8, s * 3, s);
	// 		fill(255, 204, 26, numberSegments[number][3]);
	// 		rect(xAdjuster + s * 3, yAdjuster + s, s, s * 3);
	// 		fill(255, 204, 26, numberSegments[number][4]);
	// 		rect(xAdjuster + s * 3, yAdjuster + s * 5, s, s * 3);
	// 		fill(255, 204, 26, numberSegments[number][5]);
	// 		rect(xAdjuster + s * 7, yAdjuster + s, s, s * 3);
	// 		fill(255, 204, 26, numberSegments[number][6]);
	// 		rect(xAdjuster + s * 7, yAdjuster + s * 5, s, s * 3);
	// 		break;
	// 	case 2:
	// 		rect(xAdjuster + s * 4, yAdjuster + 0, s * 3, s);
	// 		rect(xAdjuster + s * 4, yAdjuster + s * 4, s * 3, s);
	// 		rect(xAdjuster + s * 4, yAdjuster + s * 8, s * 3, s);	
	// 		rect(xAdjuster + s * 7, yAdjuster + s, s, s * 3);
	// 		rect(xAdjuster + s * 3, yAdjuster + s * 5, s, s * 3);
	// 		break;
	// 	case 3:
	// 		rect(xAdjuster + s * 4, yAdjuster + 0, s * 3, s);
	// 		rect(xAdjuster + s * 4, yAdjuster + s * 4, s * 3, s);
	// 		rect(xAdjuster + s * 4, yAdjuster + s * 8, s * 3, s);	
	// 		rect(xAdjuster + s * 7, yAdjuster + s, s, s * 3);
	// 		rect(xAdjuster + s * 7, yAdjuster + s * 5, s, s * 3);
	// 		break;
	// 	case 4:
	// 		rect(xAdjuster + s * 4, yAdjuster + s * 4, s * 3, s);
	// 		rect(xAdjuster + s * 3, yAdjuster + s, s, s * 3);
	// 		rect(xAdjuster + s * 7, yAdjuster + s, s, s * 3);
	// 		rect(xAdjuster + s * 7, yAdjuster + s * 5, s, s * 3);
	// 		break;
	// 	case 5:
	// 		rect(xAdjuster + s * 4, yAdjuster + 0, s * 3, s);
	// 		rect(xAdjuster + s * 4, yAdjuster + s * 4, s * 3, s);
	// 		rect(xAdjuster + s * 4, yAdjuster + s * 8, s * 3, s);	
	// 		rect(xAdjuster + s * 3, yAdjuster + s, s, s * 3);
	// 		rect(xAdjuster + s * 7, yAdjuster + s * 5, s, s * 3);
	// 		break;
	// 	case 6:
	// 		rect(xAdjuster + s * 4, yAdjuster + 0, s * 3, s);
	// 		rect(xAdjuster + s * 4, yAdjuster + s * 4, s * 3, s);
	// 		rect(xAdjuster + s * 4, yAdjuster + s * 8, s * 3, s);	
	// 		rect(xAdjuster + s * 3, yAdjuster + s, s, s * 3);
	// 		rect(xAdjuster + s * 3, yAdjuster + s * 5, s, s * 3);
	// 		rect(xAdjuster + s * 7, yAdjuster + s * 5, s, s * 3);
	// 		break;
	// 	case 7:
	// 		rect(xAdjuster + s * 4, yAdjuster + 0, s * 3, s);
	// 		rect(xAdjuster + s * 7, yAdjuster + s, s, s * 3);
	// 		rect(xAdjuster + s * 7, yAdjuster + s * 5, s, s * 3);
	// 		break;
	// 	case 8:
	// 		rect(xAdjuster + s * 4, yAdjuster + 0, s * 3, s);
	// 		rect(xAdjuster + s * 4, yAdjuster + s * 4, s * 3, s);
	// 		rect(xAdjuster + s * 4, yAdjuster + s * 8, s * 3, s);
	// 		rect(xAdjuster + s * 3, yAdjuster + s, s, s * 3);
	// 		rect(xAdjuster + s * 7, yAdjuster + s, s, s * 3);
	// 		rect(xAdjuster + s * 3, yAdjuster + s * 5, s, s * 3);
	// 		rect(xAdjuster + s * 7, yAdjuster + s * 5, s, s * 3);
	// 		break;
	// 	case 9:
	// 		rect(xAdjuster + s * 4, yAdjuster + 0, s * 3, s);
	// 		rect(xAdjuster + s * 4, yAdjuster + s * 4, s * 3, s);
	// 		rect(xAdjuster + s * 4, yAdjuster + s * 8, s * 3, s);
	// 		rect(xAdjuster + s * 3, yAdjuster + s, s, s * 3);
	// 		rect(xAdjuster + s * 7, yAdjuster + s, s, s * 3);
	// 		rect(xAdjuster + s * 7, yAdjuster + s * 5, s, s * 3);
	// 		break;
	// 	case 10:
	// 		rect(s, 0, s, s * 7);
	// 		rect(0, 0 + s, s, s);
	// 		rect(s * 4, 0, s * 3, s);
	// 		rect(s * 4, 0 + s * 6, s * 3, s);
	// 		rect(s * 3, 0 + s, s, s * 5);
	// 		rect(s * 7, 0 + s, s, s * 5);
	// 		break;
	// 	case 11:
	// 		rect(s * 2, 0, s, s * 7);
	// 		rect(s * 1, 0 + s, s, s);
	// 		rect(s * 6, 0, s, s * 7);
	// 		rect(s * 5, 0 + s, s, s);
	// 		break;
	// 	case 12:
	// 		rect(0 + s, 0, s, s * 7);
	// 		rect(0, 0 + s, s, s); 
	// 		rect(s * 4, 0, s * 3, s);
	// 		rect(s * 4, 0 + s * 3, s * 3, s);
	// 		rect(s * 4, 0 + s * 6, s * 3, s);
	// 		rect(s * 3, 0 + s * 4, s, s * 2);
	// 		rect(s * 7, 0 + s, s, s * 2);
	// 		break;
	// }
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
	
	  
	//use thunderbird red as the fill colour
	fill(205, 38, 19);
	//draw the hours digits 
	drawNumber(0, 140, 255, 25, (minute * 6 + floor(second/10)));
	drawNumber(currentHour, 390, 255, 25, (minute * 6 + floor(second/10)));

	//draw the minute digits
	drawNumber(firstMinuteDigit, 660, 270, 20, (minute * 60 + second));
	drawNumber(secondMinuteDigit, 840, 270, 20, (second * 6));
}