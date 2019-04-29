import React from "react";
import { infant } from '../apis/infantTranscript';
// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Button } from "reactstrap";
import Slider from '../components/Sliders'


try {
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
  speechSynthesis.cancel()
  var u = new SpeechSynthesisUtterance();
}
catch (e) {
  console.error(e);

}
var i = 1;
recognition.continous = true
recognition.interimResults = true
recognition.lang = 'en-US'
var t;
u.rate = .80;

u.onstart = (event) => {
  t = event.timeStamp;
  console.log(t);
};
u.text = infant[i];
u.onend = (event) => {
  t = event.timeStamp - t;
  console.log(event.timeStamp);
  console.log((t / 1000) + ' seconds');
};

class AdultCPR extends React.Component {
  constructor() {
    super()
    this.state = {
      listening: false
    }
    this.child = React.createRef();
    this.toggleListen = this.toggleListen.bind(this)
  }


  changPic = () => {
    this.child.current.goToNextSlide()
  };

  toggleListen() {
    this.setState({
      listening: !this.state.listening
    }, this.handleListen)
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
        if (finalTranscript.includes('no') || interimTranscript.includes('no')) {
          alert('You Answered Yes ')
        } else {
          alert('Follow up with Emergency Services if Concerns Presist')
        }
      }

    }
  }

  render() {
    return (

      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Infant CPR Flow </h5>
              </CardHeader>
              <CardBody>
                <Button onClick={() => speechSynthesis.speak(u)}>Start infant CPR WorkFlow</Button>
                <Button onClick={this.toggleListen}>
                  <span>
                    <i class="fa fa-microphone fa-6" aria-hidden="true"></i>
                  </span>
                </Button>
                <div id='interim' ></div>
                <div id='final'></div>
              </CardBody>
            </Card>
          </Col>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Natural language processing</h5>
                <h5 className="title">{infant[i]}</h5>
              </CardHeader>
              <Slider ref={this.child} />

            </Card>
          </Col>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Natural language processing</h5>
              </CardHeader>
              <CardBody>
                <Col md="8">
                  <Card>
                    <CardHeader>
                      <h5 className="title">Natural language processing</h5>
                    </CardHeader>
                    <CardBody>

                    </CardBody>
                  </Card>
                </Col>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div >
    );
  }
}

export default AdultCPR;
