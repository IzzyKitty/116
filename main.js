var nose_x=""
var nose_y=""
function preload(){
lipstick=loadImage('https://i.postimg.cc/PxFvYgkv/l1.png')
}

function setup(){
canvas=createCanvas(400,400)
canvas.center()
video=createCapture(VIDEO)
video.size(400,400)
video.hide()
poseNet=ml5.poseNet(video,modelloaded)
poseNet.on('pose',gotPoses)
}

function draw(){
image(//i.postimg.cc/PxFvYgkv/l1.png)
}

function modelloaded(){
console.log("posenet has been started");
}

function gotPoses(results){
if(results.length>0){
console.log(results);
console.log("nose-x" +results[0].pose.nose.x);
console.log("nose-y" +results[0].pose.nose.y);
nose_x=results[0].pose.nose.x-10
nose_y=results[0].pose.nose.y-10
}
}