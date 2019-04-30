import React from "react";
import { infant } from '../apis/infantTranscript';
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col, Button } from "reactstrap";
import Slider from '../components/Sliders'
speechSynthesis.cancel();





class AdultCPR extends React.Component {
  constructor() {
    super()
    this.state = {
      listening: false,
      count: 1,
      on: true,
      finalTranscript: ''
    }
    this.child = React.createRef();
  }


  changPic = () => {
    this.child.current.goToNextSlide()
  };

  toggleListen = () => {
    this.setState({
      listening: !this.state.listening
    }, this.handleListen)
  }
  speakText = (text) => {
    speechSynthesis.cancel();
    console.log('Worked')
    const utterance = new SpeechSynthesisUtterance(infant[this.state.count])
    var voices = speechSynthesis.getVoices()
    console.log(voices)
    utterance.rate = .80
    speechSynthesis.speak(utterance)
  }

  checkResponse = async () => {
    if (this.state.count === 1) {
      if (this.state.finalTranscript.includes('no')) {
        this.state.count++
        this.setState({ count: this.state.count })
        console.log(this.state.count)
        await this.speakText()
      }
    } else if (this.state.count === 2) {
      if (this.state.finalTranscript.includes('yes')) {
        this.state.count++
        this.setState({ count: this.state.count })
        console.log(this.state.count)
        await this.speakText()
      }
    }

  }



  handleListen = () => {
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition = new SpeechRecognition();
    recognition.continous = true
    recognition.interimResults = true
    recognition.lang = 'en-US'
    console.log('I am Listening ')
    if (this.state.listening) recognition.start()

    let finalTranscript = ''
    recognition.onresult = event => {
      let interimTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + ' ';
        else interimTranscript += transcript;
      }
    }

    recognition.onend = async () => {
      console.log('Speech recognition service disconnected');
      console.log(finalTranscript)
      await this.setState({ finalTranscript })
      await recognition.stop()
      this.checkResponse()
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
                <Button onClick={() => this.speakText()}>Start infant CPR WorkFlow</Button>
                <Button disabled={false} onClick={this.toggleListen}>
                  <span>
                    <i class="fa fa-microphone fa-6" aria-hidden="true"></i>
                  </span>
                </Button>
                <div id='interim'>{this.state.finalTranscript}</div>
                <div id='final'></div>
              </CardBody>
            </Card>
          </Col>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Natural language processing</h5>
                <h5 className="title">{infant[this.state.count]}</h5>
              </CardHeader>
              <Slider ref={this.child} />
            </Card>
          </Col>
          <Col md="8">
            <Card>

              <CardHeader>
                <h5 className="title">Share</h5>
                <div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width="500" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
              </CardHeader>
              <CardBody>
                <div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-width="1000" data-numposts="5"></div>
              </CardBody>
            </Card>
          </Col>

        </Row>
      </div >
    );
  }
}

export default AdultCPR;
