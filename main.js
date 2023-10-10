
let detectSpeech=()=>{
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
    textContainer.innerHTML="Wetin ypu dey talk";
    textbox.style.display = "flex";

    recognition.onstart = function(){
        action.innerHTML = "listening, please speak...";
    }
    recognition.onspeeched = function(){
        action.innerHTML = "stopped listening, hope you are done...";
        recognition.stop();
    }
    recognition.onresult = function(event){
        var transcript = event.results[0][0].transcript;
        var confidence = event.results[0][0].confidence;
        textContainer.innerHTML = `<b>Text:</b> ${transcript}
                                    <br/> 
                                    <b>Confidence:</b>  ${confidence*100} % 
                                     `
        textContainer.classList.remove("hide");                            
    }
    recognition.start()

}