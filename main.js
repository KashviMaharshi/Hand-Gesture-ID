Webcam.set({
	width:350,
	height:250,
	image_format:'png',
	png_quality:90
	});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
	Webcam.snap(function(data_uri) {
		document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
		});
	}
console.log('ml5 version:',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/pfA9AomvH/model.json',modelLoaded);

function modelLoaded() {
	console.log('Model Loaded');
	}
function check() {
	img=document.getElementById('captured_image');
	classifier.classify(img, gotResult);
	}

function speak() {
	var synth = window.speechSynthesis;
	speak_data1 = "The first identification is " + id1;
	speak_data2 = "The second identification is "+ id2;
	var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
	synth.speak(utterThis);
}

function gotResult(error, results) {
	if (error) {
		console.error(error);
		}
	else {
		console.log(results);
		document.getElementById("result_emotion_name").innerHTML = results[0].label;
		document.getElementById("result_emotion_name2").innerHTML = results[1].label;
		id1 = results[0].label;
		id2 = results[1].label;
		speak();
		  if (results[0].label == "Stop") {
			document.getElementById("update_emoji").innerHTML = "&#9995;";
			}
		if (results[0].label == "Peace") {
			document.getElementById("update_emoji").innerHTML = "&#9996;";
			}
		if (results[0].label == "Nice") {
			document.getElementById("update_emoji").innerHTML = "&&#128076;";
			}
		if (results[0].label == "Thumbs up") {
			document.getElementById("update_emoji").innerHTML = "&#128077;";
			}
		if (results[0].label == "Thumbs down") {
			document.getElementById("update_emoji").innerHTML = "&#128078;";
			}
		if (results[0].label == "Rocking") {
			document.getElementById("update_emoji").innerHTML = "&#129304;";
			}
			if (results[0].label == "Clap") {
			document.getElementById("update_emoji").innerHTML = "&#128079;";
			}
		if (results[1].label == "Stop") {
			document.getElementById("update_emoji2").innerHTML = "&#9995;";
			}
		if (results[1].label == "Peace") {
			document.getElementById("update_emoji2").innerHTML = "&#9996;";
			}
		if (results[1].label == "Nice") {
			document.getElementById("update_emoji2").innerHTML = "&&#128076;";
			}
		if (results[1].label == "Thumbs up") {
			document.getElementById("update_emoji2").innerHTML = "&#128077;";
			}
		if (results[1].label == "Thumbs down") {
			document.getElementById("update_emoji2").innerHTML = "&#128078;";
			}
		if (results[1].label == "Rocking") {
			document.getElementById("update_emoji2").innerHTML = "&#129304;";
			}
			if (results[1].label == "Clap") {
			document.getElementById("update_emoji2").innerHTML = "&#128079;";
			}
		}
	}

