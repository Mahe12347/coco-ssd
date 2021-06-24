img="";
status="";
object=[];

function setup()
{
canvas=createCanvas(380,380);
canvas.center();
video=createCapture(VIDEO);
video.size(380,380);
video.height()
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status:Detecting objects";

}
function modelLoaded(){
    console.log("Model Loaded!")
    status=true;
    objectDetector.detect(video,gotResult);
}
function preload(){
    img=loadImage('dog_cat.jpg');
}
function gotResult(error,results){
if (error) {
    console.log(error);
}
console.log(results);
objects=results;
}
function draw(){
    image(video,0,0,380,380);

    if(status !="")
    {
        r=random(225);
        g=random(225);
        b=random(225);
      objectDetector.detect(video,gotResults);
        for(i=0;i<objects.legth;i++)
        document.getElementById("status").innerHTML="status:object Detected";
document.getElementById("number_of_objects").innerHtml="Number of objects detected are:"+objects.length;
        fill(r,g,b);
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+""+percent+"%",objects[i],x+15,objects[i].y+15);
        noFill();
        stroke(r,g,b);
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
fill(r,g,b);
text("dog",45,75);
noFill();
stroke(r,g,b);
rect(30,60,450,350);

fill(r,g,b);
text("cat",320,120);
noFil();
stroke(r,g,b);
rect(300,90,270,320);
}