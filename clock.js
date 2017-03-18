//multidimensional array to represent numbers from 0-12
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
  [255,255,255,255,0,0,255],
  //6
  [255,255,255,255,0,255,255],
  //7
  [255,0,0,0,255,0,255],
  //8
  [255,255,255,255,255,255,255],
  //9
  [255,255,255,255,255,0,255],
  //10
  [255,0,255,255,255,255,255],
  //11
  [0,0,0,0,255,0,255],
  //12
  [255,255,255,0,255,255,0]
]

var clockFaceNumbers = {
	1: { 
		'x': 570,
		'y': 80,
		'rotation' : 30
	},
	2: { 
		'x': 640,
		'y': 145,
		'rotation' : 60
	},
	3: { 
		'x': 670,
		'y': 250,
		'rotation' : 90
	},
	4: { 
		'x': 650,
		'y': 355,
		'rotation' : 120
	},
	5: { 
		'x': 570,
		'y': 420,
		'rotation' : 150
	},
	6: { 
		'x': 480,
		'y': 445,
		'rotation' : 180
	},
	7: { 
		'x': 390,
		'y': 420,
		'rotation' : 210
	},
	8: { 
		'x': 320,
		'y': 355,
		'rotation' : 240
	},
	9: { 
		'x': 290,
		'y': 250,
		'rotation' : 270
	},
	10: { 
		'x': 310,
		'y': 155,
		'rotation' : 300
	},
	11: { 
		'x': 380,
		'y': 80,
		'rotation' : 330
	},
	12: { 
		'x': 490,
		'y': 55,
		'rotation' : 360
	},
}


/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
function draw_clock(hour, minute, second, millis, alarm) {
  
	var rotationAmount = floor(map(second, 0, 59, 0, 359));
	//set up some variables to determine the first and second digits of the current minutes and the current hour (12 hour format)
	var firstMinuteDigit = floor(map(minute, 0, 59, 0, 5.9));
	var secondMinuteDigit = minute % 10;
	var currentHour = 12;
	//if the modulo of hour is not 0 then set currentHour to the modulo
	if(hour % 12){
		currentHour = hour % 12;
	}
	
	//set angle mode to degrees
	angleMode(DEGREES);
	//set the stroke weight to 0
	strokeWeight(0);
	
	//draw the clock face and highlight the current hour
	drawClockFace(currentHour, rotationAmount);
	
	//draw the minute digits
	drawNumber(440, 250, 10, firstMinuteDigit, rotationAmount, Array(70, 151, 255));
	drawNumber(520, 250, 10, secondMinuteDigit, rotationAmount, Array(70, 151, 255));
}

function drawClockFace(currentHour, rotationAmount){
	//draw clock background
	fill(0); 
	ellipse(480, 250, 498, 498);
	fill(70, 151, 255); 
	ellipse(480, 250, 496, 495);
	fill(255);
	ellipse(480, 250, 492, 492);
	fill(2, 4, 103);  
	ellipse(480, 250, 489, 489);
	
	var rgb = Array(), rotation = 0;
	//draw all the numbers on the clock face
	for(var i =1; i <= 12; i++){
		if(i == currentHour){
			rgb = Array(236, 189, 9);
			rotation = clockFaceNumbers[i]['rotation'] + rotationAmount;
		}
		else {
			rgb = Array(11, 247, 48);
			rotation = clockFaceNumbers[i]['rotation'];
		}
		drawNumber(
			clockFaceNumbers[i]['x'], 
			clockFaceNumbers[i]['y'], 
			10, 
			i, 
			rotation, 
			rgb
		);
	}
	
	
}

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
	if(number >= 10){
		fill(rgb[0], rgb[1], rgb[2], numberSegments[1][4]);
		rect(xAdjuster + s, yAdjuster + s, s, s * 3);
		fill(rgb[0], rgb[1], rgb[2], numberSegments[1][6]);
		rect(xAdjuster + s, yAdjuster + s * 5, s, s * 3);
	}
}
