img="";
status1="";
function preload(){
    img= loadImage("parentsroom.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectdetector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";

}
function modelloaded(){
    console.log("Model is Loaded");
    status1=true;
    objectdetector.detect(img,gotresults);
}
function gotresults(error,results){
if(error){
    console.log(error);
}else{
    console.log(results);
}
}
function draw(){
 image(img,0,0,640,420);
}