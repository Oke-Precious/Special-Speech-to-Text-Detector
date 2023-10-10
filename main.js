
let detectSpeech=()=>{
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
    textbox.style.display = "flex";
    arrow.style.display = "block";

    recognition.onstart = function(){
        mic.innerHTML = `<img src="broadcast-8440_256.gif" alt="">`
        action.innerHTML = "listening, please speak...";
    }
    recognition.onspeeched = function(){
        action.innerHTML = "stopped listening, hope you are done...";
        recognition.stop();
    }
    recognition.onresult = function(event){
        mic.innerHTML = `<img src="kindpng_29297.png" alt="" class="mimg">`
        var transcript = event.results[0][0].transcript;
        var confidence = event.results[0][0].confidence;
        textContainer.innerHTML = transcript;     
                      
    }
    recognition.start()

}
