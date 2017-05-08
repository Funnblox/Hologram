//https://github.com/processing/p5.js/issues/1068 delay function
var playing = false;
var fingers;
var fingers2;
var fingers3
var fingers4
var button;
var i = 1
var mic

function delay(ms) {
var cur_d = new Date();
var cur_ticks = cur_d.getTime();
var ms_passed = 0;
while(ms_passed < ms) {
var d = new Date(); // Possible memory leak?
var ticks = d.getTime();
ms_passed = ticks - cur_ticks;
// d = null; // Prevent memory leak?
}
}

function setup() {

 //list different videos
 fingers2 = createVideo(['Gold Fish Animation (HD) Loop.mp4']);
 fingers = createVideo(['White bird flapping on black background shooting with high speed camera phantom flex.mp4'])
 fingers3 = createVideo(['After effect Sci Fic HUD Gadget Black Background Animation.mp4'])
 fingers4 = createVideo(["Rob Meyer's Re-Edited Princess Leia Message.mp4"])
 //button
 button = createButton(i);
 button.mousePressed(change);
 //mic
 mic = new p5.AudioIn();
 mic.start();
 
}

function change() {
 image(fingers,height,width)
 // fingers.pause();
 // fingers2.pause();
 // fingers3.pause();
 // fingers4.pause();
 fingers.hide()
 fingers2.hide()
 fingers3.hide()
 fingers4.hide()
 clear
 console.log(i)
 if (i === 1) {
  clear
  fingers.show()
  fingers.loop()
  // fingers4.pause();
  fingers4.hide()
  button.html(i);
 }
 if (i === 2) {
  clear
  fingers2.show()
  // fingers.pause()
  fingers2.loop();
  button.html(i);
  fingers.hide()

 }
 if (i === 3) {
  clear
  fingers3.show()
  // fingers2.pause()
  fingers3.loop();
  button.html(i);
  fingers2.hide()
  
 }
 if (i === 4) {
  clear
  fingers4.show()
  // fingers3.pause()
  fingers4.loop();
  button.html(i);
  fingers3.hide()

 }
   i += 1
if(i>4){
i=1
}

}

function draw() {
 micLevel = mic.getLevel();
 console.log(micLevel)
 if(micLevel>0.3){
  change();
 
delay(1000)

  
 }
}