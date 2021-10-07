var speech_recognition=window.webkitSpeechRecognition;
var recognition=new speech_recognition();
 function start() {
     document.getElementById("textbox").innerHTML="";
     recognition.start();

 }
 recognition.onresult=function run(event) {
    var content=event.results[0][0].transcript;
    console.log(content);
    console.log(event);
    document.getElementById("textbox").innerHTML=content;

    if (content=="take my selfie") {
        console.log("taking selfie");
        speak();
    }
 }  

 function speak() {
     var synth=window.speechSynthesis;
     speak_data="taking your selfie in five seconds";
     var utterthis=new SpeechSynthesisUtterance(speak_data);
     synth.speak(utterthis);
     setTimeout(function(){
        take_snapshot(); 
        save();
     },5000);
     Webcam.attach(camera);

 }
 Webcam.set({
     width:360,height:250,image_format:"png", png_quality:90
 });

 camera=document.getElementById("camera");

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie" src="'+data_uri+'">';
        
    });
}
function save() {
    link=document.getElementById("link");
    image=document.getElementById("selfie").src;
    link.href=image;
    link.click();
}