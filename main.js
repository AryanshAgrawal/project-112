gesture_result_1 = "";
Webcam.set({
    width: 340,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function takesnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured" src="' + data_uri + '">';
    });
}
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/sCvmriLQl/model.json', modelloaded);
function modelloaded() {
    console.log('modelloaded');
}

function predictgesture() {
    img = document.getElementById("captured");
    classifier.classify(img, gotresult);
    console.log("results");
}

function gotresult(error, results) {

    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("gesture_name_1").innerHTML = results[0].label;
        gesture_result_1 = results[0].label;
        speak();
        if (gesture_result_1 == "Amazing") {
            document.getElementById("gesture_1").innerHTML = "&#128077;";
        }
        if (gesture_result_1 == "Best") {
            document.getElementById("gesture_1").innerHTML = "&#128076;";
        }
        if (gesture_result_1 == "Victory") {
            document.getElementById("gesture_1").innerHTML = "&#128096;";
        }
    }

}
function speak() {
    var synth = window.speechSynthesis;
    speakdata_1 = "The Gesture is " + gesture_result_1;
    var utterthis = new SpeechSynthesisUtterance(speakdata_1);
    synth.speak(utterthis);
}