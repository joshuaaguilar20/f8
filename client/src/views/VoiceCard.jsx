import React from 'react'
import { Card, CardHeader, CardBody, Button } from 'reactstrap'

try {
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
  speechSynthesis.cancel()
  var u = new SpeechSynthesisUtterance();
  u.text = this.props.prompt
}
catch (e) {
  console.error(e);

}

class VoiceCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listening: false
    }
    this.child = React.createRef();
    this.toggleListen = this.toggleListen.bind(this)
  }

  handleListen = () => {
    console.log('I am Listening ')
    if (this.state.listening) recognition.start()

    let finalTranscript = ''
    recognition.onresult = event => {
      let interimTranscript = ''

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + ' ';
        else interimTranscript += transcript;
      }
      document.getElementById('interim').innerHTML = interimTranscript
      document.getElementById('final').innerHTML = finalTranscript
      recognition.onend = function () {
        console.log('Speech recognition service disconnected');

        recognition.stop()
        if (finalTranscript.includes('yes') || interimTranscript.includes('yes')) {
        //  this.props.onChange
        }
        else if(finalTranscript.includes('no') || interimTranscript.includes('no')) {
          alert('Follow up with Emergency Services if Concerns Presist')
        }
      }

    }
  }

  toggleListen() {
    this.setState({
      listening: !this.state.listening
    }, this.handleListen)
  }

  render(){
    console.log(this.props.prompt)
    return (
    <Card>
    <CardHeader>
      <h5 className="title">Infant CPR Flow </h5>
    </CardHeader>
    <CardBody>
      <Button onClick={() => speechSynthesis.speak(u)}>Start infant CPR WorkFlow</Button>
      <Button onClick={this.toggleListen}>
        <span>
          <i className="fa fa-microphone fa-6" aria-hidden="true"></i>
        </span>
      </Button>
      <div id='interim' ></div>
      <div id='final'></div>
    </CardBody>
  </Card>
  )
    }
}

export default VoiceCard