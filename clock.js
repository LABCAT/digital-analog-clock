/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
function draw_clock(hour, minute, second, millis, alarm) {
  
	//set up some variables to determine the first and second digits of the current minutes and the digit for the current hour
	var firstMinuteDigit = floor(map(minute, 0, 60, 0, 6));
	var secondMinuteDigit = minute % 10;
	var currentHour = 12;
	if(hour % 12){
		var currentHour = hour % 12;
	}

	// use parsley green as the background colour
	background(26, 86, 34); 
	//set the stroke weight to 0
	strokeWeight(0);

	
	  
	//use thunderbird red as the fill colour
	fill(205, 38, 19);
	//draw the hours digits (from 1-12) using modulo operation
	drawNumber(12, 360, 145, 30, second);
	  
	//use lightning yellow with 50% transparency as the fill colour
	fill(255, 204, 26, 127);
	//draw the minute digits
	drawNumber(firstMinuteDigit, 560, 180, 20, second);
	drawNumber(secondMinuteDigit, 680, 180, 20, second);
	//drawFirstMinuteDigit(firstMinuteNumber);
	//drawSecondMinuteDigit(secondMinuteNumber);
}

function drawNumber(number, x, y, size, second){
	/* this resets any previous translations */
	resetMatrix();
	translate(x, y);	
	angleMode(DEGREES);
	rotate((second * 6));  
	//draw a collection of rectangles to represent the current hour (from 1-12)
	//to provide a digital representation of the number passed to this funtion
	switch (number) {
		case 0:
			rect(size * 4, 0, size * 3, size);
			rect(size * 4, 0 + size * 6, size * 3, size);
			rect(size * 3, 0 + size, size, size * 5);
			rect(size * 7, 0 + size, size, size * 5);
			break;
		case 1:
			rect(size * 6, 0, size, size * 7);
			rect(size * 5, 0 + size, size, size);
			break;
		case 2:
			rect(size * 4, 0, size * 3, size);
			rect(size * 4, 0 + size * 3, size * 3, size);
			rect(size * 4, 0 + size * 6, size * 3, size);
			rect(size * 3, 0 + size * 4, size, size * 2);
			rect(size * 7, 0 + size, size, size * 2);
			break;
		case 3:
			rect(size * 4, 0, size * 3, size);
			rect(size * 4, 0 + size * 3, size * 3, size);
			rect(size * 4, 0 + size * 6, size * 3, size);
			rect(size * 7, 0 + size * 4, size, size * 2);
			rect(size * 7, 0 + size, size, size * 2);
			break;
		case 4:
			rect(size * 6, 0, size, size * 7);
			rect(size * 5, size, size, size);
			rect(size * 4, size * 2, size, size);
			rect(size * 3, size * 3, size, size);
			rect(size * 3, size * 4, size * 5, size);
			break;
		case 5:
			rect(size * 4, 0, size * 3, size);
			rect(size * 4, 0 + size * 3, size * 3, size);
			rect(size * 4, 0 + size * 6, size * 3, size);
			rect(size * 7, 0 + size * 4, size, size * 2);
			rect(size * 3, 0 + size, size, size * 2);
			break;
		case 6:
			rect(size * 4, 0, size * 3, size);
			rect(size * 4, 0 + size * 3, size * 3, size);
			rect(size * 4, 0 + size * 6, size * 3, size);
			rect(size * 7, 0 + size * 4, size, size * 2);
			rect(size * 3, 0 + size * 4, size, size * 2);
			rect(size * 3, 0 + size, size, size * 2);	
			break;
		case 7:
			rect(size * 6, 0, size, size * 7);
			rect(size * 3, 0, size * 3, size);
			break;
		case 8:
			rect(size * 4, 0, size * 3, size);
			rect(size * 4, 0 + size * 3, size * 3, size);
			rect(size * 4, 0 + size * 6, size * 3, size);
			rect(size * 3, 0 + size * 4, size, size * 2);
			rect(size * 3, 0 + size, size, size * 2);
			rect(size * 7, 0 + size * 4, size, size * 2);
			rect(size * 7, 0 + size, size, size * 2);
			break;
		case 9:
			rect(size * 4, 0, size * 3, size);
			rect(size * 4, 0 + size * 3, size * 3, size);
			rect(size * 4, 0 + size * 6, size * 3, size);
			rect(size * 7, 0 + size, size, size * 2);
			rect(size * 7, 0 + size * 4, size, size * 2);
			rect(size * 3, 0 + size, size, size * 2);	
			break;
		case 10:
			rect(size, 0, size, size * 7);
			rect(0, 0 + size, size, size);
			rect(size * 4, 0, size * 3, size);
			rect(size * 4, 0 + size * 6, size * 3, size);
			rect(size * 3, 0 + size, size, size * 5);
			rect(size * 7, 0 + size, size, size * 5);
			break;
		case 11:
			rect(size * 2, 0, size, size * 7);
			rect(size * 1, 0 + size, size, size);
			rect(size * 6, 0, size, size * 7);
			rect(size * 5, 0 + size, size, size);
			break;
		case 12:
			rect(0 + size, 0, size, size * 7);
			rect(0, 0 + size, size, size); 
			rect(size * 4, 0, size * 3, size);
			rect(size * 4, 0 + size * 3, size * 3, size);
			rect(size * 4, 0 + size * 6, size * 3, size);
			rect(size * 3, 0 + size * 4, size, size * 2);
			rect(size * 7, 0 + size, size, size * 2);
			break;
	}
}