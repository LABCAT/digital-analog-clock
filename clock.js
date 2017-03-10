/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
function draw_clock(hour, minute, second, millis, alarm) {
  background(204); // light gray background
  strokeWeight(8); // Stroke weight to 8 pixels
  ellipse(480, 250, 190, 190);
  // The rectangle draws on top of the ellipse
  // because it comes after in the code
  rect(500, 280, 260, 20);
}
