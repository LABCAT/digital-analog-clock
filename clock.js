/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
function draw_clock(hour, minute, second, millis, alarm) {
  
	//set up some variables to determine the first and second digits of the current minutes and the digit for the current hour
	var firstMinuteDigit = floor(map(minute, 0, 60, 0, 6));
	var secondMinuteDigit = minute % 10;
	var currentHour = 12;
	//if house is not 0 or 23 use the modulo function to set the currentHour variable
	if(hour % 12){
		var currentHour = hour % 12;
	}

	//set angle mode to degrees
	angleMode(DEGREES);
	// use parsley green as the background colour
	background(26, 86, 34); 
	//set the stroke weight to 0
	strokeWeight(0);
	
	  
	//use thunderbird red as the fill colour
	fill(205, 38, 19);
	//draw the hours digits 
	drawNumber(currentHour, 360, 255, 25, (second * 6));
	  
	//use lightning yellow with 50% transparency as the fill colour
	fill(255, 204, 26, 127);
	//draw the minute digits
	drawNumber(firstMinuteDigit, 560, 270, 15, (second * 6));
	drawNumber(secondMinuteDigit, 680, 270, 15, (second * 6));
}

function drawNumber(number, x, y, s, degrees){
	//this resets any previous translations
	resetMatrix();
	translate(x, y);
	rotate(degrees);  
	
	//draw a collection of rectangles to provide a digital representation of the number (from 0-12) passed to this funtion
	switch (number) {
		case 0:
			rect(s * 4, 0, s * 3, s);
			rect(s * 4, 0 + s * 6, s * 3, s);
			rect(s * 3, 0 + s, s, s * 5);
			rect(s * 7, 0 + s, s, s * 5);
			break;
		case 1:
			rect(s * 6, 0, s, s * 7);
			rect(s * 5, 0 + s, s, s);
			break;
		case 2:
			rect(s * 4, 0, s * 3, s);
			rect(s * 4, 0 + s * 3, s * 3, s);
			rect(s * 4, 0 + s * 6, s * 3, s);
			rect(s * 3, 0 + s * 4, s, s * 2);
			rect(s * 7, 0 + s, s, s * 2);
			break;
		case 3:
			rect(s * 4, 0, s * 3, s);
			rect(s * 4, 0 + s * 3, s * 3, s);
			rect(s * 4, 0 + s * 6, s * 3, s);
			rect(s * 7, 0 + s * 4, s, s * 2);
			rect(s * 7, 0 + s, s, s * 2);
			break;
		case 4:
			rect(s * 6, 0, s, s * 7);
			rect(s * 5, s, s, s);
			rect(s * 4, s * 2, s, s);
			rect(s * 3, s * 3, s, s);
			rect(s * 3, s * 4, s * 5, s);
			break;
		case 5:
			rect(s * 4, 0, s * 3, s);
			rect(s * 4, 0 + s * 3, s * 3, s);
			rect(s * 4, 0 + s * 6, s * 3, s);
			rect(s * 7, 0 + s * 4, s, s * 2);
			rect(s * 3, 0 + s, s, s * 2);
			break;
		case 6:
			rect(s * 4, 0, s * 3, s);
			rect(s * 4, 0 + s * 3, s * 3, s);
			rect(s * 4, 0 + s * 6, s * 3, s);
			rect(s * 7, 0 + s * 4, s, s * 2);
			rect(s * 3, 0 + s * 4, s, s * 2);
			rect(s * 3, 0 + s, s, s * 2);	
			break;
		case 7:
			rect(s * 6, 0, s, s * 7);
			rect(s * 3, 0, s * 3, s);
			break;
		case 8:
			rect(s * 4, 0, s * 3, s);
			rect(s * 4, s * 3, s * 3, s);
			rect(s * 4, s * 6, s * 3, s);
			rect(s * 3, s * 4, s, s * 2);
			rect(s * 3, s, s, s * 2);
			rect(s * 7, s * 4, s, s * 2);
			rect(s * 7, s , s, s * 2);
			break;
		case 9:
			rect(s * 4, 0, s * 3, s);
			rect(s * 4, 0 + s * 3, s * 3, s);
			rect(s * 4, 0 + s * 6, s * 3, s);
			rect(s * 7, 0 + s, s, s * 2);
			rect(s * 7, 0 + s * 4, s, s * 2);
			rect(s * 3, 0 + s, s, s * 2);	
			break;
		case 10:
			rect(s, 0, s, s * 7);
			rect(0, 0 + s, s, s);
			rect(s * 4, 0, s * 3, s);
			rect(s * 4, 0 + s * 6, s * 3, s);
			rect(s * 3, 0 + s, s, s * 5);
			rect(s * 7, 0 + s, s, s * 5);
			break;
		case 11:
			rect(s * 2, 0, s, s * 7);
			rect(s * 1, 0 + s, s, s);
			rect(s * 6, 0, s, s * 7);
			rect(s * 5, 0 + s, s, s);
			break;
		case 12:
			rect(0 + s, 0, s, s * 7);
			rect(0, 0 + s, s, s); 
			rect(s * 4, 0, s * 3, s);
			rect(s * 4, 0 + s * 3, s * 3, s);
			rect(s * 4, 0 + s * 6, s * 3, s);
			rect(s * 3, 0 + s * 4, s, s * 2);
			rect(s * 7, 0 + s, s, s * 2);
			break;
	}
}