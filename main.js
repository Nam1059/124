function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(550,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('poses', gotPoses);
}

function modelLoaded()
{
    console.log('..Posenet Is Initialized..');
}

function draw()
{
   background('#8B0000');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}