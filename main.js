function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/f9b9Mpiwc/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
if(error){
    console.log(error);
}
else{
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = "I can hear-"+results[0].label;
    document.getElementById("result_confidence").innerHTML = "Acuuracy - "+ (results[0].confidence*100).toFixed(2) +"%";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
img = document.getElementById("alien1");
img1 = document.getElementById("alien2");
img2 = document.getElementById("alien3");
img3 = document.getElementById("alien4");

if(results[0].label=="Barking"){
    document.getElementById("picture").src = "download(1).jpg";
   
}
else if(results[0].label == "Meowing"){
    document.getElementById("picture").src = "c2.jpg";
   
}
else if(results[0].label == "Mooing"){
    document.getElementById("picture").src = "cow.jpg";
  
}
else if(results[0].label=="roaring"){
    document.getElementById("picture").src = "images.png";
    
}
else{
    document.getElementById("picture").src="uf.png";
}
}
}
