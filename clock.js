/* 
 * object to encapsulate the variables and functionality
 * required to process the alarm
 */
var alarmProcessor = {
	
	//variables
	countdown: 20,
	
	previousSecond : -1,
	
	alarmRadius : 0,
	
	ready: false,

	//JSON object to represent each character displayed by the drawMessage function
	messageChars: {
		1: { 
			'x': 220,
			'y': 250,
			'char' : 'A'
		},
		2: { 
			'x': 340,
			'y': 250,
			'char' : 'L'
		},
		3: { 
			'x': 460,
			'y': 250,
			'char' : 'E'
		},
		4: { 
			'x': 580,
			'y': 250,
			'char' : 'R'
		},
		5: { 
			'x': 760,
			'y': 250,
			'char' : 'T'
		},
	},
	//this function will be called when the alarm is set
	process: function(second, millis, alarm){
		resetMatrix();
		//if countdown is greater zero, the alarm is no going off yet
		if(this.countdown > 0){
			//to create a warning that the alarm is about to go off,
			//a circle is drawn from the center of the canvas and gradually grows to fill the canvas
			fill(255, 0, 0);
			ellipse(480, 250, this.alarmRadius, this.alarmRadius);
			//only decrease the countdown variable the current second is not the previous second
			if(second != this.previousSecond){
				this.previousSecond = second;
				this.countdown--;
			}
			this.alarmRadius++;
		}
		else if(this.countdown == 0){
			clear();
			//once the alarm is going off, fill the canvas with a red rectangle
			//use a varying level of transparency to create a flashing effect
			var transparency = floor(map(millis, 0, 999, 0, 255));
			fill(255, 0, 0, transparency);
			rect(0, 0, 960, 500);
			this.drawMessage();
			this.ready = false;
		}
	},
	//draws the message "ALERT" when the alarm is going off
	drawMessage: function (){
		for(var i =1; i <= 5; i++){
			drawCharacter(
				this.messageChars[i]['x'], 
				this.messageChars[i]['y'], 
				20, 
				this.messageChars[i]['char'], 
				0, 
				Array(255, 255, 255)
			);
		}

	},
	//when the alarm is turned off this function is used to reset this object to it's original state
	reset: function() {
		if(!this.ready){
			resetMatrix();
			fill(255);
			rect(0, 0, 960, 500);
			this.countdown = 20;
			this.previousSecond = -1;
			this.alarmRadius = 0;
			this.ready = true;
		}
	}
}

/*
 * json object to represent a collection of characters.
 * a character on a traditional digital clock is made of 7 segments
 * therefore each element of this object is an array is of 7 values
 * each value is the level of transparency for each segment to determine whether or not it can be seen
 */
var charSegments = {
  0 : [255,0,255,255,255,255,255],
  1 : [0,0,0,0,255,0,255],
  2 : [255,255,255,0,255,255,0],
  3 : [255,255,255,0,255,0,255],
  4 : [0,255,0,255,255,0,255],
  5 : [255,255,255,255,0,0,255],
  6 : [255,255,255,255,0,255,255],
  7 : [255,0,0,0,255,0,255],
  8 : [255,255,255,255,255,255,255],
  9 : [255,255,255,255,255,0,255],
  10 : [255,0,255,255,255,255,255],
  11 : [0,0,0,255,255,255,255],
  12 : [255,255,255,0,255,255,0],
  'A': [255,255,0,255,255,255,255],
  'L': [0,0,255,255,0,255,0],
  'E': [255,255,255,255,0,255,0],
  'R': [255,0,0,255,0,255,0],
  'T': [255,0,0,255,0,255,0]
}
/*
 * json object to represent each number on the clock face
 * each number has a value for the x position, the y position and the rotation amount (in degrees)
 */
var clockFaceNumbers = {
	1: { 
		'x': 385,
		'y': 420,
		'rotation' : 210
	},
	2: { 
		'x': 315,
		'y': 345,
		'rotation' : 240
	},
	3: { 
		'x': 290,
		'y': 250,
		'rotation' : 270
	},
	4: { 
		'x': 310,
		'y': 155,
		'rotation' : 300
	},
	5: { 
		'x': 385,
		'y': 85,
		'rotation' : 330
	},
	6: { 
		'x': 480,
		'y': 60,
		'rotation' : 360
	},
	7: { 
		'x': 565,
		'y': 80,
		'rotation' : 30
	},
	8: { 
		'x': 640,
		'y': 145,
		'rotation' : 60
	},
	9: { 
		'x': 670,
		'y': 250,
		'rotation' : 90
	},
	10: { 
		'x': 635,
		'y': 355,
		'rotation' : 120
	},
	11: { 
		'x': 575,
		'y': 420,
		'rotation' : 150
	},
	12: { 
		'x': 460,
		'y': 435,
		'rotation' : 180
	}
}

/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
function draw_clock(hour, minute, second, millis, alarm) {
	//set angle mode to degrees
	angleMode(DEGREES);
	//set the stroke weight to 0
	strokeWeight(0);
  
	//variables
	var rotationAmount = floor(map(second, 0, 59, 0, 359));
	var firstMinuteDigit = floor(map(minute, 0, 59, 0, 5.9));
	var secondMinuteDigit = minute % 10;
	var currentHour = 12;
	//if the modulo of hour is not 0 then set currentHour to the modulo
	if(hour % 12){
		currentHour = hour % 12;
	}

	//draw rainbow pattern behind the clockface
	drawRainbowPattern(millis);

	//draw the clock face and highlight the current hour
	drawClockFace(currentHour, rotationAmount);

	//draw the minute digits
	drawCharacter(440, 250, 10, firstMinuteDigit, rotationAmount, Array(70, 151, 255));
	drawCharacter(520, 250, 10, secondMinuteDigit, rotationAmount, Array(70, 151, 255));
	
	if(alarm >= 0 && alarm < 21){
		//if the alarm has less than 21 seconds until it will go, begin the processing the alarm
		alarmProcessor.process(second, millis, alarm);
	}
	else {
		//reset the alarm object when the alarm is turned off
		alarmProcessor.reset();
	}
}

/**
 * draws a random rainbow pattern behind the clock to make the background more visually interesting
 */
function drawRainbowPattern(millis) {
	//create a random fill colour
	fill(random(255), random(255), random(255));
	push();
	translate(480, 250);
	//map millis to degrees, ignores millis greater than 719 so that the value for degree will be either a whole number +/- 0.5
	var degree = map(millis, 0, 719, 0, 359);
	//rotate 0.5 of a degree every millisecond
	rotate(degree);
	rect(0, 0, 480, 2);
	pop();	
}

/**
 * draws the clock background and all the numbers to display on the face
 * @param {Number} currentHour       - the current hour of the day (from 1-12)
 * @param {Number} rotationAmount    - the amount of degrees to rotate 
 */
function drawClockFace(currentHour, rotationAmount){
	var rgb = Array(), rotation = 0;
	
	drawClockBackground();
	
	//draw all the numbers on the clock face
	for(var i =1; i <= 12; i++){
		if(i == currentHour){
			//if "i" is the current hour then change the colour and set it to rotate 6 degrees every second
			rgb = Array(236, 189, 9);
			rotation = clockFaceNumbers[i]['rotation'] + rotationAmount;
		}
		else {
			rgb = Array(11, 247, 48);
			rotation = clockFaceNumbers[i]['rotation'];
		}
		drawCharacter(
			clockFaceNumbers[i]['x'], 
			clockFaceNumbers[i]['y'], 
			10, 
			i, 
			rotation, 
			rgb
		);
	}
	
	
}

/**
 * draws the clock background 
 */
function drawClockBackground() {
	fill(0); 
	ellipse(480, 250, 498, 498);
	fill(70, 151, 255); 
	ellipse(480, 250, 496, 495);
	fill(255);
	ellipse(480, 250, 492, 492);
	fill(2, 4, 103);  
	ellipse(480, 250, 489, 489);
}

/**
 * draws a character on the canvs
 * @param {Number} x       - the x postion for the center of the character
 * @param {Number} y       - the y position for the center of the character
 * @param {Number} s       - the size mulitple to determine how big a character will be
 * @param {Number} degrees - the number of degrees to rotate the character around its center
 * @param {Array} rgb      - an array representing the RGB values that determine the fill colour of the character
 */
function drawCharacter(x, y, s, char, degrees, rgb = Array(255, 255, 255)){
	//adjustment variables used to allow the characters to be drawn with x,y point as the center of the shapes
	var xAdjuster = -(s * 5) - s / 2;
	var yAdjuster = -(s * 9) / 2;
	
	//this resets any previous translations
	resetMatrix();
	translate(x, y);
	rotate(degrees);  

	//top horizontal segment
	fill(rgb[0], rgb[1], rgb[2], charSegments[char][0]);
	rect(xAdjuster + s * 4, yAdjuster + 0, s * 3, s);
	//middle horizontal segment
	fill(rgb[0], rgb[1], rgb[2], charSegments[char][1]);
	rect(xAdjuster + s * 4, yAdjuster + s * 4, s * 3, s);
	//bottom horizontal segment
	fill(rgb[0], rgb[1], rgb[2], charSegments[char][2]);
	rect(xAdjuster + s * 4, yAdjuster + s * 8, s * 3, s);
	//top-left vertical segment
	fill(rgb[0], rgb[1], rgb[2], charSegments[char][3]);
	rect(xAdjuster + s * 3, yAdjuster + s, s, s * 3);
	//top-right vertical segment
	fill(rgb[0], rgb[1], rgb[2], charSegments[char][4]);
	rect(xAdjuster + s * 7, yAdjuster + s, s, s * 3);
	//bottom-left vertical segment
	fill(rgb[0], rgb[1], rgb[2], charSegments[char][5]);
	rect(xAdjuster + s * 3, yAdjuster + s * 5, s, s * 3);
	//bottom-right vertical segment
	fill(rgb[0], rgb[1], rgb[2], charSegments[char][6]);
	rect(xAdjuster + s * 7, yAdjuster + s * 5, s, s * 3);

	//special additions required for the characters '10' and '12'
	if(char == 10 || char == 12){
		fill(rgb[0], rgb[1], rgb[2], charSegments[1][4]);
		rect(xAdjuster + s, yAdjuster + s, s, s * 3);
		fill(rgb[0], rgb[1], rgb[2], charSegments[1][6]);
		rect(xAdjuster + s, yAdjuster + s * 5, s, s * 3);
	}
	//special additions required for the character 'T'
	if(char == "T"){
		fill(rgb[0], rgb[1], rgb[2], 255);
		rect(xAdjuster, yAdjuster + 0, s * 3, s);
	}
}
