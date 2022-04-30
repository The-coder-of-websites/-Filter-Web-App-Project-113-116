noseX=0;
noseY=0;
right_eye=0;
left_eye=0;

function preload(){
  clown_nose=loadImage('https://i.postimg.cc/Yq9rzmk9/m.png');
  
}



function setup(){
    canvas=createCanvas(500,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500,400);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('Posenet is loaded');
}

function draw(){
    image(video,0,0,500,400);
   
    image(clown_nose,noseX,noseY,55,60);
    
 
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
     
        noseX=results[0].pose.nose.x-30;
        noseY=results[0].pose.nose.y-15;
        
    }
}

function take_snapshot(){
    save("my_filtered_image.png");
}