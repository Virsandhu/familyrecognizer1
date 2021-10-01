https://teachablemachine.withgoogle.com/models/ts8RjG4iR/

Webcam.set({
    height:400,
    width:400,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera')
function snapshot(){

webcam.snap(function(data_uri){
    document.getElementById(result).innerHTML='<img id="captured_image"src="'+data_uri+'">';
})
}

console.log('ml5version:',ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/KhSFBoa8k/model.json',modelLoaded);
function modelLoaded(){
    console.log("model loaded");
}