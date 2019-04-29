

export const textToSpeech = () => {
    var text = "Hello World This is our first command"
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.onend = function (e) {
        console.log('Finished in ' + event.elapsedTime + ' seconds.');
    };

    speechSynthesis.speak(msg);
}
