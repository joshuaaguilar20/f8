import React from 'react'
import { Card, CardHeader, CardBody, CardImg, CardText, Row, Col, Alert, Button } from "reactstrap";
import { textToSpeech } from '../../helpers/textToSpeech'
import VoiceCard from '../../views/VoiceCard'

var prompt = 'Is the victim responsive? How to check responsiveness: Is the victim breathing AND does the victim have a pulse? Is the pulse definitely felt within 10 seconds? Shout for nearby help. Activate emergency response system via mobile device (if appropriate).'
var question = 'Is there normal breathing and pulse... or is there no normal breathing but no pulse... or is there no breathing, only gasping and no pulse'

class Responsiveness extends React.Component {

  componentDidMount() {
    textToSpeech(prompt)
    textToSpeech(question)
  }
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md='8'>
              <VoiceCard />
              <Alert color='success' style={{ fontSize: '36px' }}>{prompt}</Alert>
              <Card>
                <CardBody>
                  <CardImg src='https://s3.us-east-2.amazonaws.com/save-a-life/childBreathingPulse.gif' />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md='8'>

              <div>
                <Row style={{ justifyContent: 'center', marginBottom: '200px' }}>
                  <Button style={{ fontSize: '18px' }} onClick={() => this.props.onChange(4)}>Normal breathing, has pulse</Button>
                  <Button style={{ fontSize: '18px' }} onClick={() => this.props.onChange(5)}>No normal breathing, has pulse</Button>
                  <Button style={{ fontSize: '18px' }} onClick={() => this.props.onChange(6)}>No breathing or only gasping, no pulse</Button>
                </Row>
                <Row style={{ height: '100px' }}></Row>
              </div>
            </Col>
          </Row>
        </div>
      </>
    )
  }
}

export default Responsiveness