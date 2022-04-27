
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

}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x= "+results[0].pose.nose.x);
        console.log("nose y= "+results[0].pose.nose.y);
    }
}

function take_snapshot(){
    save("my_filtered_image.png");
}